'use strict';

$(function () {
  //点击创建分析按钮
  $('.btn-create').click(function () {
    layer.open({
      type: 1,
      title: ['创建分析', 'width:80%;height:60px;line-height:60px;margin:0 auto;font-size:16px;text-align:center;background:#fff;'],
      area: ['70%', '510px'], //宽高
      shade: [0.7, '#000', true],
      shadeClose: true, //点击遮罩层关闭
      btn: ['确定', '取消'],
      btnAlign: 'c',
      content: $("#create-box")
    });
  });
  //点击创建事件配置信息
  $('.icon-paper').click(function () {
    layer.open({
      type: 1,
      title: ['事件配置信息', 'width:80%;height:60px;line-height:60px;margin:0 auto;font-size:16px;text-align:center;background:#fff;'],
      area: ['70%', '510px'], //宽高
      shade: [0.7, '#000', true],
      shadeClose: true, //点击遮罩层关闭
      btn: ['关闭'],
      btnAlign: 'c',
      content: $("#create-box1")
    });
  });
  //点击查看事件按钮
  $(".btn-check").on('click', function () {
    layer.open({
      type: 1,
      title: false,
      area: ['905px', '518px'], //宽高
      shade: [0.7, '#000', true],
      shadeClose: true, //点击遮罩层关闭
      closeBtn: 1,
      content: $("#accountPayModal")
    });
  });

  $(document).on('click', '#pay-money-list li', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $(".u-content-wrap").on('click', '.table-open', function () {
    $(this).parent().parent().find('.fixed-wrap').addClass('open');
    $(this).removeClass('table-open').addClass('table-close');
  });
  $(".u-content-wrap").on('click', '.table-close', function () {
    $(this).parent().parent().find('.fixed-wrap').removeClass('open');
    $(this).removeClass('table-close').addClass('table-open');
  });
  //选项卡切换
  layui.use('element', function () {
    //触发事件
    var active = {
      tabChange: function tabChange() {
        //切换到指定Tab项
        element.tabChange('demo', '22'); //切换到：用户管理
      }
    };
  });
  //选择日期
  layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
      elem: '.test1' //指定元素
    });
    laydate.render({
      elem: '.test2' //指定元素
    });
    laydate.render({
      elem: '.test3' //指定元素
    });
    laydate.render({
      elem: '.test4' //指定元素
    });
  });
  //分页
  layui.use(['layer', 'form', 'laypage'], function () {
    var laypage = layui.laypage,
        form = layui.form,
        layer = layui.layer;
    laypage.render({
      elem: 'page',
      count: 100,
      layout: ['prev', 'page', 'next', 'skip'],
      last: false,
      first: false,
      prev: '<',
      next: '>',
      theme: '#4ea5ff',
      jump: function jump(obj) {
        console.log(obj);
      }
    });

    //全选
    form.on('checkbox(allChoose)', function (data) {
      var child = $(data.elem).parents('.main.eventStudy').find('.event-body input[type="checkbox"]');
      child.each(function (index, item) {
        item.checked = data.elem.checked;
      });
      form.render('checkbox');
    });
    //反选
    form.on('checkbox(itemChoose)', function (data) {
      var sib = $(data.elem).parents('.main.eventStudy').find('.event-body input[type="checkbox"]:checked').length;
      var total = $(data.elem).parents('.main.eventStudy').find('.event-body input[type="checkbox"]').length;
      console.log('选择了' + sib);
      console.log('总计' + total);
      if (sib == total) {
        $(data.elem).parents('.main.eventStudy').find('.event-head input[type="checkbox"]').prop("checked", true);
        form.render();
      } else {
        $(data.elem).parents('.main.eventStudy').find('.event-head input[type="checkbox"]').prop("checked", false);
        form.render();
      }
    });
  });
});