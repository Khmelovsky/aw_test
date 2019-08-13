<template lang="pug">
    .CountFilter
      v-select(solo label="Components" :items="components")
</template>

<script>
export default {
  name: 'CountFilter',
  data() {
    return {
      components: [
        'test1', 'test2', 'test3',
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
  .CountFilter
    height: 50px
</style>
