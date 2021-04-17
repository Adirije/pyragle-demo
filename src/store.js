import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: null,
        sidebarClosed: false
    },

    mutations: {
        setProducts(state, products){
            state.products = products
        },

        toggleSidebar(state, status = null){
            state.sidebarClosed = typeof status === 'boolean' ?  state : !state.sidebarClosed;
        }
    },

    getters: {
        products({products}){
            return products;
        },

        sidebarClosed({sidebarClosed}){
            return sidebarClosed;
        }
    },

    actions: {
        async loadProducts({commit}){
            //maybe fetch from a remote location
            const products = await Promise.resolve([
                {
                    id: 1,
                    icon: '', //maybe an image url, but left blank since this demo uses fontawesome
                    name: 'Card xxx-8004',
                    link: '/card-1' //link to product
                },
                {
                    id: 2,
                    icon: '',
                    name: 'Card xxx-1902',
                    link: '/card-2'
                },
                {
                    id: 3,
                    icon: '',
                    name: 'Card xxx-1804',
                    link: '/card-3'
                },
                {
                    id: 4,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-4'
                },
                {
                    id: 5,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-5'
                },
                {
                    id: 6,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-6'
                },
                {
                    id: 7,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-6'
                },
                {
                    id: 8,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-6'
                },
                {
                    id: 9,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-6'
                },
                {
                    id: 10,
                    icon: '',
                    name: 'Bitcoin Wallet',
                    link: '/card-6'
                },
                
            ]);
            commit('setProducts', products);  
        }
    }
})

export default store
