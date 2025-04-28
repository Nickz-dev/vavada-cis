class BacklinksAPI {  
    constructor() {  
        // Моковые данные для разных типов страниц  
        this.mockData = {  
            'default': {  
                'any': [  
            
                ]  
            }  
        };  
    }  

    async getBacklinks(pageId, type) {  
        // Имитация задержки сети  
        await new Promise(resolve => setTimeout(resolve, 100));  

        try {  
            // Получаем специфичные ссылки для страницы и типа  
            let links = [];  
            
            // Добавляем специфичные ссылки для страницы если есть  
            if (this.mockData[pageId] && this.mockData[pageId][type]) {  
                links = [...links, ...this.mockData[pageId][type]];  
            }  

            // Добавляем дефолтные ссылки  
            if (this.mockData.default.any) {  
                links = [...links, ...this.mockData.default.any];  
            }  

            // Перемешиваем ссылки в каждой позиции  
            const shuffleArray = (array) => {  
                for (let i = array.length - 1; i > 0; i--) {  
                    const j = Math.floor(Math.random() * (i + 1));  
                    [array[i], array[j]] = [array[j], array[i]];  
                }  
                return array;  
            };  

            // Группируем по позициям и перемешиваем  
            const linksByPosition = links.reduce((acc, link) => {  
                if (!acc[link.position]) {  
                    acc[link.position] = [];  
                }  
                acc[link.position].push(link);  
                return acc;  
            }, {});  

            // Перемешиваем ссылки в каждой позиции  
            Object.keys(linksByPosition).forEach(position => {  
                linksByPosition[position] = shuffleArray(linksByPosition[position]);  
            });  

            // Собираем обратно в массив  
            const shuffledLinks = Object.values(linksByPosition).flat();  

            // Возвращаем не более 5 ссылок  
            return {  
                links: shuffledLinks.slice(0, 5)  
            };  
        } catch (error) {  
            console.error('Error in mock backlinks API:', error);  
            return {  
                links: []  
            };  
        }  
    }  

    // Метод для добавления новых беклинков (для тестирования)  
    addBacklink(pageId, type, link) {  
        if (!this.mockData[pageId]) {  
            this.mockData[pageId] = {};  
        }  
        if (!this.mockData[pageId][type]) {  
            this.mockData[pageId][type] = [];  
        }  
        this.mockData[pageId][type].push(link);  
    }  
}  

module.exports = BacklinksAPI;