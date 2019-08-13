<template lang="pug">
  .AddNew
    v-btn(color='error' fab dark medium @click.stop="dialog = true")
        v-icon(x-large) add
    v-dialog(v-model='dialog' max-width='500')
      v-card
        v-tabs
          v-tab(href="#tab-1") item 1
          v-tab(href="#tab-2") item 2
        v-tabs-items
          v-tab-item(id="tab-1")
            v-card
              v-card-text
                | lorem Ipsum
          v-tab-item(id="tab-2")
            v-card
              v-card-text
                | lorem Ipsumdsf

</template>

<script>
export default {
  name: 'AddNew',
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="stylus" scoped>


</style>
