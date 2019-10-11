
addBtn.onclick=function(){
  output.value = (Number(firstInput.value) + Number(secondInput.value))
}

multiplyBtn.onclick=function(){
  output.value = (Number(firstInput.value) * Number(secondInput.value))
}

clearBtn.onclick=function(){
  output.value = ""
  firstInput.value = ""
  secondInput.value = ""
}
