<template>
 <v-dialog v-model="dialog" width="645" >
             <v-card  >
        <v-card-title>
          <span class="headline">Edituj a pak hlavně ukládej.
            Svět je velikej a čas malinkej</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-text-field  disabled label="Datum"></v-text-field>
              <v-text-field v-model="den.kdo" label="kdo"></v-text-field>
              <v-text-field v-model="den.pozn1" label="Pozn1" required></v-text-field>
              <v-text-field v-model="den.pozn2" label="Pozn2" hint="example of helper text only on focus"></v-text-field>
              <v-text-field v-model="den.pozn3" label="Pozn3" hint="example of persistent helper text" persistent-hint required></v-text-field>
            </v-container>
         </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.stop="dialog=false">Close</v-btn>
          <v-btn color="blue darken-1" text @click.stop="dialog=false">Save</v-btn>
        </v-card-actions>
      </v-card>
         </v-dialog >
</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store/index'
export default Vue.extend({
  name: 'Editor',
  mounted: function () {
    console.log(this.edit)
    this.den = this.edit
  },
  props: { edit: Object, dialog: Boolean },
  // props: { editovat: Boolean },
  methods: {
    close: function () {
      // console.log(this.editovat)
      this.$store.state.editace = false
    }
  },
  data: () => ({
    den: {
      id: null,
      datum: '22.01.2020',
      den: null,
      kdo: null,
      pozn1: null,
      pozn2: null,
      pozn3: null
    }
  })
})
</script>
