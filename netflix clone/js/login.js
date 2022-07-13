/*Storage Key*/

const STORAGE_KEY = "sign-in-user-storage-key"

let form = document.querySelector(".form");
let username = document.querySelector(".username");
let password = document.querySelector(".password");

let users=[]


/* creating a class */
class User{

    constructor(id,username,password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    //Getting the username of user input
    get getUsername(){
        return this.username
    }

    //Setting the username of user input
    set setUsername(newName){
        this.username = newName;
    }
}

/* ---------------------------
    Event listens for sign in
------------------------------*/
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    userSignedIn(username.value, password.value);
    window.location.href = "../pages/home.html";
});

/* --------------
    functions
----------------*/

function userSignedIn(username,password){
    if(username !== '' && password !== ''){
        let userSignedIn = new User(username, password);
        users.push(userSignedIn);
        addToLocalStorage(users);
    }
}

/* --------------
    Local Storage
----------------*/

function addToLocalStorage(users)
{
    users = JSON.stringify(users);
    localStorage.setItem(STORAGE_KEY,users);
}

