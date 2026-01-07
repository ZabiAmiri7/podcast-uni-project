// index.js
const btn = document.getElementById("listenansicht");

btn.addEventListener("click", () => {
  btn.textContent = "Listenansicht";

  // Array mit allen li-IDs + Bildinfos
  const items = [
    { id: "erste", img: "./assets/img/morning.png", alt: "Morning Briefing Logo" },
    { id: "zweite", img: "./assets/img/logo-byte.webp", alt: "Byte Logo" },
    { id: "dritte", img: "./assets/img/logo-quark-daily.webp", alt: "Quark Daily Logo" },
    { id: "vierte", img: "./assets/img/logo-sternstunde-philosophie.webp", alt: "Sternstunde Philosophie Logo" },
    { id: "fünfte", img: "./assets/img/logo-passwort.webp", alt: "Passwort Logo" }
  ];

  items.forEach(item => {
    const li = document.getElementById(item.id);
    if (!li) return; // Sicherheit

    // Alten Link + Text
    const aOld = li.querySelector("a");
    if (!aOld) return;
    const text = aOld.textContent.trim();

    // Neues <a> + <figure>
    const a = document.createElement("a");
    a.href = "#";

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;
    img.width = 150;
    img.height = 150;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = text;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    a.appendChild(figure);

    // Alten Link ersetzen
    li.replaceWith(a);
  });
});
