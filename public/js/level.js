var form = document.getElementById('form');
var input = document.getElementById('input');
var loc1 = new Audio('audio/loc1.WAV');
var loc2 = new Audio('audio/loc2.WAV');
var loc3 = new Audio('audio/loc3.wav');
var loc4 = new Audio('audio/loc4.wav');
var loc5 = new Audio('audio/loc5.wav');
var inputString = $("#input").val();
log1 = document.querySelector('#log1');
log2 = document.querySelector('#log2');
log3 = document.querySelector('#log3');
log4 = document.querySelector('#log4');
log5 = document.querySelector('#log5');
dreamlog = document.querySelector('#dreamlog');
back2 = document.querySelector('#back2');
objective = document.querySelector('#objective');
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


function levelOne(){
    console.log('lvl 1');
    inputString = '';
    dreamlog.style.display = "none";
    back2.style.display = "none";
    objective.style.display = "flex";
    log1.style.display = "none";
    log2.style.display = "none";
    log3.style.display = "none";
    log4.style.display = "none";
    log5.style.display = "none";
    document.querySelector('#rect13').style.fill = "black";
    document.querySelector('#rect21').style.fill = "black";
    document.querySelector('#rect19').style.fill = "black";
    document.querySelector('#rect17').style.fill = "black";
    document.querySelector('#rect15').style.fill = "black";


}

function levelTwo(){
    console.log('lvl 2');
    dreamlog.style.display = "flex";
    $("#dreamlog").text("Encased in concrete and metal armour, lie the keys to the pulsating veins of a mirror world. Whatever makes it inside its bloodstream, will travel fast and eternally through the nexus of time and space it occupies in that instant. I wake up kicking and screaming, like a new born child overstimulated by the harsh white lights of its new artificial surrounding. I was born dead I thought. Every time I looked down at my arms and hands, I saw those of a stranger, limp and disconnected body parts hanging from my torso. But in this mirror world, I am floating, intuitively, never doubting that the path in front was intended for me. Two interlaced grids sharing the same spatial markers. This dream is unlike any I can recall. At first, I did not realise you were here, watching me. But of course, there was a reason this dream was unlike any other."); 
    log1.style.display = "flex";
    log2.style.display = "none";
    log3.style.display = "none";
    log4.style.display = "none";
    log5.style.display = "none";
    document.querySelector('#rect13').style.fill = "#c9cdc0";
    document.querySelector('#rect21').style.fill = "black";
    document.querySelector('#rect19').style.fill = "black";
    document.querySelector('#rect17').style.fill = "black";
    document.querySelector('#rect15').style.fill = "black";
    objective.style.display = "none";
    back2.style.display = "flex";
}

function levelThree(){
    dreamlog.style.display = "flex";
    $("#dreamlog").text("Drivers and runners chased me out of the main street, away from the high frequencies, grounded by asphalt, I sat down. For hours, or maybe years. I watched the daylight change from electric blue to grey and back again. Time works differently in this world. Every moment is a lifetime, and every lifetime is a moment. Lifetimes, turning into fractures of moments as I blink my eyes open. Memory represents space in this world, and the processor is time. A simple organizing principle. I walk through this world, uncovering layers of information in bits. My memory builds places on top of coordinates, stacking information and emotion onto the spatial grid. My subconscious will spend night after night constructing dungeons and palaces from badly processed memories, for me to revisit endlessly. So here I am again. I am in the same space in a new timeline.");
    log1.style.display = "flex";
    log2.style.display = "flex";
    log3.style.display = "none";
    log4.style.display = "none";
    log5.style.display = "none";
    document.querySelector('#rect13').style.fill = "#c9cdc0";
    document.querySelector('#rect21').style.fill = "#c9cdc0";
    document.querySelector('#rect19').style.fill = "black";
    document.querySelector('#rect17').style.fill = "black";
    document.querySelector('#rect15').style.fill = "black";
    objective.style.display = "none";
    back2.style.display = "flex";

}

function levelFour(){
    dreamlog.style.display = "flex";
    $("#dreamlog").text("I do not recall ever meeting someone here. All these times I have sat down here, I had no idea you were so close. Then one time, I look up, and see you towering over me, with your massive metal arms, flashing and blinking. How could I miss you? Every time I returned, you grew taller and taller. Then one time you came down to sit with me. We talked for centuries, right here, me becoming you and you becoming me. And then, all of the sudden, my heartbeat synced with the static on your hands. We synced. In dreams, things can be distorted, strange. Walls can move and creatures change shape. But I knew exactly where I was, every time. And I knew instinctively where to find you.  When I squint my eyes now, looking at the street lights, I can almost see it again.");
    log1.style.display = "flex";
    log2.style.display = "flex";
    log3.style.display = "flex";
    log4.style.display = "none";
    log5.style.display = "none";
    document.querySelector('#rect13').style.fill = "#c9cdc0";
    document.querySelector('#rect21').style.fill = "#c9cdc0";
    document.querySelector('#rect19').style.fill = "#c9cdc0";
    document.querySelector('#rect17').style.fill = "black";
    document.querySelector('#rect15').style.fill = "black";
    objective.style.display = "none";
    back2.style.display = "flex";

}

function levelFive(){
    dreamlog.style.display = "flex";
    $("#dreamlog").text("The path to you is obscured now. You are out of reach for me, but you have grown so tall, you can see my every move. Your nervous system extends to every crack of the city. You sense the weight of every step I set down as I felt the weight of your gaze on my back. And now, since we synced, I am transparent to you. You can predict my next move. It used to be a game for us, but now all I want is to escape you. I tried to run circles to shake you off, mix with big crowds to wash out my signals. Up and down stairs and inside parking garages and court yards.");
    log1.style.display = "flex";
    log2.style.display = "flex";
    log3.style.display = "flex";
    log4.style.display = "flex";
    log5.style.display = "none";
    document.querySelector('#rect13').style.fill = "#c9cdc0";
    document.querySelector('#rect21').style.fill = "#c9cdc0";
    document.querySelector('#rect19').style.fill = "#c9cdc0";
    document.querySelector('#rect17').style.fill = "#c9cdc0";
    document.querySelector('#rect15').style.fill = "black";
    objective.style.display = "none";
    back2.style.display = "flex";

}

function levelSix(){
    dreamlog.style.display = "flex";
    $("#dreamlog").text("You were everywhere and in everything. Everywhere. I didn't not yet realise the meaning and weight. But I started to remember more and more from this world as I awoke in the other, until they became indistinguishable. You spilled into every moment of my waking hours, every cell of my body and every floor of my memory palace, overwriting my spaces. Memory is space in this world, and my brain has data rot. Right here is the home you built for us. I recognize the shapes of the walls and the sounds of the water. The canary yellow. It was here. It was right here. But you are the puzzle that was not meant to be solved.");
    log1.style.display = "flex";
    log2.style.display = "flex";
    log3.style.display = "flex";
    log4.style.display = "flex";
    log5.style.display = "flex";
    document.querySelector('#rect13').style.fill = "#c9cdc0";
    document.querySelector('#rect21').style.fill = "#c9cdc0";
    document.querySelector('#rect19').style.fill = "#c9cdc0";
    document.querySelector('#rect17').style.fill = "#c9cdc0";
    document.querySelector('#rect15').style.fill = "#c9cdc0";
    objective.style.display = "none";
    back2.style.display = "flex";

}


