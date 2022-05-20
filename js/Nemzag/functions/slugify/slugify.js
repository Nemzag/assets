/*
 * Created by PhpStorm.
 * User: Mathew Byrne (Australia) {https://gist.github.com/mathewbyrne}.
 * Date: 12 Oct 2011.
 * Updated:
*/

"use strict";

//========================================================================================
// Outils
//========================================================================================

function slugify($string) {

    // https://gist.github.com/mathewbyrne/1280286

    const A = 'àáâäæãåāăąɑɒçćčđďèéêëẽēėęěğǵḧîïíīįìĩłḿñńǹňôöòóõœøōõőɔṕŕřßśšşșťțûüùúūǘůűųũẃẍÿýỹžźż·/_,:;'
    const B = 'aaaaaaaaaaaacccddeeeeeeeeegghiiiiiiilmnnnnoooooooooooprrsssssttuuuuuuuuuuwxyyyzzz------'
    const P = new RegExp(A.split('').join('|'), 'g')

    return $string.toString().toLowerCase()
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(P, c => B.charAt(A.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-')     // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
        .replace(/\-\-+/g, '-')     // Replace multiple - with single -
        .replace(/^-+/, '')         // Trim - from start of text
        .replace(/-+$/, '')         // Trim - from end of text
}