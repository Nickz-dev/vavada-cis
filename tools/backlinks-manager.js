class BacklinksManager {  
    constructor() {  
        this.api = new (require('../api/backlinks'))();  
    }  

    async getBacklinksHtml(pageId, type) {  
        try {  
            const { links } = await this.api.getBacklinks(pageId, type);  
            return links.map(link => {  
                const { url, text, position } = link;  
                return {  
                    html: `<a href="${url}" class="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">${text}</a>`,  
                    position  
                };  
            });  
        } catch (error) {  
            console.error('Error fetching backlinks:', error);  
            return [];  
        }  
    }  

    insertBacklinks(content, backlinks) {  
        let modifiedContent = content;  

        // Группируем беклинки по позициям  
        const linksByPosition = backlinks.reduce((acc, link) => {  
            if (!acc[link.position]) {  
                acc[link.position] = [];  
            }  
            acc[link.position].push(link.html);  
            return acc;  
        }, {});  

        // Вставляем ссылки в соответствующие позиции  
        Object.entries(linksByPosition).forEach(([position, links]) => {  
            const linksHtml = `<div class="backlinks-${position} my-4">${links.join(' • ')}</div>`;  
            
            switch(position) {  
                case 'content-top':  
                    modifiedContent = linksHtml + modifiedContent;  
                    break;  
                case 'content-middle':  
                    const midPoint = Math.floor(modifiedContent.length / 2);  
                    const insertPoint = modifiedContent.indexOf('</section>', midPoint);  
                    if (insertPoint !== -1) {  
                        modifiedContent = modifiedContent.slice(0, insertPoint) +   
                                        linksHtml +   
                                        modifiedContent.slice(insertPoint);  
                    }  
                    break;  
                case 'content-bottom':  
                    modifiedContent = modifiedContent + linksHtml;  
                    break;  
            }  
        });  

        return modifiedContent;  
    }  
}  

module.exports = BacklinksManager;