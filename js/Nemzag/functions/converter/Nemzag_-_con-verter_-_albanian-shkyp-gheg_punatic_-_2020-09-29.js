/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-09-29
 * Time: 15:49
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Code appelé automatiquement
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------


const DIV_TEXT_AREA_INPUT = document.getElementById("divTextAreaInputAlbanianShkypePunathic");

const SECTION_ALBANIAN_SHKYPE_PUNATHIC = document.getElementById("sectionAlbanianShkypePunathic");


//----------------------------------------------------------------------------------------
// init variables…
//----------------------------------------------------------------------------------------

let converterInput = document.getElementById("inputConverterAlbanianShkypePunathic");

//───────────────────────────────────────────────────────────────────────────────────────
// Button CopyToClipBoard

let ϰbutton = document
    .createElement("button");

// ϰbutton.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 30em;");

ϰbutton
    .setAttribute("id", "copyConverterAlbanianShkypePunathic");

ϰbutton
    .setAttribute("class", "ui primary button");

ϰbutton.innerHTML = "Kôpy to clip‑board";

//───────────────────────────────────────────────────────────────────────────────────────
//

let ϰdivResultConverterAlbanianShkypePunathic = document
    .createElement("div");

// ϰbutton.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 30em;");

ϰdivResultConverterAlbanianShkypePunathic
    .setAttribute("id", "resultConverterAlbanianShkypePunathic");

ϰdivResultConverterAlbanianShkypePunathic
    .setAttribute("class", "");

//───────────────────────────────────────────────────────────────────────────────────────

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

converterInput.addEventListener("keyup", HhêkvshkrePunathicConverter);

//----------------------------------------------------------------------------------------
// Outils
//----------------------------------------------------------------------------------------

