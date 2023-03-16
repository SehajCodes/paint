clr = {
    red: 255,
    green: 255,
    blue: 255,
  };
  let prevLocation = null;
  function setup() {
    createCanvas(2780, 720);
    frameRate(120);
    stroke(255);
    strokeWeight(4.2);
    background(0);
  }
  
  function draw() {
    if (mouseIsPressed && prevLocation != null) {
      line(mouseX, mouseY, prevLocation[0], prevLocation[1]);
      prevLocation = [mouseX, mouseY];
    }
  }
  
  function mousePressed() {
    prevLocation = [mouseX, mouseY];
  }
  
  function mouseReleased() {
    prevLocation = null;
  }
  
  function resetBG() {
    background(0);
  }

  function changeColor(c, value) {
    clr[c] = parseInt(value);
    document.getElementById("clr").style.backgroundColor =
      "rgb(" + clr.red + "," + clr.green + "," + clr.blue + ")";
    stroke(clr.red, clr.green, clr.blue);
    console.log(clr);
  }

  function resetClr() {
      changeColor('red', 255),
      changeColor('green', 255),
      changeColor('blue', 255)
  }