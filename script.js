let input = document.getElementById("item");
let button = document.getElementById("button");
let ul = document.getElementById("itens");
let itens = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

function  criarElemento(){
    let li = document.createElement("li");

    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";
    li.appendChild(xButton);

    let text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);
    input.value = "";
    buttonEvents();
}

function deleteItem (){
    this.parentElement.remove();
}

function buttonEvents (){
    for (let i =0; i < itemButtons.length ; i++ ){
        itemButtons[i].addEventListener("click", deleteItem);
    }
}

button.addEventListener("click", criarElemento);
buttonEvents();