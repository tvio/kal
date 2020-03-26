<template>
<v-content>
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
         <h3 class="font-weight-bold" >Kalendář T&J</h3>
          </div>

      <v-spacer></v-spacer>

      <v-btn
      text
        to="/test"      >
        <span class="mr-2">Přihlásit</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
       </v-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header',

  data: () => ({
    //
  })
})
</script>
