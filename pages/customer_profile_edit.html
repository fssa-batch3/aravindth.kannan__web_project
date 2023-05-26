<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../Assets/CSS/universe.css" />
    <link rel="stylesheet" href="../Assets/CSS/customer_profile.css" />
    <title>customer profile</title>
  </head>
  <body>

    <!-- section is started -->

    <form class="profile_form" id="form_E">
      <div class="head_div">
        <h2 class="head">Edit Profile</h2>
      </div>
      <div class="form-group">
        <label for="email" class="all_label">username:</label>
        <br />
        <br />
        <input
        required
          type="name"
          pattern="[A-Za-z0-9]+"
          title="Make sure that name should not contain space"
          class="form-control personName"
          id="username"
        />
      </div>
      <div class="form-group">
        <label for="email" class="all_label">Email:</label>
        <br />
        <br />
        <input
        required
        disabled
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          class="form-control personEmail"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="pwd" class="all_label">Password:</label>
        <br />
        <br />
        <input
        required
          type="password"
          pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$"
          title="Must contain at least one number and one uppercase and lowercase letter,at least 8 or more characters and must not contain space "
          class="form-control personPassword"
          id="password"
        />
      </div>

      <div class="form-group">
        <label for="pwd" class="all_label"> Confirm Password:</label>
        <br />
        <br />
        <input
        required
        pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$"
        title="Must contain at least one number and one uppercase and lowercase letter,at least 8 or more characters and must not contain space "
          type="password"
          class="form-control personcPassword"
          id="c_password"
        />
      </div>

      <div class="form-group">
        <label for="pwd" class="all_label">Phone number:</label>
        <br />
        <br />
        <input type="number" required class="form-control personPhone" id="phone" />
      </div>

      <div class="submit">
        <button type="submit" class="submit_btn">Save</button>
      </div>
    </form>

    <!-- section is ended -->

    <!-- Java Script -->
    <script>
      const thisUser = JSON.parse(localStorage.getItem("this_user"));
      const userInfo = JSON.parse(localStorage.getItem("userinfo"));

      let oneUser = userInfo.find(function (event) {
        let userEmail = event["email"];
        if (thisUser == userEmail) {
          return true;
        }
      });
      // get single user data from local storage
      const usename = document.querySelector(".personName");
      const useemail = document.querySelector(".personEmail");
      const usePassword = document.querySelector(".personPassword");
      const usecpassword = document.querySelector(".personcPassword");
      const usePhone = document.querySelector(".personPhone");

      usename.value = oneUser["userName"];
      useemail.value = oneUser["email"];
      usePassword.value = oneUser["email_password"];
      usecpassword.value = oneUser["emailc_password"];
      usePhone.value = oneUser["phoneNumber"];

      // edit page function
      let save = document.getElementById("form_E");
      save.addEventListener("submit", function (event) {
        event.preventDefault();
        // get data from edit form
        let userName = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let email_password = document.getElementById("password").value;
        let emailc_password = document.getElementById("c_password").value;
        let phoneNumber = document.getElementById("phone").value;
        var regex = /^[6789]{1}[0-9]{9,15}$/;
    if (regex.test(phoneNumber)) {
      console.log("Valid phone number!");
    } else {
      alert("Phone number is invalid kindly change your number");
      return;
    }

        let editUserdata = {
          userName,
          email,
          email_password,
          emailc_password,
          phoneNumber,
        };

        // email validation
        let newData = JSON.parse(localStorage.getItem("userinfo"));

        if (email_password === emailc_password) {
          let oldData = newData.find(i => i.email == email);
          console.log(oldData);

          if (oldData == undefined) {
            alert("Email Id not match");
          }
          // assign the value in object
          else {
            let updated = Object.assign(oldData, editUserdata);
            let index = newData.indexOf(oldData.email);
            newData[index] = updated;
            localStorage.setItem("userinfo", JSON.stringify(newData));
            alert("Successfully customer profile Edited");
            window.location.href = "./customer_profile.html";
          }
        } else {
          alert("password and confirm password should be same");
        }
      });
    </script>
  </body>
</html>
