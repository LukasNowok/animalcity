// must be in HTTPS

let osc, oscPlaying, startPosition, distanceToStart;

function preload(){
  startPosition = getCurrentPosition();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('starting');
  noStroke();
  fill(255);
  textSize(18);

  osc = new p5.Oscillator('triangle');
  osc.amp(0.5, 0);
  osc.freq(400, 0);
  oscPlaying = 1;
  osc.start();

  // get position once
  if(geoCheck() == true) {
     background(135, 200, 118);
     startPosition = getCurrentPosition();
  } else {
     background(234, 51, 35);
  }

  let watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
  };
  watchPosition(positionChanged, watchOptions);
}

function positionChanged(position){
    background(135, 200, 118);
    distanceToStart = calcGeoDistance(position.latitude,position.longitude,startPosition.latitude,startPosition.longitude, 'km');
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
    text(nf(position.latitude,2,8) + " " + nf(position.longitude,2,8), 10, height/2);
    text(distanceToStart*1000, 10, height/1.5);
    positionToFrequency(distanceToStart);
}

function onGetPosition(position){
  background(135, 200, 118);
  distanceToStart = calcGeoDistance(position.latitude,position.longitude,startPosition.latitude,startPosition.longitude, 'km');
  print("lat: " + position.latitude);
  print("long: " + position.longitude);
  text(nf(position.latitude,2,8) + " " + nf(position.longitude,2,8), 10, height/2);
  text(distanceToStart*1000, 10, height/1.5);
  positionToFrequency(distanceToStart);
}

function positionToFrequency(distance){
  osc.freq(map(distance*1000, 0, 100, 400, 800), 1);
}

function soundOnOff(){
  if(oscPlaying){
    osc.stop();
    oscPlaying = 0;
  } else {
    osc.start();
    oscPlaying = 1;
  }
}

////////////////
////////////////
function draw(){
  //getCurrentPosition(onGetPosition);
}

/*
function draw(){
  navigator.geolocation.getCurrentPosition(setPos);
}

function setPos(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  background(0);
  fill(255);
  textSize(18);
  text(nf(lat,2,8) + " " + nf(lng,2,8), 10, height/2);
}
*/
