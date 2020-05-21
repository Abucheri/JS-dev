// let welcome = 'Welcome';

// let price = 20.99;
// let name = 'O\'Brien';
// let greeting = `Hello ${name}`;  // using backticks to print out a variable (name)

// let greeting = `Hello





// ${name}`;  // you can also add a new line without having errors when using a backtick

// price = price + 1;

// price += 1;

// showMessage(welcome);
// showMessage(typeof price);

// showMessage(++price);

// showMessage(price++);

// showMessage(greeting);
// console.log(greeting);

// program flow

// if (true) {
//     showMessage('true');
// }

// let price = 20;

// (price > 10) ? showMessage('yes') : showMessage('no');
// price < 10 ? showMessage('yes') : showMessage('no');

// let message = (price < 10) ? 'yes' : 'no';
// showMessage(message);

// function expression
// let myFunc = function (){
//     console.log('Hi there!');
// }
// let myFunc = function hello (){  // function name in expression is only for debugging purposes and not a must, it can't be used for calling a function normally
    // console.log('Hi there!');
// }
// myFunc();

// return value

// function getScore(value){
//     let score = value * 42;
//     return score;
// }
// showMessage(getScore(2));

// objects
// let person = {
//     name : 'John',
//     age : 32,
//     partTime : false,
//     showInfo : function (){
         // showMessage('in show info');
//         showMessage(this.name);
//     }
// };

// person.age = 33;

// showMessage(person.age);

// person['age'] = 44;

// showMessage(person.age);

// person.showInfo();

// passing objects to functions

// let person = {
//     name : 'John',
//     age : 32,
//     partTime : false
// };

// function incrementAge(persion){
//     person.age++;
// }
// incrementAge(person);
// showMessage(person.age);

// working with built-in objects
// let now = new Date();
// showMessage(now);
// turning date into a string
// showMessage(now.toDateString());
// showMessage(Math.abs(-42));
// showMessage(Math.random());
// let s = 'Hello!';
// showMessage(s.charAt(5));

// styling the DOM elements
// const header = document.getElementById('message');
// header.style.color = 'red';
// header.style.fontWeight = '100';

// detecting button clicks
// const button = document.getElementById('see-review');
// button.addEventListener('click', function(){
//     console.log('click');
// });

// showing and hiding DOM elements
// const button = document.getElementById('see-review');
// button.addEventListener('click', function(){
//     const review = document.getElementById('review');

//     if(review.classList.contains('d-none')){
//         review.classList.remove('d-none');
//         button.textContent = 'CLOSE REVIEW';
//     }else{
//         review.classList.add('d-none');
//         button.textContent = 'SEE REVIEW';
//     }
    
// });

// arrays, recommended to be of the same type
// const values = ['a', 'b', 'c'];
// console.log(typeof values);
// console.log(Array.isArray(values));
// console.log(values);

// manipulating arrays

// push()
// const values = ['a', 'b', 'c'];
// // values.push('d');  // adds a new value to the array
// values.push('d', 'e', 'f');  // adds a new value to the array
// console.log(values);

// pop()
// const values = ['a', 'b', 'c'];
// const last = values.pop();  // removes the last value in the array
// console.log(values, last);

// shift()
// const values = ['a', 'b', 'c'];
// const first = values.shift(); // removes the first element of the array and shifts the array to the left
// console.log(values, first);

// unshift()
// const values = ['a', 'b', 'c'];
// values.unshift('hello', 'world');  // adds a new value to the array and shifts the array items to the right, similar to push but it adds values at the beginning of the array
// console.log(values);

// slice()
// const values = ['a', 'b', 'c', 'd', 'e'];
// const newValues = values.slice(1, 4);  // creates a new array which is the copy of the new array, 1st index specified is the start of the new copy and the last index specified is the end of the specified copy which is also excluded from the copy
// console.log(newValues);

// splice()
// const values = ['a', 'b', 'c', 'd', 'e'];
// values.splice(2, 1);  // removes a value from the original array, the 1st index specified is for the value in that position that will be removed and the second number specified is for the amount of values to be removed which for this case it's one value which is "c"
// console.log(values);

// splice(), inserting using splice()
// const values = ['a', 'b', 'c', 'd', 'e'];
// values.splice(2, 0, 'hello');  // adds a value at the specified index "2" and deletes no other value as specified by the secong value "0" in the function, third argument is the value to be added
// console.log(values);

// splice(), deleting and adding using splice()
// const values = ['a', 'b', 'c', 'd', 'e'];
// values.splice(2, 1, 'hello');  // splice() has been used to remove the value at the 1st specified index "2" which is "c", the second argument in the function specifies to delete one item which is the same "c" at the 2nd index, then add the third argument "hello" in the place of "c"
// console.log(values);

// array searching and looping

// indexOf(), to find the position of a value in an array
// const values = ['a', 'b', 'c', 'd', 'e'];
// // console.log(values.indexOf('a'));  // 0
// console.log(values.indexOf('w'));  // for something that doesn't exist in the array, -1

// filter()
// const values = ['a', 'b', 'c', 'd', 'e'];
// const set = values.filter(function(item){
//     return item > 'b';
// }); 
// console.log(set);

// find()
// const values = ['a', 'bbb', 'cccc', 'd', 'e'];
// const found = values.find(function(item){
//     return item.length > 1;
// });
// console.log(found);

// forEach()
// const values = ['a', 'b', 'c', 'd', 'e'];
// values.forEach(function(item){
//     console.log(item);
// });

// arrays in the DOM
// const containers = document.getElementsByClassName('container');
// containers[0].classList.add('d-none');  // access the container at index 2 and apply bootstrap class display-none to temporarily remove it
// console.log(containers);

// scope and hoisting
// variables declared outside a variable are in global scope
// variables declared inside a function are in function scope
// hoisting is good for functions but not good for constants and let, avoid using var because var can be hoisted
// using strict is very useful in that it forces you to declare a variable before using it in order to avoid errors or output that was not expected when the script runs

