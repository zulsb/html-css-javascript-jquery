function val(result){
  form.display.value += result;
}

function calculate(){
  if (form.display.value == ""){
    alert("Please enter number");
  }else{
    form.display.value = eval(form.display.value)
  }
}

document.getElementById("clear").addEventListener('click', function(){
  form.display.value = "";
})