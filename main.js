speechrecognition=window.webkitSpeechRecognition;
recognition=new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
    recognition.onresult=function(event){
        console.log(event);
        var contant=event.results[0][0].transcript;
        console.log(contant);
        document.getElementById("textbox").innerHTML=contant;
 if(contant=="take my selfie"){
    console.log("taking selfie in");
    speak();
 }
}

function speak(){
var synth=window.speechSynthesis;
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);}
setTimeout(function(){
    img_id="selfie_1"
take_snapshot();
speak_data="taking selfie in 1  2  3  4  5"
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
save();
},5000);
setTimeout(function(){
    img_id="selfie_2"
take_snapshot();
speak_data="taking selfie in 1  2  3  4  5"
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
save();
},5000);
setTimeout(function(){
    img_id="selfie_3"
take_snapshot();
speak_data="taking selfie in 1  2  3  4  5"
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
save();
},5000);

camera=document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_formet:'png',
png_quality:200
});
function take_snapshot(){
 Webcam.snap(function(data_uri)
 {
document.getElementById("selfie_1").innerHTML='<img id="selfie_1"src="'+data_uri+'">';
document.getElementById("selfie_2").innerHTML='<img id="selfie_2"src="'+data_uri+'">';
document.getElementById("selfie_3").innerHTML='<img id="selfie_3"src="'+data_uri+'">';
 }
 );
}
function save(){
link=document.getElementById("link");
image=document.getElementById("pictuer").src;
link.href=image;
link.click();
}