<template lang="pug">
  #app
    v-app#luxy
      Header
      v-content
        router-view
      Footer
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import luxy from 'luxy.js';


export default {
  name: 'App',
  components: {
    Header: () => import(/* webpackChunkName: 'Header' */ 'Components/Header/Header'),
    Footer: () => import(/* webpackChunkName: 'Footer' */ 'Components/Footer/Footer'),
  },
  computed: {
    ...mapGetters('router', [
      'routeLoading',
    ]),
  },
  mounted() {
    this.setRouter(this.$router);
    this.setViewDimensions();
    window.addEventListener('resize', this.setViewDimensions);
    luxy.init();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setViewDimensions);
  },
  methods: {
    ...mapActions('router', [
      'setRouter',
    ]),
    ...mapActions('view', [
      'setScreenWidth',
    ]),
    setViewDimensions() {
      this.setScreenWidth(document.documentElement.clientWidth);
    },
  },
};
</script>

<style lang="styl">
@import 'styles/app';
</style>
