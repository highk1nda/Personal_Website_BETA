function getPrediction() {
    var predictions = [
      "You will have a great day!",
      "A surprise awaits you soon!",
      "You will meet someone special!",
      "Today is your lucky day!",
      "A new opportunity will arise!",
      "Good news is coming your way!"
    ];
  
    var randomIndex = Math.floor(Math.random() * predictions.length);
    var randomPrediction = predictions[randomIndex];
  
    document.getElementById("predictionBall").innerText = randomPrediction;
  }
  