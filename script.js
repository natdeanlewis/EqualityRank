function validateForm() {
    let login = document.forms["login"];
    let username = login["username"].value;
    let password = login["password"].value;
    if (username == "organisation1" && password == "password1") {
        window.location.href = "./survey1.html";
        return false;
    } else if (username == "organisation2" && password == "password2") {
        window.location.href = "./survey2.html"; 
        return false;
    } else {
    alert("Login details incorrect");
    return true;
    }
}