//YOUR FIREBASE LINKS

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

    var username = localStorage.getItem("user");
    var roomname = localStorage.getItem("room_name");

    function send() {
          var msg = document.getElementById("message").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });

          document.getElementById("message").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "login.html";
}