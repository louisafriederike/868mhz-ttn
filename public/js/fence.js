
// window.onload = function() {
  $(document).ready(function(){
    var startPos;
    var node1Lat;
    var node1Long;
    var node2Lat;
    var node2Long;
    var node3Lat;
    var node3Long;
    var node4Lat;
    var node4Long;
    var node5Lat;
    var node5Long;
    var node6Lat;
    var node6Long;
    var distance;
    var distance2;
    var distance3;
    var distance4;
    var distance5;

    
    if (navigator.geolocation) {
      
      node1Lat = 51.916080703822985;
      node1Long = 4.476145158543535;

      node2Lat = 51.91620529794022;
      node2Long = 4.47790731771267;

      node3Lat = 51.91435892487735;
      node3Long = 4.480129527881552;

      node4Lat = 51.91571040166534;
      node4Long = 4.480724812513352;

      node5Lat = 51.91697272192186;
      node5Long = 4.4838308105517815;

      node6Lat = 51.916080703822985;
      node6Long = 4.476145158543535;

      message = document.querySelector('#on-location-track');
      node01active = document.querySelector('#objective');
      nav = document.querySelector('.nav-track');

      $("#startLat").text(node1Lat);
      $("#startLon").text(node1Long);
      $("#startLat2").text(node2Lat);
      $("#startLon2").text(node2Long);
  
      navigator.geolocation.watchPosition(function(position) {
        $("#currentLat").text(position.coords.latitude);
        $("#currentLon").text(position.coords.longitude);
        socket.emit('userposition', [position.coords.latitude,position.coords.longitude]);

        distance = calculateDistance(node1Lat, node1Long,position.coords.latitude, position.coords.longitude)
        $("#distance").text(distance);
        distance2 = calculateDistance(node2Lat, node2Long,position.coords.latitude, position.coords.longitude)
        $("#distance2").text(distance2);
        distance3 = calculateDistance(node3Lat, node3Long,position.coords.latitude, position.coords.longitude)
        $("#distance3").text(distance);
        distance4 = calculateDistance(node4Lat, node4Long,position.coords.latitude, position.coords.longitude)
        $("#distance4").text(distance2);
        distance5 = calculateDistance(node5Lat, node5Long,position.coords.latitude, position.coords.longitude)
        $("#distance5").text(distance);

        if(!localStorage.getItem('gateway')){
          
          $("#distance").text(distance);
      }
        if(localStorage.getItem('gateway') == '1'){
          $("#distance").text(distance2);
      }

        if(localStorage.getItem('gateway') == '2'){
        
          $("#distance").text(distance3);
      }

        if(localStorage.getItem('gateway') == '3'){
          
          $("#distance").text(distance4);
      }

        if(localStorage.getItem('gateway') == '4'){
            
          $("#distance").text(distance5);
      }

      if(localStorage.getItem('gateway') == '6'){
            
        $("#distance").text("Our journey ends here.");
      }
      
        
       if(distance < .02){
       $("#message").text(" >>> you have entered gateway 1");
        //   $("#objective").text("Welcome to the Gallery. Take your time, look around. When you are ready, notice the little transparent module mounted on the wall in the corner. Turn the knob to 55 and keep it steady there for a moment until a number code is revealed. Enter it in the port above, with attention to the dots, to unlock the first dream log.");
       playTrack1();        
        //   message.style.visibility = 'visible';
        //   nav.style.visibility = 'hidden';
        // }else if(distance > .02 && !localStorage.getItem('gateway')){
        //   $("#message").text("outside reach of gateway 1");
        //   $("#objective").text("Enter S/ash Gallery to step into the game.");
        }

       if(distance2 < .02){
          playTrack1();
          $("#message").text(">>> you have entered gateway 2.");
        //   $("#objective").text("You have entered the second gateway. the code is hidden on a metal door locking in high voltage. You will see three digits, loose the first to get the code.");
        //   message.style.visibility = 'visible';
        //   nav.style.visibility = 'hidden';
        // }else if(distance2 > .02 && localStorage.getItem('gateway') == 1){
        //   $("#message2").text("You are outside reach of Gateway 2.");
        }
       if(distance3 < .02){
          playTrack1();
          $("#message").text(">>> you have entered gateway 3.");
        //   $("#objective").text("The code is hidden on a number wheel in a window close by, spelled out in large letters. Loose the first digit.");
        //   message.style.visibility = 'visible';
        //   nav.style.visibility = 'hidden';
        // }else if(distance3 > .02 && localStorage.getItem('gateway') == 2){
        //   $("#message").text("You are outside reach of Gateway 3.");
        }

        if(distance4 < .02){
          playTrack1();
          $("#message").text(">>> you have entered gateway 4.");
        //   $("#objective").text("The code is hidden on a tag on a small metal straigcase: OCTOZILLA, followed bu four digits. Loose the first two.");
        //   message.style.visibility = 'visible';
        //   nav.style.visibility = 'hidden';
        // }else if(distance4 > .02 && localStorage.getItem('gateway') == 3){
        //   $("#message").text("You are outside reach of Gateway 4.");
        }

        if(distance5 < .02){
          playTrack1();
          $("#message").text(">>> you have entered gateway 5.");
        //   $("#objective").text("The code is hidden on a sign next to a yellow bench. Port of Rotterdam. Loose the first digit.");
        //   message.style.visibility = 'visible';
        //   nav.style.visibility = 'hidden';
        // }else if(distance5 > .02 && localStorage.getItem('gateway') == 4){
        //   $("#message").text("You are outside reach of Gateway 5.");
        }

      });
    }
  });

  
  
  // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
  // http://www.movable-type.co.uk/scripts/latlong.html
  // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
