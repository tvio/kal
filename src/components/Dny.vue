<template>
  <v-container>
       <v-card   v-for="den in $store.state.dny"  :key="den.id" >
         <Den :den="den">  </Den>
         <div>
           <!-- //Zobrazit radne oba atributy z vuex -->
          <v-card-text  >Poslední debata: {{lastChat(den.id)}}</v-card-text>
         </div>
       <v-btn color="orange"  text  @click.stop="$set(editDen,den.id,den);dialog=true;index=den.id;log()" >Editovat</v-btn>
            <v-btn color="green"  text  @click.stop="dialog2=true;index=den.id;log()" >Poznámky</v-btn>
         </template>
          <editace v-if="dialog"  :editDen="editDen[index]" :dialog="dialog" ></editace>
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
import { mapGetters } from 'vuex'
export default Vue.extend({
  data: () => ({
    den: { },
    editDen: [{}],

    dialog: false,
    dialog2: false,
    index: null

  }),
  name: 'Dny',
  // mounted: function () {
  //   console.log(this.$store.getters.denByID(9))
  // },
  computed: {
    ...mapGetters(['denByID', 'lastChat', 'karta'])

  },
  methods: {
    log: function () {
      console.log(this.editDen)
      console.log(this.den)
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
