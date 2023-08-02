import {createRouter,createWebHistory} from 'vue-router';
import  DefaultLayout  from '../layouts/DefaultLayout.vue';
import Home from '../views/Home.vue';
import CharacterDetails from '../views/CharacterDetails.vue'

const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:"home",
                component:Home
            },
            {
                path:'/characterDetails/:name/:id',
                name:"characterDetails",
                component:CharacterDetails,
                props:true
            }
        ]
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;