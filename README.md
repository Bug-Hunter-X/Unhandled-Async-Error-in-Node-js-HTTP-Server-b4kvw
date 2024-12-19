# Unhandled Asynchronous Error in Node.js

This repository demonstrates a common issue in Node.js: unhandled exceptions within asynchronous callbacks.  The `bug.js` file shows an HTTP server that randomly throws an error during its request handling.  This can lead to the server crashing without proper error handling.

The solution, in `bugSolution.js`, demonstrates how to use `try...catch` blocks correctly within asynchronous callbacks to prevent unexpected crashes.