<template>
 <div>
 <FormSag :propsMessage="faturamento" :entrada="enrtada"/>
 </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
import FormSag from '@/componentes-genericos/formulario-generico';
import {Cliente} from '@/classes/cliente'
import {FrmDadosFaturamento} from '@/formularios/DadosFaturamento'

export default Vue.extend({
     name: 'DadosFaturamento',
     components: {
     FormSag,
  },
    data: () => ({
        faturamento: FrmDadosFaturamento,
        enrtada: Cliente.dadosDeFaturamento,
    }),
})
</script>