/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-09-29
 * Time: 15:49
 * Updated:
*/

"use strict";

function HhêkvshkrePunathicConverterFunction($text) {

    let $transformed =

        // HH
        $text
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

            .replace(/HH/g, "Ħ").trim()
            .replace(/Hh/g, "Ħ").trim()
            .replace(/hh/g, "ħ").trim()

            .replace(/Sʾ/g, "Sˤ").trim()
            .replace(/sʾ/g, "sˤ").trim()

            .replace(/Zʾ/g, "Sˤ").trim()
            .replace(/zʾ/g, "sˤ").trim()

            .replace(/Ë/g, "Ə").trim()
            .replace(/ë/g, "ə").trim()

            .replace(/G/g, "ɡ").trim()
            .replace(/g/g, "ɡ").trim()

            .replace(/Ê/g, "Ɛ").trim()
            .replace(/ê/g, "ɛ").trim()

            .replace(/Ḥ/g, "Ħ").trim()
            .replace(/ḥ/g, "ħ").trim()

            .replace(/ṫ/g, "θ").trim()
            .replace(/Ṫ/g, "Θ").trim()

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
}