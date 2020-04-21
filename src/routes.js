import MainBody from "./components/MainBody.vue";
import About from "./components/About.vue";
import BlogDetails from "./components/blog/BlogDetails.vue";

export const routes = [{
  path: '/',
  components: {
    default: MainBody,
  },
  name: 'Home'
},
  {
    path: '/about',
    components: {
      default: About,
    },
    name: 'About'
  },
  {
    path: '/post/:id',
    components: {
      default: BlogDetails,
    },
    name: 'details'
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]
