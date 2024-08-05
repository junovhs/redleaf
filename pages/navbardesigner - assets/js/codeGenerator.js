import { getDesignerSettings } from './designer.js';

export function generateCode() {
    const settings = getDesignerSettings();
    const htmlCode = generateHTML(settings);
    const cssCode = generateCSS(settings);
    
    const fullCode = `
<!-- HTML -->
${htmlCode}

<!-- CSS -->
<style>
${cssCode}
</style>
    `;
    
    document.getElementById('codeOutput').textContent = fullCode;
}

function generateHTML(settings) {
    return `
<nav id="customNavbar">
    <div class="container">
        <a href="#" class="logo">
            ${settings.logoUrl ? `<img src="${settings.logoUrl}" alt="Logo">` : 'Logo'}
        </a>
        <ul class="nav-items">
            ${settings.menuItems.map(item => `<li><a href="#">${item}</a></li>`).join('\n            ')}
        </ul>
        <button class="cta-button">CTA Button</button>
    </div>
</nav>
