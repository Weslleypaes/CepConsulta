let cep = document.querySelector('#cep');
let rua = document.querySelector('#endereco');
let bairro = document.querySelector('#bairro');
let complemento = document.querySelector('#complemento');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#uf');

var valorCep = cep.value = '';

cep.addEventListener('blur', function (e) {
    let valorCep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ valorCep +'/json/?callback=descobreEndereco';
    document.body.appendChild(script);
});

function descobreEndereco (resultado){

    if("erro" in resultado){
      return  alert ('CEP inválido');
    }

    console.log(resultado);
    rua.value = resultado.logradouro;
    uf.value = resultado.uf;
    bairro.value = resultado.bairro;
    complemento.value = resultado.complemento;
    cidade.value = resultado.localidade;
}
