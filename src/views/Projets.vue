<template>
    <div id="projets">
        <div v-if="showCards" class="card">
            <img src="lets-be-friend.png" alt="lets-be-friends">
            <h1>Let's be friends</h1>
            <p>Petite description du projet</p>
            <a v-on:click="showModaleLBF" class="a-btn" href="#">DETAILS</a>
        </div>
        <div v-if="isModale.letsBeFriends" class="modale">
            <div>
                <img src="lets-be-friend.png" alt="lets-be-friends">
                <a href="https://github.com/JordanEspitalier/Let-s-be-friend">GITHUB du projet</a>
                <a href="https://letsbefriends.netlify.app/">Website</a>
            </div>

            <section>
                <h1>Contexte</h1>
                <p>modale</p>
                <h1>Stacks</h1>
                <p>blabla</p>
                <a v-on:click="hideModaleLBF" class="a-btn" href="#">EXIT</a>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    name: "Projets",
    data(){
        return{
            showCards : true,
            isModale : {
                letsBeFriends : false
            },
        }
    },

    mounted(){
        this.$store.commit('toggleNav', true)
    },
    methods:{
        showModaleLBF(){
            this.showCards = false
            this.isModale.letsBeFriends = true
        },
        hideModaleLBF(){
            this.showCards = true
            this.isModale.letsBeFriends = false
        },
    },
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
.card img{
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0px 0px;
}
.modale{
    display: flex;
    align-items: center;
    width: 80vw;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
.modale div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction: column;
    gap: 2em;
}
.modale div img{
    width: 100%;
    height: 60%;
    border-radius: 10px 10px 0px 0px;
}
.modale section {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.a-btn{
    text-decoration: none;
    color: black;
    border: black 2px solid;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-top: 2em;
    font-weight: bold;
    transition: 0.3s;
}
.a-btn:hover{
    color: white;
    text-shadow: black 1px 1px;
    background-color:#da044b;
    border: #da044b 2px solid;
}
</style>