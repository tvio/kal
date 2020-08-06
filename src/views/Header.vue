<template>
<v-container>
    <v-app-bar  app dark height="70" color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Kalendar"
          class="shrink mr-2"
          contain
          src="https://img.icons8.com/officel/40/000000/calendar.png"
          transition="scale-transition"
          width="40"
        />
        <h3 class="font-weight-bold">
          Kalendář T&J
        </h3>
      </div>

      <v-spacer />

      <v-btn v-if="!idToken" text to="/login">
        <span class="mr-2">Přihlásit</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn v-if="idToken" @click="logout" text>
        <span class="mr-2">Odhlásit</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    </v-container>
  </template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
  name: 'Header',

  data: () => ({
    //
  }),
  computed: {
    ...mapState(['idToken'])
  },
  methods: {
    ...mapActions(['removeToken']),
    logout: function () {
      this.removeToken()
      this.$router.push({ path: '/' })
    }
  }
})
</script>
