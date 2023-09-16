import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0';

const summarization = await pipeline(
    'summarization', // task
    'Xenova/t5-small' // model
);
