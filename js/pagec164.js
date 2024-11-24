var mzoom = 17;

function initMap() {
	var mapelem = document.getElementById('map');
	var marks = {"name":"HD Dental"};
	//console.log(marks);
	
	var loadCenter = new google.maps.LatLng(47.875354, 17.275394);
	var loadPosition = new google.maps.LatLng(47.875354, 17.275394);
	
	if($("#zoom").length!=0){
		mzoom = parseInt($("#zoom").val());
	}
	
	if(mapelem !== null){
		
		var map = new google.maps.Map(document.getElementById('map'), {
			center: loadCenter,
			scrollwheel: false,
			zoom: mzoom
		});
		
		var infowindow = new google.maps.InfoWindow({
			content: marks.name
		});
		
		redMarker = {
			path: "M12.1,32.2c0,0-12-13.4-12-20c0-6.6,5.4-12,12-12c6.6,0,12,5.4,12,12C24.1,18.8,12.1,32.2,12.1,32.2z M12.1,5.8c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4C18.5,8.6,15.6,5.8,12.1,5.8z",
			fillColor: '#00829f',
			fillOpacity: 1,
			anchor: new google.maps.Point(13,33),
			strokeWeight: 0,
			scale: 1
		}
		
		if (typeof loadPosition !== 'undefined') { //load
			marker = new google.maps.Marker({
				map: map,
				icon: redMarker,
				title: marks.name,
				position: loadPosition,
				draggable:false
			});
			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		}
			
		$("#map").append("<span class='mapoverlay'></span>");
		$(".mapoverlay").on("click", function(){
			$(this).remove();
		});
	}
}

function loadScript(src){  
	var script = document.createElement("script");
	script.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src = src;
}

