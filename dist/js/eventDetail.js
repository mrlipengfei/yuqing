'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {

  /*左侧滑动*/
  $(window).scroll(function () {

    var bodyTop = $(document).scrollTop();

    var offsetTop = $('.event-intro').offset().top;
    //console.log(bodyTop)
    if (bodyTop >= offsetTop) {
      $('.left-bar').css({ 'top': parseInt(bodyTop - offsetTop + 200) + 'px' });
    } else {
      $('.left-bar').css('top', '200px');
    }
  });
  $('.top-menu ul li').click(function () {
    var idx = $(this).index();
    //$("html,body").animate({scrollTop: $('#target'+idx).offset().top}, 300);
    $("html,body").animate({ scrollTop: $('#target' + idx).offset().top }, 300);
  });

  //初始化四个Echart图表
  chart1();
  chart2();
  chart3();
  chart4();
  chart5();
  chart6();
  //chart7();

  //页面尺寸发生变化，重绘所有Echart图表
  window.onresize = function () {
    chart1.resize();
    chart2.resize();
    chart3.resize();
    chart4.resize();
    chart5.resize();
    chart6.resize();
    //chart7.resize();
  };
});
//声量走势--折线图
function chart1() {
  //临时数据
  var optionList = {
    dateData: ['2016-05-13', '2016-05-15', '2016-05-17', '2016-05-19', '2016-05-21', '2016-05-23', '2016-05-25'],
    seriesData: [{
      seriesName: '全部',
      seriesVal: [211, 311, 241, 331, 412, 553, 610]
    }, {
      seriesName: '网站',
      seriesVal: [381, 471, 455, 473, 532, 513, 500]
    }, {
      seriesName: "论坛",
      seriesVal: [321, 442, 322, 315, 303, 262, 240]
    }, {
      seriesName: "博客",
      seriesVal: [250, 290, 340, 360, 290, 274, 290]
    }, {
      seriesName: "微博",
      seriesVal: [281, 271, 255, 173, 232, 213, 200]
    }, {
      seriesName: "境外",
      seriesVal: [221, 201, 213, 192, 180, 162, 150]
    }, {
      seriesName: "微信",
      seriesVal: [200, 190, 160, 170, 150, 170, 190]
    }, {
      seriesName: "视频",
      seriesVal: [281, 271, 255, 173, 232, 213, 200]
    }, {
      seriesName: "新闻",
      seriesVal: [385, 465, 513, 627, 726, 800, 764]
    }, {
      seriesName: "报刊",
      seriesVal: [200, 190, 160, 170, 150, 170, 190]
    }, {
      seriesName: "政务",
      seriesVal: [221, 201, 213, 192, 180, 162, 150]
    }, {
      seriesName: "客户端",
      seriesVal: [100, 190, 432, 532, 678, 423, 190]
    }]
  };

  chart1 = echarts.init(document.getElementById('volume'));
  var option = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      confine: true, //是否将 tooltip 框限制在图表的区域内。
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
      data: ['全部', '网站', '论坛', '博客', '微博', '境外', '微信', '视频', '新闻', '报刊', '政务', '客户端'],
      right: 0,
      top: 30,
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
    color: ['#9EAABE', "#5CC4F6", "#A2DEEC", '#FFAB37', "#D4CBCB", "#FFA67A", '#FF7775', "#FF6E51", '#76DC67', "#2E8C46", "#51D07B", '#82A5FF'],
    series: [{
      name: optionList.seriesData[0].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[0].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[1].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[1].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[2].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[2].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[3].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[3].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[4].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[4].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[5].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[5].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[6].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[6].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[7].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[7].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[8].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[8].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[9].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[9].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[10].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[10].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }, {
      name: optionList.seriesData[11].seriesName,
      type: 'line',
      smooth: true,
      data: optionList.seriesData[11].seriesVal,
      symbol: 'emptyCircle',
      symbolSize: 6
    }]
  };
  chart1.setOption(option);
}
//媒体类型覆盖--饼图
function chart2() {
  //临时数据
  var optionList = {
    seriesData: [{
      seriesName: '中性',
      seriesVal: 60
    }, {
      seriesName: '正面',
      seriesVal: 30
    }, {
      seriesName: "负面",
      seriesVal: 10
    }]
  };
  chart2 = echarts.init(document.getElementById('mediaTypeCover'));
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
    color: ['#3293FF', '#7CCAFF', '#FF7B37'],
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
      data: [{
        value: optionList.seriesData[0].seriesVal,
        name: optionList.seriesData[0].seriesName
      }, {
        value: optionList.seriesData[1].seriesVal,
        name: optionList.seriesData[1].seriesName
      }, {
        value: optionList.seriesData[2].seriesVal,
        name: optionList.seriesData[2].seriesName
      }]
    }]
  };
  chart2.setOption(option);
}
//媒体情感覆盖--柱图
function chart3() {
  //临时数据

  chart3 = echarts.init(document.getElementById('mediaOriginRank'));

  var option = {
    color: ['#3293FF', '#7CCAFF', '#FF7226'],
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      borderColor: '#ccc',
      borderWidth: 1,
      //backgroundColor:'rgba(255,255,255,0.9)',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      // formatter: function (params){
      //   console.log(params);
      //   return '<span style="color:#008ef2;font-weight:bold; font-size:16px">'+ params[0].name +'</span>' + '<br/>'
      //     + '<span style="color:#666;">'+'覆盖' + ' : </span>' +'<span style="color:#ff9100;font-weight:bold;">'+ params[0].value +'</span>'+ '<br/>'
      //
      // },
      backgroundColor: 'rgba(90,97,112,0.9)'
    },
    legend: {
      data: ['正面', '中性', '负面'],
      right: 0,
      top: 0,
      itemGap: 20,
      itemWidth: 15,
      itemHeight: 15
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: [{
      type: 'category',
      nameTextStyle: {
        color: '#666',
        fontSize: 14
      },
      nameGap: 30,
      data: ['新闻', '微信', '博客', '微博', '论坛'],
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
        show: true
      }
    }],
    xAxis: [{
      show: true,
      type: 'value',
      nameTextStyle: {
        color: '#666',
        fontSize: 14
      },
      min: 0,
      max: 250,
      nameGap: 30,
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
      name: '正面',
      barWidth: '30%',
      type: 'bar',
      stack: '1',
      data: [0, 0, 10, 15, 10]
    }, {
      name: '中性',
      barWidth: '30%',
      type: 'bar',
      stack: '1',
      data: [10, 40, 20, 15, 10]
    }, {
      name: '负面',
      type: 'bar',
      stack: '1',
      data: [50, 80, 120, 150, 200]
    }]
  };
  chart3.setOption(option);
}

