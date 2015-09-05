$(document).ready(function() {
	
	//Code for the slider in the FAQ's section
	//Hide the elements and then make them visible on click
    $('dl > dd').hide();
	$('dt').click(function(){
	$(this).toggleClass('open');	
	$(this).next().animate({'height':'toggle'},200,'swing');
});

	//Code for smooth scrolling the pages
	//Get the link href and set the scrollTop to it
$('nav a').click(function(evt){
	$('nav a.current').removeClass('current');
	$(this).addClass('current');
	evt.stopImmediatePropagation();
	var link=$($(this).attr('href')).position().top;
	$('html,body').animate({scrollTop: link},1000);
	return false;
	
});



//Navigation blob code and hover code 
//Reduce,Reuse, Recycle :P
$('<div id="nav-blob"></div>').css({
width: $('nav li:first a').width() + 10,
left: $('nav li:first a').position().left
}).appendTo('nav');

function calcnav(){
var navleft=$('nav li a.current').position().left;
var width_of_blob=$('nav li a.current').width() + 10;
$('#nav-blob').stop().animate({left: navleft,width: width_of_blob});
}

$('nav a').hover(function() {
$('#nav-blob').stop().animate({width: $(this).width() + 10, left: $(this).position().left},{duration: 'slow', queue: false},'linear');
},function(){
$('#nav-blob').stop().animate({left:$('nav li a.current').position().left,width:$('nav li a.current').width() + 10},{duration: 'slow', queue: false});
});

//Pun intended :P code to impl the helper
function callforhelp(msg){
	if($('.help'))
	 $('#helper').removeClass('help');
	 $('#helper').addClass('help');
	 $('#tooltip').text(msg);
	 setTimeout(function(){$('#helper').removeClass('help');},6000);
	 
	}

//Waypoints for each section.Self explanatory :)
$('#home').waypoint(function(down){
	callforhelp("Hi! I'm your helper for the site. Scroll down to see more.");
});

$('#home').waypoint(function(up){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#home"]').addClass('current');
	 calcnav();
	 $('.help').removeClass('help');
	 
	},{offset:-300});


$('#faqs').waypoint(function(down){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#faqs"]').addClass('current');
	 calcnav();
	 callforhelp("Answering all your questions.Any more? Mail Us!");
	},{offset:50});
	
$('#faqs').waypoint(function(up){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#faqs"]').addClass('current');
	 calcnav();
	 
	},{offset:-200});

$('#abt').waypoint(function(down){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#abt"]').addClass('current');
	 calcnav();
	 callforhelp("A few things about us.");
	},{offset:50});
	
$('#abt').waypoint(function(up){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#abt"]').addClass('current');
	 calcnav();
	 
	},{offset:-200});

$('#services').waypoint(function(down){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#services"]').addClass('current');
	 calcnav();
	 callforhelp("These are the services that we provide. Fast, Safe, Reliable.");
	},{offset:50});	

$('#services').waypoint(function(up){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#services"]').addClass('current');
	 calcnav();
	 
	},{offset:-200});	

$('#projects').waypoint(function(down){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#projects"]').addClass('current');
	 calcnav();
	 callforhelp("This is the portfolio section. You can view our works here.");
	 
	},{offset:50});

$('#projects').waypoint(function(up){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#projects"]').addClass('current');
	 calcnav();
	 
	},{offset:-200});


$('#contact').waypoint(function(direction){
	 $('nav a.current').removeClass('current');
	 $('nav a[href="#contact"]').addClass('current');
	 calcnav();
	 callforhelp("This is the contact section, fill her up and mail her in.");
	},{offset:50});	

function attrSupported(attr) {
  return (attr in document.createElement("input"));
}
	
if(!attrSupported('required')){
$('#cus').submit(function(){	
$('input[required]').each(function(){
	if(!$(this).val()){}
	//Atleast One required field is empty
	$(this).next().text("Please fill this field");
	return false;
	});
});
}

var formValidationRules = {
"name":
  {
   "pattern":"[a-zA-Z -\.]{5,25}",
   "message":"Please Enter a name without special characters."
  },
"email":
  {
   "pattern":"^[a-zA-Z.-_]+@[a-zA-Z-_]+(\.[a-zA-Z]{2,4})+$",
   "message":"Please enter valid email.Eg: Name@site.com"
  },
"phone":
  {
   "pattern":"^\d{8,10}$",
   "message":"Please enter valid phone number of 8-10 digits."
  }
}

// Validates input value according to the rules
function validateRegExp(inputValue, formValidationRule,elt) {
  if (inputValue) {   
    var regExpObj = new RegExp(formValidationRule.pattern);
    if (!regExpObj.test(inputValue)) {
     $(elt).next().text((formValidationRule.message));
    }
  }
}

//Pattern attribute fallback
if (!attrSupported("pattern") || ($.browser.safari)) {
  //If pattern attribute is not supported or browser is Safari,then check the field.
  $('#cus').submit(function(){	
	$('#name').validateRegExp($(this).val(), formValidationRules.name,$(this));
   $('#email').validateRegExp($(this).val(), formValidationRules.name,$(this));
   $('#phone').validateRegExp($(this).val(), formValidationRules.name,$(this));
  });
} 
});