// Annonymous Function.
let Newfunction= function(){
    console.log("Hello Jituraj sharma");
}
Newfunction();



// Immediately Invoked Function Expression
        (function(num1){
            console.log(num1*6345);
        } (64));

    

                // Arrow Function
    // One parametter, and a single return statement;
    const squre = x => x**x;

    // Multiple parameters, and a single return expression 
    const sumOftwoNumbers = (x, y)=> x+y;

    // Multiple statements in function expression
    const sum = (x, y)=> {
        console.log(`Adding ${x} and ${y}`);
        return x + y;
    };

    // Returning an object
    const sumAndDifference = (x, y)=> ({sum: x + y, difference: x-y});



    // calling a function

    let output1 = squre(65);
    let output2 = sumOftwoNumbers(1,2);
    let output3 = sum(1,2);


// Named Function Expression


let variableName = function functionName() {

    // Function Body
};

  // Calling a Function
console.log(variableName());




// Function Declaration


function add(x, y) {

    return x + y;
  
  }
  
  
  // Function Expression
  
  
  let addTwoNumbers = function (x, y) {
  
    return x + y;
  
  };
  
  
  // Calling the functions
  
  
  // Function Declaration : Function Name
  
  
  console.log(add(3, 4)); // OUTPUT: 7
  
  
  // Function Expression : Variable Name
  
  
  console.log(addTwoNumbers(10, 20)); // OUTPUT: 3




  // function with two parameter
  let functionName = function(num10, num11){
    return num10**num11;
  }
  // calling function
  let newof = functionName(64,6);

  console.log(newof);


    // how can i pass the argumet pass with the help of array in function 
    let func = function([num5, num4]){
        return num5/num4;
    }
    let calling = func([500,10]);
    console.log(calling);




//  function with unlimited parametter;

// Function declaration
function sumOfAllParameters() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) sum += arguments[i];
    return sum;
    }
  // Function call
let result = sumOfAllParameters(1, 2, 3, 4, 5);
    console.log(result);



    // function without parametter in function;
    // Function returning value

// Declaration


function passMessage() {

    return "I am happy to learn Full Stack Web Development ";
  
  }
  
  
  // Calling a function
  
  
  let message = passMessage();
  
  
  // The function would be executed and on executing the return statement the returned 
  //message is stored in the message variable
  
  
  console.log(message); // I am happy to learn Full Stack Web Development from PW 
  //Skills!!
  
  
  let newMessage = message + " Enroll Today";
  
  
  console.log(newMessage); // I am happy to learn Full Stack Web Development from PW 
  //Skills!! Enroll Toda





                    // self invoking function;
        (function(parameter){
            console.log("Hello I'm jitu");
        })();


        (function(parameter){
            console.log(Math.PI);
        })();


        (function(x){
            console.log(x);
        })("Self Invoke Function");
        