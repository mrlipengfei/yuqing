'use strict';

$(function () {
	layui.use(['layer', 'form', 'element', 'laydate'], function () {
		var layer = layui.layer;
		var laydate = layui.laydate;
		var form = layui.form;
		var element = layui.element;
		laydate.render({
			elem: '#startTime', //指定元素
			type: 'datetime',
			format: 'yyyy-MM-dd HH:mm'
		});

		laydate.render({
			elem: '#overTime', //指定元素
			type: 'datetime',
			format: 'yyyy-MM-dd HH:mm'
		});

		$('.search-box').find('i').click(function () {

			$('.searchHot').html('<div class="searchContent">\n\t\t\t\t\t<div class="mainConTop clearfix fei-qx">\n\t\t                <form class="layui-form fl" action="">\n\t\t                    <div class="layui-form-item" pane="">\n\t\t                        <input type="checkbox" name="qx" lay-skin="primary" title="\u5168\u9009"  lay-filter="qx">\n\t\t                    </div>\n\t\t                </form>\n\t\t                <span class="fei favButton fl">\u6279\u91CF\u6536\u85CF</span>\n\t\t            </div>\n\t\t            \n\t\t\t\t\t<div class="mainConBottom">\n                \t\t<form class="layui-form" action="">\n\t                \t\t<ul class="newsList">\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span>\n\t\t\t                                </div>\n\t\t\t                            </div>\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span> \n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span>\n\t\t\t                                    \n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t                    <li>\n\t\t\t                        <div class="newsTop clearfix">\n\t\t\t                            <div class="layui-form-item fl" pane="">\n\t\t\t                                <input  type="checkbox" name="q" lay-skin="primary" title=""  lay-filter="q">\n\t\t\t                            </div>\n\t\t\t                            <div class="fl newsSubject">\n\t\t\t                                <h4 class="newsTitle"><span>\u4E00\u5E26\u4E00\u8DEF</span>\u8BFB\u672C</h4>\n\t\t\t                                <div class="newsMsg">\n\t\t\t                                    <span class="mewsSource">\u767E\u5EA6</span>\n\t\t\t                                    <span class="newsDate">2016/4/8 8:50</span>\n\t\t\t                                    <span class="newsLink">\u6765\u6E90\uFF1A<a href="">\u539F\u6587\u94FE\u63A5</a></span>\n\t\t\t                                   \n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                            \n\t\t\t                            <div class="fr">\n\t\t\t                                <i class="iconfont icon-star_off-copy "></i>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="newsBottom">\n\t\t\t                            \u516C\u544A]\u5B9D\u5149\u5B9E\u4E1A\u4E8F\u635F\uFF1A\u8D2D\u56DE\u80A1\u4EFD\u53CA \u53D1\u884C\u65B0\u80A1\u4EFD\u4E4B\u4E00\u5E26\u4E00\u8DEF \u91CD\u9009\u8463\u4E8B \u53CA \u80A1\u4E1C\u5468\u5E74\u5927\u4F1A\u901A\u544A \u65F6\u95F4\uFF1A2017\u5E7407\u670811\u65E5 18:34:54 \u4E2D\u8D22\u7F51 \u6B64\u4E43\u8981\u4EF6\u8ACB\u5373\u8655\u7406 \u95A3\u4E0B\u5982\u5C0D\u672C\u901A\u51FD\u4EFB\u4F55\u5167\u5BB9\u6216\u61C9\u63A1\u53D6\u4E4B\u884C\u52D5\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u61C9\u8AEE\u8A62\u3000\u95A3\u4E0B\u4E4B\u80A1\u7968\u7D93\u7D00\u6216 \u5176\u4ED6\u8A3B\u518A\u8B49\u5238\u5546 . . .\n\t\t\t                        </div>\n\t\t\t                    </li>\n\t\t\t               </ul>\n\t\t\t               <div class="fei pageWrap clearfix">\n\t\t\t\t\t            <div class="totalPage fl">\n\t\t\t\t\t              \t  \u5171<span>333</span>\u9875 / 3333\u6761\u8BB0\u5F55\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div id="page" class="fr page"></div>\n\t\t\t\t\t        </div>\n\t\t              </form>\n\t\t            </div>\n \n\t\t\t\t</div>');
			form.render();
			layui.use(['form', 'laypage'], function () {
				var laypage = layui.laypage;
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
						// console.log(obj)
					}
				});
			});
		});
	});

	//高级搜索弹出
	$('.fei').delegate('.gao-plyj', 'click', function (evt) {
		$('.search-wrap').css({ display: 'none' });
		//$('.search-wrap').slideUp(300)
		$('.fei-stretch').slideDown(400);
	});
	//高级搜索收起
	$('._search').delegate('.gao-qxgjss', 'click', function (evt) {
		//$('.search-wrap').css({display:'block'});
		$('.search-wrap').slideDown(300);
		$('.fei-stretch').slideUp(400);
	});

	//小星星收藏图标
	$('.searchHot').delegate('.icon-star_off-copy', 'click', function () {
		$(this).toggleClass('icon-xing-copy');
	});

	//批量收藏
	$('.searchHot').delegate('.favButton', 'click', function () {
		var feiChecked = $(':checkbox:checked').length;
		$(':checkbox:checked').each(function (index, ele) {
			//console.log($(this).parent().siblings().hasClass('fr'))
			$(this).parent().siblings('.fr').find('.icon-star_off-copy').toggleClass('icon-xing-copy');
		});
		layui.use('form', function () {
			var form = layui.form;
			$("input[name=qx]").prop("checked", false);
			$("input[name=q]").prop("checked", false);
			form.render();
		});
	});
});