let clickButton = document.querySelector(".mbtn");
let links = document.querySelector(".navBar");
clickButton.addEventListener("click", () => {
  links.classList.toggle("active")
})



function message(){
    var $name = document.getElementById('fullname');
    var $email = document.getElementById('email');
    var $cName = document.getElementById('cName');
    var $mc = document.getElementById('mc');
    var $number = document.getElementById('number');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if($name.value === '' || $email.value === '' || $cName.value === '' || $mc.value === '' || $number.value === '' ){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            $name.value = '';
            $email.value = '';
            $cName.value = '';
            $mc.value = '';
            $number.value = '';

        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxSmLzExMGx6xDZc0Hde8EcXOr_woBbDxRVpSeKO6IHzuDBJqeGEdmkVRshrEGWKdmi/exec'
const form = document.forms['contact-us']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response)) 
    .catch(error => console.error('Error!', error.message))
})



