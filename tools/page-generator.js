const fs = require("fs");
const path = require("path");
const BacklinksManager = require("./backlinks-manager");

class PageGenerator {
  constructor(options = {}) {
    this.template = options.template || "default";
    this.outputDir = options.outputDir || "dist";
    this.config = options.config || {};
    this.assets = options.assets || {};
    this.backlinksManager = new BacklinksManager();
  }

  generateMetaTags(pageData) {
    const siteName = "Vavada Casino";
    const defaultImage = "/og-image.jpg";

    return `  
            <!-- Basic Meta Tags -->  
            <meta charset="UTF-8">  
            <meta name="viewport" content="width=device-width, initial-scale=1.0">  
            <meta name="description" content="${pageData.description}">  
            <meta name="keywords" content="${pageData.keywords}">  
            <meta name="author" content="${siteName}">  
            <meta name="robots" content="index, follow">  
            
            <!-- Canonical URL -->  
            <link rel="canonical" href="${pageData.canonical}">  

            <!-- Open Graph Meta Tags -->  
            <meta property="og:type" content="website">  
            <meta property="og:title" content="${pageData.title}">  
            <meta property="og:description" content="${pageData.description}">  
            <meta property="og:url" content="${pageData.canonical}">  
            <meta property="og:image" content="${
              pageData.ogImage || defaultImage
            }">  
            
            <!-- Twitter Card Meta Tags -->  
            <meta name="twitter:card" content="summary_large_image">  
            <meta name="twitter:title" content="${pageData.title}">  
            <meta name="twitter:description" content="${
              pageData.description
            }">  
            <meta name="twitter:image" content="${
              pageData.ogImage || defaultImage
            }">  
            
            <!-- Additional Meta Tags -->  
            <meta name="mobile-web-app-capable" content="yes">  
            <meta name="apple-mobile-web-app-capable" content="yes">  
            <meta name="apple-mobile-web-app-title" content="${siteName}">  
            <meta name="application-name" content="${siteName}">  
            <meta name="theme-color" content="#ffffff">  
            
            ${this.generateAlternateLinks(pageData)}  
        `;
  }

  generateAlternateLinks(pageData) {
    let links = "";

    // Home link для зеркал
    if (pageData.homeLink) {
      links += `<link rel="home" href="${pageData.homeLink}">`;
    }

    // Hreflangs
    if (pageData.hreflangs) {
      Object.entries(pageData.hreflangs).forEach(([lang, url]) => {
        links += `<link rel="alternate" hreflang="${lang}" href="${url}">`;
      });
    }

    return links;
  }

  generateFaviconTags() {
    return `  
        <!-- Favicons -->  
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">  
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">  
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">  
        <link rel="manifest" href="/site.webmanifest">  
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">  
        <meta name="msapplication-TileColor" content="#da532c">  
        <meta name="theme-color" content="#ffffff">  
    `;
  }

  generateBotDetectionScript(mountId) {
    return `  
            <script>  
                function detectBot() {  
                    const botPatterns = [  
                        "bot",  
                        "spider",  
                        "crawler",  
                        "googlebot",  
                        "bingbot",  
                        "yandex",  
                        "baidu",  
                        "duckduckbot",  
                        "slurp",  
                        "mediapartners-google",  
                    ];  

                    const userAgent = navigator.userAgent.toLowerCase();  
                    return botPatterns.some((pattern) => userAgent.includes(pattern));  
                }  

                function handleRootDiv() {  
                    const isBot = detectBot();  
                    const content = document.querySelector("#${mountId}");  

                    if (content) {  
                        if (isBot) {  
                            const parentElement = content.parentElement;  
                            while (content.firstChild) {  
                                parentElement.insertBefore(content.firstChild, content);  
                            }  
                            parentElement.removeChild(content);  
                        }  
                    }  
                }  

                document.addEventListener("DOMContentLoaded", handleRootDiv);  
                window.addEventListener("load", handleRootDiv);  
            </script>  
        `;
  }

