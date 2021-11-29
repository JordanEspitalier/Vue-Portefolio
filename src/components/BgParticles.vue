<template>
  <div>
    <canvas class="background"></canvas>
  </div>
</template>

<script>
import Particles from "particlesjs";

export default {
  name: "BgParticles",
  components: {},
  data() {
    return {};
  },
  mounted() {
    Particles.init({
      selector: ".background",
      color: ["#FFFFFF", "#DA0463", "#404B69", "#DBEDF3"],
      maxParticles: 80,
      sizeVariations: 3,
      speed: 0.2,
      connectParticles: true,
      minDistance: 180,
    });
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: black;
}
</style>
