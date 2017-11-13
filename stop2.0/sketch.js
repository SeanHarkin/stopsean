    // Due to complications in this project, this code is unqestionabally a mess. There are far too many variables, which have been left from pieces of code
    // that were removed in order to make the code functional at a base level. I have intentionally left these in here to show the struggles I had with
    // creating my product, and how many different ways I approached the problems faced.
 
    // S.
 
 
var timePlayed = 60000;          // max time allowed
var gameClock = 0;            // start new timer
var serial;                // variable to hold an instance of the serialport library
var portName = 'COM9';          // fill in your serial port name here
var inData;                
var timer;                // for incoming serial data
var timerIsSet = false;          // establish new timer
var timeLeft;              //  for countdown until post
var tweet;                // post
var hold = 60000;            
var url = "https://io.adafruit.com/api/groups/sharkin/send.json?x-aio-key=b326fc1eb05245a99bd8a2ac0292330a&stopsean=1";
var aiokey = "b326fc1eb05245a99bd8a2ac0292330a";    //get this from your account
var userName = "sharkin";                 //get this from your account
var channelName1 = "stopSean";               //choose a name
 
 
function setup()
{
  createCanvas(800, 500);
 
    //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open("COM9");         //open the serialport. determined 
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived functional       Code taken from example on Canvas 
} 
 
function ardCon() 
{  console.log("connection open");            // testing the connection was open 
 
} 
 
function dataReceived() 
{   
  inData = Number(serial.read());            // declaring the input as a number 
  console.log(serial.read());              // testing the value coming in from feather 
  //checkTime(); 
  if(inData == 0){                  // ensuring data is only sent when the button is pushed 
    iftttSend1() 
  } 
  //else{(inData == 1, console.log("Tweet"));} 
 
  // console.log("data recieved", inData);      // this code was the basis of my attempts to create a timer within P5 using 
  // if(inData==0 && !timerIsSet){          // (p5timer) - (time since gamepad was turned on; inData)       
  //   console.log('gameclock setting')        // Unfortunately I could not get this working. 
  //   gameClock = millis();              // Another side effect of my lack of coding experience is the abundance of the console.log command 
  //   timerIsSet = true;                // where I was trying to figure out where the code had broken. 
  // } 
}



//{
    //console.log("Limit reached");
    function iftttSend1(sharkin,b326fc1eb05245a99bd8a2ac0292330a,stopsean,val1)      // function to push data to io
    {
 
    var url = "https://io.adafruit.com/api/groups/sharkin/send.json?x-aio-key=b326fc1eb05245a99bd8a2ac0292330a&stopsean=1"    // io address
    httpDo(url, {method:'POST',                                                  // command
           headers: {'cache-control': 'no-cache',
                      'X-AIO-Key': 'b326fc1eb05245a99bd8a2ac0292330a',                              //my io key
                      'content-type': 'application/json'},
                  body: JSON.stringify({value:324.435})},                                      // code from Roxanne  
      function(result){                                                    // during assistance
        console.log(result);
      },
      function(errresult){
        console.error(errresult);
      });
    }
 // }
 
function post(){                    //redundant function in the end
 
  if(dataReceived == 0)
  {iftttSend1()}
}
 
 
 
 
 
// function draw()
// {
 
//   //if ((gameClock + millis >= gameClock + timePlayed) && (timerIsSet)){
 
//   setInterval(checkTime(), 10000);
 
//   background(230);
  
//   fill (0);
//   textSize (32);
//   text ("SEAN HAS BEEN PLAYING VIDEO GAMES FOR:", 10, 200);  //text and things
 
//   textSize (100);
//   text (millis()/1000, 300, 350);          //print the timer on the webpage
 
//     if(millis > 1000) {
//     checkTime()
commit:209659
WIP on master