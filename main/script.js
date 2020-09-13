function darkMode(){
  document.body.classList.toggle("dark-mode");
}
function dropDown(){
    var options = document.getElementById("options")
    options.classList.toggle("active")
}
window.onclick = function(event) {
    if (!event.target.matches(['.header-nav', '.profile-image', '.top-profile-name',
     '.dropdown-icon', '.top-profile-menu', '.setting-buttons', '.setting-icons', '.profile-parameters',])) {
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