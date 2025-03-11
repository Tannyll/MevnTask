<template>
  <div class="max-w-xl mx-auto border border-gray-200 p-5 rounded-lg mt-5">
    <nav class="flex items-center justify-between px-3 ">
      <ul class="flex items-center justify-between gap-3">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/appointments">Appointments</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot/>
  </div>

</template>
<script setup lang="ts">
</script>