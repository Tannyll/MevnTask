<template>
  <div class="max-w-xl mx-auto my-5 bg-white p-5 rounded-lg shadow-md">
    <div class="max-w-xl mx-auto my-5 bg-white p-0 rounded-lg shadow-md">
      <h2>Mevcut Randevular</h2>
      <div v-for="a in items" :key="a._id" class="p-2 border-b border-gray-300">
        <div class="flex-auto items-center justify-start">
        
          <div class="space-y-3 flex items-center">
            <div>
              <img src="~/assets/img/appointment-symbolic-svgrepo-com.svg" class="w-16 mr-6">
            </div>
            <div class="p-4 shadow-md border rounded-lg w-full">
              <p class="font-semibold">{{ a.name }}</p>
              <p class="text-gray-600">Tarih : {{ a.date }}</p>
              <p class="text-gray-600">Saat : {{ a.time }}</p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<script setup lang="ts">
const props = defineProps({
  items: {
    type: [],
    required: false
  }
})


console.log(props)

</script>