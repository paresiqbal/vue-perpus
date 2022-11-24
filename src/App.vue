<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col min-h-screen font-Poppins bg-white">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
