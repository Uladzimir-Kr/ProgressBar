let i = 0;

$("#but1").click(but1);
$("#but2").click(but2);
$("#but3").click(but3);
$("#but4").click(progressClear);


function progressStart() {
 	$(".progress-bar").css("width", i + "%");
	$(".label").html(i + "%");
};

function progressEnd() {
	$(".label").html("Loading Success");
};

function progressClear() {
	$(".progress-bar").css("width", i = 0);
	$(".label").html(i = 0);		
};



function but1() {
	if (i <= 100) {
		i = i + 1;
		progressStart();
	}	
	else 
	{
		progressEnd();
	}
};

function but2() {
	if (i <= 100) {
		i = i + 3;
		progressStart();
	}	
	else 
	{
		progressEnd();
	}
};

function but3() {
	if (i <= 100) {
		i = i + 7;
		progressStart();
	}	
	else 
	{
		progressEnd();
	}
};








	