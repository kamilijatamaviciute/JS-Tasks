/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let sarasas = {};

function sukurtiLentele() {
  const login = document.createElement("th");
  login.innerText = "LOGIN";

  const image = document.createElement("th");
  image.innerText = "Avartar_url";

  const tr = document.createElement("tr");
  tr.append(login, image);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  let divOutput = document.getElementById("output");
  divOutput.appendChild(table);
  //document.body.append(table);
}
function sukeltiDuomenys2(robots) {
  try {
    const kunas = document.getElementById("output");
    robots.forEach((robot) => {
      const konteineris = document.createElement("div");
      const loginas = document.createElement("div");
      loginas.innerText = robot.login;
      const paveiksliukas = document.createElement("img");
      paveiksliukas.src = robot.avatar_url;
      const paveiksliukasKonteineris = document.createElement("div");
      paveiksliukasKonteineris.append(paveiksliukas);
      loginas.className = "loginContainer";
      paveiksliukasKonteineris.className = "imageContainer";
      konteineris.className = "bendrasContainer";
      konteineris.append(loginas);
      konteineris.append(paveiksliukasKonteineris);
      kunas.append(konteineris);
    });
  } catch (err) {
    console.error(err);
  }
}
function sukeltiDuomenys(robots) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  robots.forEach((robot) => {
    const id = document.createElement("td");
    id.innerText = robot.login;

    const img = document.createElement("img");
    img.src = robot.avatar_url;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const tr = document.createElement("tr");
    tr.append(id, image);
    tbody.append(tr);
  });
}
fetch(ENDPOINT)
  .then((result) => result.json())
  .then((output) => {
    //console.log('Output: ', output);
    sarasas = output;
  })
  .catch((err) => console.error(err));

const element = document.getElementById("btn");
element.addEventListener("click", printAll);

function printAll() {
  //sukurtiLentele();
  //sukeltiDuomenys(sarasas);
  document.getElementById("message").style.visibility = "hidden";
  sukeltiDuomenys2(sarasas);
}
