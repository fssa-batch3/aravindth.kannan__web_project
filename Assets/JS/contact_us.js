const form = document.getElementById("emailForm");
console.log(form);
form.addEventListener("click", function (event) {
  event.preventDefault();
});
function sende() {
  const name = document.getElementById("cont_name").value;
  const email = document.getElementById("cont_email").value;
  const subject = document.getElementById("cont_subject").value;
  const message = document.getElementById("cont_msg").value;
  const body =
    "Name : " +
    name +
    "<br /> Email : " +
    email +
    "<br /> Subject : " +
    subject +
    "<br /> Message : " +
    message;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kaviprakash594@gmail.com",
    Password: "F57ED265C7039A247A7846B5BA2D3433317B",
    To: "kaviprakash594@gmail.com",
    From: "kaviprakash594@gmail.com",
    Subject: subject,
    Body: body,
  }).then(alert("Message sent successfully!"));
}



