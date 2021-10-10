
<template>
  <!-- <v-app> -->
  <Navbar/>
    <v-main>
      
      <router-view/>
    </v-main>
  <!-- </v-app> -->
</template>

<script>
import Navbar from './components/Navbar.vue'
<Navbar/>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
