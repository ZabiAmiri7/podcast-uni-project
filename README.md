# Podcast-Uni-Projekt

Eine Webanwendung zum Abonnieren und Durchsuchen von Podcast-Feeds.

## Verzeichnisstruktur

```
├── podcast/
│   ├── v0/                    # Static-HTML-Prototyp (clientseitig)
│   │   ├── index.html         # Startseite
│   │   ├── podcast.html       # Podcast-Detailseite
│   │   ├── episode.html       # Episoden-Detailseite
│   │   ├── newPodcast.html    # Neuen Podcast abonnieren
│   │   └── assets/            # Audio, CSS, Bilder, JavaScript
│   │
│   └── v1/                    # Express.js-Version (serverseitig)
│       ├── app.js             # Express-Server (Port 8020)
│       ├── routes/
│       │   └── routes.js      # Routen: /, /podcast, /episode, /subscribe
│       ├── models/
│       │   ├── persistence.js # Datenmodell & Speicherung
│       │   └── podcastParser.js # Feed-Parser mit Datei-Cache
│       ├── views/             # EJS-Templates
│       │   ├── index.ejs      # Podcast-Liste
│       │   ├── podcast.ejs    # Podcast-Detail
│       │   ├── episode.ejs    # Episoden-Detail
│       │   ├── error.ejs      # Fehlerseite
│       │   ├── header.ejs     # Header-Partial
│       │   └── footer.ejs     # Footer-Partial
│       ├── public/            # Statische Dateien (CSS, JS, Bilder)
│       └── test/
│           └── test.js        # Test-Skript mit eigenem HTTP-Server (Port 8844)
│
├── cache/                     # Gecachte Feed-Daten (JSON)
├── package.json               # Abhängigkeiten (express, ejs, podcast-feed-parser)
└── Podcast-app.code-workspace # VS-Code-Workspace
```

## Ausführung

### 1. Abhängigkeiten installieren

```bash
npm install
```

### 2. v1 (Express-App) starten

```bash
node podcast/v1/app.js
```

Die Anwendung läuft dann auf **http://localhost:8020**.

- `GET /` – Alle abonnierten Podcasts anzeigen
- `GET /podcast?pc=<index>` – Podcast-Detailseite
- `GET /episode?pc=<index>&ep=<index>` – Episoden-Detailseite
- `POST /subscribe` – Neuen Podcast per Feed-URL abonnieren

### 3. Test-Skript ausführen

```bash
node podcast/v1/test/test.js
```

Startet einen einfachen HTTP-Server auf **http://localhost:8844**, der Testdaten („Syntax“ und „Working Draft“) anzeigt.

### v0 (statisch)

Die Dateien in `podcast/v0/` können direkt im Browser geöffnet werden (ohne Server).

## Technik

- **Runtime:** Node.js
- **Framework:** Express 5
- **Templating:** EJS
- **Feed-Parsing:** `podcast-feed-parser`
- **Caching:** Geparste Feeds werden als JSON-Dateien in `cache/` zwischengespeichert (1 Tag gültig)
