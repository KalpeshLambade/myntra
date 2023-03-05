window.onload =function(){
    var divFromHtml =document.getElementById("product");
    var dataFromLs =JSON.parse(localStorage.getItem("product"));

    var stored =[];

    for(var i=0;i<dataFromLs.length; i++){
        stored +=`<div class="card"><div class="card-top"><img src="${dataFromLs[i].image}" alt="Product-img"></div><div class="card-bot"><p>${dataFromLs[i].name}</p><div><p>${dataFromLs[i].price}</p></div></div></div>`;
    }

    console.log(stored);
    divFromHtml.innerHTML = stored;

}