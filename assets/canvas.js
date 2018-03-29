////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Al de rest code staat in commentaar. Dit word niet gebruikt en mag dus genegeerd worden.////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Dodge 'n Score v1.6.1///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////Made by: Tim Knobben///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////(Geen code jatten hé!)//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function init(){
    
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var imageObj = new Image();
    
    var cwidth  = 1300;
    var cheight = 600;
    
    var width = 60;
    var height = 60;
    
    var player = {
        posX   : -35,
        posY   : -(100+82),
        width  : 70,
        height : 79,
        deg    : 0
    };
    
    imageObj.src = 'canvasimg/soccerball2.png';
    
    img=new Image();
    img.onload=function(e){
        ctx.drawImage(imageObj, 100, 100, 60, 60);
        var pos = getMousePos(canvas, e);
        posx = pos.x - 30;
        posy = pos.y - 30;
        ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);      
        ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
            ctx.drawImage(imageObj, posx, posy, width, height);
            
            ctx.beginPath();
            ctx.rect(188, 50, 200, 100);
            ctx.fillStyle = 'yellow';
            ctx.stroke();
            ctx.closePath();
    
            ctx.beginPath();
            ctx.moveTo(433, 0);
            ctx.lineTo(433, 600);
            ctx.stroke();
            ctx.closePath();
    
            ctx.beginPath();
            ctx.moveTo(866, 0);
            ctx.lineTo(866, 600);
            ctx.stroke();
            ctx.closePath();
    }
    img.src="canvasimg/grass3.png";
    
    function draw(e) {
        
        var pos = getMousePos(canvas, e);
        posx = pos.x - 30;
        posy = pos.y - 30;
        imageObj.onload = function() {
            
            if(pos.y > 600 || pos.y < 0 || pos.x > 866 || pos.x < 0) {
                console.log("hij is er overheen!");
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
                ctx.drawImage(imageObj, 0, posy - 30, width, height);
                
                ctx.beginPath();
                ctx.rect(188, 50, 200, 100);
                ctx.fillStyle = 'yellow';
                ctx.stroke();
                ctx.closePath();
    
                ctx.beginPath();
                ctx.moveTo(433, 0);
                ctx.lineTo(433, 600);
                ctx.stroke();
                ctx.closePath();
    
                ctx.beginPath();
                ctx.moveTo(866, 0);
                ctx.lineTo(866, 600);
                ctx.stroke();
                ctx.closePath();   
            } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
            ctx.drawImage(imageObj, posx, posy, width, height);
            
            ctx.beginPath();
            ctx.rect(188, 50, 200, 100);
            ctx.fillStyle = 'yellow';
            ctx.stroke();
            ctx.closePath();
    
            ctx.beginPath();
            ctx.moveTo(433, 0);
            ctx.lineTo(433, 600);
            ctx.stroke();
            ctx.closePath();
    
            ctx.beginPath();
            ctx.moveTo(866, 0);
            ctx.lineTo(866, 600);
            ctx.stroke();
            ctx.closePath();  
                
            }
        };
        imageObj.src = 'canvasimg/soccerball2.png';
    }
    
    score = "Score: 0";
theDiv = document.getElementById('score1');
theDiv.appendChild( document.createTextNode( score ) );
    
    window.addEventListener('mousemove', draw, false);
    
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

window.addEventListener("load", init, false);

*/

//if(localStorage.getItem('submitScore') == 1) {
    //localStorage.setItem('submitScore',0);
    //window.location.href = "/canvas.php";
//}

//seconden naar 20 zetten. dit word gebruikt voor de countdown om te kunnen wanneer het spel versneld word
var stringtextTime = "00:00:00"; 

var timeAliveRecord;

var timeAliveInSeconds  = 0;
var timeAliveInSecondsR = 0;
var timeAlive1          = 0;
var timeAliveSec        = 0;
var timeAliveSecR       = 0;
var timeAliveMin        = 0;
var timeAliveMinR       = 0;

var sec = 20;

var difficulty = 1;

var timer1;
var timer2;
var timer3;
var timer4;

//Array's aanmaken voor de enemies
var enemyYPositions = [];	
var enemyXPositions = [];

//Array's aanmaken voor de 'scores'
var scoreYPositions = [];	
var scoreXPositions = [];

//Array's aanmaken voor de Double Points
var DPYPositions = [];	
var DPXPositions = [];

//Array's aanmaken voor de Triple Points
var TPYPositions = [];	
var TPXPositions = [];

//De game standaard op niet active zetten om visual glitches te voorkomen
var gameIsActive = false;

var instructionsMenu = false;

//Speler is niet dood vanaf het begin
var PlayerIsDead = false;

//Begin positie speler
var playerX = 650;
var playerY = 300;

//foto's variablen alvast aanmaken
var avatarImage;
var backgroundImage;


// variabelen voor de slider in het instructie menu aanmaken en de foto's aanwijzen waar ze staan
var sliderCounter  = 0;
var sliderCounter2 = 10;
var image0 = new Image();
image0.src = "assets/canvas/canvasimg/instructions1.png";
var image1 = new Image();
image1.src = "assets/canvas/canvasimg/instructions3.png";
var image2 = new Image();
image2.src = "assets/canvas/canvasimg/instructions4.png";
var image3 = new Image();
image3.src = "assets/canvas/canvasimg/instructions6.png";

// alle tekst voor het instructie menu
var image0text0 = "In the bottom right corner you can see the time until a speed ";
var image0text10 = "up, which difficulty level you are on, your score and your highscore";
var image0text100 = "Every difficulty the game goes faster. Difficulty 6 is max speed";

var image1text1 = "There are 4 objects in the game. You play as the ball. Then";
var image1text20 = "there's the goals. Normal goals are x1 score. Double Points are";
var image1text200 = "x2 score. Triple Points are x3 score. Don't touch the enemies!";

var image2text2 = "It's also possible to unlock achievements in this game.";
var image2text30 = "You can unlock them to do something like score 100 goals.";
var image2text300 = "Press A in the main menu to check your achievements";

var image3text3 = "There is not really a goal in this game (pun not intended)";
var image3text40 = "Just try to get the highest score and unlock the achievements!";
var image3text400 = "Have fun playing Dodge 'n Score!";

// alle images in een array zetten zodat ze gemakkelijk laten zien kunnen worden
images     = new Array(image0, image1, image2, image3);
imagestext1 = new Array(image0text0, image1text1, image2text2, image3text3);
imagestext2 = new Array(image0text10, image1text20, image2text30, image3text40);
imagestext3 = new Array(image0text100, image1text200, image2text300, image3text400);

