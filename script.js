document.addEventListener("DOMContentLoaded", function() {
 const links = document.querySelectorAll("a[href^='#'");

  links.forEach(links => {
  links.addEventListener("click", function (event) {
   event.preventDefault();
   const targetId = this.getAttribute("href").substring(1);
   const taregetElement = document.getElementById(targetId);

   if (taregetElement){
    window.scrollTo({
            top: taregetElement.offsetTop - 50,
            behavior:"smooth"
         });
        }
     });
   });
});