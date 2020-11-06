<template>
 <div style="padding:10px;margin-top:40px;">
<el-form ref="form" class="demo-form-inline" label-width="auto" size="mini">
  <div style="display:flex;">
  <el-form-item label="Código" style="width:120px;">
    <el-input style="width:60px;" @keyup.enter.native="selecionarCliente" v-model="sizeForm.Cliente.codigo"></el-input>
  </el-form-item>
   <el-form-item label="CNPJ" style="width:280px;">
    <el-input style="width:160px;" v-model="sizeForm.Cliente.cnpjCpf" placeholder="000.00.000/0000-00"></el-input>
  </el-form-item>
    <el-form-item style="width:220px;" label="Insc. Estadual">
    <el-input style="width:110px;" v-model="sizeForm.Cliente.inscricaoEstadual"></el-input>
  </el-form-item>
    <el-form-item style="margin-left:5px" label="Insc. Municipal">
    <el-input style="width:110px;" v-model="sizeForm.Cliente.inscricaoMunicipal"></el-input>
  </el-form-item>
  </div>
  <el-form-item style="margin-left:5px" label="Razão Social">
    <el-input style="width:70%;" v-model="sizeForm.Cliente.razaoSocial"></el-input>
  </el-form-item>
  <el-form-item style="margin-left:5px" label="Nome Fantasia">
    <el-input style="width:70%;" v-model="sizeForm.Cliente.nomeFantasia"></el-input>
  </el-form-item>
   <div style="display:flex;">
  <el-form-item style="width:280px;" label="Endereço">
    <el-input style="width:200px;" v-model="sizeForm.Cliente.enderecos[0].logradouro"></el-input>
  </el-form-item>
  <el-form-item style="width:180px;" label="Telefone">
    <el-input style="width:130px;;" v-model="sizeForm.Cliente.telefone"></el-input>
  </el-form-item>
  <el-form-item label="UF" style="width:150px;">
    <el-input style="width:60px;;" v-model="sizeForm.Cliente.enderecos[0].uf"></el-input>
  </el-form-item>
   <el-form-item style="margin-left:5px" label="Cidade">
    <el-input style="width:160px;;" v-model="sizeForm.Cliente.enderecos[0].cidade"></el-input>
  </el-form-item>
   </div>
   <div style="display:flex;">
     <el-form-item label="Código Atividade">
    <el-input style="width:60px;" @keyup.enter.native="selecionarCliente" v-model="sizeForm.Cliente.atividade.codigo"></el-input>
  </el-form-item>
   <el-form-item style="margin-left:5px" label="Atividade">
    <el-input style="width:660px;" v-model="sizeForm.Cliente.atividade.descricao"></el-input>
  </el-form-item>
   </div>
     <div style="display:flex;">
     <el-form-item label="Código Segmento">
    <el-input style="width:60px;" @keyup.enter.native="selecionarCliente" v-model="sizeForm.Cliente.segmento.codigo"></el-input>
  </el-form-item>
   <el-form-item style="margin-left:5px" label="Segmento">
    <el-input style="width:660px;" v-model="sizeForm.Cliente.segmento.descricao"></el-input>
  </el-form-item>
   </div>
   <div style="display:flex">
   <el-form-item v-model="sizeForm.Cliente.crt" label="CRT">
    <el-select  placeholder="Selecione o CRT">
      <el-option label="Simples Nacional" value="1"></el-option>
      <el-option label="Lucro Real" value="2"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="Data Cadastro">
    <el-input style="width:160px;" v-model="sizeForm.Cliente.dataCadastro"></el-input>
  </el-form-item>
     <el-form-item label="Tipo Empresa">
    <el-input style="width:40px;"  v-model="sizeForm.Cliente.tipoEmpresa"></el-input>
  </el-form-item>
   </div>
     <div style="display:flex">
    <el-form-item label="Alterado Em">
    <el-input style="width:160px;" v-model="sizeForm.Cliente.dataUltimaAlteracao"></el-input>
  </el-form-item>
     <el-form-item label="Última Compra Em">
    <el-input style="width:160px;"  v-model="sizeForm.Cliente.dataUltimaCompra"></el-input>
  </el-form-item>
   <el-form-item label="Cadastro/Alterado Por">
    <el-input style="width:140px;"  v-model="sizeForm.Cliente.usuario.nome"></el-input>
  </el-form-item>
   </div>
  <el-form-item size="large">
    <el-button type="primary" @click="logar">Create</el-button>
    <el-button @click="teclouEnter">Cancel</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Cliente} from '../classes/cliente'
import axios from 'axios'
import TutorialDataService from '../service/sag-service'

 export default Vue.extend({
    name: 'DadosCliente',
    data: () => ({
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
       selecionarCliente(){
                
                this.config.url = 'http://localhost:80/api/Cliente/SelecionarCliente'
                this.config.data = JSON.stringify({"codigo":this.sizeForm.Cliente.codigo});
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
                this.axios(this.config)
         .then( (response) => {
         this.sizeForm.Cliente  = response.data.data
         console.log(JSON.stringify( response.data.data));

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
 })
</script>>