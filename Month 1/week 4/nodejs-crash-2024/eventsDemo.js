import {EventEmitter} from 'events';

const myEmitter =  new EventEmitter();

function greetHandler(name) {
    console.log("Hello " + name);
}

function goodbyeHandler(name) {
    console.log("Goodbye " + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'Ash');
myEmitter.emit('goodbye', 'Ash');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An error occured: ', err);
});

// Simulate error
myEmitter.emit('error', new Error('Somethings wrong'));