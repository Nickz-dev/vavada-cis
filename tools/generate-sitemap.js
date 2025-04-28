const fs = require('fs');  
const path = require('path');  
const glob = require('glob');  

class SitemapGenerator {  
    constructor(options = {}) {  
        this.baseUrl = options.baseUrl || 'https://vavada-cis.com';  
        this.publicDir = options.publicDir || 'public';  
        this.outputPath = options.outputPath || 'public/sitemap.xml';  
        this.changefreq = options.changefreq || 'daily';  
        this.priority = options.priority || '0.8';  
    }  

    generateSitemap() {  
        const htmlFiles = glob.sync('**/*.html', {  
            cwd: this.publicDir,  
            ignore: ['**/node_modules/**']  
        });  

        const today = new Date().toISOString().split('T')[0];  

        const xmlUrls = htmlFiles.map(file => {  
            // Преобразуем путь файла в URL  
            const urlPath = file === 'index.html'   
                ? ''   
                : file.replace(/\.html$/, '');  

            return `  
    <url>  
        <loc>${this.baseUrl}/${urlPath}</loc>  
        <lastmod>${today}</lastmod>  
        <changefreq>${this.changefreq}</changefreq>  
        <priority>${this.priority}</priority>  
    </url>`;  
        }).join('');  

        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>  
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}  
</urlset>`;  

        // Создаем директорию, если она не существует  
        const dir = path.dirname(this.outputPath);  
        if (!fs.existsSync(dir)) {  
            fs.mkdirSync(dir, { recursive: true });  
        }  

        // Записываем sitemap  
        fs.writeFileSync(this.outputPath, sitemapContent);  
        console.log(`Sitemap generated at: ${this.outputPath}`);  
    }  
}  

// Экспортируем класс для использования в webpack  
module.exports = SitemapGenerator;  

// Если скрипт запущен напрямую  
if (require.main === module) {  
    const generator = new SitemapGenerator();  
    generator.generateSitemap();  
}