function HhêkvshkrePunathicConverter () {


    // console.log('Fonction « changeFirstLetterFunction » lancé.');

    let $text;

    // RESULT.innerHTML = null;
    ϰdivResultConverterAlbanianShkypePunathic.innerHTML = null;

    $text = converterInput.value.toString();

    console.log($text + " {console.log($text)}");

    // console.log($text);


    let $transformed =

        // HH
        $text

            // Vocal’s.
            .replace(/Ë/g, "Ə").trim()
            .replace(/ë/g, "ə").trim()

            .replace(/Ã/g, "Ɑ̃").trim()
            .replace(/ã/g, "ɑ̃").trim()

            .replace(/É/g, "E").trim()
            .replace(/é/g, "e").trim()

            .replace(/Ê/g, "Ɛ").trim()
            .replace(/ê/g, "ɛ").trim()

            .replace(/Ẽ/g, "Ɛ̃").trim()
            .replace(/ẽ/g, "ɛ̃").trim()

            .replace(/Ô/g, "Ɔ").trim()
            .replace(/ô/g, "ɔ").trim()

            .replace(/Õ/g, "Ɔ̃").trim()
            .replace(/õ/g, "ɔ̃").trim()

            .replace(/Ï/g, "J").trim()
            .replace(/ï/g, "j").trim()

            .replace(/C/g, "S|K").trim()
            .replace(/c/g, "s|k").trim()

            .replace(/GH/g, "Ɣ").trim()
            .replace(/Gh/g, "ɣ").trim()
            .replace(/gh/g, "ɣ").trim()

            .replace(/DH/g, "Ð").trim()
            .replace(/Dh/g, "Ð").trim()
            .replace(/dh/g, "ð").trim()

            .replace(/ZH/g, "Ʒ").trim()
            .replace(/Zh/g, "Ʒ").trim()
            .replace(/zh/g, "ʒ").trim()

            .replace(/Ž/g, "Ʒ").trim()
            .replace(/ž/g, "ʒ").trim()

            .replace(/Z̧/g, "Ʒ").trim()
            .replace(/z̧/g, "ʒ").trim()

            .replace(/TH/g, "Θ").trim()
            .replace(/Th/g, "Θ").trim()
            .replace(/th/g, "θ").trim()

            .replace(/JH/g, "ɟ").trim()
            .replace(/Jh/g, "ɟ").trim()
            .replace(/jh/g, "ɟ").trim()

            .replace(/KH/g, "X").trim()
            .replace(/Kh/g, "X").trim()
            .replace(/kh/g, "x").trim()

            .replace(/QH/g, "ɕ").trim()
            .replace(/Qh/g, "ɕ").trim()
            .replace(/qh/g, "ɕ").trim()

            .replace(/Q̧/g, "ɕ").trim()
            .replace(/q̧/g, "ɕ").trim()

            .replace(/RH/g, "Ʀ").trim()
            .replace(/Rh/g, "Ʀ").trim()
            .replace(/rh/g, "ʀ").trim()

            .replace(/RR/g, "R").trim()
            .replace(/Rr/g, "R").trim()
            .replace(/rr/g, "r").trim()

            .replace(/SH/g, "Ʃ").trim()
            .replace(/Sh/g, "Ʃ").trim()
            .replace(/sh/g, "ʃ").trim()

            .replace(/Š/g, "Ʃ").trim()
            .replace(/š/g, "ʃ").trim()

            .replace(/Ş/g, "Ʃ").trim()
            .replace(/ş/g, "ʃ").trim()

            .replace(/HH/g, "Ħ").trim()
            .replace(/Hh/g, "Ħ").trim()
            .replace(/hh/g, "ħ").trim()

            .replace(/Sʾ/g, "Sˤ").trim()
            .replace(/sʾ/g, "sˤ").trim()

            .replace(/Zʾ/g, "Sˤ").trim()
            .replace(/zʾ/g, "sˤ").trim()

            .replace(/G/g, "ɡ").trim()
            .replace(/g/g, "ɡ").trim()


            .replace(/Ḥ/g, "Ħ").trim()
            .replace(/ḥ/g, "ħ").trim()

            .replace(/ṫ/g, "θ").trim()
            .replace(/Ṫ/g, "Θ").trim()

            .replace(/ţ/g, "θ").trim()
            .replace(/Ţ/g, "Θ").trim()

            .replace(/Ḏ/g, "Ð").trim()
            .replace(/ḏ/g, "ð").trim()

            .replace(/Ô/g, "Ɔ").trim()
            .replace(/ô/g, "ɔ").trim()

            .replace(/Ẽ/g, "Ɛ̃").trim()
            .replace(/ẽ/g, "ɛ̃").trim()

            .replace(/R/g, "ɾ").trim()
            .replace(/r/g, "ɾ").trim()
    ;
    /*
    // Êtrusqwë
    $text.replace(/c/g, "G").trim().toUpperCase(); ' {Ê. « G » : ' +  slugify($text.replace(/c/g, "g")).trim().toLowerCase() + '}';

    */
    console.log($transformed);

    let ϰhr = document.createElement("hr");
    ϰhr.setAttribute("class", "ui divider");

    let ϰhr2 = document.createElement("hr");
    ϰhr2.setAttribute("class", "ui divider");

    let $article = document.createElement("article");

    let $sluged;
    $sluged = slugify($text);

    // « flags: 'g' » : With this flag the search looks for all matches,
    // without it – only the first match is returned.
    // https://javascript.info/regexp-introduction
    //https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re


    if($text !== "") {
    // Phonetic display.
    $article.innerHTML = '<span style="font-weight: bold;">'
        +
        $text
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
        $transformed
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
        $sluged
            .replace(/,/g, ",<br>")
            .replace(/\./g, ".</p>")
        +
        ".}";

    //=======================================================================================

    /*
    <hr class="ui divider">

    <button class="ui primary button" id="copyConverterAlbanianShkypePunathic" >Copy to clipboard</button >

    <div id="resultConverterAlbanianShkypePunathic"></div>
    <!-- Doit affichë‑êrë le version Phonetic première, puis Albanais‑accêntwé et en suite lahë version slug english en bas et français par dessus. -->

    */

    SECTION_ALBANIAN_SHKYPE_PUNATHIC.append(ϰdivResultConverterAlbanianShkypePunathic);
    ϰdivResultConverterAlbanianShkypePunathic.append(ϰhr);
    ϰdivResultConverterAlbanianShkypePunathic.append(ϰbutton);
    ϰdivResultConverterAlbanianShkypePunathic.append(ϰhr2);
    ϰdivResultConverterAlbanianShkypePunathic.append($article);

    }
}