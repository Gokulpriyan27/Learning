
let a=[{name:"ramesh",age:"25",role:"developer",shift:"general",interests:{hob1:"cricket",hob2:"football",hob3:"table-tennis"}},
{name:"Ram",age:"22",role:"Junior-developer",shift:"night shift",interests:{hob1:"books-reading",hob2:"movies",hob3:"horticulture"}},
{name:"Vikram",age:"44",role:"Technical Manager",shift:"general",interests:{hob1:"badmiton",hob2:"travelling",hob3:"Rider"}}
]

console.log("\n1.Iteration using (for) Loop\n")

for(let i=0;i<a.length;i++){

console.log(`name: ${a[i].name}, age: ${a[i].age}, role: ${a[i].role}`);
console.log(`interested in: ${a[i].interests["hob1"]}`);
}

// ----------------------------------------------------------------------------------------------------------------------------------------

console.log("\n2.Iteration using (for in) Loop\n")

for(let each in a){
console.log(a[each].name,a[each].age);
console.log("-->",a[each].interests["hob3"]);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
console.log("\n3.Iteration using (for of) Loop\n")

for(let each of a){
   console.log(each.name,"Role:",each.role, "hobbies:",each.interests["hob1"]);
   
}

// ----------------------------------------------------------------------------------------------------------------------------------------

console.log("\n4.Iteration using (forEach) Loop\n")


a.forEach(x);

function x(item){
   console.log("Name:",item.name,",","Role:",item.role,",","Hobby",item.interests["hob2"]);

}
