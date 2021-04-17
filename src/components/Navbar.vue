<template>
    <header class="header">

        <div class="d-flex align-items-center">
            <sidebar-toggler class="mr-3"></sidebar-toggler>
            <Brand 
                class="navbar-logo mr-lg-3" 
                :class="{'d-xl-none': !sidebarClosed}" 
            />
            <span class="d-none d-xl-block">Payments</span>
        </div>
        <div class="d-flex align-items-center">
            <span><i class="fas fa-search mr-4"></i></span>
            <div class="notification notification-green mr-4"><i class="far fa-envelope"></i></div>
            <span class="notification notification-red mr-sm-4"><i class="far fa-bell"></i></span>
            
            
            <div class="d-flex align-items-center">
                <div class="profile-img-wrapper mr-2 d-none d-sm-block" >
                    <img class="profile-img" src="@/assets/avatar.png">
                </div>
                <span class="profile-name d-none d-lg-block">Barry Armstrong</span>
            </div>
        </div>
    </header>
</template>

<script>
import Brand from '@components/Brand'
import SidebarToggler from '@components/SidebarToggler'
export default {
    

    computed: {
        sidebarClosed(){
            return this.$store.getters.sidebarClosed
        }
    },
    
    components: {
        Brand,
        SidebarToggler
    }
}
</script>

<style scoped>
    .header{
        height: 64px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding: 0 15px;
        color: #778CA2;
        font-size: 20px;
        justify-content: space-between;
    }
    
    .navbar-logo{
        display: block;
    }

    .navbar-logo.sidebar-closed-logo{
        display: block;
    }

    
    .profile-img{
        height: 32px;
        width: 32px;
        display: inline;
        border-radius: 50%;
        margin: 5px;
        /* background-origin: padding-box; */
    }

    .profile-img-wrapper{
        height: 44px;
        width: 44px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid #98A9BC;
    }

    .profile-name{
        font-size: 14px;
    }
    .notification{
        position: relative;
    }

    .notification::before {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: block;
        content: "";
        position: absolute;
        right: -2px;
        top: 3px;
    }

    .notification-red::before{
        background-color:  #FE4D97;
    }

    .notification-green::before{
        background-color:  #6DD230;
    }
</style>