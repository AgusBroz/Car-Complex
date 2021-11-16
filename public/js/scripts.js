// Empty JS for your own code to be here
var delAccount = document.getElementById("delAcc")
var popup=document.getElementById("popup")
var closePopup = document.getElementById("close-popup")
delAccount.addEventListener("click",()=>{
    popup.style.display = "flex"
})
closePopup.addEventListener("click",()=>{
    popup.style.display = "none"
})