$(document).ready(function(){
	
	$('#mobilemenu').click(function(){
		if(!$('body').hasClass('open')) {
			$("#instantcall, #insta-contactus").removeClass("showit");
		} else {
			$("#instantcall, #insta-contactus").addClass("showit");
		}
		$("#mobilemenu,body,#instantcall_desktop,.instacall_de").toggleClass('open');
	});
	
	$("#lang").on("click", function(){
		if(!$(this).hasClass("open")){
			$(this).text('?');
		}else{
			$(this).text(lang);
		}
		$('#langoptions,#lang,#instantcall_desktop,.instacall_de').toggleClass("open");
	});
	$("#langoptions a").on("click", function(){
		if(!$(this).hasClass("disabled")){
			lang = $(this).text();
			$("#lang").text(lang);
			$('#langoptions,#lang').toggleClass("open");
		}
	});
	
	if( $("#header-subpage.treatments-sub").length > 0 ){
		var navbox = '';
		$.each( $('._content4 h2'), function( key, value ) {
			navbox += '<a class="scrollto" rel="#d'+key+'">'+value.innerHTML+'</a>';
			$(this).attr("id","d"+key);
		});
		$(".navbox").html(navbox);
	}
	
	$(".scrollto").on("click", function(){
		$(document.body).animate({
			'scrollTop': $($(this).attr("rel")).offset().top
		}, 1000);
	});
	
	var iframes = [
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010050_20160617082207.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010058_20160617083536.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010057_20160617083230.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010056_20160617083044.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010055_20160617082822.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010054_20160617082718.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010049_20160617082034.jpg"},
		{"url":"//hd-dental.net/vrview/?image="+base_url+"/images/vrpics/R0010062_20160617092142.jpg"}
	];
	var loopindex = 0;
	
	$(".nextiframe,.emnext").on("click", function(){
		loopindex++;
		if (loopindex >= iframes.length) {
			loopindex = 0;
		}
		$("#vrframe3d").attr("src",iframes[loopindex].url);
	});
	
	$(".previframe,.emprev").on("click", function(){
		loopindex--;
		if (loopindex < 0) {
			loopindex = (iframes.length)-1;
		}
		$("#vrframe3d").attr("src",iframes[loopindex].url);
	});
	
	function validateEmail(input) {
		var m = input.val();
		if( input.val().trim() != '' ){
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(m);
		}else{
			return false;
		}
	}
	
	function validateInput(input){
		if( input.val().trim() != '' ){
			return true;
		}else{
			return false;
		}
	}
	
	function addError(input){
		input.addClass("error");
	}
	
	function removeError(input){
		input.removeClass("error");
	}
	
	$("#email,#name,#phone").on("keyup", function(){
		if(validateInput($("#name")) && validateInput($("#phone")) && (validateEmail($("#email")))){
			$("#sendform").addClass("cansend");
		}else{
			$("#sendform").removeClass("cansend");
		}
	});
	
	$("#sendform").on("click", function(){
		if(!$(this).hasClass("cansend"))
			return;
		$("#sendform .loading-icon").show();
		
		var name = $("#name");
		var address = $("#address");
		var city = $("#city");
		var state = $("#state");
		var zip = $("#zip");
		var email = $("#email");
		var phone = $("#phone");
		
		var adate = $("#adate");
		var atime = $("#atime");
		var nature = $("#nature");
		var message = $("#message");
		
		if( !validateInput(name) ){
			addError(name);
		}else{
			removeError(name);
		}
		
		if( !validateInput(phone) ){
			addError(phone);
		}else{
			removeError(phone);
		}
		
		if( !validateEmail(email) ){
			addError(email);
		}else{
			removeError(email);
		}
		
		if( !name.hasClass("error") && !email.hasClass("error") && !phone.hasClass("error") ){
			$.post(base_url+"/site/sendappointmentrequest",{
				"name":name.val(),
				"address":address.val(),
				"city":city.val(),
				"state":state.val(),
				"zip":zip.val(),
				"email":email.val(),
				"phone":phone.val(),
				"adate":adate.val(),
				"atime":atime.val(),
				"nature":nature.val(),
				"message":$("#message").val()
			},function(data){
				if(data=='ok'){
					$('input,textarea,select').val("");
					$("#sendform").removeClass("cansend");
					$("#message").val("");
					/*$("#appointmentform .thanks-for-contacting").fadeIn(500);
					$("#appointmentform .form-error").hide();
					setTimeout(function(){ 
						$(".thanks-for-contacting").fadeOut(500);
					}, 3000);*/
					window.location.href = base_url+'/subscribe';
				}else{
					$("#appointmentform .thanks-for-contacting").hide();
					$("#appointmentform .form-error").html('There was an unexpected error. <br />Please, contact our developers on support@cstudios.sk').fadeIn(500);
				}
				$(".loading-icon").hide();
			});
		}else{
			$(".loading-icon").hide();
		}
		
	});
	
	$("#cemail,#cname,#cphone").on("keyup", function(){
		if(validateInput($("#cname")) && validateInput($("#cphone")) && (validateEmail($("#cemail")))){
			$("#sendcontactform").addClass("cansend");
		}else{
			$("#sendcontactform").removeClass("cansend");
		}
	});
	
	$("#subscribe").on("click", function(){
		if(!$(this).hasClass("cansend"))
			return;
		$("#subscribe .loading-icon").show();
		
		var email = $("#semail");
		
		if( !validateEmail(email) ){
			addError(email);
		}else{
			removeError(email);
		}
		
		if( !email.hasClass("error") ){
			$.post(base_url+"/site/sendsubscribe",{
				"email":email.val(),
			},function(data){
				if(data=='ok'){
					$('input,textarea,select').val("");
					$("#subscribe").removeClass("cansend");
					$("#subscribeform .thanks-for-contacting").fadeIn(500);
					$("#subscribeform .form-error").hide();
					setTimeout(function(){ 
						$(".thanks-for-contacting").fadeOut(500);
					}, 3000);
				}else{
					$("#subscribeform .thanks-for-contacting").hide();
					$("#subscribeform .form-error").html('There was an unexpected error. <br />Please, contact our developers on support@cstudios.sk').fadeIn(500);
				}
				$(".loading-icon").hide();
			});
		}else{
			$(".loading-icon").hide();
		}
		
	});
	
	$("#semail").on("keyup", function(){
		if((validateEmail($("#semail")))){
			$("#subscribe").addClass("cansend");
		}else{
			$("#subscribe").removeClass("cansend");
		}
	});
	
	$("#sendcontactform").on("click", function(){
		if(!$(this).hasClass("cansend"))
			return;
		$("#sendcontactform .loading-icon").show();
		
		var name = $("#cname");
		var email = $("#cemail");
		var phone = $("#cphone");
		var ccalltime = $("#ccalltime");
		
		if( !validateInput(name) ){
			addError(name);
		}else{
			removeError(name);
		}
		
		if( !validateInput(phone) ){
			addError(phone);
		}else{
			removeError(phone);
		}
		
		if( !validateEmail(email) ){
			addError(email);
		}else{
			removeError(email);
		}
		
		if( !name.hasClass("error") && !email.hasClass("error") && !phone.hasClass("error") ){
			$.post(base_url+"/site/sendcontact",{
				"name":name.val(),
				"email":email.val(),
				"phone":phone.val(),
				"message":$("#ctext").val(),
				"ccalltime":ccalltime.val(),
			},function(data){
				if(data=='ok'){
					$('input,textarea,select').val("");
					$("#sendcontactform").removeClass("cansend");
					$("#ctext").val("");
					/*$("#contactpageform .thanks-for-contacting").fadeIn(500);
					$("#contactpageform .form-error").hide();
					setTimeout(function(){ 
						$(".thanks-for-contacting").fadeOut(500);
					}, 3000);*/
					window.location.href = base_url+'/subscribe';
				}else{
					$("#contactpageform .thanks-for-contacting").hide();
					$("#contactpageform .form-error").html('There was an unexpected error. <br />Please, contact our developers on support@cstudios.sk').fadeIn(500);
				}
				$(".loading-icon").hide();
			});
		}else{
			$(".loading-icon").hide();
		}
		
	});
	
	function currency(){
		
		//EUR, USD, GBP, CHF, PLN, CAD
		var currencies = [];
		$.getJSON("https://api.fixer.io/latest?base=EUR&symbols=HUF", function(data){
			currencies.push({"base":data.base,"value":data.rates.HUF});
			$(".cur-eur").text(data.rates.HUF.toFixed(2));
			$.getJSON("https://api.fixer.io/latest?base=USD&symbols=HUF", function(data){
				currencies.push({"base":data.base,"value":data.rates.HUF});
				$(".cur-usd").text(data.rates.HUF.toFixed(2));
				$.getJSON("https://api.fixer.io/latest?base=GBP&symbols=HUF", function(data){
					currencies.push({"base":data.base,"value":data.rates.HUF});
					$(".cur-gbp").text(data.rates.HUF.toFixed(2));
					$.getJSON("https://api.fixer.io/latest?base=CHF&symbols=HUF", function(data){
						currencies.push({"base":data.base,"value":data.rates.HUF});
						$(".cur-chf").text(data.rates.HUF.toFixed(2));
						$.getJSON("https://api.fixer.io/latest?base=PLN&symbols=HUF", function(data){
							currencies.push({"base":data.base,"value":data.rates.HUF});
							$(".cur-pln").text(data.rates.HUF.toFixed(2));
							$.getJSON("https://api.fixer.io/latest?base=CAD&symbols=HUF", function(data){
								currencies.push({"base":data.base,"value":data.rates.HUF});
								$(".cur-cad").text(data.rates.HUF.toFixed(2));
								$.post(base_url+"/site/updatestats", {
									"currencies":currencies
								}, function(){});
							});
						});
					});
				});
			});
		});
		
	}
	
	function getWeatherIcon(data){
		var weather, weather_id;
		weather_id = data.weather[0].id;
		if (Math.floor(weather_id / 100) == 8) {
			if (weather_id <= 800)
			{
				weather = "clear-day";
			}
			else {
				if (weather_id < 804)
				{
					weather = "cloudy";
				} else {
					weather = "partly-cloudy-day";
				}
			}
		} else {
			switch (Math.floor(weather_id / 100)) {
				case 7:
					weather = "fog";
					break;
				case 6:
					weather = "snow";
					break;
				case 5:
					weather = "rain";
					break;
				case 3:
					weather = "rain";
					break;
				case 2:
					if(weather_id < 211) {
						weather = "sleet";
					} else {
						weather = "sleet";
					}
					break;
				default:
					weather = "clear-day";
					break;
			}
		}
		return weather;
	}
	
	function startWeatherIcons(){
		var icons = new Skycons({"color":"#1683a0"}),
          list  = [
            "clear-day", "partly-cloudy-day",
            "cloudy", "rain", "sleet", "snow", "wind", "fog"
          ],
          i;

		for(i = list.length; i--; ) {
			var weatherType = list[i],
				elements = document.getElementsByClassName( weatherType );
			for (e = elements.length; e--;){
				icons.set( elements[e], weatherType );
			}
		}

		icons.play();
	}
	
	function weather() {
	
		$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=mosonmagyaróvár,hu&APPID=8d875a3cc74df490738a33a6ccb2f36e", function(data) {
			//console.log(data);
			var results = [];
			var firstdate = false;
			for (var i=0 ; i < data.list.length ; i++)
			{
				if ( data.list[i]["dt_txt"] == day1 ) {
					results["day1"] = {
						"temp_c":Math.round(data.list[i].main["temp"] - 273.15),
						"temp_f":Math.round((data.list[i].main["temp"]*9/5) - 459.67),
						"icon":getWeatherIcon(data.list[i])
						};
					var firstdate = true;
				}
				if ( data.list[i]["dt_txt"] == day2 ) {
					results["day2"] = {
						"temp_c":Math.round(data.list[i].main["temp"] - 273.15),
						"temp_f":Math.round((data.list[i].main["temp"]*9/5) - 459.67),
						"icon":getWeatherIcon(data.list[i])
						};
				}
				if ( data.list[i]["dt_txt"] == day3 ) {
					results["day3"] = {
						"temp_c":Math.round(data.list[i].main["temp"] - 273.15),
						"temp_f":Math.round((data.list[i].main["temp"]*9/5) - 459.67),
						"icon":getWeatherIcon(data.list[i])
						};
				}
			}
			if(!firstdate){
				results["day1"] = {
					"temp_c":Math.round(data.list[0].main["temp"] - 273.15),
					"temp_f":Math.round((data.list[0].main["temp"]*9/5) - 459.67),
					"icon":getWeatherIcon(data.list[0])
					};
			}
			//console.log(JSON.stringify(results));
			$(".weathericon1").addClass(results["day1"]["icon"]);
			$(".weathericon2").addClass(results["day2"]["icon"]);
			$(".weathericon3").addClass(results["day3"]["icon"]);
			$(".weatherday1").text(results["day1"]["temp_c"]+"°C/"+results["day1"]["temp_f"]+"°F");
			$(".weatherday2").text(results["day2"]["temp_c"]+"°C/"+results["day2"]["temp_f"]+"°F");
			$(".weatherday3").text(results["day3"]["temp_c"]+"°C/"+results["day3"]["temp_f"]+"°F");
			setTimeout(function(){ startWeatherIcons(); }, 100);
			$.post(base_url+"/site/updatestats", {
				"day1":results["day1"],
				"day2":results["day2"],
				"day3":results["day3"]
			}, function(){});
		});
		
	}
	
	if(!hasWeatherData){
		weather();
	}else{
		startWeatherIcons(); //start icons
	}
	
	if(!hasCurrencyData){
		currency();
	}
	
	$( "#adate" ).datepicker();
	
	if(startfancybox){
		$(".oc-item,.fancybox").fancybox({
			beforeShow : function() {
			   this.title = (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			},
			helpers: {
				overlay: {
				  locked: false
				}
			  }
		});
		$("a.fancyboxvideo").click(function() {
			$.fancybox({
				'padding'       : 0,
				'autoScale'     : false,
				'transitionIn'  : 'none',
				'transitionOut' : 'none',
				'title'         : this.title,
				'width'     : 680,
				'height'        : 495,
				'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'          : 'swf',
				'swf'           : {
					 'wmode'        : 'transparent',
					'allowfullscreen'   : 'true'
				}
			});

			return false;
		});
	}
	
	if(startopinionslider){
		if( $('body').width() < 740 ){
			opinions = $('.bxslider').bxSlider({
				slideWidth: 1000,
				maxSlides: 1,
				minSlides: 1,
				moveSlides: 1,
				slideMargin: 45,
				controls: false,
				responsive: true,
				autoStart:true,
				auto: true,
				pause: 4000
			});
		}else{
			opinions = $('.bxslider').bxSlider({
				slideWidth: 280,
				maxSlides: 3,
				minSlides: 3,
				moveSlides: 3,
				slideMargin: 45,
				controls: false,
				responsive: true,
				autoStart:true,
				auto: true,
				pause: 4000
			});
		}
		
		$( window ).resize(function(){
			if( $('body').width() < 740 ){
				opinions.reloadSlider({
					slideWidth: 1000,
					maxSlides: 1,
					minSlides: 1,
					moveSlides: 1,
					slideMargin: 45,
					controls: false,
					responsive: true,
					autoStart:true,
					auto: true,
					pause: 4000
				});
			}else{
				opinions.reloadSlider({
					slideWidth: 280,
					maxSlides: 3,
					minSlides: 3,
					moveSlides: 3,
					slideMargin: 45,
					controls: false,
					responsive: true,
					autoStart:true,
					auto: true,
					pause: 4000
				});
			}
		});
	}
	
	$("#callme").on("change", function(){
		if ($(this).is(':checked')) {
			$("#ccalltime").show().focus();
		}else{
			$("#ccalltime").hide();
		}
	});
	
	$("#langoptions a.disabled").on("mouseenter", function(){
		$("#langoptions span").show();
	}).on("mouseleave", function(){
		$("#langoptions span").hide();
	});
	
	$('a[href]').addClass("-hv-");
	
	$(".hoverdentist").on("mouseenter", function(){
		$(".d_hover,.d_basic").addClass("hovered");
	}).on("mouseleave", function(){
		$(".d_hover,.d_basic").removeClass("hovered");
	});
	
	var certifcurpos = 0;
	
	$(".mctoright").on("click", function(){
		var maxpos = parseInt($(".certif-list-container").data("maxpos"));
		if( certifcurpos < maxpos ){
			certifcurpos++;
			
			if( certifcurpos == maxpos ){
				$(this).addClass("disabled");
			}else{
				$(this).removeClass("disabled");
			}
			
			$(".mctoleft").removeClass("disabled");
			
			$(".fullwidth-certif-list").attr("class","").addClass("fullwidth-certif-list clearafter pos"+certifcurpos);
		}
	});
	
	$(".mctoleft").on("click", function(){
		var maxcount = parseInt($(".certif-list-container").data("maxcount"));
		certifcurpos--;
		$(".fullwidth-certif-list").attr("class","").addClass("fullwidth-certif-list clearafter pos"+certifcurpos);
		
		if( certifcurpos <= 0 ){
			$(this).addClass("disabled");
		}else{
			$(this).removeClass("disabled");
		}
		
		if(maxcount>15){
			$(".mctoright").removeClass("disabled");
		}
	});
	
	$(".book").on("click", function(){
		$(".certifborder img").attr("src",$(this).data("img"));
	});
		
	var mobilepos = 1;
	
	$(".mctorightm").on("click", function(){
		mobilepos++;
		var maxcount = parseInt($(".certif-list-container").data("maxcount"));
		if(mobilepos!=maxcount){
			$(this).removeClass("disabled");
			var activesrc = $("#certifs .book.active");
			activesrc.removeClass("active").next().addClass("active");
			$("#certifs .certifborder img").attr("src",activesrc.next().data("img"));
		}else{
			$(this).addClass("disabled");
		}
		
		$(".mctoleftm").removeClass("disabled");
	});
	
	$(".mctoleftm").on("click", function(){
		
		console.log(mobilepos);
		if(mobilepos<=1){
			$(this).addClass("disabled");
		}else{
			var activesrc = $("#certifs .book.active");
			activesrc.removeClass("active").prev().addClass("active");
			$("#certifs .certifborder img").attr("src",activesrc.next().data("img"));
		}
		mobilepos--;
		if(mobilepos<=1){
			$(this).addClass("disabled");
		}
		$(".mctorightm").removeClass("disabled");
	});
	
	if(canswipe){
		$("#certifs .certifborder").swipe( {
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				if(direction=='right'){
					$(".mctoleftm").trigger("click");
				}
				if(direction=='left'){
					$(".mctorightm").trigger("click");
				}
			}
		});
	}
	
	$(".toggletab").on("click", function(){
		var weiter = $(this);
		weiter.parent().children("span.addtab").toggleClass("hidden");
		if(weiter.hasClass("weiter")){
			weiter.removeClass("weiter");
			weiter.text( weiter.data("closetext") );
		}else{
			weiter.addClass("weiter");
			weiter.text( weiter.data("opentext") );
		}
	});
	
});

