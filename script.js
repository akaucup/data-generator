// Get elements from the HTML page
const firstNameOutput = document.getElementById("firstNameOutput");
const lastNameOutput = document.getElementById("lastNameOutput");
const emailOutput = document.getElementById("emailOutput");
const phoneOutput = document.getElementById("phoneOutput");
const dataOutput = document.getElementById("dataOutput");
const generateBtn = document.getElementById("generateBtn");
const copyFirstNameBtn = document.getElementById("copyFirstNameBtn");
const copyLastNameBtn = document.getElementById("copyLastNameBtn");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyPhoneBtn = document.getElementById("copyPhoneBtn");
const usernameBtn = document.getElementById("usernameBtn");
const nameListInput = document.getElementById("nameListInput");
const copyDataBtn = document.getElementById("copyDataBtn");

// Define arrays of possible names
let firstNameList = ["Dewi", "Sari", "Ratna", "Lina", "Rina", "Nita", "Lila", "Eka", "Novi", "Wati", "Ana", "Dian", "Maya", "Rika", "Tuti", "Fitri", "Tika", "Yuli", "Irma", "Lia", "Indah", "Nur", "Nana", "Ani", "Wulan", "Lusi", "Fina", "Dina", "Rini", "Dwi", "Mega", "Susi", "Yenny", "Anisa", "Tiara", "Rizki", "Putri", "Nindy", "Shinta", "Melly", "Nisa", "Nia", "Ami", "Evi", "Ika", "Ayu", "Yani", "Tasya", "Devi", "Siska", "Sita", "Sari", "Suci", "Yulia", "Mira", "Rima", "Ina", "Syifa", "Sinta", "Fika", "Fita", "Adinda", "Yani", "Hani", "Nadia", "Vina", "Ria", "Fira", "Fani", "Agnes", "Vida", "Anggi", "Umi", "Puti", "Aisyah", "Yasmine", "Arum", "Ayunda", "Alia", "Winda", "Dinda", "Desi", "Siska", "Silvia", "Febi", "Vania", "Tari", "Gita", "Fanny", "Fenti", "Nela", "Hana", "Nissa", "Icha", "Ratu", "Lulu", "Caca", "Mira", "Rizka", "Yani", ];
let lastNameList = ["Kiki","Eka","Riri","Sari","Yola","Sinta","Muti","Elsa","Ani","Ira","Vita","Tasya","Nena","Tina","Yani","Nita","Agnes","Lala","Fira","Nindy","Nisa","Rani","Arin","Nadia","Vina","Tari","Maya","Icha","Yenny","Evi","Nina","Devi","Ria","Ayu","Siska","Citra","Gita","Winda","Dina","Fika","Dwi","Hana","Tika","Alia","Rina","Irma","Ina","Suci","Rizki","Nana","Fanny","Yulia","Desi","Yuli","Dita","Mira","Fina","Tiara","Lulu","Anisa","Mega","Lusi","Lina","Sasa","Ayunda","Shinta","Rika","Lestari","Sari","Sita","Fitri","Rere","Neli","Nia","Siska","Silvia","Novi","Rizka","Elsa","Ayu","Lia","Syifa","Ami","Putri","Nur","Tia","Fenti","Aulia","Yanti","Nila","Yasmine","Vida","Dinda","Ayunda","Wulan","Raya","Farah","Sarah","Yola","Nada"];

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
  //const randomLastName = firstNameList[Math.floor(Math.random() * firstNameList.length)];

  // Update output elements with generated names
  let domain = domainSelect.value;
  firstNameOutput.innerText = randomFirstName;
  lastNameOutput.innerText = randomLastName;
  usernameOutput.innerText = randomUsername;
  emailOutput.innerText = randomUsername + domainSelect.value;

  
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

  dataOutput.innerText = randomFirstName +"|"+ randomLastName +"|"+ randomUsername +"|"+ randomUsername + domainSelect.value +"|"+ phoneNumber;

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
function copyData() {
  const fulldata = dataOutput.innerText;
  navigator.clipboard.writeText(fulldata);
}



// Add event listeners to buttons
generateBtn.addEventListener("click", generateRandomName);
copyFirstNameBtn.addEventListener("click", copyFirstName);
copyLastNameBtn.addEventListener("click", copyLastName);
copyEmailBtn.addEventListener("click", copyEmail);
copyPhoneBtn.addEventListener("click", copyPhone);
usernameBtn.addEventListener("click", copyUsername);
copyDataBtn.addEventListener("click", copyData);

//oooooooooooooooooo
function generateNumber() {
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
  document.getElementById("result").innerHTML = phoneNumber;
}

// Get reset button
const resetButton = document.getElementById("resetButton");

// Reset output and input fields
function resetGenerator() {
  firstNameOutput.innerText = "Firstname here";
  lastNameOutput.innerText = "Lastname here";
  emailOutput.innerText = "Email here";
  phoneOutput.innerText = "Phone here";
  usernameOutput.innerText = "Username here";
}

// Add event listener to reset button
resetButton.addEventListener("click", resetGenerator);
