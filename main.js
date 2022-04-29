function startClassification()
{
     navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cRKr6S3zo/model.json', modelReady);
}

function modelReady(){ classifier.classify( gotResults);
}

function gotResults(error, results)
 { if (error) 
     console.error(error);
}