<template>
  <v-app>
 <v-app-bar
  color="blue"
  dense
  flat
>
<div style="margin-left:4%;margin-top:10px;;">
 <el-badge :value="notifications.length" class="item">
 <el-dropdown trigger="click">
  <span class="el-dropdown-link" style=" color:#fff;">
    {{cli.nomeFantasia}}
    <i class="el-icon-warning" style="font-size:70px;"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix" v-for="item in notifications" :key="item.message">
      {{item.message}}
    </el-dropdown-item>
  
  </el-dropdown-menu>
</el-dropdown>
 </el-badge>
</div>
</v-app-bar>
      <HelloWorld/>
      <v-card id="create">
  
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
     
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
  <template>
</template>
  </v-app>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

     data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),
     computed: {
      cli(){
         return this.$store.state.clienteStore;
      },
      notifications(){
         return this.$store.state.notifications
      },
      activeFab() {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
      watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
});
</script>
<style>
html *
{
   font-size: 0.99em !important;
}
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
     margin-top:-100px;
  }

  #create .v-btn--floating {
    position: relative;
   
  }
</style>