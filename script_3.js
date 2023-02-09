var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // To check if the email is valid.
var pattern_2 = /^01[0125][0-9]{8}$/; //  To check if the number is an egyptian number.

let next_3 = document.getElementById("next_3");
let back_3 = document.getElementById("back_3");
let matloba_4 = document.getElementById("matloba_4");
let matloba_5 = document.getElementById("matloba_5");
let matloba_6 = document.getElementById("matloba_6");
let matloba_7 = document.getElementById("matloba_7");
let sherka = document.getElementById("sherka");
let sha5s = document.getElementById("sha5s");
let email = document.getElementById("email");
let number = document.getElementById("number");

matloba_4.style.display = "none";
matloba_5.style.display = "none";
matloba_6.style.display = "none";
matloba_7.style.display = "none";

let flg = 0,
  flg1 = 0,
  flg2 = 0,
  flg3 = 0; // To check if all inputs aren't empty then go to next page.

// If اسم شركتك ايه؟ input isn't empty border color will turn to green.

sherka.addEventListener("input", (eo) => {
  if (sherka.value != "") {
    sherka.style.border = "2px solid rgb(60, 234, 60)";
    matloba_4.style.display = "none";
  } else {
    sherka.style.border = "1px solid red";
    matloba_4.style.display = "block";
  }
});

// If اسم الشخص المفوض ثنائي input isn't empty border color will turn to green.

sha5s.addEventListener("input", (eo) => {
  if (sha5s.value != "") {
    sha5s.style.border = "2px solid rgb(60, 234, 60)";
    matloba_5.style.display = "none";
  } else {
    sha5s.style.border = "1px solid red";
    matloba_5.style.display = "block";
  }
});

// If email input isn't empty border color will turn to green only if it matches the pattern variable (only if it is valid email).

email.addEventListener("input", (eo) => {
  if (email.value.match(pattern)) {
    email.style.border = "2px solid rgb(60, 234, 60)";
    matloba_7.style.display = "none";
  } else {
    email.style.border = "1px solid red";
    matloba_7.style.display = "block";
  }
});

// If number input isn't empty border color will turn to green only if it matches the pattern_2 variable (only if it is egyptian number).

number.addEventListener("input", (eo) => {
  if (number.value.match(pattern_2)) {
    number.style.border = "2px solid rgb(60, 234, 60)";
    matloba_6.style.display = "none";
  } else {
    number.style.border = "1px solid red";
    matloba_6.style.display = "block";
  }
});
