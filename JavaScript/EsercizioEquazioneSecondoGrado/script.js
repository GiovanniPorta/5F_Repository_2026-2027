// TODO scrivi lo script

// prendiamo un riferimento al tag html con id "btn-calcola"
const btn = document.getElementById("btn-calcola");

// prendiamo un riferimento agli input testuali
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const sol = document.getElementById("soluzione1");
const sol2 = document.getElementById("soluzione2");

function calcolaSoluzioni() {
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);
    let discriminante = (b*b) - 4*a*c;
    let soluzione, soluzione2;

    if(discriminante > 0) {
        soluzione = (-b + Math.sqrt(discriminante)) / 2*a;
        soluzione2 = (-b - Math.sqrt(discriminante)) / 2*a;
    }
        
    else if(discriminante < 0) {
        window.alert("ERRORE");
    }
    
    else if(discriminante == 0) {
        soluzione = (-b + Math.sqrt(discriminante)) / 2*a;
    }

    sol.textContent = soluzione;
    sol2.textContent = soluzione2;
}

btn.addEventListener("click", calcolaSoluzioni);

// btn.addEventListener("click", function() { // funzione anonima

// })


