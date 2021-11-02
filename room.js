

const firebaseConfig = {
  apiKey: "AIzaSyChHqRVAhap9BTDeYTDWDQunHOZ5wuBPXw",
  authDomain: "kwitter-fdbcc.firebaseapp.com",
  databaseURL: "https://kwitter-fdbcc-default-rtdb.firebaseio.com",
  projectId: "kwitter-fdbcc",
  storageBucket: "kwitter-fdbcc.appspot.com",
  messagingSenderId: "134213529328",
  appId: "1:134213529328:web:82690551f783ce01801c35"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

var username=localStorage.getItem('user')
document.getElementById('welcomeuser').innerHTML="Welcome    "+ username + "!"

function addroom()
{
      var room_name = document.getElementById("roominput").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "login.html";
}