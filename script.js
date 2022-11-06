//TP1
const paises = [];
paises.push("Brasil", "EUA", "Canadá", "Japão", "China");
console.log(paises);

const printPaises1 = document.getElementById("printPaises1");
printPaises1.innerText = paises;

//TP2
const paises2 = [...paises];
paises2.splice(1, 1, "Panamá")
console.log(paises2);

const printPaises2 = document.getElementById("printPaises2");
printPaises2.innerText = paises2.length;
printPaises2.innerHTML += "<br>";
printPaises2.innerHTML += paises2;