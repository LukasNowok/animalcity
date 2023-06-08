// must be in HTTPS
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('starting');
	noStroke();
  // get position once
  if(geoCheck() == true {
     background(135, 200, 118);
  } else {
     background(234, 51, 35);
  }
  watchPosition(positionChanged)
}

function positionChanged(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
    text(nf(position.latitude,2,8) + " " + nf(position.longitude,2,8), 10, height/2);
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
