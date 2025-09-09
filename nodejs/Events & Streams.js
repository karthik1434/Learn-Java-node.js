const Events = require('events');

const eventEmitter = new Events.EventEmitter();
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('greet', 'Bob');


const fs = require('fs');


// Create readable and writable streams
// const readable = fs.createReadStream('largeFile.txt', { encoding: 'utf8' });
// const writable = fs.createWriteStream('output.txt');

// // Read data in chunks
// readable.on('data', (chunk) => {
//   console.log('Received chunk:', chunk.length);
//   writable.write(chunk);
// });

// // When finished
// readable.on('end', () => {
//   console.log('File read complete.');
//   writable.end();
// });
// const fs = require('fs');

// Copy file using pipe
const readable = fs.createReadStream('largeFile.txt');
const writable = fs.createWriteStream('copy.txt');

readable.pipe(writable);

console.log('File copied successfully!');

