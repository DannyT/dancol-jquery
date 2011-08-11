var lineDrawer = (function () {

    var myCanvas;
    var context;
    var interval;

    function start(canvas) {
        myCanvas = canvas;
        context = canvas.getContext("2d");
        interval = setInterval(function () { onTick() }, 500);
    }

    function onTick() {
        var start = getRandomPoint();
        var finish = getRandomPoint();
        drawLine(start, finish);
    }

    function getRandomPoint() {
        return {
            x: Math.floor(Math.random() * 101),
            y: Math.floor(Math.random() * 101)
        };
    }

    function drawLine(startPoint, endPoint) {
        context.clearRect(0, 0, myCanvas.width, myCanvas.height);
        context.beginPath();
        context.lineWidth = 1;
        context.lineStyle = "#ff0000";

        context.moveTo(startPoint.x, startPoint.y);
        context.lineTo(endPoint.x, endPoint.y);

        context.stroke();
    }

    return {
        start: start
    };
})();