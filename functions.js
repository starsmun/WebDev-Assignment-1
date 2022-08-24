var limit = 1100;
var barExpanded = false

$(document).ready(mobileCheck);
$(window).resize(mobileCheck);



function mobileCheck() {
    	var resW = $(window).width();
    	if (resW < limit) {
		document.getElementsByTagName('ul')[0].style.display = "none";
		$('#LogoBox').css("float", "none");
		$('#ContentArea').css("width", "calc(100% - 50px)");
		
		if(!barExpanded){
			$('#SideBar').css("width", "50px");
		}
		

		$('.dropdown').css("display", "inline-block");
		

		$('li').css("float", "none"); 
		$('li a').css("font-size", "30px");
		$('li').css("display", "block");

		   

    	}
	else {
		$('.dropdown').css("display", "none");

		$('ul').css("display", "block");
  		$('#LogoBox').css("float", "left");
		$('#SideBar').css("width", "300px");   
		$('#ContentArea').css("width", "calc(100% - 300px)");

		$('li').css("float", "left"); 
		$('li a').css("font-size", "2.9vw");
		$('li').css("display", "inline");
		
	}
}


function expandBar(){
	barExpanded = !barExpanded;
	if(barExpanded){
		$('#SideBar').css("width", "300px");
		$('.sidebutton').css("margin-left", "280px");   
	}
	else{
		$('#SideBar').css("width", "50px");
		$('.sidebutton').css("margin-left", "30px");   
	}
	
}