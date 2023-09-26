var user_sign = document.querySelector("#text-user-signup");
var pass_sign = document.querySelector("#text-pass-signup");
var button_sign = document.querySelector(".button-signup");
var alert_signup = document.querySelector("#signup-msg");

var user_log = document.querySelector("#text-user-login"); 
var pass_log = document.querySelector("#text-pass-login");
var button_log = document.querySelector(".button-login"); 
var alert_login = document.querySelector("#login-msg");

var log_button = document.querySelector("#login_button");
var sign_button = document.querySelector("#signup_button");
const username = [];
const password = [];

button_sign.addEventListener("click", () => {
    if(user_sign.value !== "" && pass_sign.value !== "")
    {
        username.push(user_sign.value);
        password.push(pass_sign.value);
        alert_signup.innerHTML = "Account Created Successfully! Log In Now";
    }
    else 
        alert_signup.innerHTML = "Enter Username And Password";
});
button_log.addEventListener("click", () => {
    var c = true;
    if(user_log.value === "" || pass_log.value === "")
    {
        // alert_login.innerHTML = "Enter Username And Password";
        alert_login.innerHTML = "Please Enter Your " + (user_log.value === "" && pass_log.value === "" ? "Username And Password" : user_log.value === "" ? "Username" : pass_log.value === "" ? "Password" : "");
    }
    for(let i = 0; i < username.length; i++) {        
        if(username[i] === user_log.value && password[i] === pass_log.value)
        {
            // alert_login.innerHTML = "Signed In";
            window.open("Template 1/web.html", "_blank");
            c = false;
        }
    if(c && user_log.value !== "" && pass_log.value !== "")
        alert_login.innerHTML = "Enter Correct Username And Password";
}
});

log_button.addEventListener("click", (event) => {
    event.preventDefault();
    user_log.focus();
});

sign_button.addEventListener("click", (event) => {
    event.preventDefault();
    user_sign.focus();
});
