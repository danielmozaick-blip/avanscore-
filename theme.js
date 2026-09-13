// =========================================================
// AVANSCORE — GESTION DES THÈMES
// Analysez. Anticipez. Décidez.
// =========================================================

const themes = [
    "obsidian",
    "nuit",
    "bleu-nuit"
];

function applyTheme(theme) {

    if (!themes.includes(theme)) {
        theme = "obsidian";
    }

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("avanscore-theme", theme);

    var user = auth.currentUser;

    if (user) {
        db.collection("users").doc(user.uid).update({
            theme: theme
        })
        .catch(function(error) {
            console.error("Erreur sauvegarde thème :", error);
        });
    }
}

function loadTheme() {

    var savedTheme = localStorage.getItem("avanscore-theme");

    if (!savedTheme) {
        savedTheme = "obsidian";
    }

    applyTheme(savedTheme);
}

loadTheme();