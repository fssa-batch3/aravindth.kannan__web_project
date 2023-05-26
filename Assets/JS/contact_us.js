// let send = document.getElementById("send_id");
// send.addEventListener("click", function (s) {
//     s.preventDefault();

//     let fr_name = document.getElementById("cont_name").value;
//     let fr_email = document.getElementById("cont_email").value;
//     let fr_subject = document.getElementById("cont_subject").value;
//     let fr_message = document.getElementById("cont_msg").value;

//     // required details for send email.
//     let details = {from_name: fr_name,
//                    from_email:fr_email,
//                    from_subject:fr_subject,
//                    to_email:"kaviprakash594@gmail.com",
//                    message:`Hi i am ${fr_name}This is my message ${fr_message} Thank you.`}
//                 //    email send function

//                 emailjs.send("service_sp6m68","template_uo2qcla",details)
//                 .then((res) => {
//                     alert("We will contact you soon");
//                     })
//                     .catch((err) =>{
//                         console.log(err);
//                     })
// });

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
    Password: "D822D3CB3EF5FCB9D45AEAA7E84252D5707B",
    To: "kaviprakash594@gmail.com",
    From: "kaviprakash594@gmail.com",
    Subject: subject,
    Body: body,
  }).then(alert("Message sent successfully!"));
}
