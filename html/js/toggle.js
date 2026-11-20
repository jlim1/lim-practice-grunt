// Changing the wrapper class makes the sidebar rules apply.
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
});
