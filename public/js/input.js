var socket = io();
       
socket.on('connection', function(data){
    console.log(data);
});
// socket.on('data', function(data){
//     console.log(data);
//     document.getElementById('sample').style.opacity = data+"%"; 
// });

socket.on('node5', function(sensorData){
    var reading = sensorData.message.decoded_payload.bytes[0]
    console.log("Sensor Reading",reading);
    // document.getElementById("file").value = sensor; 
     if(reading==11){
       alert('u won.');
     }
});

var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    var input = document.getElementById('input');
    var inputString = $("#input").val();
    log1 = document.querySelector('#log1');
    log2 = document.querySelector('#log2');
    log3 = document.querySelector('#log3');
    log4 = document.querySelector('#log4');
    log5 = document.querySelector('#log5');
    dreamlog = document.querySelector('#dreamlog');
    back2 = document.querySelector('#back2');
    objective = document.querySelector('#objective');

    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
        console.log(inputString);
    }

    if (inputString.includes('9.1.13.')){
        levelTwo();
        playTrack1();
        localStorage.setItem('gateway','1');
        console.log(localStorage.getItem('gateway'));
        loc1.play();
        
    }
    
     if (inputString.includes('16.18.15.')){
        levelThree();
        playTrack1();
        localStorage.setItem('gateway','2');
        console.log(localStorage.getItem('gateway'));
        loc2.play();
    }

    if (inputString.includes('20.5.3.')){
        levelFour();
        playTrack1();
        localStorage.setItem('gateway','3');
        console.log(localStorage.getItem('gateway'));
        loc3.play();
    }

    
    if (inputString.includes('20.15.18')){
        levelFive();
        playTrack1();
        localStorage.setItem('gateway','4');
        console.log(localStorage.getItem('gateway'));
        loc4.play();
    }

    if (inputString.includes('66')){
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        back2.style.display = "flex";
        $("#dreamlog").text("This place works differently. Add all the port numbers you received together in the right order and translate them into letters to receive a message. Enter the message to unlock the final log.");
        playTrack1();
        localStorage.setItem('gateway','5');
        console.log(localStorage.getItem('gateway'));
        console.log("stage 5");
        inputString = '';
        
    }

    if (inputString.includes('I AM PROTECTOR')){
        levelSix();
        playTrack1();
        localStorage.setItem('gateway','6');
        console.log(localStorage.getItem('gateway'));
        loc5.play();
    }
    else{
        $("#input").text("inactive port");

    }
}); 

zoommap = document.querySelector('#zoommap');
log = document.querySelector('#log');
info = document.querySelector('#info');
back = document.querySelector('#back');
back2 = document.querySelector('#back2');
dreamlog = document.querySelector('#dreamlog');
objective = document.querySelector('#objective');


function showLog(){                          
   log.style.visibility = "visible";
   back.style.visibility = "visible"; 
   $("#info").text("");                  
 
}

function showHelp(){                          
   log.style.visibility = "visible";
   $("#info").text("Locate the closest gateway by following the instructions in the text field and clicking on the landmarks on the map to move accordingly. As soon as you are in close proximity of a module, the game will detect this and display information on how to locate and operate the module. When set to the correct frequency, the module will reveal the local port code after a few seconds. Enter the received code into the port above to unlock one of five dream logs. The shape of the map is highly abstracted and should not be solely used for navigation. Follow the blue markings on the pavemment to make your way through the mirror world.");
   back.style.visibility = "visible";
}

