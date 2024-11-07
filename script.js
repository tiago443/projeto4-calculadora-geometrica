function areaTriangulo() {
    const base = prompt("Digite a base do triângulo:")
    const altura = prompt("Digite a altura do triângulo:")
    const calc = (base * altura) / 2
    return calc
}

function areaRetangulo() {
    const base = prompt("Digite a base do retângulo:")
    const altura = prompt("Digite a altura do retângulo:")
    const calc = base * altura
    return calc
}

function areaQuadrado() {
    const lado = prompt("Digite o lado do quadrado:")
    const calc = lado * lado
    return calc
}

function areaTrapezio() {
    const baseMaior = prompt("Qual a base maior do trapézio:")
    const baseMenor = prompt("Digite a base menor do trapézio:")
    const altura = prompt("Digite a altura do trapézio:")
    const calc = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * parseFloat(altura)) / 2
    return calc
}

function areaCirculo() {
    const raio = prompt("Digite o raio do círculo:")
    const calc = 3.14 * raio * raio
    return calc
}

do {
    area = prompt("Agora, selecione uma opção abaixo para ver o cálculo da área:\n" +
        "1 - Área do Triângulo\n" +
        "2 - Área do Retângulo\n" +
        "3 - Área do Quadrado\n" +
        "4 - Área do Trapézio\n" +
        "5 - Área do Círculo\n" +
        "6 - Sair")

    switch (area) {
        case "1":
            alert(`A área do triângulo é: ${areaTriangulo()}`)
            break
        case "2":
            alert(`A área do retângulo é: ${areaRetangulo()}`)
            break
        case "3":
            alert(`A área do quadrado é: ${areaQuadrado()}`)
            break
        case "4":
            alert(`A área do trapézio é: ${areaTrapezio()}`)
            break
        case "5":
            alert(`A área do círculo é: ${areaCirculo()}`)
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida! Tente novamente.")
            break
    }
} while (area !== "6")
