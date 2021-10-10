<template>
  <div v-if="user">
      <Process :user="user"/>
  </div>
  <div v-else>
      <h1>Loading user</h1>
  </div>
</template>

<script>
import Process from '../views/Process.vue'
import getUser from '@/composables/getUser'
export default {
    components: { Process },
    setup(){
        const { user } = getUser();
    
        return {user}
    }

}
</script>

<style>

</style>