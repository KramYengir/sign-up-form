const phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('invalid', (e) =>{
    if(e.target.validity.patternMismatch){
        e.target.setCustomValidity("Please enter a number bwteen 7 and 12 digits long")
    }
})

phoneInput.addEventListener('change', (e) =>{
    e.target.setCustomValidity('');
})
