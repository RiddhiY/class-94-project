//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAfOvPRN9HQyAJliEvtXaeRnDWQ0zV8g50",
    authDomain: "kwitter-2bebf.firebaseapp.com",
    databaseURL: "https://kwitter-2bebf-default-rtdb.firebaseio.com",
    projectId: "kwitter-2bebf",
    storageBucket: "kwitter-2bebf.appspot.com",
    messagingSenderId: "824740318131",
    appId: "1:824740318131:web:aad616a9c6993a06a5d9c6"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();