// voor wanneer de achievements behaald worden
var run1 = true;
var run2 = true;
var run3 = true;
var run4 = true;

var runFunction1 = false;
var runFunction2 = false;
var runFunction3 = false;
var runFunction4 = false;

//Variable SpeedingUp1 aanmaken zodat dit later veranderd kan worden in het spel
var SpeedingUp1 = "Speeding up in: ";

//aantal geluiden in het spel
var explosion;
var explosion1;
var explosion2;

//main menu achtergrond afbeelding aanmaken
var mainmenuimg;

//geen idee wat dit ook al weer is word verder ook niet gebruikt
var mainX1 = 1;
var mainY1 = Math.random()*50;

//plaats waar de geluiden staan aangeven
explosion1       = new Audio("assets/canvas/sounds/Last Breath.mp3");
explosion4       = new Audio("assets/canvas/sounds/pompen.mp3");
soundAchievement = new Audio("assets/canvas/sounds/achievement.wav");
explosion1.play();

//score en highscore variablen aanmaken
var score     = 0;
var highscore = 0;

//init functie. Word gestart wanneer de pagina geladen is. Hierin word de muziek gestart. Afbeeldingen geladen en het main menu opgestart
function init() {
    
//submitScore in localStorage aanmaken voor als er een score word verzonden naar de database
localStorage.setItem("submitScore", 0);
    
//als de speler de pagina voor het eerst laadt, in local storage 'highscore' aanmaken en anders de highscore uit local storage ophalen
    if(localStorage.getItem('highscore') == null) {
        highscore = 0;    
    } else {
        highscore = localStorage.getItem('highscore');   
    }
    
    if(localStorage.getItem('tijdInLeven') == null) {
        stringtextTime = "00:00:00";   
    } else {
        stringtextTime = localStorage.getItem('tijdInLeven');   
    }
    
    if(localStorage.getItem('timeAliveInSeconds') == null) {
        timeAliveInSeconds = 0;   
    } else {
        timeAliveInSeconds = localStorage.getItem('timeAliveInSeconds');   
    }
    
    
    if(localStorage.getItem('achievement1') == null) {
        localStorage.setItem('achievement1', 0);   
    }
    
    if(localStorage.getItem('achievement2') == null) {
        localStorage.setItem('achievement2', 0);   
    }
    
    if(localStorage.getItem('achievement3') == null) {
        localStorage.setItem('achievement3', 0);   
    }
    
    if(localStorage.getItem('achievement4') == null) {
        localStorage.setItem('achievement4', 0);   
    }
    /*
    if(localStorage.getItem('achievement1check') == null) {
        localStorage.setItem('achievement1check', 0);   
    }
    
    if(localStorage.getItem('achievement2check') == null) {
        localStorage.setItem('achievement2check', 0);   
    }
    
    if(localStorage.getItem('achievement3check') == null) {
        localStorage.setItem('achievement3check', 0);   
    }
    
    if(localStorage.getItem('achievement4check') == null) {
        localStorage.setItem('achievement4check', 0);   
    }
    */
// canvas laten zien aan javascript zodat er op getekend kan worden
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //var SpeedingUp = ctx.fillText("Speeding up in: " + sec,1150,520);
    //explosion1 = new Audio("sounds/Last Breath.wav");
    
//images aanmaken en de plek laten zien waar ze staan
    mainmenuimg         = new Image();
    rodekaart           = new Image();
    mainmenuimg.src     = "assets/canvas/canvasimg/mainmenu.jpg";
    avatarImage         = new Image();
    avatarImage.src     = "assets/canvas/canvasimg/rsz_soccerball2.png";
    rodekaart.src       = "assets/canvas/canvasimg/rodekaart.png";
    
    checkRefresh();
        //explosion1.play();
    
//zodra de achtergrond afbeelding geladen is, de tekst op de canvas tekenen.
    mainmenuimg.onload = function() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(mainmenuimg, 0, 0);
        console.log("drawimage");
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(225,225,225,0.7)';
        ctx.fillRect(10,90,380,150);
        ctx.rect(10, 90, 380, 150);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 45px Arial";
        ctx.fillText("Dodge 'n Score",200,150);
        ctx.font = "30px Arial";
        ctx.fillText("Press Enter to start!",200,200);
        ctx.fillStyle = 'rgba(225,225,225,0.7)';
        ctx.fillRect(80,270,540,200);
        ctx.rect(80, 270, 540, 200);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 30px Arial";
        ctx.fillText("Controls:",350,300);
        ctx.font = "30px Arial";
        ctx.fillText("Use the mouse to move the ball around",350,350);
        ctx.fillText("Press R to restart the game",350,400);
        ctx.fillText("Press C to see more controls",350,450);
        ctx.fillStyle = 'rgba(225,225,225,0.7)';
        ctx.fillRect(680,270,540,200);
        ctx.rect(680, 270, 540, 200);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 30px Arial";
        ctx.fillText("Instructions:",950,300);
        ctx.font = "30px Arial";
        ctx.fillText("Avoid all the defenders",950,350);
        ctx.fillText("and score the goals!",950,400);
        ctx.fillText("Press I for more instructions!",950,450);
        ctx.fillStyle = 'rgba(225,225,225,0.7)';
        ctx.fillRect(750,115,400,100);
        ctx.rect(750, 115, 400, 100);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "30px Arial";
        ctx.fillText("Highscore: " + highscore,950,150);
        ctx.fillText("Time alive: " + stringtextTime,950,200);
        ctx.font = "10px Arial";
        ctx.fillText("v1.6.1",30,100);
        ctx.font = "20px Arial";
        ctx.fillText("Made by: Tim Knobben",650,530);
        //ctx.fillText("Press H to see the highscores!",650,580);
        ctx.drawImage(avatarImage, 50, 50);
        ctx.stroke();
    };       
}

function showHighscores() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.textAlign = 'center';
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';
    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("Highscores",650,100);
    ctx.font = "bold 30px Arial";
    ctx.fillText("Here are some of the highest scores players have submitted: ",650,150);
    //ctx.drawImage(image0, 450, 325);
    ctx.font = "30px Arial";
    ctx.fillText("1.", 650, 200);
    ctx.fillText("2.", 650, 250);
    ctx.fillText("3.", 650, 300);
    ctx.fillText("4.", 650, 350);
    ctx.fillText("5.", 650, 400);
    ctx.font = "bold 20px Arial";
    ctx.fillText("Make sure to reach the highscores!",650,485);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    //ctx.fillText("Press H to see the highscores!",650,580);
}

