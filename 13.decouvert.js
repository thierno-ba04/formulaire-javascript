let form = document.querySelector('#loginform');


// ecouter la modification de l'email
form.email.addEventListener('change', function(){
    validEmail(this);
});



// ecouter la modification du password
form.password.addEventListener('change', function(){
    validPassword(this);
});



// ecouter la soumission du formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validEmail(form.email) && validPassword(form.password)){
    form.submit();

    }
});


// validation email
const validEmail = function(inputEmail){

    // création de la reg exp pour validation email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
    );

        // recuperation de la balise small
    let small = inputEmail.nextElementSibling;

     // on tst l'expression reguliere
    if ( emailRegExp.test(inputEmail.value)){
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else{
        small.innerHTML = 'Adresse  Non valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return false;

    }
};

// validationd du password
const validPassword = function(inputPassword){
let msg;
let valid = false;

    // Au moins 3 caracteres
    if(inputPassword.value.length < 3){
        msg= 'le mot de passe doit contenir au moins 3caracteres'
    }
     // Au moins 1 maj
     else if(!/[A-Z]/.test(inputPassword.value)){
        msg= 'le mot de passe doit contenir au moins 1 majuscules'
     }
    //  console.log(msg);
      // Au moins 1 min
      else if(!/[a-z]/.test(inputPassword.value)){
        msg= 'le mot de passe doit contenir au moins 1 minuscule'
     }
       // Au moins 1 chiffre
       else if(!/[0-9]/.test(inputPassword.value)){
        msg= 'le mot de passe doit contenir au moins 1 chiffres'
     }

    //  mot de pass valid
     else{
        msg ='le mot de passe est valide';
        valid = true;
     }


    //  affichage
         // recuperation de la balise small
         let small = inputPassword.nextElementSibling;

         // on tst l'expression reguliere
        if (valid) {
            small.innerHTML = 'mot de passe valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
        else{
            small.innerHTML = msg;
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
};