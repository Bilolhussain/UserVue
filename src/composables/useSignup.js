import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)


const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    // const actionCodeSettings = {
    //   url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
    // };
    await res.user.updateProfile({ displayName })
    await res.user.sendEmailVerification();
    error.value = null
    isPending.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup