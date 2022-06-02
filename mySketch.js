function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//frameRate(50);
	
}


function flowerdraw(clr1,clr2,size=1) {
	
	push()
	//fill("#a8dadc")
	fill(clr1)
	//use if/else
	ellipse(0, 0, 25);		//目前此圓，仍以圓心為座標點
	ellipseMode(CORNER)// 設定以左上角為座標點上的座標
	//fill("#b08968")
	fill(clr2)
	//use if/else
	for(i=1;i<17;i++){
		rotate(PI/8) //180度產生八片，360度產生16片
		ellipse(3,-2, 100*size, 30);  // 設定以左上角為座標點，做一個花瓣
	}
	pop()
}



function draw() {
	background(0)
	noFill()
	
	for(var x=0;x<width;x=x+50)
	  	{	
	for(var y=0;y<height;y=y+50)
				{	 
var J = map(mouseX,0,width,0,25);
	
				
push()
  stroke("#deff0a")
	strokeWeight(4);
	rect(x,y,50+J)
pop()
					
	push()
  stroke("#ff5d8f")
	strokeWeight(4);
	ellipse(x+40,y+40,25+J)//小圓
	pop()
	push()
	translate(x,y); //讓圓心在視窗的中心點
  flowerdraw("#bee3db","#89b0ae",map(mouseX,10,height,0,0.05))
	pop()
					
	
	     	}
			}
}
	
