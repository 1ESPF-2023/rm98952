// //Recuperando o botão com o getElmentById
// const botao = document.getElementById("btn-1");

// //Recuperar um item específico com a
// //função querySelector(parâmetro)

// // const seletor = document.querySelector("li")
// // console.log(seletor.textContent)


// //recuperar uma lista de elementos com a função 
// //querySelecorAll
// const seletores = document.querySelectorAll(li);

// seletores.forEach((item )=>{

//     if (item.textContent == "Item-15"){ 
//         let meuItem = item;  
//         console.log(`Itens selecionados : ${item.textContent}`); //interpolação
//         meuItem.textContent = "Tá dominado!"
//     }
// })

// console.log(seletores);
//Estudar:
//setTimeOut
//serInterVal
//Random
//Math.Ceil
//Math.Random
//Math.florr

 function mudarCor() {
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round (Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout( mudarCor, 1000);

    const banner1 = document.querySelector(".banner-1");
    banner1.style.backgroundColor = `rgb(${r},${g},${b})`;

    const banner2 = document.querySelector(".banner-2");
    banner2.style.backgroundColor = `rgb(${r},${g},${b})`;
 }
 mudarCor();
 function mudarbanner() {
    const banner1 = document.querySelector(".banner-1");
 }