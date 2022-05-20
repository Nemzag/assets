/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 15/07/2020
 * Time: 20:26
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Code appelé automatiquement
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

const INPUT_CONVERTER_C = document.getElementById("inputConverterC");
const DIV_CONVERTER_C_RESULT = document.getElementById("divConverterCResult");

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

INPUT_CONVERTER_C.addEventListener("keyup", changeCLetterFunction);

//----------------------------------------------------------------------------------------
// Outils
//----------------------------------------------------------------------------------------

function changeCLetterFunction() {

    // console.log('Fonction « changeFirstLetterFunction » lancé.');

    let ϰtext;
    let ϰtextMinuscule;

    let ϰenglishK;
    let ϰresultEnglishK;

    DIV_CONVERTER_C_RESULT.innerHTML = null;

    ϰtext = INPUT_CONVERTER_C.value.toString().toLowerCase().substring(0, 100);

    console.log(ϰtext);

    // console.log(ϰtext);

    // Êtrusqwë
    if(slugify(ϰtext.charAt(1)) === "e" || slugify(ϰtext.charAt(1)) === "i" || slugify(ϰtext.charAt(1)) === "y") {

        ϰenglishK = slugify(ϰtext.replace(/c/g, "gu")).trim().toLowerCase();

        // console.log("ϰEnglishKEIY : " + ϰenglishK);
        // console.log("ϰEnglishKEIY : " + typeof ϰenglishK);

        ϰresultEnglishK = ϰtext.replace(/c/g, "G").trim().toUpperCase() + ' {Ê. « G » : ' + slugify(ϰtext.replace(/c/g, "g")).trim().toLowerCase() + ' ; U.k.En.U.s. ' + ϰenglishK + '.}';

        // console.log("ϰresultEnglishK" + typeof ϰresultEnglishK);

    } else {
        ϰenglishK = slugify(ϰtext.replace(/c/g, "g")).trim().toLowerCase();

        // console.log("ϰEnglishK : " + ϰenglishK);
        // console.log("ϰEnglishK : " + typeof ϰenglishK);

        ϰresultEnglishK = ϰtext.replace(/c/g, "G").trim().toUpperCase() + ' {Ê. « G » : ' + slugify(ϰtext.replace(/c/g, "g")).trim().toLowerCase() + ' ; U.k.En.U.s. ' + ϰenglishK + '.}';

        // console.log("ϰresultEnglishK" + typeof ϰresultEnglishK);
    }

    let ϰtransformed =

        // Cyrille.
        ϰtext.replace(/c/g, "S").trim().toUpperCase() + ' {Cy. « S » : ' + slugify(ϰtext.toLowerCase().replace(/c/g, "s").trim()) + '.}' + '\n' +

        // Qrêgwë.
        ϰtext.replace(/c/g, "θ").trim().toUpperCase() + ' {Qr. « Θ » : ' + slugify(ϰtext.toLowerCase().replace(/c/g, "th")).trim().toLowerCase() + '.}' + '\n' +

        // Shkupë.
        ϰtext.replace(/c/g, "TS").trim().toUpperCase() + ' {Sq. « TS » : ' + slugify(ϰtext.toLowerCase().replace(/c/g, "ts")).trim() + '.}' + '\n' +

        // I.P.A.
        ϰtext.replace(/c/g, "C").trim().toUpperCase() + ' {I.P.A. « C » : ' + slugify(ϰtext.toLowerCase().replace(/c/g, "c")).trim() + '.}' + '\n' +

        // Chinese Pianu
        ϰtext.replace(/c/g, "ɕ").trim().toUpperCase() + ' {Chi.P. « ɕ » : ' + slugify(ϰtext.toLowerCase().replace(/c/g, "qh")).trim() + '.}' + '\n' +

        // English
        ϰtext.replace(/c/g, "K").trim().toUpperCase() + ' {En. « K » : ' + slugify(ϰtext.replace(/c/g, "k")).trim().toLowerCase() + '.}' + '\n' +

        // Latin
        ϰtext.replace(/c/g, "Q").trim().toUpperCase() + ' {La. « Q » : ' + slugify(ϰtext.replace(/c/g, "q")).trim().toLowerCase() + '.}' + '\n' +

        // ?
        ϰtext.replace(/c/g, "Tɕ").trim().toUpperCase() + ' {Sl. « Tɕ » : ' +
            'Sq. ' + (ϰtext.replace(/c/g, "q")).trim().toLowerCase() +
            ' / Ks. ' + slugify(ϰtext.replace(/c/g, "tqh")).trim().toLowerCase() +
            ' / Şk. ' + (ϰtext.replace(/c/g, "tq̧")).trim().toLowerCase() +
            ' ; U.k.En.U.s. ' + slugify(ϰtext.replace(/c/g, "tch")).trim().toLowerCase() + '.}' + '\n' +

        // Italia
        ϰtext.replace(/c/g, "TƩ").trim().toUpperCase() + ' {It. « TƩ » : ' +
            'Sq. ' + (ϰtext.replace(/c/g, "ç")).trim().toLowerCase() +
            ' / Ks. ' + slugify(ϰtext.replace(/c/g, "tsh")).trim().toLowerCase() +
            ' / Şk. ' + (ϰtext.replace(/c/g, "tş")).trim().toLowerCase() +
            ' ; U.k.En.U.s. ' + slugify(ϰtext.replace(/c/g, "tsh")).trim().toLowerCase() + '.}' + '\n' +

        // Türk
        ϰtext.replace(/c/g, "DƷ").trim().toUpperCase() + ' {Tr. « DƷ » : ' +
            'Sq. ' + (ϰtext.replace(/c/g, "xh")).trim().toLowerCase() +
            ' / Ks. ' + slugify(ϰtext.replace(/c/g, "dzh")).trim().toLowerCase() +
            ' / Şk. ' + (ϰtext.replace(/c/g, "dz̧")).trim().toLowerCase() +
            ' ; U.k.En.U.s. ' + slugify(ϰtext.replace(/c/g, "dj")).trim().toLowerCase() + '.}' + '\n' +

        // Êtrusqwë
        ϰresultEnglishK;

let ϰhr = document.createElement("hr");
ϰhr.setAttribute("class", "ui divider");

let ϰparagraph = document.createElement("p");

ϰparagraph.innerText = ϰtransformed;

DIV_CONVERTER_C_RESULT.append(ϰhr);
DIV_CONVERTER_C_RESULT.append(ϰparagraph);
}