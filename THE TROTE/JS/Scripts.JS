function calcular (){
    let soma = 0;
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    let leite = document.getElementById("leite").value
    soma = soma + Number(2* (leite))
    let kit = Number(document.getElementById ("kit").value)
    let equipe = document.getElementById("equipe").value
    let pontosKitSupl = 0
    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento>=49) {
            pontosKitSupl = 5000 + ((kit - 97)*30) + ((suplemento - 49)*15)
        }
        else if (kit >=78) {
            pontosKitSupl = 4000 + ((kit - 78)*30)
        }
        else if  (kit >=49) {
            pontosKitSupl = 2500 + ((kit - 49)*30)
        }
        else if  (kit >=19) {
            pontosKitSupl = 1000 + ((kit - 19)*30)
        }
        else if (kit<19) {
            pontosKitSupl = 0
        }
    }
    if (equipe == "Roxa") {
        if (kit >= 102) {
            pontosKitSupl = 5000 + ((kit - 102)*30)
        }
        else if (kit >=82) {
            pontosKitSupl = 4000 + ((kit - 82)*30)
        }
        else if  (kit >=51) {
            pontosKitSupl = 2500 + ((kit - 51)*30)
        }
        else if  (kit >=20) {
            pontosKitSupl = 1000 + ((kit - 20)*30)
        }
        else if (kit<20) {
            pontosKitSupl = 0
        }
    }
    if (equipe == "Preta") {
        if (kit >= 103) {
            pontosKitSupl = 5000 + ((kit - 103)*30)
        }
        else if (kit >=82) {
            pontosKitSupl = 4000 + ((kit - 82)*30)
        }
        else if  (kit >=52) {
            pontosKitSupl = 2500 + ((kit - 52)*30)
        }
        else if  (kit >=21) {
            pontosKitSupl = 1000 + ((kit - 21)*30)
        }
        else if (kit<21) {
            pontosKitSupl = 0
        }
    }
    if (equipe == "Verde") {
        if (kit >=88) {
            pontosKitSupl = 5000 + ((kit - 88)*30)
        }
        else if (kit >=70) {
            pontosKitSupl = 4000 + ((kit - 70)*30)
        }
        else if  (kit >=44) {
            pontosKitSupl = 2500 + ((kit - 44)*30)
        }
        else if  (kit >=18) {
            pontosKitSupl = 1000 + ((kit - 18)*30)
        }
        else if (kit<18) {
            pontosKitSupl = 0
        }
    }
    if (equipe == "Vermelha") {
        if (kit >= 93) {
            pontosKitSupl = 5000 + ((kit - 93)*30)
        }
        else if (kit >=74) {
            pontosKitSupl = 4000 + ((kit - 74)*30)
        }
        else if  (kit >=47) {
            pontosKitSupl = 2500 + ((kit - 47)*30)
        }
        else if  (kit >=19) {
            pontosKitSupl = 1000 + ((kit - 19)*30)
        }
        else if (kit<19) {
            pontosKitSupl = 0
        }
    }
    alert(pontosKitSupl)
    soma = soma + pontosKitSupl
    let suplemento = document.getElementById ("suplemento").value
    soma = soma + Number(15* (suplemento))
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