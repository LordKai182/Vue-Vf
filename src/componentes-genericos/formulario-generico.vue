<template>
 <div>

<el-form label-width="auto" size="mini" >
  <div style="display:flex;" v-for="line in propsMessage" 
    :key="line.id">
  <div v-for="item in line.teste" :key="item.id" >
   <el-form-item   
     v-bind:label="item.label" 
     v-if="item.type == 'input'"
     >
    <el-input 
      :style="item.style"
      v-model="entrada[item.model]"
      v-if="item.submodel == null"
      
      @keypress.enter.native="buscar()"
      />
     <el-input 
      :style="item.style"
      v-model="entrada[item.model][item.submodel]"
      v-if="item.submodel != null"
      @keypress.enter.native="buscar()"
      />
  </el-form-item>
  <el-form-item 
    :label="item.label"
    v-if="item.type == 'select'"
    >
    <el-select 
       placeholder="Selecione um Valor"
      :style="item.style"
       v-model="entrada[item.model]"
      >
      <el-option 
      v-for="opt in item.options" 
      :key="opt.value" 
      :label="opt.label" 
      :value="opt.value"
      ></el-option>
    </el-select>
  </el-form-item>
   <el-form-item :label="item.label" v-if="item.type == 'date'">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Selecione" :style="item.style" v-model="entrada[item.model]"></el-date-picker>
    </el-col>
  </el-form-item>
   <el-form-item :label="item.label"  v-if="item.type == 'radio'" :style="item.style">
    <el-radio-group v-model="entrada[item.model]">
      <el-radio 
      :label="opt.value" 
      :value="opt.value"
      v-for="opt in item.options" 
      :key="opt.value" >
      {{opt.label}}
      </el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item v-if="item.type == 'check'" :style="item.style">
   <el-checkbox v-model="entrada[item.model]">{{item.label}}</el-checkbox>
  </el-form-item>
  </div>
  </div>
  <el-form-item size="large">
    <el-button  @click="buscar()"  type="primary">Create</el-button>
    <el-button >Cancel</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

 export default Vue.extend({
    name: 'FormSag',
    props: {
        propsMessage: Object,
        entrada: Object,
        botaoCriar: Function
    },
    data: () => ({
    }),
    methods:{
       buscar(){
          this.botaoCriar()
       }
    }
 })
</script>>
<style scoped>
.color-cod{
  background-color: #F1DF55!important;
}
</style>