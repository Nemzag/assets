
/*
 * Created with PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30) {https://github.com/Nemzag/}.
 * Date: 23/01/2021
 * Time: 21:33
 * Updated:
*/

"use strict";

//========================================================================================
// init constantes…
//========================================================================================

// const ? = document.getElementById("?");

//========================================================================================
// init évènements…
//========================================================================================

// document.getElementById("").addEventListener("", function());

//========================================================================================
// init variables…
//========================================================================================

/*
Es‑tern‑al fichier / file qui / uho use :
- ϰinput
- ϰdivResult
*/

$gegnisht = document.getElementById("languages");


//========================================================================================
// Outils
//========================================================================================

//========================================================================================
// outils divers
//========================================================================================

/**
 * Created by PhpStorm.
 * User: nemzag
 * Date: 2018-04-06
 * Time: 10:44
 */

/**
 * Created by PhpStorm.
 * User: nemzag
 * Date: 2018-04-06
 * Time: 09:27
 */

/* LATIN SCRIPT FUNCTION */

function latinScriptTransCodation (string $gegnisht) : string {

    if(mb_substr($gegnisht, -2) == "ËË") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

/* GREEK SCRIPT FUNCTION */

function greekTransCodation (string $gegnisht) : string {
    $gegnisht = str_replace ("DƷ", "ϫ", $gegnisht);

    $gegnisht = str_replace ("A", "α", $gegnisht);
    $gegnisht = str_replace ("B", "β", $gegnisht);
    $gegnisht = str_replace ("G", "γ", $gegnisht);
    $gegnisht = str_replace ("D", "δ", $gegnisht);
    $gegnisht = str_replace ("E", "ε", $gegnisht);
    $gegnisht = str_replace ("V", "ϝ", $gegnisht);
    $gegnisht = str_replace ("Z", "ζ", $gegnisht);
    $gegnisht = str_replace ("Ê", "η", $gegnisht);
    $gegnisht = str_replace ("Þ", "θ", $gegnisht);
    $gegnisht = str_replace ("I", "ι", $gegnisht);
    $gegnisht = str_replace ("J", "ϳ", $gegnisht);
    $gegnisht = str_replace ("K", "κ", $gegnisht);
    $gegnisht = str_replace ("L", "λ", $gegnisht);
    $gegnisht = str_replace ("M", "μ", $gegnisht);
    $gegnisht = str_replace ("N", "ν", $gegnisht);
    $gegnisht = str_replace ("S", "σ", $gegnisht);
    $gegnisht = str_replace ("O", "ο", $gegnisht);
    $gegnisht = str_replace ("P", "π", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "ϻ", $gegnisht);
    $gegnisht = str_replace ("Q", "ϙ", $gegnisht);
    $gegnisht = str_replace ("R", "ρ", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ϸ", $gegnisht);
    $gegnisht = str_replace ("T", "τ", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ϯ", $gegnisht);
    $gegnisht = str_replace ("Θ", "θ", $gegnisht);
    $gegnisht = str_replace ("Y", "υ", $gegnisht);
    $gegnisht = str_replace ("U", "ϒ", $gegnisht);
    $gegnisht = str_replace ("W", "ͷ", $gegnisht);
    $gegnisht = str_replace ("ɸ", "φ", $gegnisht);
    $gegnisht = str_replace ("F", "φ", $gegnisht);
    $gegnisht = str_replace ("X", "χ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ϡ", $gegnisht);
    $gegnisht = str_replace ("Ô", "ω", $gegnisht);
    $gegnisht = str_replace ("H", "ϩ", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ͱ", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "γ΄", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ζ΄", $gegnisht);
    $gegnisht = str_replace ("Ð", "δ΄", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ϙ΄", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ϙ΄", $gegnisht);
    $gegnisht = str_replace ("Â", "α", $gegnisht);
    $gegnisht = str_replace ("Ä", "α", $gegnisht);
    $gegnisht = str_replace ("Ö", "Ø", $gegnisht);
    $gegnisht = str_replace ("Œ", "οε", $gegnisht);
    $gegnisht = str_replace ("Ã", "α", $gegnisht);
    $gegnisht = str_replace ("Ë", "Ə", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "η", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "ι", $gegnisht);
    $gegnisht = str_replace ("Õ", "ω", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ϒ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "υ", $gegnisht);
    $gegnisht = str_replace ("C", "ϲ", $gegnisht);

    /*
     * γάμμα
     * indecl, third letter in Gr. alphabet; as Numeral γ᾽ = three, third: but ,γ ῀ 3000.
     * I. γ is the medial palatal mute, between tenuis κ and asp. χ. Before the palatals γ, κ, χ and before ξ, pronounced like n in ng, as in ἄγγος, ἄγκος, ἄγχι, ἄγξω: before the same letters ἐν- in compos. becomes ἐγ-.
     */

    return $gegnisht;
}


function greekInversePiPhiTransCodation (string $gegnisht) : string {
    $gegnisht = str_replace ("π", "451", $gegnisht);
    $gegnisht = str_replace ("φ", "π", $gegnisht);
    $gegnisht = str_replace ("451", "φ", $gegnisht);

    return $gegnisht;
}


function greekInverseTauThetaTransCodation (string $gegnisht) : string {
    $gegnisht = str_replace ("τ", "327", $gegnisht);
    $gegnisht = str_replace ("θ", "τ", $gegnisht);
    $gegnisht = str_replace ("327", "θ", $gegnisht);

    return $gegnisht;
}

/* GREEK DUPLO REMOVING */
function greekDuploRemove (string $gegnisht) : string {
    $gegnisht = str_replace ("πτπτ", "πτ", $gegnisht);
    $gegnisht = str_replace ("μμμμ", "μμ", $gegnisht);
    $gegnisht = str_replace ("ππππ", "ππ", $gegnisht);
    $gegnisht = str_replace ("σσσσ", "σσ", $gegnisht);

    return $gegnisht;
}

/* GREEK LIGATURE MODIFICATION */

function greekLigatureTranscodation (string $gegnisht) : string {
    $gegnisht = str_replace ("πσ", "ψ", $gegnisht);
    $gegnisht = str_replace ("φσ", "ψ", $gegnisht);
    $gegnisht = str_replace ("βσ", "ψ", $gegnisht);
    /* ψ is a double Consonant, compounded of the labial π or φ with ς, ῀ πς, φς */

    $gegnisht = str_replace ("γσ", "ξ", $gegnisht);
    $gegnisht = str_replace ("κσ", "ξ", $gegnisht);
    $gegnisht = str_replace ("ϙσ", "ξ", $gegnisht);
    /* 1.ξ in aeolic and attic appears as an aspirated form of κ, cf. ξυνός with κοινός, ξύν with cum;— or of ς, cf. ξύν with σύν, ξέστης with Lat. sextarius; and so in doric fut. of Verbs in -ζω, κομίξω κλᾳξῶ παιξῶ for κομίσω κλῄσω παίσω. */

    return $gegnisht;
}

/* GREEK SUFFIX MODIFICATION */

function greekEndToOsTranscodation ($gegnisht) : string
{
    if (mb_substr($gegnisht, -2) == "ƏƏ") {
        $gegnisht = mb_substr($gegnisht, 0, -2) . "οσ";
    }
    if (mb_substr($gegnisht, -1) == "Ə") {
        $gegnisht = mb_substr($gegnisht, 0, -1) . "οσ";
    }
    return $gegnisht;
}

function greekEndToUsTranscodation($gegnisht) : string {
    if(mb_substr($gegnisht, -2) == "ƏƏ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΣ";
    }
    if(mb_substr($gegnisht, -1) == "Ə") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ϒΣ";
    }

    return $gegnisht;
}

function greekEndSuffixModificationTranscodation ($gegnisht) : string {

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -4) == "ΩͿΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -3) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -4) == "ΩͿϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -3) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -6) == "ΩͿƏ‑ΣƏ") {
            $gegnisht = mb_substr($gegnisht, 0, -5) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΤΩΡΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΤΩΝΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 12) {
        if(mb_substr(mb_strtoupper($gegnisht), -6) == "ΤΙΩΝΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΤΩΡϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΤΩΝϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 12) {
        if(mb_substr(mb_strtoupper($gegnisht), -6) == "ΤΙΩΝϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -6) == "ΘΩΡƏΣƏ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }
    if((strlen($gegnisht)) > 12) {
        if(mb_substr(mb_strtoupper($gegnisht), -7) == "ΘΙΩΝƏΣƏ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΘΩΡϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΘΩΝϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 12) {
        if(mb_substr(mb_strtoupper($gegnisht), -6) == "ΘΙΩΝϒΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΘΩΡΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 10) {
        if(mb_substr(mb_strtoupper($gegnisht), -5) == "ΘΩΝΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    if((strlen($gegnisht)) > 12) {
        if (mb_substr(mb_strtoupper($gegnisht), -6) == "ΘΙΩΝΟΣ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    return $gegnisht;
}

/* GREEK DIALECT SCRIPT FUNCTION */

function greekCoenicTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = str_replace ("ϒ", "ου", $gegnisht);

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    $gegnisht = str_replace ("πσ", "ψ", $gegnisht);
    $gegnisht = str_replace ("φσ", "ψ", $gegnisht);
    $gegnisht = str_replace ("βσ", "ψ", $gegnisht);
    /* ψ is a double Consonant, compounded of the labial π or φ with ς, ῀ πς, φς */

    $gegnisht = str_replace ("γσ", "ξ", $gegnisht);
    $gegnisht = str_replace ("κσ", "ξ", $gegnisht);
    $gegnisht = str_replace ("ϙσ", "ξ", $gegnisht);
    /* 1.ξ in aeolic and attic appears as an aspirated form of κ, cf. ξυνός with κοινός, ξύν with cum;— or of ς, cf. ξύν with σύν, ξέστης with Lat. sextarius; and so in doric fut. of Verbs in -ζω, κομίξω κλᾳξῶ παιξῶ for κομίσω κλῄσω παίσω. */

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

function greekAtticTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = str_replace ("ϒ", "ου", $gegnisht);

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */

    $gegnisht = str_replace ("λ", "467", $gegnisht);
    $gegnisht = str_replace ("ρ", "λ", $gegnisht);
    $gegnisht = str_replace ("467", "ρ", $gegnisht);
    /* 1.attic λ is sometimes represented by π, as κλίβανος κρίβανος, γλώσσαλγος γλώσσαργος, ναύκραρος ναύκληρος, ἀλκ-ή ἀρκ-εῖν: so, ὁλᾷς Θέωλος κόλαξ were lisping pronunc. for ὁρᾷς Θέωρος κόραξ, Ar. */

    $gegnisht = str_replace ("ν", "λ", $gegnisht);
    /* λάμβδα */
    /* 2.doric λ becomes ν, as, ἦνθον φίντατος for ἦλθον φίλτατος; whereas attic λ sometimes replaces ν, as, λίτρον πλεύμων for νίτρον πνεύμων. */

    $gegnisht = str_replace ("μ", "ν", $gegnisht);
    /* μῦ
     * * 2. attic and doric into ν, as νιν for μιν; so Lat. ne, num = μή, μῶν.
     * νῦ
     * 2. attic and doric for μ, v. Μ μ. II. 2.
     */

    $gegnisht = str_replace ("ϒ", "ου", $gegnisht);

    $gegnisht = str_replace ("σσ", "ττ", $gegnisht);
    /* 2.in new attic, as in doric and Boeot., ττ for σς, mostly in Verbs, πράττω for πράσσω, etc. */

    $gegnisht = str_replace ("σδ", "ζ", $gegnisht);
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω reversely, in attic, σδ becomes ζ, Ἀθήναζε θύραζε for Ἀθήνασδε θύρασδε. */

    $gegnisht = str_replace ("ρη", "ρα", $gegnisht);
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    $gegnisht = str_replace ("ρσ", "ρρ", $gegnisht);
    /* 2.in attic, ρρ replaced the ionic and old attic ρς, as ἄρρην, θάρρος for ἄρσην, θάρσος. */

    $gegnisht = greekLigatureTranscodation ($gegnisht);

    $gegnisht = str_replace ("θθ", "τθ", $gegnisht);
    /* θῆτα
     * 3. when θ was repeated in two foll. syllables, the former became τ, as Ἀτθίς.*/

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekNeocoenicTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);

    $gegnisht = greekInversePiPhiTransCodation($gegnisht);

    if(mb_substr($gegnisht, -2) == "ƏƏ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."Ə‑ΣƏ";
    }
    if(mb_substr($gegnisht, -1) == "Ə") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."Ə‑ΣƏ";
    }

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */

    if(mb_substr($gegnisht, -2) == "οξ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΣ";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekDoricTransCodation (string $gegnisht) : string
{
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);
    /* 2.aeolic and doric into τ, as αὖτις ἐντεῦθεν for αὖθις ἐντεῦθεν. */

    $gegnisht = greekInversePiPhiTransCodation($gegnisht);
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    $gegnisht = greekEndToUsTranscodation($gegnisht);
    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */
    if (mb_substr($gegnisht, 0, 1) == "β") {
        $gegnisht = mb_substr($gegnisht, 0, 0)."γ".mb_substr($gegnisht, 1);
    }
    /* 1. for γ, as βλήχων γληχών, βλέφαρον doric γλέφαρον, βουνός γουνός: βεμβράς for μεμβράς, βροτός for μορτός (mortalis). */

    $gegnisht = str_replace ("ζ", "000", $gegnisht);

    $gegnisht = str_replace ("β", "001", $gegnisht);
    /* 1.aeolic into β, as σάμβαλον for σάνδαλον:— reversely, ὀβελός becomes ὀδελός in doric */

    $gegnisht = str_replace ("σομαι", "ξομαι", $gegnisht);
    $gegnisht = str_replace ("ισις", "ιξις", $gegnisht);
    /* 5. doric into ξ, in fut. and aor1 of Verbs, with their deriv. Nouns, as ἐργάξομαι χείριξις for ἐργάσομαι χείρισις:—so in ionic, διξός τριξός for δισσός τρισσός; and in old attic, the prep. σύν, with all its Compds., was written ξύν. */

    $gegnisht = str_replace ("σ", "τ", $gegnisht);
    /* σύ -> τύ (tú) – Doric */

    $gegnisht = str_replace ("λ", "003", $gegnisht);
    $gegnisht = str_replace ("ν", "λ", $gegnisht);
    $gegnisht = str_replace ("003", "ν", $gegnisht);
    /* λάμβδα */
    /* 2.doric λ becomes ν, as, ἦνθον φίντατος for ἦλθον φίλτατος; whereas attic λ sometimes replaces ν, as, λίτρον πλεύμων for νίτρον πνεύμων. */
    /* νῦ
     * 1. doric, ν represents λ, v. Λ λ. 2. */
    /*
    $gegnisht = str_replace ("τ", "φ", $gegnisht);
    */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    $gegnisht = str_replace ("θ", "002", $gegnisht);
    $gegnisht = str_replace ("κ", "τ", $gegnisht);
    $gegnisht = str_replace ("002", "ϙ", $gegnisht);
    /* 2.doric κ is interchanged with τ, as ὅκα ἄλλοκα τῆνος for ὅτε ἄλλοτε κεῖνος. */

    /* 1.doric for θ, as ὄρνιχος for ὄρνιθος. */

    $gegnisht = str_replace ("δ", "ζ", $gegnisht);
    /* δ 2.aeolic or doric into ζ, or ζ into δ and σδ, v. ζῆτα II. 2 */
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω */

    $gegnisht = str_replace ("001", "δ", $gegnisht);
    /* 1.aeolic into β, as σάμβαλον for σάνδαλον:— reversely, ὀβελός becomes ὀδελός in doric */

    $gegnisht = str_replace ("000", "σδ", $gegnisht);
    /* But ς often disappears in aeolic, where ζά ῀ δια, see ζά, ζα-so in aeolic and doric, as we have Δεύς Δάν for Ζεύς Ζάν, δορκάς ῀ ζορκάς:—so also ἀρίζηλος for ἀρίδηλος; ἀλαπαδνός from ἀλαπάζω, παιδνός from παίζω:—doric, in the middle of words, it becomes δδ, as θερίδδω for -ίζω, μάδδα for μᾶζα. */

    $gegnisht = str_replace ("ει", "Η", $gegnisht);
    /* ἦτα
     * 3. doric and aeolic for ει, as τῆνος, κῆνος for κεῖνος. */

    $gegnisht = str_replace ("ϸ", "σ", $gegnisht);

    if(mb_substr($gegnisht, 1, 1) == "ε") {
        $gegnisht = mb_substr($gegnisht, 0, 1)."α".mb_substr($gegnisht, 2);
    }

    /*
    if(mb_substr($gegnisht, 1, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 1)."α".mb_substr($gegnisht, 2);
    }
    if(mb_substr($gegnisht, 2, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 2)."α".mb_substr($gegnisht, 3);
    }
    if(mb_substr($gegnisht, 3, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 3)."α".mb_substr($gegnisht, 4);
    }
    if(mb_substr($gegnisht, 4, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 4)."α".mb_substr($gegnisht, 5);
    }
    if(mb_substr($gegnisht, 5, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 5)."α".mb_substr($gegnisht, 6);
    }
    if(mb_substr($gegnisht, 6, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 6)."α".mb_substr($gegnisht, 7);
    }
    if(mb_substr($gegnisht, 7, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 7)."α".mb_substr($gegnisht, 8);
    }
    if(mb_substr($gegnisht, 8, 1) == "η") {
        $gegnisht = mb_substr($gegnisht, 0, 8)."α".mb_substr($gegnisht, 9);
    }
    */
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    /* GREEK SUFFIX MODIFICATION */
    if(mb_substr($gegnisht, -2) == "οξ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΣ";
    }

    if(mb_substr($gegnisht, -2) == "οτ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."οσ";
    }

    if(mb_substr($gegnisht, -2) == "ϒτ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΣ";
    }

    if(mb_substr($gegnisht, -1) == "ε") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."α";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekIonicTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    /*
    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);
    */
    /* 3.in ionic the tenius τ for its aspirate θ, as αὖτις for αὖθις; so, the tenuis remains unchanged before an aspirate, as κατεῖλον, κατ᾽ ἡσυχίην. */

    /*
    $gegnisht = greekInversePiPhiTransCodation($gegnisht);
    */
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    $gegnisht = greekEndToOsTranscodation($gegnisht);
    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */
    $gegnisht = str_replace ("α", "η", $gegnisht);
    /*  */

    $gegnisht = str_replace ("σσ", "ξ", $gegnisht);
    /* 2. interchanged with σς, ionic διξός, τριξός for δισσός, τρισσός. */

    $gegnisht = str_replace ("κ", "001", $gegnisht);

    $gegnisht = str_replace ("π", "κ", $gegnisht);
    /* —it represents π, as κου κοτε κως, etc., for που ποτε πως, etc.; so, ἴσκε ῀ ἔσπεν, ἵππος Lat. equus. */
    /* in ionic Prose, π becomes κ in relatives and interrogatives, κῶς ὅκως ὁκοῖος ὁκόσος for πῶς ὅπως ὁποῖος ὁπόσος. */

    $gegnisht = str_replace ("χ", "κ", $gegnisht);
    /* 1. ionic κ replaces χ, as κιθών δέκομαι κύθρη for χιτών δέχομαι χύτρα:—it represents π, as κου κοτε κως, etc., for που ποτε πως, etc.; so, ἴσκε ῀ ἔσπεν, ἵππος Lat. equus. */
    /* 2.ionic represented by κ, as δέκομαι κιθών for δέχομαι χιτών. */

    $gegnisht = str_replace ("φ", "π", $gegnisht);
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    $gegnisht = str_replace ("001", "φ", $gegnisht);

    $gegnisht = str_replace ("σμ", "δμ", $gegnisht);
    /* 1. aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    $gegnisht = str_replace ("θ", "371", $gegnisht); /* αὖθις -> αὖτις */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    $gegnisht = str_replace ("τ", "θ", $gegnisht); /* χιτών χύτρα -> κιθών κύθρη */
    /* 3.in ionic the tenius τ for its aspirate θ, as αὖτις for αὖθις; so, the tenuis remains unchanged before an aspirate, as κατεῖλον, κατ᾽ ἡσυχίην. */

    $gegnisht = str_replace ("371", "τ", $gegnisht); /* αὖθις -> αὖτις */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    /* TERM MUTATION */
    if(strlen($gegnisht) < 9) {
        $gegnisht = str_replace ("κοθε", "κοτε", $gegnisht);
    }

    if(mb_substr($gegnisht, -2) == "οδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ΟΣ";
    }
    if(mb_substr($gegnisht, -2) == "υδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ΟΣ";
    }
    if(mb_substr($gegnisht, -2) == "ϒδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ΟΣ";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekAeolicTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);
    /* 2.aeolic and doric into τ, as αὖτις ἐντεῦθεν for αὖθις ἐντεῦθεν. */

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /*  DIALECTAL MUTATION */

    $gegnisht = str_replace ("πσ", "ψ", $gegnisht);

    $gegnisht = str_replace ("τ", "675", $gegnisht);
    /* θ is sometimes represented by φ, as θλάω φλάω; so in Lat. θήρ (aeolic φήρ) fera; θύρα fores; */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    $gegnisht = str_replace ("σμ", "841", $gegnisht);
    /* 1.aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    $gegnisht = str_replace ("νδ", "999", $gegnisht);
    /* δέλτα1
     * 1. aeolic into β, as σάμβαλον for σάνδαλον. */


    $gegnisht = str_replace ("ζ", "δ", $gegnisht);
    /* δ 2.aeolic or doric into ζ, or ζ into δ and σδ, v. ζῆτα II. 2 */
    /* But ς often disappears in aeolic, where ζά ῀ δια, see ζά, ζα-so in aeolic and doric, as we have Δεύς Δάν for Ζεύς Ζάν, δορκάς ῀ ζορκάς:—so also ἀρίζηλος for ἀρίδηλος; ἀλαπαδνός from ἀλαπάζω, παιδνός from παίζω:—doric, in the middle of words, it becomes δδ, as θερίδδω for -ίζω, μάδδα for μᾶζα. */

    $gegnisht = str_replace ("δ", "001", $gegnisht);

    $gegnisht = str_replace ("μ", "222", $gegnisht);
    $gegnisht = str_replace ("π", "μ", $gegnisht);
    /* πατέω -> μάτημῐ */
    $gegnisht = str_replace ("675", "φ", $gegnisht);
    /* θ is sometimes represented by φ, as θλάω φλάω; so in Lat. θήρ (aeolic φήρ) fera; θύρα fores; */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */
    $gegnisht = str_replace ("222", "π", $gegnisht);
    /* 1. aeolic and Lacon. into π, as πεδά for μετά. */
    /* 4. in aeolic, π is used for μ, ὄππα for ὄμμα, πεδά for μετά. */

    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    $gegnisht = str_replace ("μ", "μμ", $gegnisht);
    /* 3. μ is doubled, b.aeolic, as ἄμμες ὔμμες ἐμμί, for ἡμεῖς ὑμεῖς εἰμί. */

    $gegnisht = greekDuploRemove($gegnisht);

    $gegnisht = str_replace ("999", "μβ", $gegnisht);
    /* δέλτα1
     * 1. aeolic into β, as σάμβαλον for σάνδαλον. */

    $gegnisht = str_replace ("841", "δμ", $gegnisht);
    /* 1.aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    $gegnisht = str_replace ("σ", "τ", $gegnisht); /* σύ -> τύ (tú) – Doric */
    /* 1. aeolic and doric, τ for ς, as τύ (Lat. tu, thou) for σύ; τοί τέ τῦκον φατί for σοί σέ σῦκον φησί. */

    $gegnisht = str_replace ("001", "σδ", $gegnisht);
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω */
    $gegnisht = str_replace ("σδ΄", "ζ΄", $gegnisht);

    $gegnisht = str_replace ("υ", "ι", $gegnisht);
    /* 1.doric, ι for υ in the 3rd pl. and part. pres., as φιλέοισι ἐοῖσα for φιλέουσι, etc.; so also Μοῖσα Ἀρέθοισα for Μοῦσα, etc.:—it was added to α in some Adjs., and in the aor1 part., as μέλαις τάλαις ῥίψαις for μέλας, etc.; and in the acc. pl. fem. of 1st decl., as ταῖς νύμφαις for τὰς νύμφας. */

    $gegnisht = str_replace("α", "ο", $gegnisht);
    /* ὂμικρόν
     * Dialect. changes: aeolic for α, as στροτός for στρατός; */

    /*
    $gegnisht = str_replace("η", "α", $gegnisht);
    */
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    $gegnisht = str_replace ("ει", "Η", $gegnisht);
    /* ἦτα
     * 3. doric and aeolic for ει, as τῆνος, κῆνος for κεῖνος. */

    /*
    if ((strlen($gegnisht)) < 7) {
        if (mb_substr(mb_strtoupper($gegnisht), -3) == "ΦΑΡ") {
            $gegnisht = mb_substr($gegnisht, 0, -3) . "φηρ";
        }
    }
    */

    $gegnisht = str_replace ("ου", "οι", $gegnisht);
    /* 2. aeolic, the diphth. ου became οι, Μοῖσα for Μοῦσα, λέγοισα for λέγουσα. */

    $gegnisht = str_replace ("νθ", "μπ", $gegnisht);
    /* πῖ
     * 5. in aeolic and doric, π for τ, πέτορες for τέσσαρες, πέμπε for πέντε. */

    $gegnisht = str_replace ("θεσ", "πε", $gegnisht);
    /* πῖ
     * 5. in aeolic and doric, π for τ, πέτορες for τέσσαρες, πέμπε for πέντε. */

    /* $gegnisht = str_replace ("θ", "τ", $gegnisht); */

    /* GREEK START MODIFICATION */

    if(mb_substr($gegnisht, 0, 2) == "μμ") {
        $gegnisht = mb_substr($gegnisht, 0, 1).mb_substr($gegnisht, 2);
    }

    /* GREEK SUFFIX MODIFICATION */
    if(mb_substr($gegnisht, -2) == "οδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."οσ";
    }
    if(mb_substr($gegnisht, -2) == "υδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."υσ";
    }
    if(mb_substr($gegnisht, -2) == "ϒδ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒσ";
    }

    if(mb_substr($gegnisht, -2) == "ϒτ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΣ";
    }

    if(mb_substr($gegnisht, -2) == "οτ") {
        if(mb_substr($gegnisht, -1) == "τ") {
            $gegnisht = mb_substr($gegnisht, 0, -1)."Ρ";
        }
    }
    /* ῥῶ
     * 1.aeolic, at the end of words ς passed into ρ, as οὗτορ, ἵππορ for οὗτος, ἵππος; cf. Lat. arbor arbos, honor honos. */

    /* TERM MUTATION */
    if(strlen($gegnisht) < 9) {
        $gegnisht = str_replace ("πετο", "πεδα", $gegnisht);
        /* ΜΕΤΑ -> ΠΕΔΑ */
    }

    /* GREEK SUFFIX MODIFICATION */

    if(mb_substr($gegnisht, -2) == "ετ") {
        if(mb_substr($gegnisht, -1) == "τ") {
            $gegnisht = mb_substr($gegnisht, 0, -1)."σ";
        }
    }

    if(mb_substr($gegnisht, -2) == "οσ") {
        if(mb_substr($gegnisht, -1) == "σ") {
            $gegnisht = mb_substr($gegnisht, 0, -1)."Ρ";
        }
    }

    if(mb_substr($gegnisht, -1) == "ο") {
        if(mb_substr($gegnisht, -1) == "ο") {
            $gegnisht = mb_substr($gegnisht, 0, -1)."α";
        }
    }

    /* GREEK SUFFIX MODIFICATION */
    if(mb_substr($gegnisht, -1) == "ε") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."α";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekLaconicTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */

    $gegnisht = str_replace ("θε", "σι", $gegnisht); /* θεός -> σιός */
    /* 2. Boeot. and Lacon. as σιός, σεῖος, for θεός, θεῖος. */

    $gegnisht = str_replace ("θ", "σ", $gegnisht);
    /* 1.Lacon., into ς, as σάλασσα σεῖος σιός Ἀσάνα παρσένος for θάλασσα θεῖος θεός Ἀθάνα παρθένος. */

    $gegnisht = str_replace ("μ", "π", $gegnisht);
    $gegnisht = str_replace ("ϝ", "β", $gegnisht);
    /* εἴκοσι -> ϝίκᾰτῐ (D.)-> βείκᾰτῐ (L.) */
    /* β , βῆτα
     * II. to represent ϝ, freq. in Hsch., esp. in Lacon. words, cf. βείκατι, etc. */


    $gegnisht = str_replace ("δ", "111", $gegnisht);
    $gegnisht = str_replace ("ζ", "δ", $gegnisht);
    $gegnisht = str_replace ("111", "ζ", $gegnisht);

    /* GREEK SUFFIX MODIFICATION */

    if(mb_substr($gegnisht, -2) == "οσ") {
        if(mb_substr($gegnisht, -2) == "οσ") {
            $gegnisht = mb_substr($gegnisht, 0, -2)."ϒΡ";
        }
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekDelphicTransCodation (string $gegnisht) : string {

    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekEndToUsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */
    $gegnisht = str_replace ("β", "δ", $gegnisht); /* βούλομαι -> δείλομαι */
    $gegnisht = str_replace ("π", "β", $gegnisht); /* πατέω -> βᾰτέω */


    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekBoeoticTransCodation (string $gegnisht) : string {

    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekInverseTauThetaTransCodation($gegnisht); /* TEST */

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */
    $gegnisht = str_replace ("ω", "υ", $gegnisht); /* βούλομαι -> δείλομαι */
    /* 4.Boeot. υ_ for ω, as χελύνη for χελώνη. */

    $gegnisht = str_replace ("θε", "θι", $gegnisht); /* θεός -> θιός */
    /* 2. Boeot. and Lacon. as σιός, σεῖος, for θεός, θεῖος. */

    $gegnisht = str_replace ("σ", "τ", $gegnisht); /* σῦκον -> τῦκον (tûkon) – Boeotian */

    /* SUFFIX MUTATION */
    if(mb_substr($gegnisht, -1) == "υ") {
        if(mb_substr($gegnisht, -1) == "υ") {
            $gegnisht = mb_substr($gegnisht, 0, -1)."ω";
        }
    }

    /* SUFFIX MUTATION */
    if(strlen($gegnisht) > 7) {
        if (mb_substr($gegnisht, -2) == "οτ") {
            $gegnisht = mb_substr($gegnisht, 0, -1) . "σ";
        }
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

function greekMacedonianTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekEndToUsTranscodation($gegnisht);
    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    $gegnisht = str_replace ("θ", "δ", $gegnisht);
    /* ἀδραία , Maced. for αἰθρία
     * δάνος (B), [α^], ὁ, Maced. for θάνατος
     * δαλάγχαν: θάλασσαν (Maced.) */

    $gegnisht = str_replace ("φ", "β", $gegnisht);
    /* βαλακρός , Maced. A.= φαλ-, Plu.2.292e.
     * Βερενίκη is Maced. for Φερενίκη.）*/


    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

function greekPoeticTransCodation (string $gegnisht) : string {
    $gegnisht = greekTransCodation($gegnisht);

    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);
    /*
    $gegnisht = greekInversePiPhiTransCodation($gegnisht);
    */

    $gegnisht = greekEndToUsTranscodation($gegnisht);
    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    /* DIALECTAL MUTATION */
    /*
     * $gegnisht = str_replace ("α", "η", $gegnisht);
     * $gegnisht = str_replace ("δ", "123", $gegnisht);
     * $gegnisht = str_replace ("ζ", "δ", $gegnisht);
     * $gegnisht = str_replace ("123", "ζ", $gegnisht);
     */

    $gegnisht = str_replace ("μ", "μμ", $gegnisht);
    /* 3. μ is doubled, a.poet. in compds., as ἄμμορος, φιλομμειδής; and after the augm., as ἔλλαβον. */

    $gegnisht = str_replace ("σ", "σσ", $gegnisht);
    /* 3. in aeolic and doric, and in Poets, ς was often doubled, as ὅσσος μέσσος ὀπίσσω for ὅσος μέσος ὀπίσω, and in fut. and aor. 1 forms, as δαμάσσω ὀλέσσω, etc. for δαμάσω ὀλέσω, etc. */

    $gegnisht = str_replace ("π", "πτ", $gegnisht);
    /* πῖ
     * 8. in Poets, τ is inserted after π, as in πτόλις, πτόλεμος for πόλις, πόλεμος. */

    $gegnisht = str_replace ("αρ", "ρα", $gegnisht);
    /* ῥῶ
     * 3.in some words ρ is transposed, as κάρτος epic for κράτος, ἀταρπός for ἀτραπός, κραδίη for καρδία:—mostly in Poets. */

    $gegnisht = greekDuploRemove ($gegnisht);

    if(mb_substr($gegnisht, -2) == "σσ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."σ";
    }

    /* GREEK START MODIFICATION */
    if(mb_substr($gegnisht, 0, 2) == "μμ") {
        $gegnisht = mb_substr($gegnisht, 0, 1).mb_substr($gegnisht, 2);
    }

    /* GREEK START MODIFICATION */
    if(mb_substr($gegnisht, 0, 2) == "σσ") {
        $gegnisht = mb_substr($gegnisht, 0, 1).mb_substr($gegnisht, 2);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function greekEpicTransCodation (string $gegnisht) : string
{
    $gegnisht = greekTransCodation($gegnisht);

    /*
    $gegnisht = greekInverseTauThetaTransCodation($gegnisht);
    */

    $gegnisht = greekEndToOsTranscodation($gegnisht);

    $gegnisht = greekEndSuffixModificationTranscodation($gegnisht);

    $gegnisht = str_replace ("θ", "σ", $gegnisht);
    /* εἴκοσι -> ϝίκᾰτῐ (D.) -> βείκᾰτῐ (L.) -> ἐείκοσῐ (E.) */

    /* DUPLO */
    $gegnisht = str_replace ("π", "ππ", $gegnisht);
    /* 7.in aeolic and epic Poetry, π is often doubled in relatives, as ὅππη ὅππως ὁπποῖος for ὅπη, etc. */

    $gegnisht = str_replace ("λ", "λλ", $gegnisht);
    /*  λάμβδα
     * 4. epic Poets double λ, metri grat., esp. after the augment, as, ἔλλαβε ἐλλιτάνευε; and in compds., as in τρίλλιστος:—and Homer omits λ, where two come together, metri grat., as Ἀχιλεύς. */

    $gegnisht = str_replace ("ρα", "αρ", $gegnisht);
    /* ῥῶ
     * 3.in some words ρ is transposed, as κάρτος epic for κράτος, ἀταρπός for ἀτραπός, κραδίη for καρδία:—mostly in Poets. */

    /* GREEK START MODIFICATION */

    if(mb_substr($gegnisht, 0, 2) == "λλ") {
        $gegnisht = mb_substr($gegnisht, 0, 1).mb_substr($gegnisht, 2);
    }

    if(mb_substr($gegnisht, 0, 2) == "ππ") {
        $gegnisht = mb_substr($gegnisht, 0, 1).mb_substr($gegnisht, 2);
    }

    /* GREEK DUPLO REMOVE */

    $gegnisht = greekDuploRemove($gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

function CopticTransCodation (string $gegnisht) : string {
    $gegnisht = str_replace ("DƷ", "Ϫ", $gegnisht);
    $gegnisht = str_replace ("A", "Ⲁ", $gegnisht);
    $gegnisht = str_replace ("B", "Ⲃ", $gegnisht);
    $gegnisht = str_replace ("G", "Ⲅ", $gegnisht);
    $gegnisht = str_replace ("D", "Ⲇ", $gegnisht);
    $gegnisht = str_replace ("E", "Ⲉ", $gegnisht);
    $gegnisht = str_replace ("V", "ϝ", $gegnisht);
    $gegnisht = str_replace ("Z", "Ⲍ", $gegnisht);
    $gegnisht = str_replace ("Ê", "Ⲏ", $gegnisht);
    $gegnisht = str_replace ("Þ", "Ⲑ", $gegnisht);
    $gegnisht = str_replace ("I", "Ⲓ", $gegnisht);
    $gegnisht = str_replace ("J", "ϳ", $gegnisht);
    $gegnisht = str_replace ("Kʰ", "Ⲭ", $gegnisht);
    $gegnisht = str_replace ("K", "Ⲕ", $gegnisht);
    $gegnisht = str_replace ("L", "Ⲗ", $gegnisht);
    $gegnisht = str_replace ("M", "Ⲙ", $gegnisht);
    $gegnisht = str_replace ("N", "Ⲛ", $gegnisht);
    $gegnisht = str_replace ("S", "Ⲥ", $gegnisht);
    $gegnisht = str_replace ("O", "Ⲟ", $gegnisht);
    $gegnisht = str_replace ("P", "Ⲡ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "ϻ", $gegnisht);
    $gegnisht = str_replace ("Q", "ϙ", $gegnisht);
    $gegnisht = str_replace ("R", "Ⲣ", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "Ϣ", $gegnisht);
    $gegnisht = str_replace ("T", "Ⲧ", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "Ϯ", $gegnisht);
    $gegnisht = str_replace ("Θ", "Ⲑ", $gegnisht);
    $gegnisht = str_replace ("Y", "Ⲩ", $gegnisht);
    $gegnisht = str_replace ("U", "ⲞⲨ", $gegnisht);
    $gegnisht = str_replace ("W", "ͷ", $gegnisht);
    $gegnisht = str_replace ("ɸ", "Ⲫ", $gegnisht);
    $gegnisht = str_replace ("F", "Ϥ", $gegnisht);
    $gegnisht = str_replace ("X", "Ϧ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "Ⳁ", $gegnisht);
    $gegnisht = str_replace ("Ô", "Ⲱ", $gegnisht);
    $gegnisht = str_replace ("H", "Ϩ", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ͱ", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "", $gegnisht);
    $gegnisht = str_replace ("Ð", "", $gegnisht);
    $gegnisht = str_replace ("ɕ", "", $gegnisht);
    $gegnisht = str_replace ("ɕ", "", $gegnisht);
    $gegnisht = str_replace ("Â", "Ⲁ", $gegnisht);
    $gegnisht = str_replace ("Ä", "Ⲁ", $gegnisht);
    $gegnisht = str_replace ("Ö", "Ⲟ", $gegnisht);
    $gegnisht = str_replace ("Œ", "ⲞⲈ", $gegnisht);
    $gegnisht = str_replace ("Ã", "Ⲁ", $gegnisht);
    $gegnisht = str_replace ("Ë", "Ə", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "Ⲏ", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "Ⲓ", $gegnisht);
    $gegnisht = str_replace ("Õ", "Ⲱ", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ⲞⲨ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Ⲩ", $gegnisht);
    $gegnisht = str_replace ("C", "Ⲥ", $gegnisht);

    $gegnisht = str_replace ("ⲤⲦ", "Ⲋ", $gegnisht);
    $gegnisht = str_replace ("ⲔⲤ", "Ⲝ", $gegnisht);
    $gegnisht = str_replace ("ⲠⲤ", "Ⲯ", $gegnisht);
    $gegnisht = str_replace ("ⲦϢ", "Ϭ", $gegnisht);


    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }

    return '';
}



function cyrillicTransCodation (string $gegnisht) : string
{
    $gegnisht = str_replace("A", "а", $gegnisht);
    $gegnisht = str_replace("B", "б", $gegnisht);
    $gegnisht = str_replace("G", "г", $gegnisht);
    $gegnisht = str_replace("D", "д", $gegnisht);
    $gegnisht = str_replace("E", "е", $gegnisht);
    $gegnisht = str_replace("V", "в", $gegnisht);
    $gegnisht = str_replace("Z", "з", $gegnisht);
    $gegnisht = str_replace("Ê", "и", $gegnisht);
    $gegnisht = str_replace("Þ", "ѳ", $gegnisht);
    $gegnisht = str_replace("Θ", "ѳ", $gegnisht);
    $gegnisht = str_replace("I", "і", $gegnisht);
    $gegnisht = str_replace("J", "ј", $gegnisht);
    $gegnisht = str_replace("K", "к", $gegnisht);
    $gegnisht = str_replace("L", "л", $gegnisht);
    $gegnisht = str_replace("M", "м", $gegnisht);
    $gegnisht = str_replace("N", "н", $gegnisht);
    $gegnisht = str_replace("S", "с", $gegnisht);
    $gegnisht = str_replace("O", "о", $gegnisht);
    $gegnisht = str_replace("P", "п", $gegnisht);
    $gegnisht = str_replace("Ṣ", "ԇ", $gegnisht);
    $gegnisht = str_replace("Q", "ҁ", $gegnisht);
    $gegnisht = str_replace("R", "р", $gegnisht);
    $gegnisht = str_replace("Ʃ", "ш", $gegnisht);
    $gegnisht = str_replace("T", "т", $gegnisht);
    $gegnisht = str_replace("Y", "ү", $gegnisht);
    $gegnisht = str_replace("U", "у", $gegnisht);
    $gegnisht = str_replace("W", "ԝ", $gegnisht);
    $gegnisht = str_replace("ɸ", "ф", $gegnisht);
    $gegnisht = str_replace("F", "ф", $gegnisht);
    $gegnisht = str_replace("X", "х", $gegnisht);
    $gegnisht = str_replace("Ẓ", "Ӡ", $gegnisht);
    $gegnisht = str_replace("Ô", "ѻ", $gegnisht);
    $gegnisht = str_replace("H", "һ", $gegnisht);
    $gegnisht = str_replace("Ħ", "Ꚕ", $gegnisht);
    $gegnisht = str_replace("Ɣ", "Ҕ", $gegnisht);
    $gegnisht = str_replace("Ʒ", "ж", $gegnisht);
    $gegnisht = str_replace("Ð", "Ҙ", $gegnisht);
    $gegnisht = str_replace("ɕ", "Ҫ", $gegnisht);
    $gegnisht = str_replace("Â", "а", $gegnisht);
    $gegnisht = str_replace("Ä", "а", $gegnisht);
    $gegnisht = str_replace("Ö", "Ө", $gegnisht);
    $gegnisht = str_replace("Œ", "ое", $gegnisht);
    $gegnisht = str_replace("Ã", "а", $gegnisht);
    $gegnisht = str_replace("Ë", "ъ", $gegnisht);
    $gegnisht = str_replace("Ẽ", "ѧ", $gegnisht);
    $gegnisht = str_replace("Ĩ", "і", $gegnisht);
    $gegnisht = str_replace("Õ", "ѫ", $gegnisht);
    $gegnisht = str_replace("Ũ", "у", $gegnisht);
    $gegnisht = str_replace("Ỹ", "ү", $gegnisht);
    $gegnisht = str_replace("C", "ћ", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function ShalvunicEndSuffixModificationTranscodation ($gegnisht) : string
{
    if ((strlen($gegnisht)) > 10) {
        if (mb_substr(mb_strtoupper($gegnisht), -3) == "ѺЈЪ") {
            $gegnisht = mb_substr($gegnisht, 0, -2) . "";
        }
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}

function shalvunicTransCodation (string $gegnisht) : string
{
    $gegnisht = cyrillicTransCodation($gegnisht);

    $gegnisht = ShalvunicEndSuffixModificationTranscodation($gegnisht);

    if (mb_substr(mb_strtoupper($gegnisht), -1) == "Ѻ") {
        $gegnisht = mb_substr($gegnisht, 0, -1) . "ИѲЪ";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function slavonicTransCodation (string $gegnisht) : string
{

    $gegnisht = cyrillicTransCodation($gegnisht);

    $gegnisht = mb_strtolower(ShalvunicEndSuffixModificationTranscodation($gegnisht));

    /* CRASE */
    $gegnisht = str_replace ("тш", "Ч", $gegnisht);
    $gegnisht = str_replace ("тс", "Ц", $gegnisht);
    $gegnisht = str_replace ("дж", "Џ", $gegnisht);
    $gegnisht = str_replace ("пс", "Ѱ", $gegnisht);
    $gegnisht = str_replace ("кс", "Ѯ", $gegnisht);
    $gegnisht = str_replace ("лј", "Љ", $gegnisht);
    $gegnisht = str_replace ("нј", "Њ", $gegnisht);
    $gegnisht = str_replace ("шт", "Щ", $gegnisht);
    $gegnisht = str_replace ("ја", "Я", $gegnisht);

    if(mb_substr($gegnisht, -2) == "ъъ") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "ъ") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }
    /*
        /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtoupper($gegnisht);
    }
    else
    {
        return '';
    }
}


function arabicTransCodation (string $gegnisht) : string {

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -2) == "ÔJ") {
        $gegnisht = mb_substr($gegnisht, 0, -2);
    }

    if(mb_substr($gegnisht, -3) == "ÔJË") {
        $gegnisht = mb_substr($gegnisht, 0, -3);
    }

    $gegnisht = str_replace ("A", "اَ", $gegnisht);
    $gegnisht = str_replace ("B", "ب", $gegnisht);
    $gegnisht = str_replace ("G", "ج", $gegnisht);
    $gegnisht = str_replace ("D", "د", $gegnisht);
    $gegnisht = str_replace ("E", "ه", $gegnisht);
    $gegnisht = str_replace ("V", "ۋ", $gegnisht);
    $gegnisht = str_replace ("Z", "ز", $gegnisht);
    $gegnisht = str_replace ("Ê", "ح", $gegnisht);
    $gegnisht = str_replace ("Þ", "ث", $gegnisht);
    $gegnisht = str_replace ("I", "اِ", $gegnisht);
    $gegnisht = str_replace ("J", "ي", $gegnisht);
    $gegnisht = str_replace ("K", "ك", $gegnisht);
    $gegnisht = str_replace ("L", "ل", $gegnisht);
    $gegnisht = str_replace ("M", "م", $gegnisht);
    $gegnisht = str_replace ("N", "ن", $gegnisht);
    $gegnisht = str_replace ("S", "س", $gegnisht);
    $gegnisht = str_replace ("O", "ع", $gegnisht);
    $gegnisht = str_replace ("P", "ڡ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "ص", $gegnisht);
    $gegnisht = str_replace ("Q", "ق", $gegnisht);
    $gegnisht = str_replace ("R", "ر", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ش", $gegnisht);
    $gegnisht = str_replace ("T", "ت", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ط", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ط", $gegnisht);
    $gegnisht = str_replace ("Θ", "ث", $gegnisht);
    $gegnisht = str_replace ("Y", "ۈ", $gegnisht);
    $gegnisht = str_replace ("U", "و", $gegnisht);
    $gegnisht = str_replace ("W", "و", $gegnisht);
    $gegnisht = str_replace ("ɸ", "ف", $gegnisht);
    $gegnisht = str_replace ("F", "ف", $gegnisht);
    $gegnisht = str_replace ("X", "خ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ظ", $gegnisht);
    $gegnisht = str_replace ("Ô", "غ", $gegnisht);
    $gegnisht = str_replace ("H", "ه", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ح", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "غ", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ج", $gegnisht);
    $gegnisht = str_replace ("Ð", "ذ", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ݭ", $gegnisht);
    $gegnisht = str_replace ("Â", "اَ", $gegnisht);
    $gegnisht = str_replace ("Ä", "ع", $gegnisht);
    $gegnisht = str_replace ("Ö", "ع", $gegnisht);
    $gegnisht = str_replace ("Œ", "عه", $gegnisht);
    $gegnisht = str_replace ("Ã", "أ", $gegnisht);
    $gegnisht = str_replace ("Ë", "اْ", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "ځ", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "إ", $gegnisht);
    $gegnisht = str_replace ("Õ", "غٴ", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ؤ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "ۈٴ", $gegnisht);
    $gegnisht = str_replace ("C", "ݭ", $gegnisht);

    if(mb_substr($gegnisht, -4) == "اْاْ") {
        $gegnisht = mb_substr($gegnisht, 0, -4);
    }

    if(mb_substr($gegnisht, -2) == "اْ") {
        $gegnisht = mb_substr($gegnisht, 0, -2);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return $gegnisht;
    }
    else
    {
        return '';
    }
}


function persianTransCodation($gegnisht) : string
{

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -2) == "ÔJ") {
        $gegnisht = mb_substr($gegnisht, 0, -2);
    }

    if(mb_substr($gegnisht, -3) == "ÔJË") {
        $gegnisht = mb_substr($gegnisht, 0, -3);
    }

    $gegnisht = str_replace ("A", "اَ", $gegnisht);
    $gegnisht = str_replace ("B", "ب", $gegnisht);
    $gegnisht = str_replace ("G", "گ", $gegnisht);
    $gegnisht = str_replace ("D", "د", $gegnisht);
    $gegnisht = str_replace ("E", "ه", $gegnisht);
    $gegnisht = str_replace ("V", "ڤ", $gegnisht);
    $gegnisht = str_replace ("Z", "ز", $gegnisht);
    $gegnisht = str_replace ("Ê", "ح", $gegnisht);
    $gegnisht = str_replace ("Þ", "ث", $gegnisht);
    $gegnisht = str_replace ("I", "اِ", $gegnisht);
    $gegnisht = str_replace ("J", "ي", $gegnisht);
    $gegnisht = str_replace ("K", "ك", $gegnisht);
    $gegnisht = str_replace ("L", "ل", $gegnisht);
    $gegnisht = str_replace ("M", "م", $gegnisht);
    $gegnisht = str_replace ("N", "ن", $gegnisht);
    $gegnisht = str_replace ("S", "س", $gegnisht);
    $gegnisht = str_replace ("O", "ع", $gegnisht);
    $gegnisht = str_replace ("P", "پ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "ص", $gegnisht);
    $gegnisht = str_replace ("Q", "ق", $gegnisht);
    $gegnisht = str_replace ("R", "ر", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ش", $gegnisht);
    $gegnisht = str_replace ("T", "ت", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ط", $gegnisht);
    $gegnisht = str_replace ("Θ", "ث", $gegnisht);
    $gegnisht = str_replace ("Y", "ۈ", $gegnisht);
    $gegnisht = str_replace ("U", "و", $gegnisht);
    $gegnisht = str_replace ("W", "و", $gegnisht);
    $gegnisht = str_replace ("ɸ", "ف", $gegnisht);
    $gegnisht = str_replace ("F", "ف", $gegnisht);
    $gegnisht = str_replace ("X", "خ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ظ", $gegnisht);
    $gegnisht = str_replace ("Ô", "غ", $gegnisht);
    $gegnisht = str_replace ("H", "ه", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ح", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "غ", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ژ", $gegnisht);
    $gegnisht = str_replace ("Ð", "ذ", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ݭ", $gegnisht);
    $gegnisht = str_replace ("Â", "اَ", $gegnisht);
    $gegnisht = str_replace ("Ä", "ع", $gegnisht);
    $gegnisht = str_replace ("Ã", "أ", $gegnisht);
    $gegnisht = str_replace ("Ö", "ع", $gegnisht);
    $gegnisht = str_replace ("Œ", "عه", $gegnisht);
    $gegnisht = str_replace ("Ë", "اْ", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "ځ", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "إ", $gegnisht);
    $gegnisht = str_replace ("Õ", "غٴ", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ؤ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "ۈٴ", $gegnisht);
    $gegnisht = str_replace ("C", "ݭ", $gegnisht);

    if(mb_substr($gegnisht, -4) == "اْاْ") {
        $gegnisht = mb_substr($gegnisht, 0, -4);
    }
    if(mb_substr($gegnisht, -2) == "اْ") {
        $gegnisht = mb_substr($gegnisht, 0, -2);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return $gegnisht;
    }
    else
    {
        return '';
    }
}


function syriacTransCodation($gegnisht) : string
{
    $gegnisht = str_replace ("A", "ܐ", $gegnisht);
    $gegnisht = str_replace ("B", "ܒ", $gegnisht);
    $gegnisht = str_replace ("G", "ܓ", $gegnisht);
    $gegnisht = str_replace ("D", "ܕ", $gegnisht);
    $gegnisht = str_replace ("E", "ܗ", $gegnisht);
    $gegnisht = str_replace ("V", "ܘ", $gegnisht);
    $gegnisht = str_replace ("Z", "ܙ", $gegnisht);
    $gegnisht = str_replace ("Ê", "ܚ", $gegnisht);
    $gegnisht = str_replace ("Þ", "ܬ", $gegnisht);
    $gegnisht = str_replace ("I", "ܝ", $gegnisht);
    $gegnisht = str_replace ("J", "ܝ", $gegnisht);
    $gegnisht = str_replace ("K", "ܟ", $gegnisht);
    $gegnisht = str_replace ("L", "ܠ", $gegnisht);
    $gegnisht = str_replace ("M", "ܡ", $gegnisht);
    $gegnisht = str_replace ("N", "ܢ", $gegnisht);
    $gegnisht = str_replace ("S", "ܣ", $gegnisht);
    $gegnisht = str_replace ("O", "ܥ", $gegnisht);
    $gegnisht = str_replace ("P", "ܦ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "ܨ", $gegnisht);
    $gegnisht = str_replace ("Q", "ܩ", $gegnisht);
    $gegnisht = str_replace ("R", "ܪ", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ܫ", $gegnisht);
    $gegnisht = str_replace ("T", "ܛ", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ܛ", $gegnisht);
    $gegnisht = str_replace ("Θ", "ܬ", $gegnisht);
    $gegnisht = str_replace ("Y", "ܘ", $gegnisht);
    $gegnisht = str_replace ("U", "ܘ", $gegnisht);
    $gegnisht = str_replace ("W", "ܘ", $gegnisht);
    $gegnisht = str_replace ("Ð", "ܕ", $gegnisht);
    $gegnisht = str_replace ("Ð", "ܕ", $gegnisht);
    $gegnisht = str_replace ("ɸ", "ܦ", $gegnisht);
    $gegnisht = str_replace ("F", "ܦ", $gegnisht);
    $gegnisht = str_replace ("X", "ܟ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ܛ", $gegnisht);
    $gegnisht = str_replace ("Ô", "ܥ", $gegnisht);
    $gegnisht = str_replace ("H", "ܗ", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ܚ", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "ܓ", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ܙ", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ܩ", $gegnisht);
    $gegnisht = str_replace ("Â", "ܐ", $gegnisht);
    $gegnisht = str_replace ("Ä", "ܥ", $gegnisht);
    $gegnisht = str_replace ("Ö", "ܥ", $gegnisht);
    $gegnisht = str_replace ("Œ", "ܥܗ", $gegnisht);
    $gegnisht = str_replace ("Ë", "ܐ", $gegnisht);
    $gegnisht = str_replace ("Ã", "ܐ", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "ܚ", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "ܝ", $gegnisht);
    $gegnisht = str_replace ("Õ", "ܥ", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ܘ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "ܘ", $gegnisht);
    $gegnisht = str_replace ("C", "ܫ", $gegnisht);

    if(mb_substr($gegnisht, -2) == "ܐܐ") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return $gegnisht;
    }
    else
    {
        return '';
    }
}


function hebrewTransCodation($gegnisht) : string
{

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ה";
    }

    if(mb_substr($gegnisht, -2) == "ÔJ") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ה";
    }

    if(mb_substr($gegnisht, -3) == "ÔJË") {
        $gegnisht = mb_substr($gegnisht, 0, -3)."ה";
    }

    $gegnisht = str_replace ("A", "א", $gegnisht);
    $gegnisht = str_replace ("B", "ב", $gegnisht);
    $gegnisht = str_replace ("G", "ג", $gegnisht);
    $gegnisht = str_replace ("D", "ד", $gegnisht);
    $gegnisht = str_replace ("E", "ה", $gegnisht);
    $gegnisht = str_replace ("V", "ו", $gegnisht);
    $gegnisht = str_replace ("Z", "ז", $gegnisht);
    $gegnisht = str_replace ("Ê", "ח", $gegnisht);
    $gegnisht = str_replace ("Þ", "ת", $gegnisht);
    $gegnisht = str_replace ("I", "י", $gegnisht);
    $gegnisht = str_replace ("J", "י", $gegnisht);
    $gegnisht = str_replace ("K", "כ", $gegnisht);
    $gegnisht = str_replace ("L", "ל", $gegnisht);
    $gegnisht = str_replace ("M", "מ", $gegnisht);
    $gegnisht = str_replace ("N", "נ", $gegnisht);
    $gegnisht = str_replace ("S", "ס", $gegnisht);
    $gegnisht = str_replace ("O", "ע", $gegnisht);
    $gegnisht = str_replace ("P", "פ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "צ", $gegnisht);
    $gegnisht = str_replace ("Q", "ק", $gegnisht);
    $gegnisht = str_replace ("R", "ר", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ש", $gegnisht);
    $gegnisht = str_replace ("T", "ט", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "ט", $gegnisht);
    $gegnisht = str_replace ("Θ", "ת", $gegnisht);
    $gegnisht = str_replace ("Y", "י׳", $gegnisht);
    $gegnisht = str_replace ("U", "ו", $gegnisht);
    $gegnisht = str_replace ("W", "ו", $gegnisht);
    $gegnisht = str_replace ("ɸ", "פ׳", $gegnisht);
    $gegnisht = str_replace ("F", "פ׳", $gegnisht);
    $gegnisht = str_replace ("X", "כ׳", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ט׳", $gegnisht);
    $gegnisht = str_replace ("Ô", "ע", $gegnisht);
    $gegnisht = str_replace ("H", "ה", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ח", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "ג׳", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ז׳", $gegnisht);
    $gegnisht = str_replace ("Ð", "ד׳", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ק׳", $gegnisht);
    $gegnisht = str_replace ("Â", "א", $gegnisht);
    $gegnisht = str_replace ("Ä", "ע", $gegnisht);
    $gegnisht = str_replace ("Ö", "ע", $gegnisht);
    $gegnisht = str_replace ("Œ", "עה", $gegnisht);
    $gegnisht = str_replace ("Ã", "א", $gegnisht);
    $gegnisht = str_replace ("Ë", "א", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "ח", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "י", $gegnisht);
    $gegnisht = str_replace ("Õ", "ע", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ו", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "י׳", $gegnisht);
    $gegnisht = str_replace ("C", "ש", $gegnisht);

    if(mb_substr($gegnisht, -2) == "אא") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "כ") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ך";
    }

    if(mb_substr($gegnisht, -1) == "מ") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ם";
    }

    if(mb_substr($gegnisht, -1) == "נ") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ן";
    }

    if(mb_substr($gegnisht, -1) == "פ") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ף";
    }

    if(mb_substr($gegnisht, -1) == "צ") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ץ";
    }

    if(mb_substr($gegnisht, -2) == "כ׳") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ך׳";
    }

    if(mb_substr($gegnisht, -2) == "פ׳") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."ף׳";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return $gegnisht;
    }
    else
    {
        return '';
    }
}


function hindiTransCodation($gegnisht) : string
{

    if(mb_substr($gegnisht, 0, 2) == "AU") {
        $gegnisht = "औ".mb_substr($gegnisht, 2);
    }

    $gegnisht = str_replace ("AU", "ौ", $gegnisht);

    if(mb_substr($gegnisht, 2) == "AI") {
        $gegnisht = "ऐ".mb_substr($gegnisht, 2);
    }

    $gegnisht = str_replace ("AI", "ै", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "A") {
        $gegnisht = "आ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("A", "ा", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Â") {
        $gegnisht = "आ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Â", "ा", $gegnisht);

    $gegnisht = str_replace ("E", "हे", $gegnisht);

    $gegnisht = str_replace ("Ê", "ह़ॅ", $gegnisht);

    $gegnisht = str_replace ("Ẽ", "ह़ॅँ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "I") {
        $gegnisht = "ई".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("I", "ी", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "O") {
        $gegnisht = "ओ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("O", "ो", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "U") {
        $gegnisht = "ऊ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("U", "ू", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Y") {
        $gegnisht = "ई़".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Y", "ी़", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ä") {
        $gegnisht = "ओ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ä", "ो", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ö") {
        $gegnisht = "ओ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ö", "ो", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Œ") {
        $gegnisht = "ओहे".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Œ", "ोहे", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ô") {
        $gegnisht = "ऑ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ô", "ॉ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ã") {
        $gegnisht = "आँ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ã", "ाँ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ĩ") {
        $gegnisht = "ईँ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ĩ", "ीँ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Õ") {
        $gegnisht = "ऑँ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Õ", "ॉँ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ũ") {
        $gegnisht = "ऊँ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ũ", "ूँ", $gegnisht);

    if(mb_substr($gegnisht, 0, 1) == "Ỹ") {
        $gegnisht = "ई़ँ".mb_substr($gegnisht, 1);
    }

    $gegnisht = str_replace ("Ỹ", "ी़ँ", $gegnisht);
    $gegnisht = str_replace ("B", "ब्", $gegnisht);
    $gegnisht = str_replace ("G", "ग्", $gegnisht);
    $gegnisht = str_replace ("D", "द्", $gegnisht);
    $gegnisht = str_replace ("V", "व्", $gegnisht);
    $gegnisht = str_replace ("Z", "ज़्", $gegnisht);
    $gegnisht = str_replace ("Þ", "थ़्", $gegnisht);
    $gegnisht = str_replace ("J", "य्", $gegnisht);
    $gegnisht = str_replace ("K", "क्", $gegnisht);
    $gegnisht = str_replace ("L", "ल्", $gegnisht);
    $gegnisht = str_replace ("M", "म्", $gegnisht);
    $gegnisht = str_replace ("N", "न्", $gegnisht);
    $gegnisht = str_replace ("S", "स्", $gegnisht);
    $gegnisht = str_replace ("P", "प्", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "स़्", $gegnisht);
    $gegnisht = str_replace ("Q", "क़्", $gegnisht);
    $gegnisht = str_replace ("R", "र्", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "श्", $gegnisht);
    $gegnisht = str_replace ("T", "त्", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "त़्", $gegnisht);
    $gegnisht = str_replace ("Θ", "थ़्", $gegnisht);
    $gegnisht = str_replace ("W", "व़्", $gegnisht);
    $gegnisht = str_replace ("ɸ", "फ़्", $gegnisht);
    $gegnisht = str_replace ("F", "फ़्", $gegnisht);
    $gegnisht = str_replace ("X", "ख़्", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "ज़्", $gegnisht);
    $gegnisht = str_replace ("H", "ह्", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ह़्", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "ग़्", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "झ़्", $gegnisht);
    $gegnisht = str_replace ("Ð", "ध़", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ष्", $gegnisht);
    $gegnisht = str_replace ("C", "श्", $gegnisht);

    $gegnisht = str_replace ("त्श", "च", $gegnisht);

    $gegnisht = str_replace ("्ा", "ा", $gegnisht);
    $gegnisht = str_replace ("्ी", "ी", $gegnisht);
    $gegnisht = str_replace ("्ू", "ू", $gegnisht);
    $gegnisht = str_replace ("्ॅ", "ॅ", $gegnisht);
    $gegnisht = str_replace ("्े", "े", $gegnisht);
    $gegnisht = str_replace ("्ॉ", "ॉ", $gegnisht);
    $gegnisht = str_replace ("्ो", "ो", $gegnisht);
    $gegnisht = str_replace ("्ौ", "ौ", $gegnisht);
    $gegnisht = str_replace ("्ै", "ै", $gegnisht);
    $gegnisht = str_replace ("ह़्ह़", "ह़", $gegnisht);
    $gegnisht = str_replace ("ह्ह", "ह", $gegnisht);
    $gegnisht = str_replace ("्Ë", "", $gegnisht);

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = "ई़ँ".mb_substr($gegnisht, 0, -1);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return $gegnisht;
    }
    else
    {
        return '';
    }
}


function ipaTransCodation($gegnisht) : string
{
    $gegnisht = str_replace ("Ê", "ɛ", $gegnisht);
    $gegnisht = str_replace ("Þ", "θ", $gegnisht);
    $gegnisht = str_replace ("Ṣ", "sˀ", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ʃ", $gegnisht);
    $gegnisht = str_replace ("Ṭ", "tˀ", $gegnisht);
    $gegnisht = str_replace ("Ẓ", "zˀ", $gegnisht);
    $gegnisht = str_replace ("Ô", "ɔ", $gegnisht);
    $gegnisht = str_replace ("Ħ", "ħ", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "ɣ", $gegnisht);
    $gegnisht = str_replace ("Ð", "ð", $gegnisht);
    $gegnisht = str_replace ("ɕ", "ɕ", $gegnisht);
    $gegnisht = str_replace ("Â", "ɑ", $gegnisht);
    $gegnisht = str_replace ("Ä", "ɒ", $gegnisht);
    $gegnisht = str_replace ("Ö", "ø", $gegnisht);
    $gegnisht = str_replace ("Œ", "œ", $gegnisht);
    $gegnisht = str_replace ("Ã", "ɑ̃", $gegnisht);
    $gegnisht = str_replace ("Ë", "ə", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "ɛ̃", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "ĩ", $gegnisht);
    $gegnisht = str_replace ("Õ", "ɔ̃", $gegnisht);
    $gegnisht = str_replace ("Õ", "ɔ̃", $gegnisht);
    $gegnisht = str_replace ("Ũ", "ũ", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "ỹ", $gegnisht);
    $gegnisht = str_replace ("C", "C", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function englishUKTransCodation(string $gegnisht) : string
{

    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ING";
    }
    if(mb_substr($gegnisht, -3) == "QWË") {
        $gegnisht = mb_substr($gegnisht, 0, -3)."C";
    }
    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }
    if(mb_substr($gegnisht, -1) == "Ə") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    /* REPLACEMENT */
    $gegnisht = str_replace ("Ë‑", "‑", $gegnisht);
    $gegnisht = str_replace ("É", "E", $gegnisht);
    $gegnisht = str_replace ("Ê", "E", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("J", "Y", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "SH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ô", "O", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "J", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);
    $gegnisht = str_replace ("Â", "A", $gegnisht);
    $gegnisht = str_replace ("Ä", "A", $gegnisht);
    $gegnisht = str_replace ("Ö", "O", $gegnisht);
    $gegnisht = str_replace ("Œ", "OE", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Ë", "E", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);
    $gegnisht = str_replace ("TSH", "CH", $gegnisht);

    $gegnisht = str_replace ("Ə", "E", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function englishUSTransCodation($gegnisht) : string {
    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ING";
    }
    if(mb_substr($gegnisht, -3) == "QWË") {
        $gegnisht = mb_substr($gegnisht, 0, -3)."C";
    }

    /* REPLACEMENT */
    $gegnisht = str_replace ("Ë‑", "‑", $gegnisht);
    $gegnisht = str_replace ("É", "E", $gegnisht);
    $gegnisht = str_replace ("Ê", "E", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("J", "Y", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "SH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ô", "O", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "J", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);
    $gegnisht = str_replace ("Â", "A", $gegnisht);
    $gegnisht = str_replace ("Ä", "A", $gegnisht);
    $gegnisht = str_replace ("Ö", "O", $gegnisht);
    $gegnisht = str_replace ("Œ", "OE", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Ë", "E", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);
    $gegnisht = str_replace ("TSH", "CH", $gegnisht);

    if(mb_substr($gegnisht, -1) == "Ə") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    $gegnisht = str_replace ("Ə", "E", $gegnisht);
    $gegnisht = str_replace ("‑", "", $gegnisht);
    $gegnisht = str_replace ("‑", "", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function frenchTransCodation($gegnisht) : string
{

    $gegnisht = str_replace ("E", "É", $gegnisht);

    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ER";
    }
    if(mb_substr($gegnisht, -3) == "QWË") {
        $gegnisht = mb_substr($gegnisht, 0, -3)."QUE";
    }

    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("J", "Y", $gegnisht);
    $gegnisht = str_replace ("J", "Y", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "CH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "J", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);
    $gegnisht = str_replace ("Ö", "EU", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Ë", "E", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);

    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -2) == "GE") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."GUE";
    }
    if(mb_substr($gegnisht, -2) == "QE") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."QUE";
    }
    if(mb_substr($gegnisht, -2) == "SE") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."SSE";
    }
    if(mb_substr($gegnisht, -4) == "SSSE") {
        $gegnisht = mb_substr($gegnisht, 0, -4)."SSE";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function albanianTransCodation($gegnisht) : string {

    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."OJ";
    }

    $gegnisht = str_replace ("Ê", "E", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "SH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ô", "O", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ZH", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);
    $gegnisht = str_replace ("Â", "A", $gegnisht);
    $gegnisht = str_replace ("Ä", "A", $gegnisht);
    $gegnisht = str_replace ("Ö", "O", $gegnisht);
    $gegnisht = str_replace ("Œ", "OE", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);
    $gegnisht = str_replace ("TSH", "Ç", $gegnisht);
    $gegnisht = str_replace ("TS", "C", $gegnisht);

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function gegnishtTransCodation($gegnisht) : string
{
    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."ÔJË";
    }

    /* REPLACEMENT */
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "SH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ô", "O", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ZH", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}


function toskTransCodation($gegnisht) : string
{
    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."OJË";
    }

    /* REPLACEMENT */
    $gegnisht = str_replace ("B", "123", $gegnisht);
    $gegnisht = str_replace ("M", "MB", $gegnisht);
    $gegnisht = str_replace ("123", "MB", $gegnisht);
    $gegnisht = str_replace ("P", "MB", $gegnisht);
    $gegnisht = str_replace ("Y", "I", $gegnisht);
    $gegnisht = str_replace ("Ê", "I", $gegnisht);
    $gegnisht = str_replace ("N", "ND", $gegnisht);

    $gegnisht = str_replace ("Ê", "E", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "SH", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("ɸ", "PH", $gegnisht);
    $gegnisht = str_replace ("X", "KH", $gegnisht);
    $gegnisht = str_replace ("Ô", "O", $gegnisht);
    $gegnisht = str_replace ("Ħ", "HH", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "GH", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "ZH", $gegnisht);
    $gegnisht = str_replace ("Ð", "DH", $gegnisht);
    $gegnisht = str_replace ("ɕ", "QH", $gegnisht);
    $gegnisht = str_replace ("Â", "A", $gegnisht);
    $gegnisht = str_replace ("Ä", "A", $gegnisht);
    $gegnisht = str_replace ("Ö", "O", $gegnisht);
    $gegnisht = str_replace ("Œ", "OE", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);
    $gegnisht = str_replace ("TSH", "Ç", $gegnisht);
    $gegnisht = str_replace ("TS", "C", $gegnisht);

    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -2) == "NË") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."RË";
    }
    if(mb_substr($gegnisht, -2) == "NIË") {
        $gegnisht = mb_substr($gegnisht, 0, -2)."RIË";
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}

function latinTransCodation($gegnisht) : string {
    $gegnisht = str_replace ("Ô", "o", $gegnisht);
    $gegnisht = str_replace ("Ê", "e", $gegnisht);
    $gegnisht = str_replace ("Â", "a", $gegnisht);
    $gegnisht = str_replace ("Ä", "a", $gegnisht);
    $gegnisht = str_replace ("Θ", "TH", $gegnisht);
    $gegnisht = str_replace ("Þ", "TH", $gegnisht);

    $gegnisht = str_replace ("K", "C", $gegnisht);
    $gegnisht = str_replace ("G", "C", $gegnisht);

    $gegnisht = str_replace ("Ʃ", "s", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "g", $gegnisht);
    $gegnisht = str_replace ("X", "ch", $gegnisht);

    if(mb_substr($gegnisht, -2) == "ËË") {
        $gegnisht = mb_substr($gegnisht, 0, -1);
    }

    if(mb_substr($gegnisht, -1) == "Ë") {
        $gegnisht = mb_substr($gegnisht, 0, -1).'us';
    }

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    }
    else
    {
        return '';
    }
}

function hanafiTransCodation($gegnisht) : string
{
    /* REPLACEMENT */
    $gegnisht = str_replace ("DƷ", "G", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "G", $gegnisht);
    $gegnisht = str_replace ("P", "V", $gegnisht);
    $gegnisht = str_replace ("Ê", "ĦÊ", $gegnisht);
    $gegnisht = str_replace ("ĦĦ", "Ħ", $gegnisht);
    $gegnisht = str_replace ("W", "V", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}


function hanbaliTransCodation($gegnisht) : string {
    /* REPLACEMENT */
    $gegnisht = str_replace ("Ʒ", "DƷ", $gegnisht);
    $gegnisht = str_replace ("G", "DƷ", $gegnisht);
    $gegnisht = str_replace ("P", "F", $gegnisht);
    $gegnisht = str_replace ("Ê", "ĦÊ", $gegnisht);
    $gegnisht = str_replace ("ĦĦ", "Ħ", $gegnisht);
    $gegnisht = str_replace ("V", "W", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}


function malakiTransCodation($gegnisht) : string {
    /* REPLACEMENT */
    $gegnisht = str_replace ("DƷ", "Ʒ", $gegnisht);
    $gegnisht = str_replace ("G", "Ʒ", $gegnisht);
    $gegnisht = str_replace ("P", "B", $gegnisht);
    $gegnisht = str_replace ("Ê", "ĦÊ", $gegnisht);
    $gegnisht = str_replace ("ĦĦ", "Ħ", $gegnisht);
    $gegnisht = str_replace ("V", "w", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}


function shiaTransCodation($gegnisht) : string {
    /* REPLACEMENT */
    $gegnisht = str_replace ("Ḍ", "Ẓ", $gegnisht);
    $gegnisht = str_replace ("W", "V", $gegnisht);
    $gegnisht = str_replace ("Ê", "ĦÊ", $gegnisht);
    $gegnisht = str_replace ("ĦĦ", "Ħ", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}


function turkTransCodation($gegnisht) : string {
    /* END OF TERM BEHAVIOR */
    if(mb_substr($gegnisht, -1) == "Ô") {
        $gegnisht = mb_substr($gegnisht, 0, -1)."";
    }

    $gegnisht = str_replace ("Ë", "ı", $gegnisht);
    $gegnisht = str_replace ("I", "İ", $gegnisht);
    $gegnisht = str_replace ("Y", "Ü", $gegnisht);
    $gegnisht = str_replace ("Ḍ", "Ẓ", $gegnisht);
    $gegnisht = str_replace ("W", "V", $gegnisht);
    $gegnisht = str_replace ("ĦÊ", "HE", $gegnisht);
    $gegnisht = str_replace ("Ɣ", "Ğ", $gegnisht);
    $gegnisht = str_replace ("Ê", "E", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);
    $gegnisht = str_replace ("Q", "K", $gegnisht);
    $gegnisht = str_replace ("J", "Y", $gegnisht);
    $gegnisht = str_replace ("Θ", "S", $gegnisht);
    $gegnisht = str_replace ("Þ", "S", $gegnisht);
    $gegnisht = str_replace ("DƷ", "C", $gegnisht);
    $gegnisht = str_replace ("Ʒ", "J", $gegnisht);
    $gegnisht = str_replace ("Ʃ", "ş", $gegnisht);
    $gegnisht = str_replace ("Ô", "o", $gegnisht);
    $gegnisht = str_replace ("Tş", "Ç", $gegnisht);
    $gegnisht = str_replace ("Ã", "A", $gegnisht);

    $gegnisht = str_replace ("Ẽ", "E", $gegnisht);
    $gegnisht = str_replace ("Ĩ", "I", $gegnisht);
    $gegnisht = str_replace ("Õ", "O", $gegnisht);
    $gegnisht = str_replace ("Ũ", "U", $gegnisht);
    $gegnisht = str_replace ("Ỹ", "Y", $gegnisht);

    /* DISPLAY */
    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}

function phoneticTransCodation (string $gegnisht) : string
{
    $gegnisht = str_replace("A", "a", $gegnisht);
    $gegnisht = str_replace("B", "b", $gegnisht);
    $gegnisht = str_replace("G", "ɡ", $gegnisht);
    $gegnisht = str_replace("D", "d", $gegnisht);
    $gegnisht = str_replace("E", "e", $gegnisht);
    $gegnisht = str_replace("V", "v", $gegnisht);
    $gegnisht = str_replace("Z", "z", $gegnisht);
    $gegnisht = str_replace("Ê", "ɛ", $gegnisht);
    $gegnisht = str_replace("Þ", "θ", $gegnisht);
    $gegnisht = str_replace("Θ", "θ", $gegnisht);
    $gegnisht = str_replace("I", "i", $gegnisht);
    $gegnisht = str_replace("J", "j", $gegnisht);
    $gegnisht = str_replace("K", "k", $gegnisht);
    $gegnisht = str_replace("L", "л", $gegnisht);
    $gegnisht = str_replace("M", "m", $gegnisht);
    $gegnisht = str_replace("N", "n", $gegnisht);
    $gegnisht = str_replace("S", "s", $gegnisht);
    $gegnisht = str_replace("O", "o", $gegnisht);
    $gegnisht = str_replace("P", "p", $gegnisht);
    $gegnisht = str_replace("Ṣ", "sˤ", $gegnisht);
    $gegnisht = str_replace("Q", "q", $gegnisht);
    $gegnisht = str_replace("R", "r", $gegnisht);
    $gegnisht = str_replace("Ʃ", "ʃ", $gegnisht);
    $gegnisht = str_replace("T", "t", $gegnisht);
    $gegnisht = str_replace("Y", "y", $gegnisht);
    $gegnisht = str_replace("U", "u", $gegnisht);
    $gegnisht = str_replace("W", "w", $gegnisht);
    $gegnisht = str_replace("ɸ", "", $gegnisht);
    $gegnisht = str_replace("F", "f", $gegnisht);
    $gegnisht = str_replace("X", "x", $gegnisht);
    $gegnisht = str_replace("Ẓ", "zˤ", $gegnisht);
    $gegnisht = str_replace("Ô", "ɔ", $gegnisht);
    $gegnisht = str_replace("H", "h", $gegnisht);
    $gegnisht = str_replace("Ħ", "ħ", $gegnisht);
    $gegnisht = str_replace("Ɣ", "ɣ", $gegnisht);
    $gegnisht = str_replace("Ʒ", "ʒ", $gegnisht);
    $gegnisht = str_replace("Ð", "ð", $gegnisht);
    $gegnisht = str_replace("ɕ", "ɕ", $gegnisht);
    $gegnisht = str_replace("Â", "ɑ", $gegnisht);
    $gegnisht = str_replace("Ä", "ɒ", $gegnisht);
    $gegnisht = str_replace("Ö", "ø", $gegnisht);
    $gegnisht = str_replace("Œ", "œ", $gegnisht);
    $gegnisht = str_replace("Ã", "ɑ̃", $gegnisht);
    $gegnisht = str_replace("Ë", "ə", $gegnisht);
    $gegnisht = str_replace("Ẽ", "ɛ̃", $gegnisht);
    $gegnisht = str_replace("Ĩ", "", $gegnisht);
    $gegnisht = str_replace("Õ", "", $gegnisht);
    $gegnisht = str_replace("Ũ", "", $gegnisht);
    $gegnisht = str_replace("Ỹ", "", $gegnisht);
    $gegnisht = str_replace("C", "c", $gegnisht);

    $gegnisht = str_replace("nɡ", "ŋ", $gegnisht);
    $gegnisht = str_replace("nj", "ɲ", $gegnisht);

    if(!empty($gegnisht)) {
        return mb_strtolower($gegnisht);
    } else {
        return '';
    }
}

