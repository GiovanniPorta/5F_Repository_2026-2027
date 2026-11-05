// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".
const btnAgg=document.getElementById("btn-aggiungi");
const prodotto=document.getElementById("item");
const lista=document.getElementById("lista");
const errore=document.getElementById("errore");

function aggiungiProdotto(){

    errore.textContent="";
    if(prodotto.value === ""){
        errore.textContent="!!!TE GHET SCRIIT NIENT MONGOL!!!";
        return
    }
    //creo un nuovo <li> vuoto
    const nuovoItem=document.createElement("li");

    //riempio il <li> con quanto inserito dall'utente
    nuovoItem.textContent=prodotto.value;

    //creo un button nel nuovo item
    const btnRim=document.createElement("button");
    btnRim.textContent="GET OUT!";
    nuovoItem.append(btnRim);
    btnRim.addEventListener("click", () => {
        nuovoItem.remove();
    })

    //aggiungo il <li> alla lista
    lista.append(nuovoItem);

    //resetto l'input
    prodotto.value="";
}

btnAgg.addEventListener("click", aggiungiProdotto);