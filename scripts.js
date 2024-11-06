function colocarNaTela(dados) {
	document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name;
	document.querySelector(".temp").innerHTML =
		Math.floor(dados.main.temp) + "ºC";
	document.querySelector(".icone").src =
		"https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
	document.querySelector(".umidade").innerHTML =
		"Max: " +
		Math.floor(dados.main.temp_max) +
		"ºC" +
		" Mín: " +
		Math.floor(dados.main.temp_min) +
		"ºC";
	console.log(dados);
}

async function buscarCidade(cidade) {
	const dados = await fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			cidade +
			"&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric",
	).then((response) => response.json());

	colocarNaTela(dados);
}
function CliqueiNoBotao() {
	const cidade = document.querySelector(".input-cidade").value;

	buscarCidade(cidade);
}
