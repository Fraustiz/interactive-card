// Cardholder name

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('name');
    const paragraph = document.getElementById('name-p');

    input.addEventListener('input', function() {

        if (input.value.length > 25) {
            input.value = input.value.substring(0, 25);
        }

        if (input.value == "") {
            paragraph.textContent = "jane appleseed";
        } else {
            paragraph.textContent = input.value;
        }
    });
});

// Card number

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('number');
    const paragraph = document.getElementById('number-h2');

    input.addEventListener('input', function() {
        let inputText = input.value;

        // Limiter l'input à 16 caractères
        if (inputText.length > 16) {
            inputText = inputText.substring(0, 16);
            input.value = inputText;
        }

        let defaultText = "0000 0000 0000 0000";

        if (inputText === "") {
            paragraph.textContent = defaultText;
        } else {
            const updatedText = inputText.padEnd(16, '0').match(/.{1,4}/g).join(' ');
            paragraph.textContent = updatedText;
        }
    });
});

// Exp. date

document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('date-m');
    const input2 = document.getElementById('date-y');
    const output = document.getElementById('date-p');

    function updateOutput() {
        const value1 = input1.value.padStart(2, '0');
        const value2 = input2.value.padStart(2, '0');
        output.textContent = `${value1}/${value2}`;
    }

    input1.addEventListener('input', function() {
        if (input1.value.length > 2) {
            input1.value = input1.value.slice(0, 2);
        }
        updateOutput();
    });

    input2.addEventListener('input', function() {
        if (input2.value.length > 2) {
            input2.value = input2.value.slice(0, 2);
        }
        updateOutput();
    });

    input1.addEventListener('input', function() {
        if (input1.value > 12) {
            input1.value = 12;
        }
    });

    updateOutput();
});

// Cvc

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('cvc');
    const paragraph = document.getElementById('cvc-p');

    input.addEventListener('input', function() {

        if (input.value.length > 3) {
            input.value = input.value.substring(0, 3);
        }

        if (input.value == "") {
            paragraph.textContent = "000";
        } else {
            paragraph.textContent = input.value;
        }
    });
});

// Name error

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('error-message');
    const form = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || !nameInput.value.includes(' ')) {
            event.preventDefault();
            nameInput.classList.add('error');
            errorMessage.style.display = 'block';
        } else {
            nameInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });
});

// Number error

document.addEventListener('DOMContentLoaded', function() {
    let numberInput = document.getElementById('number');
    let errorMessage = document.getElementById('error-number');
    let form = document.getElementById('submit');

    function blockSpecialChar(e) {
        let k = e.keyCode || e.which;
        let isNumeric = (k >= 48 && k <= 57);
        let isControlChar = k === 8 || k === 32;
        return isNumeric || isControlChar;
    }

    numberInput.addEventListener('keypress', function (e) {
        if (!blockSpecialChar(e)) {
            e.preventDefault();
        }
    });

    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || nameInput.value.length < 16) {
            event.preventDefault();
            nameInput.classList.add('error');
            errorMessage.style.display = 'block';
        } else {
            nameInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });
});

// Date error

document.addEventListener('DOMContentLoaded', function() {
    const dateInputMonth = document.getElementById('date-m');
    const dateInputYear = document.getElementById('date-y');
    const errorMessage = document.getElementById('error-date');
    const form = document.getElementById('submit');

    function blockSpecialChar(e) {
        const k = e.keyCode || e.which;
        const isNumeric = (k >= 48 && k <= 57);
        const isControlChar = k === 8 || k === 32;
        return isNumeric || isControlChar;
    }

    dateInputMonth.addEventListener('keypress', function (e) {
        if (!blockSpecialChar(e)) {
            e.preventDefault();
        }
    });

    dateInputYear.addEventListener('keypress', function (e) {
        if (!blockSpecialChar(e)) {
            e.preventDefault();
        }
    });

    form.addEventListener('submit', function(event) {

        // Input 1
        if (dateInputMonth.value.trim() === '' || dateInputMonth.value.length < 2) {
            event.preventDefault();
            dateInputMonth.classList.add('error');
            errorMessage.style.display = 'block';
        } else if (dateInputMonth.value.trim() !== '' || dateInputMonth.value.length == 2) {
            dateInputMonth.classList.remove('error');
        }
        
        // Input 2
        if (dateInputYear.value.trim() === '' || dateInputYear.value.length < 2) {
            event.preventDefault();
            dateInputYear.classList.add('error');
            errorMessage.style.display = 'block';
        } else if ((dateInputYear.value.trim() !== '' || dateInputYear.value.length == 2) ) {
            dateInputYear.classList.remove('error');
        }
        
        if ((dateInputMonth.value.trim() !== '' || dateInputMonth.value.length == 2) && (dateInputYear.value.trim() !== '' || dateInputYear.value.length == 2)) {
            errorMessage.style.display = 'none';
        }
    });
});

// Cvc error

document.addEventListener('DOMContentLoaded', function() {
    const cvcInput = document.getElementById('cvc');
    const errorMessage = document.getElementById('error-cvc');
    const form = document.getElementById('submit');

    function blockSpecialChar(e) {
        const k = e.keyCode || e.which;
        const isNumeric = (k >= 48 && k <= 57);
        const isControlChar = k === 8 || k === 32;
        return isNumeric || isControlChar;
    }

    cvcInput.addEventListener('keypress', function(e) {
        if (!blockSpecialChar(e)) {
            e.preventDefault();
        }
    });

    form.addEventListener('submit', function(event) {
        if (cvcInput.value.trim() === '' || cvcInput.value.length < 3) {
            event.preventDefault();
            cvcInput.classList.add('error');
            errorMessage.style.display = 'block';
        } else {
            cvcInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });
});

// Sumbmit form
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('submit', function(event) {
        const nameInput1 = document.getElementById('date-m');
        const nameInput2 = document.getElementById('date-y');
        const cvcInput = document.getElementById('cvc');

        if (!nameInput1.classList.contains('error') && 
            !nameInput2.classList.contains('error') && 
            !cvcInput.classList.contains('error')) {
            event.preventDefault();
            document.querySelector('.form').style.display = 'none';
            document.querySelector('.complete').style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.querySelector('.complete');
    continueButton.addEventListener('click', function() {
        location.reload();
    });
});
