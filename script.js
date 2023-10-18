
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phone = /(^(\+88|0088)?(01){1}[0-9]{1}(\d){8})$/;
let postCode = /^\d{4}$/;

let choice = document.querySelector('#choice');
let inputForm = document.querySelector('#input-form');
inputForm.addEventListener('submit', fun);

class UI {
    static validate(message, id, item) {
        choice.value = '';
        
        let div = document.querySelector('#validate-form');
        let form = document.createElement('form');

        form.id = id;
 
        let input = document.createElement('input');
        input.type = 'text';
        input.className = id;
        input.placeholder = message;

        form.appendChild(input);

        let btn = document.createElement('input');
        btn.value = 'Validate';
        btn.type = 'submit';

        form.appendChild(btn);
        div.appendChild(form);
        form.querySelector(`#${id}`);

        form.addEventListener('submit', found);

        function found(e) {
            let str = e.target.firstElementChild.value.trim();

            if(item.test(str)) {
                alert(`${id} matched`);
            }
            else {
                alert(`${id} not matched`);
            }
        }
        
    }

    
}

function fun(event) {
    //console.log(choice.value);
    
    if(choice.value == '1') {
        //validate email
        UI.validate("Enter Your Email", "email", email);
    }
    else if (choice.value == '2') {
        //validate phone
        UI.validate("Enter Your Phone No", "phone", phone);
    }
    else if(choice.value == '3') {
        //validate post code
        UI.validate("Enter Your Post Code", "postcode", postCode);
    }

    event.preventDefault();
}





