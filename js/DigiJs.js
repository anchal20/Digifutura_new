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
	
	// display only one page as per the Menu option selected //
	$(".menu-links").click(function(e){
		e.preventDefault();
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
	
	$("#panel1").hover(function(){
		//alert($(this));
		var image1= new Image();
		image1.src="img/service/ux2.gif?p" + new Date().getTime();
		$("#ux_gif").show();
		$("#ux_gif img").attr('src',image1.src);
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'red'});
		$hr.css({borderColor:'red'});
	},function(){
		$("#ux_gif").hide();
		$("#ux_gif img").attr('src','');
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'black'});
		$hr.css({borderColor:'black'});
	});
	$("#panel2").hover(function(){
		//alert($(this));
		var image1= new Image();
		image1.src="img/service/Mobile2.gif?p" + new Date().getTime();
		$("#mob_gif").show();
		$("#mob_gif img").attr('src',image1.src);
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'red'});
		$hr.css({borderColor:'red'});
	},function(){
		$("#mob_gif").hide();
		$("#mob_gif img").attr('src','');
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'black'});
		$hr.css({borderColor:'black'});
	});
	$("#panel3").hover(function(){
		//alert($(this));
		var image1= new Image();
		image1.src="img/service/WebDesign2.gif?p" + new Date().getTime();
		$("#web_gif").show();
		$("#web_gif img").attr('src',image1.src);
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'red'});
		$hr.css({borderColor:'red'});
	},function(){
		$("#web_gif").hide();
		$("#web_gif img").attr('src','');
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'black'});
		$hr.css({borderColor:'black'});
	});
	$("#panel4").hover(function(){
		//alert($(this));
		var image1= new Image();
		image1.src="img/service/IOT2.gif?p" + new Date().getTime();
		$("#iot_gif").show();
		$("#iot_gif img").attr('src',image1.src);
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'red'});
		$hr.css({borderColor:'red'});
	},function(){
		$("#iot_gif").hide();
		$("#iot_gif img").attr('src','');
		var $div=$(this).find(".panel-body p");
		var $hr=$(this).find(".panel-body hr");
		$div.css({color:'black'});
		$hr.css({borderColor:'black'});
	});
	
	