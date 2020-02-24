console.log(arguments)

// anytime you hear the word 'module', you should remember that it's 
// not just a file, it is wrapped in a function that receives arguments
// and returns something. So the above is actually represented by node like this -

// function(exports, module, require, __filename, __dirname) {
//     console.log(arguments);
// }
// I call 'em "The 5 Families" - 
// exports
// module
// require
// __filename
// __dirname

// All of these objects which you can use inside this file are not global objects,
// they are just arguments to the wrapping function, they are customized for each
// file and they are different in each file, so if inside a file I do this -

    exports.a = 7

// I'm just using one of the arguments of the wrapping function, the 'exports'
// keyword is not some globally available keyword, it's just the 1st argument to
// the hidden wrapping function.
// This rapping function in node is the reason why in Node when we define a variable
// in any file on the top level like for example -
        
    let j = 7;
// this 'j' variable will not be a global variable at all - it's just a variable inside
// a function. The cope of the variable is the hidden wrapping function.
// This is different from what a browser would do, if you define a variable top level
// like this. Browsers do not have this hidden wrapping function, so when you define 
// a variable like this in a browser or script, that variable will be global, it will
// be available to all the scripts you include after defining it because you are basically
// putting it on the global scope but that's the browser not Node. Node has the wrapping
// function thus the 'j' variable above is not global at all, it's just a local variable
// inside the wrapping function. This is really important to remember!

// The return - modules.exports
// Besides making 5 arguments available to you in any file, the wrapping function also
// internally returns something and the thing it returns is the -
// modules.exports property. Note that  you don't need to include the 'return' keyword, 
// Node will al make this function return the node.exports function and this is the object
// we can use to define the api of this module.

exports.a = 47;
module.exports.b = 74;

// these are both OK as the 'exports' is nothing more than an alias for module.exports
// as what is passed to the wrapper function is actually module.export.
// This alias relationship between exports and module.exports is the reason why if say
// we do this

exports.a = 27
// we are not really changing the module.exports object, we are just re-assigning the
// alias - 'exports', we are making this local variable point to a new local object
// in here and no longer point to modules.exports. For example if we wanted our top
// level api to be a function instead of an object, you cant't do this

exports = () => {} 

// not OK! This will not work because, again, you are not really modifying module.exports
// you are just breaking the assignment reference between exports and module.exports.
// Do this instead.
module.exports = () => {} 