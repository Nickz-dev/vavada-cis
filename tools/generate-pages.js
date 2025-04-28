const fs = require('fs');  
const path = require('path');  
const PageGenerator = require('./page-generator');  
const pagesConfig = require('../config/pages');  

// Создаем директорию dist если её нет  
const distPath = path.join(__dirname, '../dist');  
if (!fs.existsSync(distPath)) {  
    fs.mkdirSync(distPath, { recursive: true });  
}  

try {  
    const generator = new PageGenerator({  
        outputDir: distPath,  
        config: pagesConfig  
    });  

    console.log('Starting page generation...');  
    generator.generatePages(pagesConfig.pages);  
    console.log('Pages generated successfully!');  

    // Выводим список сгенерированных страниц  
    pagesConfig.pages.forEach(page => {  
        console.log(`✓ Generated: ${page.filename}.html`);  
    });  
} catch (error) {  
    console.error('Error generating pages:', error);  
    process.exit(1);  
}