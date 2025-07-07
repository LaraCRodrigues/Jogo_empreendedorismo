const inimigos = [
    { nome: "Goblin", vida: 30 },
    { nome: "Orc", vida: 50 },
    { nome: "Dragão", vida: 100 }
];
let indiceInimigoAtual = 0;

function novoInimigo() {
    indiceInimigoAtual++;
    if (indiceInimigoAtual >= inimigos.length) {
        alert("Parabéns! Você venceu todos os inimigos!");
        jogoPausado = true;
        return;
    }
    const novo = inimigos[indiceInimigoAtual];
    vidaInimigo = novo.vida;
    acertosConsecutivos = 0;
    atualizarVida();
    atualizarBarraAcertos();
    alert(`Um ${novo.nome} apareceu com ${novo.vida} de vida!`);
}