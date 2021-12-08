<template>
  <div id="home">

    <img v-if="screenWidth > 780" src="avatar.png" alt="avatar">
    <Bublle />

  </div>
</template>

<script>
import Bublle from '../components/Bublle.vue'
export default {
  components : {
    Bublle,
    },
    data(){
      return{
        screenWidth : window.innerWidth
      }
    },
  mounted(){
    this.$store.commit('toggleNav', true)

    window.onresize = () => {
      this.screenWidth = window.innerWidth
    }
    
  },
  methods:{

  },
  computed : {

  },
};
</script>

<style scoped>
#home {

  height: 80vh;
  margin-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  /* border : 1px solid white;
  margin-left: 7vw; */
  margin-top : 8vh;
  border-radius: 40%;
}


</style>
