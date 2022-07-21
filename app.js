const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwdEl1 = document.getElementById("pwd-el1")
let pwdEl2 = document.getElementById("pwd-el2")

function generatePwd() {
    let res1 = ""
    let res2 = ""
    for(let ctr = 0; ctr < 15; ctr++) {
        res1 += characters[Math.floor(Math.random() * characters.length)]
    }
    for(let ctr = 0; ctr < 15; ctr++) {
        res2 += characters[Math.floor(Math.random() * characters.length)]
    }

    return pwdEl1.textContent = res1, pwdEl2.textContent = res2
}

// function copyText1() {
//     navigator.clipboard.writeText(pwdEl1.textContent)
//     alert("Text copied successfully: " + pwdEl1.textContent)
// }

// function copyText2() {
//     navigator.clipboard.writeText(pwdEl2.textContent)
//     alert("Text copied successfully: " + pwdEl2.textContent)
// }