document.getElementById("start2").addEventListener("click", ()=>{
  location.href = "index.html"
})

document.getElementById("exit2").addEventListener("click", ()=>{
  location.href = "exit.html"
})

let txtDecipher = document.getElementById("txt-decipher")

let offsetDecipher = document.getElementById ("offset-decipher")

let decipherButton = document.getElementById ("decipher-button")

let messageDecipher = document.getElementById ("message-decipher")

decipherButton.addEventListener("click", ()=>{
 let string2 = txtDecipher.value.toUpperCase()
 let offset2 = offsetDecipher.value
 let descifrado = window.cipher.encode(offset2,string2)
 messageDecipher.value = descifrado
})
