import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/dashboard',
        component: () => import(/* webpackChunkName: "payments" */ '@pages/payments/Payments'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "payments" */ '@pages/payments/Payments'),
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: '/payments',
        name: 'payments',
        // redirect: '/dashboard',
        component: () => import(/* webpackChunkName: "payments" */ '@pages/payments/Payments'),
        meta: {
            title: 'Payments'
        }
    },

    {
        path: '*',
        name: 'e404',
        component: () => import(/* webpackChunkName: "e404" */ '@pages/E404'),
        meta: {
            title: 'The resource requested does not exist on this server'
        }
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(){
        return {x:0, y:0}
    }
});

router.afterEach((to) => {
    if(to.meta.title && typeof to.meta.title == 'string'){
        document.title = 'Adirije - Pyragle Demo | ' + to.meta.title;
    }else{
        document.title = 'Adirije - Pyragle Demo | Welcome '
    }
})


export default router;