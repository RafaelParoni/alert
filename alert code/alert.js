function alerta(value){
    if(value == "noRed"){
        document.getElementById('alertNored').style.display = "block"
    }else {
        document.getElementById('alertred').style.display = "block"
    }
}
function noConfirm(){
    document.getElementById('alertred').style.display = "none"
    document.getElementById('alertNored').style.display = "none"
}
function confirm(){
    window.location = document.getElementById('confirm').getAttribute('value')
    noConfirm()
}
function red(id){
    var elementovar = document.getElementById('confirm') /* <---- Importante */
    if(id == "site01"){
        alerta()  
        elementovar.setAttribute("value", "#")  /* <---- Importante */
    }
    /*  sintax para adicionar outros sites a lista!
    else if(id == "Nored"){
        alerta('Nored') 
    }
    */
}