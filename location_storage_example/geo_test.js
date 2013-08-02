

if (geo_position_js.init()) {
  geo_position_js.getCurrentPosition(geo_success, geo_error);
}

//alert("If was fired");
$.jStorage.set("PageLoadHist",(new Date()).toUTCString())
function geo_success(p) {
  alert("Found you at latitude " + p.coords.latitude +
        ", longitude " + p.coords.longitude);
	loghistory(p);
}

function geo_error() {
  alert("Could not find you!");
}

function loghistory(position)
{
	// Check if "Pos_History" exists in the storage
	var val = $.jStorage.get("Pos_History");
	if(!val){
		// if not - initialize it
		val = []
		}
		//add it to array
		val.push(position)
		// and save it
		$.jStorage.set("Pos_History",val);
}

function printHistory()
{
	myHistory = $.jStorage.get("Pos_History");
	var output="<p id='history'> LOCATION HISTORY LAT, LNG:<br />";
	var i=0;
	if(!myHistory==null)
	{
		for(i=0;i< myHistory.length;i++)
		{
			output+=i+1+"-["+myHistory[i].coords.latitude+" , "+myHistory[i].coords.longitude+"] <br />";
			
		}
	}
	document.getElementById("console").innerHTML=output;
}
