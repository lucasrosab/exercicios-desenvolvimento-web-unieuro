function inverter(){
    var jogador1 = document.getElementById('jogador1').value.split('').reverse().join('');
    var jogador2 = document.getElementById('jogador2').value.split('').reverse().join('');
    var jogador3 = document.getElementById('jogador3').value.split('').reverse().join('');
    var jogador4 = document.getElementById('jogador4').value.split('').reverse().join('');
    var jogador5 = document.getElementById('jogador5').value.split('').reverse().join('');
    var inverter = [jogador1, jogador2, jogador3, jogador4, jogador5]
    
    document.getElementById('jogador1').value = inverter[0]
    document.getElementById('jogador2').value = inverter[1]
    document.getElementById('jogador3').value = inverter[2]
    document.getElementById('jogador4').value = inverter[3]
    document.getElementById('jogador5').value = inverter[4]
}  
