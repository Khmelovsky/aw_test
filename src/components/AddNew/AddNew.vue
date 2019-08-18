<template lang="pug">
  .AddNew
    v-btn(color="error" fab dark medium @click.stop="dialog = true")
        v-icon(x-large) add
    v-dialog(v-model="dialog" max-width="500")
      v-card
        v-card-title.headline.primary.lighten-0(primary-title)
          | Add New

        v-tabs(v-model="tab")
          v-tab
            | Cource
          v-tab
            | User
        v-tabs-items(v-model="tab")
          v-tab-item.modalForm
            v-form(ref="form" v-model="valid" :lazy-validation="lazy")
              v-text-field(label="Name" v-model="cource" :rules="courceRule" required)
              v-text-field(label="Code" v-model="code" :rules="codeRule" required)
              v-btn(block color="primary" dark :disabled="!valid" @click.prevent="addCource(cource,code,$event);dialog = false;") Submit

          v-tab-item.modalForm
            v-form(ref="form" v-model="valid" :lazy-validation="lazy")
              v-text-field(label="Name" v-model="user" :rules="userRule" required)
              v-text-field(label="E-mail" v-model="email" :rules="emailRule" required)
              v-select(v-model="status" :items="statusList" :rules="[v => !!v || 'Item is required']" label="Status" required)
              v-btn(block color="primary" dark :disabled="!valid" @click.prevent="addUser(user,email,status,$event);dialog = false;") Submit
</template>

<script>
const storageCources = JSON.parse(localStorage.getItem('cources') || '[]');
const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
export default {
  name: 'AddNew',
  data() {
    return {
      dialog: false,
      tab: null,
      lazy: false,
      cources: storageCources,
      users: storageUsers,
      valid: true,
      cource: '',
      status: null,
      statusList: [
        'Active',
        'Inactive',
      ],
      statuses: [],
      courceRule: [
        v => !!v || 'Name is required',
      ],
      code: '',
      codeRule: [
        v => !!v || 'Code is required',
      ],
      user: '',
      userRule: [
        v => !!v || 'Full name is required',
        v => (v && v.length >= 4) || 'Name sould be not less then 4 characters',
      ],
      email: '',
      emailRule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    addCource() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$refs.form.resetValidation();
      }
      this.cources.push({
        cource: this.cource,
        code: this.code,
      });
      localStorage.setItem('cources', JSON.stringify(this.cources));
      this.cource = '';
      this.code = '';
    },
    addUser() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$refs.form.resetValidation();
      }
      this.users.push({
        user: this.user,
        email: this.email,
        status: this.status,
      });
      localStorage.setItem('users', JSON.stringify(this.users));
      this.user = '';
      this.email = '';
    },
  },
};
</script>

<style lang="stylus" >
@import '~Styles/_variables'
  .v-tabs
    &__slider-wrapper
      width: 250px!important
    &__div
      width: 50%

  .v-card
    &__title
      color: $white
  .v-window
    padding: 30px 20px
  .modalForm
    .v-text-field
      margin-bottom 15px
    .v-btn
      text-transform uppercase
      font-size: 18px
      letter-spacing 0.5px
  .theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline)
    background-color: rgba(25, 118, 210, 0.5)!important
</style>
