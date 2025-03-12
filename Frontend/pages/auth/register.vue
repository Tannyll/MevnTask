<template>
  <div class="flex items-start justify-center min-h-screen mt-3bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-700">Kayıt Ol</h2>

      <form @submit.prevent="registerUser" class="mt-4">
        <div class="mb-4">
          <label class="block text-gray-700">Ad Soyad</label>
          <input v-model="fullName" type="text" class="w-full px-4 py-2 mt-2 border rounded-md" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">E-posta</label>
          <input v-model="email" type="email" class="w-full px-4 py-2 mt-2 border rounded-md" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Şifre</label>
          <input v-model="password" type="password" class="w-full px-4 py-2 mt-2 border rounded-md" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Profil Resmi</label>
          <input type="file" @change="uploadImage" class="w-full px-4 py-2 mt-2 border rounded-md" />
        </div>

        <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Kayıt Ol</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import useRegister from '~/composables/useRegister';

const { fullName, email, password, profilePicture, registerUser, uploadImage } = useRegister();
</script>