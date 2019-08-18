<template lang="pug">
   .Search
      v-text-field(solo label="Search" append-icon="search" v-model="searchFilter" @keyup="submit")
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchFilter: '',
    };
  },
  methods: {
    submit() {
      this.$emit('inputData', this.searchFilter);
      // this.searchFilter = "";
    },
  },
};
</script>
<style lang="stylus">
  .Search
    margin-left: 30px
    height: 50px

</style>
