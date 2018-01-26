function cipher() {
  let text = document.getElementById('text').value.toUpperCase();
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    let postLetter = (((text.charCodeAt(i) - 65 + 33) % 26) + 65);
    let cipherText = String.fromCharCode(postLetter);
    (text[i] === ' ' ? newText += ' ' : newText += cipherText);
  }
  document.getElementById("result").innerHTML = newText;
}

function decipher() {
  let text = document.getElementById('text').value.toUpperCase();

  document.getElementById("result").innerHTML = text;

}
