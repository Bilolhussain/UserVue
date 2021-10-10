<template>
  <Navbar/>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="text" placeholder="Last Name" v-model="lastName">
    <input type="text" placeholder="First Name" v-model="firstName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'
import { projectFirestore} from '@/firebase/config'
import { useRouter, useRoute } from 'vue-router'
import Navbar from '../../components/Navbar.vue'

export default {
setup(props,context){
    const { error, signup, isPending} = useSignup()
    // const { user } = getUser()
    const router = useRouter()
    const route = useRoute()
    const email = ref('')
    const password = ref('')
    const displayName= ref('')
    const lastName= ref('')
    const firstName= ref('')


    const handleSubmit = async() => {
        const user = {
        email: email.value,
        displayName: displayName.value,
        lastName : lastName.value,
        firstName : firstName.value
        }
        const res = await signup(email.value, password.value, displayName.value)
        if (!error.value) {
            const res = await projectFirestore.collection('users').add(user)
            router.push({name: 'Login'})
    
      }
    }

    return { email, password, displayName, lastName, firstName, isPending, error, handleSubmit}
},components: {
      Navbar
    }
}
</script>

<style>

</style>