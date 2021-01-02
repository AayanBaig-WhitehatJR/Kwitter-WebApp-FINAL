
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCdFOyBWRocZ5YE62y4p-vKYeTyDcOTzFs",
      authDomain: "kwitter-b580f.firebaseapp.com",
      databaseURL: "https://kwitter-b580f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b580f",
      storageBucket: "kwitter-b580f.appspot.com",
      messagingSenderId: "260642103074",
      appId: "1:260642103074:web:0e212aeffe9f94d4600f7b"
    };
    // Initialize Firebase    
    firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = "Welcome, " + user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names: " + Room_names)
row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML +=row
      //End code
      });});}
      getData();
function redirectToRoomName(name){
      console.log(name)
localStorage.setItem("Room Name", name);

      window.location = "kwitter_page.html"
}
//Logout Function
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("Room Name")
      window.location = "index.html"
}