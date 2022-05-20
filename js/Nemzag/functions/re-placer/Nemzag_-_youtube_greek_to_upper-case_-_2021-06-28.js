/*
 * Created with PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 28/06/2021
 * Time: 23:18
 * Updated:
*/

"use strict";

//========================================================================================
// init constantes…
//========================================================================================

let ϰdivIdPrimary = document.getElementById("primary");

//========================================================================================
// init events…
//========================================================================================

//========================================================================================
// init variables…
//========================================================================================

/*
Es‑tern‑al fichier / file qui / uho use :
- ϰinput
- ϰdivResult
*/


//========================================================================================
// Tools
//========================================================================================

youTubeTextInTopUpperCaseGreek();

function youTubeTextInTopUpperCaseGreek() {

    /*
          var strMessage1 = document.getElementById("element1") ;
    strMessage1.innerHTML = strMessage1.innerHTML
                                .replace(/aaaaaa./g,'<a href=\"http://www.google.com/')
                                .replace(/.bbbbbb/g,'/world\">Helloworld</a>');
     */

    console.log("ϰdivIdPrimary : " + ϰdivIdPrimary);

    let ϰreplacedDivIdPrimary = ϰdivIdPrimary.innerHTML;

    console.log("ϰreplacedDivIdPrimary : " + ϰreplacedDivIdPrimary);

    // ϰdivIdPrimary.innerHTML = null;

    ϰreplacedDivIdPrimary = ϰreplacedDivIdPrimary
        .replace(/α/g,"Α") // 0001
        .replace(/ά/g,"Ά") // 0001
        .replace(/β/g,"Β") // 0002
        .replace(/γ/g,"Γ") // 0003
        .replace(/δ/g,"Δ") // 0004
        .replace(/ε/g,"Ε") // 0005
        .replace(/έ/g,"Έ") // 0005
        .replace(/ϛ/g,"Ϛ") // 0006
        .replace(/ζ/g,"Ζ") // 0007
        .replace(/η/g,"Η") // 0008
        .replace(/ή/g,"Ή") // 0008
        .replace(/θ/g,"Θ") // 0009
        .replace(/ι/g,"Ι") // 0010
        .replace(/ί/g,"Ί") // 0010
        .replace(/κ/g,"Κ") // 0020
        .replace(/λ/g,"Λ") // 0030
        .replace(/μ/g,"Μ") // 0040
        .replace(/ν/g,"Ν") // 0050
        .replace(/ξ/g,"Ξ") // 0060
        .replace(/ο/g,"Ο") // 0070
        .replace(/ό/g,"Ό") // 0070
        .replace(/π/g,"Π") // 0080
        .replace(/ρ/g,"Ρ") // 0200
        .replace(/σ/g,"Σ") // 0300
        .replace(/ς/g,"Σ") // 0300
        .replace(/τ/g,"Τ") // 0400
        .replace(/υ/g,"Υ") // 0500
        .replace(/ύ/g,"Ύ") // 0500
        .replace(/φ/g,"Φ") // 0600
        .replace(/χ/g,"Χ") // 0700
        .replace(/ψ/g,"Ψ") // 0700
        .replace(/ω/g,"Ω") // 1000
        .replace(/ώ/g,"Ώ") // 1000
        .trim();

    console.log("ϰreplacedDivIdPrimary : " + ϰreplacedDivIdPrimary);

    let ϰparser = new DOMParser();
    let ϰnewNode = ϰparser.parseFromString(ϰreplacedDivIdPrimary, 'text/html');

    console.log("ϰnewNode : " + ϰnewNode);

    ϰdivIdPrimary.append(ϰnewNode);

    console.log("ϰdivIdPrimary : " + ϰdivIdPrimary);
}

//========================================================================================
// Diverse tools
//========================================================================================