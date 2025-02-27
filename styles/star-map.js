window.onload = function() {
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, Math.PI * 2);
        ctx.fill();
    }
};