// Dabartinis laikas
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500); // atnaujiname laiką kas 0.5s
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // pridedame nulį priešais skaičių jei < 10
    return i;
}

/*  Temperatūros keitimas iš F į C, ir atvirkščiai
    Atkreipkite dėmesį, kad naudojame Math.round() funkciją, kad mūsų rezultatas būtų sveikas skaičius. */

function tempKeitimas(laipsniai) {
    let oras;
    if (laipsniai == "C") {
        oras = document.getElementById("c").value * 9/5 + 32;
        document.getElementById("f").value = Math.round(oras);
    } else {
        oras = (document.getElementById("f").value - 32) * 5/9;
        document.getElementById("c").value = Math.round(oras);
    }
}

// Parodo vartotojo ekrano plotį ir aukštį
document.getElementById("ekranoPlotisAukstis").innerHTML = "Ekrano plotis ir aukštis yra " + screen.width + " x " + screen.height;

// Paspaudus mygtuką, atskleidžia papildomą tekstą
function placiauBtn() {
    document.getElementById("placiauMygtukas").innerHTML = "Pedagogams, kūrybiniams, sveikatos priežiūros specialistams, orlaivių pilotams ir kitų grupių darbuotojams, priklausomai nuo jų specialybės, siūloma suteikti nuo 25 iki 50 darbo dienų kasmetines pailgintas atostogas.";
}

// Užvedus pele ant nuotraukos planetų rodomas vis kitoks tekstas - nuotraukoje sukūrėme žemėlapį
function aprasas(txt) {
    document.getElementById("tekstas").innerHTML = txt;
}

/* Užvedus pele ant ant nuotraukos, jos dydis padidėja, o patraukus pelę nuo nuotraukos, jos dydis grįžta į normalų dydį
    function bigImg() aktyvuojama, kai vartotojas užveda pelę ant nuotraukos
    normalImg() aktyvuojama, kai vartotojas patraukia pelę nuo nuotraukos */
function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}

function normalImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
}

// Įvedus vardą ir paspaudus mygtuką, atsidarys patvirtinimo langas su informacija į kurį puslapį bus perkeltas vartotojas
function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Labas " + fname + "! Netrukus keliausite į apple.com puslapį");
}

// switch metodas
function sezonai() {
    mLaikas = document.forms[1].mLaikas.value;
    switch (mLaikas) {
        case "Vasara": alert("Pasirinkai vasarą. Ar važiuosi prie jūros?");
            break;
        case "Ruduo": alert("Pasirinkai rudenį. Rimtai? Tau patinka niūrūs orai?");
            break;
        case "Žiema": alert("Pasirinkai žiemą. Laikas traukt slides?");
            break;
        case "Pavasaris": alert("Pasirinkai pavasarį. Pagaliau tirpsta sniegas.");
            break;
        default: alert("Neįvedei mėgstamiausio laiko.");
    } 
}

