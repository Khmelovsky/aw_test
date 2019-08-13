<template lang="pug">
  div
    v-toolbar(color="deep-purple accent-4")
      v-toolbar-title
       | Test for you
      v-spacer
      v-toolbar-items
        v-btn(text='') Users
        v-btn(text='') Cources
</template>

<script>


export default {
  name: 'Header',
};
</script>
<style lang="stylus" scoped>
  @import '~Styles/_variables'
  .v-toolbar
    &__title
      color: $white
      font-size: 22px
    .v-toolbar
      &__items
        .v-btn
          background-color: $primary
          color: $white
          box-shadow: unset
          font-size 16px
</style>
