const Main = () => import(/* webpackChunkName: 'Main' */ 'Pages/Main/Main');
const Cources = () => import(/* webpackChunkName: 'Cources' */ 'Pages/Cources/Cources');

export default [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/cources',
    name: 'cources',
    component: Cources,
  },
];
