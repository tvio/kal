<template>
   <v-app>
     <Header></Header>
     <router-view></router-view>
    <v-content>
      <Dny v-if="login"/>
      </v-content >
        </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Dny from './components/Dny.vue'
import Header from './views/Header.vue'
export default Vue.extend({
  name: 'App',

  components: {
    Dny,
    Header
  },

  data: () => ({
    login: false
    //
  })
})
</script>
