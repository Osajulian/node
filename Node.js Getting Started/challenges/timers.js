/*
Using setTimeout calls, print:
'Hello after 4 seconds'
'Hello after 8 seconds'
'Hello after 12 seconds'

Constraints: Define only ONE function, including inline functions, which means many setTimeout calls
will have to use the exact same function.

*/

const theOneFunc = delay => console.log('Hello after ' + delay + ' seconds');

setTimeout(theOneFunc, 16 * 1000, 16);
setTimeout(theOneFunc, 20 * 1000, 20);
setTimeout(theOneFunc, 24 * 1000, 24);





let testTimeout = (name, age) => console.log(`Hi my name is ${name} and I'm ${age} years old`);
setTimeout(testTimeout, 2000, 'LUISA', 47) // The arguments passed after the delay is passed as parameters to the 1st argument function


