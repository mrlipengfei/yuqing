'use strict';

(function () {

    var proxy = {
        click: null
    };
    // var url = "../images/bigChartBg.png";
    var url = "http://img0.imgtn.bdimg.com/it/u=2162492919,3812034343&fm=27&gp=0.jpg";
    var imageDom = new Image();
    imageDom.src = url;

    var option = {
        tooltip: {
            trigger: 'item',
            // showDelay: 300,
            // hideDelay: 1000,
            enterable: true,
            borderColor: 'rgba(17,172,224,0.5)',
            borderWidth: 1,
            backgroundColor: 'rgba(0,26,47,0.8)',
            // backgroundColor:'rgba(190,200,205,0.8)',
            formatter: function formatter(params, ticket, callback) {
                // console.log(params);
                if (params.seriesType == "map") {
                    if (!params.name) {
                        return;
                    } else {
                        return '' + '<div style="font-size: 12px; padding: 10px;">' + '<div style=" margin-bottom:10px;">' + '<span style="font-size: 16px; padding-right: 10px; font-weight: bold;">' + params.data.name + '</span>' + '<span>' + params.data.value + '</span>' + '</div>' + '<div style="margin-bottom: 10px;">' + '<div style="display: inline-block;color:#24ef53; border-bottom:2px solid #24ef53;padding:0 10px;">' + '正面 ' + (params.data.value1 / params.data.value).toFixed(2) * 100 + '%' + '</div>' + '<div style="display: inline-block;color:#37d2ff; border-bottom:2px solid #37d2ff;padding:0 10px;">' + '中性 ' + (params.data.value2 / params.data.value).toFixed(2) * 100 + '%' + '</div>' + '<div style="display: inline-block;color:#ffa349; border-bottom:2px solid #ffa349;padding:0 10px;">' + '负面 ' + (params.data.value3 / params.data.value).toFixed(2) * 100 + '%' + '</div>' + '</div>' + '<ul>' + '<li style="line-height:28px;"><a style="color:#fff;">【转载】 从黄河文明到一带一路（第二卷）</a></li>' + '<li style="line-height:28px;"><a style="color:#fff;">【转载】 从黄河文明到一带一路（第二卷）</a></li>' + '<li style="line-height:28px;"><a style="color:#fff;">【转载】 从黄河文明到一带一路（第二卷）</a></li>' + '<li style="line-height:28px;"><a style="color:#fff;">【转载】 从黄河文明到一带一路（第二卷）</a></li>' + '</ul>' +
                        // '<a class="checkMore" style="color:#fff;font-size:12px; cursor:pointer; text-align: center; width: 100%; display: inline-block;">查看更多>></a>'+
                        '</p>';
                    }
                } else {
                    return params.data.value1 + '<br/>' + params.data.name;
                }
            }
        },
        geo: {
            map: 'china',
            zoom: 1.1,
            label: {
                emphasis: {
                    show: false
                }
            },
            show: true
            // symbol: "none",
            // itemStyle: {
            //     normal: {
            //         areaColor: {
            //             image: imageDom,
            //             repeat: 'repeat'
            //         }
            //     },
            // }
        },
        series: [{
            roam: false,
            type: "map",
            zoom: 1.1,
            map: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#0378a3',
                    borderWidth: 1,
                    areaColor: "#041026"
                },
                emphasis: {
                    areaColor: "#0378a3",
                    opacity: 0.7
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#bde4ff"
                    }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: "#bde4ff"
                    }
                }
            },
            showLegendSymbol: false
        }, {
            name: "正面",
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            type: 'effectScatter',
            effectType: 'ripple',
            coordinateSystem: 'geo',
            symbol: "circle",
            symbolSize: 8,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#26dde4'
                    // 纹理填充
                    // color: {
                    //     image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                    //     repeat: 'repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
                    // }
                }
            }
        }, {
            name: "中性",
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            type: 'effectScatter',
            effectType: 'ripple',
            coordinateSystem: 'geo',
            symbol: "circle",
            symbolSize: 8,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#00559d'
                }
            }
        }, {
            name: "负面",
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            type: 'effectScatter',
            effectType: 'ripple',
            coordinateSystem: 'geo',
            symbol: "circle",
            symbolSize: 8,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#ffc104'
                }
            }
        }]
    };
    // 指定图表的配置项和数据
    var main = function main(p) {
        $.get('../../Lib/map/china.json', function (chinaJson) {
            echarts.registerMap('china', chinaJson);
            _render_init_(p);
            _render_set_(p);
        });
        return proxy;
    };

    // 命名空间
    var _render_ = function _render_() {}
    // null

    // 指定图表的配置项，宽高
    ;var _render_init_ = function _render_init_(p) {
        var e = _render_.element = document.getElementById(p.id);

        e.style.width = p.width + 'px';
        e.style.height = p.height + 'px';
    };
    // 指定图表的数据
    var _render_set_ = function _render_set_(p) {

        option.series[0].data = p.data[0];
        option.series[1].data = p.data[1];
        option.series[2].data = p.data[2];
        option.series[3].data = p.data[3];

        var myChart = echarts.init(_render_.element);
        myChart.setOption(option);

        // var provinceList = [
        //     {
        //         "id": "shanghai",
        //         "name": "上海"
        //     }, {
        //         "id": "hebei",
        //         "name": "河北"
        //     }, {
        //         "id": "shanxi",
        //         "name": "山西"
        //     }, {
        //         "id": "neimenggu",
        //         "name": "内蒙古"
        //     }, {
        //         "id": "liaoning",
        //         "name": "辽宁"
        //     }, {
        //         "id": "jilin",
        //         "name": "吉林"
        //     }, {
        //         "id": "heilongjiang",
        //         "name": "黑龙江"
        //     }, {
        //         "id": "jiangsu",
        //         "name": "江苏"
        //     }, {
        //         "id": "zhejiang",
        //         "name": "浙江"
        //     }, {
        //         "id": "anhui",
        //         "name": "安徽"
        //     }, {
        //         "id": "fujian",
        //         "name": "福建"
        //     }, {
        //         "id": "jiangxi",
        //         "name": "江西"
        //     }, {
        //         "id": "shandong",
        //         "name": "山东"
        //     }, {
        //         "id": "henan",
        //         "name": "河南"
        //     }, {
        //         "id": "hubei",
        //         "name": "湖北"
        //     }, {
        //         "id": "hunan",
        //         "name": "湖南"
        //     }, {
        //         "id": "guangdong",
        //         "name": "广东"
        //     }, {
        //         "id": "guangxi",
        //         "name": "广西"
        //     }, {
        //         "id": "hainan",
        //         "name": "海南"
        //     }, {
        //         "id": "sichuan",
        //         "name": "四川"
        //     }, {
        //         "id": "guizhou",
        //         "name": "贵州"
        //     }, {
        //         "id": "yunnan",
        //         "name": "云南"
        //     }, {
        //         "id": "xizang",
        //         "name": "西藏"
        //     }, {
        //         "id": "shanxi1",
        //         "name": "陕西"
        //     }, {
        //         "id": "gansu",
        //         "name": "甘肃"
        //     }, {
        //         "id": "qinghai",
        //         "name": "青海"
        //     }, {
        //         "id": "ningxia",
        //         "name": "宁夏"
        //     }, {
        //         "id": "xinjiang",
        //         "name": "新疆"
        //     }, {
        //         "id": "beijing",
        //         "name": "北京"
        //     }, {
        //         "id": "tianjin",
        //         "name": "天津"
        //     }, {
        //         "id": "chongqing",
        //         "name": "重庆"
        //     }, {
        //         "id": "xianggang",
        //         "name": "香港"
        //     }, {
        //         "id": "aomen",
        //         "name": "澳门"
        //     }
        // ];
        // var provinceMap = {};
        // provinceList.forEach(function(item, i) {
        //     provinceMap[item.name] = item;
        // });
        // var currentMap = null;
        //
        // function showMap(id, name) {
        //
        //     option.series[0].map = id;
        //     option.geo.map = id;
        //
        //     myChart.setOption(option, true);
        //
        //     // id != "china" ? icon0.show() : icon0.hide();
        //
        //     currentMap = id;
        // }

        // function showProvince(province) {
        //     $.get('../../Lib/map/province/' + province.id + '.json', function(geoJson) {
        //         echarts.registerMap(province.id, geoJson);
        //         showMap(province.id, province.name);
        //     });
        // }

        // Draw icon
        // var zr = myChart.getZr();
        // var icon0 = new echarts.graphic.Rect({
        //     shape: {
        //         position: [100, 200], // 平移，默认值为 [0, 0]。
        //         scale: [2, 2], // 缩放，默认值为 [1, 1]。表示缩放的倍数。
        //         width: 100,
        //         height: 30
        //     },
        //     z: 2,
        //     style: {
        //         text: '返回全局地图',
        //         stroke: '#62a0f3',
        //         fill: '#eff5fe'
        //     },
        //     position: [zr.getWidth() - 108, zr.getHeight() - zr.getHeight() ],
        // });
        // var group = new echarts.graphic.Group();
        // group.add(icon0);
        // zr.add(group);
        //
        // icon0.on('click', function() {
        //
        //     option.series[1].data = p.data[1];
        //
        //     showMap("china", "中国");
        // });
        // 点击
        // myChart.on("click", function(d) {
        //
        // if (typeof proxy.click === "function") proxy.click(d);
        //
        //     if(currentMap == "china") {
        //     	//console.log(d)
        //         showProvince(provinceMap[d.name]);
        //         //echarts
        //         var data = [];
        //         for(var num = 1; num < 1; num++) {
        //             for(var i = 0; i < p.data[num].length; i++) {
        //                 if(d.name == p.data[num][i].province) {
        //                     data.push(p.data[num][i]);
        //                 }
        //             }
        //             option.series[num].data = data;
        //         }
        //     }
        //     //console.log(option)
        // });

        // showMap("china", "1111");
    };

    window.map_ls = main;
})();