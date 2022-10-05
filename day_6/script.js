// Error Fixing:

// Question no: 1:

<!DOCTYPE html>
<html>
<body>
 <script>
 alert("’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------
Q2:

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------
Q3:

html:

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

script file:

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin );

-------------------------------------------------------------------------------------------------------------------------------
Q4:

html:

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

script:

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);
-------------------------------------------------------------------------------------------------------------------------------
Q5:

html:

script:

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


Solution: Whenever a number inside strings are compared, only the first digit is taken into consideration and greater or smaller operation is performed only for the first digit. In the above case, 2 is always greater than 1, which results a true. Therefore the output will be "Code is Blasted". replace the quation ("2">"12") with ("2"<"12"), to get the output as "Diffused";


-------------------------------------------------------------------------------------------------------------------------------
Q6:

script:

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

solution: Let a be empty such that it returns a false and the result will be a "Success" message.

-------------------------------------------------------------------------------------------------------------------------------
Q7:


how to get the correct score in the console:

script:
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log(value);
}

output: // if it is a 4, then "4", if it is a 6, then "6", else the actual run taken,"value"


-------------------------------------------------------------------------------------------------------------------------------


Part 2 - Debugging in looping:
------------------------------

-------------------------------------------------------------------------------------------------------------------------------
Q1:Write a code to print the numbers in the array

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

-------------------------------------------------------------------------------------------------------------------------------
Q2:Write a code to print the numbers in the array
Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
var new_string = "";
 
for (var i = numsArr.length-1; i >= 0; i--) {
if(i===0){
    new_string += numsArr[i];
}else{
    new_string += numsArr[i] + " ";
}
 
}
console.log(new_string);

-------------------------------------------------------------------------------------------------------------------------------
Q3:Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <=numsArr.length-1; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

-------------------------------------------------------------------------------------------------------------------------------
Q4:Write a code to replace the array value — If the number is even, replace it with ‘even’.


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <=numsArr.length-1; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

-------------------------------------------------------------------------------------------------------------------------------
Q5:Write a code to replace the array value — If the number is even, replace it with ‘even’.

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length-1; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

-------------------------------------------------------------------------------------------------------------------------------
Q6:Write a code to replace the array value — If the number is even, replace it with ‘even’.

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <=numsArr.length-1; i++) {
 if(i%2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

-------------------------------------------------------------------------------------------------------------------------------
Q7:Write a code to add all the numbers in the array:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);


-------------------------------------------------------------------------------------------------------------------------------
Q8:Write a code to add the even numbers only

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i];
 }

}
console.log(sum);

-------------------------------------------------------------------------------------------------------------------------------
Q8:Write a code to add the even numbers and subract the odd numbers

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0){
 sum=sum-numsArr[i];
 }else{
 sum = sum + numsArr[i]
 }
}
console.log(sum);


-------------------------------------------------------------------------------------------------------------------------------
Q8:Fix the code to welcome the boss

let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
 console.log(message);
}
else
{
 let message = "Go away";
 console.log(message)
}
 ;

-------------------------------------------------------------------------------------------------------------------------------
Q8:find the code to welcome the boss

let message;
let lock;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

-------------------------------------------------------------------------------------------------------------------------------
Q9:Change the code to print even numbers

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

-------------------------------------------------------------------------------------------------------------------------------
Q10:Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


-------------------------------------------------------------------------------------------------------------------------------
Q11:Fix the code to disarm the bomb.

let countdown = 100;
while (countdown >1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}









