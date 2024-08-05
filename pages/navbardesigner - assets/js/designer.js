import { updatePreview } from './preview.js';
import { generateCode } from './codeGenerator.js';

export function initDesigner() {
    const controls = document.querySelectorAll('#designerControls input, #designerControls select');
    controls.forEach(control => {
        control.addEventListener('change', handleControlChange);
    });

    updatePreview();
    generateCode();
}

function handleControlChange() {
    updatePreview();
    generateCode();
}

export function getDesignerSettings() {
    return {
        containerMaxWidth: document.getElementById('containerMaxWidth').value,
        navbarWidth: document.getElementById('navbarWidth').value,
        fullWidthNavbar: document.getElementById('fullWidthNavbar').checked,
        navbarHeight: document.getElementById('navbarHeight').value,
        navbarBorderRadius: document.getElementById('navbarBorderRadius').value,
        navItemFontSize: document.getElementById('navItemFontSize').value,
        navItemLetterSpacing: document.getElementById('navItemLetterSpacing').value,
        navItemFontFamily: document.getElementById('navItemFontFamily').value,
        navItemHoverOpacity: document.getElementById('navItemHoverOpacity').value,
        navItemHoverPillBorderRadius: document.getElementById('navItemHoverPillBorderRadius').value,
        ctaButtonBorderRadius: document.getElementById('ctaButtonBorderRadius').value,
        navbarShadowBlur: document.getElementById('navbarShadowBlur').value,
        navbarShadowSpread: document.getElementById('navbarShadowSpread').value,
        navbarShadowOpacity: document.getElementById('navbarShadowOpacity').value,
        logoHeight: document.getElementById('logoHeight').value,
        logoMargin: document.getElementById('logoMargin').value,
        navItemsMargin: document.getElementById('navItemsMargin').value,
        ctaButtonMargin: document.getElementById('ctaButtonMargin').value,
        navbarBackgroundColor: document.getElementById('navbarBackgroundColor').value,
        navItemColor: document.getElementById('navItemColor').value,
        ctaButtonColor: document.getElementById('ctaButtonColor').value,
        logoUrl: document.getElementById('logoUrl').value,
        pageBackgroundColor: document.getElementById('pageBackgroundColor').value,
        transparentNavbar: document.getElementById('transparentNavbar').checked,
        menuItems: Array.from(document.querySelectorAll('#menuItems input')).map(input => input.value)
    };
}
