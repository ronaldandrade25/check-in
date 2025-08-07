document.getElementById("checkin-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const igreja = document.getElementById("igreja").value;
  const fotoInput = document.getElementById("foto");
  const fotoPreview = document.getElementById("foto-preview");

  if (fotoInput.files && fotoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fotoPreview.src = e.target.result;
    };
    reader.readAsDataURL(fotoInput.files[0]);
  }

  document.getElementById("nome-card").textContent = nome;
  document.getElementById("igreja-card").textContent = `⛪ ${igreja}`;

  document.getElementById("ingresso").style.display = "block";
  document.getElementById("download-btn").style.display = "inline-block";
});

document.getElementById("download-btn").addEventListener("click", function () {
  const ingresso = document.getElementById("ingresso");
  html2canvas(ingresso).then(canvas => {
    const link = document.createElement("a");
    link.download = "ingresso-ainda-ha-esperanca.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});