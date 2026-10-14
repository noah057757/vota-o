
const candidatos = {
  1: "Candidato A",
  2: "Candidato B",
  3: "Candidato C"
};

const opcoes = document.getElementById("opcoes");

opcoes.innerHTML = `
  <label for="numero">Selecione o número do candidato</label>
  <input
    id="numero"
    type="number"
    min="1"
    max="3"
    placeholder="Digite o número"
  >
  <p id="nomeCandidato"></p>
  <button id="confirmar">Confirmar voto</button>
`;

const numero = document.getElementById("numero");
const nomeCandidato = document.getElementById("nomeCandidato");
const mensagem = document.getElementById("mensagem");

numero.addEventListener("input", () => {
  const candidato = candidatos[numero.value];
  nomeCandidato.textContent = candidato
    ? "Candidato: " + candidato
    : "";
});

document.getElementById("confirmar").addEventListener("click", () => {
  if (!candidatos[numero.value]) {
    mensagem.textContent = "Digite um número válido.";
    return;
  }

  mensagem.textContent =
    "Você selecionou " + candidatos[numero.value] +
    ". A votação compartilhada ainda precisa ser configurada.";
});
