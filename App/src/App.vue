<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Daily Deck</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/configure">Configure</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  margin-bottom: .5rem;
  text-align: center;
}

header {
  margin-bottom: 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  h1 {
    text-align: left;
  }

  header {
    margin-bottom: 1rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>
