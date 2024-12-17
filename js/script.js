const motorData = [
    {
        modelo: "Motor Trifásico 3 CV, 220 Volts, 7.2 A",
        potencia: 3,
        tensaoNominal: 220,
        correnteNominal: 7.2,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 3 CV, 380 Volts, 4 A",
        potencia: 3,
        tensaoNominal: 380,
        correnteNominal: 4,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 4 CV, 220 Volts, 9,6 A",
        potencia: 4,
        tensaoNominal: 220,
        correnteNominal: 9.6,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 4 CV, 380 Volts, 6 A",
        potencia: 4,
        tensaoNominal: 380,
        correnteNominal: 6,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 7,5 CV, 220 Volts, 18 A",
        potencia: 7.5,
        tensaoNominal: 220,
        correnteNominal: 18,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 7,5 CV, 380 Volts, 11 A",
        potencia: 7.5,
        tensaoNominal: 380,
        correnteNominal: 11,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 10 CV, 220 Volts, 24 A",
        potencia: 10,
        tensaoNominal: 220,
        correnteNominal: 24,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 10 CV, 380 Volts, 14 A",
        potencia: 10,
        tensaoNominal: 380,
        correnteNominal: 14,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 12,5 CV, 220 Volts, 30 A",
        potencia: 12.5,
        tensaoNominal: 220,
        correnteNominal: 30,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 12,5 CV, 380 Volts, 18 A",
        potencia: 12.5,
        tensaoNominal: 380,
        correnteNominal: 18,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 15 CV, 220 Volts, 37,5 A",
        potencia: 15,
        tensaoNominal: 220,
        correnteNominal: 37.5,
        temperaturaOperacao: 60
    },
    {
        modelo: "Motor Trifásico 15 CV, 380 Volts, 21,5 A",
        potencia: 15,
        tensaoNominal: 380,
        correnteNominal: 21.5,
        temperaturaOperacao: 60
    },
];

function populateModelSelect() {
    const modeloSelect = document.getElementById('modelo1');
    const uniqueModels = [...new Set(motorData.map(motor => motor.modelo))];
    modeloSelect.innerHTML = '<option value="">Selecione o Modelo</option>';
    uniqueModels.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.text = model;
        modeloSelect.appendChild(option);
    });
}

window.addEventListener('load', populateModelSelect);

function goToForm2() {
    const operadorId = document.getElementById('operadorId').value;
    const tagMotor = document.getElementById('tagMotor').value;
    const marca = document.getElementById('marca1').value;
    const setor = document.getElementById('inspeçãoTipo').value;

    if (!operadorId || !tagMotor || !marca || !setor) {
        alert("Favor preencher todos os campos do primeiro formulário!");
        return;
    }

    document.getElementById("motorForm1").style.display = "none";
    document.getElementById("motorForm2").style.display = "block";
    document.body.classList.add("form2");
}

function goToForm3() {
    const validateForm = () => {
        const modelo = document.getElementById('modelo1').value;
        if (!modelo) return "Favor selecionar o modelo do motor!";

        const numberInputs = ['potencia', 'temperaturaOperacao', 'correnteFase1', 'correnteFase2', 'correnteFase3', 'tensaoFase1', 'tensaoFase2', 'tensaoFase3'];
        for (const inputId of numberInputs) {
            const value = parseFloat(document.getElementById(inputId).value);
            if (isNaN(value)) return "Por favor, preencha todos os campos numéricos corretamente!";
        }
        return null;
    };

    const errorMsg = validateForm();
    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    document.getElementById("motorForm2").style.display = "none";
    document.getElementById("motorForm3").style.display = "block";
    document.body.classList.remove("form2");
    document.body.classList.add("form3");
    compareMotors();
}


function compareMotors() {
    const operadorId = document.getElementById('operadorId').value;
    const tagMotor = document.getElementById('tagMotor').value;
    const marca = document.getElementById('marca1').value.toUpperCase();
    const modelo = document.getElementById('modelo1').value;
    const potenciaMedido = parseFloat(document.getElementById('potencia').value);
    const temperaturaOperacaoMedido = parseFloat(document.getElementById('temperaturaOperacao').value);
    const correnteFase1Medido = parseFloat(document.getElementById('correnteFase1').value);
    const correnteFase2Medido = parseFloat(document.getElementById('correnteFase2').value);
    const correnteFase3Medido = parseFloat(document.getElementById('correnteFase3').value);
    const tensaoFase1Medido = parseFloat(document.getElementById('tensaoFase1').value);
    const tensaoFase2Medido = parseFloat(document.getElementById('tensaoFase2').value);
    const tensaoFase3Medido = parseFloat(document.getElementById('tensaoFase3').value);
    const vibracao = document.getElementById('vibracao').value.toUpperCase();
    const ruidoDianteiro = document.getElementById('ruidoDianteiro').value.toUpperCase();
    const ruidoTraseiro = document.getElementById('ruidoTraseiro').value.toUpperCase();
    const setor = document.getElementById('inspeçãoTipo').value;
    const classe = document.getElementById('inspeçãoClasse').value;
    const empresaId = document.getElementById('empresaId').value; // adicionado
    const dataHora = new Date().toLocaleString();


    const match = motorData.find(motor => motor.modelo.toLowerCase() === modelo.toLowerCase());

    let output = "";
    const alertas = [];

    if (match) {
        output = geraTabelaComparacao(match, potenciaMedido, tensaoFase1Medido, tensaoFase2Medido, tensaoFase3Medido, correnteFase1Medido, correnteFase2Medido, correnteFase3Medido, temperaturaOperacaoMedido, vibracao, ruidoDianteiro, ruidoTraseiro, operadorId, tagMotor, marca, dataHora, alertas, empresaId); // adicionado empresaId
    } else {
        output = "<p>Motor não encontrado no banco de dados.</p>";
    }

    // Exibe alertas formatados
    const alertasHTML = alertas.length > 0 ?
        `<div class='alerta'><h3>ALERTAS:</h3><ul>${alertas.map(alerta => `<li>${alerta}</li>`).join('')}</ul></div>` : '';
    output += alertasHTML;

    document.getElementById("resultados").innerHTML = output;
    document.getElementById('btn-print').style.display = 'block';
    document.getElementById("btn-voltar").style.display = "block";
}

