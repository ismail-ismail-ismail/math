function coll() {

    let sad = document.getElementById("sad").value;
    let san = document.getElementById("san").value;
    let max = document.getElementById("max")
    let kanons = document.getElementById("kanons")
    let selectop = document.getElementById("selectop")
    let tow2 = 2;
    let alamath = "+";
    let alamay = "=";
    let alamas = "-";
    let alamain = "x";
    let alamag = "/";

    let kanon_1 = "2 x ص x س + س2";
    let kanon_2 = "ص2 - س2";
    let kanon_3 = "ص2 x س2";
    let kanon_4 = " ص2 / س2";

    let sadsan = sad * san * tow2;
    let sansan = san * san;
    let sadsad = sad * sad;

    let sadsad_sansan_1 = parseInt(sadsad) - parseInt(sansan);
    let sadsad_sansan_2 = parseInt(sadsad) * parseInt(sansan);
    let sadsad_sansan_3 = parseInt(sadsad) / parseInt(sansan);
    let SadSan_SanSan = parseInt(sadsan) + parseInt(sansan);
    if (selectop.value == "+") {
        kanons.innerHTML = kanon_1;
        max.innerHTML = sadsan + alamath + san * san + alamay + SadSan_SanSan
    }
    if (selectop.value == "-") {
        kanons.innerHTML = kanon_2;
        max.innerHTML = sansan + alamas + sadsad + alamay + sadsad_sansan_1;
    }
    if (selectop.value == "x") {
        kanons.innerHTML = kanon_3;
        max.innerHTML = sadsad + alamain + sansan + alamay + sadsad_sansan_2;
    }
    if (selectop.value == "/") {
        kanons.innerHTML = kanon_4;
        max.innerHTML = sadsad + alamag + sansan + alamay + sadsad_sansan_3;
    }
}