// Toggle hamburger menu
document.querySelector('.hamburger').addEventListener('click', function() {
  const drawer = document.querySelector('.drawer');
  drawer.classList.toggle('open'); // Buka/tutup drawer
  
  // Ubah ikon hamburger menjadi X
  this.classList.toggle('open');
});
