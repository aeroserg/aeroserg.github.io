const inputFixed = document.querySelector('#input_fixed');
const inputVariable = document.querySelector('#input_variable');
const inputIncome = document.querySelector('#income');

const totalNumber = document.querySelector('#total');
const variableNumber = document.querySelector('#increase');
const decreaseLine = document.querySelector('#decrease_line')
const FixedNumber = document.querySelector('#stable');
const incomeNumber = document.querySelector('#incomeNumber');
const increaseLine = document.querySelector('#increaseLine');
const totalNumberP = document.querySelector('#totalNumber');
const totalNumberLine = document.querySelector('#total_line');
const bottomLine = document.querySelector('#bottomLine')
let totalSumCosts

function show() {

    if (inputFixed.value > 0 && inputVariable.value > 0 && (inputFixed.value < 999999 && inputVariable.value < 999999)) {
        totalNumberLine.classList.remove('hidden');
        totalNumberP.classList.remove('hidden');
        FixedNumber.innerText = inputFixed.value + '$';
        variableNumber.innerText = inputVariable.value + '$';
        totalSumCosts = parseInt(inputFixed.value) + parseInt(inputVariable.value)
        totalNumber.innerHTML = totalSumCosts + '$';
    }
    else if (inputFixed.value > 999999 || inputVariable.value > 999999) {
        alert('Please enter not so big numbers, i only learn how to count:(')

    } else {
        alert('Please check if you entered a fixed and a variable numbers!')
    }

    if (inputIncome.value > 0 && inputIncome.value < 999999) {
        if (totalSumCosts > inputIncome.value) {
            decreaseLine.classList.remove('hidden');
            increaseLine.classList.add('hidden');

            bottomLine.innerHTML = 'Your income is less then your total costs, you will produce less and less. Your company is unprofitable. Think about "Lean" or "6 Sigma".'
        } else if (totalSumCosts < inputIncome.value) {
            decreaseLine.classList.add('hidden');

            increaseLine.classList.remove('hidden');
            bottomLine.innerHTML = 'Your income is more then your total costs, you will produce more and more. Your company is profitable. Keep going!'
        } else if (totalSumCosts = inputIncome.value) {
            alert('You are at the BEP (break-even point). Keep trying but dont overdo it. Sorry, no charts here, i was too lazy to do one more line:(');

        }
    }
    else if  (inputIncome.value >= 9999999 ) {
        alert('Please enter not so big numbers, i only learn how to count:(');
    }
    else if  (inputIncome.value <= 0 ) {
        alert('Please enter values others then 0 and not negative');
    }

}
