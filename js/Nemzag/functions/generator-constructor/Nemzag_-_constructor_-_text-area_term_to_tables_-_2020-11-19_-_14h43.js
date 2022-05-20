/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 19/11/2020
 * Time: 14:43
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

const BUTTON_INPUT = document
    .getElementById("button-input");

const TEXT_AREA_EVLRAN = document
    .getElementById("text-area-evlran")
;

const TEXT_AREA_RACINE = document
    .getElementById("text-area-racine")
;

const TEXT_AREA_TENAFATION = document
    .getElementById("text-area-tenafation")
;

const TEXT_AREA_SAGITTARIUS = document
    .getElementById("text-area-sagittarius")
;

//----------------------------------------------------------------------------------------
// init variables…
//----------------------------------------------------------------------------------------

let ϰdivTextAreaTermToTableResult = document
    .getElementById("text-area-term-to-table-display")
;

let ϰtextAreaElvran
;

let ϰtr
;

//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

TEXT_AREA_EVLRAN.addEventListener("keyup", convertTextAreaToTables);
TEXT_AREA_SAGITTARIUS.addEventListener("keyup", convertTextAreaToTables);
TEXT_AREA_RACINE.addEventListener("keyup", convertTextAreaToTables);
TEXT_AREA_TENAFATION.addEventListener("keyup", convertTextAreaToTables);

BUTTON_INPUT.addEventListener("click", displayWindowsAlert);

//----------------------------------------------------------------------------------------
// Tools
//----------------------------------------------------------------------------------------

convertTextAreaToTables();

/*
Getting lot of terms, subdivise them after any space or line‑break,
after each terms is a converted in to variables,
the each variable is converted in multiple type of Script (I.P.A., Fr, En, Sq, Şq., Semitic),
then each of these variable’së are put in line in a Table.

Generating the arrow automatically by combination vïll allow to add background-color automatically.

May be I can convert textarea in a variable Object of Tables, then use a JS function similar to PHP
EXTRACT. To split these terms. I need to find the solution.
 */

