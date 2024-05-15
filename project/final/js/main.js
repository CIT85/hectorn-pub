const FORM = document.getElementById("form");

FORM.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Thank you for clicking submit!");
});