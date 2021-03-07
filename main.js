var textbox=document.getElementById("tbox");
console.log(textbox.value)

function setValue(num){
        textbox.value+=num;
        if(num==''){
            textbox.value='0';
        }
        
}
function calculate(){
    
    var getValue=eval(textbox.value)
    textbox.value=getValue
}
