//Now working with composit data types
//arrays contain more than one value with in them seperated by ','
var ages = [5, 16, 17, 14, 26, 78];
var randomStuff = [45, 0.4, 'G', 'Help']

console.log(ages[2]);
alert(ages[3]);

//methods are functions within an array that perform actions on that array
ages.reverse();
console.log(ages);
// now the array is ages[78, 26, 14, 17, 16, 5]

var thingsOnDesk = ['book', 'pen', 'laptop', 'mouse', 'cord'];
console.log(thingsOnDesk);
remove = thingsOnDesk.splice(4, 1, 'watch');
console.log(thingsOnDesk)
// thingsOnDesk["book", "pen", "laptop", "mouse", "watch"] as 4th item was deleted and "watch" was added" 

//arrays within arrays!
var names = [['Dan', 'John','Max', 'Dave'],['Judy', 'Sarah', 'Janet']];
var x = names[0]; //['Dan', 'John','Max', 'Dave']


//substitution principal 
var a = 10;
var b = 5;
var c = 2;

var d = a * b + c; // -> 50 + 2 -> 52

// nested array grabbing
names[1][0]; //-> ['Judy', 'Sarah', 'Janet'][0] -> 'Judy'

//tic tac toe! 
	ticTacToe = [
		['-', '-', '-'],
		['-', '-', '-'],
		['-', '-', '-']
	];
	console.log(ticTacToe)
// to modify the ticTacToe board we can just type ticTacToe[1][1] = "x" to put an x in the center of the board


