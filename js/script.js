//                         ECMA Script 6

//1. Hello world
// document.write('Hello world');
//====================================================================================================

//2. strict mood
// 'use strict';
// function myName(){
//    name = 'shahin alam';
// }
// myName();

//====================================================================================================
//3. spread operator

// let country = ['Bangladesh', 'India', 'Pakistan'];
// let anotherCountry = [...country,'USA', 'UK', 'Canada'];
// document.write(anotherCountry);

//====================================================================================================

//4. Rest operator
// function Calculate(...args){
//    let sum = 0;
//    for(let i of args){
//       sum = sum+i;
//    }
//    return sum;
// }
// document.write(Calculate(1,2,3,4,5,6,7,8,9,10));


// function myName(...args){
//    document.write(args);
// }
// myName(10, 20, 30, 40, 50);

//====================================================================================================

//5. Dynamic function
// var Hello = function(nameValue){
//    return nameValue;
// }
// document.write(Hello('Shahin Alam'));

//====================================================================================================

//6. Reassigning 
//let name = 'Shahin Alam';
//name = 'Shahin';     //reassigning the value
//document.write(name);

//var name = 'Shahin Alam';
//name = 'Alam';     //reassigning the value
//document.write(name);

//const name = 'Shahin Alam';
//name = 'Shahin';     //reassigning kora jay na
//document.write(name);


//====================================================================================================
//7. Global variable
// var name = 'Shahin Alam';
// function myName(){
//    document.write(name);
// } 
// myName();

//====================================================================================================
//8. Local variable
// function myName(){
//    var name = 'Shahin Alam'; 
//    document.write(name);
// }
// myName();

//====================================================================================================

//9. Variable hoisting  
// document.write(name);
// var name = 'Shahin Alam';


//====================================================================================================

// 10. for loop
// var i;
// i = 0;
// for(i = 0; i < 10; i++){
//    document.write(i+'<br>');
// }

//====================================================================================================
//11. for in loop

// var country = ['Bangladesh', 'India', 'Pakistan'];
// for(let i in country){
//    document.write(country[i].toLocaleUpperCase()+'<br>');	
// }


//====================================================================================================

//12. for of loop
// var country = ['Bangladesh', 'India', 'Pakistan'];
// for(let i of country){
//    document.write(i+'<br>');	
// }

//====================================================================================================

//13. Object 
// var shahin = {
//    shirt:{
//       color:'red',
//       size:'XL',
//       price:500,
//    },
//    pant:{
//       color:'black',
//       size:'34',
//       price:1000,
//    },
//    shoe:{
//       color:'white',
//       size:'9',
//       price:2000,
//    }
// }
// document.write(shahin.shirt.color+'<br>'+shahin.pant.color+'<br>'+shahin.shoe.color+'<br>');

//====================================================================================================   

//14. if else
// var Yellow = {price:1000, size:34};
// if(Yellow['price'] == 100){
//    document.write('Price is 1000');
// }else if(Yellow['size'] == 34){
//    document.write('Size is 34');
// }else{
//    document.write('Price is not 1000');
// }

//====================================================================================================

//15. switch case
// var Shirt = {color:'red', size:'XL', price:500};
// switch(Shirt['color']){
//    case 'red':
//       document.write('Color is red');
//       break;
//    case 'green':
//       document.write('Color is green');
//       break;
//    case 'blue':
//       document.write('Color is blue');
//       break;
//    default:
//       document.write('Color is not red, green, blue');
// }

//====================================================================================================

//16. Simple function
// function myName(){
//    let x = 10;
//    let y = 20;
//    let z = x+y;
//    return z;
// }
// document.write(myName());

//====================================================================================================

//17. parameterized function

// function myName(x, y){
//     let z = x+y;
//     return z;   
// }
// document.write(myName(20, 30));

//====================================================================================================
//18. Anonymous function

// var myName = function(){
//     return 'Shahin Alam';
// }
// document.write(myName());


//====================================================================================================
//19. Arrow function

// var myName= () => {
//     return 'Shahin Alam';
// }
// document.write(myName());

//====================================================================================================

//20. Simple array
// var country = ['Bangladesh', 'India', 'Pakistan'];
// var anotherCountry = new Array('USA', 'UK', 'Canada');
// for(let i of country){
//     document.write(i+'<br>');
// }
// for(let i of anotherCountry){
//     document.write(i+'<br>');
// }

//====================================================================================================

//21. Array method
// var country = ['Bangladesh', 'India', 'Pakistan'];
// country.push('USA');
// country.pop();
// country.shift();
// country.unshift('Canada');
// document.write(country);

//====================================================================================================

//22. Multi-dimensional array

// var asia = ['Bangladesh', 'India', 'Pakistan'];
// var america = ['USA', 'UK', 'Canada'];
// var europe = ['Spain', 'Italy', 'Germany'];

// var world = [asia, america, europe];
// for(let i of world){
//     document.write(i+'<br>');
// }

//====================================================================================================

//23. Array destructuring
// var country = ['Bangladesh', 'India', 'Pakistan'];
// var [a, , c] = country;
// document.write(a+'-'+c);

//====================================================================================================
//24. map method

// var map = new Map();
// map.set('Bangladesh', 'Dhaka');
// map.set('India', 'New Delhi');
// map.set('Pakistan', 'Islamabad');
// map.set('USA', 'Washington');
// map.set('UK', 'London');
// map.set('Canada', 'Ottawa');
// document.write(map.get('Bangladesh')+'<br>');
// document.write(map.get('India')+'<br>');
// document.write(map.get('Pakistan')+'<br>');
// document.write(map.get('USA')+'<br>');
// document.write(map.get('UK')+'<br>');
// document.write(map.get('Canada')+'<br>');

