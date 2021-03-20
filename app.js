//Init Github
const github= new Github;
//Init Ui
const ui = new UI;

//Search Input
const searchUser = document.querySelector('#searchUser');

//Search input event Listener 

searchUser.addEventListener('keyup', (e) => {
   //Get user text 
   const userText = e.target.value;

   if (userText !== ''){
     //Make http call 
     github.getUser(userText)
     .then(data => {
       if (data.profile.message === 'Not Found') {
           // Show alert 
         ui.showAlert('User not Found', 'alert alert-danger');


       }else{
           //Show Prof
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
         
     
        }
    })
     
   }else{
       //Clear the Profile 
       ui.clearProfile();

   }

});