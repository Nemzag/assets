/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-09-24 Time: 11:57
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Code appelé automatiquement
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

const INPUT_CONVERTER_GRECO_GERMANO_LATIN = document.getElementById("inputDeclinatorGrecoGermanoLatin");
const DIV_SUFFIX_DISPLAY = document.getElementById("div-suffix-display");

//----------------------------------------------------------------------------------------
// init variables…
//----------------------------------------------------------------------------------------

ϰtable.setAttribute("style", "width: auto; margin-left: 0; margin-right: auto;")
ϰtable.setAttribute("id", "result")

let ϰtextSuffix = {
    // …ë
    ë : {
        suffix : "ë",
        langue : "Sq",
        genre: "Neutral"
    },
    // …a
    a : {
        suffix : "a",
        langue : "Sq",
        genre: "Veminine singular positivə"
    },
    // …i
    i : {
        suffix : "a",
        langue : "Sq",
        genre: "Veminine singular nɛʒativə"
    },
    // …as
    as : {
        suffix : "as",
        langue : "Qr",
        genre: "Veminine singular positivə"
    },
    // …ai
    ai : {
        suffix : "ai",
        langue : "Qr",
        genre: "Vemininə pluralə positivə"
    },
    // …o
    o : {
        suffix : "o",
        langue : "Sq",
        genre: "?"
    },
    // …os
    os : {
        suffix : "os",
        langue : "Qr",
        genre: "Masculine singular positivə"
    },
    // …oi
    oi : {
        suffix : "oi",
        langue : "Qr",
        genre: "Masculine plural positivə"
    },
    // …om
    om : {
        suffix : "om",
        langue : "Qr",
        genre: "Neutral singular positivə"
    },
    // …on
    on : {
        suffix : "on",
        langue : "Qr",
        genre: "Neutral singular sopitivə"
    },
    // …us
    us : {
        suffix : "us",
        langue : "la",
        genre: "?"
    },
    // …um
    um : {
        suffix : "um",
        langue : "la",
        genre: "Accomplished"
    },
    // …u
    u : {
        suffix : "u",
        langue : "aln",
        genre: "Adjective"
    },
    // …uarë
    uarë : {
        suffix : "uarë",
        langue : "Ʃkupə",
        ISO : "sq",
        genre: "?"
    },
    // …usë
    usë : {
        suffix : "usë",
        langue : "Ʃkupə",
        ISO    : "sq",
        genre  : "?"
    },
    // …uesë
    uesë : {
        suffix : "uesë",
        langue : "Ʃkupə",
        ISO    : "sq",
        genre  : "?"
    },
    // …umë
    umë : {
        suffix : "umë",
        langue : "Ʃkupə",
        ISO    : "aln",
        genre  : "?"
    },
    // …uemë
    uemë : {
        suffix : "uemë",
        langue : "Ʃkupə",
        ISO    : "sq",
        genre  : "?"
    },
    // …urë
    urë : {
        suffix : "urë",
        langue : "Ʃkupə",
        ISO    : "als",
        genre  : "?"
    },
    // …unë
    unë : {
        suffix : "unë",
        langue : "Ʃkupə",
        dialect : "aln",
        genre: "Gheg"
    },
};

// ϰparagraph.innerText = ϰtransformed;

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

INPUT_CONVERTER_GRECO_GERMANO_LATIN.addEventListener("keyup", addSuffixDeclination);

