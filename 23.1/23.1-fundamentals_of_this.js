//1
console.log(this);
//Since the function is invoked in the global scope, this is referring to the window
// and "window" is the thing that will be printed when the function is invoked

//2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//a. In your own words what will this point to and why.
//arrow functions do not get their own version of "this", unlike regular functions, so "this" is keep refering to the global window.
//b. in order to fux this code, I can change the arrow function to  regular function, so that the this will be myObj

const myObj2 = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj2.greet();

//  Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//Since myFuncDec is defined in the window  and not in an object, this will point to the window when the function is invoked

//Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

//Since myFuncArrow is an arrow function, this will point to the window when the function is invoked

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener('click',() => {
  console.log(this);
});
//Since the addEventListener is being passed in an arrow function and since the console.log(this) is not invoked by the element, the "this" will refer to the window.
//b.this can be fixed by changing the arrow function to regular function, so it will have the same this as the element that called him.
document.querySelector(".element").addEventListener('click',function() {
    console.log(this);
  });