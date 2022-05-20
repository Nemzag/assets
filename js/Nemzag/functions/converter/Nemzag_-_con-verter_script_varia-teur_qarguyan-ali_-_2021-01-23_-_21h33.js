
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

let ϰgegnisht;


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

/* GREEK SCRIPT FUNCTION */

function greekTransCodation (ϰgegnisht) {
    ϰgegnisht.replace ("DƷ", "ϫ", ϰgegnisht);

    ϰgegnisht.replace ("A", "α", ϰgegnisht);
    ϰgegnisht.replace ("B", "β", ϰgegnisht);
    ϰgegnisht.replace ("G", "γ", ϰgegnisht);
    ϰgegnisht.replace ("D", "δ", ϰgegnisht);
    ϰgegnisht.replace ("E", "ε", ϰgegnisht);
    ϰgegnisht.replace ("V", "ϝ", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ζ", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "η", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "θ", ϰgegnisht);
    ϰgegnisht.replace ("I", "ι", ϰgegnisht);
    ϰgegnisht.replace ("J", "ϳ", ϰgegnisht);
    ϰgegnisht.replace ("K", "κ", ϰgegnisht);
    ϰgegnisht.replace ("L", "λ", ϰgegnisht);
    ϰgegnisht.replace ("M", "μ", ϰgegnisht);
    ϰgegnisht.replace ("N", "ν", ϰgegnisht);
    ϰgegnisht.replace ("S", "σ", ϰgegnisht);
    ϰgegnisht.replace ("O", "ο", ϰgegnisht);
    ϰgegnisht.replace ("P", "π", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "ϻ", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ϙ", ϰgegnisht);
    ϰgegnisht.replace ("R", "ρ", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ϸ", ϰgegnisht);
    ϰgegnisht.replace ("T", "τ", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ϯ", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "θ", ϰgegnisht);
    ϰgegnisht.replace ("Y", "υ", ϰgegnisht);
    ϰgegnisht.replace ("U", "ϒ", ϰgegnisht);
    ϰgegnisht.replace ("W", "ͷ", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "φ", ϰgegnisht);
    ϰgegnisht.replace ("F", "φ", ϰgegnisht);
    ϰgegnisht.replace ("X", "χ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ϡ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "ω", ϰgegnisht);
    ϰgegnisht.replace ("H", "ϩ", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ͱ", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "γ΄", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ζ΄", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "δ΄", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ϙ΄", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ϙ΄", ϰgegnisht);
    ϰgegnisht.replace ("Â", "α", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "α", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "Ø", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "οε", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "α", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "Ə", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "η", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "ι", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "ω", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ϒ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "υ", ϰgegnisht);
    ϰgegnisht.replace ("C", "ϲ", ϰgegnisht);

    /*
     * γάμμα
     * indecl, third letter in Gr. alphabet; as Numeral γ᾽ = three, third: but ,γ ῀ 3000.
     * I. γ is the medial palatal mute, between tenuis κ and asp. χ. Before the palatals γ, κ, χ and before ξ, pronounced like n in ng, as in ἄγγος, ἄγκος, ἄγχι, ἄγξω: before the same letters ἐν- in compos. becomes ἐγ-.
     */

    return ϰgegnisht;
}


function greekInversePiPhiTransCodation (ϰgegnisht) {
    ϰgegnisht.replace ("π", "451", ϰgegnisht);
    ϰgegnisht.replace ("φ", "π", ϰgegnisht);
    ϰgegnisht.replace ("451", "φ", ϰgegnisht);

    return ϰgegnisht;
}


function greekInverseTauThetaTransCodation (ϰgegnisht) {
    ϰgegnisht.replace ("τ", "327", ϰgegnisht);
    ϰgegnisht.replace ("θ", "τ", ϰgegnisht);
    ϰgegnisht.replace ("327", "θ", ϰgegnisht);

    return ϰgegnisht;
}

/* GREEK DUPLO REMOVING */
function greekDuploRemove (ϰgegnisht) {
    ϰgegnisht.replace ("πτπτ", "πτ", ϰgegnisht);
    ϰgegnisht.replace ("μμμμ", "μμ", ϰgegnisht);
    ϰgegnisht.replace ("ππππ", "ππ", ϰgegnisht);
    ϰgegnisht.replace ("σσσσ", "σσ", ϰgegnisht);

    return ϰgegnisht;
}

/* GREEK LIGATURE MODIFICATION */

function greekLigatureTranscodation (ϰgegnisht) {
    ϰgegnisht.replace ("πσ", "ψ", ϰgegnisht);
    ϰgegnisht.replace ("φσ", "ψ", ϰgegnisht);
    ϰgegnisht.replace ("βσ", "ψ", ϰgegnisht);
    /* ψ is a double Consonant, compounded of the labial π or φ with ς, ῀ πς, φς */

    ϰgegnisht.replace ("γσ", "ξ", ϰgegnisht);
    ϰgegnisht.replace ("κσ", "ξ", ϰgegnisht);
    ϰgegnisht.replace ("ϙσ", "ξ", ϰgegnisht);
    /* 1.ξ in aeolic and attic appears as an aspirated form of κ, cf. ξυνός with κοινός, ξύν with cum;— or of ς, cf. ξύν with σύν, ξέστης with Lat. sextarius; and so in doric fut. of Verbs in -ζω, κομίξω κλᾳξῶ παιξῶ for κομίσω κλῄσω παίσω. */

    return ϰgegnisht;
}

/* GREEK SUFFIX MODIFICATION */

function greekEndToOsTranscodation (ϰgegnisht)
{
    if (ϰgegnisht.substr(-2) === "ƏƏ") {
        ϰgegnisht = ϰgegnisht.substr(0,-2) +"οσ";
    }
    if (ϰgegnisht.substr(-1) === "Ə") {
        ϰgegnisht = ϰgegnisht.substr(0,-1) +"οσ";
    }
    return ϰgegnisht;
}

function greekEndToUsTranscodation(ϰgegnisht) {
    if(ϰgegnisht.substr(-2) === "ƏƏ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΣ";
    }
    if(ϰgegnisht.substr(-1) === "Ə") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ϒΣ";
    }

    return ϰgegnisht;
}

function greekEndSuffixModificationTranscodation (ϰgegnisht) {

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-4) === "ΩͿΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0, -3) + "";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-4) === "ΩͿϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0, -3) + "";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-6) === "ΩͿƏ‑ΣƏ") {
            ϰgegnisht =  ϰgegnisht.substr(0, -5) + "";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΤΩΡΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΤΩΝΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 12) {
        if(ϰgegnisht.substr(-6) === "ΤΙΩΝΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΤΩΡϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΤΩΝϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 12) {
        if(ϰgegnisht.substr(-6) === "ΤΙΩΝϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-6) === "ΘΩΡƏΣƏ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }
    if(ϰgegnisht.length > 12) {
        if(ϰgegnisht.substr(-7) === "ΘΙΩΝƏΣƏ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΘΩΡϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΘΩΝϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 12) {
        if(ϰgegnisht.substr(-6) === "ΘΙΩΝϒΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΘΩΡΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 10) {
        if(ϰgegnisht.substr(-5) === "ΘΩΝΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    if(ϰgegnisht.length > 12) {
        if (ϰgegnisht.substr(-6) === "ΘΙΩΝΟΣ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    return ϰgegnisht;
}

/* GREEK DIALECT SCRIPT FUNCTION */

function greekCoenicTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht.replace ("ϒ", "ου", ϰgegnisht);

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    ϰgegnisht.replace ("πσ", "ψ", ϰgegnisht);
    ϰgegnisht.replace ("φσ", "ψ", ϰgegnisht);
    ϰgegnisht.replace ("βσ", "ψ", ϰgegnisht);
    /* ψ is a double Consonant, compounded of the labial π or φ with ς, ῀ πς, φς */

    ϰgegnisht.replace ("γσ", "ξ", ϰgegnisht);
    ϰgegnisht.replace ("κσ", "ξ", ϰgegnisht);
    ϰgegnisht.replace ("ϙσ", "ξ", ϰgegnisht);
    /* 1.ξ in aeolic and attic appears as an aspirated form of κ, cf. ξυνός with κοινός, ξύν with cum;— or of ς, cf. ξύν with σύν, ξέστης with Lat. sextarius; and so in doric fut. of Verbs in -ζω, κομίξω κλᾳξῶ παιξῶ for κομίσω κλῄσω παίσω. */

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}

function greekAtticTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht.replace ("ϒ", "ου", ϰgegnisht);

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */

    ϰgegnisht.replace ("λ", "467", ϰgegnisht);
    ϰgegnisht.replace ("ρ", "λ", ϰgegnisht);
    ϰgegnisht.replace ("467", "ρ", ϰgegnisht);
    /* 1.attic λ is sometimes represented by π, as κλίβανος κρίβανος, γλώσσαλγος γλώσσαργος, ναύκραρος ναύκληρος, ἀλκ-ή ἀρκ-εῖν: so, ὁλᾷς Θέωλος κόλαξ were lisping pronunc. for ὁρᾷς Θέωρος κόραξ, Ar. */

    ϰgegnisht.replace ("ν", "λ", ϰgegnisht);
    /* λάμβδα */
    /* 2.doric λ becomes ν, as, ἦνθον φίντατος for ἦλθον φίλτατος; whereas attic λ sometimes replaces ν, as, λίτρον πλεύμων for νίτρον πνεύμων. */

    ϰgegnisht.replace ("μ", "ν", ϰgegnisht);
    /* μῦ
     * * 2. attic and doric into ν, as νιν for μιν; so Lat. ne, num = μή, μῶν.
     * νῦ
     * 2. attic and doric for μ, v. Μ μ. II. 2.
     */

    ϰgegnisht.replace ("ϒ", "ου", ϰgegnisht);

    ϰgegnisht.replace ("σσ", "ττ", ϰgegnisht);
    /* 2.in new attic, as in doric and Boeot., ττ for σς, mostly in Verbs, πράττω for πράσσω, etc. */

    ϰgegnisht.replace ("σδ", "ζ", ϰgegnisht);
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω reversely, in attic, σδ becomes ζ, Ἀθήναζε θύραζε for Ἀθήνασδε θύρασδε. */

    ϰgegnisht.replace ("ρη", "ρα", ϰgegnisht);
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    ϰgegnisht.replace ("ρσ", "ρρ", ϰgegnisht);
    /* 2.in attic, ρρ replaced the ionic and old attic ρς, as ἄρρην, θάρρος for ἄρσην, θάρσος. */

    ϰgegnisht = greekLigatureTranscodation (ϰgegnisht);

    ϰgegnisht.replace ("θθ", "τθ", ϰgegnisht);
    /* θῆτα
     * 3. when θ was repeated in two foll. syllables, the former became τ, as Ἀτθίς.*/

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekNeocoenicTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);

    ϰgegnisht = greekInversePiPhiTransCodation(ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "ƏƏ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "Ə‑ΣƏ";
    }
    if(ϰgegnisht.substr(-1) === "Ə") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "Ə‑ΣƏ";
    }

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */

    if(ϰgegnisht.substr(-2) === "οξ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΣ";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekDoricTransCodation (ϰgegnisht)
{
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);
    /* 2.aeolic and doric into τ, as αὖτις ἐντεῦθεν for αὖθις ἐντεῦθεν. */

    ϰgegnisht = greekInversePiPhiTransCodation(ϰgegnisht);
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    ϰgegnisht = greekEndToUsTranscodation(ϰgegnisht);
    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */
    if (ϰgegnisht.substr(0, 1) === "β") {
        ϰgegnisht = ϰgegnisht.substr(0, 0) + "γ" + ϰgegnisht.substr(1);
    }
    /* 1. for γ, as βλήχων γληχών, βλέφαρον doric γλέφαρον, βουνός γουνός: βεμβράς for μεμβράς, βροτός for μορτός (mortalis). */

    ϰgegnisht.replace ("ζ", "000", ϰgegnisht);

    ϰgegnisht.replace ("β", "001", ϰgegnisht);
    /* 1.aeolic into β, as σάμβαλον for σάνδαλον:— reversely, ὀβελός becomes ὀδελός in doric */

    ϰgegnisht.replace ("σομαι", "ξομαι", ϰgegnisht);
    ϰgegnisht.replace ("ισις", "ιξις", ϰgegnisht);
    /* 5. doric into ξ, in fut. and aor1 of Verbs, with their deriv. Nouns, as ἐργάξομαι χείριξις for ἐργάσομαι χείρισις:—so in ionic, διξός τριξός for δισσός τρισσός; and in old attic, the prep. σύν, with all its Compds., was written ξύν. */

    ϰgegnisht.replace ("σ", "τ", ϰgegnisht);
    /* σύ -> τύ (tú) – Doric */

    ϰgegnisht.replace ("λ", "003", ϰgegnisht);
    ϰgegnisht.replace ("ν", "λ", ϰgegnisht);
    ϰgegnisht.replace ("003", "ν", ϰgegnisht);
    /* λάμβδα */
    /* 2.doric λ becomes ν, as, ἦνθον φίντατος for ἦλθον φίλτατος; whereas attic λ sometimes replaces ν, as, λίτρον πλεύμων for νίτρον πνεύμων. */
    /* νῦ
     * 1. doric, ν represents λ, v. Λ λ. 2. */
    /*
    ϰgegnisht.replace ("τ", "φ", ϰgegnisht);
    */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    ϰgegnisht.replace ("θ", "002", ϰgegnisht);
    ϰgegnisht.replace ("κ", "τ", ϰgegnisht);
    ϰgegnisht.replace ("002", "ϙ", ϰgegnisht);
    /* 2.doric κ is interchanged with τ, as ὅκα ἄλλοκα τῆνος for ὅτε ἄλλοτε κεῖνος. */

    /* 1.doric for θ, as ὄρνιχος for ὄρνιθος. */

    ϰgegnisht.replace ("δ", "ζ", ϰgegnisht);
    /* δ 2.aeolic or doric into ζ, or ζ into δ and σδ, v. ζῆτα II. 2 */
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω */

    ϰgegnisht.replace ("001", "δ", ϰgegnisht);
    /* 1.aeolic into β, as σάμβαλον for σάνδαλον:— reversely, ὀβελός becomes ὀδελός in doric */

    ϰgegnisht.replace ("000", "σδ", ϰgegnisht);
    /* But ς often disappears in aeolic, where ζά ῀ δια, see ζά, ζα-so in aeolic and doric, as we have Δεύς Δάν for Ζεύς Ζάν, δορκάς ῀ ζορκάς:—so also ἀρίζηλος for ἀρίδηλος; ἀλαπαδνός from ἀλαπάζω, παιδνός from παίζω:—doric, in the middle of words, it becomes δδ, as θερίδδω for -ίζω, μάδδα for μᾶζα. */

    ϰgegnisht.replace ("ει", "Η", ϰgegnisht);
    /* ἦτα
     * 3. doric and aeolic for ει, as τῆνος, κῆνος for κεῖνος. */

    ϰgegnisht.replace ("ϸ", "σ", ϰgegnisht);

    if(ϰgegnisht.substr(1, 1) === "ε") {
        ϰgegnisht = ϰgegnisht.substr(0, 1) + "α" + ϰgegnisht.substr(2);
    }

    /*
    if(ϰgegnisht.substr(1, 1) === "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 1)."α".mb_substr(ϰgegnisht, 2);
    }
    if(mb_substr(ϰgegnisht, 2, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 2)."α".mb_substr(ϰgegnisht, 3);
    }
    if(mb_substr(ϰgegnisht, 3, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 3)."α".mb_substr(ϰgegnisht, 4);
    }
    if(mb_substr(ϰgegnisht, 4, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 4)."α".mb_substr(ϰgegnisht, 5);
    }
    if(mb_substr(ϰgegnisht, 5, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 5)."α".mb_substr(ϰgegnisht, 6);
    }
    if(mb_substr(ϰgegnisht, 6, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 6)."α".mb_substr(ϰgegnisht, 7);
    }
    if(mb_substr(ϰgegnisht, 7, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 7)."α".mb_substr(ϰgegnisht, 8);
    }
    if(mb_substr(ϰgegnisht, 8, 1) == "η") {
        ϰgegnisht = ϰgegnisht.substr(0, 8)."α".mb_substr(ϰgegnisht, 9);
    }
    */
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    /* GREEK SUFFIX MODIFICATION */
    if(ϰgegnisht.substr(-2) === "οξ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΣ";
    }

    if(ϰgegnisht.substr(-2) === "οτ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "οσ";
    }

    if(ϰgegnisht.substr(-2) === "ϒτ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΣ";
    }

    if(ϰgegnisht.substr(-1) === "ε") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "α";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekIonicTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    /*
    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);
    */
    /* 3.in ionic the tenius τ for its aspirate θ, as αὖτις for αὖθις; so, the tenuis remains unchanged before an aspirate, as κατεῖλον, κατ᾽ ἡσυχίην. */

    /*
    ϰgegnisht = greekInversePiPhiTransCodation(ϰgegnisht);
    */
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);
    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */
    ϰgegnisht.replace ("α", "η", ϰgegnisht);
    /*  */

    ϰgegnisht.replace ("σσ", "ξ", ϰgegnisht);
    /* 2. interchanged with σς, ionic διξός, τριξός for δισσός, τρισσός. */

    ϰgegnisht.replace ("κ", "001", ϰgegnisht);

    ϰgegnisht.replace ("π", "κ", ϰgegnisht);
    /* —it represents π, as κου κοτε κως, etc., for που ποτε πως, etc.; so, ἴσκε ῀ ἔσπεν, ἵππος Lat. equus. */
    /* in ionic Prose, π becomes κ in relatives and interrogatives, κῶς ὅκως ὁκοῖος ὁκόσος for πῶς ὅπως ὁποῖος ὁπόσος. */

    ϰgegnisht.replace ("χ", "κ", ϰgegnisht);
    /* 1. ionic κ replaces χ, as κιθών δέκομαι κύθρη for χιτών δέχομαι χύτρα:—it represents π, as κου κοτε κως, etc., for που ποτε πως, etc.; so, ἴσκε ῀ ἔσπεν, ἵππος Lat. equus. */
    /* 2.ionic represented by κ, as δέκομαι κιθών for δέχομαι χιτών. */

    ϰgegnisht.replace ("φ", "π", ϰgegnisht);
    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    ϰgegnisht.replace ("001", "φ", ϰgegnisht);

    ϰgegnisht.replace ("σμ", "δμ", ϰgegnisht);
    /* 1. aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    ϰgegnisht.replace ("θ", "371", ϰgegnisht); /* αὖθις -> αὖτις */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    ϰgegnisht.replace ("τ", "θ", ϰgegnisht); /* χιτών χύτρα -> κιθών κύθρη */
    /* 3.in ionic the tenius τ for its aspirate θ, as αὖτις for αὖθις; so, the tenuis remains unchanged before an aspirate, as κατεῖλον, κατ᾽ ἡσυχίην. */

    ϰgegnisht.replace ("371", "τ", ϰgegnisht); /* αὖθις -> αὖτις */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    /* TERM MUTATION */
    if(ϰgegnisht.length < 9) {
        ϰgegnisht.replace ("κοθε", "κοτε", ϰgegnisht);
    }

    if(ϰgegnisht.substr(-2) === "οδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ΟΣ";
    }
    if(ϰgegnisht.substr(-2) === "υδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ΟΣ";
    }
    if(ϰgegnisht.substr(-2) === "ϒδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ΟΣ";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekAeolicTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);
    /* 2.aeolic and doric into τ, as αὖτις ἐντεῦθεν for αὖθις ἐντεῦθεν. */

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /*  DIALECTAL MUTATION */

    ϰgegnisht.replace ("πσ", "ψ", ϰgegnisht);

    ϰgegnisht.replace ("τ", "675", ϰgegnisht);
    /* θ is sometimes represented by φ, as θλάω φλάω; so in Lat. θήρ (aeolic φήρ) fera; θύρα fores; */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */

    ϰgegnisht.replace ("σμ", "841", ϰgegnisht);
    /* 1.aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    ϰgegnisht.replace ("νδ", "999", ϰgegnisht);
    /* δέλτα1
     * 1. aeolic into β, as σάμβαλον for σάνδαλον. */


    ϰgegnisht.replace ("ζ", "δ", ϰgegnisht);
    /* δ 2.aeolic or doric into ζ, or ζ into δ and σδ, v. ζῆτα II. 2 */
    /* But ς often disappears in aeolic, where ζά ῀ δια, see ζά, ζα-so in aeolic and doric, as we have Δεύς Δάν for Ζεύς Ζάν, δορκάς ῀ ζορκάς:—so also ἀρίζηλος for ἀρίδηλος; ἀλαπαδνός from ἀλαπάζω, παιδνός from παίζω:—doric, in the middle of words, it becomes δδ, as θερίδδω for -ίζω, μάδδα for μᾶζα. */

    ϰgegnisht.replace ("δ", "001", ϰgegnisht);

    ϰgegnisht.replace ("μ", "222", ϰgegnisht);
    ϰgegnisht.replace ("π", "μ", ϰgegnisht);
    /* πατέω -> μάτημῐ */
    ϰgegnisht.replace ("675", "φ", ϰgegnisht);
    /* θ is sometimes represented by φ, as θλάω φλάω; so in Lat. θήρ (aeolic φήρ) fera; θύρα fores; */
    /* 2.in aeolic, doric, and ionic φ is sometimes put for θ, as φήρ φλάω for θήρ θλάω. */
    ϰgegnisht.replace ("222", "π", ϰgegnisht);
    /* 1. aeolic and Lacon. into π, as πεδά for μετά. */
    /* 4. in aeolic, π is used for μ, ὄππα for ὄμμα, πεδά for μετά. */

    /* 2.in aeolic and ionic, it stands for the asp. φ, ἀμπί for ἀμφί, πανός for φανός, ἀπικέσθαι for ἀφικ-: in ionic it was retained in apostrophe before an aspirate, ἀπ᾽ ἡμῶν, ἐπ᾽ ἡμέρην, ὑπ᾽ ὑμῶν, etc.: on the contrary the aspirated form was preferred in attic, ἀσφάραγος for ἀσπάραγος, σφόνδυλος for σπόνδυλος. */
    /* 1.in aeolic, doric and ionic the aspirate was often dropped, and φ became π, as in ἀσπάραγος σπόγγος σπυράς for ἀσφάραγος σφόγγος σφυράς, whereas the attic sometimes used φ for π, as φανός φάτρα for πανός πάτρα. */

    ϰgegnisht.replace ("μ", "μμ", ϰgegnisht);
    /* 3. μ is doubled, b.aeolic, as ἄμμες ὔμμες ἐμμί, for ἡμεῖς ὑμεῖς εἰμί. */

    ϰgegnisht = greekDuploRemove(ϰgegnisht);

    ϰgegnisht.replace ("999", "μβ", ϰgegnisht);
    /* δέλτα1
     * 1. aeolic into β, as σάμβαλον for σάνδαλον. */

    ϰgegnisht.replace ("841", "δμ", ϰgegnisht);
    /* 1.aeolic and ionic into δ, as ὀδμή ἴδμεν for ὀσμή ἴσμεν. */

    ϰgegnisht.replace ("σ", "τ", ϰgegnisht); /* σύ -> τύ (tú) – Doric */
    /* 1. aeolic and doric, τ for ς, as τύ (Lat. tu, thou) for σύ; τοί τέ τῦκον φατί for σοί σέ σῦκον φησί. */

    ϰgegnisht.replace ("001", "σδ", ϰgegnisht);
    /*  Ζ ζ is composed of ς and δ, so that in aeolic it becomes σδ, as Σδεύς κωμάσδω ψιθυρίσδω for Ζεύς κωμάζω ψιθυρίζω */
    ϰgegnisht.replace ("σδ΄", "ζ΄", ϰgegnisht);

    ϰgegnisht.replace ("υ", "ι", ϰgegnisht);
    /* 1.doric, ι for υ in the 3rd pl. and part. pres., as φιλέοισι ἐοῖσα for φιλέουσι, etc.; so also Μοῖσα Ἀρέθοισα for Μοῦσα, etc.:—it was added to α in some Adjs., and in the aor1 part., as μέλαις τάλαις ῥίψαις for μέλας, etc.; and in the acc. pl. fem. of 1st decl., as ταῖς νύμφαις for τὰς νύμφας. */

    ϰgegnisht.replace("α", "ο", ϰgegnisht);
    /* ὂμικρόν
     * Dialect. changes: aeolic for α, as στροτός for στρατός; */

    /*
    ϰgegnisht.replace("η", "α", ϰgegnisht);
    */
    /* 1.the vowel η was much used by the ionic, being in aeolic and doric replaced by α_, as also in attic, but mostly after ρ or a vowel, πρήσσω θώρηξ ἰητρός, attic πράσσω θώραξ ἰατρός. */

    ϰgegnisht.replace ("ει", "Η", ϰgegnisht);
    /* ἦτα
     * 3. doric and aeolic for ει, as τῆνος, κῆνος for κεῖνος. */

    /*
    if ((ϰgegnisht.length) < 7) {
        if (ϰgegnisht.substr(-3) === "ΦΑΡ") {
            ϰgegnisht = ϰgegnisht.substr(0, -3) + "φηρ";
        }
    }
    */

    ϰgegnisht.replace ("ου", "οι", ϰgegnisht);
    /* 2. aeolic, the diphth. ου became οι, Μοῖσα for Μοῦσα, λέγοισα for λέγουσα. */

    ϰgegnisht.replace ("νθ", "μπ", ϰgegnisht);
    /* πῖ
     * 5. in aeolic and doric, π for τ, πέτορες for τέσσαρες, πέμπε for πέντε. */

    ϰgegnisht.replace ("θεσ", "πε", ϰgegnisht);
    /* πῖ
     * 5. in aeolic and doric, π for τ, πέτορες for τέσσαρες, πέμπε for πέντε. */

    /* ϰgegnisht.replace ("θ", "τ", ϰgegnisht); */

    /* GREEK START MODIFICATION */

    if(ϰgegnisht.substr(0, 2) === "μμ") {
        ϰgegnisht = ϰgegnish.substr(0, 1) + ϰgegnisht.substr(2);
    }

    /* GREEK SUFFIX MODIFICATION */
    if(ϰgegnisht.substr(-2) === "οδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "οσ";
    }
    if(ϰgegnisht.substr(-2) === "υδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "υσ";
    }
    if(ϰgegnisht.substr(-2) === "ϒδ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒσ";
    }

    if(ϰgegnisht.substr(-2) === "ϒτ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΣ";
    }

    if(ϰgegnisht.substr(-2) === "οτ") {
        if(ϰgegnisht.substr(-1) === "τ") {
            ϰgegnisht = ϰgegnisht.substr(0, -1) + "Ρ";
        }
    }
    /* ῥῶ
     * 1.aeolic, at the end of words ς passed into ρ, as οὗτορ, ἵππορ for οὗτος, ἵππος; cf. Lat. arbor arbos, honor honos. */

    /* TERM MUTATION */
    if(ϰgegnisht.length < 9) {
        ϰgegnisht.replace ("πετο", "πεδα", ϰgegnisht);
        /* ΜΕΤΑ -> ΠΕΔΑ */
    }

    /* GREEK SUFFIX MODIFICATION */

    if(ϰgegnisht.substr(-2) === "ετ") {
        if(ϰgegnisht.substr(-1) === "τ") {
            ϰgegnisht = ϰgegnisht.substr(0, -1) + "σ";
        }
    }

    if(ϰgegnisht.substr(-2) === "οσ") {
        if(ϰgegnisht.substr(-1) === "σ") {
            ϰgegnisht = ϰgegnisht.substr(0, -1) + "Ρ";
        }
    }

    if(ϰgegnisht.substr(-1) === "ο") {
        if(ϰgegnisht.substr(-1) === "ο") {
            ϰgegnisht = ϰgegnisht.substr(0, -1) + "α";
        }
    }

    /* GREEK SUFFIX MODIFICATION */
    if(ϰgegnisht.substr(-1) === "ε") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "α";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekLaconicTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */

    ϰgegnisht.replace ("θε", "σι", ϰgegnisht); /* θεός -> σιός */
    /* 2. Boeot. and Lacon. as σιός, σεῖος, for θεός, θεῖος. */

    ϰgegnisht.replace ("θ", "σ", ϰgegnisht);
    /* 1.Lacon., into ς, as σάλασσα σεῖος σιός Ἀσάνα παρσένος for θάλασσα θεῖος θεός Ἀθάνα παρθένος. */

    ϰgegnisht.replace ("μ", "π", ϰgegnisht);
    ϰgegnisht.replace ("ϝ", "β", ϰgegnisht);
    /* εἴκοσι -> ϝίκᾰτῐ (D.)-> βείκᾰτῐ (L.) */
    /* β , βῆτα
     * II. to represent ϝ, freq. in Hsch., esp. in Lacon. words, cf. βείκατι, etc. */


    ϰgegnisht.replace ("δ", "111", ϰgegnisht);
    ϰgegnisht.replace ("ζ", "δ", ϰgegnisht);
    ϰgegnisht.replace ("111", "ζ", ϰgegnisht);

    /* GREEK SUFFIX MODIFICATION */

    if(ϰgegnisht.substr(-2) === "οσ") {
        if(ϰgegnisht.substr(-2) === "οσ") {
            ϰgegnisht = ϰgegnisht.substr(0, -2) + "ϒΡ";
        }
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekDelphicTransCodation (ϰgegnisht) {

    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekEndToUsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */
    ϰgegnisht.replace ("β", "δ", ϰgegnisht); /* βούλομαι -> δείλομαι */
    ϰgegnisht.replace ("π", "β", ϰgegnisht); /* πατέω -> βᾰτέω */


    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekBoeoticTransCodation (ϰgegnisht) {

    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht); /* TEST */

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */
    ϰgegnisht.replace ("ω", "υ", ϰgegnisht); /* βούλομαι -> δείλομαι */
    /* 4.Boeot. υ_ for ω, as χελύνη for χελώνη. */

    ϰgegnisht.replace ("θε", "θι", ϰgegnisht); /* θεός -> θιός */
    /* 2. Boeot. and Lacon. as σιός, σεῖος, for θεός, θεῖος. */

    ϰgegnisht.replace ("σ", "τ", ϰgegnisht); /* σῦκον -> τῦκον (tûkon) – Boeotian */

    /* SUFFIX MUTATION */
    if(ϰgegnisht.substr(-1) === "υ") {
        if(ϰgegnisht.substr(-1) === "υ") {
            ϰgegnisht = ϰgegnisht.substr(0, -1) + "ω";
        }
    }

    /* SUFFIX MUTATION */
    if(ϰgegnisht.length > 7) {
        if (ϰgegnisht.substr(-2) === "οτ") {
            ϰgegnisht = ϰgegnisht.substr(0,-1) +"σ";
        }
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}

function greekMacedonianTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekEndToUsTranscodation(ϰgegnisht);
    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    ϰgegnisht.replace ("θ", "δ", ϰgegnisht);
    /* ἀδραία , Maced. for αἰθρία
     * δάνος (B), [α^], ὁ, Maced. for θάνατος
     * δαλάγχαν: θάλασσαν (Maced.) */

    ϰgegnisht.replace ("φ", "β", ϰgegnisht);
    /* βαλακρός , Maced. A.= φαλ-, Plu.2.292e.
     * Βερενίκη is Maced. for Φερενίκη.）*/


    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}

function greekPoeticTransCodation (ϰgegnisht) {
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);
    /*
    ϰgegnisht = greekInversePiPhiTransCodation(ϰgegnisht);
    */

    ϰgegnisht = greekEndToUsTranscodation(ϰgegnisht);
    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    /* DIALECTAL MUTATION */
    /*
     * ϰgegnisht.replace ("α", "η", ϰgegnisht);
     * ϰgegnisht.replace ("δ", "123", ϰgegnisht);
     * ϰgegnisht.replace ("ζ", "δ", ϰgegnisht);
     * ϰgegnisht.replace ("123", "ζ", ϰgegnisht);
     */

    ϰgegnisht.replace ("μ", "μμ", ϰgegnisht);
    /* 3. μ is doubled, a.poet. in compds., as ἄμμορος, φιλομμειδής; and after the augm., as ἔλλαβον. */

    ϰgegnisht.replace ("σ", "σσ", ϰgegnisht);
    /* 3. in aeolic and doric, and in Poets, ς was often doubled, as ὅσσος μέσσος ὀπίσσω for ὅσος μέσος ὀπίσω, and in fut. and aor. 1 forms, as δαμάσσω ὀλέσσω, etc. for δαμάσω ὀλέσω, etc. */

    ϰgegnisht.replace ("π", "πτ", ϰgegnisht);
    /* πῖ
     * 8. in Poets, τ is inserted after π, as in πτόλις, πτόλεμος for πόλις, πόλεμος. */

    ϰgegnisht.replace ("αρ", "ρα", ϰgegnisht);
    /* ῥῶ
     * 3.in some words ρ is transposed, as κάρτος epic for κράτος, ἀταρπός for ἀτραπός, κραδίη for καρδία:—mostly in Poets. */

    ϰgegnisht = greekDuploRemove (ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "σσ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "σ";
    }

    /* GREEK START MODIFICATION */
    if(ϰgegnisht.substr(0, 2) === "μμ") {
        ϰgegnisht = ϰgegnish.substr(0, 1) + ϰgegnisht.substr(2);
    }

    /* GREEK START MODIFICATION */
    if(ϰgegnisht.substr(0, 2) === "σσ") {
        ϰgegnisht = ϰgegnish.substr(0, 1) + ϰgegnisht.substr(2);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function greekEpicTransCodation (ϰgegnisht)
{
    ϰgegnisht = greekTransCodation(ϰgegnisht);

    /*
    ϰgegnisht = greekInverseTauThetaTransCodation(ϰgegnisht);
    */

    ϰgegnisht = greekEndToOsTranscodation(ϰgegnisht);

    ϰgegnisht = greekEndSuffixModificationTranscodation(ϰgegnisht);

    ϰgegnisht.replace ("θ", "σ", ϰgegnisht);
    /* εἴκοσι -> ϝίκᾰτῐ (D.) -> βείκᾰτῐ (L.) -> ἐείκοσῐ (E.) */

    /* DUPLO */
    ϰgegnisht.replace ("π", "ππ", ϰgegnisht);
    /* 7.in aeolic and epic Poetry, π is often doubled in relatives, as ὅππη ὅππως ὁπποῖος for ὅπη, etc. */

    ϰgegnisht.replace ("λ", "λλ", ϰgegnisht);
    /*  λάμβδα
     * 4. epic Poets double λ, metri grat., esp. after the augment, as, ἔλλαβε ἐλλιτάνευε; and in compds., as in τρίλλιστος:—and Homer omits λ, where two come together, metri grat., as Ἀχιλεύς. */

    ϰgegnisht.replace ("ρα", "αρ", ϰgegnisht);
    /* ῥῶ
     * 3.in some words ρ is transposed, as κάρτος epic for κράτος, ἀταρπός for ἀτραπός, κραδίη for καρδία:—mostly in Poets. */

    /* GREEK START MODIFICATION */

    if(ϰgegnisht.substr(0, 2) === "λλ") {
        ϰgegnisht = ϰgegnish.substr(0, 1) + ϰgegnisht.substr(2);
    }

    if(ϰgegnisht.substr(0, 2) === "ππ") {
        ϰgegnisht = ϰgegnish.substr(0, 1) + ϰgegnisht.substr(2);
    }

    /* GREEK DUPLO REMOVE */

    ϰgegnisht = greekDuploRemove(ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}

function CopticTransCodation (ϰgegnisht) {
    ϰgegnisht.replace ("DƷ", "Ϫ", ϰgegnisht);
    ϰgegnisht.replace ("A", "Ⲁ", ϰgegnisht);
    ϰgegnisht.replace ("B", "Ⲃ", ϰgegnisht);
    ϰgegnisht.replace ("G", "Ⲅ", ϰgegnisht);
    ϰgegnisht.replace ("D", "Ⲇ", ϰgegnisht);
    ϰgegnisht.replace ("E", "Ⲉ", ϰgegnisht);
    ϰgegnisht.replace ("V", "ϝ", ϰgegnisht);
    ϰgegnisht.replace ("Z", "Ⲍ", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "Ⲏ", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "Ⲑ", ϰgegnisht);
    ϰgegnisht.replace ("I", "Ⲓ", ϰgegnisht);
    ϰgegnisht.replace ("J", "ϳ", ϰgegnisht);
    ϰgegnisht.replace ("Kʰ", "Ⲭ", ϰgegnisht);
    ϰgegnisht.replace ("K", "Ⲕ", ϰgegnisht);
    ϰgegnisht.replace ("L", "Ⲗ", ϰgegnisht);
    ϰgegnisht.replace ("M", "Ⲙ", ϰgegnisht);
    ϰgegnisht.replace ("N", "Ⲛ", ϰgegnisht);
    ϰgegnisht.replace ("S", "Ⲥ", ϰgegnisht);
    ϰgegnisht.replace ("O", "Ⲟ", ϰgegnisht);
    ϰgegnisht.replace ("P", "Ⲡ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "ϻ", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ϙ", ϰgegnisht);
    ϰgegnisht.replace ("R", "Ⲣ", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "Ϣ", ϰgegnisht);
    ϰgegnisht.replace ("T", "Ⲧ", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "Ϯ", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "Ⲑ", ϰgegnisht);
    ϰgegnisht.replace ("Y", "Ⲩ", ϰgegnisht);
    ϰgegnisht.replace ("U", "ⲞⲨ", ϰgegnisht);
    ϰgegnisht.replace ("W", "ͷ", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "Ⲫ", ϰgegnisht);
    ϰgegnisht.replace ("F", "Ϥ", ϰgegnisht);
    ϰgegnisht.replace ("X", "Ϧ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "Ⳁ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "Ⲱ", ϰgegnisht);
    ϰgegnisht.replace ("H", "Ϩ", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ͱ", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "", ϰgegnisht);
    ϰgegnisht.replace ("Â", "Ⲁ", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "Ⲁ", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "Ⲟ", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "ⲞⲈ", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "Ⲁ", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "Ə", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "Ⲏ", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "Ⲓ", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "Ⲱ", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ⲞⲨ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Ⲩ", ϰgegnisht);
    ϰgegnisht.replace ("C", "Ⲥ", ϰgegnisht);

    ϰgegnisht.replace ("ⲤⲦ", "Ⲋ", ϰgegnisht);
    ϰgegnisht.replace ("ⲔⲤ", "Ⲝ", ϰgegnisht);
    ϰgegnisht.replace ("ⲠⲤ", "Ⲯ", ϰgegnisht);
    ϰgegnisht.replace ("ⲦϢ", "Ϭ", ϰgegnisht);


    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }

    return '';
}



function cyrillicTransCodation (ϰgegnisht)
{
    ϰgegnisht.replace("A", "а", ϰgegnisht);
    ϰgegnisht.replace("B", "б", ϰgegnisht);
    ϰgegnisht.replace("G", "г", ϰgegnisht);
    ϰgegnisht.replace("D", "д", ϰgegnisht);
    ϰgegnisht.replace("E", "е", ϰgegnisht);
    ϰgegnisht.replace("V", "в", ϰgegnisht);
    ϰgegnisht.replace("Z", "з", ϰgegnisht);
    ϰgegnisht.replace("Ê", "и", ϰgegnisht);
    ϰgegnisht.replace("Þ", "ѳ", ϰgegnisht);
    ϰgegnisht.replace("Θ", "ѳ", ϰgegnisht);
    ϰgegnisht.replace("I", "і", ϰgegnisht);
    ϰgegnisht.replace("J", "ј", ϰgegnisht);
    ϰgegnisht.replace("K", "к", ϰgegnisht);
    ϰgegnisht.replace("L", "л", ϰgegnisht);
    ϰgegnisht.replace("M", "м", ϰgegnisht);
    ϰgegnisht.replace("N", "н", ϰgegnisht);
    ϰgegnisht.replace("S", "с", ϰgegnisht);
    ϰgegnisht.replace("O", "о", ϰgegnisht);
    ϰgegnisht.replace("P", "п", ϰgegnisht);
    ϰgegnisht.replace("Ṣ", "ԇ", ϰgegnisht);
    ϰgegnisht.replace("Q", "ҁ", ϰgegnisht);
    ϰgegnisht.replace("R", "р", ϰgegnisht);
    ϰgegnisht.replace("Ʃ", "ш", ϰgegnisht);
    ϰgegnisht.replace("T", "т", ϰgegnisht);
    ϰgegnisht.replace("Y", "ү", ϰgegnisht);
    ϰgegnisht.replace("U", "у", ϰgegnisht);
    ϰgegnisht.replace("W", "ԝ", ϰgegnisht);
    ϰgegnisht.replace("ɸ", "ф", ϰgegnisht);
    ϰgegnisht.replace("F", "ф", ϰgegnisht);
    ϰgegnisht.replace("X", "х", ϰgegnisht);
    ϰgegnisht.replace("Ẓ", "Ӡ", ϰgegnisht);
    ϰgegnisht.replace("Ô", "ѻ", ϰgegnisht);
    ϰgegnisht.replace("H", "һ", ϰgegnisht);
    ϰgegnisht.replace("Ħ", "Ꚕ", ϰgegnisht);
    ϰgegnisht.replace("Ɣ", "Ҕ", ϰgegnisht);
    ϰgegnisht.replace("Ʒ", "ж", ϰgegnisht);
    ϰgegnisht.replace("Ð", "Ҙ", ϰgegnisht);
    ϰgegnisht.replace("ɕ", "Ҫ", ϰgegnisht);
    ϰgegnisht.replace("Â", "а", ϰgegnisht);
    ϰgegnisht.replace("Ä", "а", ϰgegnisht);
    ϰgegnisht.replace("Ö", "Ө", ϰgegnisht);
    ϰgegnisht.replace("Œ", "ое", ϰgegnisht);
    ϰgegnisht.replace("Ã", "а", ϰgegnisht);
    ϰgegnisht.replace("Ë", "ъ", ϰgegnisht);
    ϰgegnisht.replace("Ẽ", "ѧ", ϰgegnisht);
    ϰgegnisht.replace("Ĩ", "і", ϰgegnisht);
    ϰgegnisht.replace("Õ", "ѫ", ϰgegnisht);
    ϰgegnisht.replace("Ũ", "у", ϰgegnisht);
    ϰgegnisht.replace("Ỹ", "ү", ϰgegnisht);
    ϰgegnisht.replace("C", "ћ", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function ShalvunicEndSuffixModificationTranscodation (ϰgegnisht)
{
    if (ϰgegnisht.length > 10) {
        if (ϰgegnisht.substr(-3) === "ѺЈЪ") {
            ϰgegnisht = ϰgegnisht.substr(0,-2) +"";
        }
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}

function shalvunicTransCodation (ϰgegnisht)
{
    ϰgegnisht = cyrillicTransCodation(ϰgegnisht);

    ϰgegnisht = ShalvunicEndSuffixModificationTranscodation(ϰgegnisht);

    if (ϰgegnisht.substr(-1) === "Ѻ") {
        ϰgegnisht = ϰgegnisht.substr(0,-1) +"ИѲЪ";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function slavonicTransCodation (ϰgegnisht)
{

    ϰgegnisht = cyrillicTransCodation(ϰgegnisht);

    ϰgegnisht = mb_strtolower(ShalvunicEndSuffixModificationTranscodation(ϰgegnisht));

    /* CRASE */
    ϰgegnisht.replace ("тш", "Ч", ϰgegnisht);
    ϰgegnisht.replace ("тс", "Ц", ϰgegnisht);
    ϰgegnisht.replace ("дж", "Џ", ϰgegnisht);
    ϰgegnisht.replace ("пс", "Ѱ", ϰgegnisht);
    ϰgegnisht.replace ("кс", "Ѯ", ϰgegnisht);
    ϰgegnisht.replace ("лј", "Љ", ϰgegnisht);
    ϰgegnisht.replace ("нј", "Њ", ϰgegnisht);
    ϰgegnisht.replace ("шт", "Щ", ϰgegnisht);
    ϰgegnisht.replace ("ја", "Я", ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "ъъ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "ъ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }
    /*
        /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht.toUpperCase;
    }
    else
    {
        return '';
    }
}


function arabicTransCodation (ϰgegnisht) {

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-2) === "ÔJ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2);
    }

    if(ϰgegnisht.substr(-3) === "ÔJË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3);
    }

    ϰgegnisht.replace ("A", "اَ", ϰgegnisht);
    ϰgegnisht.replace ("B", "ب", ϰgegnisht);
    ϰgegnisht.replace ("G", "ج", ϰgegnisht);
    ϰgegnisht.replace ("D", "د", ϰgegnisht);
    ϰgegnisht.replace ("E", "ه", ϰgegnisht);
    ϰgegnisht.replace ("V", "ۋ", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ز", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ح", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "ث", ϰgegnisht);
    ϰgegnisht.replace ("I", "اِ", ϰgegnisht);
    ϰgegnisht.replace ("J", "ي", ϰgegnisht);
    ϰgegnisht.replace ("K", "ك", ϰgegnisht);
    ϰgegnisht.replace ("L", "ل", ϰgegnisht);
    ϰgegnisht.replace ("M", "م", ϰgegnisht);
    ϰgegnisht.replace ("N", "ن", ϰgegnisht);
    ϰgegnisht.replace ("S", "س", ϰgegnisht);
    ϰgegnisht.replace ("O", "ع", ϰgegnisht);
    ϰgegnisht.replace ("P", "ڡ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "ص", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ق", ϰgegnisht);
    ϰgegnisht.replace ("R", "ر", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ش", ϰgegnisht);
    ϰgegnisht.replace ("T", "ت", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ط", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ط", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "ث", ϰgegnisht);
    ϰgegnisht.replace ("Y", "ۈ", ϰgegnisht);
    ϰgegnisht.replace ("U", "و", ϰgegnisht);
    ϰgegnisht.replace ("W", "و", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "ف", ϰgegnisht);
    ϰgegnisht.replace ("F", "ف", ϰgegnisht);
    ϰgegnisht.replace ("X", "خ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ظ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "غ", ϰgegnisht);
    ϰgegnisht.replace ("H", "ه", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ح", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "غ", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ج", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ذ", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ݭ", ϰgegnisht);
    ϰgegnisht.replace ("Â", "اَ", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "ع", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "ع", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "عه", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "أ", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "اْ", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "ځ", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "إ", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "غٴ", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ؤ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "ۈٴ", ϰgegnisht);
    ϰgegnisht.replace ("C", "ݭ", ϰgegnisht);

    if(ϰgegnisht.substr(-4) === "اْاْ") {
        ϰgegnisht = ϰgegnisht.substr(0, -4);
    }

    if(ϰgegnisht.substr(-2) === "اْ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht;
    }
    else
    {
        return '';
    }
}


function persianTransCodation(ϰgegnisht)
{

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-2) === "ÔJ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2);
    }

    if(ϰgegnisht.substr(-3) === "ÔJË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3);
    }

    ϰgegnisht.replace ("A", "اَ", ϰgegnisht);
    ϰgegnisht.replace ("B", "ب", ϰgegnisht);
    ϰgegnisht.replace ("G", "گ", ϰgegnisht);
    ϰgegnisht.replace ("D", "د", ϰgegnisht);
    ϰgegnisht.replace ("E", "ه", ϰgegnisht);
    ϰgegnisht.replace ("V", "ڤ", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ز", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ح", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "ث", ϰgegnisht);
    ϰgegnisht.replace ("I", "اِ", ϰgegnisht);
    ϰgegnisht.replace ("J", "ي", ϰgegnisht);
    ϰgegnisht.replace ("K", "ك", ϰgegnisht);
    ϰgegnisht.replace ("L", "ل", ϰgegnisht);
    ϰgegnisht.replace ("M", "م", ϰgegnisht);
    ϰgegnisht.replace ("N", "ن", ϰgegnisht);
    ϰgegnisht.replace ("S", "س", ϰgegnisht);
    ϰgegnisht.replace ("O", "ع", ϰgegnisht);
    ϰgegnisht.replace ("P", "پ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "ص", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ق", ϰgegnisht);
    ϰgegnisht.replace ("R", "ر", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ش", ϰgegnisht);
    ϰgegnisht.replace ("T", "ت", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ط", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "ث", ϰgegnisht);
    ϰgegnisht.replace ("Y", "ۈ", ϰgegnisht);
    ϰgegnisht.replace ("U", "و", ϰgegnisht);
    ϰgegnisht.replace ("W", "و", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "ف", ϰgegnisht);
    ϰgegnisht.replace ("F", "ف", ϰgegnisht);
    ϰgegnisht.replace ("X", "خ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ظ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "غ", ϰgegnisht);
    ϰgegnisht.replace ("H", "ه", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ح", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "غ", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ژ", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ذ", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ݭ", ϰgegnisht);
    ϰgegnisht.replace ("Â", "اَ", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "ع", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "أ", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "ع", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "عه", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "اْ", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "ځ", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "إ", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "غٴ", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ؤ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "ۈٴ", ϰgegnisht);
    ϰgegnisht.replace ("C", "ݭ", ϰgegnisht);

    if(ϰgegnisht.substr(-4) === "اْاْ") {
        ϰgegnisht = ϰgegnisht.substr(0, -4);
    }
    if(ϰgegnisht.substr(-2) === "اْ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht;
    }
    else
    {
        return '';
    }
}


function syriacTransCodation(ϰgegnisht)
{
    ϰgegnisht.replace ("A", "ܐ", ϰgegnisht);
    ϰgegnisht.replace ("B", "ܒ", ϰgegnisht);
    ϰgegnisht.replace ("G", "ܓ", ϰgegnisht);
    ϰgegnisht.replace ("D", "ܕ", ϰgegnisht);
    ϰgegnisht.replace ("E", "ܗ", ϰgegnisht);
    ϰgegnisht.replace ("V", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ܙ", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ܚ", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "ܬ", ϰgegnisht);
    ϰgegnisht.replace ("I", "ܝ", ϰgegnisht);
    ϰgegnisht.replace ("J", "ܝ", ϰgegnisht);
    ϰgegnisht.replace ("K", "ܟ", ϰgegnisht);
    ϰgegnisht.replace ("L", "ܠ", ϰgegnisht);
    ϰgegnisht.replace ("M", "ܡ", ϰgegnisht);
    ϰgegnisht.replace ("N", "ܢ", ϰgegnisht);
    ϰgegnisht.replace ("S", "ܣ", ϰgegnisht);
    ϰgegnisht.replace ("O", "ܥ", ϰgegnisht);
    ϰgegnisht.replace ("P", "ܦ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "ܨ", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ܩ", ϰgegnisht);
    ϰgegnisht.replace ("R", "ܪ", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ܫ", ϰgegnisht);
    ϰgegnisht.replace ("T", "ܛ", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ܛ", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "ܬ", ϰgegnisht);
    ϰgegnisht.replace ("Y", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("U", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("W", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ܕ", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ܕ", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "ܦ", ϰgegnisht);
    ϰgegnisht.replace ("F", "ܦ", ϰgegnisht);
    ϰgegnisht.replace ("X", "ܟ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ܛ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "ܥ", ϰgegnisht);
    ϰgegnisht.replace ("H", "ܗ", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ܚ", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "ܓ", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ܙ", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ܩ", ϰgegnisht);
    ϰgegnisht.replace ("Â", "ܐ", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "ܥ", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "ܥ", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "ܥܗ", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "ܐ", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "ܐ", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "ܚ", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "ܝ", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "ܥ", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "ܘ", ϰgegnisht);
    ϰgegnisht.replace ("C", "ܫ", ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "ܐܐ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht;
    }
    else
    {
        return '';
    }
}


function hebrewTransCodation(ϰgegnisht)
{

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ה";
    }

    if(ϰgegnisht.substr(-2) === "ÔJ") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ה";
    }

    if(ϰgegnisht.substr(-3) === "ÔJË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3) + "ה";
    }

    ϰgegnisht.replace ("A", "א", ϰgegnisht);
    ϰgegnisht.replace ("B", "ב", ϰgegnisht);
    ϰgegnisht.replace ("G", "ג", ϰgegnisht);
    ϰgegnisht.replace ("D", "ד", ϰgegnisht);
    ϰgegnisht.replace ("E", "ה", ϰgegnisht);
    ϰgegnisht.replace ("V", "ו", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ז", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ח", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "ת", ϰgegnisht);
    ϰgegnisht.replace ("I", "י", ϰgegnisht);
    ϰgegnisht.replace ("J", "י", ϰgegnisht);
    ϰgegnisht.replace ("K", "כ", ϰgegnisht);
    ϰgegnisht.replace ("L", "ל", ϰgegnisht);
    ϰgegnisht.replace ("M", "מ", ϰgegnisht);
    ϰgegnisht.replace ("N", "נ", ϰgegnisht);
    ϰgegnisht.replace ("S", "ס", ϰgegnisht);
    ϰgegnisht.replace ("O", "ע", ϰgegnisht);
    ϰgegnisht.replace ("P", "פ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "צ", ϰgegnisht);
    ϰgegnisht.replace ("Q", "ק", ϰgegnisht);
    ϰgegnisht.replace ("R", "ר", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ש", ϰgegnisht);
    ϰgegnisht.replace ("T", "ט", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "ט", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "ת", ϰgegnisht);
    ϰgegnisht.replace ("Y", "י׳", ϰgegnisht);
    ϰgegnisht.replace ("U", "ו", ϰgegnisht);
    ϰgegnisht.replace ("W", "ו", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "פ׳", ϰgegnisht);
    ϰgegnisht.replace ("F", "פ׳", ϰgegnisht);
    ϰgegnisht.replace ("X", "כ׳", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ט׳", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "ע", ϰgegnisht);
    ϰgegnisht.replace ("H", "ה", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ח", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "ג׳", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ז׳", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ד׳", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ק׳", ϰgegnisht);
    ϰgegnisht.replace ("Â", "א", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "ע", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "ע", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "עה", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "א", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "א", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "ח", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "י", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "ע", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ו", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "י׳", ϰgegnisht);
    ϰgegnisht.replace ("C", "ש", ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "אא") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "כ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ך";
    }

    if(ϰgegnisht.substr(-1) === "מ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ם";
    }

    if(ϰgegnisht.substr(-1) === "נ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ן";
    }

    if(ϰgegnisht.substr(-1) === "פ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ף";
    }

    if(ϰgegnisht.substr(-1) === "צ") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ץ";
    }

    if(ϰgegnisht.substr(-2) === "כ׳") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ך׳";
    }

    if(ϰgegnisht.substr(-2) === "פ׳") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "ף׳";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht;
    }
    else
    {
        return '';
    }
}


function hindiTransCodation(ϰgegnisht)
{

    if(ϰgegnisht.substr(0, 2) === "AU") {
        ϰgegnisht = "औ".mb_substr(ϰgegnisht, 2);
    }

    ϰgegnisht.replace ("AU", "ौ", ϰgegnisht);

    if(ϰgegnisht.substr(-2) ===  "AI") {
        ϰgegnisht = "ऐ".mb_substr(ϰgegnisht, 2);
    }

    ϰgegnisht.replace ("AI", "ै", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "A") {
        ϰgegnisht = "आ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("A", "ा", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Â") {
        ϰgegnisht = "आ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Â", "ा", ϰgegnisht);

    ϰgegnisht.replace ("E", "हे", ϰgegnisht);

    ϰgegnisht.replace ("Ê", "ह़ॅ", ϰgegnisht);

    ϰgegnisht.replace ("Ẽ", "ह़ॅँ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "I") {
        ϰgegnisht = "ई" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("I", "ी", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "O") {
        ϰgegnisht = "ओ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("O", "ो", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "U") {
        ϰgegnisht = "ऊ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("U", "ू", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Y") {
        ϰgegnisht = "ई़" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Y", "ी़", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ä") {
        ϰgegnisht = "ओ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ä", "ो", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ö") {
        ϰgegnisht = "ओ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ö", "ो", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Œ") {
        ϰgegnisht = "ओहे" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Œ", "ोहे", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ô") {
        ϰgegnisht = "ऑ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ô", "ॉ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ã") {
        ϰgegnisht = "आँ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ã", "ाँ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ĩ") {
        ϰgegnisht = "ईँ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ĩ", "ीँ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Õ") {
        ϰgegnisht = "ऑँ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Õ", "ॉँ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ũ") {
        ϰgegnisht = "ऊँ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ũ", "ूँ", ϰgegnisht);

    if(ϰgegnisht.substr(0, 1) === "Ỹ") {
        ϰgegnisht = "ई़ँ" + ϰgegnisht.substr(1);
    }

    ϰgegnisht.replace ("Ỹ", "ी़ँ", ϰgegnisht);
    ϰgegnisht.replace ("B", "ब्", ϰgegnisht);
    ϰgegnisht.replace ("G", "ग्", ϰgegnisht);
    ϰgegnisht.replace ("D", "द्", ϰgegnisht);
    ϰgegnisht.replace ("V", "व्", ϰgegnisht);
    ϰgegnisht.replace ("Z", "ज़्", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "थ़्", ϰgegnisht);
    ϰgegnisht.replace ("J", "य्", ϰgegnisht);
    ϰgegnisht.replace ("K", "क्", ϰgegnisht);
    ϰgegnisht.replace ("L", "ल्", ϰgegnisht);
    ϰgegnisht.replace ("M", "म्", ϰgegnisht);
    ϰgegnisht.replace ("N", "न्", ϰgegnisht);
    ϰgegnisht.replace ("S", "स्", ϰgegnisht);
    ϰgegnisht.replace ("P", "प्", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "स़्", ϰgegnisht);
    ϰgegnisht.replace ("Q", "क़्", ϰgegnisht);
    ϰgegnisht.replace ("R", "र्", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "श्", ϰgegnisht);
    ϰgegnisht.replace ("T", "त्", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "त़्", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "थ़्", ϰgegnisht);
    ϰgegnisht.replace ("W", "व़्", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "फ़्", ϰgegnisht);
    ϰgegnisht.replace ("F", "फ़्", ϰgegnisht);
    ϰgegnisht.replace ("X", "ख़्", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "ज़्", ϰgegnisht);
    ϰgegnisht.replace ("H", "ह्", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ह़्", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "ग़्", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "झ़्", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ध़", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ष्", ϰgegnisht);
    ϰgegnisht.replace ("C", "श्", ϰgegnisht);

    ϰgegnisht.replace ("त्श", "च", ϰgegnisht);

    ϰgegnisht.replace ("्ा", "ा", ϰgegnisht);
    ϰgegnisht.replace ("्ी", "ी", ϰgegnisht);
    ϰgegnisht.replace ("्ू", "ू", ϰgegnisht);
    ϰgegnisht.replace ("्ॅ", "ॅ", ϰgegnisht);
    ϰgegnisht.replace ("्े", "े", ϰgegnisht);
    ϰgegnisht.replace ("्ॉ", "ॉ", ϰgegnisht);
    ϰgegnisht.replace ("्ो", "ो", ϰgegnisht);
    ϰgegnisht.replace ("्ौ", "ौ", ϰgegnisht);
    ϰgegnisht.replace ("्ै", "ै", ϰgegnisht);
    ϰgegnisht.replace ("ह़्ह़", "ह़", ϰgegnisht);
    ϰgegnisht.replace ("ह्ह", "ह", ϰgegnisht);
    ϰgegnisht.replace ("्Ë", "", ϰgegnisht);

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = "ई़ँ".mb_substr(ϰgegnisht, 0, -1);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return ϰgegnisht;
    }
    else
    {
        return '';
    }
}


function ipaTransCodation(ϰgegnisht)
{
    ϰgegnisht.replace ("Ê", "ɛ", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "θ", ϰgegnisht);
    ϰgegnisht.replace ("Ṣ", "sˀ", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ʃ", ϰgegnisht);
    ϰgegnisht.replace ("Ṭ", "tˀ", ϰgegnisht);
    ϰgegnisht.replace ("Ẓ", "zˀ", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "ɔ", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "ħ", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "ɣ", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "ð", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "ɕ", ϰgegnisht);
    ϰgegnisht.replace ("Â", "ɑ", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "ɒ", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "ø", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "œ", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "ɑ̃", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "ə", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "ɛ̃", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "ĩ", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "ɔ̃", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "ɔ̃", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "ũ", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "ỹ", ϰgegnisht);
    ϰgegnisht.replace ("C", "C", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function englishUKTransCodation(ϰgegnisht)
{

    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ING";
    }
    if(ϰgegnisht.substr(-3) === "QWË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3) + "C";
    }
    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }
    if(ϰgegnisht.substr(-1) === "Ə") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    /* REPLACEMENT */
    ϰgegnisht.replace ("Ë‑", "‑", ϰgegnisht);
    ϰgegnisht.replace ("É", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "E", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("J", "Y", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "SH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "J", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);
    ϰgegnisht.replace ("Â", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "O", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "OE", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);
    ϰgegnisht.replace ("TSH", "CH", ϰgegnisht);

    ϰgegnisht.replace ("Ə", "E", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function englishUSTransCodation(ϰgegnisht) {
    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ING";
    }
    if(ϰgegnisht.substr(-3) === "QWË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3) + "C";
    }

    /* REPLACEMENT */
    ϰgegnisht.replace ("Ë‑", "‑", ϰgegnisht);
    ϰgegnisht.replace ("É", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "E", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("J", "Y", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "SH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "J", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);
    ϰgegnisht.replace ("Â", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "O", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "OE", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);
    ϰgegnisht.replace ("TSH", "CH", ϰgegnisht);

    if(ϰgegnisht.substr(-1) === "Ə") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    ϰgegnisht.replace ("Ə", "E", ϰgegnisht);
    ϰgegnisht.replace ("‑", "", ϰgegnisht);
    ϰgegnisht.replace ("‑", "", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function frenchTransCodation(ϰgegnisht)
{

    ϰgegnisht.replace ("E", "É", ϰgegnisht);

    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ER";
    }
    if(ϰgegnisht.substr(-3) === "QWË") {
        ϰgegnisht = ϰgegnisht.substr(0, -3) + "QUE";
    }

    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("J", "Y", ϰgegnisht);
    ϰgegnisht.replace ("J", "Y", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "CH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "J", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "EU", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ë", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);

    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-2) === "GE") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "GUE";
    }
    if(ϰgegnisht.substr(-2) === "QE") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "QUE";
    }
    if(ϰgegnisht.substr(-2) === "SE") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "SSE";
    }
    if(ϰgegnisht.substr(-4) === "SSSE") {
        ϰgegnisht = ϰgegnisht.substr(0, -4) + "SSE";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function albanianTransCodation(ϰgegnisht) {

    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "OJ";
    }

    ϰgegnisht.replace ("Ê", "E", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "SH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ZH", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);
    ϰgegnisht.replace ("Â", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "O", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "OE", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);
    ϰgegnisht.replace ("TSH", "Ç", ϰgegnisht);
    ϰgegnisht.replace ("TS", "C", ϰgegnisht);

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function gegnishtTransCodation(ϰgegnisht)
{
    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "ÔJË";
    }

    /* REPLACEMENT */
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "SH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ZH", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}


function toskTransCodation(ϰgegnisht)
{
    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "OJË";
    }

    /* REPLACEMENT */
    ϰgegnisht.replace ("B", "123", ϰgegnisht);
    ϰgegnisht.replace ("M", "MB", ϰgegnisht);
    ϰgegnisht.replace ("123", "MB", ϰgegnisht);
    ϰgegnisht.replace ("P", "MB", ϰgegnisht);
    ϰgegnisht.replace ("Y", "I", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "I", ϰgegnisht);
    ϰgegnisht.replace ("N", "ND", ϰgegnisht);

    ϰgegnisht.replace ("Ê", "E", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "SH", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("ɸ", "PH", ϰgegnisht);
    ϰgegnisht.replace ("X", "KH", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ħ", "HH", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "GH", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "ZH", ϰgegnisht);
    ϰgegnisht.replace ("Ð", "DH", ϰgegnisht);
    ϰgegnisht.replace ("ɕ", "QH", ϰgegnisht);
    ϰgegnisht.replace ("Â", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ö", "O", ϰgegnisht);
    ϰgegnisht.replace ("Œ", "OE", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);
    ϰgegnisht.replace ("TSH", "Ç", ϰgegnisht);
    ϰgegnisht.replace ("TS", "C", ϰgegnisht);

    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-2) === "NË") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "RË";
    }
    if(ϰgegnisht.substr(-2) === "NIË") {
        ϰgegnisht = ϰgegnisht.substr(0, -2) + "RIË";
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}

function latinTransCodation(ϰgegnisht) {
    ϰgegnisht.replace ("Ô", "o", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "e", ϰgegnisht);
    ϰgegnisht.replace ("Â", "a", ϰgegnisht);
    ϰgegnisht.replace ("Ä", "a", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "TH", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "TH", ϰgegnisht);

    ϰgegnisht.replace ("K", "C", ϰgegnisht);
    ϰgegnisht.replace ("G", "C", ϰgegnisht);

    ϰgegnisht.replace ("Ʃ", "s", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "g", ϰgegnisht);
    ϰgegnisht.replace ("X", "ch", ϰgegnisht);

    if(ϰgegnisht.substr(-2) === "ËË") {
        ϰgegnisht = ϰgegnisht.substr(0, -1);
    }

    if(ϰgegnisht.substr(-1) === "Ë") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + 'us';
    }

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    }
    else
    {
        return '';
    }
}

function hanafiTransCodation(ϰgegnisht)
{
    /* REPLACEMENT */
    ϰgegnisht.replace ("DƷ", "G", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "G", ϰgegnisht);
    ϰgegnisht.replace ("P", "V", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ĦÊ", ϰgegnisht);
    ϰgegnisht.replace ("ĦĦ", "Ħ", ϰgegnisht);
    ϰgegnisht.replace ("W", "V", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}


function hanbaliTransCodation(ϰgegnisht) {
    /* REPLACEMENT */
    ϰgegnisht.replace ("Ʒ", "DƷ", ϰgegnisht);
    ϰgegnisht.replace ("G", "DƷ", ϰgegnisht);
    ϰgegnisht.replace ("P", "F", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ĦÊ", ϰgegnisht);
    ϰgegnisht.replace ("ĦĦ", "Ħ", ϰgegnisht);
    ϰgegnisht.replace ("V", "W", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}


function malakiTransCodation(ϰgegnisht) {
    /* REPLACEMENT */
    ϰgegnisht.replace ("DƷ", "Ʒ", ϰgegnisht);
    ϰgegnisht.replace ("G", "Ʒ", ϰgegnisht);
    ϰgegnisht.replace ("P", "B", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ĦÊ", ϰgegnisht);
    ϰgegnisht.replace ("ĦĦ", "Ħ", ϰgegnisht);
    ϰgegnisht.replace ("V", "w", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}


function shiaTransCodation(ϰgegnisht) {
    /* REPLACEMENT */
    ϰgegnisht.replace ("Ḍ", "Ẓ", ϰgegnisht);
    ϰgegnisht.replace ("W", "V", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "ĦÊ", ϰgegnisht);
    ϰgegnisht.replace ("ĦĦ", "Ħ", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}


function turkTransCodation(ϰgegnisht) {
    /* END OF TERM BEHAVIOR */
    if(ϰgegnisht.substr(-1) === "Ô") {
        ϰgegnisht = ϰgegnisht.substr(0, -1) + "";
    }

    ϰgegnisht.replace ("Ë", "ı", ϰgegnisht);
    ϰgegnisht.replace ("I", "İ", ϰgegnisht);
    ϰgegnisht.replace ("Y", "Ü", ϰgegnisht);
    ϰgegnisht.replace ("Ḍ", "Ẓ", ϰgegnisht);
    ϰgegnisht.replace ("W", "V", ϰgegnisht);
    ϰgegnisht.replace ("ĦÊ", "HE", ϰgegnisht);
    ϰgegnisht.replace ("Ɣ", "Ğ", ϰgegnisht);
    ϰgegnisht.replace ("Ê", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);
    ϰgegnisht.replace ("Q", "K", ϰgegnisht);
    ϰgegnisht.replace ("J", "Y", ϰgegnisht);
    ϰgegnisht.replace ("Θ", "S", ϰgegnisht);
    ϰgegnisht.replace ("Þ", "S", ϰgegnisht);
    ϰgegnisht.replace ("DƷ", "C", ϰgegnisht);
    ϰgegnisht.replace ("Ʒ", "J", ϰgegnisht);
    ϰgegnisht.replace ("Ʃ", "ş", ϰgegnisht);
    ϰgegnisht.replace ("Ô", "o", ϰgegnisht);
    ϰgegnisht.replace ("Tş", "Ç", ϰgegnisht);
    ϰgegnisht.replace ("Ã", "A", ϰgegnisht);

    ϰgegnisht.replace ("Ẽ", "E", ϰgegnisht);
    ϰgegnisht.replace ("Ĩ", "I", ϰgegnisht);
    ϰgegnisht.replace ("Õ", "O", ϰgegnisht);
    ϰgegnisht.replace ("Ũ", "U", ϰgegnisht);
    ϰgegnisht.replace ("Ỹ", "Y", ϰgegnisht);

    /* DISPLAY */
    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}

function phoneticTransCodation (ϰgegnisht)
{
    ϰgegnisht.replace("A", "a", ϰgegnisht);
    ϰgegnisht.replace("B", "b", ϰgegnisht);
    ϰgegnisht.replace("G", "ɡ", ϰgegnisht);
    ϰgegnisht.replace("D", "d", ϰgegnisht);
    ϰgegnisht.replace("E", "e", ϰgegnisht);
    ϰgegnisht.replace("V", "v", ϰgegnisht);
    ϰgegnisht.replace("Z", "z", ϰgegnisht);
    ϰgegnisht.replace("Ê", "ɛ", ϰgegnisht);
    ϰgegnisht.replace("Þ", "θ", ϰgegnisht);
    ϰgegnisht.replace("Θ", "θ", ϰgegnisht);
    ϰgegnisht.replace("I", "i", ϰgegnisht);
    ϰgegnisht.replace("J", "j", ϰgegnisht);
    ϰgegnisht.replace("K", "k", ϰgegnisht);
    ϰgegnisht.replace("L", "л", ϰgegnisht);
    ϰgegnisht.replace("M", "m", ϰgegnisht);
    ϰgegnisht.replace("N", "n", ϰgegnisht);
    ϰgegnisht.replace("S", "s", ϰgegnisht);
    ϰgegnisht.replace("O", "o", ϰgegnisht);
    ϰgegnisht.replace("P", "p", ϰgegnisht);
    ϰgegnisht.replace("Ṣ", "sˤ", ϰgegnisht);
    ϰgegnisht.replace("Q", "q", ϰgegnisht);
    ϰgegnisht.replace("R", "r", ϰgegnisht);
    ϰgegnisht.replace("Ʃ", "ʃ", ϰgegnisht);
    ϰgegnisht.replace("T", "t", ϰgegnisht);
    ϰgegnisht.replace("Y", "y", ϰgegnisht);
    ϰgegnisht.replace("U", "u", ϰgegnisht);
    ϰgegnisht.replace("W", "w", ϰgegnisht);
    ϰgegnisht.replace("ɸ", "", ϰgegnisht);
    ϰgegnisht.replace("F", "f", ϰgegnisht);
    ϰgegnisht.replace("X", "x", ϰgegnisht);
    ϰgegnisht.replace("Ẓ", "zˤ", ϰgegnisht);
    ϰgegnisht.replace("Ô", "ɔ", ϰgegnisht);
    ϰgegnisht.replace("H", "h", ϰgegnisht);
    ϰgegnisht.replace("Ħ", "ħ", ϰgegnisht);
    ϰgegnisht.replace("Ɣ", "ɣ", ϰgegnisht);
    ϰgegnisht.replace("Ʒ", "ʒ", ϰgegnisht);
    ϰgegnisht.replace("Ð", "ð", ϰgegnisht);
    ϰgegnisht.replace("ɕ", "ɕ", ϰgegnisht);
    ϰgegnisht.replace("Â", "ɑ", ϰgegnisht);
    ϰgegnisht.replace("Ä", "ɒ", ϰgegnisht);
    ϰgegnisht.replace("Ö", "ø", ϰgegnisht);
    ϰgegnisht.replace("Œ", "œ", ϰgegnisht);
    ϰgegnisht.replace("Ã", "ɑ̃", ϰgegnisht);
    ϰgegnisht.replace("Ë", "ə", ϰgegnisht);
    ϰgegnisht.replace("Ẽ", "ɛ̃", ϰgegnisht);
    ϰgegnisht.replace("Ĩ", "", ϰgegnisht);
    ϰgegnisht.replace("Õ", "", ϰgegnisht);
    ϰgegnisht.replace("Ũ", "", ϰgegnisht);
    ϰgegnisht.replace("Ỹ", "", ϰgegnisht);
    ϰgegnisht.replace("C", "c", ϰgegnisht);

    ϰgegnisht.replace("nɡ", "ŋ", ϰgegnisht);
    ϰgegnisht.replace("nj", "ɲ", ϰgegnisht);

    if(ϰgegnisht !== "" || ϰgegnisht !== null) {
        return mb_strtolower(ϰgegnisht);
    } else {
        return '';
    }
}

