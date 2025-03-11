import {defineStore} from 'pinia'

interface Appointment {
    _id: string,
    date: string,
    time: string,
    name: string,
    user_id: User,
}

interface User {
    _id: string,
    fullName: string,
    email: string,
}

interface State {
    searchStatus: object | null,
    data: object | null
    slots: object | null
    loading: boolean
    error: string | null
}

export const useAppointmentsStore = defineStore('appointments', {
    state: (): State => ({
        searchStatus: {},
        data: null,
        slots: null,
        loading: false,
        error: null,
    }),
    actions: {
        setAppointments(appointmens: any | undefined | null) {
            this.data = appointmens
        },
        setSlots(data: any | undefined | null) {
            this.slots = data
        },

        async fetchAppointment() {
            try {
                this.data = await useFetch('http://localhost:3000/api/appointments', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                return true
            } catch (error) {
                console.error('Appointments error:', error)
                return false
            }
        },
        async searchAppointment(d: string, t: string) {
            try {
                return await useFetch('http://localhost:3000/api/appointments/search', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        date: d,
                        time: t
                    }),
                })
            } catch (error) {
                console.error('Appointments error:', error)
                return false
            }
        },

        async fetchSlots() {
            try {
                this.slots = await useFetch('http://localhost:3000/api/appointments/slots', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                //this.setSlots(this.slots)
                return true
            } catch (error) {
                console.error('Appointments error:', error)
                return false
            }
        },

        async addAppointment(n: string, d: string, t: string): Promise<void> {
            this.loading = true
            this.error = null
            try {
                await useFetch('http://localhost:3000/api/appointments', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        name: n,
                        date: d,
                        time: t
                    })
                })
                this.fetchAppointment()
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Bilinmeyen hata oluştu'
            } finally {
                this.loading = false
            }
        },

    },
    getters: {
        isAppointmentExist: (state) => {

            // return state.data.data?.filter(item => {
            //         if (item.date === state.d)
            //             alert("var")
            //         return true
            //     }
            // );
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppointmentsStore, import.meta.hot))
}