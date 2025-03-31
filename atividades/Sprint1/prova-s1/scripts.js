const btnSomar = document.querySelector("#btn-somar");
const btnSubtrair = document.querySelector("#btn-subtrair");
const btnMultiplicar = document.querySelector("#btn-multiplicar");
const btnDividir = document.querySelector("#btn-dividir");
const inputNum1 = document.querySelector("#input-num1");
const inputNum2 = document.querySelector("#input-num2");
const resultadoSection = document.getElementById('section-resultado');
const sectionHistorico = document.getElementById("section-historico");
const divHistorico = document.getElementById("div-historico");

const historico = []

btnSomar.addEventListener('click', () => {
    let num1 = Number(inputNum1.value)
    let num2 = Number(inputNum2.value)
    

    if(num1 == "" || num2 == ""){
        resultadoSection.innerHTML = `Informe os 2 números para realizar a operação`;
    } else{   
        const histSpan = document.createElement('span');
        const soma = num1 + num2;
        const histSoma = `${num1} mais ${num2} = ${soma}`;
        histSpan.textContent = histSoma;
        resultadoSection.innerHTML = `<b>Resultado:</b> ${num1} mais ${num2} é igual a ${soma}`;
        historico.push(histSoma);
        sectionHistorico.style.display = 'flex';
        divHistorico.appendChild(histSpan)

    }
})

btnSubtrair.addEventListener('click', () => {
    let num1 = Number(inputNum1.value)
    let num2 = Number(inputNum2.value)
    const resultadoSection = document.getElementById('section-resultado');

    if(num1 == "" || num2 == ""){
        resultadoSection.innerHTML = `Informe os 2 números para realizar a operação`;
    } else{
        const histSpan = document.createElement('span');
        const subtracao = num1 - num2;
        const histSubtracao = `${num1} menos ${num2} = ${subtracao}`;
        histSpan.textContent = histSubtracao;
        resultadoSection.innerHTML = `<b>Resultado:</b> ${num1} menos ${num2} é igual a ${subtracao}`;
        historico.push(histSubtracao);
        sectionHistorico.style.display = 'flex';
        divHistorico.appendChild(histSpan)
    }
})

btnMultiplicar.addEventListener('click', () => {
    let num1 = Number(inputNum1.value)
    let num2 = Number(inputNum2.value)
    const resultadoSection = document.getElementById('section-resultado');

    if(num1 == "" || num2 == ""){
        resultadoSection.innerHTML = `Informe os 2 números para realizar a operação`;
    } else{
        const histSpan = document.createElement('span');
        const multiplicacao = num1 * num2;
        const histMultiplicacao = `${num1} vezes ${num2} = ${multiplicacao}`;
        histSpan.textContent = histMultiplicacao;
        resultadoSection.innerHTML = `<b>Resultado:</b> ${num1} vezes ${num2} é igual a ${multiplicacao}`;
        historico.push(histMultiplicacao);
        sectionHistorico.style.display = 'flex';
        divHistorico.appendChild(histSpan)
    }

})

btnDividir.addEventListener('click', () => {
    let num1 = Number(inputNum1.value)
    let num2 = Number(inputNum2.value)
    const resultadoSection = document.getElementById('section-resultado');

    if(num1 == "" || num2 == ""){
        resultadoSection.innerHTML = `Informe os 2 números para realizar a operação`;
    } else{
        const histSpan = document.createElement('span');
        const divisao = num1 / num2;
        const histDivisao = `${num1} dividido por ${num2} = ${divisao}`;
        histSpan.textContent = histDivisao;
        resultadoSection.innerHTML = `<b>Resultado:</b> ${num1} dividido por ${num2} é igual a ${divisao}`;
        historico.push(histDivisao);
        sectionHistorico.style.display = 'flex';
        divHistorico.appendChild(histSpan)
    }

})
