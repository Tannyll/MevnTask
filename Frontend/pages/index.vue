<template>
  <div>
    <h1>Welcome :<br>{{ authStore?.user?.fullName }} <br> {{authStore?.user?.email}}</h1>
    <br>
    <button @click="authStore.logout()">Logout</button>
  </div>
</template>

<script setup >
import {useAuthStore} from "~/store/auth.js";
const authStore = useAuthStore()
</script>