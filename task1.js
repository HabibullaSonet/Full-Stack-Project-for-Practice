let message = document.getElementById("message").innerHTML;

let messageArray = message.split(". ");

for (i=0; i<messageArray.length; i++){
    document.write(messageArray[i] + "<br >");
    document.getElementById("message").innerHTML = "";
}