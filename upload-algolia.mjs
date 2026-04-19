import algoliasearch from 'algoliasearch';
import { globby } from 'globby';
import fs from 'fs/promises';
import { convert } from 'html-to-text';
import path from 'path';
import 'dotenv/config'; 

// --- CONFIGURAZIONE ---
// Questi leggono i valori dal tuo file .env
const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;
// Legge il sito dal file .env, se non c'è usa un default
const SITE_URL = process.env.SITE_URL || 'https://docs.veryant.com';

// Inizializzazione corretta
const client = algoliasearch(appId, adminKey);
const index = client.initIndex(indexName);

async function uploadToAlgolia() {
  try {
    console.log('--- Inizio indicizzazione locale per Algolia AI ---');

    // Assicurati che questo percorso corrisponda a dove VitePress genera l'output
    const files = await globby('docs/.vitepress/dist/**/*.html', {
      ignore: ['**/404.html', '**/dist/assets/**']
    });

    if (files.length === 0) {
      console.error('❌ Nessun file trovato. Hai eseguito "npm run build" prima di questo script?');
      return;
    }

    const records = await Promise.all(files.map(async (file) => {
      const htmlContent = await fs.readFile(file, 'utf-8');
      
      const text = convert(htmlContent, {
        wordwrap: false,
        selectors: [
          { selector: 'nav', format: 'skip' },
          { selector: 'aside', format: 'skip' },
          { selector: 'footer', format: 'skip' },
          { selector: 'a', options: { ignoreHref: true } }
        ]
      });

      let relativePath = file
        .replace('docs/.vitepress/dist', '')
        .replace(/index\.html$/, '');

      return {
        objectID: relativePath || '/',
        title: path.basename(file, '.html'),
        content: text.substring(0, 8000),
        url: `${SITE_URL}${relativePath}`,
        lastUpdated: new Date().toISOString()
      };
    }));

    console.log(`Inviando ${records.length} pagine ad Algolia...`);
    await index.saveObjects(records);
    
    console.log(`✅ Successo! Dati caricati correttamente nell'indice: ${indexName}`);

  } catch (error) {
    console.error('❌ Errore durante il caricamento:', error);
  }
}

uploadToAlgolia();