import algoliasearch from 'algoliasearch';
import { globby } from 'globby';
import fs from 'fs/promises';
import { convert } from 'html-to-text';
import path from 'path';

// --- CONFIGURAZIONE ---
const APP_ID = 'IL_TUO_APP_ID';
const ADMIN_KEY = 'LA_TUA_ADMIN_API_KEY'; // Attenzione: usa la ADMIN key, non la Search key
const INDEX_NAME = 'documentazione_veryant';
const SITE_URL = 'https://docs.veryant.com'; // Il tuo dominio futuro

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex(INDEX_NAME);

async function uploadToAlgolia() {
  try {
    console.log('--- Inizio indicizzazione locale per Algolia AI ---');

    // 1. Trova tutti i file HTML nella cartella di build di VitePress
    const files = await globby('docs/.vitepress/dist/**/*.html', {
      ignore: ['**/404.html', '**/dist/assets/**']
    });

    if (files.length === 0) {
      console.error('❌ Nessun file trovato in docs/.vitepress/dist. Hai eseguito "npm run build"?');
      return;
    }

    const records = await Promise.all(files.map(async (file) => {
      const htmlContent = await fs.readFile(file, 'utf-8');
      
      // 2. Converte HTML in testo pulito per l'IA
      const text = convert(htmlContent, {
        wordwrap: false,
        selectors: [
          { selector: 'nav', format: 'skip' }, // Esclude la barra di navigazione
          { selector: 'aside', format: 'skip' }, // Esclude la sidebar
          { selector: 'footer', format: 'skip' }, // Esclude il footer
          { selector: 'a', options: { ignoreHref: true } }
        ]
      });

      // 3. Crea il percorso URL pulito
      // docs/.vitepress/dist/index.html -> /
      // docs/.vitepress/dist/guida/installazione.html -> /guida/installazione.html
      let relativePath = file
        .replace('docs/.vitepress/dist', '')
        .replace(/index\.html$/, '');

      return {
        objectID: relativePath, // ID univoco per Algolia
        title: path.basename(file, '.html'),
        content: text.substring(0, 8000), // Algolia ha un limite di dimensione per record
        url: `${SITE_URL}${relativePath}`,
        lastUpdated: new Date().toISOString()
      };
    }));

    // 4. Invia i dati ad Algolia
    console.log(`Inviando ${records.length} pagine ad Algolia...`);
    const { objectIDs } = await index.saveObjects(records);
    
    console.log(`✅ Successo! ${objectIDs.length} record indicizzati.`);
    console.log(`L'assistente AI ora può rispondere basandosi su questi dati utilizzando ${SITE_URL} come base.`);

  } catch (error) {
    console.error('❌ Errore durante il caricamento:', error);
  }
}

uploadToAlgolia();