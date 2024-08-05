import { getDesignerSettings } from './designer.js';

export function updatePreview() {
    const preview = document.getElementById('navbarPreview');
    const settings = getDesignerSettings();
    
    preview.innerHTML = generateNavbarHTML(settings);
    applyStyles(settings);
}

function generateNavbarHTML(settings) {
    return `
        <nav id="previewNavbar">
            <div class="container">
                <a href="#" class="logo">
                    ${settings.logoUrl ? `<img src="${settings.logoUrl}" alt="Logo">` : 'Logo'}
                </a>
                <ul class="nav-items">
                    ${settings.menuItems.map(item => `<li><a href="#">${item}</a></li>`).join('')}
                </ul>
                <button class="cta-button">CTA Button</button>
            </div>
        </nav>
    `;
}

function applyStyles(settings) {
    const style = document.createElement('style');
    style.textContent = `
        #previewNavbar {
            background-color: ${settings.transparentNavbar ? 'transparent' : settings.navbarBackgroundColor};
            height: ${settings.navbarHeight}px;
            border-radius: ${settings.navbarBorderRadius}px;
            box-shadow: 0 0 ${settings.navbarShadowBlur}px ${settings.navbarShadowSpread}px rgba(0,0,0,${settings.navbarShadowOpacity});
        }
        #previewNavbar .container {
            max-width: ${settings.containerMaxWidth}px;
            width: ${settings.fullWidthNavbar ? '100%' : settings.navbarWidth + '%'};
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        #previewNavbar .logo img {
            height: ${settings.logoHeight}px;
            margin: ${settings.logoMargin}px;
        }
        #previewNavbar .nav-items {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        #previewNavbar .nav-items li {
            margin: 0 ${settings.navItemsMargin}px;
        }
        #previewNavbar .nav-items a {
            color: ${settings.navItemColor};
            font-size: ${settings.navItemFontSize}px;
            font-family: ${settings.navItemFontFamily};
            letter-spacing: ${settings.navItemLetterSpacing}px;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        #previewNavbar .nav-items a:hover {
            opacity: ${settings.navItemHoverOpacity};
            background-color: rgba(0,0,0,0.1);
            border-radius: ${settings.navItemHoverPillBorderRadius}px;
            padding: 5px 10px;
        }
        #previewNavbar .cta-button {
            background-color: ${settings.ctaButtonColor};
            color: white;
            border: none;
            border-radius: ${settings.ctaButtonBorderRadius}px;
            padding: 10px 20px;
            margin: ${settings.ctaButtonMargin}px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}
