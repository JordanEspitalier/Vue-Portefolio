<template>
    <div id="projets">
        <div v-if="showCards" class="card">
            <img src="lets-be-friend.png" alt="lets-be-friends">
            <h1>Let's be friends</h1>
            <p>LBF est une plateforme sociale de création d'évènements et de rencontre à travers l'apprentissage et la pratique de langues étrangères.</p>
            <a v-on:click="showModaleLBF" class="a-btn" href="#">DETAILS</a>
        </div>
        <div v-if="showCards" class="card">
            <img src="porteFolio.png" alt="portefolio">
            <h1>Mon portefolio</h1>
            <p>Petite description du projet</p>
            <a v-on:click="showModalePorteFolio" class="a-btn" href="#">DETAILS</a>
        </div>
        <div v-if="isModale.letsBeFriends" class="modale">
            <div>
                <img src="lets-be-friend.png" alt="lets-be-friends">
                <a class="link-modale" href="https://github.com/JordanEspitalier/Let-s-be-friend">GITHUB du projet</a>
                <a class="link-modale" href="https://letsbefriends.netlify.app/">Website</a>
            </div>

            <section>
                <h1>Contexte</h1>
                <p>Let's be friend est un projet dans le lequel j'ai contribué en tant que lead dev back au cours de la formation O'clock "Developpeur Web javascript full stack".
                LBF est une plateforme sociale de création d'évènements et de rencontre à travers l'apprentissage et la pratique de langues étrangères, cette plateforme permet de :</p>
                <ul>
                    <li>Discuter avec des gens parlant une langue étrangère</li>
                    <li>Apprendre en passant de bon moments dans des cadres sociaux positifs (thèmes variés tel que... )</li>
                    <li>Encourager le partage des cultures et des rencontres</li>
                </ul>
                
                <h1>Stacks</h1>
                <ul>
                    <li>NodeJS</li>
                    <li>Postgrèsql</li>
                    <li>Sqitch</li>
                    <li>Heroku (deploiement)</li>
                </ul>
                
            </section>
            <a v-on:click="hideModale" class="a-btn a-btn-modale" href="#">EXIT</a>
        </div>
        <div v-if="isModale.porteFolio" class="modale">
            <div>
                <img src="porteFolio.png" alt="portefolio">
                <a class="link-modale" href="https://github.com/JordanEspitalier/Vue-Portefolio">GITHUB du projet</a>
                <a class="link-modale" href="https://www.jordan-espitalier.com/">Website</a>
            </div>

            <section>
                <h1>Contexte</h1>
                <p>Ayant fini ma formation de developpeur web, j'ai directement eu envie d'avoir un site web afin de pouvoir présenter mes projets, ce site me permet donc d'augmenter ma visibilité sur le web. J'ai voulu faire ce portefolio à l'aide de vue js afin de pouvoir avoir de solides bases sur ce framework.
                </p>
                <h1>Stacks</h1>
                <ul>
                    <li>NodeJS</li>
                    <li>VueJS</li>
                    <li>VueX</li>
                    <li>Netlify (deploiement)</li>
                </ul>
                
            </section>
            <a v-on:click="hideModale" class="a-btn a-btn-modale" href="#">EXIT</a>
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
                letsBeFriends : false,
                porteFolio : false
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
        hideModale(){
            this.showCards = true
            this.isModale.letsBeFriends = false
            this.isModale.porteFolio = false
        },
        showModalePorteFolio(){
            this.showCards = false
            this.isModale.porteFolio = true
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
  gap: 2em;
  color: white;
}
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 400px;
    height: 500px;
    border-radius: 10px;
    background-color: rgba(37, 36, 43, 0.9);
    border: #da044b 1px solid;
    animation: 3s ease-in infinite neonEffect;
    position: relative;
}
.card p {
    margin-bottom: 5em;
}
.card img{
    width: 100%;
    height: 50%;
    border-radius: 10px;
}
.modale{
    display: flex;
    align-items: center;
    width: 80vw;
    height: 75%;
    border-radius: 10px;
    background-color: rgba(37, 36, 43, 0.9);
    border: #da044b 1px solid;
    animation: 3s ease-in infinite neonEffect;
    position: relative;
}

.link-modale{
    text-decoration: none;
    color: white;
    border: white 2px solid;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
}
.link-modale:hover{
    color: white;
    text-shadow: black 1px 1px;
    background-color:#da044b;
    border: #da044b 2px solid;
}
.modale div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction: column;
    gap: 1em;
}

.modale div img{
    width: 100%;
    height: 75%;
    border-radius: 10px;
}
.modale section {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content : flex-start;
    align-items: center;
    flex-direction: column;
    padding-left: 1em;
    
}
.modale section ul {
    align-self: flex-start;
    margin-left: -1em;
}
.a-btn{
    text-decoration: none;
    color: white;
    border: white 2px solid;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    transition: 0.3s;
    position: absolute;
    bottom: 5%;
}
.a-btn-modale{
    position: absolute;
    left: 48.2%;
    bottom: 4%;
}
.a-btn:hover{
    color: white;
    text-shadow: black 1px 1px;
    background-color:#da044b;
    border: #da044b 2px solid;
}

@keyframes neonEffect {
    0% {box-shadow: #da044b 0px 0px 0px;}
    50%{box-shadow: #da044b 0px 0px 10px;}
    100%{box-shadow: #da044b 0px 0px 0px;}
}

@media (max-width : 480px) {

    #projets{
        height: 80vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 2em;
        overflow: auto;

    }
    .card{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 80%;
        height: auto;
        border-radius: 10px;
        background-color: rgba(37, 36, 43, 0.9);
        border: #da044b 1px solid;
        animation: 3s ease-in infinite neonEffect;
        position: relative;

    
    }
    .card img{
        width: 100%;
        height: 50%;
        border-radius: 10px;
    }
    .modale{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 80vw;
        height: 95%;
        border-radius: 10px;
        background-color: rgba(37, 36, 43, 0.9);
        border: #da044b 1px solid;
        animation: 3s ease-in infinite neonEffect;
        position: relative;
        overflow: auto;
    }
    .modale div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items:center;
        flex-direction: column;
        gap: 1em;
    }

    .modale div img{
        width: 100%;
        height: 75%;
        border-radius: 10px;
    }
    .modale section {
        width: 95%;
        height: 100%;
        display: flex;
        justify-content : flex-start;
        align-items: center;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 8em;
        
    }
    .modale section ul {
        align-self: flex-start;
        margin-left: -1em;
    }
    .a-btn{
        text-decoration: none;
        color: white;
        border: white 2px solid;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        font-weight: bold;
        transition: 0.3s;
        position: absolute;
        bottom: 5%;
    }
    .a-btn-modale{
        display: block;
        position: static;
        left: 0;
        bottom: 0;
        margin-bottom: 1em;
    }
        
}



</style>