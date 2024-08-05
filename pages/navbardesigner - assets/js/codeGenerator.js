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
    `.trim();
}

function generateCSS(settings) {
    return `
#customNavbar {
    background-color: ${settings.transparentNavbar ? 'transparent' : settings.navbarBackgroundColor};
    height: ${settings.navbarHeight}px;
    border-radius: ${settings.navbarBorderRadius}px;
    box-shadow: 0 0 ${settings.navbarShadowBlur}px ${settings.navbarShadowSpread}px rgba(0,0,0,${settings.navbarShadowOpacity});
}

#customNavbar .container {
    max-width: ${settings.containerMaxWidth}px;
    width: ${settings.fullWidthNavbar ? '100%' : settings.navbarWidth + '%'};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#customNavbar .logo img {
    height: ${settings.logoHeight}px;
    margin: ${settings.logoMargin}px;
}

#customNavbar .nav-items {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#customNavbar .nav-items li {
    margin: 0 ${settings.navItemsMargin}px;
}

#customNavbar .nav-items a {
    color: ${settings.navItemColor};
    font-size: ${settings.navItemFontSize}px;
    font-family: ${settings.navItemFontFamily};
    letter-spacing: ${settings.navItemLetterSpacing}px;
    text-decoration: none;
    transition: opacity 0.3s;
}

#customNavbar .nav-items a:hover {
    opacity: ${settings.navItemHoverOpacity};
    background-color: rgba(0,0,0,0.1);
    border-radius: ${settings.navItemHoverPillBorderRadius}px;
    padding: 5px 10px;
}

#customNavbar .cta-button {
    background-color: ${settings.ctaButtonColor};
    color: white;
    border: none;
    border-radius: ${settings.ctaButtonBorderRadius}px;
    padding: 10px 20px;
    margin: ${settings.ctaButtonMargin}px;
    cursor: pointer;
}

body {
    background-color: ${settings.pageBackgroundColor};
}
    `.trim();
}
