function shout(HELLO) {
  return HELLO.toUpperCase();
}

function whisper(hello) {
  return hello.toLowerCase();
}
function logShout(HELLO) {
  console.log(HELLO.toUpperCase());
}

function logWhisper(hello){
  console.log(hello.toLowerCase());
  }

function sayHiToHeadphonedRoommate(str){
if(str === str.toLowerCase()){
  return "I can't hear you!"
}else if(str === str.toUpperCase()){
  return "YES INDEED!"
}else if(str === "Let's have dinner together!"){
  return "I would love to!";
}
}