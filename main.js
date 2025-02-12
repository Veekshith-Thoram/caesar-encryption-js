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

  function _0x1c1d(){var _0xac0a87=['1901236acXefP','Hello\x20World!','10WNdBuU','log','4046556riaXlz','49yZokrU','734388OWJoBi','8380496KzWEaz','6JbJbew','1701135XhLlbi','367425RIkUqY','326564JYCZDR','30hRpczT','11vCYsYc'];_0x1c1d=function(){return _0xac0a87;};return _0x1c1d();}(function(_0x1b60df,_0x3e89f0){var _0x2e2176=_0x75f8,_0x1742cd=_0x1b60df();while(!![]){try{var _0x51d5ea=parseInt(_0x2e2176(0x12c))/0x1+parseInt(_0x2e2176(0x129))/0x2*(parseInt(_0x2e2176(0x12b))/0x3)+parseInt(_0x2e2176(0x12f))/0x4*(parseInt(_0x2e2176(0x123))/0x5)+-parseInt(_0x2e2176(0x127))/0x6*(parseInt(_0x2e2176(0x126))/0x7)+-parseInt(_0x2e2176(0x128))/0x8+-parseInt(_0x2e2176(0x12a))/0x9*(-parseInt(_0x2e2176(0x12d))/0xa)+-parseInt(_0x2e2176(0x12e))/0xb*(-parseInt(_0x2e2176(0x125))/0xc);if(_0x51d5ea===_0x3e89f0)break;else _0x1742cd['push'](_0x1742cd['shift']());}catch(_0x6f1953){_0x1742cd['push'](_0x1742cd['shift']());}}}(_0x1c1d,0x9d5a5));function hi(){var _0x557ea4=_0x75f8;console[_0x557ea4(0x124)](_0x557ea4(0x122));}function _0x75f8(_0x125c8a,_0x5cddb1){var _0x1c1daa=_0x1c1d();return _0x75f8=function(_0x75f80a,_0x56f030){_0x75f80a=_0x75f80a-0x122;var _0x1983e3=_0x1c1daa[_0x75f80a];return _0x1983e3;},_0x75f8(_0x125c8a,_0x5cddb1);}hi();