function showAbout(){  
    log.style.visibility = "visible";                        
    $("#info").text("868 MHz is a hybrid reality game running on the same standardized frequency as the LoRa gateways of The Things Network. Chase the electric currents of the asphalt to locate gateways and encounter a being which has nested itself beneath the city streets, all the way down the power lines woven amidst its whirring epicenter. Early release for Tec Art 2022, in progress master graduation work by Experimental Publishing student Louisa Teichmann. Module cases designed and 3D printed by Roos Groothuizen. Sound design by Kevin Stam. Logo design by Camilo García A. Realised in support by Planetart, TETEM, Joseph Knierzinger, Michael Murthaugh, Cristina Cochior and in inspiration and conversation with Mika Motskobili and with mental support by Micah Snijkers. Don't hate the game, hate the players. Just kidding, I hope you're finding your way ok.");
    back.style.visibility = "visible";
    
}

function backAgain(){  
    log.style.visibility = "hidden";                        
    back.style.visibility = "hidden";
}

function backAgain2(){  
    dreamlog.style.display = "none";                       
    back2.style.display = "none";
    objective.style.display = "flex";
}

function log1Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("Encased in its concrete and metal armour, lie the keys to the pulsating veins of a mirror world. Whatever makes it inside its bloodstream, will travel fast and eternally through the nexus of time and space it occupies in that instant. I wake up kicking and screaming, like a new born child overstimulated by the harsh white lights of its new artificial surrounding. I was born dead I thought. Every time I looked down at my arms and hands, I saw those of a stranger, limp and disconnected body parts hanging from my torso. But in this mirror world, I am floating, intuitively, never doubting that the path in front was intended for me. Two interlaced grids sharing the same spatial markers. This dream is unlike any I can recall. At first, I did not realise you were here, watching me. But of course, there was a reason this dream was unlike any other."); 
    $("#log1").toggleClass("activelog");
}

function log2Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("Drivers and runners chased me out of the main street, away from the high frequencies, grounded by asphalt, I sat down. For hours, or maybe years. I watched the daylight chance from electric blue to grey and back again. Time works differently in this world. Every moment is a lifetime, and every lifetime is a moment. And as soon as I wake up, it all feels insignificant. Memory represents space in this world, and the processor is time. A simple organizing principle. I walk through this world, uncovering layers of information in bits. My memory builds places on top of coordinates, stacking information and emotion onto the spatial grid. My subconscious will spend night after night constructing dungeons and palaces from badly processed memories, for me to revisit endlessly. So here I am again. I am in the same space in a new timeline.");
}

function log3Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("I do not recall ever meeting someone here. All these times I have sat down here, I had no idea you were so close. Then one time, I look up, and see you towering over me, with your massive metal arms, flashing and blinking. How could I miss you? Every time I returned, you grew taller and taller. Then one time you came down to sit with me. We talked for centuries, right here, me becoming you and you becoming me. And then, all of the sudden, my heartbeat synced with the static on your hands. We synced. In dreams, things can be distorted, strange. Walls can move and creatures change shape. But I knew exactly where I was, every time. And I knew instinctively where to find you.  When I squint my eyes now, looking at the street lights, I can almost see it again.");
}

function log4Open(){ 
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex"; 
    $("#dreamlog").text("The path to you is obscured now. You are out of reach for me, but you have grown so tall, you can see my every move. Your nervous system extends to every crack of the city. You sense the weight of every step I set down as I felt the weight of your gaze on my back. And now, since we synced, I am transparent to you. You can predict my next move. It used to be a game for us, but now all I want is to escape you. I tried to run circles to shake you off, mix with big crowds to wash out my signals. Up and down stairs and inside parking garages and court yards.");
}

function log5Open(){ 
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex"; 
    $("#dreamlog").text("You were everywhere and in everything. Everywhere. I didn't not yet realise the meaning and weight. But I started to remember more and more from this world as I awoke in the other, until they became indistinguishable. You spilled into every moment of my waking hours, every cell of my body and every floor of my memory palace, overwriting my spaces. Memory is space in this world, and my brain has data rot. Right here is the home you built for us. I recognize the shapes of the walls and the sounds of the water. The canary yellow. It was here. It was right here. But you are the puzzle that was not meant to be solved.");
}

