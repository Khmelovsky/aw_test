<template lang="pug">
  .PageMain
    .controlComponents
      AddNew
      Search
      CountFilter
</template>

<script>
import AddNew from 'Components/AddNew/AddNew';
import Search from 'Components/Search/Search';
import CountFilter from 'Components/CountFilter/CountFilter';

export default {
  name: 'Main',
  components: {
    AddNew,
    Search,
    CountFilter,
  },
};
</script>


<style lang="stylus" scoped>


</style>
