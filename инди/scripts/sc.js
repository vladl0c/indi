function al(){
    let x=document.getElementById("text-3").value
    let z=document.getElementById("text-2").value
    let c=document.getElementById("text-4").value
    alert("Данные записаны"+"\n"+z+"\n"+x+"\n"+c)
}
let a=document.getElementById("otp")
a.addEventListener("click",al)