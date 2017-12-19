'use strict';

/*左侧滑动*/
$(window).scroll(function () {

				var bodyTop = $(document).scrollTop();

				var offsetTop = $('.volume').offset().top;
				//console.log(bodyTop)
				if (bodyTop >= offsetTop) {
								$('.left-bar').css({ 'top': parseInt(bodyTop - offsetTop + 200) + 'px' });
				} else {
								$('.left-bar').css('top', '200px');
				}
});

$('.top-menu ul li').click(function () {
				var idx = $(this).index();
				$("html,body").animate({ scrollTop: $('#targetCon' + idx).offset().top }, 300);
});

//横向改纵向文字
function rotate(str) {
				var length = str.length;
				var str1 = '';
				for (var i = 0; i < length; i++) {
								str1 += str.charAt(i) + '\n';
				}
				return str1;
}

//纵向树图封装
function TreeOption(demo) {
				this.dom = demo;
				this.myChart = echarts.init(document.getElementById(demo));
				this.opts = {
								tooltip: {
												trigger: 'item',
												triggerOn: 'mousemove'
								},
								series: [{
												type: 'tree',
												left: '5%',
												right: '2%',
												top: '20%',
												bottom: '20%',
												symbol: 'circle',
												symbolSize: 16,
												orient: 'vertical',
												expandAndCollapse: true,
												lineStyle: {
																normal: {
																				color: '#3996ff'
																}
												},
												leaves: {
																label: {
																				normal: {
																								position: ['50%', '180%'],
																								// rotate: 0,
																								verticalAlign: 'middle',
																								align: 'center',
																								fontSize: 14,
																								color: '#333'
																				}
																}
												},
												itemStyle: {
																normal: {
																				borderColor: "#bedcff",
																				borderWidth: 4

																}
												},

												data: [{
																name: '中国青年网',
																label: {
																				normal: {
																								position: ['50%', '-120%'],
																								verticalAlign: 'middle',
																								align: 'center',
																								fontSize: 16,
																								color: '#333333'
																				}
																},
																children: [{
																				name: '央视网',
																				children: [{
																								name: 'aaa',
																								value: 200
																				}, {
																								name: 'aaa'
																				}, {
																								name: 'aaa'
																				}]
																}, {
																				name: '新华网',
																				children: [{
																								name: 'bbb',
																								value: 200
																				}, {
																								name: 'bbb'
																				}, {
																								name: 'bbb'
																				}]
																}, {
																				name: '央广网',
																				children: [{
																								name: 'ccc',
																								value: 200
																				}, {
																								name: 'ccc'
																				}, {
																								name: 'ccc'
																				}]
																}, {
																				name: '中国网',
																				children: [{
																								name: 'ddd',
																								value: 200
																				}, {
																								name: 'ddd'
																				}, {
																								name: 'ddd'
																				}]
																}]

												}]

								}]
				};
}
TreeOption.prototype.init = function (newOption) {
				$.extend(true, this.opts, newOption);
				this.myChart.setOption(this.opts);
};

//调用纵向树图
//事件轨迹
try {
				var hotspot = new TreeOption('spread');
				var myOptionH = {};
				hotspot.init(myOptionH);
} catch (error) {
				var catchHtml = '<img src="../../images/nodata.jpg">';
				$("#spread").css({ "text-align": "center", "overflow": "hidden" });
				$("#spread").html(catchHtml);
}

/*//词云图封装
function WordCloud(demo){
	this.demo = demo;
	this.myChart = echarts.init(document.getElementById(demo));
	this.opts = {
	    title:{
	        text:"词云图",
	        link:'https://github.com/ecomfe/echarts-wordcloud',
	        subtext: 'data-visual.cn',
	        sublink:'http://data-visual.cn',
	    },
	    tooltip: {},
	    series: [{
	        type: 'wordCloud',
	        gridSize: 20,
	        sizeRange: [12, 50],
	        rotationRange: [0, 0],
	        shape: 'circle',
	        textStyle: {
	            normal: {
	                color: function() {
	                    return 'rgb(' + [
	                        Math.round(Math.random() * 160),
	                        Math.round(Math.random() * 160),
	                        Math.round(Math.random() * 160)
	                    ].join(',') + ')';
	                }
	            },
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: '#333'
	            }
	        },
	        data: [{
	            name: 'Sam S Club',
	            value: 10000,
	            textStyle: {
	                normal: {
	                    color: 'black'
	                },
	                emphasis: {
	                    color: 'red'
	                }
	            }
	        }, {
	            name: 'Macys',
	            value: 6181
	        }, {
	            name: 'Amy Schumer',
	            value: 4386
	        }, {
	            name: 'Jurassic World',
	            value: 4055
	        }, {
	            name: 'Charter Communications',
	            value: 2467
	        }, {
	            name: 'Chick Fil A',
	            value: 2244
	        }, {
	            name: 'Planet Fitness',
	            value: 1898
	        }, {
	            name: 'Pitch Perfect',
	            value: 1484
	        }, {
	            name: 'Express',
	            value: 1112
	        }, {
	            name: 'Home',
	            value: 965
	        }, {
	            name: 'Johnny Depp',
	            value: 847
	        }, {
	            name: 'Lena Dunham',
	            value: 582
	        }, {
	            name: 'Lewis Hamilton',
	            value: 555
	        }, {
	            name: 'KXAN',
	            value: 550
	        }, {
	            name: 'Mary Ellen Mark',
	            value: 462
	        }, {
	            name: 'Farrah Abraham',
	            value: 366
	        }, {
	            name: 'Rita Ora',
	            value: 360
	        }, {
	            name: 'Serena Williams',
	            value: 282
	        }, {
	            name: 'NCAA baseball tournament',
	            value: 273
	        }, {
	            name: 'Point Break',
	            value: 265
	        }]
	    }]
	};
}

WordCloud.prototype.init = function(newOption) {
    $.extend(true, this.opts, newOption);
    this.myChart.setOption(this.opts)
}

//实体词调用

var word1 = new WordCloud('wordOne')
var option1 ={}
word1.init(option1)*/