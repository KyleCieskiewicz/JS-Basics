//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    } else {
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code 
  function getName(name) {
    var name = prompt("Pleanse enter name", name);
    return name;
  }
 


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome () {
    var name = getName();
    alert("Welcome, " + name);
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  function myName() {
    return "Parameters are generally to create the function and arguments are what is through the arguments.";
  }


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
function newMyName() {
  var ans = "false, null, undefined, NaN, 0 and /"/" ....... set that something up to be evaluated as a boolean and if it returns something other than true it is falsy";
}


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
var newMyName = function myName() {
  return "Kyle";
}
alert(newMyName);

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function() {return "Kyle"};
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code 
  //var innerFn = outerFn();
  function innerFn() {
    var innerFn = outerFn();
    return "Kyle";
  }

//Now invoke innerFn.
