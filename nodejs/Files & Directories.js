const fs = require('fs');

// const data = fs.readFileSync('hello.txt', 'utf8');
// console.log("scyn read:",data);


// fs.readFile('hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//     console.log("asyn read:",data);
// });

// fs.writeFileSync("output.txt", "This is my output file.");
// console.log('File written successfully.');

// fs.writeFile("output_async.txt", "This is my async output file.", (err) => {
//     if (err) throw err;
//     console.log('Async file written successfully.');    
//     });

// async function writeFileAsync() {
//     try {
//         await fs.promises.writeFile("output_promises.txt", "This is my promises output file.");
//         console.log('Promises file written successfully.');
//     } catch (err) {
//         console.error('Error writing file:', err);
//     }
// }
//     writeFileAsync();

// fs.appendFileSync("example.txt", "\nThis is appended text.");
// console.log("Appended (sync).");
// fs.appendFile("example.txt", "\nThis is async append.", (err) => {
//   if (err) throw err;
//   console.log("Appended (async).");
// });
// fs.promises.appendFile("example.txt", "\nThis is promises append.")
//   .then(() => console.log("Appended (promises)."))
//   .catch(err => console.error('Error appending file:', err));


// fs.mkdirSync("myDir");
// console.log("Directory created (sync).");

// fs.mkdir("myDirAsync", (err) => {
//   if (err) throw err;
//   console.log("Directory created (async).");
// });

// async function createDir() {
//   try {
//     await fsPromises.mkdir("myDirPromise");
//     console.log("Directory created (promise).");
//   } catch (err) {
//     console.error(err);
//   }
// }

// createDir();

