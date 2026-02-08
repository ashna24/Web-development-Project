// donation form java

function Donationform() {
  var fullname = document.getElementById("fname").value; //  saving id in variables to save the data
  var donationType = document.getElementById("donation-type").value;
  var amount = document.getElementById("amount").value;

  if (donationType == "" || amount == "") {  // if donation or amount is empty display an alert
    alert("Please select donation type and enter amount.");
    return false;
  }

  if (isNaN(amount) || amount <= 0) {   // if amount is not a number or amount <= 0 then give an alert
    alert("Please enter a valid donation value.");
    return false;
  }
  alert("Thankyou for donating pkr " + amount + " " + fullname + "!"); //  to display on pop up  
}

// contact us form java

function contactform() {
  var Data = {     //  saving id in variables to save the data
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }

  alert("Thankyou, " + Data.fname + "!!" + "\n" + "We will get back to you via email."); //  to display on pop up  
}



