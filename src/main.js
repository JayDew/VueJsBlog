import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css'

// use Router package
Vue.use(VueRouter);


const router = new VueRouter({
  routes: routes,
  // change this one to get rid of hash
  mode: 'hash'
});


Vue.use(VueResource);
// set the Firebase db URL
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/'
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  next();
});




new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
