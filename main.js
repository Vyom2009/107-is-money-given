function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yft3Lom-B/model.json',modelReady);}

function modelReady(){
   console.log("Model is Loaded");
}