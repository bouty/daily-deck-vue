<script setup lang="ts">
import CardItem from '../components/CardItem.vue';
import {deckStore} from "../services/deckStore";

async function getCards() {
  console.log('getting cards');
  await deckStore.determineCards();
}
</script>

<template>
  <main>
    <h2>Active Deck: {{ deckStore.activeDeck.title }}</h2>
    <a href="#" @click="getCards">Deal the Day -></a>
    <h3 class="mt-2">Today's Cards</h3>
    <div>
      <CardItem v-for="card in deckStore.dayCards" :card=card />
    </div>
  </main>
</template>

<style>
.mt-2 {
  margin-top: 2rem;
}
</style>
