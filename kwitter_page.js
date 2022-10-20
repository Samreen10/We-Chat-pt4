//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA0bajLq3TvyU5Vqot5Iwh32mz6uQyu4p8",
      authDomain: "kwitterproject-be862.firebaseapp.com",
      databaseURL: "https://kwitterproject-be862-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-be862",
      storageBucket: "kwitterproject-be862.appspot.com",
      messagingSenderId: "229823804064",
      appId: "1:229823804064:web:f759d93a99f6b913334fc5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send()
{
      message = document.getElementById("message").value;
      console.log("Message"+ message);
      firebase.database().ref(room_name).push({
            username: user_name, 
            message: message,
            like: 0
      })
      document.getElementById("message").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
