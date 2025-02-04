window.onload = function () {
    // Handle Signup Form Submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
        // Validate Passwords Match
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        // Save User Data to Local Storage
        const userData = {
          firstName,
          lastName,
          email,
          phone,
          password,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Signup successful! You can now log in.");
        window.location.href = "index.html"; // Redirect to login page
      });
    }
  
    // Handle Login Form Submission
    const loginForm = document.getElementById("loginform");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Retrieve User Data from Local Storage
        const storedUserData = localStorage.getItem("userData");
        if (!storedUserData) {
          alert("No user found! Please sign up first.");
          return;
        }
  
        const userData = JSON.parse(storedUserData);
  
        // Validate Login Credentials
        if (username === userData.email && password === userData.password) {
          showPopup();  // Show the popup on successful login
        } else {
          alert("Invalid username or password!");
        }
      });
    }
  };
  
  // Function to show the popup with a button to the next page
  function showPopup() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "1000";
    popup.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You are successfully logged in!</p>
        <button id="nextPageBtn" style="padding: 10px 20px; background: #6a11cb; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Go to Next Page
        </button>
      </div>
    `;
    document.body.appendChild(popup);
  
    // Handle the button click to redirect to the next page
    document.getElementById("nextPageBtn").addEventListener("click", function () {
      window.location.href = "nextpage.html";
    });
  }
  