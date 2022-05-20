/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2019-12-27
 * Time: 08h02
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// init variables…
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------
const SELECT_LANGUAGE = document.getElementById("languagesAnyLanguagePhoneticConverter");
const INPUT_TEXT = document.getElementById("InputerAnyLanguagePhoneticConverter");
const DIV_SECTION_SHOW_PHONETIC = document.getElementById("sectionAnyLanguagePhoneticConverterShowPhonetic");
const CODE_RESULT_SHOW_PHONETIC = document.getElementById("resultAnyLanguagePhoneticConverterShowPhonetic");
const BUTTON_TRANSLATHION = document.getElementById("transLation");
const BUTTON_COPY_TRANSDUCTION = document.getElementById("copy");

/*
console.log(INPUT_TEXT);
window.alert(INPUT_TEXT);
*/

//----------------------------------------------------------------------------------------
// init variables…
//----------------------------------------------------------------------------------------

// Global
let $term = new String();

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------
SELECT_LANGUAGE.addEventListener("change", showInputer);
INPUT_TEXT.addEventListener("keyup", languageSelected);
// BUTTON_TRANSLATHION.addEventListener("click", languageSelected);

//----------------------------------------------------------------------------------------
// Outils
//----------------------------------------------------------------------------------------

function showInputer() {
    INPUT_TEXT.style.display = "initial";
    INPUT_TEXT.disabled = false;
}

function languageSelected() {
    // BUTTON_TRANSLATHION.style.display = "initial";
    DIV_SECTION_SHOW_PHONETIC.style.display = "initial";

    /*
    window.alert("Test");
    console.log("Test");
    */

    let $selectedLanguage = SELECT_LANGUAGE.value;

    /*
    window.alert($selectedLanguage);
    console.log($selectedLanguage);
    */

    switch ($selectedLanguage) {

        case "Georgian":
            CODE_RESULT_SHOW_PHONETIC.innerHTML = null;
            GeorgianTransCodation();
            BUTTON_COPY_TRANSDUCTION.style.display = "initial";
            // return CODE_RESULT_SHOW_PHONETIC.append("[" + $term.replace(/\s/g,"") + "]");
            return CODE_RESULT_SHOW_PHONETIC.append("[" + $term + "]");
            break;


        case "Armenian":
            CODE_RESULT_SHOW_PHONETIC.innerHTML = null;
            ArmenianClassicalEastTransCodation();
            BUTTON_COPY_TRANSDUCTION.style.display = "initial";
            // return CODE_RESULT_SHOW_PHONETIC.append("[" + $term.replace(/\s/g,"") + "]");
            CODE_RESULT_SHOW_PHONETIC.append("[" + $term + "] (East. Classical.)");
            ArmenianWestTransCodation();
            let $tagBr = document.createElement("br");
            CODE_RESULT_SHOW_PHONETIC.append($tagBr);
            return CODE_RESULT_SHOW_PHONETIC.append("[" + $term + "] (West.)");
            break;
    }
}




