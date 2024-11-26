function executar(){
    let v1 = parseInt(document.getElementById("v1").value)
    let v2 = parseInt(document.getElementById("v2").value)
    let texto = document.getElementById("texto")
    if (v1 < v2){
        texto.innerHTML = ""
        for (i = v1; i<=v2; i++){
            texto.innerHTML += i + " "
        }
    }else{
        alert("o valor 2 precisa ser maior que o valor 1")
    }
}