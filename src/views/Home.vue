<template>
<div id="home">

  <img src="avatar.png" alt="avatar">
  <section>
    <h1>Qui suis-je ?</h1>
    <p>Je m'appelle Jordan, et je suis une personne qui à pour mission de contribuer à l’amélioration de la société et de la vie des personnes en leur apportant des solutions numériques leur permettant de gagner du temps au quotidien.</p>
    <p>Et oui, vous l'aurez sans doute compris, je suis développeur dans le domaine du web.</p>
  </section>

</div>
</template>
<script>
export default {};
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
section{
  color: black;
  width: 40vw;
  padding-left: 2em;
  padding-right: 2em;
  margin-bottom: 6em;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
}
section::after{
content:""; 
border-left:20px solid transparent;
border-right:20px solid transparent;
border-top: 20px solid rgba(255, 255, 255, 0.8);
position: absolute;
}
p{
  font-size: 18px;
}
</style>
