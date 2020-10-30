<template>
  <v-app>
  <!--   <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="img/oie.png"
          transition="scale-transition"
          width="40"
        />

     
      </div>

      <v-spacer></v-spacer>

    </v-app-bar> -->

 
      <HelloWorld/>
  
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
