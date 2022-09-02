
// validate email regex

const validateEmailRegEx = input=> /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);

// Register validation

function validateRegister(){
    let error = 0;

        const formRegister = document.forms["forms__form__register"];
        const formRegister_name = formRegister["register__name-input"];
        const formRegister_email = formRegister["register__email-input"];
        const formRegister_address = formRegister["register__address-input"];
        const formRegister_city = formRegister["register__city-input"];
        const formRegister_zip = formRegister["register__zip-input"];
        const formRegister_agreeCheckbox =  formRegister["register__agree-checkbox"];

        if(formRegister_name.value == ""){
            formRegister_name.classList.add("is-invalid");
            document.getElementById("is-invalid-message__name").innerHTML="Please Enter Full Name";
            ++error;
        }else if(!validateEmailRegEx(formRegister_name.value)){
            formRegister_name.classList.add("is-invalid");
            document.getElementById("is-invalid-message__name").innerHTML="Enter Full Name";
            ++error;
        }

        if(formRegister_email.value == ""){
            formRegister_email.classList.add("is-invalid");
            document.getElementById("is-invalid-message__email").innerHTML="Complete the field please";
            ++error;
        }else if(!validateEmailRegEx(formRegister_email.value)){
            formRegister_email.classList.add("is-invalid");
            document.getElementById("is-invalid-message__email").innerHTML="Enter a valid mail please";
            ++error;
        }

       
        if(formRegister_address.value == ""){
            formRegister_address.classList.add("is-invalid");
            document.getElementById("is-invalid-message__address").innerHTML="Complete the field please";
            ++error;
        }

        

        if(formRegister_city.value == ""){
            formRegister_city.classList.add("is-invalid");
            document.getElementById("is-invalid-message__city").innerHTML="Complete the field please";
            ++error;
        }

        if(formRegister_zip.value == ""){
            formRegister_zip.classList.add("is-invalid");
            document.getElementById("is-invalid-message__zip").innerHTML="Complete the field please";
            ++error;
        }else if(formRegister_zip.value.length != 5){
            formRegister_zip.classList.add("is-invalid");
            document.getElementById("is-invalid-message__zip").innerHTML="Enter a valid Zip code please";
            ++error;
        }


    if(error==0) return true;
    return false;
}

//const validatePasswordUppercase = input=> /[A-Z]/.test(input);

//const validatePasswordNumber = input=> /[0-9]/.test(input);

document.getElementById("forms__form__register").addEventListener("focusout", e=>{
    if(e.target.value != "") e.target.classList.remove("is-invalid");
});