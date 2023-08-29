const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// bokstaver = characters shift 52
// symboler = characters.pop 28


let genBtn = document.getElementById("generate-button");
let genField = document.getElementsByClassName("generated-field");
let inputLength = document.getElementById("length-input");
let checkbox = document.getElementsByClassName("input");


//Toggle symbols
checkbox[0].addEventListener("click", () => {
    if (checkbox[0].checked) {
        for (let i = 0; i < 29; i++) {
            characters.pop()
        }
    } else {
            characters.push("~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
            "/")
    }
    console.log(characters)
})

//Toggle numbers
checkbox[1].addEventListener("change", () => {
    if (checkbox[1].checked) {
        characters.splice(52, 10)
    } else {
        characters.splice(52, 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }
     console.log(characters)   
})

inputLength.value = 15

genBtn.addEventListener("click", () => {
    genField[0].innerHTML = "";
    genField[1].innerHTML = "";
    for (let i = 0; i < inputLength.value; i++) {
        if (inputLength.value > 20) {
            alert("Cannot exceed 20 characters")
            inputLength.value = 20
        }  else {
            let randomPass1 = Math.floor(Math.random() * characters.length)
            let randomPass2 = Math.floor(Math.random() * characters.length)
            genField[0].innerHTML += characters[randomPass1]
            genField[1].innerHTML += characters[randomPass2]
        }
    }
})

