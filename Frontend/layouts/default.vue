<template>
  <div class="max-w-xl mx-auto border border-gray-200 p-5 rounded-lg mt-5">
    <nav class="flex items-center justify-around px-3 pb-6 ">
      <ul class="flex items-center justify-between gap-3 ">
        <li>
          <NuxtLink class="
        active:bg-green-700
        bg-green-500
        rounded
        font-bold
        py-3
        px-5
      text-white" to="/">Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="  active:bg-green-700
        bg-green-500
        rounded
        font-bold
        py-3
        px-5
      text-white" to="/appointments">Appointments</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot/>
  </div>

</template>
<script setup lang="ts">
</script>