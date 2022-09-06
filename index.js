class Produkten {
    constructor(name, preis) {
        this.pN = name;
// Fragen Nummer ---------------------------------------------(3 & 4)
        this.ps = preis + (preis * 0.02);
    }
}
produkt1 = new Produkten("Schallplatte", 10)
produkt2 = new Produkten("Fernseher", 210)
produkt3 = new Produkten("Radio", 12)
produkt4 = new Produkten("Tischlampe", 18)
produkt5 = new Produkten("Pfanne", 5)
produkt6 = new Produkten("Topf", 3)
produkt7 = new Produkten("Stereo", 20)
produkt8 = new Produkten("Geschenkkarte", 5)


function Mitarbeiter(name, position, arbeitsJahren, abteilung) {
    this.mN = name;
    this.p = position;
    this.aJ = arbeitsJahren;
    this.aT = abteilung;
}
mitA1 = new Mitarbeiter("Henry", "Junior", 2, "Human Resources")
mitA2 = new Mitarbeiter("Oscar", "Team Leader", 8, "Marketing")
mitA3 = new Mitarbeiter("Paula", "Senior", 6, "Production")
mitA4 = new Mitarbeiter("Lenny", "Junior", 3, "Marketing")
mitA5 = new Mitarbeiter("Frederike", "Junior", 1, "Human Resources")
mitA6 = new Mitarbeiter("Noamie", "Senior", 10, "Human Resources")
mitA7 = new Mitarbeiter("Greg", "Team Leader", 2, "Production")
mitA8 = new Mitarbeiter("Simone", "Senior", 2, "Production")
mitA9 = new Mitarbeiter("Paola", "Team Leader", 10, "Human Resources")


function Kunden(name, kaufDatum, produkte, zahlArt, bewertung) {
    this.kN = name;
    this.kD = kaufDatum;
    this.p = produkte;
    this.zA = zahlArt;
    this.bw = bewertung;
}
kunde1 = new Kunden("Terry", "19.Oktober.2021", [produkt1], "Kreditkarte", "4-Sterne")
kunde2 = new Kunden("Sarah", "01.April.2020", [produkt2], "Bar", "Undefined")
kunde3 = new Kunden("Dorry", "20.Mörz.2019", [produkt3, produkt4], "Paypal", "5-Sterne")
kunde4 = new Kunden("Tobias", "02.Oktober.2021", [produkt5, produkt6, produkt6], "Kreditkarte", "Undefined")
kunde5 = new Kunden("Ana", "25.Juli.2018", [produkt7], "Kreditkarte", "2-Sterne")
kunde6 = new Kunden("Leo", "07.Juni.2019", [produkt1], "Paypal", "5-Sterne")
kunde7 = new Kunden("Diana", "15.Dezember.2021", [produkt8], "Bar", "Undefined")


const productenA = [produkt1, produkt2, produkt3, produkt4, produkt5, produkt6, produkt7, produkt8];
const kundenA = [kunde1, kunde2, kunde3, kunde4, kunde5, kunde6, kunde7];
const mitarbeiterA = [mitA1, mitA2, mitA3, mitA4, mitA5, mitA6, mitA7, mitA8, mitA9];
document.write(`<h1>Kunden Section</h1>`)
const kundenen = (ele) => {
    document.write(`<div>`)
    document.write(`
    <div class="container">
        <table><tr><td>
        ${ele.kN}</td><td>
        ${ele.kD}</td><td>
        ${ele.p.map((ele2) => ele2.pN)}</td><td>
        ${ele.zA}</td><td>
        ${ele.bw}</td></tr></table></div>`)
    document.write(`</div>`)
}

kundenA.map(kundenen)

document.write(`<h1>Mitarbeiter</h1>`)
mitarbeiterA.map((ele) => {
    document.write(`<div>`)
    document.write(`
    <div class="container">
        <table><tr><td>
        ${ele.mN}</td><td>
        ${ele.p}</td><td>
        ${ele.aJ}</td><td>
        ${ele.aT}</td></tr></table></div>`)
    document.write(`</div>`)
})



document.write(`<h1>ProductenA</h1>`)
productenA.map((ele) => {
    document.write(`<div>`)
    document.write(`
    <div class="container">
        <table><tr><td>
        ${ele.pN}</td><td>
        ${ele.ps}</td></tr></table></div>`)
    document.write(`</div>`)
})


// Frage Nummer -------------------------------------------------(1)
kundenA.map((param) => {
    let summe = 0;
    let verdienst = 0;
    let durchschnittlich = 0;

    param.p.map((ele) => {
        summe += ele.ps
// Frage Nummer -------------------------------------------------(6)
        durchschnittlich += (ele.ps * 0.02)
// Frage Nummer -------------------------------------------------(5)
        verdienst += ele.ps * 0.02
    });

    console.log(`${param.kN} muss ${summe}€ zahlen.
    das Unternehmen verdient ${verdienst}
    durchschnittlich ist ${durchschnittlich}`);
});

// Frage Nummer -------------------------------------------------(2)
mitarbeiterA.filter((ele) => {
    if (ele.p === "Team Leader") console.log(`${ele.mN} ist ein Team Leiter in ${ele.aT} Abteilung`);
});