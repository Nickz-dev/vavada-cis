const path = require('path');  
const SitemapGenerator = require('./generate-sitemap');  

class SitemapWebpackPlugin {  
    constructor(options = {}) {  
        this.options = {  
            ...options,  
            publicDir: path.resolve(options.publicDir || 'public'),  
            outputPath: path.resolve(options.outputPath || 'dist/sitemap.xml')  
        };  
    }  

    apply(compiler) {  
        compiler.hooks.afterEmit.tapAsync(  
            'SitemapWebpackPlugin',  
            (compilation, callback) => {  
                const generator = new SitemapGenerator(this.options);  
                generator.generateSitemap();  
                callback();  
            }  
        );  
    }  
}  

module.exports = SitemapWebpackPlugin;