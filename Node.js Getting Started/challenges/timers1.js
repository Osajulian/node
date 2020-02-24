/*
Print the message 'Hello World' every second but only 5 times
Print 'Done' and exit.

Constraints: You can't use setTimeout.

*/

let count = 1;

const intervalId = setInterval(() => {
    console.log('Hello World:')
    count += 1;
    if(count === 6) {
        console.log('Done!');
        clearInterval(intervalId);
    
    }
},
1000)

