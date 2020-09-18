function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
    translate(200,200);
    rotate(-90);
    
    let hr=hour();
    let mn=minute();
    let sc=second();
    
    strokeWeight(8);
    stroke(255,100,150);
    noFill();
  let scA=map(sc,0,60,0,360);
  arc(0,0, 300, 300, 0, scA);
    
    
  stroke(150,100,255);  
  let mnA=map(mn,0,60,0,360);
  arc(0, 0, 280, 280, 0,mnA); 
    
  stroke(150,255,100);  
  let hrA=map(hr%12,0,12,0,360);
  arc(0,0, 260, 260, 0, hrA);
    
  push();
  rotate(scA);  
  stroke(255,100,150);  
  line(0,0,100,0);  
  pop();  
    
  push();
  rotate(mnA);  
  stroke(150,100,255);  
  line(0,0,100,0);  
  pop();  
   
  push();
  rotate(hrA);  
  stroke(150,255,100);  
  line(0,0,100,0);  
  pop();      
    stroke(255);
    point(0,0);  
}