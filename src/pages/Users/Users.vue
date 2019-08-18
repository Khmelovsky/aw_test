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
        tr(v-for="(userRow,index) in filteredUsers")
          td(class="column text-xs-left")
            | {{userRow.user}}
          td(class="column text-xs-left")
            | {{userRow.email}}
          td
            v-chip(:color="statusColor(userRow.status)")
              | {{userRow.status}}
          td.actions.text-xs-right
            v-btn
              v-icon(color="orange" @click.prevent="editUser(index); editModal = true;") edit
            v-btn
              v-icon(color="red" @click="deleteUser(index)") delete

    v-dialog(v-model="editModal" max-width="500")
      v-card
        v-card-title.headline.primary.lighten-0(primary-title)
          | Edit User
        v-form.updateForm(ref="userUpdate")
            v-text-field(label="Name" v-model="editUsers.user")
            v-text-field(label="Email" v-model="editUsers.email")
            v-select(v-model="editUsers.status" :items="statusList" label="Status" )
            v-btn(block color="primary" dark @click.prevent="updateUser(user,email,status,$event);editModal = false;") Update
</template>

<script>
const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
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
      users: storageUsers,
      resultUser: '',
      editModal: false,
      user: '',
      email: '',
      status: '',
      editUsers: {
        user: '',
        email: '',
        status: '',
      },
      count: -1,
      statusList: [
        'Active',
        'Inactive',
      ],
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
    editUser(index) {
      this.editUsers = this.users[index];
    },
    updateUser() {
      const userDb = {
        user: this.user,
        email: this.email,
        status: this.status,
      };
      this.users[this.count] = userDb;
      localStorage.setItem('users', JSON.stringify(this.users));
      const userStorage = JSON.parse(localStorage.getItem('users'));
      this.cources = userStorage;
      this.user = '';
      this.email = '';
      this.status = '';
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
.updateForm
  padding: 30px 20px
  .v-text-field
    margin-bottom 15px
  .v-btn
    text-transform uppercase
    font-size: 18px
    letter-spacing 0.5px
</style>
