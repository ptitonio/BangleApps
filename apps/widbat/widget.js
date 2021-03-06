(function(){
var img_charge = E.toArrayBuffer(atob("DhgBHOBzgc4HOP////////////////////3/4HgB4AeAHgB4AeAHgB4AeAHg"));
var CHARGING = 0x07E0;
var xpos = WIDGETPOS.tr-64;
WIDGETPOS.tr-=68;

function draw() {
  var s = 63;
  var x = xpos, y = 0;
  g.clearRect(x,y,x+s,y+23);
  if (Bangle.isCharging()) {
    g.setColor(CHARGING).drawImage(img_charge,x,y);
    x+=16;
    s-=16;
  }
  g.setColor(-1);
  g.fillRect(x,y+2,x+s-4,y+21);
  g.clearRect(x+2,y+4,x+s-6,y+19);
  g.fillRect(x+s-3,y+10,x+s,y+14);
  g.setColor(CHARGING).fillRect(x+4,y+6,x+4+E.getBattery()*(s-12)/100,y+17);
  g.setColor(-1);
}
Bangle.on('charging',function(charging) { draw(); g.flip(); if(charging)Bangle.buzz(); });
var batteryInterval;
Bangle.on('lcdPower', function(on) {
  if (on) {
   draw();
   // refresh once a minute if LCD on
   if (!batteryInterval)
     batteryInterval = setInterval(draw, 60000);
 } else {
   if (batteryInterval) {
     clearInterval(batteryInterval);
     batteryInterval = undefined;
   }
 }
});
WIDGETS["battery"]={draw:draw};
})()
