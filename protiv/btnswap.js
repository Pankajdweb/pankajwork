// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
  console.log(`Set cookie: ${name}=${value}; ${expires}`);
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      console.log(`Found cookie: ${cookie}`);
      return cookie.substring(name.length + 1);
    }
  }
  console.log(`Cookie not found: ${name}`);
  return null;
}

// Check if button choice is already set
let btnChoice = getCookie("btnChoice");

if (!btnChoice) {
  // Randomly select 1 or 2 and set it as the cookie
  btnChoice = Math.random() < 0.5 ? "1" : "2";
  setCookie("btnChoice", btnChoice, 365); // Set cookie for 1 year
  console.log(
    `Button choice not found. Randomly selected btnChoice: ${btnChoice}`
  );
} else {
  console.log(`Existing button choice found: ${btnChoice}`);
}

// Show the appropriate button based on cookie value
if (btnChoice === "1") {
  document.querySelector(".cta_nav-btn.contact").style.display = "block";
  console.log("Displaying Contact button.");
} else if (btnChoice === "2") {
  document.querySelector(".cta_nav-btn.clendly").style.display = "block";
  console.log("Displaying Calendly button.");
} else {
  console.log("Unexpected btnChoice value:", btnChoice);
}
// WIth Ip address
// // Function to set a cookie
// function setCookie(name, value, days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = `expires=${date.toUTCString()}`;
//     document.cookie = `${name}=${value}; ${expires}; path=/`;
//     console.log(`Set cookie: ${name}=${value}; ${expires}`);
//   }

//   // Function to get a cookie
//   function getCookie(name) {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i].trim();
//       if (cookie.startsWith(`${name}=`)) {
//         return cookie.substring(name.length + 1);
//       }
//     }
//     return null;
//   }

//   // Check if button choice is already set
//   let btnChoice = getCookie('btnChoice');

//   if (!btnChoice) {
//     // Fetch the user's IP address using the ipify API
//     fetch('https://api.ipify.org?format=json')
//       .then(response => response.json())
//       .then(data => {
//         const userIP = data.ip;
//         console.log(`User IP: ${userIP}`);

//         // Example: Use last digit of IP to determine button choice
//         const lastOctet = parseInt(userIP.split('.').pop(), 10);
//         btnChoice = lastOctet % 2 === 0 ? '1' : '2';

//         setCookie('btnChoice', btnChoice, 365); // Store the choice in a cookie for 1 year
//         displayButton(btnChoice);
//       })
//       .catch(error => console.error('Error fetching IP:', error));
//   } else {
//     console.log(`Existing button choice found in cookie: ${btnChoice}`);
//     displayButton(btnChoice);
//   }

//   // Function to display the appropriate button
//   function displayButton(choice) {
//     if (choice === '1') {
//       document.querySelector('.cta_nav-btn.contact').style.display = 'block';
//       console.log('Displaying Contact button.');
//     } else if (choice === '2') {
//       document.querySelector('.cta_nav-btn.clendly').style.display = 'block';
//       console.log('Displaying Calendly button.');
//     }
//   }
