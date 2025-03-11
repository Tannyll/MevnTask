/*

export async function fetchFromAPI<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: Record<string, any>,
    headers: Record<string, string> = { 'Content-Type': 'application/json' }
): Promise<T> {
    try {
        const { data, error } = await useFetch<T>(endpoint, {
            method,
            headers,
            body: method !== 'GET' ? body : undefined, // GET isteklerinde body gönderme!
            key: endpoint + method + JSON.stringify(body || {}), // Nuxt Cache önleme
        })

        if (error.value) {
            throw new Error(error.value.message)
        }

        return data.value as T
    } catch (err) {
        throw new Error(`API Hatası: ${err}`)
    }
}*/
