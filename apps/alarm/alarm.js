// Chances are boot0.js got run already and scheduled *another*
// 'load(alarm.js)' - so let's remove it first!
clearInterval();

function formatTime(t) {
  var hrs = 0|t;
  var mins = Math.round((t-hrs)*60);
  return hrs+":"+("0"+mins).substr(-2);
}

function getCurrentHr() {
  var time = new Date();
  return time.getHours()+(time.getMinutes()/60);
}

function showAlarm(alarm) {
  var msg = formatTime(alarm.hr);
  var buzzCount = 10;
  if (alarm.msg)
    msg += "\n"+alarm.msg;
  E.showPrompt(msg,{
    title:"ALARM!",
    buttons : {"Sleep":true,"Ok":false} // default is sleep so it'll come back in 10 mins
  }).then(function(sleep) {
    buzzCount = 0;
    if (sleep) {
      alarm.hr += 10/60; // 10 minutes
    } else {
      alarm.last = (new Date()).getDate();
      if (!alarm.rp) alarm.on = false;
    }
    require("Storage").write("alarm.json",JSON.stringify(alarms));
    load();
  });
  function buzz() {
    Bangle.buzz(100).then(()=>{
      setTimeout(()=>{
        Bangle.buzz(100).then(function() {
          if (buzzCount--)
            setTimeout(buzz, 3000);
        });
      },100);
    });
  }
  buzz();
}

// Check for alarms
var day = (new Date()).getDate();
var hr = getCurrentHr();
var alarms = require("Storage").readJSON("alarm.json",1)||[];
var active = alarms.filter(a=>a.on&&(a.hr<hr)&&(a.last!=day));
if (active.length) {
  // if there's an alarm, show it
  active = active.sort((a,b)=>a.hr-b.hr);
  showAlarm(active[0]);
} else {
  // otherwise just go back to default app
  load();
}
