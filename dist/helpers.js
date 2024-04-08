"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirs = exports.dateiEndungenErstellen = void 0;
const path = __importStar(require("node:path"));
const fs = __importStar(require("node:fs"));
function dateiEndungenErstellen(dirContent) {
    const extensions = new Set();
    for (let i = 0; i < dirContent.length; i++) {
        const fileName = dirContent[i];
        const fileExtension = path.extname(fileName);
        extensions.add(fileExtension);
    }
    return extensions;
}
exports.dateiEndungenErstellen = dateiEndungenErstellen;
function createDirs(folderPath, folderNames) {
    // Überprüfen, ob der Hauptordner existiert
    if (fs.existsSync(folderPath)) {
        // Wenn vorhanden, nichts tun
    }
    else {
        // Wenn nicht, erstellen
        fs.mkdirSync(folderPath);
    }
    // Durchlaufe die Liste der Ordnernamen
    for (const folderName of folderNames) {
        const folderFullPath = folderPath + '/' + folderName;
        // Überprüfen, ob der Ordner bereits existiert
        if (fs.existsSync(folderFullPath)) {
            console.log('Ordner "' + folderName + '" existiert bereits.');
        }
        else {
            // Wenn nicht, erstellen
            fs.mkdirSync(folderFullPath);
            console.log('Ordner "' + folderName + '" wurde erstellt.');
        }
    }
}
exports.createDirs = createDirs;
