import { createRouter, createWebHashHistory } from 'vue-router';
import PokeList from './../components/PokeList.vue';
import PokeOne from './../components/PokeOne.vue';

const routes = [
  { path: '/', redirect: { name: 'PokeList' } },
  { path: '/pokelist', name: 'PokeList', component: PokeList },
  { path: '/pokeone/:name', name: 'PokeOne', component: PokeOne, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
