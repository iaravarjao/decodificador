const textArea = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');

function botaoCriptografar() {
  const stringCriptografada = criptografar(textArea.value);
  resultado.value = stringCriptografada;
  textArea.value = '';
}
function botaoDescriptografar() {
  const stringDescriptografada = descriptografar(textArea.value);
  resultado.value = stringDescriptografada;
  textArea.value = '';
}
function criptografar(msgCriptografada) {
  let substituto = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  for (let i = 0; i < substituto.length; i++) {
    if (msgCriptografada.includes(substituto[i][0])) {
      msgCriptografada = msgCriptografada.replaceAll(
        substituto[i][0],
        substituto[i][1]
      );
    }
  }
  return msgCriptografada;
}
function descriptografar(msgDescriptografada) {
  let substituto = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  for (let i = 0; i < substituto.length; i++) {
    if (msgDescriptografada.includes(substituto[i][1])) {
      msgDescriptografada = msgDescriptografada.replaceAll(
        substituto[i][1],
        substituto[i][0]
      );
    }
  }
  return msgDescriptografada;
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
 
  resultado.value = '';
}
