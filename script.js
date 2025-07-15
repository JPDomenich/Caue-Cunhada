//Botão
document.getElementById('confirmar-btn').addEventListener('click', () => {
  alert('Presença confirmada! Obrigado por confirmar 😊');
});


// Define a data do evento
  const dataEvento = new Date("August 16, 2025 19:30:00").getTime();

  const contador = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    if (diferenca <= 0) {
      clearInterval(contador);
      document.getElementById("contador").innerHTML = "O grande dia chegou!";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
      `${dias}d: ${horas}h: ${minutos}m: ${segundos}s`;
  }, 1000);