'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
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
        $("html,body").animate({ scrollTop: $('#target' + idx).offset().top }, 300);
    });
    /*两个折线图的数据和调用
    * 声量走势分析
    * 负面走势分析
    * */
    //声量走势分析--折线图模拟数据
    //负面走势分析--折线图模拟数据
    var option = {
        legendData: ['三星', '华为'],
        dateData: ['06-21 10:00', '06-21 12:00', '06-21 14:00', '06-21 17:00', '06-21 20:00', '06-21 12:00', '06-21 22:00'],
        seriesData: [{
            name: '三星',
            data: [23.2, 25.6, 44.7, 11.6, 55.2, 44, 24]

        }, {
            name: '华为',
            data: [26.3, 77.2, 88.3, 99.4, 123.0, 132, 151]

        }]
    };

    //声量走势分析--折线图调用
    var drewVolume = new drewBase0('volume');
    drewVolume.init(option);

    //负面走势分析--折线图调用
    var drewNegative = new drewBase0('negative');
    drewNegative.init(option);

    /*柱图的数据和调用
    * 来源类型对比
    * */
    //来源类型对比--柱状图模拟数据
    var option1 = {
        legendData: ['三星', '华为'],
        xData: ['06-21 10:00', '06-21 12:00', '06-21 14:00', '06-21 17:00', '06-21 20:00', '06-21 12:00', '06-21 22:00'],
        yData: [{
            name: '三星',
            data: [23.2, 25.6, 44.7, 11.6, 55.2, 44, 24]
        }, {
            name: '华为',
            data: [26.3, 77.2, 88.3, 99.4, 123.0, 132, 151]
        }]
    };
    //来源类型对比--柱状图调用
    var drewSourceBar = new drewBase('source-bar');
    drewSourceBar.init(option1);

    /*饼图的数据
     * 来源类型对比
     * */
    //来源类型对比--饼图模拟数据
    var optionPie = {
        title: '华为',
        pieDate: [{ value: 335, name: '新闻' }, { value: 310, name: '论坛' }, { value: 234, name: '微信' }, { value: 135, name: '报刊' }, { value: 135, name: '贴吧' }, { value: 100, name: '你猜' }, { value: 148, name: '微博' }]

        /*柱图和饼图的切换方法
         * 来源类型对比
         * */
    };$('.visualization .source .menu-tab span').click(function () {
        var _idx = $(this).index();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.source-part').eq(_idx).show().siblings('.source-part').hide();
            if (_idx == 1) {
                //调用饼图
                var drewpieleft = new drewPie('drew-pie-left'); //左侧
                drewpieleft.init(optionPie);
                var drewpieright = new drewPie('drew-pie-right'); //右侧
                drewpieright.init(optionPie);
            }
        }
    });

    /*两个横向柱图的数据和调用
     * 媒体活跃度对比
     * */
    //媒体活跃度对比--柱图模拟数据
    function randomData() {
        return Math.floor(Math.random() * (2000 - 500) + 500);
    }
    var mediaData = {
        data: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
        yData: ['中华网', '网易', '搜狐网', '新华社', '人民网', '腾讯网', '新浪网', '凤凰网', '搜狐网', '中国网']

        //媒体活跃度对比--华为调用
    };var huaMedia = new MediaOption('huawei', mediaData);
    var myOptionH = {};
    huaMedia.init(myOptionH);

    //媒体活跃度对比--三星调用
    var sanMedia = new MediaOption('sanxing', mediaData);
    var myOptionS = {
        //backgroundColor:'red'

    };
    sanMedia.init(myOptionS);
});

