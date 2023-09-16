import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0';

const longTextInput = document.getElementById('long-text-input');
const generateButton = document.getElementById('generate-button');
const output = document.getElementById('output-div');
const spinner = document.getElementById('spinner');

const summarization = await pipeline(
    'summarization', // task
    'Xenova/t5-small' // model
);

generateButton.addEventListener('click', async () => {
    const input = longTextInput.value;
    const result = await summarization(input);
    output.innerHTML = result[0].summary_text;
});
