// script.js
function reloadPage(){
  location.reload();
}

function YourName() {
  var name = prompt("Enter your name:");
  if (name) {
    var message = document.getElementById("Main-message");
    message.innerHTML = 'Wishing from <span class="name"><br>'+ name + "</span><br> Many Many Happy Returns of the day! <br><span class=b_day><span id='birthdayText'></span><span>";
   
    // Typed text
    var birthdayText = document.getElementById("birthdayText");
    var text = "Happy Birthday To You!";
    var typingSpeed = 70; // Adjust the typing speed (in milliseconds)
    var index = 0;

    function typeText() {
      birthdayText.textContent += text[index];
      index++;
      if (index < text.length) {
        setTimeout(typeText, typingSpeed);
      }
    }
    setTimeout(typeText, 1000); // Start typing animation after a delay
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
