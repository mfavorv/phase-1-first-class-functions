function receivesAFunction(readBooks){
   readBooks();
}

function returnsANamedFunction(){
    return function music(instrument){
        return `I play the ${instrument}!`
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Have a nice day.');
    }
}