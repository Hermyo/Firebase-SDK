// Initialize Firebase
const config = {
    apiKey: "AIzaSyCdBFYtDtfag-B4vgTUw9t6OtVOD8n1Ixs",
    authDomain: "thewalkingdead-bfe2e.firebaseapp.com",
    databaseURL: "https://thewalkingdead-bfe2e.firebaseio.com",
    projectId: "thewalkingdead-bfe2e",
    storageBucket: "thewalkingdead-bfe2e.appspot.com",
    messagingSenderId: "896822131654"
};
firebase.initializeApp(config);

var db = firebase.database();
var character = db.ref('characters');

console.log(character);

character.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('characterList').innerHTML += '<li>' + childData.name +
            '</li>';
    });
});

function writeUserData(Name) {
    db.ref('characters/' + name).push({
        name: Name,
    });

}

function PushOnFirebase() {
    let name = document.getElementById("lastname").value;
    writeUserData(name);
    window.location.reload();
}