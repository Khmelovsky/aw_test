<template lang="pug">
  .PageMain
    v-container
      v-layout(row)
        v-flex(xs12)
          .controlComponents
            AddNew
            Search(@inputData="searchFilter")
            CountFilter
      v-layout(row)
        v-flex(xs12)
          router-view(:filteredCource="childData" :filteredUser="childData")
      v-layout(row)
        v-flex(xs-12)
          .pageControl
            Pagination
</template>

<script>
import AddNew from 'Components/AddNew/AddNew';
import Search from 'Components/Search/Search';
import CountFilter from 'Components/CountFilter/CountFilter';
import Pagination from 'Components/Pagination/Pagination';

export default {
  name: 'Main',
  components: {
    AddNew,
    Search,
    CountFilter,
    Pagination,
  },
  data() {
    return {
      childData: '',
    };
  },
  methods: {
    searchFilter(data) {
      this.childData = data;
    },
  },
};
</script>


<style lang="stylus" scoped>
  .controlComponents
    display flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: flex-end
    margin-top: 40px
    .CountFilter
      margin-left: auto
  .pageControl
    .Pagination
      display: flex
      justify-content: center
      margin-bottom: 40px

</style>
