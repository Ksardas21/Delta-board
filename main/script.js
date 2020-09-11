function darkMode(){
    document.body.classList.toggle("dark-theme");
}
function dropDown(){
    var options = document.getElementById("options")
    options.style.display == "block" ? options.style.display = "none" : 
    options.style.display = "block"; 
    options.classList.toggle("active")
}