<template>
<Navbar/>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>

  </form>
  
</template>

<script>
// using @ means start at the project src root
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Navbar from '../../components/Navbar.vue'

export default {
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()
    const { error, login, isPending } = useLogin()
    const email = ref('')
    const password = ref('')
    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        console.log("No error")
        router.push({name: 'ProcessParent'})
      }
    }
    return { email, password, handleSubmit, error, isPending }
  },
  components: {
      Navbar
    }
}
</script>