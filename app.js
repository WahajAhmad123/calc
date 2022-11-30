var display =document.getElementById("inp1")
function abc(a){
  display.value +=a
}
function xyz(){
display.value = "";
} 
function zyx(){
    var b= eval(display.value)
    display.value=b
}