import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VBtn,
  VContainer,
  VContent,
  VFlex,
  VForm,
  VLayout,
  VTextField,
  VTooltip,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp, // required
    VBtn,
    VContainer,
    VContent,
    VFlex,
    VForm,
    VLayout,
    VTextField,
    VTooltip,
  },
  theme: {
    primary: '#333333',
    secondary: '#9D9C9C',
    accent: '#004FFF',
    error: '#FF7070',
  },
});