/***Youtube***/

if(startopinionslider){

var youtube_vid_id = '3B9xhVrC64w';
if($('html').attr("lang")=='de'){
	youtube_vid_id = 'oFLAaGgV02s';
}

var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '390',
	  width: '640',
	  videoId: youtube_vid_id,
	  events: {
		'onReady': onPlayerReady
		//'onStateChange': onPlayerStateChange
	  },
	  playerVars: {rel: 0},
	});
  }
  
  function onPlayerReady(event) {
	//event.target.playVideo();
	//console.log("ready");
	document.getElementById("play").addEventListener('click', function() {
		//this.remove();
		this.classList.add("load");
		document.getElementById("player-overlay").remove();
		player.playVideo();
		this.remove();
    });
  }
  
  function stopVideo() {
	player.stopVideo();
  }
}

$(window).load(function(){
	
	$('.sectionmark,.smiles,.smiley,.showingafter,#autoppagedesc,#octoppagedesc,#services,.staffrow,.headersuttfobx,.highlighted,.pen').waypoint(function(direction){
		this.element.classList.add("showit");
		this.destroy();
	},
		{offset: '80%'}
	);
	
	$('.treatmentbox6,.treatmentshowafter').waypoint(function(direction){
		this.element.classList.add("showit");
		this.destroy();
	},
		{offset: '90%'}
	);
	
	$('#whyus').parally({
		offset: 80,
		speed: 0.3,
		xpos: '137px'
	});
	
	$('img.tools2').parally({
		mode: 'transform'
	});
	
	$('.withtootbrush').parally({
		offset: 100,
		speed: 0.3,
		xpos: 'right bottom'
	});
	
	$('#house .inside').parally({
		offset: -170,
		speed: 0.2,
		xpos: '0'
	});
	
	/*$('#cosmetic .inside').parally({
		offset: -100,
		speed: 0.1,
		xpos: '0'
	});*/
	
	$('img.treatment-apple').parally({
		mode: 'transform',
		speed: 0.1,
	});
	
	$(".showopinion").on("click", function(){
		$(".moverlay").addClass("showme");
		$(".opbig").html( $(this).parent().html() ).fadeIn(500).children("h2").removeClass("showopinion");
		$(".opbig").children("a").remove();
		$(".opbig").append("<a class='closeop'>×</a>");
	});
	
	$(document).on('click', '.opbig .closeop', function() {
		console.log("asd");
		$(".opbig").html("").fadeOut(200);
		$(".moverlay").removeClass("showme");
	});
	
	
});

