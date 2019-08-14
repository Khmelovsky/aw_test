<template lang="pug">
  .Cources
    v-card-title
      | Cources
    v-data-table(:headers="titles" :items="cources" hide-actions  class="tableWrap")
      template(v-slot:items="props")
        td
          | {{ props.item.cource }}
        td
          | {{ props.item.code }}
        td.actions.text-xs-right
          v-btn
            v-icon(color="orange") edit
          v-btn
            v-icon(color="red") delete
</template>

<script>

export default {
  name: 'Cources',
  data() {
    return {
      cources: [],
      titles: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Code',
          value: 'code',
          sortable: false,
        },
        {
          text: 'Action',
          align: 'right',
          sortable: false,
        }
      ],
    };
  },
  created: function() {
      let storage = JSON.parse(localStorage.getItem('cources'));
      if(storage === null) this.cources=[];
      else this.cources=storage;
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
