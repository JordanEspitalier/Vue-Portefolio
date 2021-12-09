<template>
    <div id="projets">
        <div class="card">
            <img src="lets-be-friend.png" alt="lets-be-friends">
            <h1>Let's be friends</h1>
            <p>Petite description du projet</p>
            <a href="#">DETAILS</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projets",
    mounted(){
        this.$store.commit('toggleNav', true)
    }
    
}
</script>

<style scoped>
#projets {

  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 500px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
img{
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0px 0px;
}
a{
    text-decoration: none;
    color: black;
    border: black 2px solid;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-top: 2em;
    font-weight: bold;
    transition: 0.3s;
}
a:hover{
    color: white;
    text-shadow: black 1px 1px;
    background-color:#da044b;
    border: #da044b 2px solid;
}
</style>