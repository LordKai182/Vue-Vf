export const FrmDadosCliente = [
    {  
        teste:[
       {
            id:2,
            label:'CPF/CNPJ',
            type: 'input',
            style:'width:auto;',
            model:'cnpjCpf',
        },
        {
            id:3,
            label:'Inscrição Estadual',
            type: 'input',
            style:'width:135px;',
            model:'inscricaoEstadual'
        },
        {
            id:4,
            label:'Inscrição Municipal',
            type: 'input',
            style:'width:135px;',
            model:'inscricaoMunicipal'
        },
        {
            id:5,
            label:'Situação',
            type: 'select',
            style:'width:120px;',
            model:'ativo',
            options:[
                {label:'Ativo', value:true},
                {label:'Inativo', value:false},
            ]
        },
        {

        }
       ]
    },
    {
        teste:[
            {
               id:6,
               label:'Código',
               type:'input',
               style:'width:60px;',
               model:'codigo'
            },
            {
                id:7,
                label:'Razão Social',
                type:'input',
                style:'width:580px;',
                model:'razaoSocial'
             }
        ]
    },
    {
        teste:[
            
            {
                id:8,
                label:'Nome Fantasia',
                type:'input',
                style:'width:710px;',
                model:'razaoSocial'
             },
             {
                id:9,
                label:'Cep',
                type:'input',
                style:'width:170px;',
                model:'enderecoFiscal',
                submodel:'cep'
             }
        ]
    },
    {
        teste:[
            {
                id:10,
                label:'Endereço',
                type:'input',
                style:'width:450px;',
                model:'enderecoFiscal',
                submodel:'logradouro'
            },
            {
                id:11,
                label:'Número',
                type:'input',
                style:'width:70px;',
                model:'enderecoFiscal',
                submodel:'numero'
            },
            {
                id:12,
                label:'Complemento',
                type:'input',
                style:'width:200px;',
                model:'enderecoFiscal',
                submodel:'complemento'
            }
        ]
    },
    {
        teste:[
            {
                id:13,
                label:'Bairro',
                type:'input',
                style:'width:230px;',
                model:'enderecoFiscal',
                submodel:'bairro'
            },
            {
                id:14,
                label:'Telefone',
                type:'input',
                style:'width:130px;',
                model:'telefone'
            },
            {
                id:15,
                label:'Estado',
                type:'input',
                style:'width:50px;',
                model:'enderecoFiscal',
                submodel:'uf'
            },
            {
                id:16,
                label:'Cidade',
                type:'input',
                style:'width:150px;',
                model:'enderecoFiscal',
                submodel:'cidade'
            }
        ]
    },
    {
        teste:[
            {
                id:17,
                label:'Código Atividade',
                type: 'input',
                style:'width:70px;',
                model:'atividade',
                submodel:'codigo'
            },
            {
                id:18,
                label:'Atividade',
                type: 'input',
                style:'width:170px;',
                model:'atividade',
                submodel:'descricao'
            }
        ]
    },
    {
        teste:[
            {
                id:19,
                label:'Código Segmento',
                type: 'input',
                style:'width:70px;',
                model:'segmento',
                submodel:'codigo'
            },
            {
                id:20,
                label:'Segmento',
                type: 'input',
                style:'width:170px;',
                model:'segmento',
                submodel:'descricao'
            }
        ]
    },
    {
        teste:[
            {
                id:21,
                label:'CRT',
                type:'select',
                style:'width:370px;',
                model:'crt',
                options:[
                    {label:'Simples Nacional', value:1},
                    {label:'Simples Nacional com Excessão', value:2},
                    {label:'Regime Normal', value:3},
                    {label:'Pessoa Fisica', value:4},
                ]

            },
            {
                id:22,
                label:'Tipo de Empresa',
                type:'select',
                style:'width:120px;',
                model:'tipoEmpresa',
                options:[
                    {label:'MATRIZ', value:1},
                    {label:'FILIAL', value:2}
                ]

            }
        ]
    },
    {
        teste:[
            {
                id:23,
                label:'Cadastrado/Alterado Por:',
                type:'input',
                model:'usuario',
                submodel:'nome'
            },
            {
                id:24,
                label:'Cadastrado em:',
                type:'input',
                model:'dataCadastro'
            },
            {
                id:25,
                label:'Alterado em:',
                type:'input',
                model:'dataUltimaAlteracao'
            },
            {
                id:26,
                label:'Data Última Compra:',
                type:'input',
                model:'dataUltimaCompra'
            }
        ]
    }
]