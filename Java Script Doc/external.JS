/* =====================================================
   External JavaScript (external.JS)
   Polished Version
===================================================== */

/*
This file is linked in index.HTML using:
<script src="external.JS" defer></script>

defer ensures:
✔ HTML loads first
✔ JS executes after DOM is ready
*/

/* -----------------------------------------------------
   1. Modify text using External JavaScript
----------------------------------------------------- */
const externalTextEl = document.querySelector(".externalJS");

if (externalTextEl) {
    externalTextEl.style.color = "#008000";
    externalTextEl.style.fontWeight = "bold";
    externalTextEl.textContent = "This text is updated using External JavaScript (external.JS)";
}

/* -----------------------------------------------------
   2. Console log indicator
----------------------------------------------------- */
console.log("external.JS loaded successfully!");

/* -----------------------------------------------------
   3. Reusable helper function: Highlight entire page
----------------------------------------------------- */
function highlightSection() {
    document.body.style.transition = "background 0.6s ease";
    document.body.style.backgroundColor = "#e1f3ff";

    setTimeout(() => {
        document.body.style.backgroundColor = "#ffffff";
    }, 1300);
}

/* -----------------------------------------------------
   4. Dynamic DOM example (bonus)
----------------------------------------------------- */
function addDynamicMessage() {
    const message = document.createElement("div");
    message.textContent = "This message was added dynamically with JavaScript!";
    message.style.margin = "15px 0";
    message.style.padding = "12px";
    message.style.background = "#eaf5ff";
    message.style.border = "1px solid #bdd9ff";
    message.style.borderRadius = "8px";
    message.style.fontWeight = "bold";

    document.body.appendChild(message);

    // Auto-remove after 5 seconds
    setTimeout(() => message.remove(), 5000);
}

/*
To use addDynamicMessage() from HTML:
<button onclick="addDynamicMessage()">Add Message</button>
*/
