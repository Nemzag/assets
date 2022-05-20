/*
 * Created with PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 20/02/2021
 * Time: 23:26
 * Updated:
*/

"use strict";

//========================================================================================
// init constantes…
//========================================================================================

const INPUT_ALBANIAN_VERB = document.getElementById("albanianVerbInput");
const DIV_ALBANIAN_VERB_DISPLAY = document.getElementById("albanianVerbDivResult");

//========================================================================================
// init évènements…
//========================================================================================

// document.getElementById("").addEventListener("", function());

//========================================================================================
// init variables…
//========================================================================================
let ϰhtmlHr = document
    .createElement("hr");

ϰhtmlHr.setAttribute("class", "ui divider");

//========================================================================================

let ϰhtmlDivFlexLevelOne = document.createElement("div");
ϰhtmlDivFlexLevelOne.setAttribute("class", "ui vertically divided grid");

//---------------------------------------------------------------------------------------
let ϰhtmlDivFlexLevelTwo = document.createElement("div");
ϰhtmlDivFlexLevelTwo.setAttribute("class", "two column row");

//---------------------------------------------------------------------------------------
let ϰhtmlDivFlexLevelTʰree = document.createElement("div");
ϰhtmlDivFlexLevelTwo.setAttribute("class", "column");

//---------------------------------------------------------------------------------------
let ϰverbReplacedLastByT;

//---------------------------------------------------------------------------------------
let ϰhtmlH6DëfETash = document
    .createElement("h6");

ϰhtmlH6DëfETash.innerText = "DëfETash." + "\n" + "(Present.)" ;

let ϰDëfETash;

let ϰhtmlPDëfETash = document
    .createElement("p");

//---------------------------------------------------------------------------------------
let ϰhtmlH6EPaKrym = document
    .createElement("h6");

ϰhtmlH6EPaKrym.innerText = "Ê ëpa‑kry‑më.";

let ϰEPaKrym;

let ϰhtmlPEPaKrym = document
    .createElement("p");

//---------------------------------------------------------------------------------------
let ϰhtmlH6EKrym = document
    .createElement("h6");

ϰhtmlH6EKrym.innerText = "Ê kry‑më.";

let ϰEKrym;

let ϰhtmlPEKrym = document
    .createElement("p");

//---------------------------------------------------------------------------------------
let ϰhtmlH6EKrEThj = document
    .createElement("h6");

ϰhtmlH6EKrEThj.innerText = "Ê kr. e thj.";

let ϰEKrEThj;

let ϰhtmlPEKrEThj = document
    .createElement("p");

//---------------------------------------------------------------------------------------
let ϰhtmlH5KohaDy = document
    .createElement("h5");

ϰhtmlH5KohaDy.innerText = "Koha regular dy.";

//---------------------------------------------------------------------------------------
/*
Es‑tern‑al fichier / file qui / uho use :
- ϰinput 
- ϰdivResult
*/


//========================================================================================
// Outils
//========================================================================================

//========================================================================================
// outils divers
//========================================================================================

INPUT_ALBANIAN_VERB.addEventListener("keyup", zgïedhPôlëtë);

function zgïedhPôlëtë() {

    console.log("punë‑imë zgïedhPôlëtë kalë‑të.")
    let ϰverb;

    DIV_ALBANIAN_VERB_DISPLAY.innerHTML = null;

    ϰverb = INPUT_ALBANIAN_VERB.value.toString().toLowerCase().substring(0, 100);

    if(ϰverb.charAt(ϰverb.length-1) === "s") {

        ϰverbReplacedLastByT = ϰverb.replace(/.$/,"t");
        // « .$ » will match any chara‑cter at the end of a string.
    }

    ϰDëfETash =
     " Ũn " + ϰverb + "i" + '\n' +
    " Te " + ϰverb.replace(/a/g, "ê") + '' + '\n' +
    " Aj " + ϰverb.replace(/a/g, "ê") + '' + '\n' +
    " Na " + ϰverb.replace(/a/g, "ä") + 'im' + '\n' +
    " Ju " + ϰverb.replace(/a/g, "ä") + 'ni' + '\n' +
    "Ato " + ϰverb.replace(/a/g, "ä")+ 'in';

    //---------------------------------------------------------------------------------------
    ϰEPaKrym =
        " Ũn " + ϰverb.replace(/a/g, "i") + "ja" + '\n' +
        " Te " + ϰverb.replace(/a/g, "i") + "jê" + '\n' +
        " Aj " + ϰverb.replace(/a/g, "i") + "te" + '\n' +
        " Na " + ϰverb.replace(/a/g, "i") + "nim" + '\n' +
        " Ju " + ϰverb.replace(/a/g, "i") + 'nit' + '\n' +
        "Ato " + ϰverb.replace(/a/g, "i")+ 'nin';

    //---------------------------------------------------------------------------------------
    ϰEKrym =
        " Ũn kam " + ϰverb.replace(/a/g, "o") + "ën" + '\n' +
        " Te ke " + ϰverb.replace(/a/g, "o") + "ën" + '\n' +
        " Aj ka " + ϰverb.replace(/a/g, "o") + "te" + '\n' +
        " Na ke‑mi " + ϰverb.replace(/a/g, "o") + "ën" + '\n' +
        " Ju ke‑ni " + ϰverb.replace(/a/g, "o") + 'ën' + '\n' +
        "Ato ka‑në " + ϰverb.replace(/a/g, "o")+ 'ën';

    //---------------------------------------------------------------------------------------
    ϰEKrEThj =
        " Ũn " + ϰverb.replace(/a/g, "o") + "a" + '\n' +
        " Te " + ϰverb.replace(/a/g, "o") + "ê" + '\n' +
        " Aj " + ϰverb.replace(/a/g, "o") + "i" + '\n' +
        " Na " + ϰverb.replace(/a/g, "o") + "ëm" + '\n' +
        " Ju " + ϰverb.replace(/a/g, "o") + 'ët' + '\n' +
        "AtoVên‑êr‧⁠a Re‑vêr‑êra Wor‑ship. " + ϰverb.replace(/a/g, "o")+ 'ën';

    //=======================================================================================


    //══════════════════════════════════════════════════════════════════════════════════════════════
    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlHr);

    ϰhtmlDivFlexLevelTwo.appendChild(ϰhtmlDivFlexLevelTʰree);

    ϰhtmlDivFlexLevelOne.appendChild(ϰhtmlDivFlexLevelTwo);

    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlDivFlexLevelOne);

    //---------------------------------------------------------------------------------------
    ϰhtmlDivFlexLevelTʰree
        .append(ϰhtmlH6DëfETash);

    ϰhtmlPDëfETash.innerText = ϰDëfETash;

    ϰhtmlDivFlexLevelTʰree
        .append(ϰhtmlPDëfETash);

    // console.log("ϰhtmlP : " + ϰhtmlP);
    // console.log("ϰDëfETash : " + ϰDëfETash);

    //---------------------------------------------------------------------------------------
    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlH6EPaKrym);

    ϰhtmlPEPaKrym.innerText = ϰEPaKrym;

    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlPEPaKrym);

    //---------------------------------------------------------------------------------------
    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlH6EKrym);

    ϰhtmlPEKrym.innerText = ϰEKrym;

    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlPEKrym);

    //---------------------------------------------------------------------------------------

    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlH6EKrEThj);

    ϰhtmlPEKrEThj.innerText = ϰEKrEThj;

    DIV_ALBANIAN_VERB_DISPLAY
        .append(ϰhtmlPEKrEThj);

    //---------------------------------------------------------------------------------------
}