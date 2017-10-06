

function calculate() {
	var inicial = Number(document.getElementById('inicial').value);
	var atual = inicial;
	var mensal = Number(document.getElementById('investMensal').value);
	var anos = Number(document.getElementById('periodo').value);
	var juroAno = Number(document.getElementById('juros_aa').value);
	var juroMensal =  Number(juroAno/12);
	let anoAtual = 0;

	for (let mesesCalculados = 0; mesesCalculados < anos*12; mesesCalculados++) {
		if (mesesCalculados%12 === 0) {anoAtual++};
		if (mesesCalculados === 0 || mesesCalculados%12 === 0){console.log("Ano " + anoAtual)} 
		atual = (atual + mensal)*1.01;
		console.log(atual);
	}

	console.log("Total disponível: " + atual);
	console.log("Total juros acumulados " + (atual-((anos*12*mensal)+inicial)));
	console.log("Total investido: " + (inicial+anos*12*mensal));
}