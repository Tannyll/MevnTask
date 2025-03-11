<template>
  <div>
    <div class="flex flex-col justify-center items-center w-full justify-around bg-white">
      <h2 v-if="authStore.user">Welcome </h2>
      <h2 v-if="authStore.user">{{ authStore?.user?.fullName }}</h2>
      <h2 v-if="authStore.user">{{ authStore?.user?.email }}</h2>

    </div>

    <button v-if="authStore.user" @click="authStore.logout()">Logout</button>
    <button v-else @click="authStore.logout()">Login</button>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/store/auth.js";

const authStore = useAuthStore()
</script>