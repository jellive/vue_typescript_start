import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Prop from './views/parent_props.vue'
import Watch from './views/parent_watch.vue'
import Emit from './views/parent_emit.vue'
import inject from './views/parent_inject.vue'
import Message from './views/message.vue'
import Model from './views/parent_model.vue'
import Mixins from './views/mixins.vue'
import Count from './views/count.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/prop',
      name: 'Prop',
      component: Prop,
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch,
    },
    {
      path: '/inject',
      name: 'Inject',
      component: inject,
    },
    {
      path: '/emit',
      name: 'Emit',
      component: Emit,
    },
    {
      path: '/model',
      name: 'Model',
      component: Model,
    },
    {
      path: '/mixins',
      name: 'Mixins',
      component: Mixins,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    }
  ],
});
