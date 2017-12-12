'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {
    //初始化四个Echart图表
    //声量走势--折线图--临时模拟数据
    var optionList = {
        dateData: ['06-21 12:00', '06-21 15:00', '06-21 18:00', '06-21 21:00', '06-22 00:00', '06-22 03:00', '06-22 06:00', '06-22 09:00'],
        seriesData: [{
            name: '全部',
            data: [211, 311, 241, 331, 412, 553, 851, 713]
        }, {
            name: '新闻',
            data: [381, 471, 455, 473, 532, 513, 391, 283]
        }, {
            name: "微博",
            data: [321, 442, 322, 315, 303, 262, 273, 372]
        }, {
            name: "微信",
            data: [250, 290, 340, 360, 290, 274, 419, 421]
        }, {
            name: "博客",
            data: [281, 271, 255, 173, 232, 213, 201, 213]
        }, {
            name: "论坛",
            data: [221, 201, 213, 192, 180, 162, 140, 160]
        }, {
            name: "贴吧",
            data: [200, 190, 160, 170, 150, 170, 219, 151]
        }]
    };
    //媒体类型覆盖--饼图--临时模拟数据
    var optionList2 = {
        dateData: ['06-21 12:00', '06-21 15:00', '06-21 18:00', '06-21 21:00', '06-22 00:00', '06-22 03:00', '06-22 06:00', '06-22 09:00'],
        seriesData: [{
            name: '其他',
            value: 20
        }, {
            name: '新闻',
            value: 20
        }, {
            name: "微博",
            value: 30
        }, {
            name: "微信",
            value: 40
        }, {
            name: "博客",
            value: 50
        }, {
            name: "论坛",
            value: 40
        }, {
            name: "贴吧",
            value: 20
        }]
    };
    //媒体来源排行--柱图--临时模拟数据
    var optionList3 = {
        nameData: ['中国网', '微信公众号', '新浪网', '中国发电网', '突袭新闻网', '浦东新闻网', '人民网', '长城网'],
        seriesData: [85, 75, 65, 55, 45, 40, 35, 30]
    };
    //热点词云--词云图--临时模拟数据
    var data = [

    // value    数值，可选参数
    // color    颜色，可选参数
    // name     名称，必选参数

    { value: 1, color: '#ff7234', name: '一个中国原则' /* 可以自定义属性 , id : '???'*/ }, { value: .8, color: '#6ea7f4', name: '校园霸凌' }, { value: .6, color: '#6ea7f4', name: '醉酒身亡' }, { value: .4, color: '#6ea7f4', name: '中国杯赛' }, { value: .2, color: '#6ea7f4', name: '美国大选' }, { value: .0, color: '#6ea7f4', name: '收费公路改革' }, { value: .4, color: '#6ea7f4', name: '一票难求' }, { value: .0, color: '#6ea7f4', name: '产权制度改革' }, { value: .0, color: '#6ea7f4', name: '医疗出台' }, { value: .0, color: '#6ea7f4', name: '对俄制裁' }];

    chart1(optionList);
    chart2(optionList2);
    chart3(optionList3);
    chart4(data);

    layui.use(['laydate', 'form'], function () {

        var form = layui.form,
            laydate = layui.laydate;
        //监听左侧主题名称下拉框
        form.on('select(themeName)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            // var themeStr=$(data.elem).find("option:selected").text();
            // console.log(themeStr)
            chart1(optionList);
        });
        //监听图表上方时间范围下拉框
        form.on('select(timePeriod1)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            //刷新声量走势
            chart1(optionList);
            var timeStr = $(data.elem).find("option:selected").text();
            if (timeStr == "自定义") {}
        });
        form.on('select(timePeriod2)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            //刷新媒体类型覆盖
            chart2(optionList2);
        });
        form.on('select(timePeriod3)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            //刷新媒体来源排行
            chart3(optionList3);
        });
        form.on('select(timePeriod4)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            //刷新热点词云
            chart4(data);
        });
        form.on('select(timePeriod5)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            //   刷新媒体动态
        });
        //日历
        //         var itemval = $("#trTypeUpdate").val();
        //         var item = $("#trTypeUpdate").find("option ");
        //         $(item).each(function (e,obj){
        //             var val = $(obj).val();
        //             if(itemval ==val){
        //                 var next =$("#trTypeUpdate").next();
        //                 var child =$(next).children();
        //                 var text =$($(child).eq(0)).children();
        //                 $(text).eq(0).attr("placeholder",$(obj).text());
        //                 $(text).eq(0).val($(obj).text());
        //                 var optionChild =$($(child).eq(1)).children();
        //                 for(var i= 0 ;i<optionChild.length;i++){
        //                     var layVal =$(optionChild[i]).attr("lay-value");
        //                     if(layVal==val){
        //                         $(optionChild[i]).addClass("layui-this");
        //                     }
        //                 }
        //                 $(obj).attr("selected","selected");
        //             }


        laydate.render({
            elem: '#startDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新声量走势
                chart1(optionList);

                $("#customSelect").val(3);
                form.render("select");
            }
        });
        laydate.render({
            elem: '#endDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新声量走势
                chart1(optionList);

                $("#customSelect").val(3);
                form.render("select");
            }
        });
        laydate.render({
            elem: '#startDate2',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新媒体类型覆盖
                chart2(optionList2);
            }
        });
        laydate.render({
            elem: '#endDate2',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新媒体类型覆盖
                chart2(optionList2);
            }
        });
        laydate.render({
            elem: '#startDate3',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新媒体来源排行
                chart3(optionList3);
            }
        });
        laydate.render({
            elem: '#endDate3',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新媒体来源排行
                chart3(optionList3);
            }
        });
        laydate.render({
            elem: '#startDate4',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新热点词云
                chart4(data);
            }
        });
        laydate.render({
            elem: '#endDate4',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新热点词云
                chart4(data);
            }
        });
    });

    //页面尺寸发生变化，重绘所有Echart图表
    window.onresize = function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
    };
});

