// Get elements from the HTML page
const nameListInput = document.getElementById("nameListInput");
const passwordInput = document.getElementById("passwordInput");

const firstNameOutput = document.getElementById("firstNameOutput");
const lastNameOutput = document.getElementById("lastNameOutput");
const emailOutput = document.getElementById("emailOutput");
const phoneOutput = document.getElementById("phoneOutput");
const passwordOutput = document.getElementById("passwordOutput");
const dataOutput = document.getElementById("dataOutput");

const generateBtn = document.getElementById("generateBtn");
const copyFirstNameBtn = document.getElementById("copyFirstNameBtn");
const copyLastNameBtn = document.getElementById("copyLastNameBtn");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyPhoneBtn = document.getElementById("copyPhoneBtn");
const copyUsernameBtn = document.getElementById("copyUsernameBtn");
const copyPasswordBtn = document.getElementById("copyPasswordBtn");
const copyDataBtn = document.getElementById("copyDataBtn");


// Define arrays of possible names
let firstNameList = ["Rizka", "Yani", ];
let lastNameList = ["Yola","Nada"];
// Generate random password
function generateRandomPassword(length) {
  let password = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

// Generate random names from the arrays
function generateRandomName() {
  // Get name list from user input
  if (nameListInput.value.trim() !== "") {
    firstNameList = nameListInput.value.trim().split(/\r?\n/);
    lastNameList = nameListInput.value.trim().split(/\r?\n/);
  }

  const randomFirstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
  const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];
  const randomUsername = (randomFirstName + randomLastName).toLowerCase().replace(/[^a-z]/g, "") + Math.random().toString(36).substring(2, 5) ;
  
  let password = passwordInput.value;
  if (password === ""){
    password = generateRandomPassword(8);
  }

  // Update output elements with generated names
  let userInput = document.getElementById("userInput").value;
  if (userInput === "") {
    userInput = "812"; // set default value
  }

  const isNumeric = /^[0-9]+$/.test(userInput); // validasi input
  if (!isNumeric || userInput.length !== 3) {
    alert("Input harus berupa 3 digit angka.");
    return;
  }

  const randomNumber = Math.floor(Math.random() * 100000000);
  const phoneNumber =
    "62" + userInput + randomNumber.toString().padStart(7, "0");
  document.getElementById("phoneOutput").innerHTML = phoneNumber;

  let domain = domainSelect.value; 
  firstNameOutput.innerText = randomFirstName;
  lastNameOutput.innerText = randomLastName;
  usernameOutput.innerText = randomUsername;
  emailOutput.innerText = randomUsername + domainSelect.value;
  passwordOutput.innerText = password;
  dataOutput.innerText = randomFirstName +"|"+ randomLastName +"|"+ randomUsername +"|"+ randomUsername + domainSelect.value +"|"+ phoneNumber +"|" + password;

}

// Copy generated data to clipboard
function copyFirstName() {
  const firstName = firstNameOutput.innerText;
  navigator.clipboard.writeText(firstName);
}
function copyLastName() {
  const lastName = lastNameOutput.innerText;
  navigator.clipboard.writeText(lastName);
}
function copyEmail() {
  const email = emailOutput.innerText;
  navigator.clipboard.writeText(email);
}
function copyPhone() {
  const phone = phoneOutput.innerText;
  navigator.clipboard.writeText(phone);
}
function copyUsername() {
  const username = usernameOutput.innerText;
  navigator.clipboard.writeText(username);
}
function copyDataOutput() {
  var dataOutput = document.getElementById("dataOutput");
  dataOutput.select();
  document.execCommand("copy");
}


function copyPassword(htmlElement) {
  if (!htmlElement){
    return;
  }
  let password = passwordOutput.innerText;
  let inputPassword = document.createElement('input');
  inputPassword.setAttribute('value', password);
  document.body.appendChild(inputPassword);
  inputPassword.select();
  document.execCommand("copy");
  inputPassword.parentNode.removeChild(inputPassword);
}

document.querySelector('#copyPasswordBtn').onclick = 
function()
{
 copyPassword(document.querySelector('#passwordOutput'));
}

// Add event listeners to buttons
generateBtn.addEventListener("click", generateRandomName);
copyFirstNameBtn.addEventListener("click", copyFirstName);
copyLastNameBtn.addEventListener("click", copyLastName);
copyEmailBtn.addEventListener("click", copyEmail);
copyPhoneBtn.addEventListener("click", copyPhone);
copyUsernameBtn.addEventListener("click", copyUsername);
copyDataBtn.addEventListener("click", copyDataOutput);
copyPasswordBtn.addEventListener("click", copyPassword);