  generateSchemaMarkup(pageData) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Vavada",
      url: pageData.canonical,
      potentialAction: {
        "@type": "SearchAction",
        target: `${pageData.canonical}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    if (pageData.type === "game") {
      schema["@type"] = "Game";
      schema.provider = {
        "@type": "Organization",
        name: "Vavada Casino",
      };
    }

    return `  
            <script type="application/ld+json">  
                ${JSON.stringify(schema, null, 2)}  
            </script>  
        `;
  }

  generatePerformanceOptimization() {
    return `  
        <!-- Preconnect to required origins -->  
        <link rel="preconnect" href="https://cdn.tailwindcss.com">  
        
        <!-- Preload critical assets -->  
        <link rel="preload" href="${this.assets["runtime"]}" as="script">  
        <link rel="preload" href="${this.assets["vendors"]}" as="script">  
        
        <!-- DNS prefetch -->  
        <link rel="dns-prefetch" href="//cdn.tailwindcss.com">  
    `;
  }

  getScriptTags() {
    // Получаем скрипты в правильном порядке
    const scripts = [];

    if (this.assets["runtime"]) {
      scripts.push(
        `<script defer="defer" src="/${this.assets["runtime"]}"></script>`
      );
    }

    if (this.assets["vendors"]) {
      scripts.push(
        `<script defer="defer" src="/${this.assets["vendors"]}"></script>`
      );
    }

    if (this.assets["casino"]) {
      scripts.push(
        `<script defer="defer" src="/${this.assets["casino"]}"></script>`
      );
    }

    return scripts.join("\n");
  }

  generateBasePage(pageData) {
    const mountId = pageData.mountId || this.config.mountId || "vavada";
    const dataLink =
      pageData.dataLink ||
      this.config.defaultLink ||
      "https://partnervavadarv.com/?promo=0a20713e-f26a-491b-853c-b92607f104dd&target=register";

    return `  
        <!DOCTYPE html>  
        <html lang="ru">  
        <head>  
            ${this.generateMetaTags(pageData)}  
            <title>${pageData.title}</title>  
            
            <!-- Favicon -->  
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">  
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">  
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">  
            <link rel="manifest" href="/site.webmanifest">  
            
            <!-- Styles -->  
            <script src="https://cdn.tailwindcss.com"></script>  
            ${pageData.additionalStyles || ""}  

            <!-- Bot Detection -->  
            ${this.generateBotDetectionScript(mountId)}  
        </head>  
        <body class="bg-gray-100">  
            <!-- React Mount Point with Data Link -->  
            <div class="container mx-auto px-4 py-8 max-w-7xl"  
                 id="${mountId}"  
                 data-link="${dataLink}">  
                <!-- Static Content -->  
                ${pageData.staticContent || ""}  
            </div>  

            <!-- Page Configuration -->  
            <script>  
                window.PAGE_CONFIG = {  
                    pageId: "${pageData.id}",  
                    type: "${pageData.type}",  
                    mountId: "${mountId}",  
                    environment: "${process.env.NODE_ENV}",  
                    dataLink: "${dataLink}"  
                };  
            </script>  

            <!-- Webpack Bundles -->  
            ${this.getScriptTags()}  
        </body>  
        </html>  
    `;
  }

  generateMirrorCheckScript() {
    return `  
        <script>  
            const domains = [  
                '${this.config.defaultDomain}',  
                ${(this.config.mirrors || [])
                  .map((mirror) => `'${mirror}'`)
                  .join(",\n")}  
            ];  

            async function checkAvailability() {  
                for (const domain of domains) {  
                    try {  
                        const response = await fetch(\`https://\${domain}/check-availability\`);  
                        if (response.ok) {  
                            return domain;  
                        }  
                    } catch (error) {  
                        console.log(\`Domain \${domain} is not available\`);  
                    }  
                }  
                return null;  
            }  

            async function switchToAvailableMirror() {  
                const availableDomain = await checkAvailability();  
                if (availableDomain && window.location.hostname !== availableDomain) {  
                    window.location.href = \`https://\${availableDomain}\${window.location.pathname}\`;  
                }  
            }  

            // Проверяем доступность каждые 30 секунд  
            setInterval(switchToAvailableMirror, 30000);  
            // Проверяем при загрузке страницы  
            document.addEventListener('DOMContentLoaded', switchToAvailableMirror);  
        </script>  
    `;
  }

  async generateBasePage(pageData) {
    // Получаем беклинки
    const backlinks = await this.backlinksManager.getBacklinksHtml(
      pageData.id,
      pageData.type
    );

    // Добавляем беклинки в контент
    const contentWithBacklinks = this.backlinksManager.insertBacklinks(
      pageData.staticContent,
      backlinks
    );

    const mountId = pageData.mountId || this.config.mountId || "gama";

    return `  
        <!DOCTYPE html>  
        <html lang="ru">  
        <head>  
            ${this.generateMetaTags(pageData)}  
            <title>${pageData.title}</title>  
            
            <!-- Favicons -->  
            ${this.generateFaviconTags()}  
            
            <!-- Styles -->  
            <script src="https://cdn.tailwindcss.com"></script>  
            ${pageData.additionalStyles || ""}  

            <!-- Bot Detection -->  
            ${this.generateBotDetectionScript(mountId)}  

            <!-- Mirror Check -->  
            ${this.generateMirrorCheckScript()}  
        </head>  
        <body class="bg-gray-100">  
            <!-- React Mount Point with Data Link -->  
            <div class="container mx-auto px-4 py-8 max-w-7xl"   
                 id="${mountId}"   
                 data-link="${pageData.dataLink}">  
                <!-- Static Content with Backlinks -->  
                ${contentWithBacklinks}  
            </div>  

            <!-- Page Configuration -->  
            <script>  
                window.PAGE_CONFIG = {  
                    pageId: "${pageData.id}",  
                    type: "${pageData.type}",  
                    mountId: "${mountId}",  
                    environment: "${process.env.NODE_ENV}"  
                };  
            </script>  

            <!-- Webpack Bundles -->  
            ${this.getScriptTags()}  
        </body>  
        </html>  
    `;
  }

  async generatePages(pages) {
    for (const page of pages) {
      const htmlContent = await this.generateBasePage(page);
      const outputPath = path.join(this.outputDir, `${page.filename}.html`);

      fs.writeFileSync(outputPath, htmlContent);
    }
  }
}

module.exports = PageGenerator;
