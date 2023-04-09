const currentYear = new Date().getFullYear(); 
const yearElement = document.getElementById("year"); 
yearElement.textContent = currentYear; 

function updateYear() {
  const newYear = new Date().getFullYear(); 
  if (newYear !== currentYear) {
    yearElement.textContent = newYear; 
  }
}
setInterval(updateYear, 1000);

const getElementById = id => document.getElementById(id);
const querySelector = selector => document.querySelector(selector);

const inputNameList = getElementById("inputNameList");
const inputPassword = getElementById("inputPassword");
const inputProviderCode = getElementById("inputProviderCode");
const inputDate = querySelector('input[type="date"]');
const selectedDomain = getElementById("selectedDomain");
const providerCode = getElementById("providerCode");
const resultData = getElementById("resultData");

const buttonIds = ["btnCopyFName", "btnCopyLName", "btnCopyUname", "btnCopyEmail", "btnCopyPassword", "btnCopyPhone", "btnCopyDate", "btnCopyMonth", "btnCopyAll", "btnCopyYear"];
const buttons = buttonIds.reduce((acc, id) => {
  acc[id] = getElementById(id);
  return acc;
}, {});


let firstNameList = ['Adila','Bunga','Citra','Desy','Eris','Fania','Gladys','Helena','Inas','Jasmina','Kania','Larasati','Mutiara','Nadia','Olivya','Prilly','Rini','Sinta','Tania','Ulfa','Vivi','Widya','Yunita','Zalika','Aisyah','Bella','Cindy','Dewi','Evi','Fitria','Gita','Heni','Intan','Juwita','Kiki','Lusiana','Mala','Novi','Olive','Pratiwi','Riana','Sari','Vania','Winda','Yolanda','Zalfa','Almira','Chika','Dinda','Elly','Fida','Hesty','Indah','Jihan','Kamila','Laras','Mega','Nita','Okta','Puti','Ratna','Siska','Tasya','Umi','Viona','Yulia','Zara','Aldila','Celine','Dwi','Eka','Fira','Juli','Kartika','Linda','Mira','Nia','Oktavia','Putri','Ratih','Tari','Ulya','Wulan','Yeni','Zahra','Alia','Bintang','Cempaka','Diana','Eva','Fika','Galuh','Hana','Indri','Jasmine','Laila','Mawar','Nabila','Olivia','Rahma','Vira','Zahira','Ade','Cinta','Dian','Fitri','Gina','Harini','Jovita','Lina','Nina','Oktaviani','Puspita','Rima','Ulva','Vina','Widi','Yustina','Zahra','Aisha','Cici','Erna','Griselda','Hari','Olla','Prima','Sita','Windy','Zahwa','Belinda','Elis','Fadhila','Gisella','Inayah','Merry','Nisa','Tika','Yenny','Zulfa','Abinaya','Brisia','Cyndy','Dinira','Eilora','Ferlisa','Gisita','Hafsia','Idelina','Jaelani','Krisnawati','Lalita','Maretha','Nafeesa','Oki','Prila','Qyara','Raisya','Sakina','Tasri','Uliana','Valda','Wiwit','Xanthe','Yasamin','Alya','Bintari','Cathalia','Dhafin','Elania','Faisya','Ginda','Haruka','Ismira','Jesika','Kailani','Lidya','Maelani','Nashita','Oktriana','Purnama','Qanita','Riswanti','Saphira','Tisya','Ulyana','Vanessa','Xandria','Yuliani','Zikrina','Anisha','Brisna','Cynthia','Dara','Ema','Fajrin','Gentari','Habiba','Izana','Jinan','Kanaya','Lilis','Maharani','Nashwa','Oryza','Prasasti','Quintana','Ridwana','Salsabila','Talitha','Umairah','Vivianna','Xaveria','Yasmina','Amarisa','Bismillah','Chrysantia','Davina','Elika','Fauziyah','Gwenneth','Hasti','Iftiana','Joceline','Katrien','Lariza','Meliza','Nishita','Ophelia','Putriana','Qanitah','Reinata','Sarwita','Tiara','Umami','Vivianita','Wanita','Xelia','Yasrina','Zalfa'];
let lastNameList = ['Nuraini','Wijaya','Purba','Nurhayati','Wulandari','Kurniawati','Permata','Safitri','Iswari','Fajrin','Pratiwi','Laksita','Lubis','Rahmawati','Andriani','Septiani','Mardhiyah','Ayu','Larasati','Wibowo','Kurniawan','Fithriani','Purnama','Azalia','Lutfiana','Syarifah','Budiyanti','Kusumawati','Suharyati','Tirta','Murdianti','Cahyati','Kusumawardhani','Rahayu','Kusumaningrum','Purwanti','Maulidina','Rachmawati','Jannah','Indriyani','Suryawati','Sari','Mukti','Arista','Prayoga','Puspita','Anggraini','Aryanti','Anindita','Budhianto','Cahyadi','Dewiyanti','Ekaandriani','Fajriyah','Guntari','Hamida','Indrianingsih','Juniarti','Lestari','Mulyasari','Nashirah','Octaviani','Perwita','Qomariyah','Ramadhani','Saraswati','Takarina','Utaminingrum','Vermala','Xaverius','Yulizar','Zuhdi'];

