function alt_image() {
  let estado = true;

  setInterval(() => {
    const img = document.getElementById("imagen");

    if (estado) {
      img.style.backgroundImage = 'url("./images/profile_picture.jpg")';
      img.alt = "Profile Picture";
    } else {
      img.style.backgroundImage = 'url("./images/logo.jpg")';
      img.alt = "Logo";
    }
    estado = !estado;
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  // Actualizar el año en el footer
  document.getElementById('year').innerText = new Date().getFullYear();
})
