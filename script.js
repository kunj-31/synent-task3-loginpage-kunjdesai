const container = document.querySelector(".container");

const signupToggle = document.getElementById("signupToggle");
const loginToggle = document.getElementById("loginToggle");

signupToggle.addEventListener("click", () => {
    container.classList.add("active");
});

loginToggle.addEventListener("click", () => {
    container.classList.remove("active");
});


const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    signupError.style.color = "red";

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 3){
        signupError.textContent =
            "Name must be at least 3 characters.";
        return;
    }

    if(!emailRegex.test(email)){
        signupError.textContent =
            "Enter a valid email address.";
        return;
    }

    if(password.length < 8){
        signupError.textContent =
            "Password must be at least 8 characters.";
        return;
    }

    if(password !== confirmPassword){
        signupError.textContent =
            "Passwords do not match.";
        return;
    }

    signupError.style.color = "green";
    signupError.textContent =
        "Signup successful!";

    signupForm.reset();
});


const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    loginError.style.color = "red";

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        loginError.textContent =
            "Enter a valid email address.";
        return;
    }

    if(password.length < 8){
        loginError.textContent =
            "Password must be at least 8 characters.";
        return;
    }

    loginError.style.color = "green";
    loginError.textContent =
        "Login successful!";

    loginForm.reset();
});


document
.getElementById("forgotPassword")
.addEventListener("click",(e)=>{
    e.preventDefault();

    const email = prompt(
        "Enter your registered email:"
    );

    if(email){
        alert(
            "Password reset link sent to: " + email
        );
    }
});