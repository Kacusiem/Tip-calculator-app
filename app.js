let inputBill = document.getElementById('bill');
let inputPeople = document.getElementById('people');
const resetButton = document.getElementById('reset-button');
const tipButtons = document.querySelectorAll('.btn');
const amountTipPerPerson = document.getElementById('tip-per-person');
const amountBillPerPerson = document.getElementById('bill-per-person');
const TitleBill = document.getElementById('title-bill');
const TitlePeople = document.getElementById('title-people');
const customButton = document.getElementById('button-custom');
const p1 = document.createElement('p');
p1.classList.add('style-string');
const p2 = document.createElement('p');
p2.classList.add('style-string')
let numberOfPeople = 1;


inputBill.addEventListener("blur", (e) => {
    if(inputBill.value === "") {
        p1.innerText = "Can't be empty";
        TitleBill.appendChild(p1);
        tipButtons.forEach((item) => {
            item.disabled = "true";
        });
    } else {
        p1.innerText = "";
        tipButtons.forEach((item) => {
            item.disabled = "";
        });
    }
});

inputPeople.addEventListener("blur", (e) => {
    if(inputPeople.value === "") {
        numberOfPeople = 1;
    } else {
        numberOfPeople = inputPeople.value;
    }
});


tipButtons.forEach((item) => {
    item.addEventListener('click', (event) => {
        tipButtons.forEach(element => {
            element.classList.remove('btn-clicked');
        });
        event.target.classList.add('btn-clicked');
            let inputBill = document.getElementById('bill').value;
            // let inputPeople = document.getElementById('people').value;
            const sumTipPerPerson = (inputBill * event.target.value / numberOfPeople).toFixed(2);
            const sumBillPerPerson = ((Number(inputBill) / numberOfPeople) + Number(sumTipPerPerson)).toFixed(2);
            amountTipPerPerson.innerText = `$${sumTipPerPerson}`;
            amountBillPerPerson.innerText = `$${sumBillPerPerson}`;

    });
});

const resetInputsAndResults = () => {
    inputBill.value = "";
    inputPeople.value = "";
    amountTipPerPerson.innerHTML = "$0.00";
    amountBillPerPerson.innerHTML = "$0.00";
}
            
resetButton.addEventListener('click', resetInputsAndResults);

