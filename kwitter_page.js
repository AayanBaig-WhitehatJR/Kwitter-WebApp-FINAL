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
    //Rest Functions are Below 
    var room_name = localStorage.getItem("Room Name")
    var username = localStorage.getItem("Username")
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
          firebase_message_id = childKey; 
          message_data = childData;
          console.log(firebase_message_id)
          console.log(message_data)
          name = message_data['Name']
          message = message_data['message']
          likes = message_data['likes']
          name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'> </h4>"
          message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
          like_with_tag = "<button id = '" + firebase_message_id + "' class = 'btn btn-inverse' value = ' " + likes + "' onclick = 'updateLike(this.id)'>"
          span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span> </button> <hr>"
          row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
          document.getElementById("output").innerHTML +=row

} }); }); }

      getData();

function updateLike(firebase_message_id){
      console.log("Clicked on like button. Message ID = " + firebase_message_id)
      button_id = firebase_message_id
var newLikes = document.getElementById(firebase_message_id).value
updatedLikes = Number(newLikes) + 1
console.log(updatedLikes)
firebase.database().ref(room_name).child(firebase_message_id).update({
      likes:updatedLikes
})
}
function sendMsg(){
var msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
      Name:username,
      Roomname:room_name,
      message:msg,
      likes:0
})
document.getElementById("msg").value = ""
}
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("Room Name")
      window.location = "index.html"
}