import CONFIG from 'Config';

export default {
  screenWidth: state => state.screenWidth,
  isTablet: state => state.screenWidth < CONFIG.breakpoints.md,
  isMobile: state => state.screenWidth <= CONFIG.breakpoints.sm,
  scrollOffsetTop: (state, getters) => (getters.isMobile ? -70 : -75),
  isIE: () => Boolean(/* @cc_on!@ */false || document.documentMode),
};