var loc1 = new Audio('./audio/loc1.WAV');
var loc2 = new Audio('./audio/loc2.WAV');
var loc3 = new Audio('./audio/loc3.wav');
var loc4 = new Audio('./audio/loc4.wav');
var loc5 = new Audio('./audio/loc5.wav');
r1 = document.querySelector('#rect13');
r2 = document.querySelector('#rect23');
r3 = document.querySelector('#rect35');
r4 = document.querySelector('#rect37');
r5 = document.querySelector('#rect27');
r6 = document.querySelector('#rect39');
r7 = document.querySelector('#rect41');
r8 = document.querySelector('#rect43');
r9 = document.querySelector('#rect19');
r10 = document.querySelector('#rect45');
r11 = document.querySelector('#rect47');
r12 = document.querySelector('#rect17');
r13 = document.querySelector('#rect49');
r14 = document.querySelector('#rect51');
r15 = document.querySelector('#rect15');


function playTrack1(){
    var Track1 = new Audio('./audio/unlocked.mp3');
    Track1.play();
}

function playTrack2(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    music2.play();
}

function breadCrumb1(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I am standing outside the gallery space, hearing an unusual sound.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    
    fillCrumbs();
    // document.querySelector("#rect23").style.fill = "pink";
    r2.style.fill = "#ff2400";


}

function breadCrumb2(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I follow it down to the right, into a sidestreet that leads me past a parking garage covered in ivy.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";

    fillCrumbs();
    r3.style.fill = "#ff2400";
}

function breadCrumb3(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("From here I can see an open gate, but I do not enter. Just to the right of it, there is a path leading me to a high voltage metal door.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r4.style.fill = "#ff2400";
}

function breadCrumb4(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I turn around, back to the gate. I still don't enter, but walk towards lights and noise, turning left and then right on the busy street.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r6.style.fill = "#ff2400";
}

function breadCrumb5(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I keep on walking until I reach a massive pile of sand. I move swiftly along the construction fence, past the entrance of a church.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r7.style.fill = "#ff2400";
}

function breadCrumb6(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see you now. I cross the street, walking towards benches covered in overgrown bushes. This is where we meet.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r8.style.fill = "#ff2400";
}

function breadCrumb7(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I head towards the big water, but just before I reach the busy road, I take a turn left into a narrow side street. From here I can see a big white building, with many round windows and lights.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r10.style.fill = "#ff2400";
}

function breadCrumb8(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I walk past it and head left, past you until I almost cannot walk any further. I run up the stairs, up and down, trying to shake you off. As I head down the second staircase, I see a small metal staircase on the backside of a building.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r11.style.fill = "#ff2400";
}

function breadCrumb9(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see large metal structures by the water.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r13.style.fill = "#ff2400";
}

function breadCrumb10(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("A metallic bridge leads me over water, to the final gateway.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r14.style.fill = "#ff2400";
}

function breadCrumb11(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see large metal structures by the water.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective1(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("Welcome to the Gallery. Take your time, look around. When you are ready, notice the little transparent module mounted on the wall in the corner. Turn the knob to 55 and keep it steady there for a moment until a number code is revealed. Enter it in the port above, with attention to the dots, to unlock the first dream log.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective2(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("You have entered the second gateway. The code is hidden on a metal door locking in high voltage. You will see three digits, loose the first to get the code.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective3(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text(" Welcome to Gateway 3. The module is located on yellow. Hidden on a number wheel in a window close by, you will find the code spelled out in large letters. Loose the first digit.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective4(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("The code is hidden on a tag on a small metal staircase: OCTOZILLA, followed by four digits. Loose the first two. The module is not far.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective5(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("The code is hidden on a sign next to a yellow bench. Port of Rotterdam. Loose the first digit. The module is hidden out of sight, facing the house boat.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function fillCrumbs(){
    var crumbs = document.querySelectorAll(".crumbs");
    crumbs.forEach(function(crumb){
        crumb.style.fill = "#818779";
    });
}