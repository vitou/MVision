 var configSet;
 function isIE()   {
 	return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
 }
//now do some work on the vertical pane
function getWindowWidth() {
	var windowWidth = 0;
	if (typeof(window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}
function getWindowHeight() {
	var windowWidth = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}
var iCheck = 0;
var iMove;
var iMoveSplit;
function setVertical () {
	//get all elements
	oMailList = document.getElementById('mailcontframe');				// message list container
	oPreviewPane = document.getElementById('mailpreviewframe');			// preview frame container
	oPreviewPaneIFrame = document.getElementById('messagecontframe');	// iframe for preview
	oSplitter = document.getElementById('mailviewsplittervertical');	// splitter
	//get browser dimensions
	var iBrowserWidth = getWindowWidth();
	var iBrowserHeight = getWindowHeight();
	if (iBrowserWidth > 1025) var iOpenBy = 380; else var iOpenBy = 300;
	if (oMailList && oPreviewPane && oSplitter) { 
		//frame is present
		if (iOpenBy == 380) iMove = 575;
		else iMove=495;
		iMailHeight=iBrowserHeight-127; // the top of the mail/preview panes
		iPreviewWidth=iBrowserWidth-iMove-19; // width of preview pane
		//do the preview pane
		oPreviewPane.style.top=85+'px'
		oPreviewPane.style.bottom=40+'px'
		oPreviewPane.style.left = iMove+'px';
		oPreviewPaneIFrame.style.right = 0+'px';
		oPreviewPaneIFrame.style.height='100%';
		oPreviewPane.style.width=iPreviewWidth+'px'
		
		//do the splitter
		iMoveSplit = iMove - 13;
		oSplitter.style.left = iMoveSplit+'px';
		oSplitter.style.top = 85+'px';
		oSplitter.style.bottom = 40+'px';
		oSplitter.style.height=iMailHeight+"px"
		
		//change the mail list
		oMailList.style.width=iOpenBy+'px';
		oMailList.style.height=iMailHeight+"px"
	}
	iCheck++;
}
function setHorizontal () {
	//get browser dimensions
	var iBrowserWidth = getWindowWidth();
	var iBrowserHeight = getWindowHeight();
	if (iBrowserHeight > 769) var iOpenBy = 300; else var iOpenBy = 220;
	//get all elements
	oMailList = document.getElementById('mailcontframe');				// message list container
	oPreviewPane = document.getElementById('mailpreviewframe');			// preview frame container
	oPreviewPaneIFrame = document.getElementById('messagecontframe');	// iframe for preview
	oSplitter = document.getElementById('mailviewsplitterhorizontal');	// splitter
	//set the correct params
	if (oMailList && oPreviewPane && oSplitter) { 
		//frame is present
		if (iOpenBy == 300) iMove = 399;
		else iMove=319;
		iPreviewWidth=iBrowserWidth-182;	//width of viewing pane (minus left column)
		//do the preview pane
		oPreviewPane.style.top=iMove+'px'
		oPreviewPane.style.bottom=40+'px'
		oPreviewPane.style.left = 180+'px';
		oPreviewPane.style.right = 0+'px';
		oPreviewPaneIFrame.style.right = 0+'px';
		oPreviewPaneIFrame.style.height='100%';
		oPreviewPane.style.width=iPreviewWidth+'px'
		
		//do the splitter
		iMoveSplit = iMove - 11;
		if (isIE() && typeof document.body.style.maxHeight != "undefined") iMoveSplit = iMove -9; // ie7
		if (isIE() && typeof document.body.style.maxHeight == "undefined") iMoveSplit = iMove -12; // ie6
		oSplitter.style.left = 180+'px';
		oSplitter.style.top = iMoveSplit+'px';
		oSplitter.style.width=iPreviewWidth+'px'
		
		//change the mail list
		iWindowWidth=iBrowserWidth-187;
		oMailList.style.width=iWindowWidth+'px';
		oMailList.style.height=iOpenBy+"px"
		if (isIE()) {
			//we have to get the email list twice onload because of stupid fucking IE 
			rcmail.command('list','INBOX',this)
			setTimeout("document.getElementById('messagecontframe').style.display='block'",250);setTimeout("document.getElementById('messagecontframe').style.display='block'",500);setTimeout("document.getElementById('messagecontframe').style.display='block'",750);setTimeout("document.getElementById('messagecontframe').style.display='block'",1000);setTimeout("document.getElementById('messagecontframe').style.display='block'",1250);setTimeout("document.getElementById('messagecontframe').style.display='block'",1500);setTimeout("document.getElementById('messagecontframe').style.display='block'",1750);setTimeout("document.getElementById('messagecontframe').style.display='block'",2000);setTimeout("document.getElementById('messagecontframe').style.display='block'",2250);setTimeout("document.getElementById('messagecontframe').style.display='block'",2500);setTimeout("document.getElementById('messagecontframe').style.display='block'",2750);setTimeout("document.getElementById('messagecontframe').style.display='block'",3000);setTimeout("document.getElementById('messagecontframe').style.display='block'",3250);setTimeout("document.getElementById('messagecontframe').style.display='block'",3500);setTimeout("document.getElementById('messagecontframe').style.display='block'",3750);setTimeout("document.getElementById('messagecontframe').style.display='block'",4000);setTimeout("document.getElementById('messagecontframe').style.display='block'",4250);setTimeout("document.getElementById('messagecontframe').style.display='block'",4500);setTimeout("document.getElementById('messagecontframe').style.display='block'",4750);setTimeout("document.getElementById('messagecontframe').style.display='block'",5000);setTimeout("document.getElementById('messagecontframe').style.display='block'",5500);setTimeout("document.getElementById('messagecontframe').style.display='block'",6000);setTimeout("document.getElementById('messagecontframe').style.display='block'",6500);setTimeout("document.getElementById('messagecontframe').style.display='block'",7000);setTimeout("document.getElementById('messagecontframe').style.display='block'",7500);setTimeout("document.getElementById('messagecontframe').style.display='block'",8000);setTimeout("document.getElementById('messagecontframe').style.display='block'",9000);setTimeout("document.getElementById('messagecontframe').style.display='block'",10000);setTimeout("document.getElementById('messagecontframe').style.display='block'",11000);setTimeout("document.getElementById('messagecontframe').style.display='block'",12000);setTimeout("document.getElementById('messagecontframe').style.display='block'",13000);setTimeout("document.getElementById('messagecontframe').style.display='block'",14000);setTimeout("document.getElementById('messagecontframe').style.display='block'",15000);setTimeout("document.getElementById('messagecontframe').style.display='block'",16000);setTimeout("document.getElementById('messagecontframe').style.display='block'",17000);setTimeout("document.getElementById('messagecontframe').style.display='block'",18000);setTimeout("document.getElementById('messagecontframe').style.display='block'",19000);setTimeout("document.getElementById('messagecontframe').style.display='block'",20000);setTimeout("document.getElementById('messagecontframe').style.display='block'",25000);setTimeout("document.getElementById('messagecontframe').style.display='block'",30000);
		}
	}
}

var mailviewsplitHorizontal;
var mailviewsplitVertical
function switchLayout() {
	
	//do the switch
	if (document.styleSheets[1].disabled) {
		// switch to horizontal
		document.styleSheets[1].disabled = false;
		document.styleSheets[0].disabled = true;
		var iBrowserWidth = getWindowWidth();
		oPreviewPane = document.getElementById('mailpreviewframe');			// preview frame container
		iPreviewWidth=iBrowserWidth-182;
		oPreviewPane.style.width=iPreviewWidth+'px'
		if (!mailviewsplitHorizontal) {
			mailviewsplitHorizontal = new rcube_splitter({id:'mailviewsplitterhorizontal', p1: 'mailcontframe', p2: 'mailpreviewframe', orientation: 'h'});
  			mailviewsplitHorizontal.init();
  		}
  		if (mailviewsplitVertical) document.getElementById('mailviewsplittervertical').style.display='none';
  		setHorizontal();
  		//continue
  		document.getElementById('mailviewsplitterhorizontal').style.display='block';
  		document.getElementById('messagecontframe').src = 'skins/mvision2_en/preview.html';
  		document.getElementById('switchLayout').innerHTML = 'Vertical';  		
  	} else {
		//switch to vertical (default)
		document.styleSheets[1].disabled = true;
		document.styleSheets[0].disabled = false;
		if (!mailviewsplitVertical) {
			mailviewsplitVertical = new rcube_splitter({id:'mailviewsplittervertical', p1: 'mailcontframe', p2: 'mailpreviewframe', orientation: 'v'});
  			mailviewsplitVertical.init();
  		}
		if (mailviewsplitHorizontal) document.getElementById('mailviewsplitterhorizontal').style.display='none';
		document.getElementById('mailviewsplittervertical').style.display='block';
  		setVertical();
  		document.getElementById('messagecontframe').src = 'skins/mvision2_en/previewVertical.html';
  		document.getElementById('switchLayout').innerHTML = 'Horizontal';
	}
}
