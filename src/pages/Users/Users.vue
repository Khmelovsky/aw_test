<template lang="pug">
  .Users
    v-card-title.header
      | Users
    v-data-table(:headers="titles" :items="users" hide-actions  class="tableWrap")
      template(v-slot:items="props")
        td
          | {{ props.item.user }}
        td
          | {{ props.item.email }}
        td
          | {{ props.item.status }}
        td.actions.text-xs-right
          v-btn
            v-icon(color="orange") edit
          v-btn
            v-icon(color="red" @click="deleteUser(index)") delete
</template>

<script>

export default {
  name: 'Users',
  data() {
    return {
      users: [],
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
        {
          text: 'Action',
          align: 'right',
          sortable: false,
        },
      ],
    };
  },
  created() {
    const storage = JSON.parse(localStorage.getItem('users'));
    if (storage === null) this.users = [];
    else this.users = storage;
  },
  methods: {
    deleteUser(index) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    },
  },
};
</script>


<style lang="stylus">
@import '~Styles/_variables'
.Users
  .header
    color: $black
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
