function marcarRetoCompleto(nivel, reto) {
  localStorage.setItem(`nivel${nivel}_reto${reto}`, 'completado');
}

function verificarProgreso(nivel, totalRetos) {
  let completados = 0;
  for (let i = 1; i <= totalRetos; i++) {
    if (localStorage.getItem(`nivel${nivel}_reto${i}`) === 'completado') {
      completados++;
    }
  }

  if (completados === totalRetos) {
    document.getElementById('mensaje-final').innerText =
      `¡Misión cumplida, Guardián del Agua!`;
  }
}
