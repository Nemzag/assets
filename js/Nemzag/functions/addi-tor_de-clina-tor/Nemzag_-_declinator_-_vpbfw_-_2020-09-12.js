/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-09-12
 * Time: 12:28
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Code appelé automatiquement
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

const INPUT_QERGW_DECLINATION = document.getElementById("ïnPuţëQêrgwëDêKlïnaTsïõnë");
const QERGW_RESULT = document.getElementById("QergwResult");

ϰtable.setAttribute("style", "width: auto; margin-left: 0; margin-right: auto;")
ϰtable.setAttribute("id", "result")

// ϰparagraph.innerText = ϰtransformed;

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

INPUT_QERGW_DECLINATION.addEventListener("keyup", changeCLetterFunction);

function changeCLetterFunction() {

    // console.log('Fonction « changeFirstLetterFunction » lancé.');

    // V ⇒ v & R ⇒ L / R / N.
    let ϰtextVL;
    let ϰtextVR;
    let ϰtextVN;

    ϰtextVL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextVR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextVN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextPL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextPR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextPN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextBL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextBR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextBN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextML = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextMR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextMN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextMBL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextMBR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextMBN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextFL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextFR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextFN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextTHL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextTHR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextTHN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextSL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextSR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextSN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    ϰtextWL = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextWR = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);
    ϰtextWN = INPUT_QERGW_DECLINATION.value.toString().toLowerCase().substring(0, 100);

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

    QERGW_RESULT.innerHTML = null;

    QERGW_RESULT.append(ϰhr);

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

    QERGW_RESULT.append(ϰtable);

    ϰtable.append(ϰthead);
    ϰtable.append(ϰtbody);
}