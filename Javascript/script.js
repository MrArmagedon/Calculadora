
let n1, n2, operacio;

function suma(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "+"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function mult(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "*"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function divi(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "/"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function arrel2(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.sqrt(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function arrel3(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.cbrt(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function elev2(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = n1*n1
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function elev3(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = n1*n1*n1
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function calcula(){
    let resultat;
    n2 = parseFloat(document.getElementById("pantalla").value)
   
    if(operacio=="+"){
        resultat = n1+n2
        document.getElementById("pantalla").value = resultat
    }

    else if(operacio=="-"){
        resultat = n1-n2
        document.getElementById("pantalla").value = resultat

    }

    else if(operacio=="*"){
        resultat = n1*n2
        document.getElementById("pantalla").value = resultat

    }

    else if(operacio=="/"){
        resultat = n1/n2
        document.getElementById("pantalla").value = resultat

    }

    document.getElementById("pantalla").focus()

}
