window.addEventListener("load",function(){
let myTable=this.document.getElementById('basic-datatable'); 
let myInput=this.document.getElementById('myInput');
let myBtn=this.document.getElementById('myBtn');   
let data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//console.log(data);

//debugger;
for(let i=0;i<data.length;i++){
    let tableRow = document.createElement('tr');
    for(let item in data[i]){
        if(item !=  "isVerified"&&item!="askForExcuse" && item!="userName"&&item!="Password" ){
            let tableTD=document.createElement('td');
            tableTD.innerText = data[i][item];
            tableRow.appendChild(tableTD);
            console.log(item)
         } 
        }
        myTable.appendChild(tableRow);
    }
    myBtn.addEventListener('click',function(){
        console.log(data);
        //debugger;
        data.forEach(element => {
            if(element.userName==myInput.value&&element.isVerified==false){
                element.isVerified=true;
                console.log(element.isVerified);
                //   if(element.isVerified==false){
                //       console.log(true);
                //      
                //   }

                //console.log("true");
                let verify=JSON.parse(localStorage.getItem("verify"))||[];
                let obj={
                    verified:element.isVerified
                }
                verify.push(obj);
                localStorage.setItem("verify",JSON.stringify(verify));
               
            }
            else{
                console.log("false");
               
            }
            
        });
    })

})

