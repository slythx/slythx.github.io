
/*
function toggleShow()
{
    var hidden_section = document.getElementById('hidden_section');
    var btn_show = document.getElementById('show-more');


    if( hidden_section.className == 'open'){

        hidden_section.className = "";
        btn_show.innerHTML = 'Show more';

    }else{
        hidden_section.className = "open";
        btn_show.innerHTML = 'Show less';
    }
}
*/

$(document).ready(function(){
	
	/* CREATE HAMBURGER NAVIGATION */
	var hamburger_nav = "<div id='hamburger-nav'>";
		hamburger_nav += "<div class='line'></div>";
		hamburger_nav += "<div class='line'></div>";
		hamburger_nav += "<div class='line'></div>";
		hamburger_nav += "</div>";
	$('.top-nav').append(hamburger_nav);
	
	/* FOR TABLET NAVIGATION */
	$('#hamburger-nav, nav.top-nav ul li a').click(function(){

		if( $(window).width() < 1263){
			$('#nav-inner ul').stop(false, false).slideToggle("slow"); 
		}
	});
	 
	
});

/* CHANGE NAVIGATION COLOR WHEN SCROLL */
$(window).scroll( function(){
		
	var top = $(window).scrollTop();
	var window_width = $(window).width();
	
	var nav_height = 75;
	var h1_top = $('#header-content').position().top;
	var about_top = $('header').height();
	 
	if ( top > h1_top - nav_height && window_width >= 1263 ){
		$('nav.top-nav').css('background-color', '#172b39');
	}else if(top == 0 && window_width >= 1263 ){
		$('nav.top-nav').css('background', 'transparent');
	}
	
	//
	
});

 




