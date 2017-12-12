'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {
    //初始化三个Echart图表
    // 情感走势--折线图--临时模拟数据
    var optionList = {
        dateData: ['06-21 12:00', '06-21 15:00', '06-21 18:00', '06-21 21:00', '06-22 00:00', '06-22 03:00', '06-22 06:00', '06-22 09:00'],
        seriesData: [{
            name: '负面',
            data: [211, 311, 241, 331, 412, 553, 610, 711, 851, 713]
        }, {
            name: '正面',
            data: [381, 471, 455, 473, 532, 513, 500, 421, 391, 283]
        }, {
            name: "中性",
            data: [321, 442, 322, 315, 303, 262, 240, 261, 273, 372]
        }]
    };
    //情感分布--饼图--临时模拟数据
    var optionList2 = {
        dateData: ['06-21 12:00', '06-21 15:00', '06-21 18:00', '06-21 21:00', '06-22 00:00', '06-22 03:00', '06-22 06:00', '06-22 09:00'],
        seriesData: [{
            name: '负面',
            value: 20
        }, {
            name: '中性',
            value: 20
        }, {
            name: "正面",
            value: 30
        }]
    };
    //负面信息来源--饼图--临时模拟数据
    var optionList3 = {
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

    chart1(optionList);
    chart2(optionList2);
    chart3(optionList3);

    layui.use(['laydate', 'form'], function () {
        var form = layui.form,
            laydate = layui.laydate;
        //监听左侧主题名称下拉框
        form.on('select(themeName)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            chart1(optionList);
            chart2(optionList2);
            chart3(optionList3);
        });
        form.on('select(timePeriod1)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            chart1(optionList);
        });
        form.on('select(timePeriod2)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            chart2(optionList2);
        });
        form.on('select(timePeriod3)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            chart3(optionList3);
        });
        //日历
        laydate.render({
            elem: '#startDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新情感走势
                chart1(optionList);
            }
        });
        laydate.render({
            elem: '#endDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新情感走势
                chart1(optionList);
            }
        });
        laydate.render({
            elem: '#startDate2',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新情感分布
                chart2(optionList2);
            }
        });
        laydate.render({
            elem: '#endDate2',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新情感分布
                chart2(optionList2);
            }
        });
        laydate.render({
            elem: '#startDate3',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新负面信息来源媒体
                chart3(optionList3);
            }
        });
        laydate.render({
            elem: '#endDate3',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                //刷新负面信息来源媒体
                chart3(optionList3);
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
//图表
// 情感走势--折线图
function chart1(optionList) {

    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 6;
    }
    console.log(optionList.seriesData);

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
            data: ['负面', '正面', '中性'],
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
        color: ['#61c5f4', "#84a7ff", "#fc8d7b"],
        series: optionList.seriesData
    };
    chart1.setOption(option);
}
//情感分布--饼图
function chart2(optionList) {

    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 6;
    }
    console.log(optionList.seriesData);
    var chart2 = echarts.init(document.getElementById('emotionCover'));
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
            name: '情感分布',
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
//负面信息来源--饼图
function chart3(optionList) {

    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 6;
    }
    console.log(optionList.seriesData);
    var chart3 = echarts.init(document.getElementById('mediaTypeCover'));
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
            name: '负面信息来源媒体',
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
    chart3.setOption(option);
}