<template>
  <v-container>
       <v-card   v-for="den in $store.state.dny"  :key="den.id" >
         <Den :den="den">  </Den>
       <v-btn color="orange"  text  @click.stop="$set(editDen,den.id,den);dialog=true;index=den.id;log()" >Editovat</v-btn>
         </v-card>
          <editace  :editDen="editDen[index]" :dialog="dialog" ></editace>
             <!-- <div v-for = "den in $store.state.dny" :key="den">
        {{den.datum}}
    </div> -->
    <!-- <v-dialog  :retain-focus="false" v-model="dialog"  width="600" > -->

  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Den from './Den.vue'
import Editace from './Editace.vue'
// import {mapState} from 'vuex'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store from '../store/index'
export default Vue.extend({
  data: () => ({
    den: {},
    editDen: [{}],
    dialog: false,
    index: null
  }),
  name: 'Dny',
  // mounted: function () {
  //   console.log(this.$store.getters.denByID(9))
  // },
  methods: {
    findOne: function (id: number) {
      return this.$store.getters.denByID(id)
    },
    log: function () {
      console.log(this.dialog)
      console.log(this.editDen)
    }
  },
  components: {
    Den,
    Editace
  }
  // computed:{
  //   ...mapState(['dny'])
  // },
  // computed: {
  //   getIndex: () => {
  //     return index
  //   }
  // },

})
</script>
