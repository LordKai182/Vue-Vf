<template>
 <div style="padding:10px;margin-top:40px;">
  
<el-form  class="demo-form-inline" label-width="auto" size="mini" >
  <div style="display:flex;" v-for="line in linha" 
    :key="line.id">
  <div v-for="item in line.teste" :key="item.id" >
   <el-form-item   
     v-bind:label="item.label" 
     v-if="item.type == 'input'"
     :style="item.style">
    <el-input 
      :style="item.width"
      v-model="$data['cliente']['codigo']"
    >
    </el-input>
  </el-form-item>
  <el-form-item 
    :label="item.label"
    v-if="item.type == 'select'"
    >
    <el-select 
      placeholder="Selecione um Valor"
      :style="item.style"
      >
      <el-option 
      v-for="opt in item.options" 
      :key="opt.id" 
      :label="opt.label" 
      :value="opt.value"
      ></el-option>
    </el-select>
  </el-form-item>
   <el-form-item :label="item.label" v-if="item.type == 'date'">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Selecione" :style="item.model"></el-date-picker>
    </el-col>
  </el-form-item>
  </div>
  </div>
  <el-form-item size="large">
    <el-button type="primary">Create</el-button>
    <el-button >Cancel</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
 export default Vue.extend({
    name: 'FormSag',
    data: () => ({
        cliente:{
          codigo:'asas'
        },
       linha:[{
                 teste:[
                     {
                         id:1,
                         label:'Código',
                         type: 'input',
                         style:'width:150px;',
                        
                     },
                     {
                         id:1,
                         label:'CNPJ',
                         type: 'input',
                         style:'width:250px;',
                         options:[
                             {label:'sss', value:'ddd'}
                             ]
                     },
                       {
                         id:1,
                         label:'Cep',
                         type: 'input',
                         style:'width:220px;',
                         options:[
                             {label:'sss', value:'ddd'}
                             ]
                     },
                     {
                         id:1,
                         label:'Tipo de Ponto',
                         type: 'select',
                         style:'width:200px;',
                         options:[
                             {label:'Ponto de Entrega', value:'ddd'},
                             {label:'Endereço Fiscal', value:'ddd'},
                             {label:'Paciente', value:'ddd'},
                             ]
                     },
                     {
                         id:1,
                         label:'Situação',
                         type: 'select',
                         style:'width:150px;',
                         options:[
                             {label:'Ativo', value:'ddd'},
                             {label:'Inativo', value:'ddd'},
                             ]
                     },

                 ]
       },
        {
            teste:[
                {
                id:4,
                type:'input',
                label:'Descrição',
                style:'width:600px;'
            },
            ]
        },
        {
            teste:[
                {
                id:4,
                type:'input',
                label:'Endereço',
                style:'width:600px;'
            },
             
            ]
        },
        {
            teste:[
                {
                id:4,
                type:'select',
                label:'UF',
                style:'width:100px;',
                options:[
                    {label: 'RJ', value:'RJ'},
                    {label: 'SP', value:'SP'},
                    {label: 'AC', value:'AC'},
                    ]
            },
            {
                id:7,
                label:'Cidade',
                type:'input',
                style:'width:350px;'
            }
            ,
            {
                id:7,
                label:'Bairro',
                type:'input',
                style:'width:250px;'
            }
             ,
            {
                id:7,
                label:'Cód. Municipal',
                type:'input',
                style:'width:200px;'
            }
             ,
            {
                id:7,
                label:'Cód. Pais',
                type:'input',
                style:'width:200px;'
            }
            ]
        },
        {
           teste:[
               {
                   id: 4,
                   label:'Pais',
                   type:'input',
                   style:'width:200px;'
               },
                {
                   id: 4,
                   label:'Número',
                   type:'input',
                   style:'width:200px;'
               },
                {
                   id: 4,
                   label:'Complemento',
                   type:'input',
                   style:'width:600px;'
               }
           ]
        },
         {
           teste:[
               {
                   id: 4,
                   label:'Cód. Rota',
                   type:'input',
                   style:'width:200px;'
               },
                {
                   id: 4,
                   label:'Descrição',
                   type:'input',
                   style:'width:600px;'
               }
           ]
        },
        {
           teste:[
               {
                   id: 4,
                   label:'E-mail',
                   type:'input',
                   style:'width:400px;'
               },
                {
                   id: 4,
                   label:'Insc. Estadual',
                   type:'input',
                   style:'width:300px;'
               }
               ,
                {
                   id: 4,
                   label:'Insc. Municipal',
                   type:'input',
                   style:'width:320px;'
               }
           ]
        },
        {
            teste:[
                {
                    id:3,
                    label:'teste',
                    type:'input',
                    style:'width:600px;'
                }
            ]
        }
           
       ],


    }),
 })
</script>>
<style scoped>
.color-cod{
  background-color: #F1DF55!important;
}
</style>