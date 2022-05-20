/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 2019-12-27
 * Time: 10h36
 * Updated:
*/

"use strict";

//----------------------------------------------------------------------------------------
// Utils
//----------------------------------------------------------------------------------------

function GeorgianTransCodation() {

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

    // A
    $term = $term.replace(/a/g, "XYZ");
    $term = $term.replace(/ა/g, "ɑ"); // /g mean Global, so the letter will changed multiple time.
    $term = $term.replace(/XYZ/g, "ა");

    // B
    $term = $term.replace(/b/g, "XYZ");
    $term = $term.replace(/ბ/g, "b");
    $term = $term.replace(/XYZ/g, "ბ");

    // G
    $term = $term.replace(/ɡ/g, "XYZ");
	$term = $term.replace(/g/g, "XYZ");
    $term = $term.replace(/გ/g, "ɡ");
    $term = $term.replace(/XYZ/g, "გ");

    // D
    $term = $term.replace(/d/g, "XYZ");
    $term = $term.replace(/დ/g, "d");
    $term = $term.replace(/XYZ/g, "დ");

    // Ê
    $term = $term.replace(/ɛ/g, "XYZ");
    $term = $term.replace(/ე/g, "ɛ");
    $term = $term.replace(/XYZ/g, "ე");

    // V
    $term = $term.replace(/v/g, "XYZ");
    $term = $term.replace(/ვ/g, "v");
    $term = $term.replace(/XYZ/g, "ვ");

    // Z
    $term = $term.replace(/z/g, "XYZ");
    $term = $term.replace(/ზ/g, "z");
    $term = $term.replace(/XYZ/g, "ზ");

    // E
    $term = $term.replace(/e/g, "XYZ");
    $term = $term.replace(/ჱ/g, "eː");
    $term = $term.replace(/XYZ/g, "ჱ");

    // Tʰ [00009]
    $term = $term.replace(/tʰ/g, "XYZ");
    $term = $term.replace(/თ/g, "tʰ");
    $term = $term.replace(/XYZ/g, "თ");

    // I [00010]
    $term = $term.replace(/i/g, "XYZ");
    $term = $term.replace(/ი/g, "i");
    $term = $term.replace(/XYZ/g, "ი");

    // K [00020]
    $term = $term.replace(/k/g, "XYZ");
    $term = $term.replace(/კ/g, "k");
    $term = $term.replace(/XYZ/g, "კ");

    // L [00030]
    $term = $term.replace(/l/g, "XYZ");
    $term = $term.replace(/ლ/g, "l");
    $term = $term.replace(/XYZ/g, "ლ");

    // M [00040]
    $term = $term.replace(/m/g, "XYZ");
    $term = $term.replace(/მ/g, "m");
    $term = $term.replace(/XYZ/g, "მ");

    // N [00050]
    $term = $term.replace(/n/g, "XYZ");
    $term = $term.replace(/ნ/g, "n");
    $term = $term.replace(/XYZ/g, "ნ");

    // J [00060]
    $term = $term.replace(/j/g, "XYZ");
    $term = $term.replace(/ჲ/g, "j");
    $term = $term.replace(/XYZ/g, "ჲ");

    // O [00070]
    $term = $term.replace(/o/g, "XYZ");
    $term = $term.replace(/ო/g, "o");
    $term = $term.replace(/XYZ/g, "ო");

    // P [00080]
    $term = $term.replace(/p/g, "XYZ");
    $term = $term.replace(/პ/g, "pʼ");
    $term = $term.replace(/XYZ/g, "პ");

    // Ʒ [00090]
    $term = $term.replace(/ʒ/g, "XYZ");
    $term = $term.replace(/ჟ/g, "ʒ");
    $term = $term.replace(/XYZ/g, "ჟ");

    // Ʒ [00100]
    $term = $term.replace(/r/g, "XYZ");
    $term = $term.replace(/რ/g, "r");
    $term = $term.replace(/XYZ/g, "რ");

    // S [00200]
    $term = $term.replace(/s/g, "XYZ");
    $term = $term.replace(/ს/g, "s");
    $term = $term.replace(/XYZ/g, "ს");

    // Tʼ [00300]
    $term = $term.replace(/tʼ/g, "XYZ");
    $term = $term.replace(/ტ/g, "tʼ");
    $term = $term.replace(/XYZ/g, "ტ");

    // Tʼ [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/w/g, "XYZ");
    $term = $term.replace(/ჳ/g, "w");
    $term = $term.replace(/XYZ/g, "ჳ");

    // U [00400]
    // The Georgian liqe me, say tʰat W / U / Y are the same.
    // Liqe I vriththën tʰat Ͷ [w] ϒ [u] Υ [y] are 500, and not 6 : Ϝ [v].
    $term = $term.replace(/u/g, "XYZ");
    $term = $term.replace(/უ/g, "u");
    $term = $term.replace(/XYZ/g, "უ");

    // U [00000]
    $term = $term.replace(/ə/g, "XYZ");
    $term = $term.replace(/ჷ/g, "ə");
    $term = $term.replace(/XYZ/g, "ჷ");

    // Pʰ [00500]
    $term = $term.replace(/pʰ/g, "XYZ");
    $term = $term.replace(/ფ/g, "pʰ");
    $term = $term.replace(/XYZ/g, "ფ");

    // Kʰ [00600]
    $term = $term.replace(/kʰ/g, "XYZ");
    $term = $term.replace(/ქ/g, "pʰ");
    $term = $term.replace(/XYZ/g, "ქ");

    // Ɣ [00700]
    $term = $term.replace(/ɣ/g, "XYZ");
    $term = $term.replace(/ღ/g, "ɣ");
    $term = $term.replace(/XYZ/g, "ღ");

    // Qʼ [00800]
    $term = $term.replace(/qʼ/g, "XYZ");
    $term = $term.replace(/ყ/g, "qʼ");
    $term = $term.replace(/XYZ/g, "ყ");

    // Qʼ [00001]
    $term = $term.replace(/ʔ/g, "XYZ");
    $term = $term.replace(/ჸ/g, "ʔ");
    $term = $term.replace(/XYZ/g, "ჸ");

    // Ʃ [00900]
    $term = $term.replace(/ʃ/g, "XYZ");
    $term = $term.replace(/შ/g, "ʃ");
    $term = $term.replace(/XYZ/g, "შ");

    // TSʰ [05000]
    $term = $term.replace(/tʃ/g, "XYZ");
    $term = $term.replace(/ჭ/g, "tʃ");
    $term = $term.replace(/XYZ/g, "ჭ");

    // TƩʰ [01000]
    $term = $term.replace(/tʃʰ/g, "XYZ");
    $term = $term.replace(/ჩ/g, "tʃʰ");
    $term = $term.replace(/XYZ/g, "ჩ");

    // TƩʰ [02000]
    $term = $term.replace(/tsʰ/g, "XYZ");
    $term = $term.replace(/ც/g, "tsʰ");
    $term = $term.replace(/XYZ/g, "ც");

    // TƩʰ [03000]
    $term = $term.replace(/dz/g, "XYZ");
    $term = $term.replace(/ძ/g, "dz");
    $term = $term.replace(/XYZ/g, "ძ");

    // TSʰ [04000]
    $term = $term.replace(/tsʼ/g, "XYZ");
    $term = $term.replace(/წ/g, "tsʼ");
    $term = $term.replace(/XYZ/g, "წ");

    // TSʰ [06000]
    $term = $term.replace(/χ/g, "XYZ");
    $term = $term.replace(/ხ/g, "χ");
    $term = $term.replace(/XYZ/g, "ხ");

    // Qʰ [07000]
    $term = $term.replace(/qʰ/g, "XYZ");
    $term = $term.replace(/ჴ/g, "qʰ");
    $term = $term.replace(/XYZ/g, "ჴ");

   // DƷ [08000]
    $term = $term.replace(/dʒ/g, "XYZ");
    $term = $term.replace(/ჯ/g, "dʒ");
    $term = $term.replace(/XYZ/g, "ჯ");

    // H [09000]
    $term = $term.replace(/h/g, "XYZ");
    $term = $term.replace(/ჰ/g, "h");
    $term = $term.replace(/XYZ/g, "ჰ");

    // Ô [10000]
    $term = $term.replace(/oː/g, "XYZ");
    $term = $term.replace(/ɔ/g, "XYZ");
    $term = $term.replace(/ჵ/g, "ɔ");
    $term = $term.replace(/XYZ/g, "ჵ");

    // F [00500] {wrong numerology based on the falsified Greek, with missing SˤAN (90) and Qoppa (100).
    // Laz dia‑lect
    $term = $term.replace(/f/g, "XYZ");
    $term = $term.replace(/ჶ/g, "f");
    $term = $term.replace(/XYZ/g, "ჶ");

    // G [?????]
    // Dagestanian dia‑lect
    $term = $term.replace(/ɢ/g, "XYZ");
    $term = $term.replace(/ჹ/g, "ɢ");
    $term = $term.replace(/XYZ/g, "ჹ");

    // ʕ [00070]
    // Bats dia‑lect
    $term = $term.replace(/ʕ/g, "XYZ");
    $term = $term.replace(/ჺ/g, "ɢ");
    $term = $term.replace(/XYZ/g, "ʕ");

    // ʕ [?????]
    // Bats dia‑lect
    $term = $term.replace(/̃/g, "XYZ");
    $term = $term.replace(/ჼ/g, "̃");
    $term = $term.replace(/XYZ/g, "ჼ");

    // Ə [00070]
    // Ossetian dia‑lect
    $term = $term.replace(/ə/g, "XYZ");
    $term = $term.replace(/ჽ/g, "ə");
    $term = $term.replace(/XYZ/g, "ჽ");

    //  [?????]
    // Abkhaz dia‑lect Hard Sign.
    $term = $term.replace(/̝/g, "XYZ");
    $term = $term.replace(/ჾ/g, "̝");
    $term = $term.replace(/XYZ/g, "ჾ");

    //  [?????]
    // Abkhaz dia‑lect Labial Sign.
    $term = $term.replace(/ʷ/g, "XYZ");
        $term = $term.replace(/ჿ/g, "ʷ");
    $term = $term.replace(/XYZ/g, "ჿ");

        // Punctuation
    $term = $term.replace(/---/g, "‑");
    $term = $term.replace(/:::/g, "‧⁠");

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