//====================================================================================================

//25. map for loop

// var map = new Map();
// map.set('Bangladesh', 'Dhaka');
// map.set('India', 'New Delhi');
// map.set('Pakistan', 'Islamabad');
// map.set('USA', 'Washington');

// for(let [key,value] of map){
//     document.write(key+'-'+value+'<br>');
// }

//====================================================================================================
//26. map delete method

// var map = new Map();
// map.set('Bangladesh', 'Dhaka');
// map.set('India', 'New Delhi');
// map.set('Pakistan', 'Islamabad');
// map.set('USA', 'Washington');
// map.set('UK', 'London');

// map.delete('Bangladesh');
// for(let [key,value] of map){
//     document.write(key+'-'+value+'<br>');
// }

//====================================================================================================
//27. map clear method

// var map = new Map();
// map.set('Bangladesh', 'Dhaka');
// map.set('India', 'New Delhi');
// map.set('Pakistan', 'Islamabad');

// map.clear();
// for(let [key,value] of map){
//     document.write(key+'-'+value+'<br>');
// }


//====================================================================================================

//28. map has method

// var map = new Map();
// map.set('Bangladesh', 'Dhaka');
// map.set('India', 'New Delhi');
// map.set('Pakistan', 'Islamabad');

// if(map.has('India')){
//     document.write('Yes');
// }
// else{
//     document.write('No');
// }


//====================================================================================================


//29. Set method

// var set = new Set();
// set.add('bangladesh');
// set.add('india');
// set.add('pakistan');

// document.write(set.has('bangladesh'));

//====================================================================================================

//30. Set delete method
// var set = new Set();
// set.add('bangladesh');
// set.add('india');

// set.delete('bangladesh');
// document.write(set.has('bangladesh'));

//====================================================================================================

//31. Set clear method

// var set = new Set();
// set.add('bangladesh');
// set.add('india');

// set.clear();
// for(let i of set){
//     document.write(i+'<br>');
// }

//====================================================================================================

//32. Set size method

// var set = new Set();
// set.add('bangladesh');	
// set.add('india');

// document.write(set.size);


//====================================================================================================

//33. Set for loop

// var set = new Set();

// set.add('bangladesh');
// set.add('india');
// set.add('pakistan');

// for(let i of set){
//     document.write(i+'<br>');
// }

//====================================================================================================

//34. Set forEach method

// var set = new Set();

// set.add('bangladesh');
// set.add('india');
// set.add('pakistan');

// set.forEach(function(value){
//     document.write(value+'<br>');
// })

//====================================================================================================

//35. Set values method
// var set = new Set();
// set.add('bangladesh');
// set.add ('india');
// set.add('pakistan');

// document.write(set.values());

//====================================================================================================

//Class

// class myClass{
//     myFunction(){
//         document.write('Hello world');
//     }
//     myFunction1(){
//         document.write('Hello Bangladesh');
//     }
//     myFunction2(){
//         document.write('Hello India');
//     }
// }
// let obj = new myClass();
// obj.myFunction();
// obj.myFunction1();
// obj.myFunction2();

//====================================================================================================

//36. parameterized class

// class myClass{
//     myFunction(name){
//         document.write(name);
//     }
//     myFunction1(name){
//         document.write(name);
//     }
//     myFunction2(name){
//         document.write(name);
//     }
// }
// let obj = new myClass();
// obj.myFunction('Shahin Alam'+ '<br>');
// obj.myFunction1('Bangladesh'+ '<br>');
// obj.myFunction2('India');

//====================================================================================================

//37. constructor class

// class myClass{
//     constructor(name){
//         document.write(name);
//     }
// }
// new myClass('Shahin Alam');

//====================================================================================================

//38. Object class

// class myClass{
//     constructor(a,b){
//         this.f_num = a;
//         this.l_num = b;
//     }
// add(){
//     let result = this.f_num + this.l_num;
//     document.write(result);
//     }
// }
// let obj = new myClass(10,20);
// obj.add();

//====================================================================================================

//39. static class

// class myClass{
//     static myFunction(){
//         document.write('Hello world');
//     }
// }
// myClass.myFunction();

//====================================================================================================
//40. without static

// class myClass{
//     myFunction(){
//         document.write('Hello world');
//     }
// }
// let obj = new myClass();
// obj.myFunction();

//====================================================================================================

//41. Inheritance class

// class Parent{
//     myFunction(){
//         document.write('Hello world');
//     }
//     myFunction1(){
//         document.write('Hello India');
//     }
// }
// class Child extends Parent{
//     myFunction2(){
//         document.write('Hello Bangladesh');
//     }
// }
// let obj = new Child();
// obj.myFunction();
// obj.myFunction1();
// obj.myFunction2();

//====================================================================================================

//42. Inheritance with override

// class Parent{
//     myFunction(){
//         document.write('Hello world');
//     }
//     myFunction1(){
//         document.write('Hello India');
//     }
// }
// class Child extends Parent{
//     myFunction1(){
//         document.write('Hello Pakistan');
//     }
// }
// let obj = new Child();
// obj.myFunction1();

//====================================================================================================

// 43. Inheritance with super class

// class Parent{
//     myFunction(){
//         document.write('Hello world');
//     }
//     myFunction1(){
//         document.write('Hello bangladesh');
// }
// }
// class Child extends Parent{
//     myFunction2(){
//         super.myFunction();
//         super.myFunction1();
//     }
// }
// let obj = new Child();
// obj.myFunction();
// obj.myFunction1();


//====================================================================================================
