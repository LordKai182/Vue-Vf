<template>
 <div style="padding:10px;margin-top:40px;">
<el-form ref="form" class="demo-form-inline" label-width="auto" size="mini">
  <div style="display:flex;">
  <el-form-item label="Código">
    <el-input style="width:60px;" @keyup.enter.native="selecionarCliente" v-model="sizeForm.codigo"></el-input>
  </el-form-item>
   <el-form-item label="CNPJ">
    <el-input style="width:140px;" v-model="sizeForm.cnpj" placeholder="000.00.000/0000-00"></el-input>
  </el-form-item>
    <el-form-item label="Razão Social">
    <el-input style="width:520px;" v-model="sizeForm.razao"></el-input>
  </el-form-item>
  </div>
  
  <el-form-item label="Activity zone">
    <el-select v-model="sizeForm.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
      <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="Sponsor"></el-radio>
      <el-radio border label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="logar">Create</el-button>
    <el-button @click="teclouEnter">Cancel</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script>
export default {
     data() {
      return {
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
          codigo: '1',
          razao: '',
          cnpj: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
        selecionarCliente(){
                this.config.url = 'http://localhost:80/api/Cliente/SelecionarCliente'
                this.config.data = JSON.stringify({"codigo":this.sizeForm.codigo});
                this.config.headers = {"Authorization" : `Bearer ${this.usuario.token}`,   'Accept': 'application/json', 'Content-Type': 'application/json' }
                this.axios(this.config)
         .then( (response) => {
         this.sizeForm.codigo  = response.data.data.codigo
         this.sizeForm.razao  = response.data.data.razaoSocial
         this.sizeForm.cnpj  = response.data.data.cnpjCpf
         console.log(JSON.stringify( response.data.data.codigo));

         })
          .catch(function (error) {
          console.log(error);
          });

        },


        logar(){
          this.axios(this.config)
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
      onSubmit() {
        console.log('submit!');
      },
      queryForKeywords: function(event) {
        
        if (this.keywords.length > 2) {
            console.log("keywords value: " + this.keywords);
            console.log("event value: " + event.currentTarget.value);
    }
      }
    }
}
</script>>