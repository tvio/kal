<template>
 <v-dialog v-model="dialog"  width="645" >
             <v-card  >
        <v-card-title>
          <span class="headline">Edituj a pak hlavně ukládej.
            Svět je velikej a čas malinkej</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-text-field :value="den.den+', '+den.datum" disabled label="Datum"></v-text-field>
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
        </v-card-actions>      </v-card>
         </v-dialog >
</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store/index'
export default Vue.extend({
  name: 'Editor',
  props: { editDen: Object, dialog: Boolean },
  // props: { editovat: Boolean },
  watch: {
    editDen: function (newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.den = this.editDen
    }
  },
  data () {
    return {
      // den: this.editDen
      den: this.editDen
    }
  }
})
</script>
