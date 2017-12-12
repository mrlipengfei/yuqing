'use strict';

/*heaer*/
$('.center').click(function () {
  $("._pull").css({ display: 'block' });
});
var timer = setInterval(autoPlay, 3000);
var index = 0;
function autoPlay() {
  index++;
  if (index == 4) {
    index = 0;
  }
  $("ol li").eq(index).addClass("active").siblings().removeClass("active");
  $("#banner>ul li").eq(index).animate({ "left": 0 }, 500, function () {
    $(this).css("z-index", 0).siblings().css({ "left": "100%", "z-index": 1 });
  });
  //console.log(index)
}
function autoPlayL() {
  index--;
  if (index < 0) {
    index = 3;
  }
  $("#banner>ol li").eq(index).addClass("active").siblings().removeClass("active");
  $("#banner>ul li").eq(index).animate({ "left": "100%" }, 500, function () {
    $(this).css("z-index", 1).siblings().css({ "left": 0, "z-index": 0 });
  });
  //console.log(index)
}
$("#banner>ul li").mouseover(function () {
  clearInterval(timer);
}).mouseout(function () {
  timer = setInterval(autoPlay, 3000);
});
$("ol li").mouseover(function () {
  clearInterval(timer);
}).click(function () {
  index = $(this).index() - 1;
  autoPlay();
});
$("ol li").mouseout(function () {
  timer = setInterval(autoPlay, 3000);
});

$(".btn-right").mouseover(function () {
  clearInterval(timer);
}).click(function () {
  autoPlay();
  console.log(index);
});
$(".btn-left").mouseover(function () {
  clearInterval(timer);
}).click(function () {
  autoPlayL();
  console.log(index);
});

//试用
$(function () {
  layui.use(['form'], function () {
    var form = layui.form,
        layer = layui.layer;
    form.on('submit(demo2)', function (data) {
      console.log(data);
      return false;
    });
  });
});
//滚动
$('._scroll').click(function () {
  $("html,body").animate({ scrollTop: $('#serveOne2').offset().top }, 300);
});

//层级
$('.scene_con2 ul>li').mouseover(function () {
  $(this).addClass("cengji").siblings("li").removeClass("cengji");
});