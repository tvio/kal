<template>
    <v-app>
    
      <v-content>
        <Header />
        <router-view/> 
    </v-content>
   
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Dny from "./components/Dny.vue";
import Header from "./views/Header.vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "App",

  components: {
    Dny,
    Header,
  },
  data: () => ({
    login: false,
    //
  }),
  computed: {
    ...mapState(["idToken"]),
  },
  
});
</script>
