<template lang="pug">
  .AddNew
    v-btn(color="error" fab dark medium @click.stop="dialog = true")
        v-icon(x-large) add
    v-dialog(v-model="dialog" max-width="500")
      v-card
        v-tabs(v-model="tab")
          v-tab
            | Cources
          v-tab
            | Users

        v-tabs-items(v-model="tab")
          v-tab-item
            v-card-text
              | AAAAAAAAAAAA
          v-tab-item
            v-card-text
              | QQQQQQQQQQQQ
</template>

<script>
export default {
  name: 'AddNew',
  data() {
    return {
      dialog: false,
      tab: null,
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
};
</script>

<style lang="stylus" scoped>


</style>
