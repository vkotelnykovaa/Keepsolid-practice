function explorePlanet() {
   const planets = ["Марс", "Венера", "Нептун", "Плутон", "Альфа Центавра"];
   
   const planet = planets[Math.floor(Math.random() * planets.length)];
   
   document.getElementById("planet-info").textContent = `Ви відкрили планету: ${planet}!`;
}