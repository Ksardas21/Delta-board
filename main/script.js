function darkMode(){
    document.body.classList.toggle("dark-theme");
}
function dropDown(){
    var options = document.getElementById("options")
    options.classList.toggle("active")
}
window.onclick = function(event) {
    if (!event.target.matches(['.header-nav', '.profile-image', '.top-profile-name', '.dropdown-icon'])) {
      var dropdowns = document.getElementsByClassName("top-profile-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
  }