<template>
    <aside class="sidebar bg-white border-right">
        <div class="d-flex align-items-center justify-content-center">
            <sidebar-toggler class="mr-3 d-xl-none"></sidebar-toggler>
            <Brand />
        </div>
        <router-link :to="{name: 'dashboard'}" class="sidebar-item">
            <i class="fas fa-tachometer-alt mr-3"></i> Dashboard
        </router-link>
        <router-link to="/transactions" class="sidebar-item">
            <i class="fas fa-share mr-3"></i> transactions
        </router-link>
        <router-link to="/accounts" class="sidebar-item">
            <i class="fas fa-briefcase mr-3"></i> accounts
        </router-link>
        <router-link :to="{name: 'payments'}" class="sidebar-item">
            <i class="fas fa-copy mr-3"></i> payments
        </router-link>
        <router-link to="/reports" class="sidebar-item">
            <i class="far fa-sticky-note mr-3"></i> reports
        </router-link>
        <router-link to="/settings" class="sidebar-item">
            <i class="fas fa-cogs mr-3"></i> settings
        </router-link>
        <router-link to="ui-kit" class="sidebar-item">
            <i class="fas fa-puzzle-piece mr-3"></i> ui kit
        </router-link>
        <div class="sidebar-item sidebar-title">
            <div class="mr-1">Products</div>
            <div class="sidebar-action rounded mt-n1"><i class="fas fa-plus"></i> Add</div>
        </div>
        <router-link 
            v-for="(product, i) in products" 
            :key="product.id" 
            :to="product.link" 
            class="sidebar-item sidebar-product"
            :class="productBorders[getBorderIndex(i)]"
        >
            <i class="fas fa-credit-card mr-3"></i> {{product.name}}
        </router-link>
    </aside>
</template>

<script>
import Brand from '@components/Brand'
import SidebarToggler from '@components/SidebarToggler'

export default {
    data: () => ({
        productBorders: ['border-blue', 'border-orange', 'border-green', 'border-purple']
    }),

    methods: {
        getBorderIndex(productIndex){
            let iteration = Math.floor(productIndex / this.productBorders.length)
            return productIndex - (iteration * this.productBorders.length)
        }
    },

    computed: {
        products(){
            return this.$store.getters.products
        }
    },

    created(){
        this.$store.dispatch('loadProducts');
    },

    components: {
        Brand,
        SidebarToggler
    }
}
</script>

<style scoped>
.sidebar{
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 3px;
    position: fixed;
    overflow-x: hidden;
    padding-top: 10px;
    overflow-y: auto;
}   
.sidebar-item{
    font-size: 14px;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    border-left: 2px solid transparent;
}
a.sidebar-item:hover{
    cursor: pointer;
    background-color: #D8DEE3;
    text-decoration: none;
}

.sidebar-title{
    display: flex;
    justify-content: space-between;
    color:#98A9BC;
    text-transform: none;
}

.sidebar-product{
    text-transform: none;
    padding-top: .75rem;
    padding-bottom: .75rem;
}

.border-orange{
    border-color: #FFAB2B;
}
.border-purple{
    border-color: #FE4D97;
}
.border-green{
    border-color: #6DD230;
}
.border-blue{
    border-color: #4D7CFE;
}
.sidebar-action{
    padding: 5px;
}

.sidebar-action:hover{
    background-color: #D8DEE3;
    cursor: pointer;
}

.router-link-exact-active i{
    color: #FFAB2B;
}

.router-link-exact-active {
    background-color: #F8FAFB;
    border-color: #FFAB2B;
}
</style>