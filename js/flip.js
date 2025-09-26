/*este Js sirve para que las flip card puedan girar en dispositivos tactiles*/
/*se usa para la pagina Eclipse.html*/

// Seleccionamos todas las cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


