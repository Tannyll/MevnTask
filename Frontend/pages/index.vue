<template>
  <div>
    <div class="flex flex-col justify-center items-center w-full justify-around bg-white">
      <h2 v-if="authStore.user">Welcome </h2>
      <h2 v-if="authStore.user">{{ authStore?.user?.fullName }}</h2>
      <h2 v-if="authStore.user">{{ authStore?.user?.email }}</h2>

    </div>
    <div>
      <div v-if="authStore.user">
        <button @click="authStore.logout()">Logout</button>
      </div>
      <div v-else class="flex flex-col justify-center items-center w-full justify-between bg-white gap-3">
        <button @click="authStore.logout()">Login</button>
        <button class="divide-red-300" @click="authStore.register()">Register</button>
      </div>

    </div>

  </div>
</template>

<script setup>
import {useAuthStore} from "~/store/auth.js";

const authStore = useAuthStore()
</script>