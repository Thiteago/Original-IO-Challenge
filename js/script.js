function selectColor(){
    var cor = document.getElementById('cor');
    if(document.getElementById('radio-rosa').checked == true){
        document.getElementById('rosa').classList.add("cor-selecionada")
        document.getElementById('azul').classList.remove("cor-selecionada")
        document.getElementById('marrom').classList.remove("cor-selecionada")
        document.getElementById('preto').classList.remove("cor-selecionada")
        cor.innerHTML = "(Rosa)";

    }else if(document.getElementById('radio-azul').checked == true){
        document.getElementById('azul').classList.add("cor-selecionada")
        document.getElementById('rosa').classList.remove("cor-selecionada")
        document.getElementById('marrom').classList.remove("cor-selecionada")
        document.getElementById('preto').classList.remove("cor-selecionada")
        cor.innerHTML = "(Azul)";

    }else if(document.getElementById('radio-marrom').checked == true){
        document.getElementById('marrom').classList.add("cor-selecionada")
        document.getElementById('rosa').classList.remove("cor-selecionada")
        document.getElementById('azul').classList.remove("cor-selecionada")
        document.getElementById('preto').classList.remove("cor-selecionada")
        cor.innerHTML = "(Marrom)";

    }else if(document.getElementById('radio-preto').checked == true){
        document.getElementById('preto').classList.add("cor-selecionada")
        document.getElementById('rosa').classList.remove("cor-selecionada")
        document.getElementById('azul').classList.remove("cor-selecionada")
        document.getElementById('marrom').classList.remove("cor-selecionada")
        cor.innerHTML = "(Preto)";
    }

    
}


