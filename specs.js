describe("Testiranje programa za knjizaru", function() {

    it("treba da postoji lista knjiga", function() {
        expect(knjige).toBeDefined();
    })

    it("treba da doda knjigu", function () {
        const inicijalniBrojKnjiga = knjige.length;
        const knjiga1 = new Knjiga("Zli dusi", "Fjodor Dostojevski", "roman");
        dodatiKnjigu(knjiga1);
        expect(knjige.length).toBeGreaterThan(inicijalniBrojKnjiga);
    })

    it("treba da ima obavezna svojstva naslov, autor, zanr", function() {
        const inicijalniBrojKnjiga = knjige.length;
        dodatiKnjigu({});
        dodatiKnjigu({
            autor: "Tolstojevski"
        });
        dodatiKnjigu({
            zanr: "horor"
        });
        dodatiKnjigu({
            naslov: "Smrt u predgradju"
        });
        dodatiKnjigu({
            autor: "Tolstojevski",
            naslov: "Smrt u predgradju"
        });
        expect(knjige.length).toBe(inicijalniBrojKnjiga);
    })

    it("treba da ukloni knjigu", function() {
        const inicijalniBrojKnjiga = knjige.length;
        uklonitiKnjigu("Zli dusi");
        expect(knjige.length).toBeLessThan(inicijalniBrojKnjiga);
    })

    it("knjige su poredjane po datumu dodavanja", function() {
        let poredjano = true;
        for (let i = 1; i < knjige.length; i++) {
            if (knjige[i].datum < knjige[i-1].datum) {
                poredjano = false;
                break;
            }
        }
        expect(poredjano).toBe(true);
    })

})