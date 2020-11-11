<template>
 <div style="margin:10px;">
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
         <div style="padding:10px;margin-top:40px;">
          <component v-bind:is="item.content" :propsMessage="linha" :entrada="cli" />
         </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DadosDoCliente from '@/components/DadosDoCliente';
import GridSag from '../componentes-genericos/grid-sag';
import FormSag from '../componentes-genericos/formulario-generico';
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators'
import {Cliente} from '@/classes/cliente'
import {FrmDadosCliente} from '@/formularios/DadosCliente'
@Component({
  components: {
    HelloWorld,
    DadosDoCliente,
    GridSag,
    FormSag
  },
})
export default class Home extends Vue {
  data () {
      return {
        tab: null,
        cli:Cliente,
          linha:FrmDadosCliente,
        items: [
          { tab: 'Dados do Cliente', content: 'DadosDoCliente' },
          { tab: 'Ponto de Entrega', content: 'GridSag'},
          { tab: 'Dados de Faturamento', content: 'FormSag' },
          { tab: 'Preços do Cliente', content:'q'},
        ],
      }
    }
  
}
</script>
