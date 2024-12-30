// Flag which will keep trace of the state of the password viewer
let view = false;

// Get the password viewer element and its relative input field
const passwordViewer = document.querySelector("#passwordViewer"); 
const passwordField = document.querySelector("#password");

// Add an event listener to the password viewer so that the
// user can potentially view plainly its password while typing
passwordViewer.addEventListener("click", () => {
    if(!view){
        passwordViewer.setAttribute("name","eye-outline");
        changeFieldAppearance("text","");
        view = true;
    } else {
        passwordViewer.setAttribute("name","eye-off-outline");
        changeFieldAppearance("password","........");
        view = false;
    }
});

// Change the appearance to the input field, changing its type
// and placeholder
function changeFieldAppearance(type, placeholder){
    passwordField.setAttribute("type",type);
    passwordField.setAttribute("placeholder",placeholder);
}