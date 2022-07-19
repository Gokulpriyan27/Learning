//Greetings! Included all the programs, using Anonymous function and Arrow function. For any clarity needed, please reach out to gokulpriyan18@gmail.com or 73730 82451..

console.log("\nDo the following programs in anonymous function & IIFE\n");
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("1. Print odd numbers in an array\n");

let array=[2,3,5,8,7,9,17,58]; //change the input here


function odd(x){
    let final=[];
    for(let i=0;i<x.length;i++){
        if(x[i]%2!=0){
            final.push(x[i])
        }
    }return final;
}

let result=odd(array);
console.log("Initial Array: ",array);
console.log("Final array: ",result);

console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("2. Convert all strings to title case in an array:\n");

let arr_string=["guvi","geeks","zen","bootcamp","program"]; //change the input here
console.log(arr_string);

function titlecase(arr){
    let temp=[];
    for(let i=0;i<arr.length;i++){

        let a=arr[i].split("");
        a[0]=a[0].toUpperCase();
        let b=a.join("");
        temp.push(b);
    
    }
    return temp;
}
let result2 = titlecase(arr_string);
console.log(result2);
  
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("3.Sum of all numbers in an array\n");

let num=[1,2,3,4,5,6,7,8,9,10]; //change the input here

function sum_of_num(x){
    let temp=0;
    for(let i=0;i<x.length;i++){
        temp=temp+x[i];
    }return temp;
}

let result3=sum_of_num(num);
console.log("Array: ",num);
console.log("Sum of elements in the given array: ",result3);

console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("4.Return all the prime numbers in an array\n");

let arr4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //change the input here

function prime(x_prime){
    let final_prime=[];
    for(let i=0;i<x_prime.length;i++){
        let prime=1;
        
        if(x_prime[i]>1){
    
            for(let j=2;j<i;j++){
                if(x_prime[i]%j==0){
                    prime=0;
                    break;
                }
                
            }if(prime==1){
                final_prime.push(x_prime[i])
            }
    
        }else{
            continue;
        }
        
    }return final_prime;
}
let result4=prime(arr4);
console.log("Array of numbers: ",arr4);
console.log("list of prime numbers in the array: ",result4);

console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("5. Return all palindromes in an array\n");

let pali_num=1221; //change the input here

function palindrome(){

let aa=pali_num.toString();
let bb=aa.split("").reverse().join("");
let cc=Number(bb);
console.log("Given number: ",pali_num);
if(pali_num===cc){
    return "Given number is a palindrome"
}else{
    return "Given number is not a palindrome"
}

}
let result_palindrome=palindrome(pali_num);
console.log(result_palindrome);


console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("6.Return median of two sorted array of same(even) and different size(odd)\n");

let array1=[5,4,3,1,2,45,78]; //change the input here....
let array2=[11,8,9,10,7,6];   //change the input here....

function median_sort(x,y){

    let arr3=array1.concat(array2).sort(function(a,b){return a-b});
    console.log(arr3);
    if(arr3.length%2==0){
        let index=arr3.length/2;
        let median=(arr3[index-1]+arr3[index])/2;
        return median;
    }else{
        let index=arr3.length/2;
        let final=Math.round(index);
        let median=arr3[final-1];
        return median;
    }
}
let result23=median_sort(array1,array2)
console.log(result23);

console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("7. Remove duplicates in an array\n");

let arr=[1,4,5,8,4,3,2,2,1,18,47,22,47]; //change the input here....
let final=[];

function duplicate(x){

    for(let i=0;i<x.length;i++){
        let equal=false;
                for(let j=0;j<x.length;j++){
                   if(i!=j){
                    if(x[i]==x[j]){
                        equal=true;
                        break;
                    }
        
                   } 
            }if(equal==false){
                final.push(x[i])
            }
        }return final;
        

}
let result_duplicate=duplicate(arr);
console.log("Array with duplicates (Raw data):", arr)
console.log("Array after removal of duplicates: ",result_duplicate);


console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("8.Rotate an array k times\n");

let arr2=[1,2,3,4,5];
let array22=[...arr2]
let k=2; //enter the value of k //change the input here....

function rotate(x){
    for(let i=0;i<k;i++){
        x.push(x[0]);
        x.shift();
    } return x;
}

let result_rotate=rotate(array22);
console.log("Array before rotating: ",arr2)
console.log("Array after performing rotation: ",result_rotate);

console.log("\n***************************************************************  Using Arrow Function  ***************************************************************\n");

console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("1. Print odd numbers in an array\n");

let arr25=[2,3,5,8,7,9,17,58]; //change the input here


let arrow_odd_numbers = (x)=> {
    let final=[];
    for(let i=0;i<x.length;i++){
        if(x[i]%2!=0){
            final.push(x[i])
        }
    }return final;
}

let result25=arrow_odd_numbers(arr25);
console.log("Initial Array: ",arr25);
console.log("\n")
console.log("Final array: ",result25);

console.log("\n")
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("2.Convert all strings to title caps\n");

let arr_string2=["guvi","geeks","zen","bootcamp","program"]; //change the input here
console.log(arr_string2);

let arrow_titlecase= (arr) =>{
    let temp=[];
    for(let i=0;i<arr.length;i++){

        let a=arr[i].split("");
        a[0]=a[0].toUpperCase();
        let b=a.join("");
        temp.push(b);
    
    }
    return temp;
}
let result22 = arrow_titlecase(arr_string2);
console.log(result22);

console.log("\n")
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("3.Sum of all numbers in an array\n");

let arrow_num=[25,5,30]; //change the input here

let sum_of_num2 = (x) =>{
    let temp=0;
    for(let i=0;i<x.length;i++){
        temp=temp+x[i];
    }return temp;
}

let result_sum_arrow=sum_of_num2(arrow_num);
console.log("Array: ",arrow_num);
console.log("Sum of elements in the given array: ",result_sum_arrow);

console.log("\n")
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("4. Return all prime numbers in an array\n");

let arrow_prime=[11,12,13,14,15,16,17,18,19,20]; //change the input here

let prime_arrow = (x_prime) =>{
    let final_prime=[];
    for(let i=0;i<x_prime.length;i++){
        let prime=1;
        
        if(x_prime[i]>1){
    
            for(let j=2;j<i;j++){
                if(x_prime[i]%j==0){
                    prime=0;
                    break;
                }
                
            }if(prime==1){
                final_prime.push(x_prime[i])
            }
    
        }else{
            continue;
        }
        
    }return final_prime;
}
let result_prime_arrow=prime_arrow(arrow_prime);
console.log("Array of numbers: ",arrow_prime);
console.log("list of prime numbers in the array: ",result_prime_arrow);

console.log("\n")
console.log("-------------------------------------------------------------------------------------------------------------------------------------")
console.log("\n")
console.log("5. Return all palindromes in an array\n");

let arrow_pali_num=547; //change the input here
let arrow_palindrome = x =>{

    let aa=x.toString();
let bb=aa.split("").reverse().join("");
let cc=Number(bb);
console.log("Given number: ",x);
if(x===cc){
    return "Given number is a Palindrome"
}else{
    return "Given number is not a Palindrome"
}

}
let result_arrow_palindrome = arrow_palindrome(arrow_pali_num);
console.log(result_arrow_palindrome);
console.log("\n")
console.log("\n")


