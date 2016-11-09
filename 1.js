
function checkPasswords() {
    
    var password1 = document.getElementById("pw1");
    var password2 = document.getElementById("pw2");
    if (password1.value !== password2.value) {
        console.log("111");
        password2.setCustomValidity('Passwords do not match'); } 
    else {console.log("22");
        password2.setCustomValidity(''); }
 	}

checkPasswords();

var colorInputField = document.querySelector("#colorChooser");
    
    colorInputField.addEventListener('input', function(evt) {      
        document.body.style.backgroundColor = this.value;
      }, false);

//window.onload = function(){ 
        
        var field = document.getElementById("db");
     
        field.oninput = function(evt) {
            var date = this.value;
            if(this.valueAsDate <= new Date()) {
                 console.log("birthdate is past");
                field.style.backgroundColor= "white";
            } else {
                console.log("birthdate in future");
                field.style.backgroundColor= "lightpink";
            }
        }
   // };
        
/*jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});*/

