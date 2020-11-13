export const FrmPontoDeEntrega = [
                {
                    teste:[
                        {
                            id:1,
                            label:'Código',
                            type:'input',
                            model:'codigo',
                            style:'width:70px;'
                        },
                        {
                            id:2,
                            label:'CNPJ/CPF',
                            type:'input',
                            model:'destinario',
                            submodel:'cnpjCpf',
                        },
                        {
                            id:3,
                            label:'CEP',
                            type:'input',
                            model:'cep',
                            style:'width:110px;'
                        },
                        {
                            id:4,
                            label:'Tipo de Ponto',
                            type:'select',
                            model:'tipoPonto',
                            options:[
                                {label:'Fiscal',value:1},
                                {label:'Cobranca',value:2},
                                {label:'Paciente',value:3},
                                {label:'PontoDeEntrega',value:4},
                                {label:'Locatario',value:5},
                                {label:'Fornecedor',value:6}
                            ]
                        },
                        {
                            id:5,
                            label:'Situação',
                            type:'select',
                            model:'ativo',
                            options:[
                                {label:'Sim',value:true},
                                {label:'Não',value:false}
                            ]
                        },
                        
                    ]
                },// PRIMEIRA LINHA
                 {
                     teste:[
                         {
                             id:6,
                             label:'Descrição',
                             type:'input',
                             model:'descricao',
                             style:'width:770px;'
                         }
                     ]
                 },
                 {
                    teste:[
                        {
                            id:7,
                            label:'Endeeço',
                            type:'input',
                            model:'logradouro',
                            style:'width:770px;'
                        }
                    ]
                },
                {
                    teste:[
                        {
                            id:8,
                            label:'UF',
                            type:'input',
                            model:'uf'
                        },
                        {
                            id:9,
                            label:'Cidade',
                            type:'input',
                            model:'cidade'
                        },
                        {
                            id:10,
                            label:'Bairro',
                            type:'input',
                            model:'bairro'
                        },
                        {
                            id:11,
                            label:'Cód. Municipal',
                            type:'input',
                            model:'codigoMunicipal'
                        },
                        {
                            id:12,
                            label:'Cód. País',
                            type:'input',
                            model:'codigoPais'
                        }
                    ]
                },
                {
                   teste:[
                       {
                           id:13,
                           label:'País',
                           type:'input',
                           model:'pais'
                       },
                       {
                        id:14,
                        label:'Número',
                        type:'input',
                        model:'numero'
                       },
                       {
                        id:15,
                        label:'Complemento',
                        type:'input',
                        model:'complemento'
                       }
                   ]
                },
                {
                    teste:[
                        {
                            id:16,
                            label:'Nome Destinatário',
                            type:'input',
                            model:'destinario',
                            submodel:'nome',
                            style:'width:460px;'
                        },
                        {
                            id:17,
                            label:'Insc. Estadual',
                            type:'input',
                            model:'destinario',
                            submodel:'inscricaoEstadual'
                        }
                    ]
                },
                {
                    teste:[
                        {
                            id:16,
                            label:'E-Mail Destinatário',
                            type:'input',
                            model:'destinario',
                            submodel:'email',
                            style:'width:460px;'
                        },
                        {
                            id:17,
                            label:'Insc. Municipal',
                            type:'input',
                            model:'destinario',
                            submodel:'inscricaoMunicipal'
                        }
                    ]
                }

]