//媒体类型覆盖--饼图
function chart4() {
  //临时数据
  var optionList = {
    dateData: ['06-21 12:00', '06-21 15:00', '06-21 18:00', '06-21 21:00', '06-22 00:00', '06-22 03:00', '06-22 06:00', '06-22 09:00'],
    seriesData: [{
      seriesName: '新闻',
      seriesVal: 20
    }, {
      seriesName: "微博",
      seriesVal: 30
    }, {
      seriesName: "微信",
      seriesVal: 40
    }, {
      seriesName: "博客",
      seriesVal: 50
    }, {
      seriesName: "论坛",
      seriesVal: 40
    }, {
      seriesName: "贴吧",
      seriesVal: 20
    }]
  };
  chart4 = echarts.init(document.getElementById('mediaTypeCover2'));
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
    color: ['#7fcbff', '#4bb1ff', '#3996ff', '#3a7be8', '#2755aa', '#ff7b41'],
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
      data: [{
        value: optionList.seriesData[0].seriesVal,
        name: optionList.seriesData[0].seriesName
      }, {
        value: optionList.seriesData[1].seriesVal,
        name: optionList.seriesData[1].seriesName
      }, {
        value: optionList.seriesData[2].seriesVal,
        name: optionList.seriesData[2].seriesName
      }, {
        value: optionList.seriesData[3].seriesVal,
        name: optionList.seriesData[3].seriesName
      }, {
        value: optionList.seriesData[4].seriesVal,
        name: optionList.seriesData[4].seriesName
      }, {
        value: optionList.seriesData[5].seriesVal,
        name: optionList.seriesData[5].seriesName
      }]
    }]
  };
  chart4.setOption(option);
}

