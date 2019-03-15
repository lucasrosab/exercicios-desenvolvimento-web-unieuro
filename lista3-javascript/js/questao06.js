function verificar(){
    var palavra = document.getElementById('palavra').value;
    var polindromo = palavra.split('').reverse().join('');

    if(palavra == polindromo){
        alert('A palavra é um Polindromo')
    } else {
        alert('A palavra não é um Polindromo')
    }
    
}