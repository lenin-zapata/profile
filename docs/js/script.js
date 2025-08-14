function loadContent(page) {
    fetch(page)
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
        document.getElementById('content').innerHTML = "<p>Error al cargar el contenido.</p>";
    });
}

function alt_image() {
  let estado = true;

  setInterval(() => {
    const img = document.getElementById("imagen");

    img.style.opacity = 0; // fade out
    if (estado) {
      img.style.backgroundImage = 'url("../images/logo.jpg")';
      img.alt = "Profile Picture";
    } else {
      img.style.backgroundImage = 'url("../images/profile_picture.jpg")';
      img.alt = "Logo";
    }
    estado = !estado;
    img.style.opacity = 1; // fade in
  }, 5000);
}
