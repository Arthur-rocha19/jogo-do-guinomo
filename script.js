const buttons = document.querySelectorAll(".menu button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert(`Você clicou em: ${button.innerText}`);
    });
});
