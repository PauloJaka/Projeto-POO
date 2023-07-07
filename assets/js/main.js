// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
const menuIcon = document. querySelector('menu-icon');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const informacoes = obterInformacoesPessoais();
  
  const imc = getImc(informacoes.peso, informacoes.altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  pessoas.push(informacoes);

  setResultado(msg, true);

  console.log(pessoas)
});



//apartir daqu vou tentar fazer o bagulho
let id = 0;
const pessoas = [];

// Função para obter informações pessoais
function obterInformacoesPessoais() {
  const inputNome = document.querySelector('#nome');
  const inputIdade = document.querySelector('#idade');
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const nome = inputNome.value;
  const idade = Number(inputIdade.value);
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);


  if (!peso || !altura) {
    const alturaErrada = inputAltura.value;
    const pesoErrado = inputPeso.value;
    
    let mensagemErro;
    if (!peso && !altura) {
      mensagemErro = `Os valores de Peso ${pesoErrado} e Altura ${alturaErrada} são inválidos`;
    } else if (!peso) {
      mensagemErro = `O valor do Peso ${pesoErrado} é inválido`;
    } else {
      mensagemErro = `O valor da Altura ${alturaErrada} é inválido`;
    }
    setResultado(mensagemErro, false);
    return;
  }


  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)
  id = id+ 1;

  return {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,
    nivelImc : nivelImc,
    imc : imc,
    id : id
  };
}


function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}


function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}



