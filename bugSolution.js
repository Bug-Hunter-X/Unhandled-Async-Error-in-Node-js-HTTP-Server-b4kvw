const http = require('http');

const server = http.createServer((req, res) => {
  // Use try...catch to handle potential errors within the asynchronous operation
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        // Simulate an error
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      }
    } catch (error) {
      console.error('Error handling request:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});