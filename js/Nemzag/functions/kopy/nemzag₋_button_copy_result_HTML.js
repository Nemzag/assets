/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-09-15
 * Time: 20h35
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

    //select the element with the id "copyMe", must be a text box
    var textToCopy = document.getElementById("result");
    //select the text in the text box

    textToCopy.value = textToCopy.innerHTML;
    textToCopy.select();
    //copy the text to the clipboard
    document.execCommand("copy");
}

    /*
        //select the element with ID = "CopyMeID", can be a div, p, or a span, possibly others
        var textToCopy = document.getElementById("result");

        //you can target the same element using querySelector() as well
        //example below:
        //var textToCopy = document.querySelector('.CopyMeClass');

        //check and see if the user had a text selection range
        var currentRange;
        if(document.getSelection().rangeCount > 0)
            ;{
            //the user has a text selection range, store it
            currentRange = document.getSelection().getRangeAt(0);
            //remove the current selection
            window.getSelection().removeRange(currentRange);
        }
    else
        {
            //they didn't have anything selected
            currentRange = false;
        }

        //create a selection range
        var CopyRange = document.createRange();
        //choose the element we want to select the text of
        CopyRange.selectNode(textToCopy);
        //select the text inside the range
        window.getSelection().addRange(CopyRange);
        //copy the text to the clipboard
        document.execCommand("copy");

        /*
        //remove our selection range
        window.getSelection().removeRange(CopyRange);

        //return the old selection range
        if(currentRange)
        {
            window.getSelection().addRange(currentRange);
        }
    }

    //select the element with the id "copyMe", must be a text box
    var textToCopy = document.getElementById("result");
    //select the text in the text box
    textToCopy.select();
    */

        /*
    //copy the text to the clipboard
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }*/

/*
function copyResult() {
    // Copy to ClipBoard

    // Get the text field
    let copyText = (document.getElementById("result"));
    console.log("copy" + copyText);

    var range = document.createRange();
    range.selectNodeContents();

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the text inside the text field
    document.execCommand("copy");

    // Alert the copied text
    alert("Text copied in ClipBoard !");

};
*/