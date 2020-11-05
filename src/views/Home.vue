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
          <!-- <v-card-text>{{ item.content }}</v-card-text> -->
          <component v-bind:is="item.content" />

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
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators'
@Component({
  components: {
    HelloWorld,
    DadosDoCliente
  },
})
export default class Home extends Vue {
  data () {
      return {
        tab: null,
        items: [
          { tab: 'Dados do Cliente', content: 'DadosDoCliente' },
          { tab: 'Ponto de Entrega', content: 'q'},
          { tab: 'Dados de Faturamento', content: 'q' },
          { tab: 'Preços do Cliente', content:'q'},
        ],
      }
    }
  
}
</script>
