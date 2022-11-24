<template>
  <header class="sticky top-0 bg-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-4 justify-between"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <a href="/">Home</a>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'library' }">
        <div class="flex flex-1 gap-3 justify-start">
          <a href="/">Library</a>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'login' }">
        <div class="flex flex-1 gap-3">
          <a href="/">Login</a>
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
