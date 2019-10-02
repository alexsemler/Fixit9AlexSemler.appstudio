
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

checkButton.onclick=function(){
    if (members.includes(inptFirstName.value)) {
    memberMsg.value = "You are a member!"
} else {
    members.push(inptFirstName.value)
    memberMsg.value = "You were not a member but have been added to the list!"
    }
}
