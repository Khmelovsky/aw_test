<template lang="pug">
  .Cources
    v-card-title.header
      | Cources
    table(class="v-datatable v-table theme--light" v-show="cources.length")
      thead
        tr
          th(v-for="header in headers" class="column")
            | {{header}}
      tbody
        tr(v-for="(courceRow,index) in filteredCources")
          td(class="column text-xs-left")
            | {{courceRow.cource}}
          td(class="column text-xs-left")
            | {{courceRow.code}}
          td.actions.text-xs-right
            v-btn
              v-icon(color="orange" @click.prevent="editCource(index); editModal = true;") edit
            v-btn
              v-icon(color="red" @click="deleteCource(index)") delete

    v-dialog(v-model="editModal" max-width="500")
      v-card
        v-card-title.headline.primary.lighten-0(primary-title)
          | Edit Cource
        v-form.updateForm(ref="courseUpdate")
            v-text-field(label="Name" v-model="editCources.cource" required)
            v-text-field(label="Code" v-model="editCources.code" required)
            v-btn(block color="primary" dark @click.prevent="updateCource($event); editModal = false;") Update

</template>

<script>
const storageCources = JSON.parse(localStorage.getItem('cources') || '[]');
export default {
  name: 'Cources',
  props: {
    filteredCource: {
      type: String,
    },
  },
  data() {
    return {
      headers: ['Name', 'Code', 'Action'],
      cources: storageCources,
      cource: '',
      code: '',
      editCources: {
        cource: '',
        code: '',
      },
      count: -1,
      editModal: false,
      resultCource: '',
    };
  },
  computed: {
    filteredCources() {
      const self = this;
      return this.cources.filter(query => (query.cource.toLowerCase().indexOf(self.resultCource.toLowerCase()) >= 0)
               || (query.code.toLowerCase().indexOf(self.resultCource.toLowerCase()) >= 0));
    },
  },
  watch: {
    filteredCource() {
      this.resultCource = this.filteredCource;
    },
  },
  created() {
    const storage = JSON.parse(localStorage.getItem('cources'));
    if (storage === null) this.cources = [];
    else this.cources = storage;
  },
  methods: {
    editCource(index) {
      this.editCources = this.cources[index];
      // console.log(this.editCources);
    },
    updateCource() {
      const courceDb = {
        cource: this.cource,
        code: this.code,
      };
      this.cources[this.count] = courceDb;
      localStorage.setItem('cources', JSON.stringify(this.cources));
      const courceStorage = JSON.parse(localStorage.getItem('cources'));
      this.cources = courceStorage;
      this.cource = '';
      this.description = '';
    },
    deleteCource(index) {
      this.cources.splice(index, 1);
      localStorage.setItem('cources', JSON.stringify(this.cources));
    },
  },
};
</script>

<style lang="stylus">
@import '~Styles/_variables'
.Cources
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
