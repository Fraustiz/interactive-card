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
    const nameInput = document.getElementById('number');
    const errorMessage = document.getElementById('error-number');
    const form = document.getElementById('submit');

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
    const nameInput1 = document.getElementById('date-m');
    const nameInput2 = document.getElementById('date-y');
    const errorMessage = document.getElementById('error-date');
    const form = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        // Input 1
        if (nameInput1.value.trim() === '' || nameInput1.value.length < 2) {
            event.preventDefault();
            nameInput1.classList.add('error');
            errorMessage.style.display = 'block';
        } else if (nameInput1.value.trim() !== '' || nameInput1.value.length == 2) {
            nameInput1.classList.remove('error');
        }
        
        // Input 2
        if (nameInput2.value.trim() === '' || nameInput2.value.length < 2) {
            event.preventDefault();
            nameInput2.classList.add('error');
            errorMessage.style.display = 'block';
        } else if ((nameInput2.value.trim() !== '' || nameInput2.value.length == 2) ) {
            nameInput2.classList.remove('error');
        }
        
        if ((nameInput1.value.trim() !== '' || nameInput1.value.length == 2) && (nameInput2.value.trim() !== '' || nameInput2.value.length == 2)) {
            errorMessage.style.display = 'none';
        }
    });
});

// Cvc error

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('cvc');
    const errorMessage = document.getElementById('error-cvc');
    const form = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || nameInput.value.length < 3) {
            event.preventDefault();
            nameInput.classList.add('error');
            errorMessage.style.display = 'block';
        } else {
            nameInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });
});

// Sumbmit form
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.complete').style.display = 'flex';
    });
});