/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let add = document.getElementById("btn__element");
let rezultatas = document.getElementById("btn__state");
let skaicius = 0;

add.addEventListener("click", function() {
  skaicius += 1;
  rezultatas.innerHTML = skaicius;
});
