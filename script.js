const decodeBtn = document.getElementById('decode-btn');
const input = document.querySelector('.input');
const output = document.getElementById('output');

decodeBtn.addEventListener('click', () => {
    const base64Message = input.value;
    try {
        const decodedMessage = atob(base64Message);
        output.textContent = decodedMessage;
        output.style.color='green';
    } catch (error) {
        output.style.color='red';
        output.textContent = 'Invalid base64 message';
    }
});

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
    input.value = '';
    output.textContent = 'Your output will appear here.';
    output.style.color = 'white';
});