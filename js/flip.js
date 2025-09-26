/*este Js sirve para que las flip card puedan girar en dispositivos tactiles*/
/*se usa para la pagina Eclipse.html*/

// Seleccionamos todas las cards

document.querySelectorAll('.card').forEach(card => {
  // envolvemos front y back en un contenedor .card-inner
  const inner = document.createElement('div');
  inner.classList.add('card-inner');
  while (card.firstChild) {
    inner.appendChild(card.firstChild);
  }
  card.appendChild(inner);

  // al tocar la card se alterna el giro
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

