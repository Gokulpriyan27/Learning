function datafinding(){
    fetch("https://anapioficeandfire.com/api/books").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data.length);
    for(let i=0;i<data.length;i++){
              let tmp=data[i];
      
        myFunction(tmp);
    }
    
}).catch((reject)=>{
    console.log("rejected",reject)
});

}

function myFunction(trans_data){
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML =trans_data.name;
    cell2.innerHTML = trans_data.isbn;
    cell3.innerHTML = trans_data.numberOfPages;
    cell4.innerHTML = trans_data.authors[0];
    cell5.innerHTML = trans_data.publisher;
    cell6.innerHTML = trans_data.released;
    for(let i=0;i<5;i++){
        let x=trans_data.characters[i]
        fetch(x).then((char_res)=>{
            return char_res.json();
        }).then((char_data)=>{
            if(i==4){
                cell7.innerHTML =cell7.innerHTML+char_data.name;
            }else{
                cell7.innerHTML =cell7.innerHTML+char_data.name+","+" ";
            }
        }).catch((char_err)=>{
            console.log(char_err);
        })
    }

  }