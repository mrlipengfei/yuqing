'use strict';

$(function () {
	layui.use('element', function () {
		var $ = layui.jquery,
		    element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
		element.on('tab(test)', function (data) {
			console.log(this); //当前Tab标题所在的原始DOM元素
			console.log(data.index); //得到当前Tab的所在下标
			console.log(data.elem); //得到当前的Tab大容器
			if (data.index == 0) {
				//do something
			} else {
					//do something
				}
		});
	});

	layui.use(['form', 'laypage'], function () {
		var laypage = layui.laypage,
		    form = layui.form;
		laypage.render({
			elem: 'page',
			count: 100,
			layout: ['prev', 'page', 'next',, 'skip'],
			last: false,
			first: false,
			limit: 10,
			prev: '<',
			next: '>',
			theme: '#4ea5ff',
			jump: function jump(obj) {
				console.log(obj);
			}
		});
		form.render();
	});

	//设置时间    
	layui.use('laydate', function () {
		var laydate = layui.laydate;
		//执行一个laydate实例
		laydate.render({
			elem: '#test1' //指定元素
		});

		laydate.render({
			elem: '#test2' //指定元素
		});
		laydate.render({
			elem: '#test3', //指定元素
			type: 'datetime',
			format: 'yyyy-MM-dd HH:mm'
		});
	});
	/*$('.layui-inline').find('span').click(function(){
 	//alert(1)
 	//setTimeout(function(){
 		$(this).prev('input').focus();
 	//},0)
 		});*/

	//创建简报
	layui.use('layer', function () {
		var layer = layui.layer;
		$('.reportIndex-create1').click(function () {
			layer.open({
				type: 1,
				title: false,
				area: ['30%', '350px'], //宽高
				shade: [0.7, '#000', true],
				closeBtn: false,
				btn: ['保存生成报告', '取消'],
				shadeClose: true, //点击遮罩层关闭
				btnAlign: 'c',
				content: $("#reportCreate")
			});
		});

		//下载报告
		$('.reportIndex-xia').click(function () {
			layer.open({
				type: 1,
				title: false,
				area: ['60%', '340px'], //宽高
				shade: [0.7, '#000', true],
				closeBtn: false,
				btn: ['确定'],
				shadeClose: true, //点击遮罩层关闭
				btnAlign: 'c',
				content: $("#reportDown")
			});
		});
		//数据报告
		layui.use('form', function () {
			var form = layui.form;
			$('.reportIndex-create').click(function () {
				layer.open({
					type: 1,
					title: false,
					area: ['940px', '645px'], //宽高
					shade: [0.7, '#000', true],
					closeBtn: false,
					shadeClose: true, //点击遮罩层关闭
					btn: ['保存生成报告', '取消'],
					yes: function yes() {
						//按钮【按钮一】的回调
						$('._alert').css({ display: 'none' });
						$('.fei.pageWrap').css({ display: 'block' });
						$('.reportIndex-table2').find('tbody').append('<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u4E00\u8DEF\u4E00\u5E26</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u4E00\u8DEF\u4E00\u5E26</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u4E00\u8DEF\u4E00\u5E26</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp; \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u4E00\u8DEF\u4E00\u5E26</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\t\t\t                               \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\t\t\t                               \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\t\t\t                               \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\t\t\t                               \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>\n\t    \t\t\t\t\t\t\t<tr>\n\t    \t\t\t\t\t\t\t\t<td>\u7F8E\u56FD\u534E\u76DB\u987F\u67AA\u51FB\u6848</td>\n\t    \t\t\t\t\t\t\t\t<td>\u5468\u62A5</td>\n\t    \t\t\t\t\t\t\t\t<td>jpg@31414.com</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<div class="layui-input-block">\n\t\t\t\t\t\t\t\t\t\t      <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" title="\u5F00\u5173">\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t<span class=\'_span\'>\u6BCF\u5468</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>\u661F\u671F\u4E94</span>\n\t\t\t\t\t\t\t\t\t \t \t<span class=\'_span\'>17:00</span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t\t<td>\n\t    \t\t\t\t\t\t\t\t\t <span>\n\t\t\t\t                                <i class="iconfont icon-caozuo" ></i>&nbsp;&nbsp;\t\t\t                               \n\t\t\t\t                                <i class="iconfont icon-3 fei-delete" style="font-weight: 600"></i>\n\t\t\t\t                            </span>\n\t    \t\t\t\t\t\t\t\t</td>\n\t    \t\t\t\t\t\t\t</tr>');
						form.render();
						layer.closeAll();
					},
					btnAlign: 'c',
					content: $("#reportCreate-two")
				});
			});
		});
	});
	//实现全选
	//jq方法
	/*var flag = true;
 	$(".report-qx>div").click(function(){
 		//让被操作的复选框的checked值  和  点击的复选框 保持一致
 		//$("input[name=q]").prop("checked",$(this).prop("checked") );	
 		if(flag){
 			$('.fei-mailCentent').find('li>div').addClass('layui-form-checked')
 			flag=!flag;
 		}else{
 			$('.fei-mailCentent').find('li>div').removeClass('layui-form-checked')
 			flag=!flag;
 		}
 			})
 	
 	$('.fei-mailCentent').delegate('div','click',function(){
 		//console.log($(this).hasClass('layui-form-checked'))
 		if(!$(this).hasClass('layui-form-checked')){
 			$(".report-qx>").find('div').removeClass('layui-form-checked')
 		}	
 	})
 	*/

	//layui全选
	layui.use('form', function () {
		var form = layui.form;
		form.on('checkbox(qx)', function (data) {
			console.log(data.elem); //得到checkbox原始DOM对象
			console.log(data.elem.checked); //是否被选中，true或者false
			$("input[name=q]").prop("checked", data.elem.checked);
			form.render('checkbox');
		});
		form.on('checkbox(q)', function (data) {
			console.log(data.elem); //得到checkbox原始DOM对象
			console.log(data.elem.checked); //是否被选中，true或者false
			var _checked = $("input[name=q]:checked").length;
			var _checkbox = $('input[name=q]').length;
			if (_checked == _checkbox) {
				$("input[name=qx]").prop("checked", true);
				form.render('checkbox');
			} else {
				$("input[name=qx]").prop("checked", false);
				form.render('checkbox');
			}
			if (data.elem == '') {
				$("input[name=qx]").prop("checked", false);
				form.render('checkbox');
			}
		});
		form.on('select(fei-s1)', function (data) {
			//console.log(data.elem); //得到select原始DOM对象
			console.log(data.value); //得到被选中的值
			//  console.log(data.othis); //得到美化后的DOM对象
			if (data.value == '1') {
				$('.setTime>span:eq(0)').html('每日');
				$('.setTime>span:eq(1)').html('早上');
				$('.setTime>span:eq(2)').html('08:00');
				form.render();
			} else if (data.value == '2') {
				$('.setTime>span:eq(0)').html('每周');
				$('.setTime>span:eq(1)').html('周五');
				$('.setTime>span:eq(2)').html('17:00');
			} else if (data.value == '3') {
				$('.setTime>span:eq(0)').html('每月');
				$('.setTime>span:eq(1)').html('一号');
				$('.setTime>span:eq(2)').html('08:00');
			} else {
				$('.setTime>span:eq(0)').html('');
				$('.setTime>span:eq(1)').html('');
				$('.setTime>span:eq(2)').html('');
			}
		});
	});

	//添加邮箱
	//layui.use('form', function(){
	$('.fei-add').bind('click', function () {
		if ($('.fei-mail').val() == '') {
			alert('邮箱地址不能为空');
			return;
		}
		layui.use('form', function () {
			var form = layui.form;
			var fei_txt = $('.fei-mail').val();
			$('.fei-mailCentent').append('<li>\n\t\t\t\t\t\t<input type="checkbox" name="q" lay-filter="q" lay-skin="primary">\n\t\t\t\t\t\t<span>' + fei_txt + '</span>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</li>');

			$('.fei-mail').val('');
			form.render();
		});
	});
	//删除被选中的邮箱

	$('.report-delete').click(function () {
		//alert(1)
		//layui-form-checkbox
		$('.fei-mailCentent').find('.layui-form-checked').parent().remove();
		//$(".report-qx>").find('div').removeClass('layui-form-checked')
		layui.use('form', function () {
			var form = layui.form;
			$("input[name=qx]").prop("checked", false);
			form.render();
		});
	});

	//删除按钮
	$('.reportIndex-table').delegate('.fei-delete', 'click', function () {
		//alert(1)
		$(this).parent().parent().parent().remove();
	});

	//判断报告生成状态
	/*var reportState = $('.reportIndex_reportDown tr>td:eq(4)').html();
 // console.log($('.reportIndex_reportDown tr>td:eq(4)'))
 if(reportState=='生成成功'){
 	$(this).css('color','#18b654')
 }else{
 		$(this).css('color','#ff5f18')
 }*/

	//发送时间
	var _send = $('.report-type .layui-select-title').find('input').val();

	$('.layui-select-title').find('input').click(function () {
		alert(1);
	});
});