function addSuffixDeclination() {

    console.log("function addSuffixDeclination launched.")
    let ϰtext;

    DIV_SUFFIX_DISPLAY.innerHTML = null;

    ϰtext = INPUT_CONVERTER_GRECO_GERMANO_LATIN.value.toString().toLowerCase().substring(0, 100);

    /*
    let ϰtextSuffixIm = "imë";

    let ϰtextSuffixÔr = "ôr";
    let ϰtextSuffixÔn = "ôn";
    let ϰtextSuffixÔs = "ôs";

    let ϰtextSuffixTôr = "tôr";
    let ϰtextSuffixTôn = "tôn";
    let ϰtextSuffixTrice = "trice";
    let ϰtextSuffixTrix = "trix";

    // Type’s Grec :
    let ϰtextSuffixIque = "iqwë";
    let ϰtextSuffixIk = "ikë";
    let ϰtextSuffixIst = "istë";
    let ϰtextSuffixIsht = "ishtë";
    let ϰtextSuffixIsm = "ismë";
    let ϰtextSuffixIzm = "izmë";
    let ϰtextSuffixIshm = "ishmë";
    let ϰtextSuffixAqishm = "aķishmë";
    let ϰtextSuffixAcism = "acismë";
    */
    let ϰtextTerminal;
    let ϰparagraph = document.createElement("p");


    ϰtextTerminal =

        ϰtext + ϰtextSuffixË + '\n' +
        ϰtext + ϰtextSuffixA + '\n' +
        ϰtext + ϰtextSuffixO + '\n' +
        ϰtext + ϰtextSuffixU + " (G.)" + " / " + ϰtext + ϰtextSuffixUar + " (T.)" + '\n' + '\n' +

        ϰtext + ϰtextSuffixUn + " (G.)" + " / " + ϰtext + ϰtextSuffixUr + " (T.)" + '\n' + '\n' +

        ϰtext + ϰtextSuffixIm + '\n' +
        ϰtext + ϰtextSuffixIsht + '\n' +
        ϰtext + ϰtextSuffixIzm + '\n' + '\n' +

        ϰtext + ϰtextSuffixÔr + " / " + ϰtext + "‑" + ϰtextSuffixË +  '\n' +
        ϰtext + ϰtextSuffixÔn + '\n' +
        ϰtext + ϰtextSuffixÔs + '\n' + '\n' +

        ϰtext + ϰtextSuffixTôr + '\n' +
        ϰtext + ϰtextSuffixTôn + '\n' +
        ϰtext + ϰtextSuffixTrice + '\n' +
        ϰtext + ϰtextSuffixTrix;

    ϰparagraph.innerText = ϰtextTerminal;

    DIV_SUFFIX_DISPLAY.append(ϰhr);
    DIV_SUFFIX_DISPLAY.append(ϰparagraph);
}


/*
function changeCLetterFunction() {

    let ϰtransformed =

        // Cyrille.
        ϰtext.replace(/c/g, "S").trim().toUpperCase() + ' {Cy. « S » : ' +  slugify(ϰtext.toLowerCase().replace(/c/g, "s").trim()) + '}' + '\n' +

        // Qrêgwë.
        ϰtext.replace(/c/g, "θ").trim().toUpperCase() + ' {Qr. « Θ » : ' +  slugify(ϰtext.toLowerCase().replace(/c/g, "th")).trim().toLowerCase() + '}' + '\n' +

        // Shkupë.
        ϰtext.replace(/c/g, "TS").trim().toUpperCase() + ' {Sq. « TS » : ' +  slugify(ϰtext.toLowerCase().replace(/c/g, "ts")).trim() + '}' + '\n' +

        // I.P.A.
        ϰtext.replace(/c/g, "C").trim().toUpperCase() + ' {I.P.A. « C » : ' +  slugify(ϰtext.toLowerCase().replace(/c/g, "c")).trim() + '}' + '\n' +

        // Chinese Pianu
        ϰtext.replace(/c/g, "ɕ").trim().toUpperCase() + ' {Chi.P. « ɕ » : ' +  slugify(ϰtext.toLowerCase().replace(/c/g, "qh")).trim() + '}' + '\n' +

        // English
        ϰtext.replace(/c/g, "K").trim().toUpperCase() + ' {En. « K » : ' +  slugify(ϰtext.replace(/c/g, "k")).trim().toLowerCase() + '}' + '\n' +

        // Latin
        ϰtext.replace(/c/g, "Q").trim().toUpperCase() + ' {La. « Q » : ' +  slugify(ϰtext.replace(/c/g, "q")).trim().toLowerCase() + '}' + '\n' +

        // ?
        ϰtext.replace(/c/g, "Tɕ").trim().toUpperCase() + ' {Sl. « Tɕ » : ' +  slugify(ϰtext.replace(/c/g, "qh")).trim().toLowerCase() + '}' + '\n' +

        // Italia
        ϰtext.replace(/c/g, "TƩ").trim().toUpperCase() + ' {It. « TƩ » : ' +  slugify(ϰtext.replace(/c/g, "tsh")).trim().toLowerCase() + '}' + '\n' +

        // Türk
        ϰtext.replace(/c/g, "DƷ").trim().toUpperCase() + ' {Tr. « DƷ » : ' +  slugify(ϰtext.replace(/c/g, "dj")).trim().toLowerCase() + '}' + '\n' +

        // Êtrusqwë
        ϰtext.replace(/c/g, "G").trim().toUpperCase() + ' {Ê. « G » : ' +  slugify(ϰtext.replace(/c/g, "g")).trim().toLowerCase() + '}';

    let ϰhr = document.createElement("hr");
    ϰhr.setAttribute("class", "ui divider");

    let ϰparagraph = document.createElement("p");

    ϰparagraph.innerText = ϰtransformed;

    RESULT.append(ϰhr);
    RESULT.append(ϰparagraph);
}
*/

