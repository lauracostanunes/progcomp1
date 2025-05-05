function iniciarPesquisa() {
    let somaNotas = 0;
    let satisfeitos = 0;
    let insatisfeitos = 0;
    let resultados = "<h3>Detalhes das Notas:</h3><ul>";
    for (let i = 1; i <= 10; i++) {
        let notaValida = false;
        let nota;
        while (!notaValida) {
            nota = prompt(`Participante ${i}: Digite uma nota de satisfação entre 0 e 10`);
            if (nota === null) {
                alert("Pesquisa cancelada!");
                return;
            }
            nota = parseFloat(nota);   
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                notaValida = true;
            } else {
                alert("Por favor, digite um número entre 0 e 10");
            }
        }
        somaNotas += nota;
        resultados += `<li>Participante ${i}: ${nota}/10</li>`;
        if (nota >= 8) {
            satisfeitos++;
        } else if (nota < 5) {
            insatisfeitos++;
        }
    }
    resultados += "</ul>";
    const media = somaNotas / 10;
    document.getElementById("resultado-conteudo").innerHTML = `
        ${resultados}
        <h3>Resumo:</h3>
        <p><strong>Média das notas:</strong> ${media.toFixed(1)}</p>
        <p><strong>Pessoas satisfeitas (nota ≥ 8):</strong> ${satisfeitos}</p>
        <p><strong>Pessoas insatisfeitas (nota < 5):</strong> ${insatisfeitos}</p>
    `;
}