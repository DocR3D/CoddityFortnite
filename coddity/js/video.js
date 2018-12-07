


function launch(){
    
console.log("video launched");

/*updateScale();*/
/*window.resizeTo(720, 500);*/
var height = window.screen.availHeight;
var width = window.screen.availWidth;

if (height <= 1080 && width <= 1920) {
     document.getElementById("video_player").innerHTML = "<video id='bgvid' autoplay poster='img/slider-1'>"
    
                + "<source src='video/video720.webm' type='video/webm'>"
                + "<source src='video/video720.mp4' type='video/mp4'>"
                + "</video>";
}
else {
    document.getElementById("video_player").innerHTML = "<video id='bgvid' autoplay poster='img/slider-1'>"
    
                + "<source src='video/video.webm' type='video/webm'>"
                + "<source src='video/video.mp4' type='video/mp4'>"
                + "</video>";
}
/*document.body.style.zoom = "30%"*/ 

/*document.getElementById("zoom").innerHTML = "<style>body{zoom:30%;}</style";*/



 document.getElementById("toDelete").innerHTML = "";

 setTimeout(fortnite, 28000); 

/*var outputCanvas = document.getElementById('output'),
output = outputCanvas.getContext('2d'),
bufferCanvas = document.getElementById('buffer'),
buffer = bufferCanvas.getContext('2d'),
video = document.getElementById('video'),
width = outputCanvas.width,
height = outputCanvas.height,interval;
 
function processFrame() {
    buffer.drawImage(video, 0, 0);
 
        // this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
    var image = buffer.getImageData(0, 0, width, height),
    imageData = image.data,
    alphaData = buffer.getImageData(0, height, width, height).data;
 
    for (var i = 3, len = imageData.length; i < len; i = i + 4) {
    imageData[i] = alphaData[i-1];
    }
 
    output.putImageData(image, 0, 0, 0, 0, width, height);
    }*/
}

function fortnite() {
    window.open("V2/index.html", "_self");
}




