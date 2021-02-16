var firebaseConfig = {
      apiKey: "AIzaSyDSNdPjNo_7M5VMbQyw7_JoSvlu2m-8BO8",
      authDomain: "kwitter-e96d7.firebaseapp.com",
      databaseURL: "https://kwitter-e96d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e96d7",
      storageBucket: "kwitter-e96d7.appspot.com",
      messagingSenderId: "530698927065",
      appId: "1:530698927065:web:04c6d2725cd1a0332e77c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
