<template>
  <v-app >
    <v-app-bar app dark color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Kalendar"
          class="shrink mr-2"
          contain
          src="https://img.icons8.com/officel/40/000000/calendar.png"
          transition="scale-transition"
          width="40">
         </v-img>
         <h2 class="font-weight-bold ">Kalendář Tomíka a Janíka</h2>
          </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Přihlásit</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Dny/>
      </v-content >
        </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Dny from './components/Dny.vue'
export default Vue.extend({
  name: 'App',

  components: {
    Dny
  },

  data: () => ({
    //
  })
})
</script>
