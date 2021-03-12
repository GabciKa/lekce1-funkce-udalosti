// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */

let gratulace = "Gratulace, právě jsi spustila tuto funkci!";

function upozorni() {
  let obsah = document.querySelector(".ctverecek");
    obsah.textContent = gratulace;
    obsah.style.width = "400px";

  console.log(gratulace);
   alert(gratulace);
}

function zmenBarvu () {
  let squareElement = document.querySelector('.ctverecek');
  document.querySelector('.ctverecek').style.backgroundColor = 'green';
}

function vysledek () {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
