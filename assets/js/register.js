/*Declaring Variable*/
let fullName,random_number,userName, chars,data;
let passwordLength=8;
let Password="";
window.addEventListener("load",function(){
   /*Get All Inputs*/
   let firstName=this.document.getElementsByTagName('input')[0];
   let lastName=this.document.getElementsByTagName('input')[1];
   let address =this.document.getElementsByTagName('input')[2];
   let email=this.document.getElementsByTagName('input')[3];
   let age =this.document.getElementsByTagName('input')[4];
   /*Get Submit Button*/
   let registerBtn =this.document.getElementById('register');
   /*Register Event*/
    registerBtn.addEventListener('click',function(e){
      e.preventDefault();
      fullName=firstName.value+""+lastName.value;
      random_number=(Math.random() * 100000) | 0;
      userName=fullName+random_number;
      chars="0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ£$&()*+[]@#^-_!?";
            for(let i=0;i<passwordLength;i++){
                let randomNumber =Math.floor(Math.random()*chars.length);
               Password+=chars[randomNumber];
           } 
      data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
      let RegData={
         firstName:firstName.value,
         lastName:lastName.value,
         address:address.value,
         email:email.value,
         age:age.value,
         userName:userName,
         Password:Password,
         isVerified:false,
         askForExcuse:false
      };   
     if(!data.some(obj=>obj.email===RegData.email)){
        data.push(RegData);
        localStorage.setItem('users', JSON.stringify(data));
        console.log(RegData);
        sucess2(firstName.value);
        setTimeout(()=>{
         sendEmailToEmp(userName,Password,firstName.value,email.value)
        }, 2000)
        setTimeout(()=>{
         sendEmailToAdmin(firstName.value)
        },2000)
     }else{
        Error2();
     }       
   })  
})

function sucess2(firstName){
   swal({
      title: `Thanks ${firstName}..You Registered Sucessfully!`,
      text: `Please Wait For Admin Verification,We Sent You An Email With Your User Name And Password`,
      icon: "success",
    });
}
function Error2(){
   swal({
      title: " Oops...this Email is Already Exist",
      text: "Please Try Another Email",
      icon: "error",
    });
}
async function sendEmailToEmp(userName,password,firstName,email){
   let myObj={
      to_name:firstName,
      from_name : "Admin",
      message : `Welcome To Our Attendance System..Please Be Patient We Let You In Soon
      Your UserName is:${userName} And Password Is:${password}`,
      email_to:email
   }
   emailjs.send("service_7qljcph", "template_rq8a8xe",myObj).then(
      function () {
        console.log("SUCCESS!");
        window.location.replace('http://127.0.0.1:5502/components/Home.html');
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
async function sendEmailToAdmin(firstName){
   let myObj={
      from_name:"System",
      message : `${firstName} registered in the system please check Verification`,
      email_to:"israaelsebaey95@gmail.com"
   }
   emailjs.send("service_7qljcph", "template_rq8a8xe",myObj).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
