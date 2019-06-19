document.getElementById("start1").addEventListener("click", ()=>{
  location.href = "index.html"
})

document.getElementById("exit1").addEventListener("click", ()=>{
  location.href = "exit.html"
})

let txtCipher = document.getElementById("txt-cipher")

let offsetCipher = document.getElementById ("offset-cipher")

let cipherButton = document.getElementById ("cipher-button")

let messageCipher = document.getElementById ("message-cipher")

cipherButton.addEventListener("click", ()=>{
 let string = txtCipher.value.toUpperCase()
 let offset = offsetCipher.value
 let cifrado = window.cipher.encode(offset,string)
 messageCipher.value = cifrado
})
