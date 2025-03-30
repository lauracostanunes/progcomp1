function calcular (){
    let soma = 0;
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    let leite = document.getElementById("leite").value
    soma = soma + Number(2* (leite))
    let kitAvulso = document.getElementById ("kitAvulso").value
    soma = soma + Number(30* (kitAvulso))
    let suplementoAvulso = document.getElementById ("suplementoAvulso").value
    soma = soma + Number(15* (suplementoAvulso))
    let arroz5 = document.getElementById ("arroz5").value
    soma = soma + Number(5* (arroz5))
    let arroz1 = document.getElementById ("arroz1").value
    soma = soma + Number(1* (arroz1))
    let feijao2 = document.getElementById ("feijao2").value
    soma = soma + Number(2* (feijao2))
    let feijao1 = document.getElementById ("feijao1").value
    soma = soma + Number(1* (feijao1))
    let macarrao = document.getElementById ("macarrao").value
    soma = soma + Number(0.5* (macarrao))
    let oleo = document.getElementById ("oleo").value
    soma = soma + Number(1* (oleo))
    document.getElementById ("soma").innerHTML = soma.toFixed(2)
}