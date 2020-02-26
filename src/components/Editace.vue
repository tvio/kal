<template>
         <v-card  >
        <v-card-title>
          <span class="headline">Edituj a pak hlavně ukládej.
            Svět je velikej a čas malinkej</span>
        </v-card-title>
        <v-card-text>
          <v-container>
               <v-text-field disabled label="Datum">{{edit.datum}}{{edit.den}}</v-text-field>
              <v-text-field label="kdo">{{edit.kdo}}</v-text-field>
              <v-text-field label="Pozn1" required>{{edit.pozn1}}</v-text-field>
              <v-text-field label="Pozn2" hint="example of helper text only on focus"></v-text-field>
              <v-text-field label="Pozn3" hint="example of persistent helper text" persistent-hint required></v-text-field>
            </v-container>
         </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.stop="$store.state.editace=false">Close</v-btn>
          <v-btn color="blue darken-1" text @click.stop="$store.state.editace=false">Save</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store/index'
export default Vue.extend({
  name: 'Editor',
  created: function () {
    console.log(this.edit)
  },
  props: {
    edit: {
      type: Object
    }
  },
  // props: { editovat: Boolean },
  methods: {
    close: function () {
      // console.log(this.editovat)
      this.$store.state.editace = false
    }
  }
})
</script>
