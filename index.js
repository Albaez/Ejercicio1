function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(base) && !isNaN(altura)) {
        const area = base * altura;
        document.getElementById('resultado').textContent = area.toFixed(1) + ' unidades cuadradas';
    } else {
        alert('Ingresa valores válidos para la base y la altura.');
    }
}

function limpiarCampos() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
}
