////////////////////
// Written by: Andrew Meyerhoff
// Purpose: handles Event Object data manipulations and functions
//----------------------------
// Revision History
//----------------------------
// person	:	-revision 
//----------------------------
// Andrew Meyerhoff	:	-Document Creation
//

// TEMPLATE FOR EVENT Object
//event = {Title:"Title Here",  bCode:"", Place:"place", dateTime:date("date time here"), Host:"Host org/person HERE", Entry:"OPEN-Free, OPEN-Pay, Closed"}

// initializes array of events
var events=[];

//DUMMY EVENTS

events=[
			{Title:"Bake A Cake",  bCode:"CE", Place:"Campus Center:450C", dateTime:new Date("May 1, 2011 13:30:00"), Host:"IUPUI Baking society", Entry:"OPEN-Free"}	,
			{Title:"write a book",  bCode:"UC", Place:"Taylor Hall:270", dateTime:new Date("April 20, 2011 11:30:00"), Host:"IUPUI journalism peeps", Entry:"OPEN-Free"}	,
			{Title:"Battle Ground Zero:III",  bCode:"CE", Place:"Campus Center:450", dateTime:new Date("April 30, 2011 13:30:00"), Host:"IUPUI Hip Hop Dance Crew", Entry:"OPEN-Free"}	,
			{Title:"Rattle a cage",  bCode:"SL", Place:"Science and Technology:B098", dateTime:new Date("April 17, 2011 15:30:00"), Host:"IUPUI Zoological Society", Entry:"OPEN-Free"}	

];

function getEvents()
{
	return events;
}
// starts up event source
function buildEvents()
{
	//first try local storage
	events = getStoredEventArray()
	// if none or getDate on array is over 7 days old
	// get from feed
	
	//then populate events
}
// trys to get the stored events from local storage
function getStoredEventArray()
{

}
//uses the storagejs library to store events on local machine
function storeEventArray(inArr)
{

}

//returns event object with property values as input below
function makeEvent(intitle,inbCode,inplace,indate,inhost,inentry)
{
	return {title:intitle,  bCode:inbCode, place:inplace, dateTime:indate, Host:inhost, Entry:inentry};
}

function makeNStoreEvent(intitle,inbCode,inplace,indate,inhost,inentry)
{
	events.push({title:intitle,  bCode:inbCode, place:inplace, dateTime:indate, Host:inhost, Entry:inentry});
}
// sets the building code on the building objects
function setBcode()
{
	for( e in events)
	{
		if (e.bCode == null || e.bCode =='')
			{
				e.bCode=getBcode(e);
			}
	}
}
// internal function that call looks up synonyms for building names and returns corresponding code
function getBcode(inEvent)
{
	var pat1 = new RegExp("Campus Center");
	var pat2 = new RegExp("CE [0-9]");
	var pat3 = new RegExp("Science Building");
	var pat4 = new RegExp("SL [0-9]");
	var pat5 = new RegExp("Informatics Building");
	var pat6 = new RegExp("IT [0-9]");
	var pat7 = new RegExp("Cavanagh Hall");
	var pat8 = new RegExp("CA [0-9]");
	var pat9 = new RegExp("Lecture Hall");
	var pat10 = new RegExp("LE [0-9]");
	var pat11 = new RegExp("Engineering Building");
	var pat12 = new RegExp("ET [0-9]");
	if(pat1.test(inEvent.Place)||pat2.test(inEvent.Place))
	{
		return "CE"
	}
	else if(pat3.test(inEvent.Place)||pat4.test(inEvent.Place))
	{
		return "SL"
	}
	
	else if(pat5.test(inEvent.Place)||pat6.test(inEvent.Place))
	{
		return "IT"
	}
		if(pat7.test(inEvent.Place)||pat8.test(inEvent.Place))
	{
		return "CA"
	}
	else if(pat9.test(inEvent.Place)||pat10.test(inEvent.Place))
	{
		return "LE"
	}
	
	else if(pat11.test(inEvent.Place)||pat12.test(inEvent.Place))
	{
		return "ET"
	}
	else
	return "NOTFOUND";
}

function getBuildingEvents(inBcode)
{
	var i =0;
	var bEvents=[];
	for(i=0;i<events.length;i++)
	{
		if(events[i].bCode==inBcode)
		{
			bEvents.push(events[i]);
		}
	}
	
	return bEvents;
}

