//indexHeader
$('.center').find('em').click(function(evt){
	$('.center').find('ul').slideToggle(300);
	var e = evt || event;
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
})
$('.login').click(function(evt){
	$('.center').find('.login-box').slideToggle(300);
	var e = evt || event;
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
})
$(document).click(function(event){
	var _form = $('.login-box');
	var _child = $('.login-box').children();
	if(!$(event.target).is($('.login-box')) || !$(event.target).is($('input')) ){
		$('.center').find('ul').slideUp(300);
		$(".login-box").slideUp(300);
	}
})
$('.login-box').click(function(event){
	event.stopPropagation();
})
$('.login-box').find("input[type='button']").click(function(){
	var user = $('._input1>input').val()
	$('.login').html(user);
	$(".login-box").slideUp(200)
})

//whiteHeader
$('.headerNavCenter').find('em').click(function(evt){
	$('.headerNavCenter').find('ul').slideToggle(300);
	var e = evt || event;
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
})
$(document).click(function(){
	$('.headerNavCenter').find('ul').slideUp(300);
})
