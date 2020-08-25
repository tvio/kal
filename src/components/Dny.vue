
<template>
  <v-container >
    <v-card v-for="den in dny" :key="den.id">
      <div :id="den.datum">
      <Den :den="den" >
             </Den>
        <div>
        <!-- //Zobrazit radne oba atributy z vuex -->
        <!-- TODO nefunguje last chat, ukazuje to error a nejde pak klikat na chat -->
        <v-card-text>Poslední debata: {{ lastChat(den.id) }}</v-card-text>
      </div>
      <v-btn
        color="orange"
        text
        @click="
          $set(editDen, den.id, den);
          dialog1 = true;
          index = den.id;
        "
      >
        Editovat
        <v-icon color="orange" right light>
          mdi-calendar-edit
        </v-icon>
      </v-btn>
      <v-btn
        color="green"
        text
        @click="
          dialog2 = true;
          index2 = den.id;
          loadChaty(den.id);
        "
      >
        Poznámky
        <v-icon color="green" right light>
          mdi-message-text
        </v-icon>
      </v-btn>
      </div>
    </v-card>
    <editace
      v-if="dialog1"
      :edit-den="editDen[index]"
      :dialog1="dialog1"
      @ZpetDialog1="getZpetDialog1"
    />
    <chat
      v-if="dialog2"
      :denid="index2"
      :dialog2="dialog2"
      @ZpetDialog2="getZpetDialog2"
      
    />
    <!-- <div v-for = "den in $store.state.dny" :key="den">
        {{den.datum}}
    </div>-->
    <!-- <v-dialog  :retain-focus="false" v-model="dialog"  width="600" > -->
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Den from './Den.vue'
import Editace from './Editace.vue'
import Chat from './Chat.vue'
import moment from 'moment'
// import {mapState} from 'vuex'
// import store from '../store/index'
import { mapGetters, mapState,mapActions } from 'vuex'

export default Vue.extend({
  name: 'Dny',
  data: () => ({
    den: {},
    editDen: [{}],

    dialog1: false,
    dialog2: false,
    index: null,
    idnex2: null
  }),
  // mounted: function () {
  //   console.log(this.$store.getters.denByID(9))
  // },
  computed: {
    ...mapGetters(['lastChat']),
    ...mapState(['dny'])
  },
  methods: {
    log: function () {
      // console.log(this.editDen)
      console.log(this.den)
      // console.log(),
    },
    ...mapActions(["initLoad","loadChaty"])
    ,
    scrollDneska(){
      const Dnesek = moment()
      //skroluju na vcerejsem , aby byl videt dnesek
      const Vcerejsek = Dnesek.subtract(1,'d').format('DD.MM.YYYY')
      //const el = this.$refs.myIdDnesek 
      console.log(Vcerejsek)
      //Tohle nejde, ale jde obcas getElementById po refreshi appky
      const el = this.$refs.Vcerejsek
      console.log(el);
      if(el){
        el.scrollIntoView({behavior:'smooth'});
      }
    },
        // vrati modifikovanou dialog value z child editace
    getZpetDialog1: function (value) {
      this.dialog1 = value
      // console.log(this.dialog1)
    },
    getZpetDialog2: function (value) {
      this.dialog2 = value
      // console.log(this.dialog2)
    }
  },
  components: {
    Den,
    Editace,
    Chat
  },
  mounted() {
    this.initLoad();
    this.scrollDneska();
  }
})
</script>
