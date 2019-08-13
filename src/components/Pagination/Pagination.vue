<template lang="pug">
   .Pagination
      v-pagination(v-model="page" :length="4" circle)
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style lang="stylus">


</style>
