window.addEventListener("load",function(){
/*Get All Inputs */
let user=document.getElementById('user');
let pass=document.getElementById("password");
let admin=document.getElementById("admin");
let sec=document.getElementById('sec');
let emp=document.getElementById('emp');
let spinner=this.document.getElementsByClassName("spinner-grow")[0];

let loginBtn =document.getElementById("login");

/*retrieve data from local storage */
let data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
let verification=JSON.parse(localStorage.getItem("verify"))||[];
let userVerify=[];
let loginInfo=[];

    data.filter(item=>{
        let username=item.userName;
        let userpass=item.Password;
        let obj={
            username:username,
            userpass:userpass,
        }
        loginInfo.push(obj);
    })
    console.log(loginInfo);
    
    verification.filter(item=>{
        let verify=item.verified;
        userVerify.push(verify);
    })
    
    console.log(userVerify);       
    let adminObj={
        userName:"admin",
        password:"admin"
    }
    let securityObj={
        userName:"security",
        password:"security"
    }

/*Login Event*/
loginBtn.addEventListener("click",function(e){
 e.preventDefault();
 //debugger;
 for(let i=0;i<loginInfo.length;i++){
    if(loginInfo[i].username===user.value&&loginInfo[i].userpass===pass.value&&emp.value==="employee"){   
            spinner.classList.add("show")   
            setTimeout(() => {
                window.location.replace('http://127.0.0.1:5502/Dashboard/EmpProfile.html');
            }, 5000);
            console.log("true");
            break;    
    }
    else{
        console.log("false from employee");       
    }
}
//debugger;
  if(adminObj.userName===user.value&&adminObj.password===pass.value&&admin.value==="admin"){
    console.log("true");  
    spinner.classList.add("show")   
    setTimeout(() => {
        window.location.replace('http://127.0.0.1:5502/Dashboard/Admin.html');
    }, 5000);
  }
  else{
    console.log("false from admin");
    
  }

  if(securityObj.userName==user.value&&securityObj.password==pass.value&&sec.value=="security"){
    console.log("true");  
    spinner.classList.add("show")   
    setTimeout(() => {
        window.location.replace('http://127.0.0.1:5502/components/Users/Security.html');
    }, 5000);
  }
  else{
      console.log("false from security");
      
  }
  
})
})


function Error3(){
    swal({
       title: " Oops...this Email is Already Exist",
       text: "Please Try Another Email",
       icon: "error",
     });
 }
