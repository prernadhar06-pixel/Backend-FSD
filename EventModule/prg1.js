//event
//eventEmitter - on()-register event or event listener, emit(event parameter)-trigger event/create event/fire event
//class is declared using pascal case
const EventEmitter = require('event');
const event = new EventEmitter(); //creating object
event.on("greet",()=>{
    console.log("this is an event emmiter");
})
event.emit("greet");
