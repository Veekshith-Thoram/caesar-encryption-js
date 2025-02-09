const textInput = document.getElementById("input-text");
const shiftInput = document.getElementById("shift-key");
const btnEncrypt = document.getElementById("btn-encrypt");
const encryptedOutput = document.getElementById("encrypted-output")

btnEncrypt.addEventListener("click", () => {
    var outputText = caesarCipher(textInput.value, shiftInput.value);
    encryptedOutput.innerText = outputText
})

function caesarCipher(str, shift){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <=  90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += str[i];
        }
    }
    return result;
}

function caesarCipher2(str, shift) {
    var output = "";
     
    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {
      var ascii = str[i].charCodeAt();
       
      // Check if the character is a letter
      if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        // Shift the letter by the shift amount, wrapping around the alphabet if necessary
        ascii += shift;
        if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
          ascii -= 26;
        }
      }
       
      // Add the new character to the output string
      output += String.fromCharCode(ascii);
    }
     
    // Return the output string
    return output;
  }