//来源类型对比--柱状图封装
function drewBase(dom) {
    this.dom = dom;
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            // formatter:'{a}<br>{b}'
            backgroundColor: 'rgba(255,234,223,0.8)',
            borderColor: '#ffb993',
            borderWidth: '2',
            textStyle: {
                color: '#ff7327',
                align: 'center'
            },
            position: 'top',
            formatter: function formatter(params, ticket, callback) {
                if (!params) {
                    return "暂无数据";
                } else {
                    var str = '<b style="font-size:24px;text-aligin:center;min-width:100px;text-align:center">' + params.value + '</b><br />' + params.name + '<br />';
                    return str;
                }
            }
        },
        calculable: true,
        legend: {
            show: true,
            width: 'auto',
            data: [],
            textStyle: {
                color: "#333"
            },
            icon: 'roundRect',
            top: 0,
            right: 20,
            align: 'auto'
        },
        xAxis: [{
            type: 'category',
            data: [],
            axisLine: {
                lineStyle: {
                    color: "red",
                    width: 0
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            }, splitLine: {
                show: true

            }
        }],
        color: ["#6ea7f4", "#ff7234", '#fa1200', "#a7e6af"],
        yAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            },

            axisLine: {
                lineStyle: {
                    width: 0
                }
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                    type: "solid"
                }
            }, axisTick: {
                show: false
            }

        }, _defineProperty({
            type: 'value',
            name: '',
            axisLabel: {
                show: false,
                formatter: '{value}'
            }, axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 1
                }
            }, splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    type: "dashed"
                }
            }
        }, 'axisTick', {
            show: false
        })],
        grid: {
            x: '50',
            x2: '30',
            y: '30',
            y2: '30'
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    borderColor: '#4a87ec',
                    borderWidth: 2,
                    borderType: 'solid',
                    color: "#6ea7f4"
                }
            },
            data: []
        }, {
            name: '',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    borderColor: '#ee4901',
                    borderWidth: 2,
                    borderType: 'solid',
                    color: "#ff7234"
                }
            },
            data: []
        }]
    };
}
drewBase.prototype.init = function (data) {
    this.opts.legend.data = data.legendData;
    this.opts.xAxis[0].data = data.xData;
    this.opts.series[0].data = data.yData[0].data;
    this.opts.series[1].data = data.yData[1].data;
    this.opts.series[0].name = data.yData[0].name;
    this.opts.series[1].name = data.yData[1].name;
    this.myChart.setOption(this.opts);
    window.onresize = this.myChart.resize;
};
//声量走势分析、负面走势分析--折线图封装
function drewBase0(dom) {
    this.dom = dom;
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            // formatter:'{a}<br>{b}'
            backgroundColor: 'rgba(255,234,223,0.8)',
            borderColor: '#ffb993',
            borderWidth: '2',
            textStyle: {
                color: '#ff7327',
                align: 'center'
            },
            position: 'top',
            formatter: function formatter(params, ticket, callback) {
                // console.log(params)
                if (!params) {
                    return "暂无数据";
                } else {
                    var str = '<b style="font-size:24px;text-aligin:center;min-width:100px;text-align:center">' + params.value + '</b><br />' + params.seriesName + '<br />';
                    return str;
                }
            }
        },
        calculable: true,
        legend: {
            show: true,
            width: 'auto',
            data: [],
            textStyle: {
                color: "#333"
            },
            icon: 'roundRect',
            top: 0,
            right: 20,
            align: 'auto'
        },
        xAxis: [{
            type: 'category',
            data: [],
            axisLine: {
                lineStyle: {
                    color: "red",
                    width: 0
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            }, splitLine: {
                show: true

            }
        }],
        color: ["#6ea7f4", "#ff7234", '#fa1200', "#a7e6af"],
        yAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    width: 0
                }
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                    type: "solid"
                }
            }, axisTick: {
                show: false
            }

        }, _defineProperty({
            type: 'value',
            name: '',
            axisLabel: {
                show: false,
                formatter: '{value}'
            }, axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 1
                }
            }, splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    type: "dashed"
                }
            }
        }, 'axisTick', {
            show: false
        })],
        grid: {
            x: '50',
            x2: '30',
            y: '30',
            y2: '30'
        },
        series: []
    };
}
drewBase0.prototype.init = function (data) {
    for (var i = 0; i < data.seriesData.length; i++) {
        data.seriesData[i].type = 'line';
        data.seriesData[i].smooth = true;
        data.seriesData[i].symbol = 'emptyCircle';
        data.seriesData[i].symbolSize = 6;
        data.seriesData[i].name = data.seriesData[i].name;
        data.seriesData[i].data = data.seriesData[i].data;
    }
    this.opts.legend.data = data.legendData;
    this.opts.xAxis[0].data = data.dateData;
    this.opts.series = data.seriesData;
    this.myChart.setOption(this.opts);
    window.onresize = this.myChart.resize;
};
//来源类型对比--饼图封装
function drewPie(dom) {
    this.dom = dom;
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        title: {
            text: '',
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 16,
                color: '#404450'
            }
        },
        /*   tooltip: {
               trigger: 'item',
               backgroundColor:'rgba(255,255,255,0.9)',
               formatter: function (params, ticket, callback) {
               	console.log(this)
                   var str= '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">'+'财政收入'+'</span>' 
        	         if (!params) {
        	             return "暂无数据"	               
        	         } 
               
                         str+='<span style="color:#666;font-size:12px;">'+params.name+
                         '&nbsp:&nbsp&nbsp'+'</span>'
                         +'<span style="font-size:14px;color:'+params.color+'; font-weight:bold;">'+params.value+'</span>'+'<br/>'
                         +'<span style="color:#666;font-size:12px;">'+'占比'+'&nbsp:&nbsp&nbsp'+'</span>'
                         +'<span style="color:'+params.color+';font-size:14px; font-weight:bold;">'+params.percent+'%</span>'+'<br/>'
               
                   return str;
                  
               }
           },*/
        backgroundColor: '#fff',
        color: ['#2755aa', '#ff7b41', '#ffc45c', '#7fcbff', '#4bb1ff', '#3996ff', '#3a7be8'],
        series: [{
            name: '类型对比',
            type: 'pie',
            label: {
                normal: {
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: '{b} \n {d}%'
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 20
                }
            },
            center: ['50%', '50%'],
            radius: ['35%', '70%'],
            data: []
        }, {
            name: '',
            type: 'pie',
            radius: ['33%', '34%'],
            tooltip: {
                show: false
            },
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 0,
                itemStyle: {
                    normal: { color: '#A3ACC2' }
                },
                label: {
                    normal: { show: false }
                }
            }]
        }]
    };
}
drewPie.prototype.init = function (data) {
    this.opts.title.text = data.title;
    this.opts.series[0].data = data.pieDate;
    this.myChart.setOption(this.opts);
    window.onresize = this.myChart.resize;
};
//媒体活跃度对比--横向柱图封装
function MediaOption(dom, data) {
    this.dom = dom;
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        color: ['#3293FF'],
        backgroundColor: '#fff',
        legend: {
            show: true,
            width: 'auto',
            data: [],
            textStyle: {
                color: "#333"
            },
            icon: 'roundRect',
            top: 0,
            right: 20,
            align: 'auto'
        },
        tooltip: {
            trigger: 'item',
            // formatter:'{a}<br>{b}'
            backgroundColor: 'rgba(255,234,223,0.8)',
            borderColor: '#ffb993',
            borderWidth: '2',
            textStyle: {
                color: '#ff7327',
                align: 'center'
            },
            position: 'top',
            formatter: function formatter(params, ticket, callback) {
                if (!params) {
                    return "暂无数据";
                } else {
                    var str = '<b style="font-size:24px;text-aligin:center;min-width:100px;text-align:center">' + params.value + '</b><br />' + params.name + '<br />';
                    return str;
                }
            }
        },

        grid: {
            left: 0,
            right: '6%',
            bottom: 0,
            top: '2%',
            containLabel: true
        },
        yAxis: [{
            type: 'category',
            nameTextStyle: {
                color: '#666',
                fontSize: 14
            },
            data: data.yData,
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#666'
                }
            },
            axisLine: {
                show: false
            }

        }],
        xAxis: [{
            show: false,
            type: 'value',
            nameTextStyle: {
                color: '#666',
                fontSize: 14
            },
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#666'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                },
                show: true
            },
            splitLine: {
                lineStyle: {
                    color: '#ededed'
                },
                show: false
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            barGap: 20,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#666'
                }
            },
            barWidth: '45%',
            data: data.data,
            itemStyle: {
                normal: {
                    color: function color(params) {
                        // console.log(params)
                        if (params.dataIndex > 6) {
                            return '#ff7234';
                        } else {
                            return '#6ea6f4';
                        }
                    }
                    // borderColor:function(params){
                    //     console.log(params)
                    //     if(params.dataIndex>3){
                    //         return '#4a87ec'
                    //     }else{
                    //         return '#ee4901'
                    //     }
                    // },
                }
            }
        }]
    };
}
MediaOption.prototype.init = function (newOption) {
    $.extend(true, this.opts, newOption);
    this.myChart.setOption(this.opts);
};

