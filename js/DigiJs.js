// on load
	$(document).ready(function(){ 
	$('body').css('overflow-y', 'hidden');
	//hide the sidebar wrapper //
		$("#sidebar-wrapper").hide();
	// on load hide all the other sections except the landing page //
		$("#services").hide();
		$("#about").hide();
		$("#portfolio").hide();
		$("#blog").hide();
		$("#contact").hide();
		$("#clients").hide();
		setTabs();
		
		$("#top").focus();
		
	});
	
	function setTabs(){
		
		$('#top').attr("tabindex",1);
		$("#services").attr("tabindex",2);
		$("#about").attr("tabindex",3);
		$("#portfolio").attr("tabindex",4);
		$("#blog").attr("tabindex",5);
		$("#contact").attr("tabindex",6);
		$("#clients").attr("tabindex",7);
		
	}
	
	$('#top').keydown(function(event){
		
		if(event.which == 40)
		{
			$('#top').slideUp(1000);
			$('#top').blur();
			
			$('#services').show();
			$("#c1").removeClass('filled');
			$("#c2").addClass('filled');
			
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			
			
			$('#services').focus();
			
		}
		$('#position').show();
	});

	$('#services').keydown(function(event){
		
		if(event.which == 38) 
		{
			 
			 
			$('#services').slideDown("1000");
			$('#services').blur();
			$('#top').show();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#clients").hide();
			$("#c2").removeClass('filled');
			$("#c1").addClass('filled');
	
			$('#top').focus();
		}
		else if(event.which == 40) 
		{
			
			$('#services').slideUp("1000");
			$('#services').blur();
			$('#about').show();
			$("#c2").removeClass('filled');
			$("#c3").addClass('filled');
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#clients").hide();
		
			$('#about').focus();
			
		}
	});
	$('#about').keydown(function(event){
		switch(event.which)
		{
			case 38:
					
					$('#about').slideDown("1000");
					$('#about').blur();
					$('#services').show();
					$("#portfolio").hide();
					$("#top").hide();
					$("#blog").hide();
					$("#contact").hide();
					$("#clients").hide();
					$("#c3").removeClass('filled');
					$("#c2").addClass('filled');
					$('#services').focus();
					break;
			case 40:
					$('#about').slideUp("1000");
					$('#about').blur();
					$('#portfolio').show();
					$("#c3").removeClass('filled');
					$("#c4").addClass('filled');
					$('#portfolio').focus();
					break;
			
		}
		
		
		
	});
	$('#portfolio').keydown(function(event){
		switch(event.which)
		{
			case 38:
					$('#portfolio').slideDown("1000");
					$("#portfolio").blur();
					$('#about').show();
					$("#c4").removeClass('filled');
					$("#c3").addClass('filled');
					$('#about').focus();
					$("#contact").hide();
					break;
			case 40:
					$('#portfolio').slideUp("1000");
					$("#portfolio").blur();
					$('#contact').show();
					$("#portfolio").hide();
					$("#c4").removeClass('filled');
					$("#c5").addClass('filled');
					$('#contact').focus();
					break;
		}
	});
	$('#contact').keydown(function(event){
		if(event.which==38)
		{
			
				$('#contact').slideDown("1000");
				$("#contact").blur();
				$('#portfolio').show();
				
				$("#c5").removeClass('filled');
				$("#c4").addClass('filled');
				$('#portfolio').focus();
				
			
		}
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
			$("#top").focus();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").addClass('filled');
			$("#c2").removeClass('filled');
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
		}
		else if(menu_href=="#services"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#services").show();
			$("#services").focus();
			$("#top").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			$("#c2").addClass('filled');
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
		}
		else if(menu_href=="#about"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").show();
			$("#about").focus();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			
			$("#c2").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
			$("#c3").addClass('filled');
		}
		else if(menu_href=="#portfolio"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").show();
			$("#portfolio").focus();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
			$("#c4").addClass('filled');
		}
		else if(menu_href=="#blog"){
			$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").show();
			$("#blog").focus();
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
			$("#contact").focus();
			$("#c1").removeClass('filled');
			
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c2").removeClass('filled');
			$("#c5").addClass('filled');
		}
	});
	$("#c1").click(function(){
		$("#top").show();
			$("#top").focus();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").addClass('filled');
			$("#c2").removeClass('filled');
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
		
	});
	$("#c2").click(function(){
		$("#services").show();
			$("#services").focus();
			$("#top").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			$("#c2").addClass('filled');
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
			
		
		
		
		
	});
	$("#c3").click(function(){
		$("#top").hide();
			$("#services").hide();
			$("#about").slideUp(1000);
			$("#about").show();
			$("#about").focus();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			
			$("#c2").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
			$("#c3").addClass('filled');
		
	});
	$("#c4").click(function(){
		$("#sidebar-wrapper").slideUp("slow");
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").show();
			$("#portfolio").focus();
			$("#blog").hide();
			$("#contact").hide();
			$("#c1").removeClass('filled');
			
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c5").removeClass('filled');
			$("#c4").addClass('filled');
		
		
		
	});
	$("#c5").click(function(){
			$("#top").hide();
			$("#services").hide();
			$("#about").hide();
			$("#portfolio").hide();
			$("#blog").hide();
			$("#contact").show();
			$("#contact").focus();
			$("#c1").removeClass('filled');
			
			$("#c3").removeClass('filled');
			$("#c4").removeClass('filled');
			$("#c2").removeClass('filled');
			$("#c5").addClass('filled');
		
	})
	