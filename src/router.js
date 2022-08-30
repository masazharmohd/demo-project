import Home from "./components/Home.vue";
import Cards from "./components/Cards.vue";
import DarkAndLight from "./components/DarkAndLight.vue";

import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name:"Home",
        component:Home,
        path:"/"
    },
    {
        name:"Cards",
        component:Cards,
        path:"/cards"
    },
    {
        name:"DarkAndLight",
        component:DarkAndLight,
        path:"/dark-and-light"
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;