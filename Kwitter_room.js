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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom()
{
    room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() 
{
    firebase.database().ref("/").on('value',function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
console.log("Room Name : " + Room_names);
row = "<div class='room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
                  