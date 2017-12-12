'use strict';

$(function () {
  //点击创建分析按钮
  $('.btn-create').click(function () {
    layer.open({
      type: 1,
      title: false,
      area: ['72%', '620px'], //宽高
      shade: [0.7, '#000', true],
      shadeClose: false, //点击遮罩层关闭
      btn: ['确定', '取消'],
      yes: function yes(index, layero) {
        // layer.close(index); //如果设定了yes回调，需进行手工关闭
        //$('.layui-layer-content').mCustomScrollbar("destroy"); 
        //阻止按钮关闭return false;
      },
      btn2: function btn2(index, layero) {
        //$('.layui-layer-content').mCustomScrollbar("destroy");  
      },
      btnAlign: 'c',
      closeBtn: true,
      cancel: function cancel() {
        // 		$('.layui-layer-content').mCustomScrollbar("destroy");  
      },
      content: $("#create-box")
    });

    // $('.layui-layer-content').mCustomScrollbar({theme:'dark-3'})
  });

  //点击创建配置信息
  $('.icon-paper').click(function () {
    layer.open({
      type: 1,
      title: false,
      area: ['72%', '620px'], //宽高
      shade: [0.7, '#000', true],
      shadeClose: false, //点击遮罩层关闭
      btn: ['确定', '取消'],
      yes: function yes(index, layero) {
        layer.close(index); //如果设定了yes回调，需进行手工关闭
        $('.layui-layer-content').mCustomScrollbar("destroy");
        //阻止按钮关闭return false;
      },
      btn2: function btn2(index, layero) {
        $('.layui-layer-content').mCustomScrollbar("destroy");
      },
      btnAlign: 'c',
      closeBtn: true,
      cancel: function cancel() {
        $('.layui-layer-content').mCustomScrollbar("destroy");
      },
      content: $("#create-box3")
    });

    $('.layui-layer-content').mCustomScrollbar({ theme: 'dark-3' });
  });

  //点击添加竞品
  $('.btn-add').bind('click', function () {
    var len = $('.one').length;
    //var num = len+1;
    var html = '<div class="one">\n' + '                        <div class="form-item">\n' + '                            <label for="competingName">竞品名称：</label>\n' + '                            <div class="input-item">\n' + '                                <input type="text" name="username" placeholder="请输入竞品名称" autocomplete="off" id="competingName">\n' + '                                <div class="hint">(竞品名称文字个数<=10)</div>\n' + '                            </div>\n' + '                        </div>\n' + '                        <div class="form-item">\n' + '                            <label for="hotWord">关键词：</label>\n' + '                            <div class="input-item">\n' + '                                <input type="text" name="hotWord" autocomplete="off" id="hotWord">\n' + '                                <div class="hint">(关键词文字个数小于300个，关键词之间以空格(" ")分开为"并"的关系，以分号(";")分隔开为"或"的关系)</div>\n' + '                            </div>\n' + '                        </div>\n' + '                        <div class="form-item">\n' + '                            <label for="excludeWord">排除词：</label>\n' + '                            <div class="input-item">\n' + '                                <input type="text" name="excludeWord" autocomplete="off" id="excludeWord">\n' + '                                <div class="hint">(排除词文字个数小于50个，排除词之间以空格(" ")分开为"并"的关系，以分号(";")分隔开为"或"的关系)</div>\n' + '                            </div>\n' + '                        </div>\n' + '                    </div>';
    if (len >= 6) {
      layer.msg('最多可选择6个竞品进行对比分析', {
        time: 2000 //2s后自动关闭
        //btn: ['明白了', '知道了']
      });
    } else {
      $(".redact-box").append(html);
    }
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
        //console.log(obj)
      }
    });

    //全选
    form.on('checkbox(allChoose)', function (data) {
      var child = $(data.elem).parents('.main.competingOption').find('.option-body input[type="checkbox"]');
      child.each(function (index, item) {
        item.checked = data.elem.checked;
      });
      form.render('checkbox');
    });
    //反选
    form.on('checkbox(itemChoose)', function (data) {
      var sib = $(data.elem).parents('.main.competingOption').find('.option-body input[type="checkbox"]:checked').length;
      var total = $(data.elem).parents('.main.competingOption').find('.option-body input[type="checkbox"]').length;
      console.log('选择了' + sib);
      console.log('总计' + total);
      if (sib == total) {
        $(data.elem).parents('.main.competingOption').find('.option-head input[type="checkbox"]').prop("checked", true);
        form.render();
      } else {
        $(data.elem).parents('.main.competingOption').find('.option-head input[type="checkbox"]').prop("checked", false);
        form.render();
      }
    });
  });
});