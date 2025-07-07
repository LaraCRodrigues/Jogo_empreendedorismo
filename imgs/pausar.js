  var jogoPausado = false;
  var audio;

  window.onload = function() {
    audio = document.getElementById("musica");
    audio.play().catch(() => {
      console.log("Autoplay bloqueado até interação do usuário.");
    });
  };

  function pausarJogo() {
    jogoPausado = true;
    document.getElementById("modal-pausa").classList.remove("hidden");
  }

  function continuarJogo() {
    jogoPausado = false;
    document.getElementById("modal-pausa").classList.add("hidden");
  }

  function alternarMusica() {
    var checkbox = document.getElementById("musica-toggle");
    if (checkbox.checked) {
      audio.play();
    } else {
      audio.pause();
    }
  }