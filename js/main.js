let btnStudent = document.getElementById('btn');
let ui = new firebaseui.auth.AuthUI(firebase.auth());

btnStudent.onclick = function () {

}

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ]
});
/ Is there an email link sign-in?
if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
}
// This can also be done via:
if ((firebase.auth().isSignInWithEmailLink(window.location.href)) {
    ui.start('#firebaseui-auth-container', uiConfig);
}
