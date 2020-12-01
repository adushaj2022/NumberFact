let inputData = document.querySelector('#form-number');
let form = document.querySelector('.card');
let outputData = document.querySelector('#output-text');

form.addEventListener('input', () => {
    
    let number = inputData.value;
    if(number != '') {
        fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            outputData.style.display = 'block';
            outputData.style.padding = '15px';
            outputData.textContent = data;
        })
        .catch(err => console.log(err)); 
    }
})