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
//Math.florr // que joga os números para baixo
//math.round aredonda os números aleatoriamente

//  function mudarCor() {
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round (Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmp = setTimeout( mudarCor, 1000);

//     const banner1 = document.querySelector(".banner-1");
//     banner1.style.backgroundColor = `rgb(${r},${g},${b})`;

//     const banner2 = document.querySelector(".banner-2");
//     banner2.style.backgroundColor = `rgb(${r},${g},${b})`;
//  }
//  mudarCor();
//  function mudarbanner() {
//     const banner1 = document.querySelector(".banner-1");
//  }



// function mudabanner(){
//    const imgElement1 = document.querySelector(".banner-1 img");
//    // console.log(imgElement1);
//    let nr = Math.ceil(Math.random()*3);
//    imgElement1.src = `./img/banner-lateral-${nr}.gif`;
//    setTimeout(mudabanner2 , 2000 );
// }


// function mudabanner2(){
//    const imgElement2 = document.querySelector(".banner-2 img");
//    // console.log(imgElement1);
//    let nr = Math.ceil(Math.random()*3);
//    imgElement2.src = `./img/banner-lateral-${nr}.gif`;
//    setTimeout(mudabanner , 2000 );
// }

// mudabanner();

function mudabanner(){
   const imgElement = document.querySelector(".banner-1 img");
   // console.log(imgElement1);
   let nr = Math.ceil(Math.random()*3);
   imgElement.src = `./img/banner-lateral-${nr}.png`;

   const imgElement2 = document.querySelector(".banner-2 img");
   // console.log(imgElement1);
   nr = Math.ceil(Math.random()*3);
   imgElement2.src = `./img/banner-lateral-${nr}.png`;

   setTimeout(mudabanner , 2000 );
}

mudabanner();

const botao = document.querySelector("button");

botao.addEventListener("click", function (){
   if(this.textContent == "LIGAR"){
      const imgElement = document.querySelector("img[alt=´Lampada apagada´]");
      imgElement.src = "./img/pic_bulbon.gif";
      imgElement.alt = "Lampada acesa";
      this.textContent = "DESLIGAR";
   }else{
      const imgElement = document.querySelector("img[alt=´Lampada acesa´]");
      imgElement.src = "./img/pic_buloff.gif";
      imgElement.alt = "Lampada apagada";
      this.textContent = "LIGAR";
   }
});
