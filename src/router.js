import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "news",      
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/News.vue")
    },
    {
      path: "/news/edit/:id",
      name: "Edit news",      
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EditNews.vue")
    },
    {
      path: "/news/add",
      name: "Add user",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AddNews.vue")
    }
  ]
});