//controls functie. Deze word uitgevoerd zodra de speler in het main menu op C drukt.
function controls() {
//achtergrond afbeelding opnieuw aanmaken.
    mainmenuimg         = new Image();
    mainmenuimg.src     = "assets/canvas/canvasimg/mainmenu.jpg";

//canvas laten zien aan javascript zodat er op getekend kan worden
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
//canvas leeghalen, opnieuw de achtergrond afbeelding tekenen en daarna de rest van de tekst tekenen.
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.textAlign = 'center';
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';

    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("All controls",650,90);
    ctx.font = "30px Arial";
    ctx.fillText("Use the mouse to move the ball around",650,130);
    ctx.fillText("Press R to restart the game",650,180);
    ctx.fillText("Press P to pause/resume the music",650,230);
    ctx.fillText("To reset your scores, press 1, 2 and 4 simultaneously",650,280);
    ctx.fillText("Press enter to start the game!",650,330);
    ctx.fillText("Press A to see your achievements!",650,380);
    ctx.fillText("Press I to see more instructions!",650,430);
    ctx.font = "bold 30px Arial";
    ctx.fillText("Press B to go back to the main menu",650,480);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    //ctx.fillText("Press H to see the highscores!",650,580);

}

function instructions() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.textAlign = 'center';
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';
    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("Instructions",650,100);
    ctx.font = "bold 30px Arial";
    ctx.fillText("Here are some instructions before playing the game:",650,150);
    ctx.drawImage(image0, 450, 325);
    ctx.font = "30px Arial";
    ctx.fillText(imagestext1[sliderCounter], 650, 200);
    ctx.fillText(imagestext2[sliderCounter], 650, 250);
    ctx.fillText(imagestext3[sliderCounter], 650, 300);
    ctx.font = "bold 20px Arial";
    ctx.fillText("Use the arrow keys to navigate through the instructions",650,485);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    //ctx.fillText("Press H to see the highscores!",650,580);
}

