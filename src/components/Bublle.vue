<template>
    <section v-if="PageIndex === 1">
        <h1>Qui suis-je ?</h1>
        <p>Je m'appelle Jordan j'ai 26 ans, et je suis une personne qui a pour mission de contribuer à l’amélioration de la société et de la vie des personnes en leur apportant des solutions numériques leur permettant de gagner du temps au quotidien.</p>
        <p>Et oui, vous l'aurez sans doute compris, je suis développeur dans le domaine du web.</p>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
  </section>
  <section v-if="PageIndex === 2">
      <h1>Un parcours athypique</h1>
      <p>Alors pour les formalitées, j'ai un bacalaureat STI2D ansi qu'un bac+2 (Diplôme des métiers d'arts) en régie de spectacle, en gros un diplôme de régisseur son. <br> Voilà pour les formalitées. <br> Après avoir tenté de travailler dans l'évènementiel sans grand succès j'ai du trouver un job rapidement, j'ai donc travaillé plus de 2 ans dans un casino de jeux, ce fût globalement un bonne expérience, mais le manque de perspectives professionelles et l'absence de stimulation mentale m'a poussé à changer de domaine, et je me suis donc orienté sur le developpement web !</p>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
    <section v-if="PageIndex === 3">
      <h1>Hard Skills</h1>
      <ul>
          <li>html
            <img class="html-logo" src="html.png" alt="html logo">
          </li>

          <li>css
          <img class="css-logo" src="css.png" alt="css logo">
          </li>

          <li>javascript
          <img class="javascript-logo" src="javascript.png" alt="javascript logo">
          </li>
          <li>postgrèsql
          <img class="psql-logo" src="psql.png" alt="postgrèsql logo">
          </li>
          <li>node-js
          <img class="node-logo" src="node.png" alt="node-js logo">
          </li>
          <li>mongodb
          <img class="mongo-logo" src="mongo.png" alt="mongoDb logo">
          </li>
          <li>sqitch
          <img class="sqitch-logo" src="sqitch.png" alt="sqitch logo">
          </li>
          <li>ejs
          <img class="ejs-logo" src="ejs.png" alt="ejs logo">
          </li>
      </ul>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
      <section v-if="PageIndex === 4">
      <h1>Soft Skills</h1>
        <ul>
          <li>Méthode AGILE</li>
          <li>Communication</li>
          <li>Travail d'équipe</li>
          <li>Autonomie</li>
          <li>Mobile</li>
          <li>Détermination</li>
          <li>Anglais</li>
        </ul>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
      <section v-if="PageIndex === 5">
      <h1>Les techs que j'apprends actuellement</h1>
        <ul>
          <li>{vue-js}</li>
          <li>{vueX}</li>
          <li>{react}</li>
      </ul>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
    <section v-if="PageIndex === 6">
      <h1>Les techs j'aimerais apprendre dans le futur</h1>
        <ul>
          <li>{python}</li>
          <li>{c#}</li>
          <li>{react native}</li>
      </ul>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
      </div>
  </section>
</template>

<script>
export default {
    name : "Bubble",
    data() {
        return {
            PageIndex : 1,
        }
    },
    methods : {
        IncPageIndex (){
            this.PageIndex++
        },
        DecPageIndex (){
            this.PageIndex--
        }
    }
}
</script>

<style scoped>

    section{
    color: white;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 6em;
    border-radius: 5px;
    /* background-color: rgba(27, 0, 0, 0.7); */
    background-color: rgba(37, 36, 43, 0.9);
    border: #da044b 1px solid;
    /* box-shadow: red 0px 0px 10px; */
    animation: 3s ease-in infinite neonEffect;
    }
    /* section::after{
    content:""; 
    border-left:20px solid transparent;
    border-right:20px solid transparent;
    border-top: 20px solid rgba(0, 0, 0, 0.5);
    position: relative;
    top : 20px;
    right : 15vw;
    } */
    @keyframes neonEffect {
      0% {box-shadow: #da044b 0px 0px 0px;}
      50%{box-shadow: #da044b 0px 0px 10px;}
      100%{box-shadow: #da044b 0px 0px 0px;}
    }

    p{
    font-size: 18px;
    }
    .arrow{
    display: block;
    font-size: 50px;

    }
    span{
        cursor: pointer;
        user-select: none;
    }
    .arrow-container{
        display: flex;
        align-self: center;
    }
    ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        /* border: black 1px solid; */
        justify-content: center;
        /* margin-block-start: 0;
        margin-block-end: 0; */
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
    }

    li{
      /* border: black 1px solid; */
      width: 150px;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 1em;
      text-transform: uppercase;
      font-style: italic;
    }
    img{
      display: block;
      align-self: center;
      margin-top : 1em;
    }
    .html-logo{
      width : 50px;
    }
    .css-logo{
      width : 50px;
    }
    .javascript-logo{
      width : 45px;
    }
    .psql-logo{
      width : 45px;
    }
    .node-logo{
      width : 50px;
      padding-top : 5px;
    }
    .mongo-logo{
      width : 60px;
      padding-top : 5px;
    }
    .sqitch-logo{
      width : 50px;
      padding-top : 10px;
    }
    .ejs-logo{
      width : 45px;
    }

    @media (max-width : 780px) {

    section{
   
    width: 60vw;
    display: flex;
    /* position: relative;
    top: 50px; */
    }
    section::after{
    content:""; 
    border-left: none;
    border-right: none;
    border-top: none;
    position: relative;
    top : none;
    right : none;
    }


    li{
      /* border: black 1px solid; */
      width: 100px;
    }
    }

    @media (max-width : 480px) {
      section{
        width: 70vw;
        /* position: relative;
        top : 55px; */
      }
          li{
      /* border: black 1px solid; */
      width: 100px;
      }
        .html-logo{
        width : 30px;
      }
      .css-logo{
        width : 30px;
      }
      .javascript-logo{
        width : 28px;
      }
      .psql-logo{
        width : 28px;
      }
      .node-logo{
        width : 30px;
        padding-top : 3px;
      }
      .mongo-logo{
        width : 35px;
        padding-top : 3px;
      }
      .sqitch-logo{
        width : 30px;
        padding-top : 4px;
      }
      .ejs-logo{
        width : 28px;
      }
    }
</style>