function geraTabelaComparacao(motor, potenciaMedido, tensaoFase1Medido, tensaoFase2Medido, tensaoFase3Medido, correnteFase1Medido, correnteFase2Medido, correnteFase3Medido, temperaturaOperacaoMedido, vibracao, ruidoDianteiro, ruidoTraseiro, operadorId, tagMotor, marca, dataHora, alertas, empresaId) { // adicionado empresaId
    const data = [
        { description: "Potência (CV)", nominal: motor.potencia, measured: potenciaMedido, parecer: getTechnicalOpinion(motor.potencia, potenciaMedido) },
        { description: "Tensão Fase R (V)", nominal: motor.tensaoNominal, measured: tensaoFase1Medido, parecer: getTechnicalOpinion(motor.tensaoNominal, tensaoFase1Medido, 'tensao', 'Fase R', alertas) },
        { description: "Tensão Fase S (V)", nominal: motor.tensaoNominal, measured: tensaoFase2Medido, parecer: getTechnicalOpinion(motor.tensaoNominal, tensaoFase2Medido, 'tensao', 'Fase S', alertas) },
        { description: "Tensão Fase T (V)", nominal: motor.tensaoNominal, measured: tensaoFase3Medido, parecer: getTechnicalOpinion(motor.tensaoNominal, tensaoFase3Medido, 'tensao', 'Fase T', alertas) },
        { description: "Corrente Fase R (A)", nominal: motor.correnteNominal, measured: correnteFase1Medido, parecer: getTechnicalOpinion(motor.correnteNominal, correnteFase1Medido, 'corrente', 'Fase R', alertas) },
        { description: "Corrente Fase S (A)", nominal: motor.correnteNominal, measured: correnteFase2Medido, parecer: getTechnicalOpinion(motor.correnteNominal, correnteFase2Medido, 'corrente', 'Fase S', alertas) },
        { description: "Corrente Fase T (A)", nominal: motor.correnteNominal, measured: correnteFase3Medido, parecer: getTechnicalOpinion(motor.correnteNominal, correnteFase3Medido, 'corrente', 'Fase T', alertas) },
        { description: "Temperatura de Operação (°C)", nominal: motor.temperaturaOperacao, measured: temperaturaOperacaoMedido, parecer: getTemperatureOpinion(motor.temperaturaOperacao, temperaturaOperacaoMedido, alertas) },
        { description: "Vibração", nominal: null, measured: vibracao, parecer: getVibrationOpinion(vibracao, alertas) },
        { description: "Ruído Rolamento Dianteiro", nominal: null, measured: ruidoDianteiro, parecer: getNoiseOpinion(ruidoDianteiro, 'Dianteiro', alertas) },
        { description: "Ruído Rolamento Traseiro", nominal: null, measured: ruidoTraseiro, parecer: getNoiseOpinion(ruidoTraseiro, 'Traseiro', alertas) },
    ];

    const rows = data.map(item => `<tr><td>${item.description}</td><td>${item.nominal || "*"}</td><td>${item.measured || "*"}</td><td>${item.parecer}</td></tr>`).join('');

    let output = `<table><tr><th>Descrição</th><th>Dados Nominais</th><th>Valores Medidos</th><th>Parecer Técnico</th></tr>${rows}
            </table>`;
    return output;
}

const getTechnicalOpinion = (nominal, measured, type = 'other', phase = '', alertas) => {
    if (nominal === null || measured === null) return "*";
    const diffPercentage = Math.abs((measured - nominal) / nominal) * 100;
    let opinion;
    if (type === 'tensao' || type === 'corrente') {
        const limit = 10;
        if (diffPercentage <= limit) {
            opinion = "Condição Normal";
        } else {
            opinion = "Condição Anormal";
            const prefix = (measured < nominal) ? 'Sub' : 'Sobre';
            alertas.push(`${prefix}${type} detectada na ${phase}`);
        }
    } else {
        opinion = (nominal === measured) ? "Condição Normal" : "Condição Anormal";
    }
    return opinion;
};

