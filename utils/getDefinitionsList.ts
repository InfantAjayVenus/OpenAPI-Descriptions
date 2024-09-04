import { readdirSync } from "fs";
import { join } from "path";

const definitionsPath = join(process.cwd(), 'public', 'definitions');

export function getDefinitionsList() {

    return readdirSync(definitionsPath, { withFileTypes: true })
        .filter((fileEntry) => fileEntry.isFile())
        .map((fileItem) => fileItem.name.split('.').slice(0, -1).join('.'));
}