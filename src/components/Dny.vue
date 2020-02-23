<template>
  <v-container>

       <v-card   v-for="(den,index) in $store.state.dny"  :key="index" >
      <Den :den="den"></Den>
  <v-dialog  :retain-focus="false" v-model="$store.state.editace"  width="645" >
     <template v-slot:activator="{ on }">
      <v-btn color="orange"
         text
       v-on="on">
          Editovat
          </v-btn>
     </template>
       <editace />
  </v-dialog >
         </v-card>
             <!-- <div v-for = "den in $store.state.dny" :key="den">
        {{den.datum}}
    </div> -->

  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Den from './Den.vue'
import Editace from './Editace.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store from '../store/index'
export default Vue.extend({
  name: 'Dny',
  components: {
    Den,
    Editace
  },

  data: () => ({
  })

})
</script>
