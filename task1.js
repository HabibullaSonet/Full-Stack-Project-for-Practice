
function splitText(){
    let message = document.getElementById("input").value;
    let messageArray = message.split(". ");

    for (i=0; i<messageArray.length; i++){
        document.write(`${messageArray[i]}.<br>`);
    }
}