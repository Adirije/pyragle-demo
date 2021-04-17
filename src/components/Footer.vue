<template>
    <footer id="footer" class="mt-3 px-3 text-light-gray row py-3">
        <div class="col-sm-6 order-2 order-sm-1  mt-3 mt-sm-0">&copy; WhiteOnWhite - All Rights Reserved</div>
        <div class="col-sm-6 text-sm-right order-1 order-sm-2 ">
            <router-link to="/about" class="rounded">About WhiteOnWhite</router-link>
        </div>
    </footer>
</template>

<style scoped>
    #footer{
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        color: #98A9BC;;
    }

    @media(min-width: 576px){
        #footer{
            height: 62px;
        }
    }
</style>