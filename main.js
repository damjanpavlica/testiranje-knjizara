const s = id => document.getElementById(id);

/*
function s(id) {
    return document.getElementById(id);
}
*/

const knjige = [];

class Knjiga {
    constructor(naslov, autor, zanr) {
        this.naslov = naslov;
        this.autor = autor;
        this.zanr = zanr;
        this.datum = Date.now();
    }
}

function dodatiKnjigu(knjiga) {
    if ("autor" in knjiga && "naslov" in knjiga && "zanr" in knjiga)
        knjige.push(knjiga);
}

function uklonitiKnjigu(naslov) {
    const index = knjige.findIndex(x => x.naslov === naslov);
    knjige.splice(index, 1);
}

// INICIJALNO PUNJENJE NIZA

knjige.push(new Knjiga("Zli dusi", "Fjodor Dostojevski", "roman"));
knjige.push(new Knjiga("Braća Karamazovi", "Fjodor Dostojevski", "roman"));
knjige.push(new Knjiga("Zločin i kazna", "Fjodor Dostojevski", "roman"));

// DOGADJAJI

s("dodavanje").addEventListener("click", function() {
    const knjiga = new Knjiga(s("naslov").value, s("autor").value, s("zanr").value);
    dodatiKnjigu(knjiga);
})

s("brisanje").addEventListener("click", function() {
    uklonitiKnjigu(s("naslov").value);
})