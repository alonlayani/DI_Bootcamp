// ==========================================================
// Week 3 - Day 4 - Exercises XP Ninja
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Calculate the tip
// ----------------------------------------------------------
function calculateTip() {
  const billAmount = document.getElementById("billAmt").value;
  const serviceQuality = document.getElementById("serviceQual").value;
  let numberOfPeople = document.getElementById("numOfPeople").value;
  const each = document.getElementById("each");

  if (Number(serviceQuality) === 0 || billAmount === "") {
    alert("Please enter the bill amount and the service quality.");
    return;
  }

  if (numberOfPeople === "" || Number(numberOfPeople) < 1) {
    numberOfPeople = 1;
    each.style.display = "none";
  } else {
    each.style.display = "inline";
  }

  let total = (Number(billAmount) * Number(serviceQuality)) / Number(numberOfPeople);
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").textContent = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("calculate").onclick = calculateTip;

// ----------------------------------------------------------
// Exercise 2 : Validate the email (with and without regex)
// ----------------------------------------------------------
function isValidEmailRegex(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidEmailNoRegex(email) {
  if (email.includes(" ")) return false;
  const at = email.indexOf("@");
  if (at < 1 || at !== email.lastIndexOf("@")) return false; // one @, not first
  const domain = email.slice(at + 1);
  const dot = domain.lastIndexOf(".");
  return dot > 0 && dot < domain.length - 1; // chars before and after the "."
}

document.getElementById("emailForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const valid = isValidEmailRegex(email) && isValidEmailNoRegex(email);
  document.getElementById("emailResult").textContent = valid
    ? `${email} is a valid email address.`
    : `${email} is NOT a valid email address.`;
});

// ----------------------------------------------------------
// Exercise 3 : Get the user's geolocation coordinates
// ----------------------------------------------------------
document.getElementById("geoBtn").addEventListener("click", () => {
  const result = document.getElementById("geoResult");
  if (!navigator.geolocation) {
    result.textContent = "Geolocation is not supported by this browser.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      result.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
    },
    (error) => {
      result.textContent = `Error: ${error.message}`;
    }
  );
});
