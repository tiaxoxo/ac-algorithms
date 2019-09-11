//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 
//problem statement
//given the radius form the user we want to find the area and perimter of the circle
//input: radius a number
//create a variable to store the calculated area
///create a variable to store the calculated perimeter
//calculate area with PI * radius^2
//calculate perimeter with 2 * PI * radius
//Return statement that is the string w/ the variables
//output: area an perimeter, two numbers, bounus: outpit will be a concatenated string

function circleCalculation (radius) {
	var area = Math.PI * radius * radius;
	var perimeter = 2 * Math.PI * radius;
	return "The area of the circle is " + area + " and the perimeter of the circle is " + perimeter + ".";
	//your code here
}
circleCalculation(10);