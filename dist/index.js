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
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const helpers_1 = require("./helpers");
// Step 1. List the contents of the folder.
const inhalteOrdner = fs.readdirSync('./input');
console.log(inhalteOrdner);
// Step 2. Identufy file types.
const endungen = (0, helpers_1.dateiEndungenErstellen)(inhalteOrdner);
console.log(endungen);
// Step 3. Sort files based on conditions.
endungen.forEach(endung => {
    try {
        fs.mkdirSync('./output/' + endung);
    }
    catch (e) {
        console.error("Das Verzeichnis existiert schon.");
    }
});
inhalteOrdner.forEach(file => {
    const ext = path.extname(file);
    try {
        fs.copyFileSync('./input/' + file, './output/' + ext + '/' + file);
    }
    catch (e) {
        console.error(e);
    }
});
