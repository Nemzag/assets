/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2019-12-27
 * Time: 11h05
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------
const BUTTON_COPY = document.getElementById("copy");

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------
BUTTON_COPY.addEventListener("click", copyResult);

//----------------------------------------------------------------------------------------
// Outils
//----------------------------------------------------------------------------------------

function copyResult() {
    /* Copy to ClipBoard */

    /* Get the text field */
    let copyText = (document.getElementById("result"));
    console.log(copyText);

    var range = document.createRange();
    range.selectNodeContents(copyText);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Text copied in ClipBoard !");
};