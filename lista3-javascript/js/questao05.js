function verificar(){
    var senha = document.getElementById('senha').value
    var confirmacao = document.getElementById('confirmacao').value
    
    if(senha != confirmacao){
        alert("Insira senhas iguais");
    } else{
        document.getElementById('cadastro').submit()
    }
}