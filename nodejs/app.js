// const add = require('./Modules');

// const result = add(5, 3);
// console.log(`The sum is: ${result}`);

import { add } from './Modules.js';

const result = add(5, 3);
console.log(`The sum is: ${result}`);


// import fs from 'fs';

// fs.writeFileSync('example.txt', 'Hello, this is a sample text file.');

// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('File content:', data);



import fs from 'fs';

// Write file
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// Read file
const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data); // Hello from Node.js

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'hello.txt');
console.log('File path:', filePath); // Full path to hello.txt  