<template>
  <ul class="flex flex-col items-center pt-10">
    <li v-for="book in books" class="py-2">
      <p>{{ book.title }}, Penulis: {{ book.author }} Tahun: {{ book.year }}</p>
    </li>
  </ul>
</template>

<script setup>
const books = [
  { title: "Belajar Vue 3", author: "Pares", year: 2020 },
  { title: "Belajar React", author: "Iqbal", year: 2021 },
  { title: "Belajar Laravel", author: "Prastowo", year: 2022 },
];
</script>

<style lang="scss" scoped></style>
