<template>

 <div style="padding:10px;margin-top:20px;">
  <div style="margin-bottom: 20px">
    <el-button type="primary">Cadastrar Novo Endereço</el-button>
    <el-button type="info">Cadastrar um Contato</el-button>
    <el-button  type="warning">Editar um Endereço</el-button>
     <el-button type="danger">Excluir um Endereço</el-button>
  </div>
<v-card>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Data Cadastro"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Endereço"
      prop="name">
    </el-table-column>
  </el-table>
</v-card>
 </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default Vue.extend({
    name: 'GridSag',
    data: () => ({
        
        tableData: [{
          date: '2016-05-03',
          name: 'Rua do Teste',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Teste 2',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'JP Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tomas Edson',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      
    }),
      methods: {
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
})
</script>