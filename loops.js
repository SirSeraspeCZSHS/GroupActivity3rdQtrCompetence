const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const clearBtn = document.getElementById('clearCount');
const resultDiv = document.getElementById('countResult');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 || n> 1000) {
        resultDiv.textContent = 'Please enter a valid number (1 to 1000).';
        resultDiv.style.color = 'crimson';
        return;
    }

    // Build the output string with newline characters — CSS 'white-space: pre-line' preserves them.
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += `Counting: ${i}\n`;
    }
    resultDiv.style.color = 'green';
    resultDiv.textContent = output;
});

// Clear button to remove output and reset input
clearBtn.addEventListener('click', () => {
    resultDiv.textContent = '';
    num.value = '';
    resultDiv.style.color = '';
});