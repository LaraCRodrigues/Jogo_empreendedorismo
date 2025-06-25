  let jogoPausado = false;

  function pausarJogo() {
    jogoPausado = true;
    document.getElementById("modal-pausa").classList.remove("hidden");
  }

  function continuarJogo() {
    jogoPausado = false;
    document.getElementById("modal-pausa").classList.add("hidden");
  }

  function atacar() {
    if (jogoPausado) return; // Impede ação se estiver pausado

    const chance = Math.random();
    let dano = 0;

    if (chance < 0.2) {
      dano = 10;
      acertosConsecutivos++;
      alert("Acerto Crítico!");
    } else if (chance < 0.95) {
      dano = 5;
      acertosConsecutivos++;
    } else {
      dano = 0;
      acertosConsecutivos = 0;
      alert("Errou!");
    }

    vidaInimigo -= dano;
    if (vidaInimigo < 0) vidaInimigo = 0;

    atualizarVida();
    atualizarBarraAcertos();

    if (vidaInimigo <= 0) {
      alert("Inimigo derrotado!");
    }
  }

