
function setup() {
    createCanvas(720, 400);
    noStroke();
    rectMode(CENTER);
  }
  
  function draw() {
    strokeWeight(0);
    background(230);
    fill(244, 122, 158);
    rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
    fill(237, 34, 93);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);


    strokeWeight(10);
    if (mouseIsPressed) {
        stroke(255);
      } else {
        stroke(237, 34, 93);
      }
      line(mouseX - 66, mouseY, mouseX + 66, mouseY);
      line(mouseX, mouseY - 66, mouseX, mouseY + 66);
      
  }
  

  $(window).on("load",start);
  function start(){
    const handsfree = new Handsfree({hands: true})
    handsfree.enablePlugins('browser')
    handsfree.start()
    handsfree.showDebugger()
    $("#debug").append(handsfree.debug.$wrap)


    handsfree.use('logger', data => {
      if (!data.hands) return
    
      // Show a log whenever the left hand is visible
      if (data.hands.landmarksVisible[0]) {
        // console.log(data.hands.landmarks[0][4])
        mouseX = data.hands.landmarks[0][4].x*720
        mouseY = data.hands.landmarks[0][4].y*400

      }

      
    })

    handsfree.on('finger-pinched-0-0', () => {
      mouseIsPressed=true;
    })

    handsfree.on('finger-pinched-released-0-0', () => {
      mouseIsPressed=false;
    })
  }