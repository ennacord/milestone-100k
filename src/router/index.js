import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GameFlappyEnna from '../views/GameFlappyEnna.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/flappy-enna',
    name: 'Flappy Enna',
    component: GameFlappyEnna,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
