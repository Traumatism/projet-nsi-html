function repeatString(content, n) {
	/* Répète 'content' n fois */

	let output = "";

	for (i = 0; i <= n; i++) {
		output += content;
	}

	return output;
}

function generateBubble(content) {
	/* Crée un texte dans une "bulle" ASCII */
	let n = content.length;

	return `
.${repeatString("-", n)}.
| ${repeatString(" ", n)} |
|  ${content}  |
| ${repeatString(" ", n)} |
'${repeatString("-", n)}'
        `;
}

function card_1() {
	let titre = document.getElementById("title");

	titre.style.transition = "1s";
	titre.style.fontSize = "0";
}

function card_2() {
	let kitty = document.getElementById("hellokitty");

	sign = "";
	if (kitty.style.transform == "rotate(25deg)") {
		sign = "-";
	}

	kitty.style.transform = `rotate(${sign}25deg)`;
}

function card_3() {
	var content = "😻 " + prompt() + " 🌸";

	document.getElementById("bubble").innerHTML = generateBubble(content);
}

function card_4() {
	window.location.href = "https://fr.wikipedia.org/wiki/Hello_Kitty";
}

function card_5() {
	window.location.reload();
}

function card_6() {
	window.location.href = "https://www.youtube.com/watch?v=DTU2VpTJ0So";
}

function card_7() {}

function card_8() {
	card_1();

	var title = document.getElementById("title");

	title.innerHTML = `

Page réalisée avec amour par Victor Robert <3

    `;

	title.style.fontSize = "50px";
}

function card_9() {}
