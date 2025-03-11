<template>
  <div class="p-5 font-sans bg-gray-200 min-h-screen">
    <h1 class="text-2xl font-bold">Randevu Sistemi</h1>
    <div class="max-w-xl mx-auto bg-white p-5 rounded-lg shadow-md">
      <div v-if="slotVisible" class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Slot dolu</span> Üzgünüm, Lütfen farklı bir tarih slotu seçiniz.
      </div>
      <form @submit="onSubmit">
        <input v-model="name" v-bind="nameProps" minlength="3"
               class="w-full p-2 mb-2 border border-gray-300 rounded" placeholder="Adınız">
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        <select v-model="date" v-bind="dateProps" required
                class="w-full p-2 mb-2 border border-gray-300 rounded">
          <option value="">Tarih Seçin</option>
          <option v-for="s in slots?.data" :key="s.date + s.time" :value="s.date">{{ s.date }}</option>
        </select>
        <p v-if="errors.date" class="text-red-500 text-sm">{{ errors.date }}</p>
        <select v-model="time" v-bind="timeProps"
                class="w-full p-2 mb-2 border border-gray-300 rounded">
          <option value="">Saat Seçin</option>
          <option v-for="s in filteredTimes" :key="s.time" :value="s.time">{{ s.time }}</option>
        </select>
        <p v-if="errors.time" class="text-red-500 text-sm">{{ errors.time }}</p>
        <button type="submit" class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Kaydet</button>
      </form>
    </div>
    <Appointments :items="data?.data"/>
  </div>
</template>

<script setup lang="ts">
import {useAppointmentsStore} from "~/store/appointments";
import {computed} from "vue";
import {useForm} from "vee-validate";
const slotVisible = ref(false)
const appointmentsStore = useAppointmentsStore();
definePageMeta({
  middleware: "authenticated", function(to, from, next) {
    console.log("authentication")
    next()
  }
});
appointmentsStore.fetchAppointment()
appointmentsStore.fetchSlots()

function required(value: any) {
  return value ? true : 'This field is required';
}

const {defineField, handleSubmit, errors} = useForm({
  validationSchema: {
    name: required,
    date: required,
    time: required,
  },
});

const [name, nameProps] = defineField('name');
const [date, dateProps] = defineField('date');
const [time, timeProps] = defineField('time');

const onSubmit = handleSubmit(values => {
  appointmentsStore.searchAppointment(values.date, values.time).then(async (result) => {
    if (result.data.value.length > 0) {
      slotVisible.value = true;
      return false
    }
    await appointmentsStore.addAppointment(values.name, values.date, values.time)
  })
});

const {data, slots, loading, error} = storeToRefs(appointmentsStore)

const filteredTimes = computed(() => {
  if (!date) return []
  const temp = slots?.value?.data?.filter(s => s.date === date.value)
  console.log('filtered times:', temp)
  return temp
})


</script>