//媒体排行覆盖--柱图
function chart5() {
  //临时数据
  var optionList = {
    nameData: ['中国网', '微信公众号', '新浪网', '中国发电网', '突袭新闻网', '浦东新闻网', '人民网', '长城网'],
    seriesData: [{
      seriesName: '其他',
      seriesVal: 20
    }, {
      seriesName: '新闻',
      seriesVal: 20
    }, {
      seriesName: "微博",
      seriesVal: 30
    }, {
      seriesName: "微信",
      seriesVal: 40
    }, {
      seriesName: "博客",
      seriesVal: 50
    }, {
      seriesName: "论坛",
      seriesVal: 40
    }, {
      seriesName: "贴吧",
      seriesVal: 20
    }]
  };
  chart5 = echarts.init(document.getElementById('mediaOriginRank2'));
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
      barWidth: '30%',
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
      data: [85, 75, 65, 55, 45, 40, 35, 30]
    }]
  };
  chart5.setOption(option);
}
//相关词
function chart6() {
  chart6 = echarts.init(document.getElementById('relatedWords'));
  var option = {
    backgroundColor: '#ffffff',
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    tooltip: {
      trigger: 'item',
      padding: 15,
      borderWidth: 1,
      borderColor: "#239a8c",
      backgroundColor: "rgba(19,12,79,0.8)",
      formatter: function formatter(params) {
        if (params.dataType == "edge") {
          // is edge
          return params.data.target + " > " + params.data.source;
        } else {
          // is node
          return params.name;
        }
      }
    },
    grid: {
      left: 70,
      top: 30
    },
    color: ['#ff715a', '#f6cb58', '#2cd6af', '#f95a79', '#8e6cd0', '#2e78f2', '#0d72c8'],
    legend: {
      //data: ['国税局','教育局','农业局','统计局','工商局','水利局','人力局']
    },
    series: [{ type: 'graph', name: "五联疫苗事件" }, { type: 'graph', name: "疫苗" }, { type: 'graph', name: "相关" }, { type: 'graph', name: "开展" }, { type: 'graph', name: "调查组" }, { type: 'graph', name: "五联" }, { type: 'graph', name: "接种" }, { type: 'graph', name: "卫生" }, { type: 'graph', name: "调查" }, { type: 'graph', name: "服务中心" }, { type: 'graph', name: "预防" }, { type: 'graph', name: "掉包" }, { type: 'graph', name: "注册器" }, { type: 'graph', name: "记者" }, { type: 'graph', name: "联合" }, { type: 'graph', name: "计生委" }, { type: 'graph', name: "规范" }, {
      type: 'graph',
      layout: 'circular',
      symbol: 'circle',
      symbolSize: 15,
      roam: false,
      lineStyle: {
        normal: {
          color: 'source',
          curveness: 0.3
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{b}',
          textStyle: {
            color: "#000",
            fontSize: 12
          }
        }
      },
      data: [{
        name: '五联疫苗事件',
        position: 'bottom',
        value: 200,
        symbolSize: 70,
        symbol: 'image://../../images/blue-big-dot.png',
        itemStyle: {
          normal: {
            color: '#3293FF'
          }
        }
      }, {
        name: '疫苗',
        symbolSize: 50,
        symbol: 'image://../../images/yellow-dot.png',
        value: 500,
        itemStyle: {
          normal: {
            color: '#FF7226'
          }
        }
      }, {
        name: '相关',
        value: 200,
        itemStyle: {
          normal: {
            color: '#FFAA81'
          }
        }
      }, {
        name: '开展',
        value: 190,
        itemStyle: {
          normal: {
            color: '#FF8E57'
          }
        }
      }, {
        name: '调查组',
        value: 180,
        itemStyle: {
          normal: {
            color: '#FF9C6C'
          }
        }
      }, {
        name: '五联',
        value: 170,
        itemStyle: {
          normal: {
            color: '#FF9C6C'
          }
        }
      }, {
        name: '接种',
        value: 160,
        itemStyle: {
          normal: {
            color: '#FF803F'
          }
        }
      }, {
        name: '卫生',
        value: 150,
        itemStyle: {
          normal: {
            color: '#FFB896'
          }
        }
      }, {
        name: '调查',
        value: 140,
        itemStyle: {
          normal: {
            color: '#FF9C6C'
          }
        }
      }, {
        name: '服务中心',
        value: 130,
        itemStyle: {
          normal: {
            color: '#FF9C6C'
          }
        }
      }, {
        name: '预防',
        value: 120,
        itemStyle: {
          normal: {
            color: '#FF803F'
          }
        }
      }, {
        name: '掉包',
        value: 115,
        itemStyle: {
          normal: {
            color: '#FFB896'
          }
        }
      }, {
        name: '注射器',
        value: 110,
        itemStyle: {
          normal: {
            color: '#FFC7AC'
          }
        }
      }, {
        name: '记者',
        value: 105,
        itemStyle: {
          normal: {
            color: '#FFAA81'
          }
        }
      }, {
        name: '联合',
        value: 100,
        itemStyle: {
          normal: {
            color: '#FF8E57'
          }
        }
      }, {
        name: '计生委',
        value: 100,
        itemStyle: {
          normal: {
            color: '#FFB896'
          }
        }
      }, {
        name: '规范',
        value: 120,
        itemStyle: {
          normal: {
            color: '#FFC7AC'
          }
        }
      }],
      links: [{
        source: '五联疫苗事件',
        target: '疫苗'
      }, {
        source: '疫苗',
        target: '相关'
      }, {
        source: '疫苗',
        target: '开展'
      }, {
        source: '疫苗',
        target: '调查组'
      }, {
        source: '疫苗',
        target: '五联'
      }, {
        source: '疫苗',
        target: '接种'
      }, {
        source: '疫苗',
        target: '卫生'
      }, {
        source: '疫苗',
        target: '调查'
      }, {
        source: '疫苗',
        target: '服务中心'
      }, {
        source: '疫苗',
        target: '预防'
      }, {
        source: '疫苗',
        target: '掉包'
      }, {
        source: '疫苗',
        target: '注射器'
      }, {
        source: '疫苗',
        target: '记者'
      }, {
        source: '疫苗',
        target: '联合'
      }, {
        source: '疫苗',
        target: '计生委'
      }, {
        source: '疫苗',
        target: '规范'
      }]

    }]
  };
  chart6.setOption(option);
}

