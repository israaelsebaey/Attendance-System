window.addEventListener("load",function(){
let username=this.document.getElementById("username");
let myBtn =this.document.getElementById("myBtn");
let data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

   myBtn.addEventListener('click',function(){
        console.log(data);
        //debugger;
        data.forEach(element => {
            let fullName=element.firstName+""+element.lastName;
            if(fullName==username.value){
                let date=new Date();
                let time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
                console.log(date);
                console.log(time);    
                Swal.fire({
                    title: `${fullName} attended at ${time}`,
                    showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        });
    })
})