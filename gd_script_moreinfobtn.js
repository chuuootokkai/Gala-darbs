function openForm() {
    document.getElementById('form').style.display = "block";
  }
  
function closeForm() {
    document.getElementById('form').style.display = "none";
    document.getElementById('success').style.display = "none";
}
document.onkeydown = function(key) {
    key = key || window.event;
    
  if (key.keyCode == 27) {
    closeForm();
  }
  };

function alertForm(){
    let a = document.forms["Form"]["name"].value;
    let b = document.forms["Form"]["surname"].value;
    let c = document.forms["Form"]["email"].value;
    let d = document.forms["Form"]["message"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="")
    {
        alert("Lūdzu aizpildi visu pieprasīto informāciju!");
        return false;
    }
    else{
        document.getElementById('success').style.display = "block";
        setTimeout(closeForm, 20000);
        
    }

}