// Membuat variabel untuk menyimpan status apakah popup sudah ditampilkan atau belum
let popupShown = sessionStorage.getItem('popupShown');

// Mengecek apakah popup sudah ditampilkan atau belum
if (!popupShown) {
  // Menampilkan popup peringatan
  $('#warningModal').modal('show');
  
  // Mengubah status popupShown menjadi true
  sessionStorage.setItem('popupShown', true);
}

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
let firstNameList = ['Anisa','Dian','Fitri','Hana','Ika','Jasmine','Kiki','Lina','Maya','Nadia','Ratna','Sari','Tika','Vina','Yanti','Ayu','Dewi','Eka','Fira','Gita','Hesti','Ina','Juli','Kartika','Linda','Mira','Nia','Oktavia','Putri','Ratih','Tari','Ulya','Vivi','Wulan','Yeni','Zahra','Aida','Bella','Citra','Dina','Elsa','Fanny','Gina','Hesty','Indah','Jihan','Kamila','Laras','Mega','Nita','Okta','Puti','Siska','Tasya','Umi','Viona','Winda','Yulia','Zara','Agnes','Bunga','Cindy','Evi','Fitria','Heni','Intan','Juwita','Lusiana','Mala','Novi','Olive','Pratiwi','Riana','Tania','Ulfa','Vania','Yolanda','Zalfa','Aisyah','Cici','Desi','Febri','Gisel','Indri','Kania','Mila','Nindy','Rizki','Tia','Vita','Windy','Adila','Desy','Eris','Fania','Gladys','Helena','Inas','Jasmina','Larasati','Mutiara','Olivya','Prilly','Rini','Sinta','Widya','Yunita','Zalika','Almira','Chika','Dinda','Elly','Fida','Aldila','Celine','Dwi'];
let lastNameList = ['Ningsih','Wijaya','Sari','Nugraha','Kusuma','Setiawan','Permatasari','Putri','Haryanti','Ramadhani','Lestari','Pertiwi','Maulida','Dewi','Fauzia','Andriani','Ayu','Budiman','Cahyadi','Dewanti','Ernawati','Febriani','Ginting','Hapsari','Ismail','Juwita','Kusumawardhani','Nurfitriyani','Oktaviani','Qonita','Rahmawati','Triana','Utami','Vani','Wahyuni','Yusuf','Zahro','Abdullah','Basyir','Cahyaningrum','Fatmawati','Harahap','Jannah','Nuraini','Purba','Nurhayati','Wulandari','Kurniawati','Permata','Safitri','Iswari','Fajrin','Pratiwi','Laksita','Lubis','Septiani','Mardhiyah','Larasati','Wibowo','Kurniawan','Fithriani','Purnama','Azalia','Lutfiana','Syarifah','Budiyanti','Kusumawati','Suharyati','Tirta','Murdianti','Cahyati','Rahayu','Kusumaningrum','Purwanti','Maulidina','Rachmawati','Indriyani','Suryawati','Mukti','Arista','Prayoga','Puspita','Anggraini','Aryanti']
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
  dataOutput.innerText = randomFirstName +" "+ randomLastName +"|"+ randomUsername +"|"+ randomUsername + domainSelect.value +"|"+ phoneNumber +"|" + password;

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
