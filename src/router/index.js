import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/home';
import all from '@/components/all';
import active from '@/components/active';
import completed from '@/components/completed';

Vue.use(VueRouter);
Vue.config.devtools = true;
export default new VueRouter({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home,
          children: [
              {
                path:'all',
                name:'all',
                component:all,
              },
              {
                path:'/active',
                name:'active',
                component:active,
              },
              {
                path:'/completed',
                name:'completed',
                component:completed,
              },
          ]
        },
    ],
});