const apiToken = "pk.eyJ1IjoiOGJpdGdhbWVyIiwiYSI6ImNqMjIzaXMxbDAwMDQzM21rZWkyejlkdzAifQ.wyy0RmrDOxE1QhHIVbCZ9w";
var mapimg;

var clat = 0;
var clon = 0;

var lat = 31.2304;
var lon = 121.4737;

var zoom = 1;

function preload(){
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1.25,0,0/1200x600?access_token='+apiToken);
}

function setup(){
    createCanvas(1200, 600);
    translate(width/2, height/2);
    imageMode(CENTER);
    image(mapimg, 0, 0);

    var cx = mercX(clon);
    var cy = mercY(clat);

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(255,0,255,200);
    ellipse(x,y,20);
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}