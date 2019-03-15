function estado(texto){
    var botao = document.getElementById('botao')
    var estado = document.getElementById(texto).style.display;

    if(estado == 'none'){
        document.getElementById(texto).style.display = 'block';
        botao.innerHTML = "Ocultar"
    } else {
        document.getElementById(texto).style.display = 'none'
        botao.innerHTML = "Exibir"
    }
}

