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
              v-btn(block color="primary" dark :disabled="!valid" @click="addCource(cource,code,$event)") Submit

          v-tab-item.modalForm
            v-form
              v-text-field(label="Name" v-model="name" :rules="nameRule" required)
              v-text-field(label="E-mail" v-model="email" :rules="emailRule" required)
              v-text-field(label="Status" v-model="email" :rules="emailRule" required)
              v-btn(block color="primary" dark ) Submit
</template>

<script>
const storage = JSON.parse(localStorage.getItem('cources'));
export default {
  name: 'AddNew',
  data() {
    return {
      dialog: false,
      tab: null,
      lazy: false,
      cources: storage,
      valid: true,
      cource: '',
      courceRule: [
        v => !!v || 'Name is required',
      ],
      code: '',
      codeRule: [
        v => !!v || 'Code is required',
      ],
    };
  },
  methods: {
    addCource(cource, code, event) {
      event.preventDefault();
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
    .v-btn
      text-transform uppercase
      font-size: 18px
      letter-spacing 0.5px

</style>