//声量走势--折线图
function chart1(optionList) {

    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 6;
    }
    // console.log(optionList.seriesData);
    var chart1 = echarts.init(document.getElementById('volumeTrend'));
    var option = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            borderColor: '#313948',
            borderWidth: 1,
            axisPointer: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: 'rgba(90,97,112,0.9)'
        },
        legend: {
            data: ['全部', '新闻', '微博', '微信', '博客', '论坛', '贴吧'],
            right: 0,
            top: 35,
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 0
        },
        grid: {
            x: '50',
            x2: '50',
            y: '80',
            y2: '60'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                margin: 20
            },
            axisLine: {
                lineStyle: {
                    color: '#c8ced8'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#e3e6eb',
                    type: "solid"
                }
            },
            data: optionList.dateData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: '#c8ced8'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#e3e6eb',
                    type: "solid"
                }
            }
        },
        color: ['#9eaabd', "#61c5f4", "#c1ad63", '#84a7ff', "#ffaa45", "#62d287", '#fc8d7b'],
        series: optionList.seriesData
    };
    chart1.setOption(option);
}
//媒体类型覆盖--饼图
function chart2(optionList) {

    var chart2 = echarts.init(document.getElementById('mediaTypeCover'));
    var option = {
        backgroundColor: '#fff',
        tooltip: {
            show: true,
            borderColor: '#313948',
            borderWidth: 1,
            axisPointer: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: 'rgba(90,97,112,0.9)'
        },
        color: ['#ffc45c', '#7fcbff', '#4bb1ff', '#3996ff', '#3a7be8', '#2755aa', '#ff7b41'],
        calculable: true,
        series: [{
            z: 0,
            name: '',
            type: 'pie',
            center: ['46%', '50%'],
            radius: ['52%', '53%'],
            labelLine: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#c8c8c8' //颜色填充
                    }
                },
                tooltip: { show: false }
            }]
        }, {
            z: 0,
            name: '',
            type: 'pie',
            center: ['46%', '50%'],
            radius: ['19%', '20%'],
            labelLine: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#c8c8c8' //颜色填充
                    }
                },
                tooltip: { show: false }
            }]
        }, {
            name: '媒体类型覆盖',
            type: 'pie',
            center: ['46%', '50%'],
            radius: ['22%', '50%'],
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{b}\n\n{d}%",
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 14
                    },
                    length: 15,
                    length2: 25,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: optionList.seriesData
        }]
    };
    chart2.setOption(option);
}
//媒体来源排行--柱图
function chart3(optionList) {

    var chart3 = echarts.init(document.getElementById('mediaOriginRank'));
    var option = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            borderColor: '#313948',
            borderWidth: 1,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor: 'rgba(90,97,112,0.9)'
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['中国网', '微信公众号', '新浪网', '中国发电网', '突袭新闻网', '浦东新闻网', '人民网', '长城网'],
            axisLine: {
                lineStyle: {
                    color: "#c8ced8",
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: 45,
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            }
        }],
        yAxis: [{
            min: 0,
            interval: 20,
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#c8ced8",
                    width: 1
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eef0f3',
                    type: "solid"
                }
            },
            axisTick: {
                show: false
            }
        }],
        grid: {
            x: '50',
            x2: '50',
            y: '50',
            y2: '70'
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    borderColor: '#4a87ec',
                    borderWidth: 2,
                    borderType: 'solid',
                    color: "#6ea7f4"
                },
                emphasis: {
                    borderColor: '#ee4901',
                    borderWidth: 2,
                    borderType: 'solid',
                    color: "#ff7234"
                }
            },
            data: optionList.seriesData
        }]
    };
    chart3.setOption(option);
}
//热点词云--词云图
function chart4(data) {
    bubbleChartWordCloud({
        // 标识
        id: 'hotWordCloud',
        // 高
        height: '340',
        // 排斥力
        repulsion: '9',
        // 数据
        data: data,

        // 处理程序（点击）
        handlerClick: function handlerClick( /* data */d) {

            console.log(d);
        }

    });
}