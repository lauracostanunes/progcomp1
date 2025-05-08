function pesquisaSatisfacao(){
    let nota;
    let conta = 1;
    let soma = 0;
    let satisfeitos = 0;
    let insatisfeitos = 0;
    while (conta <= 10) {
        nota = Number(prompt(`Informe a nota (0 - 10) do participante${conta}`));
        if (nota >= 8 && nota <=10){
            satisfeitos++;
        } 
        else if (nota >= 0 && nota < 5){
            insatisfeitos++;
        }
        else if (nota < 0 || nota > 10) {
            alert('Nota inválida')
            continue
        }
        soma = soma + nota;
        conta++;
    }
    let media = soma / 10;
    alert(`A média das notas é ${media.toFixed(1)}\nSatisfeitos (nota ≥ 8): ${satisfeitos}\nInsatisfeitos (nota < 5): ${insatisfeitos}`);
}