/*地图*/

function randomData() {
  return Math.round(Math.random() * 500);
}
$.get('../../Lib/map/china.json', function (chinaJson) {
  echarts.registerMap('china', chinaJson);

  var myChart = echarts.init(document.getElementById('compting-area'));
  var option = {
    backgroundColor: '#fff',

    tooltip: {
      trigger: 'item'
    },

    visualMap: {
      type: 'continuous',
      itemWidth: 10,
      itemHeight: 80,
      splitNumber: 7,
      //min: 0,
      // max: 2500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: false,
      color: ['#2452AD', '#7CCAFF']
    },
    series: [{
      name: '信息量',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '12'
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '12'
          }
        }
      },
      top: "4%",
      bottom: "7%",
      left: "3%",
      right: "3%",
      itemStyle: {
        normal: {
          //color:"#ff667c",
          borderColor: "#fff"
        }
      },
      data: [{ name: '北京', value: randomData() }, { name: '天津', value: randomData() }, { name: '上海', value: randomData() }, { name: '重庆', value: randomData() }, { name: '河北', value: randomData() }, { name: '河南', value: randomData() }, { name: '云南', value: randomData() }, { name: '辽宁', value: randomData() }, { name: '黑龙江', value: randomData() }, { name: '湖南', value: randomData() }, { name: '安徽', value: randomData() }, { name: '山东', value: randomData() }, { name: '新疆', value: randomData() }, { name: '江苏', value: randomData() }, { name: '浙江', value: randomData() }, { name: '江西', value: randomData() }, { name: '湖北', value: randomData() }, { name: '广西', value: randomData() }, { name: '甘肃', value: randomData() }, { name: '山西', value: randomData() }, { name: '内蒙古', value: randomData() }, { name: '陕西', value: randomData() }, { name: '吉林', value: randomData() }, { name: '福建', value: randomData() }, { name: '贵州', value: randomData() }, { name: '广东', value: randomData() }, { name: '青海', value: randomData() }, { name: '西藏', value: randomData() }, { name: '四川', value: randomData() }, { name: '宁夏', value: randomData() }, { name: '海南', value: randomData() }, { name: '台湾', value: randomData() }, { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }]
    }]
  };
  myChart.setOption(option);
});