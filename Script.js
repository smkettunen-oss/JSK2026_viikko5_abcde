const nimi = "Sari";

console.log("Hei " + nimi + "! JavaScript toimii.");
let ika = 18;

if (ika >= 18) {
    console.log("Olet täysi-ikäinen.");
} else {
    console.log("Olet alaikäinen.");
}
function laskeAlennus(hinta) {
    const alennettuHinta = hinta * 0.9;
    return alennettuHinta;
}

console.log("Alennettu hinta on " + laskeAlennus(100) + " euroa.");

const harrastukset = ["Matkailu", "Pyöräily", "Lenkkeily"];

harrastukset.forEach(function(harrastus) {
    console.log(harrastus);
});

function haeKoira() {
    const tulos = document.getElementById("koiratulos");

    tulos.innerHTML = "<p>Haetaan koirakuvia...</p>";

    fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            tulos.innerHTML = "";

            data.message.forEach(function(kuva) {
                tulos.innerHTML +=
                    '<img src="' + kuva + '" alt="Satunnainen koirakuva">';
            });
        })
        .catch(error => {
            tulos.innerHTML = "<p>Kuvien hakeminen epäonnistui.</p>";
            console.log("Virhe:", error);
        });
}
function naytaViesti() {
    alert("Kiitos klikkauksesta!");
}