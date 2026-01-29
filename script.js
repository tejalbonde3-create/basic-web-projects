document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let userData = {
        name: name,
        age: age,
        email: email
    };

    localStorage.setItem("userInfo", JSON.stringify(userData));

    document.getElementById("output").innerText =
        "Data Saved Successfully!";
});
