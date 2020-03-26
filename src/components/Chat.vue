<template>
 <v-dialog v-model="localDialog"  width="645" >
        <v-card>
            <v-card-actions>
          <v-card-title>
            Poznámky
              </v-card-title>
           <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click.stop="localDialog=false">Close</v-btn>
              </v-card-actions>
          <v-divider></v-divider>
          <v-list three-line>
             <v-list-item
            v-for="chat in filteredChaty" :key="chat.Id">
              <v-layout  align-left :class="vyberKam(chat.kdo)">
             <v-card class="d-flex" :class="vyberBarvu(chat.kdo)">
            <v-list-item-icon>
              <div class="text-right">
              <div v-if="chat.kdo=='Janik'">
          <v-icon right color="pink">mdi-face-woman</v-icon>
          </div>
           <div v-else>
           <v-icon right color="blue">mdi-face</v-icon>
           </div>
           </div>
          </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{chat.datum}}
               {{chat.kdo}}</v-list-item-title>
                 <v-list-item-subtitle v-html="chat.text"></v-list-item-subtitle>
          </v-list-item-content>
            </v-card>
            </v-layout>
              </v-list-item>
       </v-list>
         <v-divider></v-divider>
           <v-card-actions>

            <v-flex xs10 offset-xs1>
           <v-text-field v-model="chat" @keyup.enter="saveChat" autofocus label="Pišeš"></v-text-field>
           </v-flex>
           <v-spacer></v-spacer>
            <v-btn type="submit" color="blue darken-1" text @click="saveChat" >Odeslat</v-btn>
        </v-card-actions>
           </v-card>
         </v-dialog >
</template>

<script lang="ts">

import Vue from 'vue'
// import store from '../store/index'
import { mapGetters, mapState, mapActions } from 'vuex'
export default Vue.extend({
  name: 'Chat',
  data () {
    return {
      localDialog: false,
      chat: String
    }
  },
  mounted () {
    this.localDialog = this.dialog2
    this.chat = ''
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
  },
  computed: {
    ...mapGetters(['chatyDen', 'lastChatId', 'lastChat']),
    ...mapState(['chaty', 'kdo']),
    ...mapActions(['insertChat']),

    filteredChaty: function () {
      return this.chaty.filter(nchaty => nchaty.denId === this.denId)
    }

  },
  methods: {
    vyberKam: function (kdo: string) {
      return (kdo === 'Janik') ? 'justify-end' : 'justify-start'
    },
    vyberBarvu: function (kdo: string) {
      return (kdo === 'Janik') ? 'pink lighten-5' : 'blue lighten-5'
    },
    saveChat () {
      const params: object = { id: (this.lastChatId() + 1), datum: '4.06.1955 18:54:21', denId: this.denId, kdo: this.kdo, text: this.chat }
      this.$store.dispatch('insertChat', params)
      this.chat = ''
      console.log(this.chaty)
    }
  }
})
</script>
