function criptografar() {
  let entrada = document.getElementById('entrada').value;
  var convertido = '';
  convertido = entrada.replace(/e/g, 'enter');

  document.getElementById('resultado').innerHTML = convertido;
  document.getElementById('nenhuma').style.display = 'none';
}

function descriptografar() {
  var entrada = document.getElementById('entrada').value;
  var convertido = '';
  var convertido = entrada.replaceAll(/enter/g, 'e');

  document.getElementById('resultado').innerHTML = convertido;
}

function copiar() {
  let convertido = document.getElementById('resultado').value;
  navigator.clipboard.writeText(convertido).then(
    () => {
      alert('Texto copiado com sucesso');
    },
    err => {
      alert('Erro ao copiar', err);
    }
  );
}

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"
