function salvar(){
    if(document.getElementById('fisica').checked == true){
        document.getElementById('cpf').disabled = false;
        document.getElementById('cnpj').disabled = true;
      }
      if(document.getElementById('juridica').checked == true){
        document.getElementById('cnpj').disabled = false;
        document.getElementById('cpf').disabled = true;
      }
}