import * as path from 'node:path'
import * as fs from 'node:fs'


export function dateiEndungenErstellen(dirContent: string[]) {

    const extensions = new Set<string>();

    for(let i=0; i < dirContent.length; i++) {
        const fileName = dirContent[i]
        const fileExtension = path.extname(fileName)
        extensions.add(fileExtension)
    }

    return extensions
}

export function createDirs(folderPath: string, folderNames: string[]): void {
    // Überprüfen, ob der Hauptordner existiert
    if (fs.existsSync(folderPath)) {
        // Wenn vorhanden, nichts tun
    } else {
        // Wenn nicht, erstellen
        fs.mkdirSync(folderPath);
    }

    // Durchlaufe die Liste der Ordnernamen
    for (const folderName of folderNames) {
        const folderFullPath = folderPath + '/' + folderName;
     // Überprüfen, ob der Ordner bereits existiert
        if (fs.existsSync(folderFullPath)) {
            console.log('Ordner "' + folderName + '" existiert bereits.');
        } else {
            // Wenn nicht, erstellen
            fs.mkdirSync(folderFullPath);
            console.log('Ordner "' + folderName + '" wurde erstellt.');
        }
    }
}
