import { SET_ALL } from './mutation-types';

export default {
  setScreenWidth({ commit }, screenWidth) {
    commit(SET_ALL, { screenWidth });
  },
};
