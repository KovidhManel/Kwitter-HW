
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCP36Qr_D3x9JeJji6k7a_yo2GIvzLCCrU",
    authDomain: "kwitter-24d04.firebaseapp.com",
    databaseURL: "https://kwitter-24d04-default-rtdb.firebaseio.com",
    projectId: "kwitter-24d04",
    storageBucket: "kwitter-24d04.appspot.com",
    messagingSenderId: "692890274169",
    appId: "1:692890274169:web:f89402431e7fb458b9c7a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addRoom()
  {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
          purpose : "add room"
      })
  }

  function send()
  {
      username= document.getElementById("username").value;
      message=document.getElementById("message").value;
      firebase.database().ref(roomname).push({
          USER : username,
          MESSAGE : message
      })
  }