<template>
  <div id="app" :class="{'sidebar-closed': sideClosed }">
    <Sidebar  id="sidebar" />
    <main id="content-panel">
      <Navbar />
      <router-view class="flex-fill"></router-view>
      <Footer />
    </main>
  </div>
</template>

<script>
import Sidebar from '@components/Sidebar'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default {
  name: 'App',
  computed: {
    sideClosed(){
      return this.$store.getters.sidebarClosed
    }
  },
  components: {
    Navbar,
    Sidebar,
    Footer
  },

  mounted(){
    //set the content panel to the same height as the sidebar to let the footer stick to the
    //bottom of the page
    let sidebar = document.getElementById('sidebar');
    let style = document.createElement('style');

    style.id = 'contentPanelHeight';
    style.innerHTML = `#content-panel { min-height: ${sidebar.offsetHeight}px;}`;

    // document.head.append(style);

    // console.log('mounted')
  },

  beforeDestroy(){
    //clean up before leaving
    document.getElementById('contentPanelHeight').remove();
  }
}
</script>

<style>

*{
  --sidebar-width: 242px;
}

.sidebar-closed #sidebar{
  transform: translateX(var(--sidebar-width) * -1);
}

.sidebar-closed #content-panel{
  margin-left: 0;
}

#sidebar,
#content-panel{
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .5s;
}

#sidebar{
  width: var(--sidebar-width);
  float: left;
  transition-property: transform;
  transform: translateX(calc(var(--sidebar-width) * -1));
  z-index: 100;

}

#content-panel{
  /* margin-left: var(--sidebar-width); */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition-property: margin-left, transform;
  overflow-x: hidden;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #252631;
}

@media(min-width: 1200px){
  #sidebar{
    transform: translateX(0);
  }

  #content-panel{
    margin-left: var(--sidebar-width);
  }

  .sidebar-closed #content-panel{
    margin-left: 0;
  }
  .sidebar-closed #sidebar{
    transform: translateX(calc(var(--sidebar-width) * -1));
  }
}
</style>
