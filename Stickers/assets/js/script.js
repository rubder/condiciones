const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const verificarBtn = document.getElementById('verificar-btn');
const resultadoContainer = document.getElementById('resultado-container');

verificarBtn.addEventListener('click', () => {
    const totalStickers = parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value);

    let resultadoTexto = '';
    if (totalStickers <= 10) {
        resultadoTexto = `Llevas ${totalStickers} stickers.`;
    } else {
        resultadoTexto = 'Llevas demasiados stickers.';
    }

    resultadoContainer.textContent = resultadoTexto;
});
