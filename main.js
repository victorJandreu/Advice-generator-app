
const identify = document.getElementById("identify")
const advice = document.getElementById("advise")
const btn = document.getElementById("btn")
fetchi() 

function fetchi() {
    fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    identify.textContent = data.slip.id
    advice.textContent = data.slip.advice
})
}




btn.addEventListener("click", function(){
    fetchi() 
})