function nextImage() {
// deze functie word uitgevoerd zodra de gebruiker op I heeft gedrukt van instructions en nadat hij het pijltje naar rechts in drukt
    sliderCounter += 1;
    sliderCounter2 += 10;
    if (sliderCounter == images.length) {
        sliderCounter = 0;
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    mainmenuimg         = new Image();
    mainmenuimg.src     = "assets/canvas/canvasimg/mainmenu.jpg";
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';
    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("Instructions",650,100);
    ctx.drawImage(images[sliderCounter], 450, 275);
    ctx.font = "30px Arial";
    ctx.fillText(imagestext1[sliderCounter], 650, 150);
    ctx.fillText(imagestext2[sliderCounter], 650, 200);
    ctx.fillText(imagestext3[sliderCounter], 650, 250);
    ctx.font = "bold 20px Arial";
    ctx.fillText("Use the arrow keys to navigate through the instructions",650,455);
    ctx.fillText("Press B to go back to the main menu",650,480);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    //ctx.fillText("Press H to see the highscores!",650,580);
}

// deze functie word uitgevoerd zodra de gebruiker op I heeft gedrukt van instructions en nadat hij het pijltje naar links in drukt
function prevImage() {
    sliderCounter -= 1;
    sliderCounter2 -= 10;
    if (sliderCounter == -1) {
        sliderCounter = 3;
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    mainmenuimg         = new Image();
    mainmenuimg.src     = "assets/canvas/canvasimg/mainmenu.jpg";
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';
    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("Instructions",650,100);
    ctx.drawImage(images[sliderCounter], 450, 275);
    ctx.font = "30px Arial";
    ctx.fillText(imagestext1[sliderCounter], 650, 150);
    ctx.fillText(imagestext2[sliderCounter], 650, 200);
    ctx.fillText(imagestext3[sliderCounter], 650, 250);
    ctx.font = "bold 20px Arial";
    ctx.fillText("Use the arrow keys to navigate through the instructions",650,455);
    ctx.fillText("Press B to go back to the main menu",650,480);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    //ctx.fillText("Press H to see the highscores!",650,580);
}

//achievements functie. voor het laden van de achievements om te laten zien welke gedaan is en welke niet in het main menu
function achievements() {
//achtergrond afbeelding opnieuw aanmaken.
    mainmenuimg         = new Image();
    mainmenuimg.src     = "assets/canvas/canvasimg/mainmenu.jpg";

//canvas laten zien aan javascript zodat er op getekend kan worden
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
//canvas leeghalen, opnieuw de achtergrond afbeelding tekenen en daarna de rest van de tekst tekenen.
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.textAlign = 'center';
    ctx.drawImage(mainmenuimg, 0, 0);
    ctx.fillStyle = 'rgba(225,225,225,0.7)';
    ctx.fillRect(200,50,900,450);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.font = "bold 45px Arial";
    ctx.fillText("Achievements",650,100);
    ctx.font = "bold 40px Arial";
    ctx.fillText("There are a total of 4 achievements!",650,150);
    ctx.font = "bold 30px Arial";
    ctx.fillText("________________________________________________",650,375);
    ctx.fillStyle = 'rgba(6,143,10,1.0)';
    ctx.fillText("Green",445,425);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillText(" = unlocked  |",580,425);
    ctx.fillStyle = 'rgba(184,9,9,1.0)';
    ctx.fillText(" Red",715,425);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillText(" = locked",815,425);
    ctx.fillText("Press B to go back to the main menu",650,475);
    ctx.font = "20px Arial";
    ctx.fillText("Made by: Tim Knobben",650,530);
    /*
    if(localStorage.getItem('achievement1') == null) {
        ctx.fillText("No achievements yet!",650,250); 
    }
    */
    ctx.font = "30px Arial";
    if(localStorage.getItem('achievement1') == 1) {
        ctx.fillStyle = 'rgba(6,143,10,1.0)';
        ctx.fillText("Pro Dodger: Reached difficulty level 6 (Max Speed) with 0 score!",650,200);   
    } else {
        ctx.fillStyle = 'rgba(184,9,9,1.0)';
        ctx.fillText("Pro Dodger: Reach difficulty level 6 (Max Speed) with 0 score!",650,200);
    }
    
    if(localStorage.getItem('achievement2') == 1) {
        ctx.fillStyle = 'rgba(6,143,10,1.0)';
        ctx.fillText("Top Scorer: Scored 100 goals (in one game)",650,300);   
    } else {
        ctx.fillStyle = 'rgba(184,9,9,1.0)';
        ctx.fillText("Top Scorer: Score 100 goals (in one game)",650,300);
    }
    
    if(localStorage.getItem('achievement3') == 1) {
        ctx.fillStyle = 'rgba(6,143,10,1.0)';
        ctx.fillText("Survivor: Held the ball for 4 minutes straight!",650,250);   
    } else {
        ctx.fillStyle = 'rgba(184,9,9,1.0)';
        ctx.fillText("Survivor: Hold the ball for 4 minutes straight!",650,250);
    }
    
    if(localStorage.getItem('achievement4') == 1) {
        ctx.fillStyle = 'rgba(6,143,10,1.0)';
        ctx.fillText("Lionel Messi: Scored 150 goals (in one game)",650,350);   
    } else {
        ctx.fillStyle = 'rgba(184,9,9,1.0)';
        ctx.fillText("Lionel Messi: Score 150 goals (in one game)",650,350);
    }  
        //ctx.fillText("Press R to restart the game",650,250);
        //ctx.fillText("Press P to pause/resume the music",650,300);
        //ctx.fillText("To reset your highscore to 0, press 1, 2 and 4 simultaneously",650,350);
        //ctx.fillText("Press enter to start the game!",650,400);
        //ctx.fillText("Press B to go back to the main menu",650,450);
}

////////begin of submit score////////
    
    function submitScore() {
        var name = prompt("Please enter your name to submit your score:", "Your name"); 
    
        if(name) {
            window.location.href = "/canvas.php?name="+name+"&score="+score+"&timeAlive="+String(timeAliveThisGame)+"&timeInSec="+timeAlive1; 
            localStorage.setItem("submitScore",1);   
        }
    }
    
    ////////end of submit score//////////

//in local storage kijken wat de 'int' van refresh is. deze is of 0 of 1. Dit word gebruikt om te kijken wanneer de speler het spel herstart met R. Wanneer hij 1 is de waarde terug naar 0 zetten en het spel opstarten door het main menu over te slaan.
function checkRefresh() {
    if(localStorage.getItem('refresh') == 1) {
        localStorage.setItem('refresh',0);
        setUpGame();
    }
}

//functie om te kijken welke knop(pen) worden ingedrukt
window.onkeydown = function (e) {
//wanneer P is ingedrukt, de achtergrond muziek op pauze zetten wanneer de muziek speelt en doorspelen als de muziek op pauze staat.
    if (e.keyCode == 80) {
        console.log("P is ingedrukt!");
        if(!explosion1.paused == false) {
            explosion1.play();
        } else {
            explosion1.pause();
        }
    }
    /*
    if(e.keyCode == 72) {
        instructionsMenu = false;
        if(!gameIsActive) {
            showHighscores();
        }
    }
    */
//wanneer de speler in het main menu zit en op C drukt, word het controls menu geladen.
    if (e.keyCode == 67) {
        instructionsMenu = false;
        if(!gameIsActive) {
            controls();
        }
    }
    
//wanneer rechter pijltje word ingedrukt terwijl de gebruiker in het instructie menu zit, nextImage functie uitvoeren    
    if (e.keyCode == 39) {
        if(!gameIsActive) {
            if(instructionsMenu) {
                console.log(sliderCounter);
                nextImage();
            }
        }
    }

//wanneer linker pijltje word ingedrukt terwijl de gebruiker in het instructie menu zit, prevImage functie uitvoeren
    if (e.keyCode == 37) {
        if(!gameIsActive) {
            if(instructionsMenu) {
                console.log(sliderCounter);
                prevImage();
            }
        }
    }

//wanneer de speler in het main menu zit en op A drukt, word het achievement menu geladen.
    if (e.keyCode == 65) {
        instructionsMenu = false;
        if(!gameIsActive) {
            achievements();
        }
    }

//wanneer I word ingedrukt de instructions functie uitvoeren
    if (e.keyCode == 73) {
        instructionsMenu = true;
        if(!gameIsActive) {
            instructions();
        }
    }

//als de speler in het controls menu zit kan de speler op B drukken door terug te gaan naar het main menu. Dit kan alleen als de game niet bezig is.
    if (e.keyCode == 66) {
        instructionsMenu = false;
        if(!gameIsActive) {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            init();
        }
    }

//wanneer R is ingedrukt de pagina herladen en de game starten
    if (e.keyCode == 82) {
        console.log("R is ingedrukt!");
        localStorage.setItem('refresh',1);
        location.reload();
    }

//wanneer in het main menu enter word ingedrukt, de game starten. dit kan alleen in het main menu
    if (e.keyCode == 13) {
        if(!gameIsActive) {
            instructionsMenu = false;
            console.log("Enter is ingedrukt!");
            setUpGame();
        }
    }
    
    if(e.keyCode == 83) {
        if(PlayerIsDead) {
            submitScore();
        }
    }
};

// wanneer er meerdere knoppen tegelijk ingedrukt worden
var down = [];
    $(document).keydown(function(e) {
        down[e.keyCode] = true;
    }).keyup(function(e) {
//wanneer de knoppen PMDSW tegelijk worden ingedrukt worden, easter egg song afspelen namelijk: Pompen met die subwoofer!       
    if (down[80] && down[77] && down[68] && down[83] && down[87]) {
        explosion1.pause();
        explosion4.play();
    }

//wanneer 1,2 en 4 tegelijk worden ingedrukt, een alert opbrengen met de melding dat highscores zodra ze worden verwijderd niet hersteld kunnen worden. Wanneer er vervolgens in het confirm schermpje op OK word gedrukt, de highscores uit local storage verwijderen.
    if(!gameIsActive) {  
        if (down[49] && down[50] && down[52]) {
            alert("There is no way to recover deleted highscores,achievements and time alive!");
            if (confirm('Are you sure you want to delete all your highscores, achievements AND time alive?')) {
                console.log("4 is ingedrukt!");
                localStorage.setItem('highscore',0);
                localStorage.setItem('achievement1',0);
                localStorage.setItem('achievement2',0);
                localStorage.setItem('achievement3',0);
                localStorage.setItem('achievement4',0);
                localStorage.setItem('tijdInLeven','00:00:00');
                localStorage.setItem('timeAliveInSeconds',0);
                //localStorage.setItem('achievement1check',0);
                //localStorage.setItem('achievement2check',0);
                //localStorage.setItem('achievement3check',0);
                //localStorage.setItem('achievement4check',0);
                location.reload();
            }
        }
    }
    down[e.keyCode] = false;
});

//AddTimer functie. Word gebruikt voor de timer rechts onderin het scherm om aan te geven wanneer het spel sneller gaat.
function AddTimer() {
    if(sec < 0) {
        sec = 20;
    }
}

//setUpGame functie. Deze word uitgevoerd wanneer de speler op ENTER drukt. 
function setUpGame() {
//countdown aanmaken. elke 1000 miliseconde gaat er 1 seconde van de timer af.    
    var countdown = setInterval(function(){
        sec--;  
      },1000);
//game op Active zetten
    gameIsActive = true;
//canvas laten zien aan javascript zodat er op getekend kan worden
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
	//var gameCanvas = document.getElementById("canvas");
    
//images die gebruikt worden in het spel laden en aangeven waar ze staan.
    enemyImage2         = new Image();
	enemyImage          = new Image();
    backgroundImage     = new Image();
    scoreImage          = new Image();
    DPImage             = new Image();
    DPImage1            = new Image();
    TPImage             = new Image();
    explosion           = new Audio("assets/canvas/sounds/dingshort.wav");
    explosionextra      = new Audio("assets/canvas/sounds/dingshort.wav");
    explosionextra2     = new Audio("assets/canvas/sounds/dingshort.wav");
    explosion2          = new Audio("assets/canvas/sounds/fluitje.wav");
    backgroundImage.src = "assets/canvas/canvasimg/grass3.jpg";
    scoreImage.src      = "assets/canvas/canvasimg/rsz_goal1.png";
    DPImage.src         = "assets/canvas/canvasimg/rsz_goalx2.png";
    DPImage1.src        = "assets/canvas/canvasimg/rsz_goalx21.png";
    TPImage.src         = "assets/canvas/canvasimg/rsz_goaltp.png";

    //if(Math.random() <= 0.5) {
        enemyImage2.src = "assets/canvas/canvasimg/rsz_defender2.png";
        enemyImage.src = "assets/canvas/canvasimg/rsz_defender3.png";
    //} else {
    //    enemyImage.src = "canvasimg/defender2.png";
    //}
//de bal (speler) tekenen   
	ctx.drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
//handleMouseMovement om de plek van de muis te achterhalen.
	canvas.addEventListener("mousemove", handleMouseMovement);

//volgende countdown voor als de tijd tussen het sneller gaan van het spel van 20 seconden naar 40 seconden gaat.
    var countdown2 = setInterval(function(){ 
            sec = 40;
        }, 41000);

    var countdownAlive = setInterval(function(){
        timeAlive1 += 0.01;
        timeAliveSec += 0.01;
        timeAliveSecR = timeAliveSec.toFixed(2);
        
        if (timeAliveSecR.toString().length == 4) {
            timeAliveSecR = "0" + timeAliveSecR;
        }
        
        if(timeAliveSecR > 59.99) {
            timeAliveMin += 1;
            timeAliveMinR = timeAliveMin.toFixed(0);
            timeAliveSec = 0;
        /*    
            if (timeAliveMinR.toString().length == 1) {
                timeAliveMinR = "0" + timeAliveMinR;
            }   
        */   
            //console.log("Time Alive in Minutes: " + timeAliveMin);
        }
        if(PlayerIsDead == true) {
            clearInterval(countdownAlive);   
        }
        //console.log("Seconds " + timeAliveSec);
      },10);
    
//zodra de maximale snelheid na 163 seconden bereikt is, de andere countdown wegdoen en er "Max Speed!" neerzetten
    setInterval(function(){ 
        clearInterval(countdown);
        clearInterval(countdown2);
        SpeedingUp1 = "Max";
        sec = " Speed!";
    }, 163100);
    
    //setInterval(function(){ 
     //   }, 82000);
//standaard interval. elke 30 miliseconden word de handleTick functie opnieuw uitgevoerd zodat de enemies en scores bewegen (soort van)   
    var interval123 = setInterval(handleTick, 30);
    //var difficulty = 1;
//na 21 seconden gaat het spel ietsjes sneller. dit gebeurd door het aantal miliseconden wat tussen elke keer dat de functie word uitgevoerd verkort word van 30 naar 27 en dan de interval clearen zodat hij niet nog is word uitgevoerd   
    var interval1 = setInterval(function(){
        difficulty++;
        interval123 = setInterval(handleTick, 27);
        clearInterval(interval1);
    }, 21000);

//na 41 seconden gaat het spel ietsjes sneller. dit gebeurd door het aantal miliseconden wat tussen elke keer dat de functie word uitgevoerd verkort word van 27 naar 24 en dan de interval clearen zodat hij niet nog is word uitgevoerd
    var interval2 = setInterval(function(){
        difficulty++;
        interval123 = setInterval(handleTick, 24);
        clearInterval(interval2);
    }, 41000);

//na 82 seconden gaat het spel ietsjes sneller. dit gebeurd door het aantal miliseconden wat tussen elke keer dat de functie word uitgevoerd verkort word van 24 naar 22 en dan de interval clearen zodat hij niet nog is word uitgevoerd
    var interval3 = setInterval(function(){
        difficulty++;
        interval123 = setInterval(handleTick, 22);
        clearInterval(interval3);
    }, 82000);

//na 123 seconden gaat het spel ietsjes sneller. dit gebeurd door het aantal miliseconden wat tussen elke keer dat de functie word uitgevoerd verkort word van 22 naar 20 en dan de interval clearen zodat hij niet nog is word uitgevoerd
    var interval4 = setInterval(function(){
        difficulty++;
        interval123 = setInterval(handleTick, 20);
        clearInterval(interval4);
    }, 123000);
//na 163 seconden gaat het spel ietsjes sneller. dit gebeurd door het aantal miliseconden wat tussen elke keer dat de functie word uitgevoerd verkort word van 20 naar 18 en dan de interval clearen zodat hij niet nog is word uitgevoerd   
    var interval5 = setInterval(function() {
        difficulty++;
        interval123 = setInterval(handleTick, 18);
        clearInterval(interval5);
    }, 163000);

//interval voor het behalen van de 4 minuten lang overleven achievement
    var intervalAchievement = setInterval(function(){
        if(PlayerIsDead == true) {
            clearInterval(intervalAchievement);
            console.log("Player is dead. No achievement");
        } else {
            if(localStorage.getItem('achievement3') == 0) {
                localStorage.setItem('achievement3',1);
                runFunction3 = true;
                soundAchievement.play();
                var achievement3check = setInterval(function() {
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    runFunction3 = false;
                    run3 = true;
                    console.log("run3 = false");
                    console.log("Player is NOT dead. Achievement!");
                    clearInterval(achievement3check);
                }, 10000);
                console.log("Achievement3 unlocked");
                clearInterval(intervalAchievement);
            }
        }
    }, 240000);
}

//de positie van de speler met de muis achterhalen
function handleMouseMovement(mouseEvent) {
	playerX = mouseEvent.offsetX;
	playerY = mouseEvent.offsetY;
}

//handleTick functie. Deze word elke 30 miliseconden opnieuw uitgevoerd zodat het lijkt alsof alles beweegt
function handleTick() { 
//timer activeren rechts onderin het spel
    AddTimer();
//canvas laten zien aan javascript zodat er op getekend kan worden
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    //var SpeedingUp = ctx.fillText("Speeding up in: " + sec,1150,520);
	//var gameCanvas = document.getElementById("canvas");
//elke enemy krijgt een eigen nummer in de array. het standaard nummer is 1.
	var currentEnemyNumber = 0;
//het totaal aantal enemies is de lengte van de enemyXPositions array.
	var numberOfEnemies = enemyXPositions.length;

//als de speler dood is de functie stoppen
    if(PlayerIsDead) {
        return;   
    }

//elke tick word gekeken of hij onder de 10% zit. Zit hij dat wel dan word er een enemy 'gespawned'    
	if (Math.random() < 1/10) {
//de Y positie van de enemy. dat is -50, net buiten de canvas zodat ze vanaf boven de canvas binnen komen
		enemyYPositions.push(-50);
//de X positie van de enemy. Dit is random op de 1300 pixels breedte
		enemyXPositions.push(Math.random() * 1300);
	}
    
//elke enemy krijgt een eigen nummer. zodra er een nieuwe spawnt krijgt hij het laatste nummer + 1
	while (currentEnemyNumber < numberOfEnemies) {
		enemyYPositions[currentEnemyNumber] = enemyYPositions[currentEnemyNumber] + 1;
		currentEnemyNumber = currentEnemyNumber + 1;
	}
    
// achtergrond image en de bal (speler) tekenen	
	ctx.width  = 1300;//this erases the contents of the canvas
    ctx.drawImage(backgroundImage, 0, 0);
	ctx.drawImage(avatarImage, playerX, playerY);
    
// op elke enemy het plaatje van een verdediger tekenen.
	currentEnemyNumber = 0;
    
    //console.log(numberOfEnemies);
    
    while (currentEnemyNumber < numberOfEnemies) {
        ctx.drawImage(enemyImage, enemyXPositions[currentEnemyNumber], enemyYPositions[currentEnemyNumber]);
        currentEnemyNumber = currentEnemyNumber + 1;
    //zodra de Y positie van een enemy lager is dan 700 (buiten de canvas dus), de enemy verwijderen uit de array dus ook uit het spel.        
        if(enemyYPositions[currentEnemyNumber] > 700 ) {
            //console.log(currentEnemyNumber + " was deleted!");
            //console.log(enemyYPositions[currentEnemyNumber]);
            delete enemyYPositions[currentEnemyNumber];
        }
    }
    
    //console.log(enemyYPositions[currentEnemyNumber]);
    //while (currentEnemyNumber < numberOfEnemies) {  
        
    //}

//rechts onderin de score, highscore en de timer tekenen.
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(0,550,1300,50);
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
	ctx.font = "bold 30px Arial";
    ctx.fillText("Score: " + score,100,585);
    ctx.fillText("Highscore: " + highscore,350,585);
    ctx.fillText(SpeedingUp1 + sec + " (" +difficulty+"/6)",700,585);
    ctx.fillText("Time Alive: " + 0 + timeAliveMinR + ":" + timeAliveSecR,1100,585);
    //SpeedingUp;

// de collision maken. Het spreekt voorzichzelf. Wanneer de speler over de enemy heen gaat de GameOver() functie uitvoeren
	currentEnemyNumber = 0;
	while (currentEnemyNumber < numberOfEnemies) {
		if ( ( (playerX < enemyXPositions[currentEnemyNumber] && enemyXPositions[currentEnemyNumber] < playerX + 25) || (enemyXPositions[currentEnemyNumber] < playerX && playerX < enemyXPositions[currentEnemyNumber] + 25) ) && ( (playerY < enemyYPositions[currentEnemyNumber] && enemyYPositions[currentEnemyNumber] < playerY + 24) || (enemyYPositions[currentEnemyNumber] < playerY && playerY < enemyYPositions[currentEnemyNumber] + 39) ) ) {
            GameOver();
		}
		currentEnemyNumber = currentEnemyNumber + 1;
	}   

//oke dit is PRECIES hetzelfde als bij de enemy. Het enigste verschil is dat de scores wat minder vaak spawnen (omdat hieronder Math.random naar 1 in de 70 is gezet in plaats van 1 in de 10). En in plaats van de GameOver functie uitvoeren komt er 1 bij de score bij
	var currentScoreNumber = 0;
	var numberOfScores = scoreXPositions.length;
	
	if (Math.random() < 1/70) {
		scoreYPositions.push(-50);
		scoreXPositions.push(Math.random() * 1300);
	}

	while (currentScoreNumber < numberOfScores) {
		scoreYPositions[currentScoreNumber] = scoreYPositions[currentScoreNumber] + 1;
		currentScoreNumber = currentScoreNumber + 1;
	}

	
	currentScoreNumber = 0;
	while (currentScoreNumber < numberOfScores) {
		ctx.drawImage(scoreImage, scoreXPositions[currentScoreNumber], scoreYPositions[currentScoreNumber]);
		currentScoreNumber = currentScoreNumber + 1;
        
        if(scoreYPositions[currentScoreNumber] > 700 ) {
            //console.log(currentScoreNumber + " was deleted!");
            //console.log(enemyYPositions[currentEnemyNumber]);
            delete scoreYPositions[currentScoreNumber];
        }
	}
	currentScoreNumber = 0;
	while (currentScoreNumber < numberOfScores) {
        
		if ( ( (playerX < scoreXPositions[currentScoreNumber] && scoreXPositions[currentScoreNumber] < playerX + 30) || (scoreXPositions[currentScoreNumber] < playerX && playerX < scoreXPositions[currentScoreNumber] + 30) ) && ( (playerY < scoreYPositions[currentScoreNumber] && scoreYPositions[currentScoreNumber] < playerY + 33) || (scoreYPositions[currentScoreNumber] < playerY && playerY < scoreYPositions[currentScoreNumber] + 30) ) ) {

//wanneer de speler een 'score' aanraakt, de 'score' verwijderen, de score van de speler + 1 geven en het geluidje spelen dat er een 'score' is opgepakt.
            score += 1;
            
            if(!explosion.paused) {
                explosionextra.play();
            }
            
            if(!explosionextra.paused) {
                explosionextra2.play();  
            }
            
            explosion.play();
            
            delete scoreXPositions[currentScoreNumber];
            delete scoreYPositions[currentScoreNumber];
            console.log(score);
        }
		currentScoreNumber = currentScoreNumber + 1;
	}
    
    ////////begin of double points////////

//oke dit is PRECIES hetzelfde als bij de enemy en de 'score'. Het enigste verschil is dat de Double Points wat minder vaak spawnen (omdat hieronder Math.random naar 1 in de 300 is gezet in plaats van 1 in de 70). En in plaats van de GameOver functie uitvoeren komt er 2 bij de score bij
    var currentDPNumber = 0;
	var numberOfDP = DPXPositions.length;
	
	if (Math.random() < 1/300) {
		DPYPositions.push(-50);
		DPXPositions.push(Math.random() * 1300);
	}

	while (currentDPNumber < numberOfDP) {
		DPYPositions[currentDPNumber] = DPYPositions[currentDPNumber] + 1;
		currentDPNumber = currentDPNumber + 1;
	}
	
	currentDPNumber = 0;
	while (currentDPNumber < numberOfDP) {
		ctx.drawImage(DPImage1, DPXPositions[currentDPNumber], DPYPositions[currentDPNumber]);
		currentDPNumber = currentDPNumber + 1;
        
        if(DPYPositions[currentDPNumber] > 700 ) {
            //console.log(currentDPNumber + " was deleted!");
            //console.log(enemyYPositions[currentEnemyNumber]);
            delete DPYPositions[currentDPNumber];
        }
	}

    if( DPYPositions > 400 ) {
        //console.log("hoi");
        DPYPositions.splice(DPYPositions > 1);  
    }
	
	currentDPNumber = 0;
	while (currentDPNumber < numberOfDP) { 
        
		if ( ( (playerX < DPXPositions[currentDPNumber] && DPXPositions[currentDPNumber] < playerX + 30) || (DPXPositions[currentDPNumber] < playerX && playerX < DPXPositions[currentDPNumber] + 30) ) && ( (playerY < DPYPositions[currentDPNumber] && DPYPositions[currentDPNumber] < playerY + 33) || (DPYPositions[currentDPNumber] < playerY && playerY < DPYPositions[currentDPNumber] + 30) ) ) {
            
//score + 2 geven, geluidje spelen en de Double Points verwijderen
            score += 2;
            
            if(!explosion.paused) {
                explosionextra.play();
            }
            
            if(!explosionextra.paused) {
                explosionextra2.play();  
            }
            
            explosion.play();
            
            delete DPYPositions[currentDPNumber];
            delete DPXPositions[currentDPNumber];
            console.log(score);
        }
		currentDPNumber = currentDPNumber + 1;
	}
    
    ////////end of double points////////
    
    ////////begin of triple points////////

//oke dit is PRECIES hetzelfde als bij de enemy en de 'score'. Het enigste verschil is dat de Triple Points wat minder vaak spawnen (omdat hieronder Math.random naar 1 in de 550 is gezet in plaats van 1 in de 300). En in plaats van de GameOver functie uitvoeren komt er 3 bij de score bij
    var currentTPNumber = 0;
	var numberOfTP = TPXPositions.length;
	
	if (Math.random() < 1/550) {
		TPYPositions.push(-50);
		TPXPositions.push(Math.random() * 1300);
	}

	while (currentTPNumber < numberOfTP) {
		TPYPositions[currentTPNumber] = TPYPositions[currentTPNumber] + 1;
		currentTPNumber = currentTPNumber + 1;
	}
	
	currentTPNumber = 0;
	while (currentTPNumber < numberOfTP) {
		ctx.drawImage(TPImage, TPXPositions[currentTPNumber], TPYPositions[currentTPNumber]);
		currentTPNumber = currentTPNumber + 1;
        
        if(TPYPositions[currentTPNumber] > 700 ) {
            //console.log(currentTPNumber + " was deleted!");
            //console.log(enemyYPositions[currentEnemyNumber]);
            delete TPYPositions[currentTPNumber];
        }
	}

    if( TPYPositions > 400 ) {
        //console.log("hoi");
        TPYPositions.splice(TPYPositions > 1);  
    }	
    
	currentTPNumber = 0;
	while (currentTPNumber < numberOfTP) {   
        
        if ( ( (playerX < TPXPositions[currentTPNumber] && TPXPositions[currentTPNumber] < playerX + 30) || (TPXPositions[currentTPNumber] < playerX && playerX < TPXPositions[currentTPNumber] + 30) ) && ( (playerY < TPYPositions[currentTPNumber] && TPYPositions[currentTPNumber] < playerY + 33) || (TPYPositions[currentTPNumber] < playerY && playerY < TPYPositions[currentTPNumber] + 30) ) ) {
            
//score + 3, geluidje afspelen en de Triple Points verwijderen
            score += 3;
            
            if(!explosion.paused) {
                explosionextra.play();
            }
            
            if(!explosionextra.paused) {
                explosionextra2.play();  
            }
            
            explosion.play();
            
            delete TPYPositions[currentTPNumber];
            delete TPXPositions[currentTPNumber];
            console.log(score);
        }
		currentTPNumber = currentTPNumber + 1;
	}
    
    ////////end of triple points/////////
    
    ////////begin of achievements////////
    
    function achievement1run() {
        if(run1 = false) {
            return;   
        }
        console.log("function1 ran!");
        ctx.fillStyle = 'rgba(6,143,10,0.85)';
        ctx.fillRect(0,490,250,60);
        ctx.fillStyle = 'rgba(225,225,225,0.85)';
        ctx.fillRect(0,465,250,30);
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 20px Arial";
        ctx.fillText("Achievement unlocked:",130,485);
        ctx.font = "bold 15px Arial";
        ctx.fillText("Pro Dodger: Reached difficulty",130,520);
        ctx.fillText(" level 6 with 0 score!",130,535);
    }
    
    function achievement2run() {
        if(run2 = false) {
            return;   
        }
        console.log("function2 ran!");
        ctx.fillStyle = 'rgba(6,143,10,0.85)';
        ctx.fillRect(0,490,250,60);
        ctx.fillStyle = 'rgba(225,225,225,0.85)';
        ctx.fillRect(0,465,250,30);
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 20px Arial";
        ctx.fillText("Achievement unlocked:",130,485);
        ctx.font = "bold 15px Arial";
        ctx.fillText("Top Scorer: Scored",130,520);
        ctx.fillText(" 100 goals!",130,535);
    }
    
    function achievement3run() {
        if(run3 = false) {
            return;   
        }
        console.log("function3 ran!");
        ctx.fillStyle = 'rgba(6,143,10,0.85)';
        ctx.fillRect(0,490,250,60);
        ctx.fillStyle = 'rgba(225,225,225,0.85)';
        ctx.fillRect(0,465,250,30);
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 20px Arial";
        ctx.fillText("Achievement unlocked:",130,485);
        ctx.font = "bold 15px Arial";
        ctx.fillText("Survivor: Held the ball",130,520);
        ctx.fillText(" for 4 minutes straight!",130,535);
    }
    
    function achievement4run() {
        if(run4 = false) {
            return;   
        }
        console.log("function4 ran!");
        ctx.fillStyle = 'rgba(6,143,10,0.85)';
        ctx.fillRect(0,490,250,60);
        ctx.fillStyle = 'rgba(225,225,225,0.85)';
        ctx.fillRect(0,465,250,30);
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 20px Arial";
        ctx.fillText("Achievement unlocked:",130,485);
        ctx.font = "bold 15px Arial";
        ctx.fillText("Lionel Messi: Scored",130,520);
        ctx.fillText(" 150 goals!",130,535);
    }
    
    if(runFunction1 == true) {
        achievement1run();
    }
    
    if(runFunction2 == true) {
        achievement2run();
    }
    
    if(runFunction3 == true) {
        achievement3run();
    }
    
    if(runFunction4 == true) {
        achievement4run();
    }
    
    if(localStorage.getItem('achievement1') == 0) {
        if(score == 0 && difficulty == 6) {
            console.log("Achievement1 unlocked");
            runFunction1 = true;
            soundAchievement.play();
            var achievement1check = setInterval(function() {
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                runFunction1 = false;
                run1 = true;
                console.log("run1 = false");
                clearInterval(achievement1check);
            }, 10000);
            localStorage.setItem('achievement1',1);
        }
    }
    
    if(localStorage.getItem('achievement2') == 0) {
        if(score >= 100) {
            console.log("Achievement2 unlocked");
            runFunction2 = true;
            soundAchievement.play();
            var achievement2check = setInterval(function() {
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                runFunction2 = false;
                run2 = true;
                console.log("run2 = false");
                clearInterval(achievement2check);
            }, 10000);
            localStorage.setItem('achievement2',1);
        }
    }
    
    if(localStorage.getItem('achievement4') == 0) {
        if(score >= 150) {
            console.log("Achievement4 unlocked");
            runFunction4 = true;
            soundAchievement.play();
            var achievement4check = setInterval(function() {
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                runFunction4 = false;
                run4 = true;
                console.log("run4 = false");
                clearInterval(achievement4check);
            }, 10000);
            localStorage.setItem('achievement4',1);
        }
    }
    
////////////end of achievements////////////

//de GameOver functie. Deze word uitgevoerd zodra de speler een enemy aanraakt.
    function GameOver() {
//de array's verwijderen zodat het spel stil komt te staan        
        enemyYPositions = 0;	
        enemyXPositions = 0;

        scoreYPositions = 0;
        scoreXPositions = 0;

        DPYPositions = 0;	
        DPXPositions = 0;

        TPYPositions = 0;	
        TPXPositions = 0;
//PlayerIsDead op true zetten. Dit zorgt ervoor dat de handleTick functie niet meer word uitgevoerd        
        PlayerIsDead = true;
        
        //if(PlayerIsDead) {
        
//de rode kaart tekenen en de scores erop tekenen
        ctx.drawImage(rodekaart, 7, 5);
        ctx.font = "29px Arial";
        ctx.fillText("Score: " + score,150,100);
        ctx.fillText("Highscore: " + highscore,150,150);
        ctx.font = "bold 30px Arial";
        ctx.fillText("Score: " + score,100,585);
        ctx.font = "29px Arial";
        ctx.fillText("Time Alive: ",150,200);
        ctx.fillText(0+timeAliveMinR+":"+timeAliveSecR,150,250);
        
        timeAliveThisGame = 0 + timeAliveMinR + ":" + timeAliveSecR;
        
        //ctx.fillText("Highscore: " + highscore,950,150);
        
//als de score hoger is dan de huidige highscore, de nieuwe highscore in de local storage opslaan, de highscore veranderen naar de score en een extra tekstje tekenen dat je een nieuwe highscore hebt behaald      
        if(timeAlive1 > timeAliveInSeconds) {
            localStorage.setItem('timeAliveInSeconds',timeAlive1);
            console.log("record verbroken!"); 
            timeAliveRecord = 0 + timeAliveMinR + ":" + timeAliveSecR;
            localStorage.setItem('tijdInLeven',String(timeAliveRecord));
        }
        
        if(score > highscore) {
            localStorage.setItem('highscore',score);
            highscore = score;
            ctx.font = "bold 25px Arial";
            ctx.fillText("New Highscore!",150,50);
        }
        
// een schermpje tekenen dat de speler 'de bal is kwijt geraakt' met wat instructies om het spel te herstarten of naar het main menu te gaan    
        ctx.fillStyle = 'rgba(225,225,225,0.7)';
        ctx.fillRect(470,90,380,190);
        ctx.rect(10, 90, 380, 190);
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = "bold 30px Arial";
        ctx.fillText("You lost the ball!",660,140);
        ctx.font = "bold 20px Arial";
        ctx.fillText("Press R to restart the game",660,180);
        ctx.fillText("Press F5 to go to the main menu",660,220);
        ctx.fillText("Press S to submit your score",660,260);
// fluit geluidje afspelen        
        explosion2.play();
        /*
        ctx.stroke();   
        score = 0;
        enemyYPositions.splice( enemyYPositions > 0);
        scoreYPositions.splice(currentScoreNumber);
        DPYPositions.splice(currentDPNumber);
        TPYPositions.splice(currentTPNumber);   
    } 
        ctx.drawImage(rodekaart, 7, 0);
        if(score > highscore) {
            localStorage.setItem('highscore',score);
            highscore = score;
            ctx.font = "bold 25px Arial";
            ctx.fillText("New Highscore!",150,50);
            
        }
        ctx.font = "29px Arial";
        ctx.fillText("Score: " + score,150,100);
        ctx.fillText("Highscore: " + highscore,150,150);
        
        score = 0;
        enemyYPositions.splice( enemyYPositions > 0);
        scoreYPositions.splice(currentScoreNumber);
        DPYPositions.splice(currentDPNumber);
        TPYPositions.splice(currentTPNumber);
        
        explosion2.play();
        alert("You lost the ball!");
        */
    }
}

//zodra alle code geladen is, de init functie uitvoeren (het main menu laden) wanneer de pagina geladen word.
document.addEventListener("DOMContentLoaded", init, false);