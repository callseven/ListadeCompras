let input = document.getElementById("item");
let button = document.getElementById("button");
let ul = document.getElementById("itens");

function criarElemento(){
    let li = document.createElement("li");

    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    li.appendChild(xButton);

    let text = document.createTextNode(input.value);

    ul.appendChild(li);

}

button.addEventListener("click", criarElemento);
