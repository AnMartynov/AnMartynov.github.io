import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Reviews from '../views/Reviews.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/books',
        name: 'Books',
        component: Books
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments
    },
]

const router = new VueRouter({
  routes
})

export default router
