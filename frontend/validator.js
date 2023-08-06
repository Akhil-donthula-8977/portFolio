
function nameValidator(name) {
    if (name.length == 0) {
        $("#name-error").text("* Name cannot be empty");
        $("#name-error").css("color", "red");
        return false;
    }
    else {
        $("#name-error").text("");
    }
    return true;
}



function ageValidator(Age) {

    age = parseInt(Age);

    if (Age.length == 0) {
        $("#age-error").text("* Age cannot be empty");
        $("#age-error").css("color", "red");

        return false;
    }
    else {
        $("#age-error").text("");
    }
    if (age >= 80 || age <= 0) {
        //check if age is a number or less than or greater than 100
        $("#age-error").text("* Enter a valid age");
        return false;

    }
    else {
        $("#age-error").text("");
        return true
    }
}

$("#submit").click(async function (e) {
    e.preventDefault();
    var data = $('#contact-form').serialize();
    let arr = data.split("&");
    var arrmain = new Array();
    var i = 0;
    arr.forEach(element => {
        let dummy = element.split("=");
        let dummyMain = new Array(dummy)
        arrmain[i] = dummyMain[0][1];
        i++;
    });
    console.log(arrmain);
    checkName = await nameValidator(arrmain[0]);
    checkAge = await ageValidator(arrmain[1]);
    //checkGmail=await ValidateEmail(arrmain[2]);
   // console.log(checkAge);
    // checkEmail=await emailValidator(arr[2]);
  

})