const getTemperatureOpinion = (nominal, measured, alertas) => {
    if (measured <= nominal) return "Condição Normal";
    alertas.push("Alta temperatura de operação detectada");
    return "Condição Anormal";
};

const getVibrationOpinion = (vibracao, alertas) => {
    const opinion = (vibracao.toLowerCase() === "sim") ? "Condição Anormal" : "Condição Normal";
    if (opinion === "Condição Anormal") alertas.push("Vibração detectada");
    return opinion;
};

const getNoiseOpinion = (noise, position, alertas) => {
    const opinion = (noise.toLowerCase() === "sim") ? "Condição Anormal" : "Condição Normal";
    if (opinion === "Condição Anormal") alertas.push(`Ruído detectado no rolamento ${position}`);
    return opinion;
};

function printComparison() {
    const resultsDiv = document.getElementById('resultados');
    if (resultsDiv.innerHTML.trim() === "") {
        alert("Realize uma comparação antes de imprimir.");
        return;
    }

    const operadorId = document.getElementById('operadorId').value;
    const empresaId = document.getElementById('empresaId').value;
    const tagMotor = document.getElementById('tagMotor').value;
    const marca = document.getElementById('marca1').value.toUpperCase();
    const modelo = document.getElementById('modelo1').value;
    const dataHora = new Date().toLocaleString();
    const tipo = document.getElementById('inspeçãoTipo').value;
    const classe = document.getElementById('inspeçãoClasse').value;
    const tableContent = resultsDiv.querySelector('table');
    const alertasContainer = resultsDiv.querySelector('.alerta');
    let alertasHTML = '';

    if (alertasContainer) {
        alertasHTML = alertasContainer.outerHTML;
    }

    if (!tableContent) {
        alert("Erro ao gerar o relatório. Tente novamente.");
        return;
    }

    let printContent = `
        <h1 style="text-align: center; font-size: 1.5em; font-weight: bold;">Relatório de Análise da performance do Motor</h1>
        <h2 style="text-align: center; font-size: 1.2em; font-weight: bold; margin-top: 10px;"><p><b>Inspeção Realizada:</b> ${dataHora}</p></h2>
        <div style="display: flex; justify-content: space-between;">
            <div>
                <p><b>Inspetor:</b> ${operadorId}</p>
                <p><b>Tipo de Inspeção:</b> ${tipo}</p>
                <p><b>Marca do motor:</b> ${marca}</p>
            </div>
            <div>
                <p><b>Empresa:</b> ${empresaId}</p>                        
                <p><b>Classe:</b> ${classe}</p>
                <p><b>TAG:</b> ${tagMotor}</p>
            </div>
        </div>
        <p><b>Modelo:</b> ${modelo}</p>
        ${tableContent.outerHTML}
        ${alertasHTML}
        <div style="page-break-before: always;"></div>
        <footer style="position: fixed; bottom: 0; width: 100%; text-align: center; font-size: 0.8em; margin-top: 0;">
            <b> © Todos os direitos reservados. Desenvolvido por: Johnnatan Krause Ribeiro Moreno<br>
                © Tel:(45) 9 8821-3899                       E-mail: johnnatankrause@gmail.com</b>
        </footer>
    `;


    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write(`<html><head><title>Análise de dados de Motores</title><style>body{font-family:sans-serif;} table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #ddd; padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style></head><body>${printContent}</body></html>`);
    printWindow.document.close();
    printWindow.print();

    const compareAnother = confirm("Deseja comparar outro motor?");
    if (compareAnother) {
        resetForms();
    } else {
        // Não recarrega a página
        alert('Relatório impresso com sucesso!');
    }
}

function resetForms() {
    document.getElementById("motorForm1").reset();
    document.getElementById("motorForm2").reset();
    document.getElementById("motorForm2").style.display = "block";
    document.getElementById("motorForm3").style.display = "none";
    document.getElementById("motorForm1").style.display = "block";
    document.getElementById("resultados").innerHTML = "";
    document.getElementById('btn-print').style.display = 'none';
    document.getElementById("btn-voltar").style.display = "none";
    document.querySelector('select[name="vibracao"]').selectedIndex = 0;
    document.querySelector('select[name="ruidoDianteiro"]').selectedIndex = 0;
    document.querySelector('select[name="ruidoTraseiro"]').selectedIndex = 0;
    document.getElementById('modelo1').selectedIndex = 0;
    populateModelSelect();
    document.body.classList.remove("form2");
    document.body.classList.remove("form3");
}

function voltarCadastro() {
    document.getElementById("motorForm1").style.display = "block";
    document.getElementById("motorForm2").style.display = "none";
    document.getElementById("motorForm3").style.display = "none";
    document.getElementById("resultados").innerHTML = "";
    document.getElementById('btn-print').style.display = 'none';
    document.getElementById("btn-voltar").style.display = "none";
    document.body.classList.remove("form2");
    document.body.classList.remove("form3");
}