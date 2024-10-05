<script setup lang="ts">
import {deckStore} from "../services/deckStore";

async function getCards() {
  console.log('getting cards');
  await deckStore.determineCards();
}
</script>

<template>
  <div>
    <h2>Configure Your Deck</h2>

  </div>
</template>

<style>

</style>
