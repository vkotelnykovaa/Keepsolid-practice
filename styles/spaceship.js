const spaceshipParts = ["Фюзеляж", "Крила", "Ракети", "Антени"];

const builder = document.getElementById("spaceship-builder");
const spaceshipPartsList = document.getElementById("spaceship-parts");

spaceshipParts.forEach(part => {
    let btn = document.createElement("button");
    btn.textContent = `Додати ${part}`;
    btn.onclick = () => {
        let li = document.createElement("li");
        li.textContent = `${part} додано!`;
        spaceshipPartsList.appendChild(li);

        // Додаткові анімації або ефекти можна додавати тут
        alert(`${part} додано до корабля!`);
    };
    builder.appendChild(btn);
});
