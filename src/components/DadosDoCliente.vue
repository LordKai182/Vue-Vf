<template>
 <div >
 <FormSag  :propsMessage="linha" :entrada="cli" :botaoCriar="selecionarCliente"/>

<!--  <p>{{cli}}</p> -->
 </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import {Cliente} from '../classes/cliente'
import axios from 'axios'
import FormSag from '@/componentes-genericos/formulario-generico'
import TutorialDataService from '../service/sag-service'
import {FrmDadosCliente} from '@/formularios/DadosCliente'

 export default Vue.extend({
    name: 'DadosCliente',
       components: {
     FormSag,
  },
    data: () => ({
       cli: Cliente,
       linha:FrmDadosCliente,
       loading: false,
       datad: JSON.stringify({"login":"SAG","senha":"708015azx"}),
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
        usuario:{
          token: ''
        },
        keywords: '',
         sizeForm: {
           Cliente: Cliente
        }

    }),
    methods: {
       dispara(){
         alert('dddsdsd')
       },
       selecionarCliente(){
                this.loading = true;
                this.config.url = 'http://localhost:80/api/Cliente/SelecionarCliente'
                this.config.data = JSON.stringify({"codigo":this.cli.codigo});
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
          TutorialDataService.selecionarCliente(this.config)
         .then( (response) => {
         this.cli  = response.data.data
         console.log(JSON.stringify( response.data.data));
          this.loading = false;

         })
          .catch(function (error) {
          console.log(error);
          });

        },
            logar(){
          
          TutorialDataService.logar(this.config)
         .then( (response) => {
           this.usuario.token = response.data.accessToken;
         console.log(JSON.stringify(this.usuario.token));
         })
          .catch(function (error) {
          console.log(error);
          });
        },
        teclouEnter(){
        
         this.axios.get("http://localhost:80/api/Chamada/ListaRotas", { headers: {"Authorization" : `Bearer ${this.usuario.token}`} }).then((response) => {
        console.log(response.data)
          })
        },
    },
    created() {
      this.logar();
    },
 })
</script>>
<style scoped>
.color-cod{
  background-color: #F1DF55!important;
}
</style>