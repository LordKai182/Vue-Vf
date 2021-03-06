import Vue from 'vue'
import Vuex from 'vuex'
import {Cliente} from '@/classes/cliente'
import TutorialDataService from '../service/sag-service'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     clienteStore: Cliente,
     userToken:'',
     notifications: [],
     config: {
      method: 'post',
      url: 'http://localhost:80/api/Login/Autenticar',
      headers: { 
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json' 
      },
     data :  JSON.stringify({"login":"SAG","senha":"708015azx"}),
       },
  },
  getters:{
    Enderecos(state){
      return state.clienteStore.enderecos
    },
    AvisosCliente(state){
      return state.notifications
    },
  },
  mutations: {
    setarCliente(state,payLoad){
      state.clienteStore = payLoad

    },
    setarMensagem(state,payLoad){
      //state.notifications.push(payLoad)
      
    },
    setarToken(state,payLoad){
      state.userToken = payLoad
    }
  },
  actions: {
  },
  modules: {
  }
})
