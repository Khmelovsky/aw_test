const Main = () => import(/* webpackChunkName: 'Main' */ 'Pages/Main/Main');
const Cources = () => import(/* webpackChunkName: 'Cources' */ 'Pages/Cources/Cources');
const Users = () => import(/* webpackChunkName: 'Users' */ 'Pages/Users/Users');

export default [
  { path: '/', redirect: '/cources' },
  {
    path: '/',
    name: 'home',
    component: Main,
    children: [
      {
        path: '/cources',
        name: 'cources',
        component: Cources,
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
      },
    ],
  },

];
