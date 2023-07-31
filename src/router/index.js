import {createRouter,createWebHistory} from 'vue-router';
import  DefaultLayout  from '../layouts/DefaultLayout.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:"home",
                component:Home
            }
        ]
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;