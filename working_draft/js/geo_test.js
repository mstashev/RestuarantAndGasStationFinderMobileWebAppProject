//position object to hold current calculated position
var userPos = new Object();
//initialize its properties to avoid unforseen errors
userPos.LAT=0;
userPos.LNG=0;
////////////////////////////////////////////////////////////
// Written by: Andrew Meyerhoff
// Purpose: Handles the geo location funtions and data
//------------------------------------------------
//	Revision History
//------------------------------------------------
// Person	:	-Revision
//-------------------------------------------------
// Andrew Meyerhoff : Document Creation
//



//if the user browser has geolocation => try to get it
if (geo_position_js.init()) {
  geo_position_js.getCurrentPosition(geo_success, geo_error);
}

//user allows us to access their location and nothing went wrong
// then set the properties of the position object
function geo_success(p) {
  // alert("Found you at latitude " + p.coords.latitude +
        // ", longitude " + p.coords.longitude);
		userPos.LAT =p.coords.latitude;
		userPos.LNG =p.coords.longitude;
		alertUserPos();
}

// something didn't work and we need to let the user be aware of that
function geo_error() {
  alert("Could not find you!");
}

//just for shorthand debugging purposes
function alertUserPos()
{
	alert("Found you at latitude: " +userPos.LAT +
         ", longitude: " + userPos.LNG);
}

// for access to object in driver script
function getUserPos()
{
	return userPos;
}

