<template>
  <div id="container">
    <div v-if="showNav" id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/projets">Projets</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>

  <BgParticles />
</template>

<script>
import BgParticles from "@/components/BgParticles.vue";

export default {
  name: "Home",
  components: {
    BgParticles,
  },
  data() {
    return {
    };
  },
  mounted() {
      window.onresize = () => {
      this.$store.commit('changeScreenWidth', window.innerWidth)
    }
  },
  computed : {
    showNav (){
      return this.$store.state.showNav
    }
  },
  methods : {

  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html,
body {
  margin: 0;
  padding: 0;
}

#container {
  position: relative;
  z-index: 1;
  font-family: "Raleway", serif;
  height: 100vh;
}

/* *{
    margin-block-start: 0;
    margin-block-end: 0;
} */

h1,
h2,
h3 {
  font-family: "Oswald", sans-serif;
}
#nav{
  height: 12vh;
  /* background-color: rgba(255, 255, 255, 0.267); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em;
  color: #da044b;
  letter-spacing: 0.04em;
  font-size: 25px;
  font-weight: bold;
}
#nav a{
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: #da044b;
  
}
@media (max-width : 780px) {
  body{
    overflow: hidden;
  }
  #nav{
    gap: 2em;
  }
}

@media (max-width : 480px) {
  body{
    overflow: hidden;
  }
  #nav{
    gap: 1em;
  }
}
</style>
