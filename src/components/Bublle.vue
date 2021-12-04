<template>
    <section v-if="PageIndex === 1">
        <h1>Qui suis-je ?</h1>
        <p>Je m'appelle Jordan, et je suis une personne qui à pour mission de contribuer à l’amélioration de la société et de la vie des personnes en leur apportant des solutions numériques leur permettant de gagner du temps au quotidien.</p>
        <p>Et oui, vous l'aurez sans doute compris, je suis développeur dans le domaine du web.</p>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
  </section>
  <section v-if="PageIndex === 2">
      <h1>Un parcours athypique</h1>
      <p>bonjour</p>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
    <section v-if="PageIndex === 3">
      <h1>Hard Skills</h1>
      <p>hard skills</p>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
      <section v-if="PageIndex === 4">
      <h1>Soft Skills</h1>
      <p>Soft skills</p>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
      <section v-if="PageIndex === 5">
      <h1>Les techs que j'apprend actuellement</h1>
      <p>learning</p>
      <div class="arrow-container">
        <span class="arrow" @click="DecPageIndex">&#8592;</span>
        <span class="arrow" @click="IncPageIndex">&#8594;</span>
      </div>
  </section>
    <section v-if="PageIndex === 6">
      <h1>Les techs j'aimerais apprendre dans le futur</h1>
      <p>I want to learn them</p>
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
    color: black;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    position: relative;
    top : 20px;
    right : 15vw;
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

</style>