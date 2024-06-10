document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('verificar-btn').addEventListener('click', function() {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        var num3 = document.getElementById('num3').value;
        var passwordResult = document.getElementById('password-result');

        if (num1 === '9' && num2 === '1' && num3 === '1') {
            passwordResult.textContent = "Password 1 correcto";
        } else if (num1 === '7' && num2 === '1' && num3 === '4') {
            passwordResult.textContent = "Password 2 es correcto";
        } else {
            passwordResult.textContent = "Password incorrecto";
        }

        passwordResult.style.display = 'block';
    });
});
