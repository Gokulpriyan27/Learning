var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function() {
    var data = JSON.parse(request.response);
    for(var i=0;i<data.length;i++){
       console.log(`Name of country: ${data[i].name}`)
       console.log(`Region: ${data[i].region}`)
       console.log(`Sub-region: ${data[i].subregion}`)
       console.log(`Population in ${data[i].name}: ${data[i].population}`)
       console.log(`country-flag: ${data[i].flag}`)
       console.log("----------------")
    }
}

