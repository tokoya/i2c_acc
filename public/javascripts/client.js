var socket = io.connect();
var cv = document.getElementById("cv");
var ctx = cv.getContext('2d');
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 3;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;

socket.on('connect', function() {
  console.log('connect');
  var accx = document.getElementById("accx")
  var accy = document.getElementById("accy")
  var accz = document.getElementById("accz")
  socket.on('event', function(data) {
    accx.innerHTML = "x: " + data.x;
    accy.innerHTML = "y: " + data.y;
    accz.innerHTML = "z: " + data.z;
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, 500, 300);
    ctx.fillStyle = '#F00';
    ctx.fillRect(250, 5, data.x * 2, 45);
    ctx.fillStyle = '#0F0';
    ctx.fillRect(250, 55, data.y * 2, 45);
    ctx.fillStyle = '#00F';
    ctx.fillRect(250, 105, data.z * 2, 45);
  });
});
