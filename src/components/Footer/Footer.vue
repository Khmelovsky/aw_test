<template lang="pug">
  v-footer(color='primary')
    div.author
      | Andrii Khmelovskyi
    div.current_date
      | &copy; {{ new Date().getFullYear() }}
</template>


<style lang="stylus" scoped>
@import '~Styles/_variables'
footer
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  padding: 0 20px
  .current_date
    color: $white
  .author
    color: $white  
</style>