/*
* 地域分布--地图模拟数据
* */
var randomValue = function randomValue() {
    return Math.round(Math.random() * 1000);
};
var mapData = {
    //经纬度坐标
    geoCoordMap: {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    },

    //散点name
    title: ['三星', '华为'],

    //散点--模拟数据
    serdata: [
    //散点--三星
    {
        data: [{ name: '海门', value: 9 }, { name: '鄂尔多斯', value: 12 }, { name: '招远', value: 12 }, { name: '舟山', value: 12 }, { name: '齐齐哈尔', value: 14 }, { name: '盐城', value: 15 }, { name: '赤峰', value: 16 }, { name: '青岛', value: 18 }, { name: '乳山', value: 18 }, { name: '金昌', value: 19 }, { name: '泉州', value: 21 }, { name: '南通', value: 23 }, { name: '拉萨', value: 24 }, { name: '云浮', value: 24 }, { name: '上海', value: 25 }, { name: '攀枝花', value: 25 }, { name: '承德', value: 25 }, { name: '汕尾', value: 26 }, { name: '丹东', value: 27 }, { name: '瓦房店', value: 30 }, { name: '延安', value: 38 }, { name: '咸阳', value: 43 }, { name: '南昌', value: 54 }, { name: '柳州', value: 54 }, { name: '三亚', value: 54 }, { name: '泸州', value: 57 }, { name: '克拉玛依', value: 72 }]
    },
    //散点--华为
    {
        data: [{ name: '连云港', value: 9 }, { name: '河源', value: 12 }, { name: '葫芦岛', value: 12 }, { name: '连云港', value: 12 }, { name: '嘉兴', value: 14 }]
    }],

    //地图颜色--模拟数据
    mapdata: [{ name: '北京', value: randomValue() }, { name: '天津', value: randomValue() }, { name: '上海', value: randomValue() }, { name: '重庆', value: randomValue() }, { name: '河北', value: randomValue() }, { name: '河南', value: randomValue() }, { name: '云南', value: randomValue() }, { name: '辽宁', value: randomValue() }, { name: '黑龙江', value: randomValue() }, { name: '湖南', value: randomValue() }, { name: '安徽', value: randomValue() }, { name: '山东', value: randomValue() }, { name: '新疆', value: randomValue() }, { name: '江苏', value: randomValue() }, { name: '浙江', value: randomValue() }, { name: '江西', value: randomValue() }, { name: '湖北', value: randomValue() }, { name: '广西', value: randomValue() }, { name: '甘肃', value: randomValue() }, { name: '山西', value: randomValue() }, { name: '内蒙古', value: randomValue() }, { name: '陕西', value: randomValue() }, { name: '吉林', value: randomValue() }, { name: '福建', value: randomValue() }, { name: '贵州', value: randomValue() }, { name: '广东', value: randomValue() }, { name: '青海', value: randomValue() }, { name: '西藏', value: randomValue() }, { name: '四川', value: randomValue() }, { name: '宁夏', value: randomValue() }, { name: '海南', value: randomValue() }, { name: '台湾', value: randomValue() }, { name: '香港', value: randomValue() }, { name: '澳门', value: randomValue() }]
};

