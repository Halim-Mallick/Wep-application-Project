// script.js
function YourName() {
  var name = prompt("Enter your name:");
  if (name) {
      var message = document.getElementById("Main-message");
      message.innerHTML = 'Wishing from <span class="name"><br>'+ name + "</span><br> Many many Returns of the day! <br><span class=b_day> Happy Birthday To You! <span>";
  }
}

var friend=[];
function FrndName() {
  var fname = prompt("Enter your friend name:");
  if (fname) {
    friend.push(fname);
    updateMessage();
}
}

function updateMessage(){
  var message=document.getElementById("Main-message");
  var friendMessage = document.createElement("p");
  friendMessage.innerHTML = "<span class='fname'> " + friend[friend.length - 1] + "!</span>";
  message.parentNode.insertBefore(friendMessage, message.nextSibling)
}
