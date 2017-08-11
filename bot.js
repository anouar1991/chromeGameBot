var robot = require("robotjs");

function getPointerPixel(span, callback) {
    if (!(span.x && span.y)) {
        span = {
            'x': 0,
            'y': 0
        };
    }
    // Get mouse position.
    var mouse = robot.getMousePos();
    // Get pixel color in hex format.
    var hex = robot.getPixelColor(mouse.x + span.x, mouse.y + span.y);
    //console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

    if (callback) callback(hex);
}

setInterval(function() {
    getPointerPixel(function(hex) {
        if (hex == "535353" || hex == "e2e2e2" || hex == "909090" ||
            hex == "b9b9b9" || hex == "f9ffff") {
            console.log(hex)

            robot.keyTap("up");
        } else {
            if (hex != "f7f7f7")
                console.log(hex);
        }
    });

}, 1)
setInterval(function() {
    getPointerPixel({
        'x': -1,
        'y': 0
    }, function(hex) {
        if (hex == "535353" || hex == "e2e2e2" || hex == "909090" ||
            hex == "b9b9b9" || hex == "f9ffff") {
            console.log(hex)

            robot.keyTap("up");
        } else {
            if (hex != "f7f7f7")
                console.log(hex);
        }
    });

}, 0)