<template>
 <v-dialog v-model="localDialog"  width="645" >
        <v-card>
           <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.stop="localDialog=false">Close</v-btn>
          <v-btn color="blue darken-1" text @click.stop="localDialog=false">Odeslat</v-btn>
        </v-card-actions>
           </v-card>
         </v-dialog >
</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store/index'
export default Vue.extend({
  name: 'Chat',
  data () {
    return {
      localDialog: false
      // den: this.editDen
    //   den: this.editDen
    }
  },
  mounted () {
    this.localDialog = this.dialog2
  },
  props: { denId: Number, dialog2: Boolean },
  // props: { editovat: Boolean },
  // watch: {
  //   chaty: function (newVal, oldVal) { // watch it
  //     console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //     // this.den = this.editDen
  //   }
  // },
  watch: {
    dialog2: function () {
      this.localDialog = this.dialog2
    },
    localDialog: function () {
      // zpet na hlavni
      this.$emit('ZpetDialog2', this.localDialog)
    }
  }
})
</script>
