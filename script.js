(function(){
    let conteiner = document.getElementById("conteiner")
    const piscas = document.querySelectorAll(".circle")


    conteiner.addEventListener("click",function(event){
        let botao = event.target.id    
        if(botao == "botaoLigar") {
            
        } else if(botao == "botaoDesligar") {
            [...piscas].forEach( pisca => {
                pisca.style.animation = "none"
                pisca.style.backgroundColor = "gray"
            })
        }
    })
})()