// using inline function for the first argument of the setTimeout function
setTimeout( 
    () =>  {
        console.log('Hello after 4 seconds....')
    },
4 * 1000);

// using an external function as the first argument of the setTimeout function
const func = () =>  {
    console.log('Hello after 8 secconds........');
}

setTimeout(func, 8 * 1000);

// if the function that we pass in example 2 above receives multiple arguments
// as  seen below 
/*
For: func(args1, arg2, args3...)
Wecan use: setTimeOut(func, delay, args1, args2, args3...)
*/
// we can use the remaining arguments in setTimeout to pass these arguments once it's executed with setTimeout

const rocks = who => console.log(who + ' rocks!');

setTimeout(rocks, 12 * 1000, 'BABA');

const theOneFunc = delay => console.log('Hello after ' + delay + ' seconds');


setInterval(()=> {
    console.log('You\'ll see this message every 3 seconds')
},
3000);


// this is supposed to fire immediately but using clearTimeout stops it
// dead in its tracks. Note that the timer api has an alternative to using setTimeout 
// with a delay of zero, its called setImmediate. Also there's clearInterval and clearImmediate which both
// do the same thing as clearTimeout for their respective methods.
const timerId = setTimeout(theOneFunc, 0, 0); 

clearTimeout(timerId);


