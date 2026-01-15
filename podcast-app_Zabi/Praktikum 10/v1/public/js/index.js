// index.js
const btn = document.getElementById("listenansicht");
const abosList = document.getElementById("abos");

let isTileView = false; // 

// Speichere die Original-Daten beim Start
let podcastItems = [];

function initializePodcasts() {
  podcastItems = [];
  const listItems = abosList.querySelectorAll("li");
  
  listItems.forEach((li, index) => {
    const link = li.querySelector("a");
    if (!link) return;

    // Extrahiere Daten aus dem Link
    const img = link.querySelector("img");
    const span = link.querySelector("span");
    
    if (img && span) {
      podcastItems.push({
        index: index,
        href: link.href,
        imgSrc: img.src,
        imgAlt: img.alt,
        title: span.textContent.trim(),
        originalLink: link.cloneNode(true)
      });
    }
  });
}

function zeigeListenansicht() {
  const listItems = abosList.querySelectorAll("li");
  
  podcastItems.forEach((item, index) => {
    const li = listItems[index];
    if (!li) return;

    // Alle Kinder entfernen
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }

    // Original-Link zurückfügen (nur Text)
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.title;
    
    li.appendChild(a);
  });

  btn.textContent = "Kachelansicht";
  isTileView = false;
}

function zeigeKachelansicht() {
  const listItems = abosList.querySelectorAll("li");
  
  podcastItems.forEach((item, index) => {
    const li = listItems[index];
    if (!li) return;

    // Alle Kinder entfernen
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }

    // Neues <a> mit Bild und Text erstellen
    const a = document.createElement("a");
    a.href = item.href;

    // <img> erstellen
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.imgAlt;
    img.width = 150;
    img.height = 150;

    // <span> für Titel erstellen
    const span = document.createElement("span");
    span.textContent = item.title;

    // Zusammenbauen
    a.appendChild(img);
    a.appendChild(span);

    // In das <li> einfügen
    li.appendChild(a);
  });

  btn.textContent = "Listenansicht";
  isTileView = true;
}

// Event Listener
btn.addEventListener("click", () => {
  if (isTileView) {
    zeigeListenansicht();
  } else {
    zeigeKachelansicht();
  }
});

// Beim Laden initialisieren
document.addEventListener('DOMContentLoaded', () => {
  initializePodcasts();
  zeigeKachelansicht(); // Starte mit Kachelansicht
});