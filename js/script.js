//Recuperando o botão com o getElmentById
const botao = document.getElementById("btn-1");

//Recuperar um item específico com a
//função querySelector(parâmetro)

// const seletor = document.querySelector("li")
// console.log(seletor.textContent)


//recuperar uma lista de elementos com a função 
//querySelecorAll
const seletores = document.querySelectorAll(li);

seletores.forEach((item )=>{

    if (item.textContent == "Item-15"){ 
        let meuItem = item;  
        console.log(`Itens selecionados : ${item.textContent}`); //interpolação
        meuItem.textContent = "Tá dominado!"
    }
})

console.log(seletores);
//Estudar:
//setTimeOut
//serInterVal
//Random
//Math.Ceil
//Math.Random
//Math.florr

