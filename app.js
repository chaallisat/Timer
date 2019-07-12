//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  let intervalId;
  
  // prevents the clock from being sped up unnecessarily
  let clockRunning = false;
  let time = 0;
  let lap = 1;
  
  function reset() {
  
    time = 0;
    lap = 1;
  
    //  TODO: Change the "display" div to "00:00."
    $("#display").html("00:00");
    $("#laps").html(" ");
  
      //  TODO: Change the "display" div to "00:00."
  
  }
  
  function start() {
  
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
  
    }
  
  
  }
  function stop() {
  
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  
  }
  
  function recordLap() {
  
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    const idk = timeConverter(time);
  
    //  TODO: Add the current lap and time to the "laps" div.
    $("#laps").append("<h2>Lap " + lap + ": " + idk + "</h2>");
  
    //  TODO: Increment lap by 1. Remember, we can't use "this" here.
    lap++
  
  }
  function count() {
  
    //  TODO: increment time by 1, remember we cant use "this" here.
    time++
  
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    const newTime = timeConverter(time);
  
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#display").html(newTime);
  
  }
  
  function timeConverter(t) {
  
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  
  