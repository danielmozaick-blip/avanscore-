// =========================================================
// AVANSCORE — AUTHENTIFICATION ET SÉCURITÉ ADMIN
// Analysez. Anticipez. Décidez.
// =========================================================

const ADMIN_EMAIL = "danielmozaick@gmail.com";
const ADMIN_UID = "1hZUciu6kAdyzdFoQNeLkfXVCFt1";

auth.onAuthStateChanged(function(user) {

    if (user && user.uid === ADMIN_UID) {

        console.log("Administrateur authentifié :", user.email);

        document.body.classList.add("admin-authenticated");

        var lienAdmin = document.getElementById("lienAdmin");
        if (lienAdmin) {
            lienAdmin.style.display = "flex";
        }

    } else {

        console.log("Aucun admin connecté.");

        if (window.location.pathname.includes("admin.html")) {
            alert("Accès refusé.");
            window.location.href = "index.html";
        }
    }
});


function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

function logoutUser() {
    return auth.signOut();
}
