<template lang="pug">
  .Cources
    v-card-title
      | Users
    v-data-table(:headers="titles" :items="cources" hide-actions  class="tableWrap")
      template(v-slot:items="props")
        td 
          | {{ props.item.name }}
        td 
          | {{ props.item.code }}


</template>

<script>

export default {
  name: 'Users',
  data () {
    return {
      titles: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Code',
          value: 'code',
          sortable: false,
        },
      ],
      cources: [
        {
          name: 'User 1',
          code: 'po012343',
        },
      ]
    }
},
};
</script>


<style lang="stylus">
@import '~Styles/_variables'
.Cources
  margin-top: 25px
  .v-card
    &__title
      display: flex
      justify-content: center
      font-size: 32px
  .tableWrap
    margin-top: 10px
    .v-table
      thead
        background-color: $primary
        th
          font-size: 18px
          color: $white
      tbody
        td
          font-size: 16px
          &:last-child
            text-transform: uppercase


</style>
