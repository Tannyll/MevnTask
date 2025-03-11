/*
// composables/useApiData.ts
import { ref } from 'vue'
import { fetchFromAPI } from '~/services/api'

export function useApiData<T>() {
    const data = ref<T | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    async function fetchData(endpoint: string) {
        loading.value = true
        error.value = null

        try {
            data.value = await fetchFromAPI<T>(endpoint)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Bilinmeyen hata oluştu'
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, fetchData }
}*/
