<template>
  <v-app>
    <router-view />
    <Header />
    <Dny v-if="idToken" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Dny from './components/Dny.vue'
import Header from './views/Header.vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'App',

  components: {
    Dny,
    Header
  },
  data: () => ({
    login: false
    //
  }),
  computed: {
    ...mapState(['idToken'])
  }
})
</script>
