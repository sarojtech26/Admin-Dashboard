const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    if (email === "admin@gmail.com" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password!");
    }
});
