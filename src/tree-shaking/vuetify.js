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
  VIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VFooter,
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
    VIcon,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VFooter,
  },
  theme: {
    primary: '#1976d2',
    secondary: '#9D9C9C',
    accent: '#004FFF',
    error: '#FF7070',
  },
});
