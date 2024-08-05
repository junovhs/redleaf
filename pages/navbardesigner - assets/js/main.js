import { initDesigner } from './designer.js';
import { generateCode } from './codeGenerator.js';
import { updatePreview } from './preview.js';

document.addEventListener('DOMContentLoaded', () => {
    initDesigner();
    document.getElementById('addMenuItem').addEventListener('click', addMenuItem);
});

function addMenuItem() {
    const menuItems = document.getElementById('menuItems');
    const itemCount = menuItems.children.length;
    
    const menuItem = document.createElement('div');
    menuItem.className = 'menuItem';
    menuItem.innerHTML = `
        <input type="text" placeholder="Menu item ${itemCount + 1}">
        <button onclick="this.parentElement.remove()">Remove</button>
    `;
    
    menuItems.appendChild(menuItem);
    updatePreviewAndCode();
}

function updatePreviewAndCode() {
    updatePreview();
    generateCode();
}

// Expose the function globally for the onclick event
window.addMenuItem = addMenuItem;
