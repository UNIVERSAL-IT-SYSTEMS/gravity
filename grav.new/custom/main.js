function initialize() {
	/*bodies=[];
	bodies[0]=new Body(200000,0,0,'yellow');
	bodies[1]=new Body(500,400,0,'red');
	bodies[1].Vy=-getOrbitalVelocity(bodies[0],400); //remember this will be changed
	bodies[2]=new Body(10,430,0,'grey');
	bodies[2].Vy=bodies[1].Vy+(getOrbitalVelocity(bodies[1],30))*0.9; // remember this will be changed
	bodies[3]=new Body(1000,100,0,'orange');
	bodies[3].Vy=-getOrbitalVelocity(bodies[0],100)*0.9;
	bodies[4]=new Body(1,450,0,'#BADA55'); //temporarily not here, add back in for collisions testing*/
	bodies=new randomSystem(5,10);
}

function physicsLoop() {
	/*gravity*/ for (var i=0;i<bodies.length-1;i++) for (var j=i+1;j<bodies.length;j++) gravity(bodies[i],bodies[j]);
	/*update location*/ for (var i=0;i<bodies.length;i++) updateLocation(bodies[i]);
	/**/ for (var i=bodies.length-1;i>0;i--) for (var j=i-1;j>-1;j--) if (radialCollision(bodies[j],bodies[i])) combineBodies(bodies[i],bodies[j]);
}

function slowLoop() {
	//place slow update stuff here
	updateCanvasSize();
}

function key(key) {
	switch(key)
	{
		case 87:
		//W
		break;
		case 65:
		//A
		break;
		case 83:
		//S
		break;
		case 68:
		//D
		break;
		default:
		//throw "invalid key pressed";
		console.log('keyCode '+key+' pressed');
	}
}