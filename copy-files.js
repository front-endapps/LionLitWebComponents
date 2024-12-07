import fs from 'fs/promises';
import path from 'path';

// Calea către fișierul index.html rezultat după build
const indexPath = path.join(process.cwd(), 'dist', 'index.html');

async function updateIndexHtml() {
    try {
        const data = await fs.readFile(indexPath, 'utf8');

        const updatedData = data.replace(
            /<script type="module" src="\.\/src\/web-components.js"><\/script>/,
            '<script type="module" src="web-components.js"></script>'
        );

        await fs.writeFile(indexPath, updatedData, 'utf8');
        console.log('Fișierul index.html a fost actualizat cu succes!');
    } catch (err) {
        console.error('Eroare la procesarea fișierului index.html:', err);
    }
}

updateIndexHtml();
