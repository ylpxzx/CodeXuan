import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("views/Home")
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("views/pages/resume/TabResume/index")
  },
  {
    path: "/interest",
    name: "interest",
    component: () => import("views/pages/interest/index")
  },
  {
    path: "/code",
    name: "code",
    component: () => import("views/pages/code/index")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("views/pages/blog/index"),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import("views/pages/blog/blogHome")
      },
      {
        path: "/detail/:id",
        name: "detail",
        component: () => import("views/pages/blog/blogDetail")
      },
      {
        path: "/category",
        name: "category",
        component: () => import("views/pages/blog/blogCategory")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  // mode: "history", //打包项目要把mode: history注释掉
  base: process.env.BASE_URL,
  routes
});

export default router;
