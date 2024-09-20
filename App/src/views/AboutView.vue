<script setup lang="ts">
import {deckStore} from "../services/deckStore";

async function getCards() {
  console.log('getting cards');
  await deckStore.determineCards();
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getCards">Get cards</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
