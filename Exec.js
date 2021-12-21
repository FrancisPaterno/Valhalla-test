const { isNull, callbackify } = require("util");

function wrap (execute) {
    // Return modified function

   if(execute instanceof errorExec){
       return null;
   }
   else{
       return 'Result';
   }
  }
  
  var errorExec = wrap(function () {
    throw new Error('Error');
  });
  var resultExec = wrap(function () {
    return "Result";
  });
  console.log(errorExec && errorExec()); // Should output null
  console.log(errorExec && resultExec()); // Should output "Result"