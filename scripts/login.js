function doLogin(){
    var userid=document.getElementById("userid").value;  // Value come from the Text Box
    var pwd=document.getElementById("password").value;
    var message = "";
    var users=[];
    var userObj;

    var user= firebase.database().ref("/users/"+userid);
    
        user.on('value',(snapshot)=>{
            userObj = snapshot.val();
            console.log(userObj);
        })
    setTimeout(() => {
        if(userObj!=null&&(userObj.pwd == pwd)){
            if(sessionStorage){
                sessionStorage.currentuser=JSON.stringify(userObj);
                // alert("Record Saved");
             }
             else{
                 alert("Ur Browser is Outdated");
             }          
            location.href="studentdashboard.html";
            // redirect to dashboard page
        }
        else{
            message = "Invalid Userid or Password";
            document.getElementById('error').innerText=message;
            // print message on Screen
        }
        
    }, 6000);
    // console.log(user);
    // questions.on('value',(snapshot)=>{
    //     var allUsersObj = snapshot.val();
    //     for(let key in allUsersObj){
    //         let userObj = allUserObj[key];
    //         users.push(userObj);
    //     }});

    // console.log(users);
    // console.log(userObj.pwd);

   

    //   if(userObj.pwd == pwd){
    //     if(localStorage){
    //         localStorage.currentuser=JSON.stringify(userObj);
    //         // alert("Record Saved");
    //      }
    //      else{
    //          alert("Ur Browser is Outdated");
    //      }          
    //     location.href="studentdashboard.html";
    //     // redirect to dashboard page
    // }
    // else{
    //     message = "Invalid Userid or Password";
    //     document.getElementById('error').innerText=message;
    //     // print message on Screen
    // }

  

    // if(userid == pwd){
    //     location.href="dashboard.html";
    //     // redirect to dashboard page
    // }
    // else{
    //     message = "Invalid Userid or Password";
    //     document.getElementById('error').innerText=message;
    //     // print message on Screen
    // }
}

function doreset(){
    document.getElementById("userid").value=""; 
    document.getElementById("password").value="";

}

function doreg(){
    location.href="userregister.html";
}