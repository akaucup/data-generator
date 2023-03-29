function generateNumber() {
  let userInput = document.getElementById("userInput").value;
  if (userInput === "") {
    userInput = "856"; // set default value
  }
  const isNumeric = /^[0-9]+$/.test(userInput); // validasi input
  if (!isNumeric || userInput.length !== 3) {
    alert("Input harus berupa 3 digit angka.");
    return;
  }
  const randomNumber = Math.floor(Math.random() * 100000000);
  const phoneNumber =
    "62" + userInput + randomNumber.toString().padStart(7, "0");
  document.getElementById("result").innerHTML = phoneNumber;
}

function copyToClipboard() {
  const phoneNumber = document.getElementById("result").innerHTML;
  navigator.clipboard.writeText(phoneNumber);
}