$.get('../../Lib/map/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElementById('compting-area'));

    chart.setOption(getMap(mapData));
    //chart.setOption(option)
});

/*地域分布--地图封装*/
function getMap(dataObj) {

    var convertData = function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = dataObj.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var serData = function serData() {
        var objarr = [];
        for (var i = 0; i < dataObj.serdata.length; i++) {
            //散点数据处理
            var s = {
                name: dataObj.title[i],
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(dataObj.serdata[i].data), //散点数据--三星和华为
                symbol: 'image:///images/map-icon' + i + '.png',
                symbolSize: 13,
                symbolRotate: 0,
                hoverAnimation: false,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F06C00'
                    }
                }
            };
            //地图颜色数据处理
            var d = {
                name: 'categoryA',
                type: 'map',
                geoIndex: 0,
                // tooltip: {show: false},
                data: dataObj.mapdata
            };
            objarr.push(s);
            objarr.push(d);
        }
        return objarr;
    };

    var opt = {
        tooltip: {
            show: false
        },
        legend: {
            show: true,
            itemHeight: 12,
            itemWidth: 12,
            top: '10%',
            data: dataObj.title
        },

        visualMap: {
            min: 0,
            max: 1500,
            left: 'left',
            top: 'bottom',
            text: ['低', '高'],
            seriesIndex: [1],
            inRange: {
                color: ['#e0ffff', '#006edd']
            },
            calculable: false
        },
        geo: {
            map: 'china',
            roam: false,
            layoutCenter: ['50%', '50%'],
            layoutSize: 700,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff'
                },
                emphasis: {
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: serData()
    };

    return opt;
}