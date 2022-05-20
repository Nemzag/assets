/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-11-21
 * Time: 12:41
 * Updated:
*/

"use strict";

function nemzagSlugIfy($string) {

    const A = 'àáâäæãåāăąɑɒçćčđďèéêëẽēėęěɸğǵḧḥîïíīįìĩłḿñńǹňôöòóõœøōõőɔṕŕřßśšşșθťțţûüùúūǘůűųũẃẍÿýỹžźż'
    const B = 'aaaaaaaaaaaacccddeeeeeeeeefgghhiiiiiiilmnnnnoooooooooooprrsssssttttuuuuuuuuuuwxyyyzzz'
    const P = new RegExp(A.split('').join('|'), 'g')

    /*
    const ËË = ["ë", "ë,", "ë."];
    const EE = ["", ",", "."];
    const ÊÊ = new RegExp(ËË.join('|'), 'g')
    const ẼẼ = new RegExp(EE.join(''), 'g')
    */
    // « flags: 'g' » : With this flag the search looks for all matches,
    // without it – only the first match is returned.
    // https://javascript.info/regexp-introduction
    //https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re

    return $string.toString().toLowerCase()
        .replace(/\s+/g, ' ') // Replace spaces with -

        .replace(/‑/g, '')
        .replace(/ë‑/g, '')
        .replace(/ë\,/g, ",")
        .replace(/ë\./g, ".")
        .replace(/iqw/, "c")
        // .replace(ÊÊ, c => ẼẼ.charAt(ËË.indexOf(c))()) // Replace special characters
        .replace(P, c => B.charAt(A.indexOf(c))) // Replace special characters
        .replace(/&/g, ' & ') // Replace & with 'and'
        // .replace(/[^\w\-]+/g, '') // Remove all non-word characters */
        // .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}