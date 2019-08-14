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
        td
          | status
        td.actions.text-xs-right
          v-btn
            v-icon(color="orange") edit
          v-btn
            v-icon(color="red") delete


</template>

<script>

export default {
  name: 'Users',
  data() {
    return {
      titles: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'E-mail',
          value: 'email',
          sortable: false,
        },
         { text: 'Status',
           value: 'status',
           sortable: false,
        },
         { text: 'Actions',
           align: 'right',
           sortable: false,
        },
      ],
      cources: [
        {
          name: 'User 1',
          code: 'po012343',
        },
      ],
    };
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
  .actions
    .v-btn
      box-shadow: unset
      padding: 0
      min-width: auto
      background-color: unset!important
      &:first-child
        margin-right: 12px


</style>
