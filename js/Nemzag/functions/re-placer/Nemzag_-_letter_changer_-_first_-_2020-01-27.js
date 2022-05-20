/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 27/01/2020
 * Time: 08:26
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Code appelé automatiquement
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

const INPUT_CONVERTER_FIRST_LETTER = document.getElementById("inputConverterFirstLetter");
const DIV_RESULT_FIRST_LETTER = document.getElementById("divResultParënLettrën");

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

INPUT_CONVERTER_FIRST_LETTER.addEventListener("keyup", changeFirstLetterFunction);

//----------------------------------------------------------------------------------------
// Outils
//----------------------------------------------------------------------------------------

function changeFirstLetterFunction() {

    // console.log('Fonction « changeFirstLetterFunction » lancé.');

    let $text
    DIV_RESULT_FIRST_LETTER.innerHTML = null;

    $text = INPUT_CONVERTER_FIRST_LETTER.value.substring(1, 100);

    // console.log($text);

    let $transformed =
        "0000 ‒ Ə" + $text.trim().toUpperCase() + ' {En. ə' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0001 ‒ ʔ" + $text.trim().toUpperCase() + ' {En. ɂ' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0001 ‒ A" + $text.trim().toUpperCase() + ' {En. a' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0001 ‒ Ɑ̃" + $text.trim().toUpperCase() + ' {En. ɑ' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0002 ‒ B" + $text.trim().toUpperCase() + ' {En. b' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0003 ‒ C" + $text.trim().toUpperCase() + ' {En. c' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0003 ‒ G" + $text.trim().toUpperCase() + ' {En. g' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0001 ‒ D" + $text.trim().toUpperCase() + ' {En. d' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0004 ‒ Ð" + $text.trim().toUpperCase() + ' {En. dh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0005 ‒ Ẽ" + $text.trim().toUpperCase() + ' {En. e' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0005 ‒ E" + $text.trim().toUpperCase() + ' {En. e' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0005 ‒ H" + $text.trim().toUpperCase() + ' {En. h' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0006 ‒ V" + $text.trim().toUpperCase() + ' {En. v' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0007 ‒ Z" + $text.trim().toUpperCase() + ' {En. z' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0007 ‒ Ʒ" + $text.trim().toUpperCase() + ' {En. j' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0003 ‒ DƷ" + $text.trim().toUpperCase() + ' {En. dj' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0008 ‒ Ħ" + $text.trim().toUpperCase() + ' {En. hh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0008 ‒ Ɛ̃" + $text.trim().toUpperCase() + ' {En. e' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0008 ‒ Ɛ" + $text.trim().toUpperCase() + ' {En. e' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0009 ‒ T" + $text.trim().toUpperCase() + ' {En. t' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0010 ‒ Ĩ" + $text.trim().toUpperCase() + ' {En. i' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0010 ‒ I" + $text.trim().toUpperCase() + ' {En. i' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0010 ‒ J" + $text.trim().toUpperCase() + ' {En. y' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0020 ‒ K" + $text.trim().toUpperCase() + ' {En. k' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0030 ‒ L" + $text.trim().toUpperCase() + ' {En. l' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0040 ‒ M" + $text.trim().toUpperCase() + ' {En. m' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0050 ‒ N" + $text.trim().toUpperCase() + ' {En. n' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0060 ‒ S" + $text.trim().toUpperCase() + ' {En. s' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0070 ‒ ʕ" + $text.trim().toUpperCase() + ' {En. ʕ' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0070 ‒ Õ" + $text.trim().toUpperCase() + ' {En. o' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0070 ‒ O" + $text.trim().toUpperCase() + ' {En. o' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0070 ‒ Ɒ" + $text.trim().toUpperCase() + ' {En. a' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0080 ‒ P" + $text.trim().toUpperCase() + ' {En. p' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0090 ‒ Sˤ" + $text.trim().toUpperCase() + ' {En. s' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0090 ‒ TS" + $text.trim().toUpperCase() + ' {En. ts' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0100 ‒ Q" + $text.trim().toUpperCase() + ' {En. q' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0100 ‒ ɕ" + $text.trim().toUpperCase() + ' {En. qh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0100 ‒ Tɕ" + $text.trim().toUpperCase() + ' {En. tqh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0200 ‒ R" + $text.trim().toUpperCase() + ' {En. r' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0300 ‒ Ʃ" + $text.trim().toUpperCase() + ' {En. sh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0300 ‒ TƩ" + $text.trim().toUpperCase() + ' {En. ch' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0400 ‒ Θ" + $text.trim().toUpperCase() + ' {En. th' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0500 ‒ Ũ" + $text.trim().toUpperCase() + ' {En. u' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0500 ‒ U" + $text.trim().toUpperCase() + ' {En. u' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0500 ‒ Ỹ" + $text.trim().toUpperCase() + ' {En. y' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0500 ‒ Y" + $text.trim().toUpperCase() + ' {En. y' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0500 ‒ W" + $text.trim().toUpperCase() + ' {En. w' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0600 ‒ ɸ" + $text.trim().toUpperCase() + ' {En. ph' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0700 ‒ X" + $text.trim().toUpperCase() + ' {En. kh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0800 ‒ Ðˤ" + $text.trim().toUpperCase() + ' {En. dh' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0900 ‒ Zˤ" + $text.trim().toUpperCase() + ' {En. z' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "0900 ‒ TZ" + $text.trim().toUpperCase() + ' {En. tz' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "1000 ‒ Ɔ̃" + $text.trim().toUpperCase() + ' {En. o' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "1000 ‒ Ɔ" + $text.trim().toUpperCase() + ' {En. o' +  slugify($text).trim().toLowerCase() + '}' + '\n' +
        "1000 ‒ Ɣ" + $text.trim().toUpperCase() + ' {En. gh' +  slugify($text).trim().toLowerCase() + '}';

    let $hr = document.createElement("hr");
    $hr.setAttribute("class", "ui divider");

    let $paragraph = document.createElement("p");

    $paragraph.innerText = $transformed;

    DIV_RESULT_FIRST_LETTER.append($hr);
    DIV_RESULT_FIRST_LETTER.append($paragraph);
}