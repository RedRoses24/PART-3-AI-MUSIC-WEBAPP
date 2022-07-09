classical="";
folk="";
instrumental="";
pop_music="";
rock="";
hindi="";
english="";
tamil="";
punjabi="";
french="";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(500, 400);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    classical=loadSound('CLASSICAL.mp3');
    folk=loadSound('FOLK.mp3');
    instrumental=loadSound('INSTRUMENTAL.mp3');
    pop_music=loadSound('POP.mp3');
    rock=loadSound('ROCK.mp3');
    hindi=loadSound('Hindi.mp3');
    english=loadSound('English.mp3');
    tamil=loadSound('TAMIL.mp3');
    french=loadSound('FRENCH.mp3');
    punjabi=loadSound('PUNJABI.mp3');
}
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left WristX: "+leftWristX+" Left WristY: "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right WristX: "+rightWristX+" Right WristY: "+rightWristY);
    }
}
function draw(){
    image(video, 0, 0, 500, 400);
}
function hindi_play(){
    hindi.play();
    english.stop();
    tamil.stop();
    punjabi.stop();
    french.stop();
}
function english_play(){
    english.play();
    hindi.stop();
    tamil.stop();
    punjabi.stop();
    french.stop();
}
function tamil_play(){
    tamil.play();
    hindi.stop();
    punjabi.stop();
    french.stop();
    english.stop();
}
function punjabi_play(){
    punjabi.play();
    tamil.stop();
    french.stop();
    english.stop();
    hindi.stop();
}
function french_play(){
    french.play();
    punjabi.stop();
    english.stop();
    hindi.stop();
    tamil.stop();
}