// on load
	$(document).ready(function(){ 
	//hide the sidebar wrapper //
		$("#sidebar-wrapper").hide();
	// on load hide all the other sections except the landing page //
		$("#services").hide();
		$("#about").hide();
		$("#portfolio").hide();
		$("#blog").hide();
		$("#contact").hide();
		$("#clients").hide();
	});
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").slideUp("slow");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").slideDown("slow");
    });
	
	// display only the portfolio //
	$(".menu-links").click(function(e){
		var menu_href = $(this).attr("href");
		//alert(menu_href);
		if(menu_href=="#top"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").show();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
		}
		else if(menu_href=="#services"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#services").show();
			$("#top").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
		}
		else if(menu_href=="#about"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").show();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
		}
		else if(menu_href=="#portfolio"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").show();
			$("#blog").hide();
			$("#contact").hide();
		}
		else if(menu_href=="#blog"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").show();
			$("#contact").hide();
		}
		else if(menu_href=="#contact"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").show();
		}
	});
	