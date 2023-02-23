let bruhSki = window.prompt("Enter a string: ")
document.getElementById("idk").textContent = bruhSki+ " GPT"
function generateBruh() {
  const input = document.getElementById("input").value;
  const numBruh = Math.floor(Math.random() * 10) + 1;
  const bruhString = (" "+bruhSki).repeat(numBruh);
  const output = document.getElementById("output");
  output.innerHTML = "";
  typeWriter(output, input, bruhString);
  TexttoSpeech(JSON.stringify(bruhString))
}

function typeWriter(output, input, bruhstring) {
  output.innerHTML += "You: " + input + "<br> Nigga-GPT: "
  let i = 0;
  function type() {
    if (i < bruhstring.length) {
      output.innerHTML += bruhstring.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}


var speech = new SpeechSynthesisUtterance();

if ("speechSynthesis" in window) {
} else {
  alert("ur gay browser doesn't support text to speech💀");
}

function TexttoSpeech(bruhstring) {
  const text = bruhstring
  if (JSON.stringify(text).trim() != "") {
    speech.text = text;
    speech.rate = 1;
    speech.pitch = 10;
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
  }
}

document.querySelector("button").addEventListener("click", () => {
  TexttoSpeech();
});