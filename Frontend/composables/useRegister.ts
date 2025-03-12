import {ref} from 'vue';
import {useFetch} from '#app';
import {useAuthStore} from "~/store/auth";


interface RegisterResponse {
    data?: any;
    error?: any;
    status?: any;
}

export default function useRegister() {
    const fullName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const profilePicture = ref<File | null>(null);

    const registerUser = async (): Promise<void> => {
        try {
            const {data, status, error}: RegisterResponse = await useFetch('http://localhost:3000/api/users', {
                method: 'POST',
                body: {
                    fullName: fullName.value,
                    email: email.value,
                    password: password.value,
                },
            });
            console.log(data)
            console.log(status)
            console.log(error)

            if (status.value === "success") {
                const authStore = useAuthStore()
                await authStore.login(email.value, password.value);
                navigateTo("/")
            }

            if (status === "error") {
                throw new Error(error.data.error.message || 'Kayıt başarısız!');
            }


        } catch (error: any) {
            console.log(error);
            throw new Error(error.data || 'Kayıt başarısız!');
        }
    };

    const uploadImage = (event: Event): void => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            profilePicture.value = target.files[0];
        }
    };

    return {fullName, email, password, profilePicture, registerUser, uploadImage};
}