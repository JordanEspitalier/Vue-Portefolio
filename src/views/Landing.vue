<template>
  <div>
    <transition name="fade">
      <section v-bind:class="{effect : activeTransition}">
        <h1>BIENVENUE</h1>
        <p @click="goToHomePage">ENTRER</p>
      </section>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Landing",
  components: {},
  data() {
    return {
      activeTransition: false,
    };
  },
  mounted() {
    // disable navBar on this page
    this.$store.commit('toggleNav', false)
  },
  computed: {
  },
  methods: {
    goToHomePage() {

      this.activeTransition = true
      // Timeout of 2sec before changing to the Home view
      setTimeout(()=>{

        console.log(this.$store.state.showNav)
        this.$router.push({ name: "Home" });
      }, 2000)
      
    },
  },
};
</script>

<style scoped>



div {
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 45px;
  user-select: none;
  color: #da044b;
  letter-spacing: 0.04em;
}

p {
  display: block;
  color: white;
  cursor: pointer;
  user-select: none;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding: 5px 10px 5px 10px;
  border: white solid 1px;
  border-radius: 2px;
  transition: 0.3s;
}

p:hover {
  color: black;
  background-color: white;
}

.effect{
  animation-duration: 2s;
  animation-name: getOut;
}
@keyframes getOut {
  from{opacity: 1;}
  to{opacity: 0;}
  
}
</style>
