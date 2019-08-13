<template lang="pug">
  div
    v-toolbar(color="primary")
      v-toolbar-title
       | Test for you
      v-spacer
      v-toolbar-items
        router-link.v-btn(to="/users") Users
        router-link.v-btn(to="/cources") Cources
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
          box-shadow: unset
          font-size 16px
          color: $white
</style>
