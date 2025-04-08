let frases = [];

fetch("frases-anime.json")
  .then((res) => res.json())
  .then((data) => {
    frases = data;
    mostrarFrase(); // Mostrar una al cargar
  })
  .catch((err) => {
    console.error("Error cargando frases:", err);
    document.getElementById("frase").innerText =
      "No se pudieron cargar las frases 😢";
  });

function mostrarFrase() {
  if (frases.length === 0) return;
  const random = Math.floor(Math.random() * frases.length);
  const fraseElegida = frases[random];

  document.getElementById("frase").innerText = `"${fraseElegida.frase}"`;
  document.getElementById(
    "personaje"
  ).innerText = `— ${fraseElegida.personaje}, ${fraseElegida.anime}`;
}