/*
function changeCLetterFunction() {

    // console.log('Fonction « changeFirstLetterFunction » lancé.');

    // V ⇒ v & R ⇒ L / R / N.
    let ϰtextVL;
    let ϰtextVR;
    let ϰtextVN;

    ϰtextVL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextVR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextVN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // « /gi » : Global Case‑insensitive.

    // V ⇒ v & R ⇒ L
    ϰtextVL = ϰtextVL
        .replace(/v/gi, "v")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextVR = ϰtextVR
        .replace(/v/gi, "v")
        .trim()
        .toLowerCase() + ".";

    ϰtextVN = ϰtextVN
        .replace(/v/gi, "v")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------

    // V ⇒ p & R ⇒ L / R / N.
    let ϰtextPL;
    let ϰtextPR;
    let ϰtextPN;

    ϰtextPL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextPR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextPN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ p.
    ϰtextPL = ϰtextPL
        .replace(/v/gi, "p")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextPR = ϰtextPR
        .replace(/v/gi, "p")
        .trim()
        .toLowerCase() + ".";

    ϰtextPN = ϰtextPN
.replace(/v/gi, "p")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------

    // V ⇒ b & R ⇒ L / R / N.
    let ϰtextBL;
    let ϰtextBR;
    let ϰtextBN;

    ϰtextBL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextBR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextBN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ p.
    ϰtextBL = ϰtextBL
        .replace(/v/gi, "b")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextBR = ϰtextBR
        .replace(/v/gi, "b")
        .trim()
        .toLowerCase() + ".";

    ϰtextBN = ϰtextBN
        .replace(/v/gi, "b")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------

    // V ⇒ m & R ⇒ L / R / N.
    let ϰtextML;
    let ϰtextMR;
    let ϰtextMN;

    ϰtextML = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextMR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextMN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ m.
    ϰtextML = ϰtextML
        .replace(/v/gi, "m")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextMR = ϰtextMR
        .replace(/v/gi, "m")
        .trim()
        .toLowerCase() + ".";

    ϰtextMN = ϰtextMN
        .replace(/v/gi, "m")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------

    // V ⇒ mb & R ⇒ L / R / N.
    let ϰtextMBL;
    let ϰtextMBR;
    let ϰtextMBN;

    ϰtextMBL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextMBR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextMBN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ m.
    ϰtextMBL = ϰtextMBL
        .replace(/v/gi, "mb")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextMBR = ϰtextMBR
        .replace(/v/gi, "mb")
        .trim()
        .toLowerCase() + ".";

    ϰtextMBN = ϰtextMBN
        .replace(/v/gi, "mb")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------
    // V ⇒ mb & R ⇒ L / R / N.
    let ϰtextFL;
    let ϰtextFR;
    let ϰtextFN;

    ϰtextFL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextFR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextFN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ m.
    ϰtextFL = ϰtextFL
        .replace(/v/gi, "f")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextFR = ϰtextFR
        .replace(/v/gi, "f")
        .trim()
        .toLowerCase() + ".";

    ϰtextFN = ϰtextFN
        .replace(/v/gi, "f")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------
    // V ⇒ thl & R ⇒ L / R / N.
    let ϰtextTHL;
    let ϰtextTHR;
    let ϰtextTHN;

    ϰtextTHL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextTHR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextTHN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ m.
    ϰtextTHL = ϰtextTHL
        .replace(/v/gi, "th")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextTHR = ϰtextTHR
        .replace(/v/gi, "th")
        .trim()
        .toLowerCase() + ".";

    ϰtextTHN = ϰtextTHN
        .replace(/v/gi, "th")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------
    // V ⇒ s & R ⇒ L / R / N.
    let ϰtextSL;
    let ϰtextSR;
    let ϰtextSN;

    ϰtextSL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextSR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextSN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ m.
    ϰtextSL = ϰtextSL
        .replace(/v/gi, "s")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextSR = ϰtextSR
        .replace(/v/gi, "s")
        .trim()
        .toLowerCase() + ".";

    ϰtextSN = ϰtextSN
        .replace(/v/gi, "s")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------
    // V ⇒ w & R ⇒ L / R / N.
    let ϰtextWL;
    let ϰtextWR;
    let ϰtextWN;

    ϰtextWL = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextWR = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);
    ϰtextWN = CONVERTER_INPUT.value.toString().toLowerCase().substring(0, 100);

    // V ⇒ w.
    ϰtextWL = ϰtextWL
        .replace(/v/gi, "w")
        .replace(/r/gi, "l")
        .trim()
        .toLowerCase() + ".";

    ϰtextWR = ϰtextWR
        .replace(/v/gi, "w")
        .trim()
        .toLowerCase() + ".";

    ϰtextWN = ϰtextWN
        .replace(/v/gi, "w")
        .replace(/r/gi, "n")
        .trim()
        .toLowerCase() + ".";

    //----------------------------------------------------------------------------------------

    RESULT.innerHTML = null;

    RESULT.append(ϰhr);

    //----------------------------------------------------------------------------------------
    // Table Head : Title’s.

    ϰth0.innerHTML = "";
    ϰtr0.append(ϰth0);

    ϰth1.innerHTML = "Attïqë";
    ϰtr0.append(ϰth1);

    ϰth2.innerHTML = "Tôskë";
    ϰtr0.append(ϰth2);

    ϰth3.innerHTML = "Ghegë";
    ϰtr0.append(ϰth3);

    ϰthead.append(ϰtr0);

    //----------------------------------------------------------------------------------------
    // First line.

    ϰtd1a.innerHTML = "Varïanë.";
    ϰtd1a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr1.append(ϰtd1a);

    ϰtd1b.innerHTML = ϰtextVL;
    ϰtr1.append(ϰtd1b);

    ϰtd1c.innerHTML = ϰtextVR;
    ϰtr1.append(ϰtd1c);

    ϰtd1d.innerHTML = ϰtextVN;
    ϰtr1.append(ϰtd1d);

    ϰtbody.append(ϰtr1);

    //----------------------------------------------------------------------------------------
    // Second line.

    ϰtd2a.innerHTML = "Dôrïanë.";
    ϰtd2a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr2.append(ϰtd2a);

    ϰtd2b.innerHTML = ϰtextPL;
    ϰtr2.append(ϰtd2b);

    ϰtd2c.innerHTML = ϰtextPR;
    ϰtr2.append(ϰtd2c);

    ϰtd2d.innerHTML = ϰtextPN;
    ϰtr2.append(ϰtd2d);

    ϰtbody.append(ϰtr2);

    //----------------------------------------------------------------------------------------
    // Third line.

    ϰtd3a.innerHTML = "Délphïanë.";
    ϰtd3a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr3.append(ϰtd3a);

    ϰtd3b.innerHTML = ϰtextBL;
    ϰtr3.append(ϰtd3b);

    ϰtd3c.innerHTML = ϰtextBR;
    ϰtr3.append(ϰtd3c);

    ϰtd3d.innerHTML = ϰtextBN;
    ϰtr3.append(ϰtd3d);

    ϰtbody.append(ϰtr3);

    //----------------------------------------------------------------------------------------
    // Thourd line.

    ϰtd4a.innerHTML = "Ãjvölïanë.";
    ϰtd4a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr4.append(ϰtd4a);

    ϰtd4b.innerHTML = ϰtextML;
    ϰtr4.append(ϰtd4b);

    ϰtd4c.innerHTML = ϰtextMR;
    ϰtr4.append(ϰtd4c);

    ϰtd4d.innerHTML = ϰtextMN;
    ϰtr4.append(ϰtd4d);

    ϰtbody.append(ϰtr4);

    //----------------------------------------------------------------------------------------

    ϰtd5a.innerHTML = "Grêqvë augmêntivë nêžâtivë.";
    ϰtd5a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr5.append(ϰtd5a);

    ϰtd5b.innerHTML = ϰtextMBL;
    ϰtr5.append(ϰtd5b);

    ϰtd5c.innerHTML = ϰtextMBR;
    ϰtr5.append(ϰtd5c);

    ϰtd5d.innerHTML = ϰtextMBN;
    ϰtr5.append(ϰtd5d);

    ϰtbody.append(ϰtr5);

    //----------------------------------------------------------------------------------------

    ϰtd6a.innerHTML = "Latïnïanë.";
    ϰtd6a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr6.append(ϰtd6a);

    ϰtd6b.innerHTML = ϰtextFL;
    ϰtr6.append(ϰtd6b);

    ϰtd6c.innerHTML = ϰtextFR;
    ϰtr6.append(ϰtd6c);

    ϰtd6d.innerHTML = ϰtextFN;
    ϰtr6.append(ϰtd6d);

    ϰtbody.append(ϰtr6);

    //----------------------------------------------------------------------------------------

    ϰtd7a.innerHTML = "Koînïanë.";
    ϰtd7a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr7.append(ϰtd7a);

    ϰtd7b.innerHTML = ϰtextTHL;
    ϰtr7.append(ϰtd7b);

    ϰtd7c.innerHTML = ϰtextTHR;
    ϰtr7.append(ϰtd7c);

    ϰtd7d.innerHTML = ϰtextTHN;
    ϰtr7.append(ϰtd7d);

    ϰtbody.append(ϰtr7);

    //----------------------------------------------------------------------------------------

    ϰtd8a.innerHTML = "Laqônïanë.";
    ϰtd8a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr8.append(ϰtd8a);

    ϰtd8b.innerHTML = ϰtextSL;
    ϰtr8.append(ϰtd8b);

    ϰtd8c.innerHTML = ϰtextSR;
    ϰtr8.append(ϰtd8c);

    ϰtd8d.innerHTML = ϰtextSN;
    ϰtr8.append(ϰtd8d);

    ϰtbody.append(ϰtr8);

    //----------------------------------------------------------------------------------------

    ϰtd9a.innerHTML = "Pamphylïanë.";
    ϰtd9a.setAttribute("style", "font-weight: bold; text-align: right;")
    ϰtr9.append(ϰtd9a);

    ϰtd9b.innerHTML = ϰtextWL;
    ϰtr9.append(ϰtd9b);

    ϰtd9c.innerHTML = ϰtextWR;
    ϰtr9.append(ϰtd9c);

    ϰtd9d.innerHTML = ϰtextWN;
    ϰtr9.append(ϰtd9d);

    ϰtbody.append(ϰtr9);

    //----------------------------------------------------------------------------------------

    RESULT.append(ϰtable);

    ϰtable.append(ϰthead);
    ϰtable.append(ϰtbody);
}
*/