<template>
<div class="cardsClass">
<div v-for="(card, index) in cards" :key="index" class="card mycss" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{card.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{card.role}}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!-- <a href="#" class="card-link">Card link</a> -->
    <button @click="cardHandler(index)" class="btn-primary">Remove Cards</button>
  </div>
</div>  
</div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'The Net Ninja', role: 'Web developer' },
        { title: 'Ryu', role: 'Graphic designer' },
        { title: 'Chun Li', role: 'Web developer' },
        { title: 'Gouken', role: 'Social media maverick' },
        { title: 'Yoshi', role: 'Sales guru'}
      ]
    }
  },
  methods:{
    cardHandler(ind){
      console.log(ind)
      this.cards.splice(ind,1)
    }
  }
}
</script>

<style scoped>
.cardsClass {
  display: flex;
  justify-content: space-evenly;
}
.mycss{
  margin: 10px;
}
</style>