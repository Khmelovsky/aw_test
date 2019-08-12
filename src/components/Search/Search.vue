<template lang="pug">
    v-toolbar
        h1 HELLO
        v-text-field(hide-details prepand-icon="search" single-line)
</template>

<script>
 export default {
  name: 'Search',
  components: {
    Search,
  },
};
</script>
<style lang="stylus" scoped>
  @import '~Styles/_variables'
</style>
