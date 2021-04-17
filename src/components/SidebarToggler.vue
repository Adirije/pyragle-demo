<template>
    <i @click="toggleSidebar" class="fas d-block fa-bars header-icon"></i>
</template>

<script>
export default {
    methods: {
        toggleSidebar(){
            this.$store.commit('toggleSidebar')
        }
    },
}
</script>

<style  scoped>
.header-icon{
    font-size: 22px;
}
.header-icon:hover{
    cursor: pointer;
}
</style>