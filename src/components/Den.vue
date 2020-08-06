<template>
<div class="section  ma-2 pa-1">
  <v-card-title>
    {{den.den}} {{den.datum}}
  </v-card-title>
   <v-card-subtitle>
  {{den.kdo}}
  </v-card-subtitle>
    <v-card-text>
   Janik: {{den.pozn1}}
  </v-card-text>
     <v-card-text>
   Tomik:  {{den.pozn2}}
  </v-card-text>
     <v-card-text>
   Dalibor:  {{den.pozn3}}
   </v-card-text>
   </div>
 </template>

<script lang="ts">
import Vue from 'vue'
// import store from '../store/index'
export default Vue.extend({
  name: 'den',
  props: ['den']

})
</script>
