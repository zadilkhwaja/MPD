
function work1(){
const item1  = document.getElementById("item1")
item1.setAttribute("class","list-group-item list-group-item-action active")
document.getElementById('section2').style.visibility = "visible"
const cname = document.getElementById("item1").textContent
document.getElementById("info").append(cname)
} 
function work(){
    const item2  = document.getElementById("item2")
item2.setAttribute("class","list-group-item list-group-item-action active") 
document.getElementById("na").style.visibility = "visible"
}