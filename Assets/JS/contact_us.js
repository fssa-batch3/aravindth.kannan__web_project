
let send = document.getElementById("send_id");
send.addEventListener("click", function (s) {
    s.preventDefault();

    let fr_name = document.getElementById("cont_name").value;
    let fr_email = document.getElementById("cont_email").value;
    let fr_subject = document.getElementById("cont_subject").value;
    let fr_message = document.getElementById("cont_msg").value;

    // required details for send email.
    let details = {from_name: fr_name,
                   from_email:fr_email,
                   from_subject:fr_subject,
                   to_email:"kaviprakash594@gmail.com",
                   message:`Hi i am ${fr_name}This is my message ${fr_message} Thank you.`}
                //    email send function

                emailjs.send("service_sp6m68","template_uo2qcla",details)
                .then((res) => {
                    alert("We will contact you soon");
                    })
                    .catch((err) =>{
                        console.log(err);
                    })
});