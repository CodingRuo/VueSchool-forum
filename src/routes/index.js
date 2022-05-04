import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ThreadShow from '../pages/ThreadShow.vue';
import NotFound from '../pages/NotFound.vue';
import sourceData from '../data.json';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      // if exists continue
      if (threadExists) {
        return next();
      } else {
        // if doesnt exist redirect to not found
        next({
          name: 'NotFound',
          params: {
            pathMatch: to.path.substring(1).split('/'),
            // preserve existing query and hash
            query: to.query,
            hash: to.hash,
          },
        });
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
