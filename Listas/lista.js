function media() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);
    n4 = parseFloat(document.getElementById("n4").value);
    media = (n1 + n2 + n3 + n4) / 4;

    if (M > 7) {
        alert("Aprovado com média "+media);
    } else {
        alert("Reprovado com média "+media);
    }
}