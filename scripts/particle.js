/**
 * World class
 * 
 */
function World( canvas ){
    if ( canvas != undefined )
    {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.running = false;
        this.worldObjects = [];
        
    }
}

World.prototype.addObj = function( worldObj ){
    this.worldObjects.push( worldObj );
}

World.prototype.start = function(){
    if ( !this.running )
    {
        var worldObj = this;
        this.running = true;
         this.interval = setInterval(function () {
            worldObj.draw();
        }, 10);
    }
};

World.prototype.stop = function(){
    this.running = false;
    clearInterval( this.interval );
};

World.prototype.draw = function(){
    var total = this.worldObjects.length;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for( var i = 0; i < total; ++i )
    {
        var worldObj = this.worldObjects[i];
        worldObj.update();
        worldObj.draw( this.context );
    }
}


/**
 * Particle class
 * 
 */

function Particle( x, y ){
    this.gravity = 0.3;
    this.friction = 0.85;
    var xPos = ( x )? x : 100;
    var yPos = ( y )? y : 10;
    this.position = { x:xPos, y:yPos };
    this.vector = { x:Math.random()-Math.random()*5,
                    y:-Math.random()*8 };
    
    this.width = 2;
    this.height = 2;
}

Particle.prototype.setPosition = function( xPos, yPos){
    this.position = { x:xPos, y:yPos};
};

Particle.prototype.setVector = function( xPos, yPos ){
    this.vector = { x:xPos, y:yPos};
};

Particle.prototype.update = function(){

   this.position = { x : this.position.x += this.vector.x,
                     y : this.position.y += this.vector.y };
    
    this.vector.y += this.gravity;
    
    this.vector.x *= this.friction;
};


Particle.prototype.draw = function( context ){
    
    context.beginPath();
    context.lineWidth = 1;
    context.lineStyle = "#ff0000";
    context.moveTo(this.position.x, this.position.y);
    context.lineTo(this.position.x + this.width, this.position.y );
    context.lineTo(this.position.x + this.width, this.position.y + this.height );
    context.lineTo(this.position.x, this.position.y + this.height );
    context.lineTo(this.position.x, this.position.y );
    context.stroke();
    
}




