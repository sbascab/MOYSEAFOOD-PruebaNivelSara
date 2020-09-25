<template>
    <v-container id="app">
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/moyseafood.png')"
                    contain
                    height="200"
                    alt="MoySeaFood logo"/>
            </v-col>
            <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Listado de Usuarios
        </h1>
      </v-col>
      <v-col cols="12">
      </v-col>
      <v-col>
        <div class="my-2">
          <v-flex>
            <v-text-field label="Filtro"></v-text-field>
          </v-flex>
          <v-flex>
             <v-btn @click="API_getFilteredRequest">Filtrar usuarios</v-btn> 
          </v-flex>
          </div> 
        </v-col>
          <v-col cols="12">
              <v-card
                class="text-center"
                >
                  <v-list>
                    <v-list-group
                      prepend-icon="account_circle"
                      v-for="item in items" v-bind:key="item.name"
                    >
                      <template v-slot:activator >
                        <v-list-item-title > Nombre: {{item.name}}</v-list-item-title>
                        <v-card-actions>
                          <v-btn @click="dialog = true" color="info">
                            <v-icon small>edit</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </template>
              
                      <v-list-group>
                        <template v-slot:activator>
                          <v-list-item-content> 
                            <v-list-item-title>Nombre Usuario: {{item.username}}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
              
                      <v-list-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Email: {{item.email}}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>

                      <v-list-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Teléfono: {{item.phone}}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                      <!-- DIÁLOGO; he añadido el diálogo dentro de  <v-list-group> para poder utilizar item. -->

                        <v-dialog v-model="dialog" width="500" persistent>
                            <v-card>
                                <v-card-title> 
                                  Datos del usuario: 
                                    <span class="headline"> {{ item.name}}</span>
                                </v-card-title>
                                <v-container grid-list-md>
                                  <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                      <v-text-field readonly v-model="item.username" label="Nombre de usuario"> </v-text-field>
                                    </v-flex>
                                     <v-flex xs12 sm6 md4>
                                      <v-text-field v-model="item.email" label="Correo electrónico"></v-text-field>
                                    </v-flex>
                                   <v-flex xs12 sm6 md4>
                                      <v-text-field v-model="item.phone" label="Teléfono móvil"></v-text-field>
                                    </v-flex>
                                   
                                  </v-layout>
                                </v-container>
                                <v-card-actions>
                                  <v-btn @click="dialog = false;updateByEmail;updateByPhone"> Cerrar y guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <!-- FIN DIÁLOGO -->
                    </v-list-group>
                </v-list>
              </v-card>
        </v-col>
      </v-row>
        


    </v-container>

</template>

<script>

import json from '../json/usuarios.json'
import test from '../test/index.js'
import axios from 'axios'


function API_getRequest(id) {
   axios.get('http://localhost:8080/items/' + id)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
 
function API_putRequest(id, data) {
   axios.put('http://localhost:8080/items', {
      id: id,
      data: data
   })
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
 
function API_deleteRequest(id) {
   axios.delete('http://localhost:8080/items/' + id)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
 
 
function API_getAllRequest() {
   axios.get('http://localhost:8080/items')
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
 
function API_getFilteredRequest(filter) {
   axios.get('http://localhost:8080/items', {
      params: {
         filter: filter
      }
   })
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
 
function API_postRequest(data) {
   axios.post('http://localhost:8080/items', {
      data: data
   })
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}


export default {
    name: 'Cabecera',
    props: {
    msg: String
    }, 

    data(){
      return{ dialog : false}
    },
    
    // Creo un método llamado 'items' y obtengo los datos con el método map() 
    computed: {
      items() {
        return json.map((item) => {
          return item;
        })
      }
    }
}

</script>