<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><h1>Sara Bastida Cabrera</h1></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon >email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>sarabastida90@gmail.com</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>link</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title> <a href="https://www.linkedin.com/in/sarabastida/" target="_blank"> Linkedin</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-spacer></v-spacer>

      <v-toolbar-title>Prueba Nivel</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
   <v-container
         class="fill-height"
         fluid
       >
         <v-slide-y-transition mode="out-in">
           <router-view/> //me permite cargar los componentes
         </v-slide-y-transition>
       </v-container> 
    </v-main>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer></v-spacer>

      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>


<script>
// import HelloWorld from './components/HelloWorld';

import Cabecera from './components/Cabecera'
import json from './json/usuarios.json'

export default {
  name: 'App',
  components: {
    json
  },
  data: () => ({
    //
    drawer: null
  }),
};
</script>



