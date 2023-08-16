import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sections from '../views/Sections.vue'
import Section from '../views/Section.vue'
import Reviews from '../views/Reviews.vue'
import Comments from '../views/Comments.vue'
import AllBooks from '../views/AllBooks.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sections/:id',
        name: 'Section',
        component: Section
    },
    {
        path: '/sections',
        name: 'Sections',
        component: Sections
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
    {
        path: '/allBooks',
        name: 'AllBooks',
        component: AllBooks
    },
    {
        path: '*', 
        redirect: '/'
    },
]

const router = new VueRouter({
  routes
})

export default router
