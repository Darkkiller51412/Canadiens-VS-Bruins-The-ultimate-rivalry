// Charles-Philippe Ratté
//Nicholas Brown
//Web and Effects, section 3
// A Neverending Rivalry
// <iframe src="https://openprocessing.org/sketch/1880659/embed/" width="400" height="400"></iframe>

/* How to use the interactions:
In order to change the background just do a mouse click
If you want to make an ice rink pop up you can press the space bar 
*/

/* Artist statement 
The circles are red, white and blue to signify the MTL Canadiens, the black and yellow circles 
are meant to represent the Boston Bruins, they all move intensively to get that sense of rivalry 
and clashing.
The first interaction I would like to discuss is the change of background when you click the mouse, 
this is a representation of the time when the Canadiens and the Bruins play each other, 
sometimes its at night, sometimes in the day, most of the time it's snowing ;
The second interction occurs when you press the spacebar, an ice rink shows up, this is to demonstrate 
that the rivalry is on in and out of the ice
Overall I just wanted to show that the rivalry between these two teams is still as intense as it was
almost 100 years ago.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,0,255); 

  // mouse movement interaction
  img = loadImage("Bruins-Habs2.jpg")
  img2 = loadImage("hockeyimage.png")
}

function draw() {
  
  // the image is tracked with the mouse
  image(img,mouseX,mouseY)
  
// circles for montreal canadiens
  fill(255/(18/8)-random(0,50))
      circle(200,18*10,143/2+random(0,143/2))
      circle(120,300,43)
      fill(200,255)
  circle(200,600,143/2+random(0,143/2))
  circle(300,300,363/2+random(0,143/2))
  circle(300,650,263/2+random(0,143/2))
  circle(700,500,263/2+random(0,143/2))

  // red circles
  fill(255,55,0)
  circle(400,300,143/2+random(0,143/2))
  circle(200,500,300/2+random(0,143/2))
  circle(500,600,203/2+random(0,143/2))
  circle(300,400,203/2+random(0,143/2))
  circle(50,100,203/2+random(0,143/2))
  circle(130,200,203/2+random(0,143/2))
  circle(300,700,203/2+random(0,143/2))
  circle(700,400,203/2+random(0,143/2))
  circle(550,200,203/2+random(0,143/2))
  
  // blue circles
  fill(0,50,250)
  circle(550,650,263/2+random(0,143/2))
  circle(600,700,300/2+random(0,143/2))
  circle(300,400,203/2+random(0,143/2))
  circle(500,400,303/2+random(0,143/2))
  circle(160,220,203/2+random(0,143/2))
  circle(200,750,203/2+random(0,143/2))
  circle(700,200,203/2+random(0,143/2))
  circle(370,100,403/2+random(0,143/2))
  circle(60,500,203/2+random(0,143/2))
  
  //Circles for the Boston Bruins
  //Black circles
  fill(0,0,0) 
  circle(1000,400,303/2+random(0,143/2))
  circle(900,300,203/2+random(0,143/2))
  circle(800,450,203/2+random(0,143/2))
  circle(1000,70,403/2+random(0,143/2))
  circle(1200,270,203/2+random(0,143/2))
  circle(1100,570,303/2+random(0,143/2))
  circle(1350,170,203/2+random(0,143/2))
  circle(1275,375,400/2+random(0,143/2))
  
  
  //Yellow circles
  fill(255,210,0)
  circle(1000,300,203/2+random(0,143/2))
  circle(960,430,203/2+random(0,143/2))
  circle(800,300,203/2+random(0,143/2))
  circle(840,600,423/2+random(0,143/2))
  circle(800,70,203/2+random(0,143/2))
  circle(1200,120,203/2+random(0,143/2))
  circle(1160,400,203/2+random(0,143/2))
  circle(1000,600,203/2+random(0,143/2))
  circle(1400,260,203/2+random(0,143/2))
  circle(1350,570,403/2+random(0,143/2))
  
  
}
// if you click the mouse the backgound will change
function mouseClicked() {
  
  background(random(0,255,255))

}
// image of Maurice Richard playing against the Bruins
function keyPressed () {
  
    if (" ") {
    image(img2,50,0);
  }
  
}
