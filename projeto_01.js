//Para salvar os dados do formulário no localstorage:
var titulo, linguagem, categoria, descricao, urlvideo, objDicas;
var arrayDicas = [];

function salvarDados() {
    index = document.getElementById("card").selectedIndex;
    titulo = document.getElementById("digTitulo").value;
    linguagem = document.getElementById("digLinguagem").value;
    categoria = document.getElementById("selCategoria").value;
    descricao = document.getElementById("digDescricao").value;
    urlvideo = document.getElementById("urlVideo").value;

    let card = document.createElement("div");
    card.id = "cardDica";

    objDicas = {
        index: index,
        titulo: titulo,
        linguagem: linguagem,
        categoria: categoria,
        descricao: descricao,
        urlvideo: urlvideo,
    };

    arrayDicas = JSON.parse(localStorage.getItem("objDicas"));
    arrayDicas.push(objDicas);

    localStorage.setItem("objDicas", JSON.stringify(arrayDicas));

    alert("Dica cadastrada na base do connhecimento.");

    window.location.reload();
}


// Para mostrar na tela os dados gravados no localstorage:
function mostrarDados() {
    if (localStorage.hasOwnProperty("objDicas")) {
        arrayDicas = JSON.parse(localStorage.getItem("objDicas"));

        arrayDicas.forEach((objDicas, index) => {
            let card = document.createElement("div");
            card.id = "cardDica";

            card.innerHTML += `<div id="titulo"> ${objDicas.titulo}</div>
        <div id="linguagem"> <b> Linguagem: </b> ${objDicas.linguagem} </div>
        <div id="categoria"> <b> Categoria: </b> ${objDicas.categoria}</div>
        <div id="descricao"> ${objDicas.descricao}</div>
        <div id="button2">
            <button class="btnPequeno2" type=button onclick="excluirDados(${index})">
                <img class="imgBtnPequeno" src="./imagens/trash-can-regular.svg">
            </button>
            <button class="btnPequeno2" type=button onclick="editarDados(${index})">
                    <img class="imgBtnPequeno" src="./imagens/pen-to-square-regular.svg">
            </button>
            <button class="btnPequeno3" type=button id="btnVideo">
            <a href=${objDicas.urlvideo}>
                <img src = "./imagens/video-solid.svg" class="imgBtnPequeno" target="_blank" rel="noopener noreferrer"></a>
            </button>
        </div>`;
            container3.appendChild(card);

            if (objDicas.urlvideo == "") {
                var remover = document.querySelector("#btnVideo");
                remover.parentNode.removeChild(remover);
            }
        });
    }
}


//Para contabilizar as dicas:
arrayDicas = JSON.parse(localStorage.getItem("objDicas"));
valorFrontEnd = arrayDicas.filter(function (objDicas) {
    if (objDicas.categoria == "FrontEnd") {
        return true;
    }
}).length;

valorBackEnd = arrayDicas.filter(function (objDicas) {
    if (objDicas.categoria == "BackEnd") {
        return true;
    }
}).length;

valorFullStack = arrayDicas.filter(function (objDicas) {
    if (objDicas.categoria == "FullStack") {
        return true;
    }
}).length;

valorSoft = arrayDicas.filter(function (objDicas) {
    if (objDicas.categoria == "Comportamental/Soft") {
        return true;
    }
}).length;

valorTotal = arrayDicas.filter(function (objDicas) {
    if (objDicas.categoria != "") {
        return true;
    }
}).length;

document.getElementById("valorF").innerHTML = valorFrontEnd;
document.getElementById("valorB").innerHTML = valorBackEnd;
document.getElementById("valorFS").innerHTML = valorFullStack;
document.getElementById("valorS").innerHTML = valorSoft;
document.getElementById("valorT").innerHTML = valorTotal;


//Editando uma dica:
function editarDados(index) {

    var objDicasIn = arrayDicas[index]

    document.getElementById("digTitulo").value = objDicasIn.titulo
    document.getElementById("digLinguagem").value = objDicasIn.linguagem
    document.getElementById("selCategoria").value = objDicasIn.categoria
    document.getElementById("digDescricao").value = objDicasIn.descricao
    document.getElementById("urlVideo").value = objDicasIn.urlvideo

    alert("EDIÇÃO - As informações da dica selecionada para edição foram enviadas para a barra lateral. Realize as devidas edições e clique em Salvar para finalizar.")
}


//Excluindo uma dica:
function excluirDados(index) {
    let excluir = confirm(
        "DELETANDO! Você tem certeza que deseja deletar essa dica?"
    );
    if (excluir == true) {
        arrayDicas.splice(index, 1);
        localStorage.setItem("objDicas", JSON.stringify(arrayDicas));
        window.location.reload();
    } else {
        localStorage.setItem("objDicas", JSON.stringify(arrayDicas));
        window.location.reload();
    }
}


//Pesquisando uma dica:
function pesquisarDados() {

    let pesquisaTitulo = document.getElementById("inputPesquisar").value;

    arrayDicas.forEach((objDicas, index) => {
        var remover = document.querySelector("#cardDica");
        remover.parentNode.removeChild(remover);
        if (objDicas.titulo == pesquisaTitulo) {
            console.log(objDicas);

            card = document.createElement("div");
            card.id = "cardDica";

            card.innerHTML += `<div id="titulo"> ${objDicas.titulo}</div>
        <div id="linguagem"> <b> Linguagem: </b> ${objDicas.linguagem} </div>
        <div id="categoria"> <b> Categoria: </b> ${objDicas.categoria}</div>
        <div id="descricao"> ${objDicas.descricao}</div>
        <div id="button2">
            <button class="btnPequeno2" type=button onclick="excluirDados(${index})">
                <img class="imgBtnPequeno" src="./imagens/trash-can-regular.svg">
            </button>
            <button class="btnPequeno2" type=button onclick="editarDados(${index})">
                    <img class="imgBtnPequeno" src="./imagens/pen-to-square-regular.svg">
            </button>
            <button class="btnPequeno3" type=button id="btnVideo">
            <a href=${objDicas.urlvideo}>
                <img src = "./imagens/video-solid.svg" class="imgBtnPequeno" target="_blank" rel="noopener noreferrer"></a>
            </button>
        </div>`;
            
            container3.appendChild(card);

            if (objDicas.urlvideo == "") {
                var remover = document.querySelector("#btnVideo");
                remover.parentNode.removeChild(remover);
            }
        }
    });
}


// Para limpar dados da pesquisa:
function limparPesquisa() {
    window.location.reload();
}





