var raden = document.getElementById("raden");
var check = document.getElementById("checkKnop");
var antwoord = document.getElementById("lingo-container");

var random = Math.floor(Math.random() * words.length);
var directword = words[random]
var woordje = directword.split("");
console.log(woordje);
var row = 0;

for(i=0; i<=4; i++){
	for(t=0; t<=4; t++){
		var letterknop = document.createElement("button");
		letterknop.id = "row" + i + "knop" + t;
		var knopText = document.createTextNode(".");
		letterknop.appendChild(knopText);
		antwoord.appendChild(letterknop);
		document.getElementById("row" + i + "knop0").innerText = woordje[0];
	}
}

check.onclick = function(){
var woord = directword.split("");
var raad = raden.value.split("");

	for(i=0; i<=4; i++){
		var knop = document.getElementById("row" + row + "knop" + i);
		knop.innerHTML = raad[i];
		knop.style.backgroundColor = "red";
		if(woord[i] == raad[i]){
			knop.style.backgroundColor = "green";
			woord[i] = null;
		}
	}

	for(i=0; i<=4; i++){
		var idVanRijEnKnop = document.getElementById("row" + row + "knop" + i);
			if(woord.includes(raad[i]) && idVanRijEnKnop.style.backgroundColor != "green"){
				idVanRijEnKnop.style.backgroundColor = "yellow";
				idVanRijEnKnop.style.borderRadius = "100%";
				var index = woord.indexOf(raad[i]);
				console.log(index)
				woord[index] = null;
				console.log(woord[index]);
			}
	}
	row++
}