function convertTextAreaToTables() {

    // console.log(TEXT_AREA.value);

    // ϰdivResult.innerHTML = TEXT_AREA.value;

    let ϰtextAreaElvran = TEXT_AREA_EVLRAN
        .value
        .replace(/\r\n/g,"\n")
        // .replace(/ /g, "\n")
        // .replace(/,/g, ",\n")
        // .replace(/\./g, ".\n")
        // .replace(/!/g, " !\n")
        // .replace(/\?/g, " ?\n")
        // .replace(/^ \?$/g, " ?\n")
        // .replace(/^ !$/g, " !\n")
        .split("\n")
    ;

    let ϰtextAreaTenafation = TEXT_AREA_TENAFATION
        .value
        .replace(/\r\n/g,"\n")
        // .replace(/ /g, "\n")
        // .replace(/,/g, ",\n")
        .replace(/\./g, ".<br>")
        .replace(/!/g, " !<br>")
        .replace(/\?/g, " ?<br>")
        // .replace(/^ \?$/g, " ?\n")
        // .replace(/^ !$/g, " !\n")
        .split("\n")
    ;

    let ϰtextAreaSagittarius = TEXT_AREA_SAGITTARIUS
        .value
        .replace(/\r\n/g,"\n")
        // .replace(/ /g, "\n")
        // .replace(/,/g, ",\n")
        .replace(/\./g, ".\n")
        .replace(/!/g, " !\n")
        .replace(/\?/g, " ?\n")
        // .replace(/^ \?$/g, " ?\n")
        // .replace(/^ !$/g, " !\n")
        .split("\n")
    ;

    // console.log(ϰtextAreaElvran);

    //=======================================================================================
    // Création variable Table & TableHead.

    let ϰtable = document
        .createElement("table");

    let ϰthead = document
        .createElement("thead");

    ϰtable
        .appendChild(ϰthead);

    //=======================================================================================
    // Création variable TableBody.

    let ϰtbody = document
        .createElement("tbody");

    ϰtable
        .append(ϰtbody)

    //=======================================================================================
    // Création variable ϰthBinary.
    //=======================================================================================

    let ϰthBinary = document
        .createElement("th");

    ϰthBinary
        .setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 6em;");

    ϰthBinary
        .setAttribute("class", "binary");

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthBinaryDetails = document.createElement("details");

    ϰthBinaryDetails.innerHTML = "B<br>I<br>N<br>‑<br>A<br>R<br>Y";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthBinaryDetailsSummary = document.createElement("summary");

    ϰthBinaryDetailsSummary.setAttribute("style", "direction: rtl;");

    ϰthBinaryDetailsSummary.innerHTML = "-1.1+";

    //=======================================================================================
    // Création variable ϰthArrow.
    //=======================================================================================

    let ϰthArrow = document
        .createElement("th");

    ϰthArrow.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 6em;");

    ϰthArrow
        .setAttribute("class", "arrow");

    ϰthArrow.innerHTML = "ARROW";

    //=======================================================================================
    // Création variable ϰthÊvlranë.
    //=======================================================================================

    let ϰthÊvlranë = document
        .createElement("th");

    ϰthÊvlranë.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 18em;");

    ϰthÊvlranë
        .setAttribute("class", "elvrane");

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthÊvlranëDetails = document.createElement("details");

    ϰthÊvlranëDetails.innerHTML =
        "ΗϜΛΡΑΝƏ<br>\n" +
        "ИВЛРАНЪ<br>\n" +
        "حۋلرأن<br>\n" +
        "ܚܘܠܪܐܢܐ<br>\n" +
        "חֶּולרַןְ<br>\n" +
        "ह़ॅव्ल्राँन";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthÊvlranëDetailsSummary = document.createElement("summary");

    ϰthÊvlranëDetailsSummary.setAttribute("style", "direction: rtl;");

    ϰthÊvlranëDetailsSummary.innerHTML = "ÊVLRÃNË’SË";

    //=======================================================================================
    // Création variable ϰthÔrbïtïanë.
    //=======================================================================================

    let ϰthÔrbïtïanë = document
        .createElement("th");

    ϰthÔrbïtïanë.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 10em;");

    ϰthÔrbïtïanë
        .setAttribute("class", "orbitian");

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthÔrbïtïanëDetails = document.createElement("details");

    ϰthÔrbïtïanëDetails.innerHTML =
        "ΩΡΒͿΘͿϒΣ<br>\n" +
        "ѺРБЈѲЪ‑ЈАНЪ<br>\n" +
        "عربيثي<br>\n" +
        "ܥܪܒܝܬܝܐ<br>\n" +
        "עָרבִּיתִ׳יְ<br>\n" +
        "ओर्बीथ़्यान्";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthÔrbïtïanëDetailsSummary = document.createElement("summary");

    ϰthÔrbïtïanëDetailsSummary.setAttribute("style", "direction: rtl;");

    ϰthÔrbïtïanëDetailsSummary.innerHTML = "ÔRBÏTÏANË’SË";

    //=======================================================================================
    // Création variable ϰthRoots.
    //=======================================================================================

    let ϰthRoots = document
        .createElement("th");

    ϰthRoots.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 10em;");

    ϰthRoots
        .setAttribute("class", "roots");

    ϰthRoots.innerHTML = "ROOŢË’SË";

    //=======================================================================================
    // Création variable ϰthTransëDukţëIônë.
    //=======================================================================================

    let ϰthTransëDukţëIônë = document
        .createElement("th");

    ϰthTransëDukţëIônë.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 18em;");

    ϰthTransëDukţëIônë
        .setAttribute("class", "transduction");

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthTransëDukţëIônëDetails = document.createElement("details");

    ϰthTransëDukţëIônëDetails.innerHTML =
        "ĢEGË<br>\n" +
        "ŞKYPË‑TÄRË<br>\n" +
        "ENGLISH / HENDZ̧LLIŞTËNË<br>\n" +
        "VRÃNÇAÏSË / FRENCH<br>\n";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthTransëDukţëIônëDetailsSummary = document.createElement("summary");

    ϰthTransëDukţëIônëDetailsSummary.setAttribute("style", "direction: rtl;");

    ϰthTransëDukţëIônëDetailsSummary.innerHTML = "TRÃNSË‑DUË‑KTË‑ÏÕNË’SË";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthTenafations = document
        .createElement("th");

    ϰthTenafations.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 30em;");

    ϰthTenafations
        .setAttribute("class", "tenafations");

    ϰthTenafations.innerHTML = "TEË‑NAFAË‑TÏÕNË’SË";

    //───────────────────────────────────────────────────────────────────────────────────────

    let ϰthPolyPulţiVariAnts = document
        .createElement("th");

    ϰthPolyPulţiVariAnts.setAttribute("style", "padding: 0.5em; border: 1px solid rgba(64,64,64,.20); text-align: center; background-color: rgb(245, 245, 245); color: black; min-width: 16em;");

    ϰthPolyPulţiVariAnts
        .setAttribute("class", "polymultivariants");

    ϰthPolyPulţiVariAnts.innerHTML = "POLY‑PULÞ‑ÏVARË‑JÃNÞË’SË";

    //=======================================================================================
    // Création variable ϰheadTr.
    //=======================================================================================

    let ϰheadTr = document
        .createElement("tr");

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰthBinaryDetails.appendChild(ϰthBinaryDetailsSummary);

    ϰthBinary.appendChild(ϰthBinaryDetails);

    ϰheadTr.appendChild(ϰthBinary);

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰheadTr.appendChild(ϰthArrow);

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰthÊvlranëDetails.appendChild(ϰthÊvlranëDetailsSummary);

    ϰthÊvlranë.appendChild(ϰthÊvlranëDetails);

    ϰheadTr.appendChild(ϰthÊvlranë);

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰthÔrbïtïanëDetails
        .appendChild(ϰthÔrbïtïanëDetailsSummary)
    ;

    ϰthÔrbïtïanë
        .appendChild(ϰthÔrbïtïanëDetails)
    ;

    ϰheadTr
        .appendChild(ϰthÔrbïtïanë)
    ;

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰheadTr.appendChild(ϰthRoots)
    ;

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰthTransëDukţëIônëDetails
        .appendChild(ϰthTransëDukţëIônëDetailsSummary)
    ;

    ϰthTransëDukţëIônë
        .appendChild(ϰthTransëDukţëIônëDetails)
    ;

    ϰheadTr
        .appendChild(ϰthTransëDukţëIônë)
    ;

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰheadTr
        .appendChild(ϰthTenafations)
    ;

    //───────────────────────────────────────────────────────────────────────────────────────

    ϰheadTr
        .appendChild(ϰthPolyPulţiVariAnts)
    ;

    //=======================================================================================
    // Création TableHead.
    //=======================================================================================
    ϰthead
        .appendChild(ϰheadTr)
    ;

    /*
    console
        .log("1" + ϰdivResult)
    ;
    */

    //=======================================================================================
    // Reset ϰdivResult.
    //=======================================================================================

    ϰdivTextAreaTermToTableResult.innerHTML = null
    ;

    /*
    console
        .log("2" + ϰdivResult)
    ;
    */

    //=======================================================================================

    ϰtable
        .setAttribute("class", "ten-column-nowrap")
    ;

    ϰtable
        .setAttribute("style", "background-color: #ffffff;margin-left:auto;margin-right:auto;")
    ;

    // ϰthead.setAttribute("style", "vertical-align: baseline; position: sticky; top: 0; z-index: 99;");

    //=======================================================================================

    for (let ϰi = 0; ϰi < ϰtextAreaElvran.length; ϰi++) {

        console
            .log(ϰi)
        ;

        //=======================================================================================
        // Construction de ligne.
        //=======================================================================================

        ϰtr = document
            .createElement("tr")
        ;

        //=======================================================================================
        // Variable Shkupëjanë, construit la cellule.

        let ϰtdBinëArë = document
            .createElement("td")
        ;

        ϰtdBinëArë
            .setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box; background-color: white; color: black; font-weight:bold;")
        ;

        ϰtdBinëArë
            .setAttribute("title", "binary")
        ;

        ϰtdBinëArë
            .setAttribute("class", "table-tr-td-binary")
        ;

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdArrowë = document
            .createElement("td")
        ;

        ϰtdArrowë
            .setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: white; color: black; font-weight:bold;")
        ;

        ϰtdArrowë
            .setAttribute("title", "arrow")
        ;

        ϰtdArrowë
            .setAttribute("class", "table-tr-td-arrow")
        ;

        ϰtdArrowë.innerHTML = ϰtextAreaSagittarius[ϰi];

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdArrow = document
            .createElement("td");

        ϰtdArrow.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box; background-color: white; color: black; font-weight:bold;");

        ϰtdArrow.setAttribute("title", "binary");

        ϰtdArrow.setAttribute("class", "table-tr-td-binary");

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdShkupëjanë = document
            .createElement("td");

        ϰtdShkupëjanë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: #fffde7; color: black; font-weight:bold;text-transform:uppercase;");

        ϰtdShkupëjanë.setAttribute("title", "elvran");

        ϰtdShkupëjanë.setAttribute("class", "table-tr-td-elvran");

        // ϰtdShkupëjanë.innerHTML = ϰtextAreaElvran[ϰi];

        //----------------------------------------------------------------------------------------

        // Ã Â Ä A B C CH D DH DHʾ E Ë H F G GJ Ê HH Ï I J JH K KH L LL M NG N S O Õ Ô Ö Œ P Sʾ Q QH R RH SH T TH U Ũ V W X XH Y Ỹ Zʾ Z ZH
        let $QrêgueTextAreaElvran = ϰtextAreaElvran[ϰi]
            .toUpperCase()

            // [0.000]
            .replace(/Ë/g, "Ⲳ").trim()

            // [0.001]
            .replace(/Ã/g, "Ἀ").trim()

            // [0.003]
            .replace(/GH/g, "΄Γ").trim()

            // [0.004]
            .replace(/DH/g, "΄Δ").trim()

            // [0.005]
            .replace(/É/g, "Ε").trim()

            // [0.007]
            .replace(/Ž/g, "Ʒ").trim()

            .replace(/Z̧/g, "Ʒ").trim()

            .replace(/ZH/g, "Ϫ").trim()

            // [0.008]
            .replace(/Ê/g, "Η").trim()

            .replace(/Ẽ/g, "Ἠ").trim()

            .replace(/HH/g, "Ͱ").trim()

            // [0.010]
            .replace(/Ï/g, "Ϳ").trim()

            // [0.020]
            .replace(/C/g, "Κ|Ϙ|Γ|Θ|Ϲ").trim()

            // [0.090]
            .replace(/Sʾ/g, "Ϟ").trim()

            // [0.100]
            .replace(/Q̧/g, "΄Ϙ").trim()

            .replace(/QH/g, "΄Ϙ").trim()

            // [0.200]
            .replace(/RH/g, "ῥ").toUpperCase().trim()

            .replace(/RR/g, "ΡΡ").trim()

            // [0.300]
            .replace(/SH/g, "Ϸ").trim()

            .replace(/Š/g, "Ϸ").trim()

            .replace(/Ş/g, "Ϸ").trim()

            // [0.700]
            .replace(/KH/g, "X").trim()

            // [1.000]
            .replace(/Ô/g, "Ω").trim()

            // [1.000]
            .replace(/Õ/g, "Ɔ̃").trim()

            .replace(/TH/g, "Θ").trim()

            .replace(/JH/g, "΄Ϳ").trim()










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

        console.log("$QrêgueTextAreaElvran to upper‑case : ", $QrêgueTextAreaElvran)
        ;

        //let $GrêqueTextAreaElvran = $QrêgueTextAreaElvran[ϰi]

        // $GrêqueTextAreaElvran
        //    .toLowerCase();

        //----------------------------------------------------------------------------------------
        // console.log(ϰIPA);

        // console.log("ϰtextAreaElvran : " + ϰtextAreaElvran[ϰi])

        let $ipaTextAreaElvran = ϰtextAreaElvran[ϰi]

        // console.log("$ipaTextAreaElvran : " + $ipaTextAreaElvran);

        let ϰspanIPA = document
            .createElement("span")
        ;

        ϰspanIPA
            .setAttribute("class", "evlran-IPA")
        ;
        // console.log("ϰspanIPA : " + ϰspanIPA.innerText);

        // Cônversion en texte du I.P.A. minuscule.
        $ipaTextAreaElvran
            = $ipaTextAreaElvran
            .toLowerCase()
        ;

        ϰspanIPA.innerHTML = $ipaTextAreaElvran
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

        // console.log("$ipaTextAreaElvran after .lowercase() : " + $ipaTextAreaElvran);
        // console.log("ϰipaSpan : " + ϰspanIPA);

        // Visibilitée dê’s parenthèse’s.
        if(ϰtextAreaElvran[ϰi] !== "") {

            ϰtdShkupëjanë

                .innerHTML
                =
                ϰtextAreaElvran[ϰi]
                +
                "<br>"
                +
                $QrêgueTextAreaElvran
                +
                "<br>"
            ;
            ϰtdShkupëjanë
                .appendChild(ϰspanIPA);
        }
        else {
            ϰtdShkupëjanë.innerHTML = "";
        }

        // Variable Shkupëjanë, construit la cellule.

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdÔrbëÏtanë = document
            .createElement("td");

        ϰtdÔrbëÏtanë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: white; color: black; text-align:right;");

        ϰtdÔrbëÏtanë.setAttribute("title", "orbitian");

        ϰtdÔrbëÏtanë.setAttribute("class", "table-tr-td-orbitian");

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdRooţë = document                // Rãjë, rïzë, radïxë, root.
            .createElement("td");

        ϰtdRooţë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: white; color: black; text-transform:uppercase;");
        ϰtdRooţë.setAttribute("title", "roots");
        ϰtdRooţë.setAttribute("class", "table-tr-td-roots");

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdTransëDuëKtëÏõnë = document
            .createElement("td");

        ϰtdTransëDuëKtëÏõnë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: #ffebee; color: black; text-transform:uppercase; font-style: oblique -14deg;");

        ϰtdTransëDuëKtëÏõnë.setAttribute("title", "transduction");

        ϰtdTransëDuëKtëÏõnë.setAttribute("class", "table-tr-td-transduction");


        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdTeëNafaëŢïõnë = document
            .createElement("td");

        ϰtdTeëNafaëŢïõnë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: white; color: black; font-style:italic;")
        ϰtdTeëNafaëŢïõnë.setAttribute("title", "tenafation")
        ϰtdTeëNafaëŢïõnë.setAttribute("class", "table-tr-td-tenafation")

        ϰtdTeëNafaëŢïõnë.innerHTML = ϰtextAreaTenafation[ϰi];

        //───────────────────────────────────────────────────────────────────────────────────────

        let ϰtdPolyPulthiVarJanthë = document
            .createElement("td");

        ϰtdPolyPulthiVarJanthë.setAttribute("style", "padding: 0.5em; border: 1px solid #ddd; filter: invert(0); background-clip: padding-box;  background-color: white; color: black;")
        ϰtdPolyPulthiVarJanthë.setAttribute("title", "polymultivariant")
        ϰtdPolyPulthiVarJanthë.setAttribute("class", "table-tr-td-polymultivariant")

        ϰtdPolyPulthiVarJanthë
            .innerHTML = "" +
            "<b>Şk.</b> .<br>"
            +
            "<b>Sq.</b> .<br>\n"
            +
            "<b>R.F.</b> .<br>\n";

        //───────────────────────────────────────────────────────────────────────────────────────

        // HhêkvshkrePunathicConverterFunction(ϰIPA);

        // Construit la seconde cellule
        // $let $tdPrenom = document.createElement("td");
        // $tdPrenom.innerHTML = pers.prenom;

        //=======================================================================================
        // Ajoute les cellules dans la ligne
        //=======================================================================================

        ϰtr
            .appendChild(ϰtdBinëArë)

        //───────────────────────────────────────────────────────────────────────────────────────

        ϰtr
            .appendChild(ϰtdArrowë)

        //───────────────────────────────────────────────────────────────────────────────────────
        ϰtr
            .appendChild(ϰtdShkupëjanë)

        //───────────────────────────────────────────────────────────────────────────────────────
        ϰtr
            .appendChild(ϰtdÔrbëÏtanë);

        // ϰtr.appendChild(ϰIPA);

        //───────────────────────────────────────────────────────────────────────────────────────

        ϰtr
            .appendChild(ϰtdRooţë);

        //───────────────────────────────────────────────────────────────────────────────────────

        ϰtr
            .appendChild(ϰtdTransëDuëKtëÏõnë);

        //───────────────────────────────────────────────────────────────────────────────────────

        ϰtr
            .appendChild(ϰtdTeëNafaëŢïõnë);

        //───────────────────────────────────────────────────────────────────────────────────────

        ϰtr
            .appendChild(ϰtdPolyPulthiVarJanthë);

        //───────────────────────────────────────────────────────────────────────────────────────

        // Ajoute la ligne à la suite du ϰdivResult

        //=======================================================================================
        //
        //=======================================================================================

        ϰtbody
            .appendChild(ϰtr)
            .setAttribute("style", "vertical-align: baseline;");
    }
    /*
    ϰtable
        .replace(/</g, '&amp;lt;')
        .replace(/>/g, '&amp;gt;');
    */

    //=======================================================================================

    /*
    let ϰspanResult = document
        .createElement("span")
    ;

    ϰspanResult
        .append(ϰtable)
    ;
    */

    ϰdivTextAreaTermToTableResult
        .append(ϰtable)

    /*
    document.write(ϰspanResult.innerHTML)

    // Il êşţë impossible dë écrire dë‑ãnsë lë fichier en dur, avec JS,
    // ïlë faut passer par lë PHP file_put_contents,
    // - https://www.w3schools.com/php/func_filesystem_file_put_contents.asp
    // ou NodJS : writeFile();
    // - https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
     */
    ;

}

function displayWindowsAlert() {

    // Afficher le code dë‑ãnsë unë fenetre afin dë copier.
    window.alert(ϰdivTextAreaTermToTableResult.innerHTML);
}