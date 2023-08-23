

Webcam.set({
height: 300,
width: 350,
image_format: 'png',
png_quality: 90,
});

camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image src="'+data_uri+'">';
    });
    }
    console.log("ml5 Version: ",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U7Ieg-9jv/model.json", load);
    function load(){
        console.log("Model is Loaded!");
    }
    function speak(){
        var synth=window.speechSynthesis;
        Speech_data_1="The first prediction is-" +p1;
        Speech_data_2="And the second prediction is-" +p2;
        var Utter_this=new SpeechSynthesisUtterance(Speech_data_1 + Speech_data_2 );
        synth.speak(Utter_this);

    }

    function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotResult);}
    
        function gotResult(error,results){
            if (error){
                console.error(error);
            }
            else{
                console.log(results);
                document.getElementById("results_emotion_name").innherHTML=results[0].label;
                document.getElementById("results_emotion_name2").innherHTML=results[1].label;
                p1=results[0].label;
                p2=results[1].label;
            speak();
             if (p1=="Sad"){
                document.getElementById("update_emoji").innerHTML="&#128546";
             }

             if (p1=="Happy"){
                document.getElementById("update_emoji").innerHTML="&#128522";
             }
             if (p1=="Suprised"){
                document.getElementById("update_emoji").innerHTML="&#128558";
             }

             if (p2=="Sad"){
                document.getElementById("update_emoji").innerHTML="&#128546";
             }

             if (p2=="Happy"){
                document.getElementById("update_emoji").innerHTML="&#128522";
             }
             if (p2=="Suprised"){
                document.getElementById("update_emoji").innerHTML="&#128558";
             }
             
             
        }
                
    
        }