// Generate random Date
function randomDob() {
  const minDate = new Date('01/01/1960');
  const maxDate = new Date('12/31/2005');
  const randomDate = new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()));
  const formattedDate = randomDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  const [month, day, year] = formattedDate.split('/');

  let dateStr = ("0" + day).slice(-2);
  let monthStr = ("0" + month).slice(-2);
  let yearStr = year;

  return `${yearStr}-${monthStr}-${dateStr}`;
}

function randomPassword(length) {
  let password = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}
window.onload = function() {
  // Mengambil data dari localStorage dan menambahkannya ke dalam tabel
  const dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  dataList.forEach(function(data) {
    addToTable(data);
  });
}

function addToTable(data) {
  const table = document.getElementById("outputTable").getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  row.insertCell(0).innerHTML = data.name;
  row.insertCell(1).innerHTML = data.username;
  row.insertCell(2).innerHTML = data.dob;
  row.insertCell(3).innerHTML = data.email;
  row.insertCell(4).innerHTML = data.phone;
  row.insertCell(5).innerHTML = data.password;

  // Mengambil data dari localStorage dan menambahkannya ke dalam tabel
  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  
  // Hapus data lama
  dataList = dataList.filter(function(oldData) {
    return oldData.username !== data.username;
  });

  // Tambah data baru
  dataList.push(data);

  localStorage.setItem("dataList", JSON.stringify(dataList));}

function generateData() {
  let yearStr, monthStr, dateStr;
  if (inputDate.value) {
    const selectedDate = new Date(inputDate.value);
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    const [month, day, year] = formattedDate.split('/');
    dateStr = ("0" + day).slice(-2);
    monthStr = ("0" + month).slice(-2);
    yearStr = year;
  } else {
    // Menghasilkan nilai acak
    const dob = randomDob();
    [yearStr, monthStr, dateStr] = dob.split('-');
  }

  //Generate Name
  if (inputNameList.value.trim() !== "") {
    firstNameList = inputNameList.value.trim().split(/\n/);
    lastNameList = inputNameList.value.trim().split(/\n/);
  }

  const randomFirstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
  const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];

  let inputProviderCode = document.getElementById("providerCode").value;
  if (inputProviderCode === "") {
    inputProviderCode = "812"; // set default value
  }

  const isNumeric = /^[0-9]+$/.test(inputProviderCode); // validasi input
  if (!isNumeric || inputProviderCode.length !== 3) {
    alert("Input harus berupa 3 digit angka.");
    return;
  }

  const randomNumber = Math.floor(Math.random() * 100000000);
  const phoneNumber =
    "62" + inputProviderCode + randomNumber.toString().padStart(7, "0");

  let password = inputPassword.value.trim();
  if (password === "") {
    password = randomPassword(8);
  }

  let dob = `${monthStr}/${dateStr}/${yearStr}`;
  let firstName = randomFirstName;
  let lastName = randomLastName;
  let randomUsername = (randomFirstName + randomLastName).toLowerCase().replace(/[^a-z]/g, "") + Math.random().toString(36).substring(2, 6);
  let domain = selectedDomain.value;
  let email = randomUsername + domain;
  let phone = phoneNumber;
  let fullname = firstName + " " + lastName;

  const resultData = document.getElementById("resultData")
  resultData.innerText = fullname + "|" + randomUsername + "|" + email + "|" + dob + "|" + phone + "|" + password;

  const outputTable = document.getElementById("outputTable");
  const newRow = outputTable.insertRow(-1);
  const nameCell = newRow.insertCell(0);
  const usernameCell = newRow.insertCell(1);
  const dobCell = newRow.insertCell(2);
  const emailCell = newRow.insertCell(3);
  const phoneNumberCell = newRow.insertCell(4);
  const passwordCell = newRow.insertCell(5);
  const data = {
    name: fullname,
    username: randomUsername,
    dob: dob,
    email: email,
    phone: phone,
    password: password
  }

  nameCell.innerHTML = fullname;
  usernameCell.innerHTML = randomUsername;
  dobCell.innerHTML = dob;
  emailCell.innerHTML = email;
  phoneNumberCell.innerHTML = phoneNumber;
  passwordCell.innerHTML = password;

  // Menyimpan data ke localStorage
  const dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  dataList.push(data);
  localStorage.setItem("dataList", JSON.stringify(dataList));

  const btnCopyList = [
    { id: "btnCopyFName", text: firstName },
    { id: "btnCopyUname", text: randomUsername },
    { id: "btnCopyLName", text: lastName },
    { id: "btnCopyEmail", text: email },
    { id: "btnCopyPassword", text: password },
    { id: "btnCopyDate", text: dateStr },
    { id: "btnCopyMonth", text: monthStr },
    { id: "btnCopyYear", text: yearStr },
    { id: "btnCopyPhone", text: phone },
  ];

  btnCopyList.forEach((btnCopy) => {
    const btn = document.getElementById(btnCopy.id);
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btnCopy.text);
    });
  });

  btnCopyAll.addEventListener("click", () => {
    let resultData = document.getElementById("resultData");
    resultData.select();
    document.execCommand("copy");
  });
}

const btnClearHistory = document.getElementById("btnClearHistory");

btnClearHistory.addEventListener("click", function() {
  localStorage.removeItem("dataList");
  location.reload();
});


const btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", generateData);
