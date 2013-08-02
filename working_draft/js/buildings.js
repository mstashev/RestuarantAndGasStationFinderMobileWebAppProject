//////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Author: 	Andrew Meyerhoff											//
//DATE:		4/3/2011													//
//Purpose:	handles building matching logic								//
//////////////////////////////////////////////////////////////////////////
//----------------------------------------------------------------------//
//REVISION HISTORY:														//
//----------------------------------------------------------------------//
//-|-(4/3/2011)-|-Andrew Meyerhoff-|- creation							//
//-|-(4/3/2011)-|-Andrew Meyerhoff-|- building object array populated	//
//-|-(4/3/2011)-|-Zach Holdren/Michael Stashevsky-|- added new 
//////////////////////////////////////////////////////////////////////////
//buildings mapped							
//////////////////////////////////////////////
//	IH =  Law school						//
//	SL =  SCIENCE engineering				//
//	LD =  SCIENCE BLDING					//
//	UL =  University Library				//
//	ET =  Engineering Technology			//
//	UC =  TAYLOR HALL						//
//	LE =  Lecture Hall						//
//	CA =  Cavanaugh Hall					//
//	CE =  Campus Center						//
//	DS =  Dental School						//
//	NU =  Nursing School					//
//	BS =  Business/SPEA						//
//	ES =  Educational/Social Work			//
//	HR =  Herron School						//
//	IT =  Informatics Building				//
//	PE =  Physical Education/Natatorium		//
//	CF =  Coleman Hall						//
//////////////////////////////////////////////

