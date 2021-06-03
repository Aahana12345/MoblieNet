function setup(){
  canvas=createCanvas(300,300);
  canvas.position(550,300);
  video=createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}

function draw(){
  image(video,  0, 0, 300, 300);
  classifier.classify(video,gotResult);
}

function modelLoaded(){
  console.log('modelLoaded');
}

function gotResult(error,results){
  if (error){
    console.error(error);
  }else {
console.log(results);
document.getElementById('result_object_name').results[0].label;
document.getElementById('result_object_accuracy').results[0].confidence.toFixed(3);
  }
 
}