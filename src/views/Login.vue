<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent>
                <v-text-field
                  v-model="login"
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                  @keyup="msg = ''"
                />

                <v-text-field
                  id="password"
                  v-model="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  @keyup="msg = ''"
                />
                <v-card-text>{{ msg }}</v-card-text>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit" @click="provedLogin"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'Login',
  data: () => ({
    login: String,
    password: String,
    msg: String
  }),
  mounted () {
    this.login = ''
    this.password = ''
    this.msg = ''
  },
  methods: {
    ...mapActions(['saveLogin']),
    provedLogin: function () {
      if (
        (this.login === 'Tomik' || this.login === 'Janik') &&
        this.password === 'Lego1234'
      ) {
        this.saveLogin({ login: this.login, password: this.password })
        this.$router.push({ path: '/' })
      } else {
        this.msg = 'Chyba : Špatné přihlašovací údaje'
      }
    }
  }
})
</script>
