
<template>
  <div id="app">
    <nav>
      <router-link to="/">Peliculas</router-link> |
      <router-link to="/new_movie">Agregar</router-link> |
      <router-link to="/billboard">Carteleras</router-link>
    </nav> 
     <!-- <nav-bar></nav-bar>    -->
    <div class="container">
       <router-view/>
    </div>
    <!-- <footer-component></footer-component> -->
    
  </div>
</template>

<script>

//import HomeView from '../views/HomeView.vue'
//import NavBar from './views/NavBar.vue'  
import FooterComponent from './views/Footer.vue'; 

  export default {

    name:"App",
    components:{
      //NavBar
      //FooterComponent
    }
  }

</script>

<style>

  #app {
  border: 1px solid inherit;
  height: 100%;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
