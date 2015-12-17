
$(document).ready(function() {
    $('.navbar-toggle').on("click", function() {
        $('.navbar-toggle').toggleClass('navbar-toggle-visible');
        $('.mobile-menu-wrapper').toggleClass('mobile-menu-wrapper--visible');
})});
$(function() {
         $(".courses .cosede").click(function() {
             $(this).removeClass("active");         
             $(this).toggleClass("active");
         })
    });
window.addEventListener("scroll", reload);
function reload()
{
    pos = bl.getBoundingClientRect().top + pageYOffset;
clay();
}
document.addEventListener("scroll", clay);
var bl = document.getElementById("clayBlock");

var pos = bl.getBoundingClientRect().top + pageYOffset;
clay();
function clay() {
    if(scrollY >= pos)
    {
        bl.classList.add("clay");
    }
    else
    {
        bl.classList.remove("clay");
    }
}