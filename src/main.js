import Vue from 'vue'
import test from './test'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import json from './json/usuarios.json'
import Vuetify from 'vuetify'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  test,
  json,
  Vuetify,
  render: h => h(App),
  el: '#app',
    vuetify: new Vuetify(),
   data: () => ({
      myItems: [
        {
        id: null,
        name: null,
        username: null,
        email: null,
        phone: null
        }
      ],
     
      newItem: null,
      getId: null,
      updateId: null,
      updateText: null,
      updateEmail:null,
      updatePhone:null,

      usuario: false,
     
    //   snackbar: false,
      timeout: 1500,
       text: '',
     
    //  lastId : 0,
    }),
  
    computed: {
    },
  
    methods: {
      
     updateByEmail(id) {
        if(this.updateEmail == null || this.updateEmail == null) return;
        
        this.text = "Updating " + this.updateEmail + " with " + this.updateText
        this.usuario = true
        
        API_putRequest(this.updateId, this.updateText)
        
        this.myItems.find(x => x.email === this.updateEmail).text = this.updateText
      },

      updateByPhone(id) {
        if(this.updatePhone == null || this.updatePhone == null) return;
        
        this.text = "Updating " + this.updatePhone + " with " + this.updateText
        this.usuario = true
        
        API_putRequest(this.updateId, this.updateText)
        
        this.myItems.find(x => x.phone === this.updatePhone).text = this.updateText
      },
      getFilteredRequest() {
        API_getFilteredRequest(this.$data.myfilter);
        },
    }
}).$mount('#app')

