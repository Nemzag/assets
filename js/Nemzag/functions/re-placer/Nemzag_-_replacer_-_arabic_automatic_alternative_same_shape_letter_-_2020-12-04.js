/*
 * Created with PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 04/12/2020
 * Time: 14:06
 * Updated:
*/

"use strict";

//========================================================================================
// init constantes…
//========================================================================================

const INPUT_ARABIC_ALTERNATIVE_LETTER = document.getElementById("input_arabic_alternative_letter");
const DIV_RESULT_ARABIC_ALTERNATIVE_LETTER = document.getElementById("div_result_arabic_alternative_letter");

//========================================================================================
// init évènements…
//========================================================================================

INPUT_ARABIC_ALTERNATIVE_LETTER.addEventListener("keyup", arabicAutomaticAlternativeSameShapeLetterDefined);

//========================================================================================
// init variables…
//========================================================================================

/*
Es‑tern‑al fichier / file qui / uho use :
- ϰinput
- ϰdivResult
*/


//========================================================================================
// Outils
//========================================================================================

function arabicAutomaticAlternativeSameShapeLetterDefined() {

    // console.log("test:" + "operation");

    let ϰtext;

    DIV_SUFFIX_DISPLAY.innerHTML = null;

    ϰtext = INPUT_ARABIC_ALTERNATIVE_LETTER.value.toString();

    console.log(ϰtext + " {console.log(ϰtext)}");

    // console.log(ϰtext);


    let ϰtransformedB =
        // B || P
        ϰtext
            .replace(/ب/g, "پ").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedG =
        // DƷ || G
        ϰtext
            .replace(/ج/g, "ک").trim()
    ;

    let ϰtransformedƷ =
        // DƷ || Ʒ
        ϰtext
            .replace(/ج/g, "ژ").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedD =
        // Ð || D
        ϰtext
            .replace(/د/g, "ذ").trim()
    ;

    let ϰtransformedÐ =
        // Ð || D
        ϰtext
            .replace(/ذ/g, "د").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedT =
        // Θ || T
        ϰtext
            .replace(/ث/g, "ت").trim()
    ;

    let ϰtransformedΘ =
        // T || Θ
        ϰtext
            .replace(/ت/g, "ث").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedĦ =
        // Ð || D
        ϰtext
            .replace(/ح/g, "خ").trim()
    ;

    let ϰtransformedX =
        // Ð || D
        ϰtext
            .replace(/خ/g, "ح").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedR =
        // R || Z
        ϰtext
            .replace(/ر/g, "ز").trim()
    ;

    let ϰtransformedZ =
        // Z || R
        ϰtext
            .replace(/ز/g, "ر").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedƩ =
        // S || Ʃ
        ϰtext
            .replace(/س/g, "ش").trim()
    ;

    let ϰtransformedS =
        // Ʃ || S
        ϰtext
            .replace(/ش/g, "س").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedZˤ =
        // S || Ʃ
        ϰtext
            .replace(/ص/g, "ض").trim()
    ;

    let ϰtransformedSˤ =
        // Ʃ || S
        ϰtext
            .replace(/ض/g, "ص").trim()
    ;


    //---------------------------------------------------------------------------------------

    let ϰtransformedÐˤ =
        // S || Ʃ
        ϰtext
            .replace(/ط/g, "ظ").trim()
    ;

    let ϰtransformedTˤ =
        // Ʃ || S
        ϰtext
            .replace(/ظ/g, "ط").trim()
    ;

    //---------------------------------------------------------------------------------------

    let ϰtransformedƔ =
        // O || Ɣ
        ϰtext
            .replace(/ع/g, "غ").trim()
    ;

    let ϰtransformedO =
        // Ɣ || O
        ϰtext
            .replace(/غ/g, "ع").trim()
    ;

    //---------------------------------------------------------------------------------------

    //  console.log(ϰtransformed);

    let ϰhr = document.createElement("hr");

    ϰhr.setAttribute("class", "ui divider");

    //---------------------------------------------------------------------------------------

    //───────────────────────────────────────────────────────────────────────────────────────
    let ϰthTerme = document.createElement("th");
    ϰthTerme.innerText = "Terme";

    //───────────────────────────────────────────────────────────────────────────────────────
    let ϰthIframe = document.createElement("th");

    //───────────────────────────────────────────────────────────────────────────────────────
    let ϰbody = document.createElement("thead");

    //───────────────────────────────────────────────────────────────────────────────────────
    let ϰtdTerme = document.createElement("td");

    //───────────────────────────────────────────────────────────────────────────────────────
    let ϰtdIframe = document.createElement("td");

    //---------------------------------------------------------------------------------------
    /*
    let ϰsluged;
    ϰsluged = slugify(ϰtext);

    // « flags: 'g' » : With this flag the search looks for all matches,
    // without it – only the first match is returned.
    // https://javascript.info/regexp-introduction
    //https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re


    // Phonetic display.
    ϰarticle.innerHTML = '<span style="font-weight: bold;">'
        +
        ϰtext
            .replace(/,/g, ",<br>")
            .replace(/\./g, ".</p>")
        +
        '</span>'
        +
        '<br>'
        +
        '<span style="color: #3366FF; font-weight: bold; font-family: Monospace;">['
        +
        // I.P.A.
        ϰtransformed
            .replace(/,/g, ",<br>")
            .replace(/\./g, ".</p>")
            .toLowerCase()
        +
        "]</span>"
        +
        '<br>'
        +
        // Slug‑english
        "{<b>En.</b> "
        +
        ϰsluged
            .replace(/,/g, ",<br>")
            .replace(/\./g, ".</p>")
        +
        ".}";
*/
    console.log("Tentative de création de table…");

    DIV_RESULT_ARABIC_ALTERNATIVE_LETTER.append(ϰhr);

    //---------------------------------------------------------------------------------------

    ϰthead.appendChild(ϰthTerme);
    ϰthead.appendChild(ϰthIframe);

    ϰtable.appendChild(ϰthead);

    DIV_RESULT_ARABIC_ALTERNATIVE_LETTER.append(ϰtable);

    DIV_RESULT_ARABIC_ALTERNATIVE_LETTER.appendChild(ϰthead);

}


//========================================================================================
// outils divers
//========================================================================================