$(document).ready(function(){

	function checkFloat(){
		if ( ( $(window).scrollTop() > 400 ) && floatmenu) {
			$("body,#lang,#langoptions,#menu,#logo,#mobilemenu").addClass("floating");
		}else{
			 $("body,#lang,#langoptions,#menu,#logo,#mobilemenu").removeClass("floating");
			 $("#mobilemenu,body").removeClass('open');
		}
	}

	var floatmenu = true;
	if(parseInt($('body').width())<=880){
		floatmenu = false;
		$("body,#lang,#langoptions,#menu,#logo,#mobilemenu").removeClass("floating");
		$("#mobilemenu,body").removeClass('open');
	}else{
		floatmenu = true;
		checkFloat();
	}
	$( window ).resize(function(){
		if(parseInt($('body').width())<=880){
			floatmenu = false;
			$("body,#lang,#langoptions,#menu,#logo,#mobilemenu").removeClass("floating");
			$("#mobilemenu,body").removeClass('open');
		}else{
			floatmenu = true;
			checkFloat();
		}
	});

	$(window).scroll(function() {
		if (!$('body').hasClass('open')) {
			if ($(window).scrollTop() > 200 && ($(document).height() - $(window).height() - $(window).scrollTop()) > 200) {
				$("#instantcall, #insta-contactus").addClass("showit");
			}else{
				 $("#instantcall, #insta-contactus").removeClass("showit");
			}
			checkFloat();
		}
	});
	
});

$( window ).load(function() {
	loadScript('https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap');
});