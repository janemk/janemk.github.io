'use strict';
document.addEventListener("DOMContentLoaded", function() {
  
  const name = document.getElementById('floatingname');
  const email = document.getElementById('floatingemail');
  const phone = document.getElementById('floatingphone');
  const company = document.getElementById('floatingcompany');
  const subject = document.getElementById('floatingsubject');
  const message = document.getElementById('floatingtextarea');
  const submit = document.getElementById('messageForm');
  
  submit.addEventListener('submit',(e)=>{
      e.preventDefault();
      let ebody = `
      <b>First Name: </b>${name.value}
      <br>
      <b>E-mail: </b>${email.value}
      <br>
      <b>Phone #: </b>${phone.value}
      <br>
      <b>Company: </b>${company.value}
      <br>
      <b>Subject: </b>${subject.value}
      <br>
      <b>Message: </b>${message.value}
      `;
  
      Email.send({
          SecureToken : "82a14d0e-e4f6-4954-b4e7-3aae5f9636dd", 
          To : 'pobcone.design@gmail.com', 
          From : "pobcone.design@gmail.com",
          Subject : `[P] ${name.value}: ${subject.value}`,
          Body : ebody
      }).then(
        message => alert(`E-mail sent!`, message)
      );
  });

});
