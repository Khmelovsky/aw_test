<template lang="pug">
  .AddNew
    v-btn(color="error" fab dark medium @click.stop="dialog = true")
        v-icon(x-large) add
    v-dialog(v-model="dialog" max-width="500")
      v-card
        v-card-title.headline.primary.lighten-0(primary-title)
          | Add New

        v-tabs(v-model="tab")
          v-tab
            | Cource
          v-tab
            | User

        v-tabs-items(v-model="tab")
          v-tab-item.modalForm
            v-form
              v-text-field(label="Name" required)
              v-text-field(label="Code" required)
              v-btn(block color="primary" dark) Submit

          v-tab-item.modalForm
            v-form
              v-text-field(label="Name" required)
              v-text-field(label="E-mail" required)
              v-text-field(label="Status" required)
              v-btn(block color="primary" dark) Submit
</template>

<script>
export default {
  name: 'AddNew',
  data() {
    return {
      dialog: false,
      tab: null,
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~Styles/_variables'
  .v-tabs
    &__div
      width: 50%
  .v-card
    &__title
      color: $white
  .v-window
    padding: 30px 20px
  .modalForm
    .v-btn
      text-transform uppercase
      font-size: 18px
      letter-spacing 0.5px
</style>
