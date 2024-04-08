# Dateisortierer

Ein handelt sich um ein Programm, welches Dateien in einem Verzeichnis nach ihrem Dateityp sortiert. Die Dateien werden in Unterordner verschoben, die nach ihrem Dateityp benannt sind.

Das Projekt soll helfen die Grundlagen von Node.js zu verstehen und zu vertiefen. Zusätzlich soll es die Grundlagen von TypeScript, .gitignore, try-catch, Import und Export von Modulen, package.json und npm vertiefen.

## Installation

Um eine .gitignore Datei zu erstellen, die die node_modules und das dist Verzeichnis ignoriert, kann folgender Befehl ausgeführt werden:

```bash
npx gitignore node
```

Um eine leere package.json Datei zu erstellen, kann folgender Befehl ausgeführt werden:

```bash
npm init
```

Um TypeScript zu installieren, kann folgender Befehl ausgeführt werden:

```bash
npm install typescript --save-dev
```

Um TypeScript zu konfigurieren, kann folgender Befehl ausgeführt werden:

```bash
npx tsc --init
```

### .gitignore

In der .gitignore Datei können Dateien und Verzeichnisse definiert werden, die von Git ignoriert werden sollen. Das spart Speicherplatz und sorgt dafür, dass keine unnötigen oder sensiblen Dateien in das Repository geladen werden.

### TypeScript Konfiguration

In der tsconfig.json Datei können die Einstellungen für TypeScript konfiguriert werden. Hier ein Beispiel:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"]
}
```

### package.json

In der package.json Datei können Informationen über das Projekt, wie Name, Version, Autor, Lizenz, Skripte, Abhängigkeiten und Entwicklungsabhängigkeiten, gespeichert werden. Die drei wichtigsten Felder sind hierbei `dependencies`, `devDependencies` und `scripts`.

In der `dependencies` können die Abhängigkeiten des Projekts gespeichert werden. Ohne diese Abhängigkeiten kann und wird unser Endprodukt nicht funktionieren.
In der `devDependencies` können die Abhängigkeiten gespeichert werden, die nur für die Entwicklung benötigt werden. Sie sollen uns die Entwicklung erleichtern.
In der `scripts` können Skripte gespeichert werden, die häufig verwendete Befehle speichern.

### npm Skripte

Skripte in der package.json Datei können verwendet werden, um häufig verwendete Befehle zu speichern. Somit müssen sie nicht jedes Mal neu eingegeben werden - ein klanghafter Befehl wie `npm run build` reicht aus.
Auch wenn der Befehl `npm run build` nicht viel kürzer ist als `tsc`, ist es dennoch von Vorteile die Befehle in der package.json Datei zu speichern, da sie so leichter wiederverwendet werden können. Wenn wir einen Blick in ein anderes Projekt werfen, kann der Build-Befehl anders lauten. Wenn wir jedoch immer `npm run build` verwenden, können wir sicher sein, dass der Build-Befehl immer gleich ist.

In der package.json Datei können npm Skripte definiert werden. Hier ein Beispiel:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

Mittels `npm run build` wird das TypeScript Projekt kompiliert und mittels `npm start` wird das kompilierte Projekt gestartet.

Wir können auch ein Skript definieren, welches das Projekt kompiliert und danach startet:

```json
{
  "scripts": {
    "dev": "npm run build && npm start"
  }
}
```

Durch das Hinzufügen eines Pakets namens `concurrently` können wir das Projekt noch weiter verbessern. `concurrently` ermöglicht es uns, mehrere Befehle gleichzeitig auszuführen. Installieren können wir das Paket wie folgt:

```bash
npm install concurrently --save-dev
```

Durch das Hinzufügen von `nodemon` können wir Dateiänderungen überwachen und das Projekt automatisch neu starten. Installieren können wir das Paket wie folgt:

```bash
npm install nodemon --save-dev
```

Nun können wir das `dev` Skript wie folgt definieren:

```json
{
  "scripts": {
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  }
}
```

### @types/node

Node.js stellt uns viele Funktionen zur Verfügung, die wir in TypeScript verwenden können. Allerdings sind diese Funktionen nicht in TypeScript definiert. Um TypeScript zu sagen, dass diese Funktionen existieren, können wir das Paket `@types/node` installieren:

```bash
npm install @types/node --save-dev
```

### node_modules

In dem node_modules Verzeichnis werden alle Abhängigkeiten des Projekts gespeichert. Es ist wichtig, dass dieses Verzeichnis nicht in das Repository geladen wird. Das Verzeichnis kann in der .gitignore Datei ignoriert werden.

## Anforderungen

- Das Programm soll in der Lage sein, Dateien in einem Verzeichnis zu lesen.
- Das Programm soll in der Lage sein, Dateien in einem Verzeichnis zu kopieren.
- Die Unterordner sollen nach dem Dateityp benannt sein.

## Optionale Anforderungen

- Das Programm soll in der Lage sein leere Dateien zu erstellen.
- Das Programm soll in der Lage sein, Dateien in Unterordner zu verschieben.
- Das Programm soll in der Lage sein, Dateien nach ihrem Dateityp zu sortieren.
- Das Programm soll in der Lage sein, Dateien in einem Verzeichnis zu löschen.

## Sonstiges

### try-catch

In JavaScript können Fehler mittels `try-catch` abgefangen werden. Hier ein Beispiel:

```javascript
try {
  // Code, der einen Fehler werfen könnte
} catch (error) {
  // Fehlerbehandlung
}
```