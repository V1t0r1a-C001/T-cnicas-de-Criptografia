var Codificador = document.getElementById('Codificador')
var codifica = document.getElementById('Codificar')
var descodifica = document.getElementById('Decodificar')
var selecionaBotao = document.getElementById('Play')


//Mostra ou não o valor da codificação
Codificador.addEventListener('change', function ()
{
  var muda = Codificador.value
  var selecionaLabelChave = document.getElementById('labelChave').classList
  var selecionaInputChave = document.getElementById('inputChave').classList
  
  if (muda === 'base') {
    selecionaInputChave.add('someChave')
    selecionaLabelChave.add('someChave')
    
  }
  
  else if (muda === 'cifra') {
    selecionaInputChave.remove('someChave')
    selecionaLabelChave.remove('someChave')
  }
})

//evento no botão.
codifica.addEventListener('click', function () 
{
  selecionaBotao.innerText = "CODIFICAR A MENSAGEM"
})

descodifica.addEventListener('click', function () 
{
  selecionaBotao.innerText = "DECODIFICAR A MENSAGEM"
})

//Quando pressiona o botão.
selecionaBotao.addEventListener('click', function()
{
    if (selecionaBotao.innerText == "CODIFICAR A MENSAGEM"){
        if (Codificador.value == 'cifra'){
            cifrar()
        }
        else{
            codBase(mensagem.value)
        }
    }
        else {
            if (Codificador.value == 'cifra'){
               decifrar()
            }
            else{
              descodBase(mensagem.value)
            }
        }
})

//Codifica Cifra
function cifrar() {
    let texto = document.getElementById("mensagem").value;
    let numDesloc = parseInt(document.getElementById("inputChave").value);
  
    document.getElementById("resultado").innerHTML = cypherCifrar(texto, numDesloc);
  }
  
  function cypherCifrar(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";
  
      for (let i = 0; i < texto.length; i++){
        textoArray.push(texto.charCodeAt(i));
      }
  
      for (j = 0; j < textoArray.length; j++){
         if (textoArray[j] >= 65 && textoArray[j] <= 90){
          deslocamentoArray.push((((textoArray[j] - 65 + numDesloc) % 26) + 65));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122){
          deslocamentoArray.push((((textoArray[j] - 97 + numDesloc) % 26) + 97));
        } else {
          deslocamentoArray.push(textoArray[j]);
          }
        }
  
      for (g = 0; g < deslocamentoArray.length; g++){
          textoCodificado += String.fromCharCode(deslocamentoArray[g]);
        }
      return textoCodificado;
  }
  
  //Descodifica cifra
  function decifrar() {
    let texto = document.getElementById("mensagem").value;
    let numDesloc = parseInt(document.getElementById("inputChave").value);
  
    document.getElementById("resultado").innerHTML = cypherDec(texto, numDesloc);
  }
  
  function cypherDec(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";
  
      for (let i= 0; i < texto.length; i++){
        textoArray.push(texto.charCodeAt(i));
      }
  
      for (j = 0; j < textoArray.length; j++){
      if(textoArray[j] >= 65 && textoArray [j] <= 90){
        deslocamentoArray.push((((textoArray[j] - 90 - numDesloc) % 26) +90));
        }else if (textoArray[j] >= 97 && textoArray[j] <= 122){
          deslocamentoArray.push((((textoArray[j] - 122 - numDesloc) % 26) + 122));
        }else{
          deslocamentoArray.push(textoArray[j]);
          }
        }
  
      for (g = 0; g < deslocamentoArray.length; g++){
          textoCodificado += String.fromCharCode(deslocamentoArray[g]);
        }
      return textoCodificado;
  }
//codificar Base64
function codBase (str){
    return resultado.value = (window.btoa(str))
}
//decodificar Base64
function descodBase (str){
    return resultado.value = (window.atob(str))
}
