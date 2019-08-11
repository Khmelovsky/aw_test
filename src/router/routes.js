const Main = () => import(/* webpackChunkName: 'Main' */ 'Pages/Main/Main');

export default [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
];
