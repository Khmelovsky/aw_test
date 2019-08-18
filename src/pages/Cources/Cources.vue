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
        tr(v-for="(cource,index) in filteredCources")
          td(class="column text-xs-left")
            | {{cource.cource}}
          td(class="column text-xs-left")
            | {{cource.code}}
          td.actions.text-xs-right
            v-btn
              v-icon(color="orange" @click.stop="editModal = true") edit
            v-btn
              v-icon(color="red" @click="deleteCource(index)") delete

          v-dialog(v-model="editModal" max-width="500")
            v-card
              v-card-title.headline.primary.lighten-0(primary-title)
                | Edit Cource

</template>

<script>

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
      cources: [],
      ind: 0,
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
    editCource(t, i) {
      this.edit = !this.edit;
      this.cource = t.cource;
      this.description = t.description;
      this.ind = i;
    },
    /* updateCource(event) {
      event.preventDEfault();
      this.edit = !this.edit;
      const courceDb = {
        task: this.task,
        description: this.description,
      };
      this.cources[this.ind] = courceDb;
      localStorage.setItem('cources', JSON.stringify(cources));
      const courceStorage = JSON.parse(localStorage.getItem('cources'));
      this.cources = courceStorage;
      this.cource = '';
      this.description = '';
    }, */
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


</style>
