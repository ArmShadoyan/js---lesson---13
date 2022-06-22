// 
function getSumOfArguments(num1,num2){
		return num1 + num2;
}console.log(getSumOfArguments(25,15));// 40


//
function getSubOfArguments(num1,num2){
	return num1 - num2;
}console.log(getSubOfArguments(25,15));// 10

//
function userData(firstName,lastName,age){
	return `hello,my name is ${firstName + " " + lastName} i am ${age}`
}console.log(userData("Jason","Jake","22"));

//
function oddOrEven(num1,num2){
let first =	num1 % 2 === 0?"first is even":"first is odd";
let second = num2 % 2 === 0?"second is even":"second is odd";
	console.log (first,second);
}oddOrEven(10,11);

//
function degreeOf3(firstn,lastn){
	for(let i = 2;i < lastn;i++){
		let deg = (3 ** i);
			if(deg < lastn && deg > firstn){
				console.log(deg) 
			}
	}
}degreeOf3(1,100) // 9,27,81;
//

const divOfArguments = function(num1,num2){
	return num1 / num2
};console.log(divOfArguments(15,5));// 3

//

const sayHalloSomeone = function(someOne){
	return `Hello ${someOne} !!`;
};console.log(sayHalloSomeone("world"));// hello world

//

const deg = function(num,deg){
	return num ** deg;
};console.log(deg(2,3));//8

//
const sum = (firstn,lastn) =>{
	for (let i = firstn;i < lastn; i+=10){
		console.log(i) 
	}
};sum(50,150);// 60,70,80 ... 140;

//

const math = (first,second,third) =>{
	return (first + second) / third
};console.log(math(10,20,2));// 15

//

const positivNum = (num1,num2) =>{
	if(num1 > num2){
		return num1 - num2
	}else if(num1 < num2){
		return num2 - num1
	}else{
		return num1 + num2
	}
};console.log(positivNum(20,30))




	











