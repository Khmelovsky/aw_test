<template lang="pug">
  .Users
    v-table(:headers="headers" :items="desserts" sort-by="calories")



</template>

<script>

export default {
  name: 'Users',

};
</script>


<style lang="stylus" scoped>


</style>
