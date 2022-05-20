/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2020-07-10
 * Time: 11:50
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Utils
//----------------------------------------------------------------------------------------

function ArmenianClassicalEastTransCodation() {

    /*
    window.alert("GeorgianTransCodationLaunched");
    console.log("GeorgianTransCodationLaunched");
    */

    $term = INPUT_TEXT.value.toString().toLowerCase();

    /*
    window.alert($term);
    */
    console.log($term);

    /*
    window.alert($term);
    */
    console.log($term);


    // if($term.endsWith("ËË") {
    if ($term.endsWith("ËË")) {
        $term = $term.slice(-0, -1);
    }

    // Lettre Ա / ա [a]
    $term = $term.replace(/A/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Ա/g, "A"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Ա");

    $term = $term.replace(/a/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ա/g, "ɑ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ա");

    // Lettre Ք / ք [kʰ]
    $term = $term.replace(/Kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Ք/g, "Kʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Ք");

    $term = $term.replace(/kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ք/g, "kʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ք");

    // Lettre Դ / դ  [d / tʰ]
    $term = $term.replace(/D/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Դ/g, "D"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Դ");

    $term = $term.replace(/d/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/դ/g, "d"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "դ");

    // A FAIRE PLUS TARD QUAND DE AUTRE LETTRE SERONT NECESSAIRE.
    /*
    // A
    $term = $term.replace(/a/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ა/g, "ɑ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ა");

    // B
    $term = $term.replace(/b/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ბ/g, "b");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ბ");

    // G
    $term = $term.replace(/ɡ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/g/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/გ/g, "ɡ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "გ");

    // D
    $term = $term.replace(/d/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/დ/g, "d");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "დ");

    // Ê
    $term = $term.replace(/ɛ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ე/g, "ɛ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ე");

    // V
    $term = $term.replace(/v/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ვ/g, "v");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ვ");

    // Z
    $term = $term.replace(/z/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ზ/g, "z");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ზ");

    // E
    $term = $term.replace(/e/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჱ/g, "eː");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჱ");

    // Tʰ [00009]
    $term = $term.replace(/tʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/თ/g, "tʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "თ");

    // I [00010]
    $term = $term.replace(/i/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ი/g, "i");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ი");

    // K [00020]
    $term = $term.replace(/k/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/კ/g, "k");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "კ");

    // L [00030]
    $term = $term.replace(/l/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ლ/g, "l");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ლ");

    // M [00040]
    $term = $term.replace(/m/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/მ/g, "m");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "მ");

    // N [00050]
    $term = $term.replace(/n/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ნ/g, "n");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ნ");

    // J [00060]
    $term = $term.replace(/j/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჲ/g, "j");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჲ");

    // O [00070]
    $term = $term.replace(/o/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ო/g, "o");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ო");

    // P [00080]
    $term = $term.replace(/p/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/პ/g, "pʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "პ");

    // Ʒ [00090]
    $term = $term.replace(/ʒ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჟ/g, "ʒ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჟ");

    // Ʒ [00100]
    $term = $term.replace(/r/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/რ/g, "r");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "რ");

    // S [00200]
    $term = $term.replace(/s/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ს/g, "s");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ს");

    // Tʼ [00300]
    $term = $term.replace(/tʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ტ/g, "tʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ტ");

    // Tʼ [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/w/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჳ/g, "w");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჳ");

    // U [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/u/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/უ/g, "u");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "უ");

    // U [00000]
    $term = $term.replace(/ə/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჷ/g, "ə");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჷ");

    // Pʰ [00500]
    $term = $term.replace(/pʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ფ/g, "pʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ფ");

    // Kʰ [00600]
    $term = $term.replace(/kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ქ/g, "pʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ქ");

    // Ɣ [00700]
    $term = $term.replace(/ɣ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ღ/g, "ɣ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ღ");

    // Qʼ [00800]
    $term = $term.replace(/qʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ყ/g, "qʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ყ");

    // Qʼ [00001]
    $term = $term.replace(/ʔ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჸ/g, "ʔ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჸ");

    // Ʃ [00900]
    $term = $term.replace(/ʃ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/შ/g, "ʃ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "შ");

    // TSʰ [05000]
    $term = $term.replace(/tʃ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჭ/g, "tʃ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჭ");

    // TƩʰ [01000]
    $term = $term.replace(/tʃʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჩ/g, "tʃʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჩ");

    // TƩʰ [02000]
    $term = $term.replace(/tsʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ც/g, "tsʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ც");

    // TƩʰ [03000]
    $term = $term.replace(/dz/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ძ/g, "dz");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ძ");

    // TSʰ [04000]
    $term = $term.replace(/tsʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/წ/g, "tsʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "წ");

    // TSʰ [06000]
    $term = $term.replace(/χ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ხ/g, "χ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ხ");

    // Qʰ [07000]
    $term = $term.replace(/qʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჴ/g, "qʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჴ");

    // DƷ [08000]
    $term = $term.replace(/dʒ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჯ/g, "dʒ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჯ");

    // H [09000]
    $term = $term.replace(/h/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჰ/g, "h");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჰ");

    // Ô [10000]
    $term = $term.replace(/oː/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ɔ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჵ/g, "ɔ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჵ");

    // F [00500] {wrong numerology based on the falsified Greek, with missing SˤAN (90) and Qoppa (100).
    // Laz dia‑lect
    $term = $term.replace(/f/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჶ/g, "f");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჶ");

    // G [?????]
    // Dagestanian dia‑lect
    $term = $term.replace(/ɢ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჹ/g, "ɢ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჹ");

    // ʕ [00070]
    // Bats dia‑lect
    $term = $term.replace(/ʕ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჺ/g, "ɢ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ʕ");

    // ʕ [?????]
    // Bats dia‑lect
    $term = $term.replace(/̃/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჼ/g, "̃");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჼ");

    // Ə [00070]
    // Ossetian dia‑lect
    $term = $term.replace(/ə/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჽ/g, "ə");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჽ");

    //  [?????]
    // Abkhaz dia‑lect Hard Sign.
    $term = $term.replace(/̝/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჾ/g, "̝");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჾ");

    //  [?????]
    // Abkhaz dia‑lect Labial Sign.
    $term = $term.replace(/ʷ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჿ/g, "ʷ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჿ");

    // Punctuation
    $term = $term.replace(/---/g, "‑");
    $term = $term.replace(/:::/g, "‧⁠");

    */
    // A FAIRE PLUS TARD QUAND DE AUTRE LETTRE SERONT NECESSAIRE.

    // NASAL

    /*
    console.log($term);
    window.alert($term);
    */

    /* DISPLAY */
    if ($term !== '') { // if(!empty($term))
        $term.toUpperCase();
    } else {
        return '';
    }

} // End of function GeorgianTransCodation.

// Alternate fonction pro the west dialect.
function ArmenianWestTransCodation() {

    /*
    window.alert("GeorgianTransCodationLaunched");
    console.log("GeorgianTransCodationLaunched");
    */

    $term = INPUT_TEXT.value.toString().toLowerCase();

    /*
    window.alert($term);
    */
    console.log($term);

    /*
    window.alert($term);
    */
    console.log($term);


    // if($term.endsWith("ËË") {
    if ($term.endsWith("ËË")) {
        $term = $term.slice(-0, -1);
    }

    // Lettre Ա / ա [a]
    $term = $term.replace(/A/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Ա/g, "A"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Ա");

    $term = $term.replace(/a/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ա/g, "ɑ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ա");

    // Lettre Ք / ք [kʰ]
    $term = $term.replace(/Kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Ք/g, "Kʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Ք");

    $term = $term.replace(/kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ք/g, "kʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ք");

    // Lettre Դ / դ  [d / tʰ]
    $term = $term.replace(/Tʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/Դ/g, "Tʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "Դ");

    $term = $term.replace(/tʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/դ/g, "tʰ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "դ");

    // A FAIRE PLUS TARD QUAND DE AUTRE LETTRE SERONT NECESSAIRE.
    /*
    // A
    $term = $term.replace(/a/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ა/g, "ɑ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ა");

    // B
    $term = $term.replace(/b/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ბ/g, "b");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ბ");

    // G
    $term = $term.replace(/ɡ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/g/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/გ/g, "ɡ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "გ");

    // D
    $term = $term.replace(/d/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/დ/g, "d");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "დ");

    // Ê
    $term = $term.replace(/ɛ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ე/g, "ɛ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ე");

    // V
    $term = $term.replace(/v/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ვ/g, "v");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ვ");

    // Z
    $term = $term.replace(/z/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ზ/g, "z");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ზ");

    // E
    $term = $term.replace(/e/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჱ/g, "eː");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჱ");

    // Tʰ [00009]
    $term = $term.replace(/tʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/თ/g, "tʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "თ");

    // I [00010]
    $term = $term.replace(/i/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ი/g, "i");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ი");

    // K [00020]
    $term = $term.replace(/k/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/კ/g, "k");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "კ");

    // L [00030]
    $term = $term.replace(/l/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ლ/g, "l");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ლ");

    // M [00040]
    $term = $term.replace(/m/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/მ/g, "m");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "მ");

    // N [00050]
    $term = $term.replace(/n/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ნ/g, "n");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ნ");

    // J [00060]
    $term = $term.replace(/j/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჲ/g, "j");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჲ");

    // O [00070]
    $term = $term.replace(/o/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ო/g, "o");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ო");

    // P [00080]
    $term = $term.replace(/p/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/პ/g, "pʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "პ");

    // Ʒ [00090]
    $term = $term.replace(/ʒ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჟ/g, "ʒ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჟ");

    // Ʒ [00100]
    $term = $term.replace(/r/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/რ/g, "r");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "რ");

    // S [00200]
    $term = $term.replace(/s/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ს/g, "s");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ს");

    // Tʼ [00300]
    $term = $term.replace(/tʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ტ/g, "tʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ტ");

    // Tʼ [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/w/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჳ/g, "w");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჳ");

    // U [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/u/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/უ/g, "u");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "უ");

    // U [00000]
    $term = $term.replace(/ə/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჷ/g, "ə");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჷ");

    // Pʰ [00500]
    $term = $term.replace(/pʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ფ/g, "pʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ფ");

    // Kʰ [00600]
    $term = $term.replace(/kʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ქ/g, "pʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ქ");

    // Ɣ [00700]
    $term = $term.replace(/ɣ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ღ/g, "ɣ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ღ");

    // Qʼ [00800]
    $term = $term.replace(/qʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ყ/g, "qʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ყ");

    // Qʼ [00001]
    $term = $term.replace(/ʔ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჸ/g, "ʔ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჸ");

    // Ʃ [00900]
    $term = $term.replace(/ʃ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/შ/g, "ʃ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "შ");

    // TSʰ [05000]
    $term = $term.replace(/tʃ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჭ/g, "tʃ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჭ");

    // TƩʰ [01000]
    $term = $term.replace(/tʃʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჩ/g, "tʃʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჩ");

    // TƩʰ [02000]
    $term = $term.replace(/tsʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ც/g, "tsʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ც");

    // TƩʰ [03000]
    $term = $term.replace(/dz/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ძ/g, "dz");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ძ");

    // TSʰ [04000]
    $term = $term.replace(/tsʼ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/წ/g, "tsʼ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "წ");

    // TSʰ [06000]
    $term = $term.replace(/χ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ხ/g, "χ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ხ");

    // Qʰ [07000]
    $term = $term.replace(/qʰ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჴ/g, "qʰ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჴ");

    // DƷ [08000]
    $term = $term.replace(/dʒ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჯ/g, "dʒ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჯ");

    // H [09000]
    $term = $term.replace(/h/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჰ/g, "h");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჰ");

    // Ô [10000]
    $term = $term.replace(/oː/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ɔ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჵ/g, "ɔ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჵ");

    // F [00500] {wrong numerology based on the falsified Greek, with missing SˤAN (90) and Qoppa (100).
    // Laz dia‑lect
    $term = $term.replace(/f/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჶ/g, "f");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჶ");

    // G [?????]
    // Dagestanian dia‑lect
    $term = $term.replace(/ɢ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჹ/g, "ɢ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჹ");

    // ʕ [00070]
    // Bats dia‑lect
    $term = $term.replace(/ʕ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჺ/g, "ɢ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ʕ");

    // ʕ [?????]
    // Bats dia‑lect
    $term = $term.replace(/̃/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჼ/g, "̃");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჼ");

    // Ə [00070]
    // Ossetian dia‑lect
    $term = $term.replace(/ə/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჽ/g, "ə");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჽ");

    //  [?????]
    // Abkhaz dia‑lect Hard Sign.
    $term = $term.replace(/̝/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჾ/g, "̝");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჾ");

    //  [?????]
    // Abkhaz dia‑lect Labial Sign.
    $term = $term.replace(/ʷ/g, "varia-temp‑ôrar-jum");
    $term = $term.replace(/ჿ/g, "ʷ");
    $term = $term.replace(/varia-temp‑ôrar-jum/g, "ჿ");

    // Punctuation
    $term = $term.replace(/---/g, "‑");
    $term = $term.replace(/:::/g, "‧⁠");

    */
    // A FAIRE PLUS TARD QUAND DE AUTRE LETTRE SERONT NECESSAIRE.

    // NASAL

    /*
    console.log($term);
    window.alert($term);
    */

    /* DISPLAY */
    if ($term !== '') { // if(!empty($term))
        $term.toUpperCase();
    } else {
        return '';
    }

} // End of function GeorgianTransCodation.