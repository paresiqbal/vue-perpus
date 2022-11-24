<script setup>
import { ref, reactive } from "vue";
import Axios from "axios";

const form = reactive({
  email: "",
  password: "",
});

const actionLogin = () => {
  Axios.post("http://ykcqeswek2.laravel-sail.site:8080/api/login", {
    email: form.email,
    password: form.password,
  })
    .then((response) => {
      console.log(response);
      alert("Login berhasil");
    })
    .catch((error) => {
      console.log(error);
      alert("Login gagal");
    });
};
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <form action="#" @submit.prevent="actionLogin">
      <h1 class="flex justify-center pb-4 text-2xl font-bold text-gray-700">
        LOGIN
      </h1>
      <div class="bg-gray-200 w-96 p-10 rounded shadow-sm">
        <label class="text-gray-700">Email</label>
        <input
          class="w-full py-2 bg-white text-gray-700 px-1 outline-none mb-4"
          type="email"
          v-model="form.email"
        />
        <label class="text-gray-700">Password</label>
        <input
          class="w-full py-2 bg-white text-gray-700 px-1 outline-none mb-4"
          type="password"
          v-model="form.password"
        />
        <input type="checkbox" id="remember" class="mb-6" />
        <label for="remember" class="text-gray-700 px-1">Remember me</label>
        <button
          type="submit"
          class="bg-cyan-400 w-full text-white py-2 rounded hover:bg-cyan-500 transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
