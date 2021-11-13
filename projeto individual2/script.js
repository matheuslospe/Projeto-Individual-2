const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const RendaMensal = document.getElementById('RendaMensal').value;
    const Financiamento = document.getElementById('Financiamento').value;
    const Parcelas = document.getElementById('Parcelas').value;
    const jurosBanco = document.getElementById('jurosBanco').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && RendaMensal !== '' && Financiamento !== '' && Parcelas !== '') {

        const JurosBase = (jurosBanco/ 100);
        const PMT = Financiamento*(1+ JurosBase) ** Parcelas * (JurosBase) / ((1 + JurosBase) ** Parcelas - 1);
        var PORCENTRENDA = (RendaMensal * 0.3);
        var PMTparaCalculo = PMT.toFixed();
        const FormatacaodoPMT = PMT.toFixed(2);
        if(PMTparaCalculo > PORCENTRENDA){ 
        resultado.textContent = `Financiamento Negado!`;
        }
        else{
        
        resultado.textContent = `Bem Vindo ${nome}! Financiando R$
         ${Financiamento} em ${Parcelas} vezes, com o juros de ${jurosBanco}%, você irá pagar R$ ${FormatacaodoPMT} por mês. `;
        }
    }
    else
    {
        resultado.textContent = `Para calcular o resultado, preencha todos os campos em branco!`;

    }

}

calcular.addEventListener('click', pace);
       
        
        

        
        