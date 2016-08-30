function shout(string) {
	return string.toUpperCase()
};

function whisper(string) {
	return string.toLowerCase()
};

function logShout(string){
	console.log(string.toUpperCase())
};

function logWhisper(string){
	console.log(string.toLowerCase())
};

function sayHiToGrandma(string){
   var lowString = string.toLowerCase()
   var highString = string.toUpperCase()

   if (lowString === string){
   		return "I can't hear you!"
   }
   	else if (highString === string){
   		return "YES INDEED!"
   	}
   	else if (string === "I love you, Grandma."){
   		return "I love you, too."
   	}

}