var buildings=[
            {NAME:"IH",NW_Corner:{LAT:39.772535,LNG:-86.168518},NE_Corner:{LAT:39.772535,LNG:-86.167531},SW_Corner:{LAT:39.771900,LNG:-86.168518}, SE_Corner:{LAT:39.771900,LNG:-86.167531} }   ,
            {NAME:"SL",NW_Corner:{LAT:39.774155,LNG:-86.171297},NE_Corner:{LAT:39.774155,LNG:-86.170385},SW_Corner:{LAT:39.773755,LNG:-86.171297}, SE_Corner:{LAT:39.773755,LNG:-86.170385} }   ,
			{NAME:"LD",NW_Corner:{LAT:39.773553,LNG:-86.170964},NE_Corner:{LAT:39.773553,LNG:-86.170385},SW_Corner:{LAT:39.773013,LNG:-86.170964}, SE_Corner:{LAT:39.773013,LNG:-86.170385} }  	, 
			{NAME:"UL",NW_Corner:{LAT:39.771327,LNG:-86.172187},NE_Corner:{LAT:39.771327,LNG:-86.170605},SW_Corner:{LAT:39.770799,LNG:-86.172187}, SE_Corner:{LAT:39.770799,LNG:-86.170605} } 	,
			{NAME:"ET",NW_Corner:{LAT:39.774184,LNG:-86.172906},NE_Corner:{LAT:39.774184,LNG:-86.172223},SW_Corner:{LAT:39.773813,LNG:-86.172906}, SE_Corner:{LAT:39.773813,LNG:-86.17223} }  	,
			{NAME:"UC",NW_Corner:{LAT:39.773376,LNG:-86.17444},NE_Corner:{LAT:39.773376,LNG:-86.173797},SW_Corner:{LAT:39.773104,LNG:-86.17444}, SE_Corner:{LAT:39.773104,LNG:-86.173797} }    	,
            {NAME:"LE",NW_Corner:{LAT:39.773054,LNG:-86.175374},NE_Corner:{LAT:39.773054,LNG:-86.174773},SW_Corner:{LAT:39.772584,LNG:-86.175374}, SE_Corner:{LAT:39.772584,LNG:-86.174773} } 	,
			{NAME:"CA",NW_Corner:{LAT:39.774077,LNG:-86.175374},NE_Corner:{LAT:39.774077,LNG:-86.174998},SW_Corner:{LAT:39.773335,LNG:-86.175374}, SE_Corner:{LAT:39.773335,LNG:-86.174998} }  	, 
			{NAME:"CE",NW_Corner:{LAT:39.774299,LNG:-86.176629},NE_Corner:{LAT:39.774299,LNG:-86.175814},SW_Corner:{LAT:39.773491,LNG:-86.176629}, SE_Corner:{LAT:39.773491,LNG:-86.175814} }  	,
			{NAME:"DS",NW_Corner:{LAT:39.774374,LNG:-86.180384},NE_Corner:{LAT:39.774374,LNG:-86.17974},SW_Corner:{LAT:39.77364,LNG:-86.180384}, SE_Corner:{LAT:39.77364,LNG:-86.17974} }  		,
			{NAME:"NU",NW_Corner:{LAT:39.776262,LNG:-86.179708},NE_Corner:{LAT:39.776262,LNG:-86.178828},SW_Corner:{LAT:39.775949,LNG:-86.179708}, SE_Corner:{LAT:39.775949,LNG:-86.178828} } 	,
			{NAME:"BS",NW_Corner:{LAT:39.774003,LNG:-86.173303},NE_Corner:{LAT:39.774003,LNG:-86.173089},SW_Corner:{LAT:39.773162,LNG:-86.173303}, SE_Corner:{LAT:39.773162,LNG:-86.173089} } 	, 
			{NAME:"ES",NW_Corner:{LAT:39.772188,LNG:-86.174591},NE_Corner:{LAT:39.772238,LNG:-86.173636},SW_Corner:{LAT:39.771982,LNG:-86.174515}, SE_Corner:{LAT:39.771958,LNG:-86.173657} } 	,
			{NAME:"HR",NW_Corner:{LAT:39.771327,LNG:-86.172187},NE_Corner:{LAT:39.771327,LNG:-86.170605},SW_Corner:{LAT:39.770799,LNG:-86.172187}, SE_Corner:{LAT:39.770799,LNG:-86.170605} }  	,
			{NAME:"IT",NW_Corner:{LAT:39.774106,LNG:-86.167278},NE_Corner:{LAT:39.774106,LNG:-86.167278},SW_Corner:{LAT:39.773356,LNG:-86.167278}, SE_Corner:{LAT:39.773356,LNG:-86.167278} }	,
			{NAME:"PE",NW_Corner:{LAT:39.771534,LNG:-86.175508},NE_Corner:{LAT:39.771534,LNG:-86.174433},SW_Corner:{LAT:39.77009,LNG:-86.175508}, SE_Corner:{LAT:39.77009,LNG:-86.174433} }  	,
			{NAME:"CF",NW_Corner:{LAT:39.77551,LNG:-86.181023},NE_Corner:{LAT:39.77551,LNG:-86.181023},SW_Corner:{LAT:39.775347,LNG:-86.180291}, SE_Corner:{LAT:39.775347,LNG:-86.180291} }	
];


// getter access for the array of buildings
function getBuildings()
{
	return buildings;
}


//calculates midpoint LAT LNG for building
function setBldmdPt()
{
	// calculate and set midpoint object on buildings here
	
}
// adds builgin to the array
function addBuilding(inName,inNW_C_LAT,inNW_C_LNG,inNE_C_LAT,inNE_C_LNG, inSW_C_LAT,inSW_C_LNG, inSE_C_LAT,inSE_C_LNG)
{
	buildings.push({NAME:inName,NW_Corner:{LAT:inNW_C_LAT,LNG:inNW_C_LNG},NE_Corner:{LAT:inNE_C_LAT,LNG:inNE_C_LNG},SW_Corner:{LAT:inSW_C_LAT,LNG:inSW_C_LNG}, SE_Corner:{LAT:inSE_C_LAT,LNG:inSE_C_LNG} } ); 	
}
//what returns name of building hit for LAT LNG pair or 'NONE'
function getBuildingCode(inLAT,inLNG)
{
	var i=0;
	var isHit=false;
	for(i=0;i<buildings.length;i++)
	{
		var b = buildings[i];
		
		if( ( b.NW_Corner.LNG <= inLNG && b.NE_Corner.LNG >= inLNG ) && ( b.NW_Corner.LAT>=inLAT && b.SW_Corner.LAT<=inLAT ) )
		{
			isHit=true;
		}
 
		if(isHit)
		{
			return b.NAME;
		}
	}
	
	return "NONE";
}


