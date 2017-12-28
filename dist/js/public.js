"use strict";

/**
 * tab 切换
 * @param {tab} arg tab 切换处标题的dom
 * @param {tabCt} arg tab 切换处 内容 包裹 处 的dom
 */

function ChangeTab(arg) {
	this.config = {
		tab: $(".tab-nav"),
		tabCt: $(".tab-ct")
	};
	if (arg && $.isPlainObject(arg)) {
		$.extend(this.config, arg);
	} else {
		return;
	}
}

ChangeTab.prototype = {
	index: 0,
	switchTab: function switchTab() {
		var that = this;
		this.config.tab.children("li").on("click", function () {
			that.index = $(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			// 切换内容
			that.switchCt(that.index);
		});
	},
	switchCt: function switchCt(i) {
		this.config.tabCt.children().eq(i).removeClass("din").siblings().addClass("din");
	}
};
new ChangeTab().switchTab();
/**
 * 平滑滚动
 */
$(".stat-ct").on("click", "a", function () {
	// 激活态
	$(".stat-ct ul a").removeClass("active");
	$(this).addClass("active");

	// var href = $(this).attr("href");
	// if (href.substring(href.length - 1) != "#") {
	//     var pos = $(href).offset().top;
	//     $("html,body").animate({scrollTop: pos}, 300);
	//     return false;
	// }
});

$(".stat").on("click", "h3", function () {
	$(this).closest("li").addClass("active").siblings("li").removeClass("active");
});

/*头部弹框*/
//indexHeader
$('.center').find('em').click(function (evt) {
	$('.center').find('ul').slideToggle(300);
	$('.contact').slideUp(300);
	var e = evt || event;
	e.stopPropagation();
});
$('.login').click(function (evt) {
	$('.center').find('.login-box').slideToggle(300);
	$('.contact').slideUp(300);
	var e = evt || event;
	e.stopPropagation();
});
$(document).click(function (event) {
	$('.center').find('ul').slideUp(300);
	$(".login-box").slideUp(300);
});
$('.login-box').click(function (event) {
	event.stopPropagation();
});
$('.login-box').find("input[type='button']").click(function () {
	var user = $('._input1>input').val();
	$('.login').html(user);
	$(".login-box").slideUp(300);
});

//whiteHeader
$('.headerNavCenter').find('.header-perCenter').click(function (evt) {
	$('.headerNavCenter').find('ul').slideToggle(300);
	$('.contact').slideUp(300);
	var e = evt || event;
	e.stopPropagation();
});
$('.headerNavCenter').find('em').click(function (evt) {
	$('.headerNavCenter').find('ul').slideToggle(300);
	$('.contact').slideUp(300);
	var e = evt || event;
	e.stopPropagation();
});
$(document).click(function () {
	$('.headerNavCenter').find('ul').slideUp(300);
});

$('.fei-contact').click(function (event) {
	$('.contact').slideToggle(300);
	$('.headerNavCenter').find('ul').slideUp(300);
	$(".login-box").slideUp(300);
	$('.center').find('ul').slideUp(300);
	//var e = evt || event;
	event.stopPropagation();
});
$('.contact').click(function (event) {
	event.stopPropagation();
});
$(document).click(function () {
	$('.contact').slideUp(300);
});

//清除浏览器默认选中文字
//document.onmousemove = function(){
//
//	//拖拽时取消文字的选中状态
//	window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
//}
/*document.ondbclick = function(){

	//拖拽时取消文字的选中状态
	window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
}*/

/*$('input').focus(function(){
	$(this).addClass('input-color')
}).blur(function(){
	$(this).removeClass('input-color')
})*/
//日历小图标
$(".timeInput").focus(function () {
	$(".timeInput").css("background-image", "url(../../images/time-fei.png)");
	$(".timeInput").css("background-repeat", "no-repeat");
	$(".timeInput").css("background-position", "95% center");
});
$(".timeInput").blur(function () {
	$(".timeInput").css("background-image", "url(../../images/time-fei.png)");
	$(".timeInput").css("background-repeat", "no-repeat");
	$(".timeInput").css("background-position", "95% center");
});

//输入框高亮
$('.search-txt').focus(function () {
	$('.search-box').addClass('input-shadow');
	$('.search-group').addClass('input-shadow');
}).blur(function () {
	$('.search-box').removeClass('input-shadow');
	$('.search-group').removeClass('input-shadow');
});

$('.feiword-input').focus(function () {
	$(this).addClass('input-shadow');
}).blur(function () {
	$(this).removeClass('input-shadow');
});

//$(".leftBar .menu-wrap li").click(function(){
//	$(this).addClass('active').siblings().removeClass('active');
//})

//退出登录
$('.icon-sign-out').click(function () {
	window.location.href = '/html/index.html';
});

//模拟loading
var T = 0;
var timer = setInterval(function () {
	T++;
	if (T == 4) {
		$(".loadEffect").css('display', 'none');
		clearInterval(timer);
	}
}, 1000);

//用户中心下拉
$('._hover').stop().mouseover(function (event) {
	$('.menu-wrap1').stop().slideDown(300);
	event.stopPropagation();
}).stop().mouseout(function (event) {
	$('.menu-wrap1').stop().slideUp(300);
	event.stopPropagation();
});
//进入用户中心
$('._hover1').click(function () {
	window.location.href = '/html/userCenter/index.html';
});