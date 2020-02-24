const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

// emit an event
myEventEmitter.emit('TEST_EVENT');


// subscribe to an event using .on
// you can do this .on operation multiple times. This gives you the 
// flexibility of defining different behaviors in different functions
// in response to a single event.
myEventEmitter.on('TEST_EVENT', () => {
    console.log('Test event was fired');
})
myEventEmitter.on('TEST_EVENT', () => {
    console.log('Test event was fired');
})
myEventEmitter.on('TEST_EVENT', () => {
    console.log('Test event was fired');
})
// Trick question: 
// If we invoke this file now, how many
// times will we see the 'Test event was fired' message?
// Answer: ZERO times!
// code explainer: The reason for this is - order. We subscribed
// to the 'TEST_EVENT' 3 times but that test event was not fired
// after we subscribed to it. It was emitted once before we 
// subscribed to it but no one was listening at that time. If you
// emit the event after you subscribe to it you should now see
// the 3 callbacks getting executed

// placing the event emit after the listeners should now
// show the messages
// myEventEmitter.emit('TEST_EVENT');

// The alternative to trigger the subscriber callbacks  that happened
// after it w/o moving emit call to below the listeners is to use the
// the event loop. You can delay the execution of the emit code on line 6
// to the next tick of the event loop by using a simple setImmediate call
// by wrapping the emit line with a setImmediate call, this causes the
// the callback of setImmediate will be placed on the next event loop, 
// and it will be invoked after the rest of this program is executed.
// see sample code below 

// setImmediate(() => {
//     myEventEmitter.emit('TEST_EVENT');
// })