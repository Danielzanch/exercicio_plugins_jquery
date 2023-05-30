$(document).ready(function() {
    $('#cell').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('00.000.000-00', {
        placeholder: '00.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cell: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digitar o Nome Completo.',
            email: 'Digite o E-mail correto.',
            cell: 'Digite o Celular correto.',
            cpf: 'Digite o CPF correto.',
            endereço: 'Digite o Endereço correto.',
            cep: 'Digite o CEP correto.',
        }
    })
})