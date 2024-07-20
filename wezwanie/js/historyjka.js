"use strict";

function wstawWybory(wybory) {
  const miejsceNaWybory = document.querySelector("#wybory");
  miejsceNaWybory.innerHTML = "";
  for (const wybor of wybory) {
    const guzikWyboru = document.createElement("button");
    guzikWyboru.innerHTML = wybor.tekst;
    miejsceNaWybory.appendChild(guzikWyboru);
    guzikWyboru.addEventListener("click", () => {
      ustawWyświetlanąHistoryjkę(wybor.obiekt);
    });
  }
}

function ustawWyświetlanąHistoryjkę({ obrazek, narracja, wybory }) {
  document.querySelector("#obrazek").src = `./img/${obrazek}`;
  document.querySelector("#narracja").innerHTML = narracja;
  wstawWybory(wybory);
}

const ulica = {
  obrazek: "ulica.png",
  narracja:
    "Schodzę po schodach. Skrzypią. Jest parę minut po siódmej rano. Stresuję się, że sąsiadka będzie miała pretensję, że głośno tupię. Nie chcę nikomu przeszkadzać, chcę się usunąć każdemu z drogi. Wychodzę na ulicę. Jest chłodno. Zastanawiam się czy jak będę wychodził z baraku, to też będę czuł taki chłód na twarzy i czy będzie czas się nad tym zastanawiać. <br/><br/>Gdzie powinienem iść?",
  wybory: [],
};

const śniadanie = {
  obrazek: "jajko.png",
  narracja:
    "Dwa jaka na miękko, jem je w kieliszku. Na kieliszku jest namalowane jajko. Przypomina mi dzieciństwo. Tata nauczył mnie jeść jajka z kieliszka.",
  wybory: [],
};

const start = {
  obrazek: "wezwanie.png",
  narracja:
    "Dostałem wezwanie, mam się stawić na komisji do 17:00, albo mnie doprowadzą.",
  wybory: [
    { tekst: "Zjedz śniadanie", obiekt: śniadanie },
    { tekst: "Wyjdź bez śniadania", obiekt: ulica },
  ],
};

ustawWyświetlanąHistoryjkę(start);
