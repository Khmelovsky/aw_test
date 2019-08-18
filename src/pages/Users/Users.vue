<template lang="pug">
  .Users
    v-card-title.header
      | Users
    table(class="v-datatable v-table theme--light" v-show="users.length")
      thead
        tr
          th(v-for="header in headers" class="column")
            | {{header}}
      tbody
        tr(v-for="(user,index) in filteredUsers")
          td(class="column text-xs-left")
            | {{user.user}}
          td(class="column text-xs-left")
            | {{user.email}}
          td
            v-chip(:color="statusColor(user.status)")
              | {{user.status}}
          td.actions.text-xs-right
            v-btn
              v-icon(color="orange") edit
            v-btn
              v-icon(color="red" @click="deleteUser(index)") delete
</template>

<script>

export default {
  name: 'Users',
  props: {
    filteredUser: {
      type: String,
    },
  },
  data() {
    return {
      headers: ['Name', 'E-mail', 'Status', 'Action'],
      users: [],
      resultUser: '',
    };
  },
  computed: {
    filteredUsers() {
      const self = this;
      return this.users.filter(query => (query.user.toLowerCase().indexOf(self.resultUser.toLowerCase()) >= 0)
               || (query.email.toLowerCase().indexOf(self.resultUser.toLowerCase()) >= 0));
    },
  },
  watch: {
    filteredUser() {
      this.resultUser = this.filteredUser;
    },
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
    statusColor(status) {
      if (status === 'Active') return 'green';
      return 'red';
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
  table
    margin-top: 10px
    thead
      background-color: $primary
      th
        text-align: left
        font-size: 18px
        color: $white!important
        &:last-child
          text-align: right
    tbody
      td
        font-size: 16px
        .v-chip
          &__content
            color: $white
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
