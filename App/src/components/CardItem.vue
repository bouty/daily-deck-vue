<script setup lang="ts">
import { Card } from '../models/card'
defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="card" :title=card.title>
    <div class="label" v-html="card.abbreviation"></div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ccc;
  display: inline-block;
  border-color: #333;
  border-radius: 10%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-width: 5.5rem;
  cursor: pointer;
  margin: .25rem;
}

.label {
  font-size: 1.5rem;
  font-weight: 900;
  color: #333;
  text-align: center;
}

@media (min-width: 1024px) {

}
</style>
