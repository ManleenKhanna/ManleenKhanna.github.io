
function validate() {

    var result = true; //assume the form is correct

    var form = document.getElementById("theForm");

    var firstname = form.elements[1].value;
    if ((firstname == null) || (firstname == "")) {
        alert("First Name cannot be null!")
        result = false;
    }

    var lastname = form.elements[2].value;
    if ((lastname == null) || (lastname == "")) {
        alert("Last Name cannot be null!")
        result = false;
    }

    var address = form.elements[3].value;
    if ((address == null) || (address == "")) {
        alert("Address cannot be null!")
        result = false;
    }

    var city = form.elements[4].value;
    if ((city == null) || (city == "")) {
        alert("City cannot be null!")
        result = false;
    }

    var postalCode = form.elements[5].value;
    if ((postalCode == null) || (postalCode == "")) {
        alert("Postal Code cannot be null!")
        result = false;
    } else {
        var regex = /^[A-Z]\d[A-Z]( )?\d[A-Z]\d$/i;
        if (!regex.test(postalCode)) {
            alert("Postal Code format is incorrect!")
            result = false;
        }
    }

    var province = form.elements[6].value;
    if ((province == null) || (province == "")) {
        alert("Province cannot be null!")
        result = false;
    } else {
        if (!((province == "QC") || (province == "ON") || (province == "MN") || (province == "SK") || (province == "AB") || (province == "BC"))) {
            alert("Please enter a valid province abbreviation for Province field!")
            result = false;
        }
    }
    
    var age = form.elements[7].value;
    if ((age == null) || (age == "")) {
        alert("Age cannot be null!")
        result = false;
    } else {
        if (isNaN(age)) {
            alert("Age must be a numeric!")
            result = false;
        } else {
            if (parseInt(age) < 18) {
                alert("Age has to be at least 18 years old!")
            }
        }
    }

    var password = form.elements[8].value;
    if ((password == null) || (password == "")) {
        alert("Password cannot be null!")
        result = false;
    } else {
        if ((!(/[A-Z]/).test(password)) || (!(/\d/).test(password))) {
            alert("Password has to contain at least one upper case letter and a digit!")
            result = false;
        }
       
    }

    var confirm = form.elements[9].value;
    if ((confirm == null) || (confirm == "")) {
        alert("Confirm cannot be null!")
        result = false;
    } else {
        if (confirm != password) {
            alert("Confirm is different from Password!")
            result = false;
        }
    }

    var email = form.elements[10].value;
    if ((email == null) || (email == "")) {
        alert("Email cannot be null!")
        result = false;
    } else {
        if ((email.indexOf("@") < 0) || (email.indexOf(".") < 0)) {
            alert("Email format is incorrect! \nEmail has to contain @ and .")
            result = false;
        }
    }
    if (result) {
        alert("Thanks for registering with our website, your customer record was created successfully.")
    }
    return result;
}
