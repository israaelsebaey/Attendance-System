window.addEventListener("load",function(){
     firstName=this.document.getElementsByTagName('input')[0];
     lastName=this.document.getElementsByTagName('input')[1];
     address =this.document.getElementsByTagName('input')[2];
     email=this.document.getElementsByTagName('input')[3];
     age =this.document.getElementsByTagName('input')[4];
     errorMsg=this.document.getElementsByClassName("error");
     registerBtn =this.document.getElementById("register");
        let nameValidation =/^[A-Za-z]{3,8}$/;
        firstName.addEventListener("blur",function(){
           
            if(firstName.value!=null&&firstName.value.match(nameValidation)){
                sucess(firstName,0);
            }
            else{
                Error(firstName,0);
                
            }
        })
        lastName.addEventListener("blur",function(){
            if(lastName.value!=null&&lastName.value.match(nameValidation)){
                sucess(lastName,1);
            }
            else{
                Error(lastName,1);    
            }
        })
        address.addEventListener("blur",function(){
            let addressValidation =/^[A-Za-z]{4,8}$/;
            if(address.value!=null&&address.value.match(addressValidation)){
                sucess(address,2);
            }
            else{
                Error(address,2);
                
            }
        })
        email.addEventListener("blur",function(){
            let emailValidation =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if(email.value!=null&&email.value.match(emailValidation)){
                sucess(email,3);
            }
            else{
               
                
                Error(email,3);
                
            }
        })
        age.addEventListener("blur",function(){
            if(age.value!=null&&typeof(parseInt(age.value))==="number"&&age.value>=25){
                sucess(age,4);
            }
            else{
                Error(age,4);
                
            }
        })
        document.forms[0].addEventListener('submit',function(e){
            if(!(firstName&& lastName&&address&&email&&age)){
                e.preventDefault();
            }
         })     
})

function sucess(variableName,i){
    variableName.style.border="1px solid green";
    errorMsg[i].style.display="none";
}
function Error(variableName,i){
    variableName.style.border="1px solid red";
    errorMsg[i].style.display="block";
}
