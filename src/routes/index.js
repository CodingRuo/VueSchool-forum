import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '../pages/PageHome.vue';
import PageThreadShow from '../pages/PageThreadShow.vue';
import PageNotFound from '../pages/PageNotFound.vue';
import sourceData from '../data.json';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
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
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
