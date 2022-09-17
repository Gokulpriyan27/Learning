var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function myfunction() {
    var data = JSON.parse(request.response);
    let b=[];
    for(let i=0;i<data.length;i++){
        b.push(data[i])
    }
    console.log("------------------------------------------------------------")
    console.log("countries from the asian continent using filter function")
    console.log("------------------------------------------------------------")
   b.filter(filterbyname);
   function filterbyname(data){
    if(data.region==="Asia")
     console.log(data.name)
   }
   console.log("------------------------------------------------------------")
   console.log("countries with population less than 2 lakhs using filter function")
   console.log("------------------------------------------------------------")
   b.filter(filterbypopulation)
   function filterbypopulation(data){
    if(data.population>200000){
        console.log(`${data.name} population is ${data.population}`); 
    }
   }
   console.log("------------------------------------------------------------")
    console.log("Print the following details name, capital, flag using forEach function")
    console.log("------------------------------------------------------------")
    b.forEach(element => {
        console.log("Country name",element.name)
        console.log("Capital",element.capital)
        console.log("flag",element.flag)
    });

    let total_population=b.reduce((total,currentvalue)=>{
        return total+currentvalue.population;
    },0);
    console.log("------------------------------------------------------------")
    console.log("the total population is:",total_population);
    console.log("------------------------------------------------------------")
    console.log("------------------------------------------------------------")
    console.log("Countries that have USD as currency");
    console.log("------------------------------------------------------------")
    

        b.filter((data)=>{
        if((data.currencies[0]["symbol"]=="$")&&((data.currencies[0]["code"]=="USD"))){
            console.log(data.name);
        }
    })

}
