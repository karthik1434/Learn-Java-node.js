// // chalk-demo.js
// import chalk from 'chalk';

// console.log(chalk.green('Success!'));
// console.log(chalk.red.bold('Error occurred!'));
// console.log(chalk.blue.bgYellow('Node.js is fun!'));

// server.js
// server.js
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! Nodemon is karthik');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


