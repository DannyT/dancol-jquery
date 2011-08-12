function Waveform( canvas ){
   
    if ( canvas !== undefined ){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.points = [];
        this.dots = [];
        this.running = false;
        this.init();
        this.draw();
    }
}

Waveform.prototype.startAnim = function(){
    if ( !this.running )
    {
        var waveObj = this;
        this.running = true;
         this.interval = setInterval(function () {
            waveObj.draw();
        }, 500);
    }
};

Waveform.prototype.stopAnim = function(){
    alert( "stopAnim");
    this.running = false;
    clearInterval( this.interval );
};

Waveform.prototype.draw = function(){
    
    var totalDots = this.dots.length;
    for( var i = 0; i < totalDots; ++i )
    {
        var dotData = this.dots[i];
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.context.lineStyle = "#ff0000";

        this.context.moveTo(dotData.x, dotData.y);
        this.context.lineTo(dotData.x + 2, dotData.y );
        this.context.lineTo(dotData.x + 2, dotData.y + 2 );
        this.context.lineTo(dotData.x, dotData.y + 2 );
        this.context.lineTo(dotData.x, dotData.y );
        this.context.stroke();
    }
    
};

Waveform.prototype.init = function(){
    
    var yPos = 0;
    var rows = 5;
    var columns = 47;
    var gap = 20;
    
    for( var i = 0; i < rows; ++i )
    {
        var xPos = 0;
        for( var j = 0; j < columns; ++j )
        {
            this.dots.push( {x:xPos, y:yPos, colour:"0xff0000"} );
            xPos += gap;
        }
        yPos += gap;
    }
};