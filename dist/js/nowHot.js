"use strict";

$(function () {
    var winH = document.body.clientHeight;
    var winHmap = winH - 50;
    var winH2 = winH - 300;
    var winH3 = winH - 100;
    $("#nh-map").height(winHmap);
    $(".nhbanner-list").css("top", winH2);
    $(".nh-arrow").css("top", winH3);

    $(".nh-arrow").click(function () {
        $('html, body').animate({
            scrollTop: winH
        }, 1000);
    });

    $(".nh-tab-tit li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".nh-tab-cont").find("ul").eq(index).show().siblings().hide();
    });

    //数字翻页效果
    var pagenum = 2121212121;
    $.animateToPrice(pagenum);
    setTimeout(function () {
        pagenum = pagenum + parseFloat(Math.random() * 1000);
        $.animateToPrice(pagenum);
    }, 5000);

    //百度map
    $(".bMapTypeControl li:nth-child(1)").click(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
        bMaInfo(BMAP_NORMAL_MAP);
    });
    $(".bMapTypeControl li:nth-child(2)").click(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
        bMaInfo(BMAP_HYBRID_MAP);
    });

    bMaInfo(BMAP_NORMAL_MAP);
});

//百度地图
function bMaInfo(maptypeNew) {
    var map = new BMap.Map("nh-map", { mapType: maptypeNew }); //,{minZoom:3,maxZoom:15});          // 创建地图实例

    map.centerAndZoom(new BMap.Point(2.08076, 36.68656), 4); // 初始化地图，设置中心点坐标和地图级别
    //map.centerAndZoom('北京', 4);                 // 初始化地图，设置中心点坐标和地图级别

    //map.enableScrollWheelZoom();                    // 支持缩放效果

    map.setMapStyle({
        styleJson: [{ "label": "水域", "featureType": "water", "elementType": "all", "stylers": { "color": "#294ba9" } }, { "label": "公路填充", "featureType": "highway", "elementType": "geometry.fill", "stylers": { "color": "#1d4794" } }, { "label": "公路线条", "featureType": "highway", "elementType": "geometry.stroke", "stylers": { "color": "#1d4794" } }, { "label": "主干道填充", "featureType": "arterial", "elementType": "geometry.fill", "stylers": { "color": "#113766" } }, { "label": "主干道线条", "featureType": "arterial", "elementType": "geometry.stroke", "stylers": { "color": "#113766" } }, { "label": "局部?", "featureType": "local", "elementType": "geometry", "stylers": { "color": "#08375a" } }, { "label": "陆地", "featureType": "land", "elementType": "all", "stylers": { "color": "#051f44" } }, { "label": "铁路填充", "featureType": "railway", "elementType": "geometry.fill", "stylers": { "color": "#0c1340" } }, { "label": "铁路线条", "featureType": "railway", "elementType": "geometry.stroke", "stylers": { "color": "#0c1340" } }, { "label": "建筑填充", "featureType": "building", "elementType": "geometry.fill", "stylers": { "color": "#021736" } }, { "label": "建筑默认", "featureType": "building", "elementType": "geometry", "stylers": { "color": "#021736" } }, { "label": "标签填充", "featureType": "all", "elementType": "labels.text.fill", "stylers": { "color": "#3b80c2" } }, { "label": "标签线条", "featureType": "all", "elementType": "labels.text.stroke", "stylers": { "weight": "normal", "color": "#000000" } }, { "label": "绿化", "featureType": "green", "elementType": "geometry", "stylers": { "color": "#154756" } }, { "label": "边界", "featureType": "boundary", "elementType": "all", "stylers": { "color": "#154756" } }, { "label": "人造物", "featureType": "manmade", "elementType": "all", "stylers": { "color": "#05365a" } }]

    });

    //map.addControl(new BMap.MapTypeControl());  //地图模式切换插件

    var point = [{ point: new BMap.Point(116.564239, 35.384455), link: 'http://www.baidu.com' }, { point: new BMap.Point(120.243591, 36.057281), link: 'http://www.sina.com' }, { point: new BMap.Point(118.117984, 24.342753), link: 'http://www.qq.com' }, { point: new BMap.Point(121.501614, 29.532305), link: 'http://www.sohu.com' }, { point: new BMap.Point(121.490259, 31.058378), link: 'http://www.163.com' }, { point: new BMap.Point(113.537884, 23.02506), link: 'http://www.sogou.com' }, { point: new BMap.Point(110.422488, 21.18728), link: 'http://www.taobao.com' }, { point: new BMap.Point(117.603435, 38.780506), link: 'http://www.jd.com' }, { point: new BMap.Point(121.580925, 38.883453), link: 'http://www.12306.cn' }, { point: new BMap.Point(47.776793, 22.615121), link: 'http://www.12306.cn' }, { point: new BMap.Point(10.701618, 51.407521), link: 'http://www.12306.cn' }, { point: new BMap.Point(3.489878, 48.267664), link: 'http://www.12306.cn' }];

    var myIcon = [new BMap.Icon("/images/eightGk1.png", new BMap.Size(44, 44)), new BMap.Icon("/images/eightGk2.png", new BMap.Size(20, 20)), new BMap.Icon("/images/eightGk3.png", new BMap.Size(10, 10)), new BMap.Icon("/images/eightGk4.png", new BMap.Size(4, 4))];
    var myIconLen = myIcon.length;
    function randomIcon() {
        return parseInt(Math.random() * myIconLen);;
    }
    var marker = new Array();
    for (var i = 0; i < point.length; i++) {
        marker[i] = new BMap.Marker(point[i].point, { icon: myIcon[randomIcon()] });
        map.addOverlay(marker[i]);
        //marker[i].addEventListener("click",newLink);
        //addClickHandler(point[i].link, marker[i]);
        //marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }
    function addClickHandler(url, marker) {
        marker.addEventListener("click", function (e) {
            newLink(url, e);
        });
    }
    function newLink(url, e) {
        var p = e.target;
        window.open(url);
    }
    // map.addEventListener("click",function(e){
    //     console.log(e.point.lng + "," + e.point.lat);
    // });
}