const showError = (arg) => {

    const id = arg.getAttribute('id');

    const span = document.getElementById(`${id} span`);
    if (arg.validity.tooShort) {

        span.textContent = `This field requires at least ${arg.getAttribute('minlength')} characters`
        span.classList.add('erroractive');
        arg.classList.add('invalidinput');
        return false
    }

    else if(arg.validity.valueMissing){

        span.textContent = `This field is required`
        span.classList.add('erroractive');
        arg.classList.add('invalidinput');
        return false
        
    }

    else if (arg.validity.typeMismatch) {

        span.textContent = `please input a valid ${arg.getAttribute('type')}`;
        span.classList.add('erroractive');
        arg.classList.add('invalidinput');
        return false
    }

    else if(id == 'confirm password' && arg.value != document.getElementById('password').value){

        span.textContent = `Your password should be the same as your confirmation`;
        span.classList.add('erroractive');
        arg.classList.add('invalidinput');
        return false

    }
    else{
        
            span.textContent = "";
            span.classList.remove('erroractive');
            arg.classList.remove('invalidinput')

        };
}

const required = document.querySelectorAll('[required]');

required.forEach(req => req.addEventListener('input', function () {

    showError(req);

        

    }
));

const submit = document.getElementById('submit');

const form = document.querySelector('form');

console.log(form.checkValidity());
submit.addEventListener('click', function(){

    if(form.checkValidity()){

        alert('submitted!');
        
    }else{

        alert('you must fill all requiered fields');
        this.preventDefault();
        
        
    }
})

