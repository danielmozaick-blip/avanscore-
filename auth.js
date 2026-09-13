// =========================================================
// AVANSCORE — AUTHENTIFICATION ET SÉCURITÉ ADMIN
// Analysez. Anticipez. Décidez.
// =========================================================

const ADMIN_EMAIL = "danielmozaick@gmail.com";
const ADMIN_UID = "1hZUciu6kAdyzdFoQNeLkfXVCFt1";

auth.onAuthStateChanged(function(user) {

    if (user) {

        if (user.uid === ADMIN_UID) {

            console.log("Administrateur authentifié :", user.email);

            document.body.classList.add("admin-authenticated");

            if (window.location.pathname.includes("admin.html")) {
                document.body.classList.add("admin-access-granted");
            }

        } else {

            console.log("Utilisateur connecté :", user.email);

            if (window.location.pathname.includes("admin.html")) {
                alert("Accès refusé. Vous n'êtes pas l'administrateur.");
                window.location.href = "index.html";
            }
        }

    } else {

        console.log("Aucun utilisateur connecté.");

        if (window.location.pathname.includes("admin.html")) {
            alert("Veuillez vous connecter pour accéder à cette page.");
            window.location.href = "login.html";
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
