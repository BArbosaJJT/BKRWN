const frases = [
  "🔥 Sexo Alocado  🔥",
  "💔 No hay sexo 💔",
  "💘 Sexo con hijoss 💘",
  "😅 Mejor como amigos 😅",
  "🌹  Sexo romantico 🌹",
  "⚡Chispas de amor⚡",
  "🚫 Ni lo intentes 🚫",
  "😍  Sexo re loco con tussi 😍"
];

function calcularMatch() {
  const nombre1 = document.getElementById("nombre1").value.trim();
  const nombre2 = document.getElementById("nombre2").value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre1 === "" || nombre2 === "") {
    resultado.innerHTML = "⚠️ Escribe ambos nombres ⚠️";
    return;
  }

  const fraseRandom = frases[Math.floor(Math.random() * frases.length)];
  resultado.innerHTML = `${nombre1} 💕 ${nombre2}: ${fraseRandom}`;
}
