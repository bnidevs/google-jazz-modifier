var blurlisteners = getEventListeners(window)["blur"];
while(typeof blurlisteners !== 'undefined'){
  var blurlistener = blurlisteners[0];
  window.removeEventListener("blur",blurlistener.listener,blurlistener.useCapture);
  blurlisteners = getEventListeners(window)["blur"];
}

function rept() {
  var riff = Math.random();
  var min = 2,max = 5;
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  if(riff >= 0.8){
    var minkeys = 5, maxkeys = 8;
    var numkeys = Math.floor(Math.random() * (minkeys - maxkeys + 1) + minkeys);
    setTimeout(function(){do_riff(numkeys)}, rand * 100);
  }else{
    min = 7,max = 20;
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    window.dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));
    setTimeout(rept, rand * 100);
  }
}

function do_riff(t){
  window.dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));
    var min = 2,max = 5;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
  if(t > 0){
    setTimeout(function(){do_riff(t-1)}, rand * 100);
  }else{
    setTimeout(rept, rand * 100);
  }
}

rept()
