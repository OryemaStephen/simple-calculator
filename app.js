const display = document.getElementById('display');
const userInput = document.getElementById('user-input');
const button = document.querySelectorAll('.button');
const deleteButton = document.querySelector('.del');
const clearButton = document.querySelector('.ac');
const percentButton = document.querySelector('.percent');
const equalButton = document.querySelector('.equal');

function getUserInput(){
    button.forEach((button)=>{
        button.addEventListener('click', (event)=>{
            let input = event.target.value;
            userInput.value += input;
        })
    })     
}

function calculate() {
    equalButton.addEventListener('click', () => {
        const input = userInput.value;
        let numbers = input.match(/\d+/g).map(parseFloat); 
        let operators = input.match(/[^\d]+/g);

        let result = parseFloat(numbers[0]); 

        for (let i = 1; i < numbers.length; i++) {
            const operator = operators[i - 1]; 
            const number = numbers[i];

            switch (operator) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    if (number === 0) {
                    alert("Error");
                    return; 
                    }
                    result /= number;
                    break;
                default:
                    alert("Error");
                    return; 
            }
        }
        display.value = result;
    });
}

function deleteInput(){
    deleteButton.addEventListener('click', ()=>{
        userInput.value = userInput.value.slice(0,-1);
    })
}

function clearInput(){
    clearButton.addEventListener('click', ()=>{
        userInput.value = '';
    })
}

function getPercent(){
    percentButton.addEventListener('click', ()=>{
        display.value = Number(userInput.value)/100;

    })
}

getUserInput();
calculate();
getPercent();
deleteInput();
clearInput();