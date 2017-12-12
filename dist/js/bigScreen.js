'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {
    layui.use(['laydate', 'form'], function () {
        var form = layui.form,
            laydate = layui.laydate;

        form.on('select(themeName)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
        laydate.render({
            elem: '#startDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });
        laydate.render({
            elem: '#endDate',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });
    });

    //图表数据
    //声量走势--柱图--模拟临时数据
    var optionList = {
        nameData: ['新闻', '论坛', '博客', '微博', '微信', '视频', '贴吧', '报刊'],
        seriesData: [100, 112, 93, 136, 118, 142, 144, 106]
    };
    //媒体类型覆盖--柱图--模拟临时数据
    var optionList2 = {
        nameData: ['微信公众号', '新浪网', '长城网', '东方财富网', '百度', '突袭新闻网', '浦东新闻网', '新浪微博', '和讯网', '同花顺金融服务网'],
        seriesData: [460, 342, 274, 336, 718, 442, 374, 536, 418, 442]
    };
    //情感分布--饼图--模拟临时数据
    var optionList3 = [{
        value: 20,
        name: '正面'
    }, {
        value: 45,
        name: '中性'
    }, {
        value: 10,
        name: '负面'
    }];
    //声量走势--折线图--模拟临时数据
    var optionList4 = {
        dateData: ['2016-05-12', '2016-05-15', '2016-05-17', '2016-05-19', '2016-05-21', '2016-05-23', '2016-05-25'],
        seriesData: [{
            name: '全部',
            data: [211, 311, 241, 331, 412, 553, 610]
        }, {
            name: '新闻',
            data: [381, 471, 455, 473, 532, 513, 500]
        }, {
            name: "论坛",
            data: [321, 442, 322, 315, 303, 262, 240]
        }, {
            name: "博客",
            data: [250, 290, 340, 360, 290, 274, 290]
        }, {
            name: "微博",
            data: [281, 271, 255, 173, 232, 213, 200]
        }, {
            name: "微信",
            data: [221, 201, 213, 192, 180, 162, 150]
        }, {
            name: "视频",
            data: [191, 211, 150, 190, 140, 160, 223]
        }, {
            name: "贴吧",
            data: [200, 190, 160, 170, 150, 170, 190]
        }, {
            name: "报刊",
            data: [180, 170, 190, 160, 219, 151, 190]
        }]
    };
    //情感走势--折线图--模拟临时数据
    var optionList5 = {
        dateData: ['2016-05-12', '2016-05-15', '2016-05-17', '2016-05-19', '2016-05-21', '2016-05-23', '2016-05-25'],
        seriesData: [{
            name: '正面',
            data: [211, 311, 241, 331, 412, 553, 610]
        }, {
            name: '中性',
            data: [381, 471, 455, 473, 532, 513, 500]
        }, {
            name: "负面",
            data: [321, 442, 322, 315, 303, 262, 240]
        }]
    };
    //热点词云--词云图--模拟临时数据
    var bubbleData = [

    // value    数值，可选参数
    // color    颜色，可选参数
    // name     名称，必选参数

    { value: 1, color: '#ffae00', name: '一带一路会议' /* 可以自定义属性 , id : '???'*/ }, { value: .8, color: '#007bed', name: '丝绸之路' }, { value: .6, color: '#0047b1', name: '调查组' }, { value: .4, color: '#007bed', name: '卫生' }, { value: .2, color: '#007bed', name: '医药' }, { value: .0, color: '#007bed', name: '相关' }, { value: .4, color: '#0047b1', name: '接种' }, { value: .0, color: '#0047b1', name: '反恐' }, { value: .0, color: '#0047b1', name: '记者' }, { value: .0, color: '#0047b1', name: '乐视' }];
    //地图--模拟临时数据
    function randomData() {
        return Math.round(Math.random() * 200);
    };
    var mapData = [[{
        name: "北京",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "安徽",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "上海",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "广州",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "吉林",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "山东",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "黑龙江",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "内蒙古",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "新疆",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "西藏",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "湖南",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "云南",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "四川",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "青海",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "甘肃",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "贵州",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "湖北",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "江苏",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "台湾",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "海南",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "辽宁",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "福建",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "浙江",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "广东",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "广西",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "陕西",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "山西",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "宁夏",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "重庆",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "天津",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "河北",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "河南",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, {
        name: "江西",
        value: randomData(),
        value1: randomData(),
        value2: randomData(),
        value3: randomData()
    }, { name: '巴音郭楞蒙古自治州', value: randomData() }, { name: '和田地区', value: randomData() }, { name: '哈密地区', value: randomData() }, { name: '阿克苏地区', value: randomData() }, { name: '阿勒泰地区', value: randomData() }, { name: '喀什地区', value: randomData() }, { name: '塔城地区', value: randomData() }, { name: '昌吉回族自治州', value: randomData() }, { name: '克孜勒苏柯尔克孜自治州', value: randomData() }, { name: '吐鲁番地区', value: randomData() }, { name: '伊犁哈萨克自治州', value: randomData() }, { name: '博尔塔拉蒙古自治州', value: randomData() }, { name: '乌鲁木齐市', value: randomData() }, { name: '克拉玛依市', value: randomData() }, { name: '阿拉尔市', value: randomData() }, { name: '图木舒克市', value: randomData() }, { name: '五家渠市', value: randomData() }, { name: '石河子市', value: randomData() }, { name: '那曲地区', value: randomData() }, { name: '阿里地区', value: randomData() }, { name: '日喀则地区', value: randomData() }, { name: '林芝地区', value: randomData() }, { name: '昌都地区', value: randomData() }, { name: '山南地区', value: randomData() }, { name: '拉萨市', value: randomData() }, { name: '呼伦贝尔市', value: randomData() }, { name: '阿拉善盟', value: randomData() }, { name: '锡林郭勒盟', value: randomData() }, { name: '鄂尔多斯市', value: randomData() }, { name: '赤峰市', value: randomData() }, { name: '巴彦淖尔市', value: randomData() }, { name: '通辽市', value: randomData() }, { name: '乌兰察布市', value: randomData() }, { name: '兴安盟', value: randomData() }, { name: '包头市', value: randomData() }, { name: '呼和浩特市', value: randomData() }, { name: '乌海市', value: randomData() }, { name: '海西蒙古族藏族自治州', value: randomData() }, { name: '玉树藏族自治州', value: randomData() }, { name: '果洛藏族自治州', value: randomData() }, { name: '海南藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '海北藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '黄南藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '海东地区', value: Math.round(Math.random() * 1000) }, { name: '西宁市', value: Math.round(Math.random() * 1000) }, { name: '甘孜藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '阿坝藏族羌族自治州', value: Math.round(Math.random() * 1000) }, { name: '凉山彝族自治州', value: Math.round(Math.random() * 1000) }, { name: '绵阳市', value: Math.round(Math.random() * 1000) }, { name: '达州市', value: Math.round(Math.random() * 1000) }, { name: '广元市', value: Math.round(Math.random() * 1000) }, { name: '雅安市', value: Math.round(Math.random() * 1000) }, { name: '宜宾市', value: Math.round(Math.random() * 1000) }, { name: '乐山市', value: Math.round(Math.random() * 1000) }, { name: '南充市', value: Math.round(Math.random() * 1000) }, { name: '巴中市', value: Math.round(Math.random() * 1000) }, { name: '泸州市', value: Math.round(Math.random() * 1000) }, { name: '成都市', value: Math.round(Math.random() * 1000) }, { name: '资阳市', value: Math.round(Math.random() * 1000) }, { name: '攀枝花市', value: Math.round(Math.random() * 1000) }, { name: '眉山市', value: Math.round(Math.random() * 1000) }, { name: '广安市', value: Math.round(Math.random() * 1000) }, { name: '德阳市', value: Math.round(Math.random() * 1000) }, { name: '内江市', value: Math.round(Math.random() * 1000) }, { name: '遂宁市', value: Math.round(Math.random() * 1000) }, { name: '自贡市', value: Math.round(Math.random() * 1000) }, { name: '黑河市', value: Math.round(Math.random() * 1000) }, { name: '大兴安岭地区', value: Math.round(Math.random() * 1000) }, { name: '哈尔滨市', value: Math.round(Math.random() * 1000) }, { name: '齐齐哈尔市', value: Math.round(Math.random() * 1000) }, { name: '牡丹江市', value: Math.round(Math.random() * 1000) }, { name: '绥化市', value: Math.round(Math.random() * 1000) }, { name: '伊春市', value: Math.round(Math.random() * 1000) }, { name: '佳木斯市', value: Math.round(Math.random() * 1000) }, { name: '鸡西市', value: Math.round(Math.random() * 1000) }, { name: '双鸭山市', value: Math.round(Math.random() * 1000) }, { name: '大庆市', value: Math.round(Math.random() * 1000) }, { name: '鹤岗市', value: Math.round(Math.random() * 1000) }, { name: '七台河市', value: Math.round(Math.random() * 1000) }, { name: '酒泉市', value: Math.round(Math.random() * 1000) }, { name: '张掖市', value: Math.round(Math.random() * 1000) }, { name: '甘南藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '武威市', value: Math.round(Math.random() * 1000) }, { name: '陇南市', value: Math.round(Math.random() * 1000) }, { name: '庆阳市', value: Math.round(Math.random() * 1000) }, { name: '白银市', value: Math.round(Math.random() * 1000) }, { name: '定西市', value: Math.round(Math.random() * 1000) }, { name: '天水市', value: Math.round(Math.random() * 1000) }, { name: '兰州市', value: Math.round(Math.random() * 1000) }, { name: '平凉市', value: Math.round(Math.random() * 1000) }, { name: '临夏回族自治州', value: Math.round(Math.random() * 1000) }, { name: '金昌市', value: Math.round(Math.random() * 1000) }, { name: '嘉峪关市', value: Math.round(Math.random() * 1000) }, { name: '普洱市', value: Math.round(Math.random() * 1000) }, { name: '红河哈尼族彝族自治州', value: Math.round(Math.random() * 1000) }, { name: '文山壮族苗族自治州', value: Math.round(Math.random() * 1000) }, { name: '曲靖市', value: Math.round(Math.random() * 1000) }, { name: '楚雄彝族自治州', value: Math.round(Math.random() * 1000) }, { name: '大理白族自治州', value: Math.round(Math.random() * 1000) }, { name: '临沧市', value: Math.round(Math.random() * 1000) }, { name: '迪庆藏族自治州', value: Math.round(Math.random() * 1000) }, { name: '昭通市', value: Math.round(Math.random() * 1000) }, { name: '昆明市', value: Math.round(Math.random() * 1000) }, { name: '丽江市', value: Math.round(Math.random() * 1000) }, { name: '西双版纳傣族自治州', value: Math.round(Math.random() * 1000) }, { name: '保山市', value: Math.round(Math.random() * 1000) }, { name: '玉溪市', value: Math.round(Math.random() * 1000) }, { name: '怒江傈僳族自治州', value: Math.round(Math.random() * 1000) }, { name: '德宏傣族景颇族自治州', value: Math.round(Math.random() * 1000) }, { name: '百色市', value: Math.round(Math.random() * 1000) }, { name: '河池市', value: Math.round(Math.random() * 1000) }, { name: '桂林市', value: Math.round(Math.random() * 1000) }, { name: '南宁市', value: Math.round(Math.random() * 1000) }, { name: '柳州市', value: Math.round(Math.random() * 1000) }, { name: '崇左市', value: Math.round(Math.random() * 1000) }, { name: '来宾市', value: Math.round(Math.random() * 1000) }, { name: '玉林市', value: Math.round(Math.random() * 1000) }, { name: '梧州市', value: Math.round(Math.random() * 1000) }, { name: '贺州市', value: Math.round(Math.random() * 1000) }, { name: '钦州市', value: Math.round(Math.random() * 1000) }, { name: '贵港市', value: Math.round(Math.random() * 1000) }, { name: '防城港市', value: Math.round(Math.random() * 1000) }, { name: '北海市', value: Math.round(Math.random() * 1000) }, { name: '怀化市', value: Math.round(Math.random() * 1000) }, { name: '永州市', value: Math.round(Math.random() * 1000) }, { name: '邵阳市', value: Math.round(Math.random() * 1000) }, { name: '郴州市', value: Math.round(Math.random() * 1000) }, { name: '常德市', value: Math.round(Math.random() * 1000) }, { name: '湘西土家族苗族自治州', value: Math.round(Math.random() * 1000) }, { name: '衡阳市', value: Math.round(Math.random() * 1000) }, { name: '岳阳市', value: Math.round(Math.random() * 1000) }, { name: '益阳市', value: Math.round(Math.random() * 1000) }, { name: '长沙市', value: Math.round(Math.random() * 1000) }, { name: '株洲市', value: Math.round(Math.random() * 1000) }, { name: '张家界市', value: Math.round(Math.random() * 1000) }, { name: '娄底市', value: Math.round(Math.random() * 1000) }, { name: '湘潭市', value: Math.round(Math.random() * 1000) }, { name: '榆林市', value: Math.round(Math.random() * 1000) }, { name: '延安市', value: Math.round(Math.random() * 1000) }, { name: '汉中市', value: Math.round(Math.random() * 1000) }, { name: '安康市', value: Math.round(Math.random() * 1000) }, { name: '商洛市', value: Math.round(Math.random() * 1000) }, { name: '宝鸡市', value: Math.round(Math.random() * 1000) }, { name: '渭南市', value: Math.round(Math.random() * 1000) }, { name: '咸阳市', value: Math.round(Math.random() * 1000) }, { name: '西安市', value: Math.round(Math.random() * 1000) }, { name: '铜川市', value: Math.round(Math.random() * 1000) }, { name: '清远市', value: Math.round(Math.random() * 1000) }, { name: '韶关市', value: Math.round(Math.random() * 1000) }, { name: '湛江市', value: Math.round(Math.random() * 1000) }, { name: '梅州市', value: Math.round(Math.random() * 1000) }, { name: '河源市', value: Math.round(Math.random() * 1000) }, { name: '肇庆市', value: Math.round(Math.random() * 1000) }, { name: '惠州市', value: Math.round(Math.random() * 1000) }, { name: '茂名市', value: Math.round(Math.random() * 1000) }, { name: '江门市', value: Math.round(Math.random() * 1000) }, { name: '阳江市', value: Math.round(Math.random() * 1000) }, { name: '云浮市', value: Math.round(Math.random() * 1000) }, { name: '广州市', value: Math.round(Math.random() * 1000) }, { name: '汕尾市', value: Math.round(Math.random() * 1000) }, { name: '揭阳市', value: Math.round(Math.random() * 1000) }, { name: '珠海市', value: Math.round(Math.random() * 1000) }, { name: '佛山市', value: Math.round(Math.random() * 1000) }, { name: '潮州市', value: Math.round(Math.random() * 1000) }, { name: '汕头市', value: Math.round(Math.random() * 1000) }, { name: '深圳市', value: Math.round(Math.random() * 1000) }, { name: '东莞市', value: Math.round(Math.random() * 1000) }, { name: '中山市', value: Math.round(Math.random() * 1000) }, { name: '延边朝鲜族自治州', value: Math.round(Math.random() * 1000) }, { name: '吉林市', value: Math.round(Math.random() * 1000) }, { name: '白城市', value: Math.round(Math.random() * 1000) }, { name: '松原市', value: Math.round(Math.random() * 1000) }, { name: '长春市', value: Math.round(Math.random() * 1000) }, { name: '白山市', value: Math.round(Math.random() * 1000) }, { name: '通化市', value: Math.round(Math.random() * 1000) }, { name: '四平市', value: Math.round(Math.random() * 1000) }, { name: '辽源市', value: Math.round(Math.random() * 1000) }, { name: '承德市', value: Math.round(Math.random() * 1000) }, { name: '张家口市', value: Math.round(Math.random() * 1000) }, { name: '保定市', value: Math.round(Math.random() * 1000) }, { name: '唐山市', value: Math.round(Math.random() * 1000) }, { name: '沧州市', value: Math.round(Math.random() * 1000) }, { name: '石家庄市', value: Math.round(Math.random() * 1000) }, { name: '邢台市', value: Math.round(Math.random() * 1000) }, { name: '邯郸市', value: Math.round(Math.random() * 1000) }, { name: '秦皇岛市', value: Math.round(Math.random() * 1000) }, { name: '衡水市', value: Math.round(Math.random() * 1000) }, { name: '廊坊市', value: Math.round(Math.random() * 1000) }, { name: '恩施土家族苗族自治州', value: Math.round(Math.random() * 1000) }, { name: '十堰市', value: Math.round(Math.random() * 1000) }, { name: '宜昌市', value: Math.round(Math.random() * 1000) }, { name: '襄樊市', value: Math.round(Math.random() * 1000) }, { name: '黄冈市', value: Math.round(Math.random() * 1000) }, { name: '荆州市', value: Math.round(Math.random() * 1000) }, { name: '荆门市', value: Math.round(Math.random() * 1000) }, { name: '咸宁市', value: Math.round(Math.random() * 1000) }, { name: '随州市', value: Math.round(Math.random() * 1000) }, { name: '孝感市', value: Math.round(Math.random() * 1000) }, { name: '武汉市', value: Math.round(Math.random() * 1000) }, { name: '黄石市', value: Math.round(Math.random() * 1000) }, { name: '神农架林区', value: Math.round(Math.random() * 1000) }, { name: '天门市', value: Math.round(Math.random() * 1000) }, { name: '仙桃市', value: Math.round(Math.random() * 1000) }, { name: '潜江市', value: Math.round(Math.random() * 1000) }, { name: '鄂州市', value: Math.round(Math.random() * 1000) }, { name: '遵义市', value: Math.round(Math.random() * 1000) }, { name: '黔东南苗族侗族自治州', value: Math.round(Math.random() * 1000) }, { name: '毕节地区', value: Math.round(Math.random() * 1000) }, { name: '黔南布依族苗族自治州', value: Math.round(Math.random() * 1000) }, { name: '铜仁地区', value: Math.round(Math.random() * 1000) }, { name: '黔西南布依族苗族自治州', value: Math.round(Math.random() * 1000) }, { name: '六盘水市', value: Math.round(Math.random() * 1000) }, { name: '安顺市', value: Math.round(Math.random() * 1000) }, { name: '贵阳市', value: Math.round(Math.random() * 1000) }, { name: '烟台市', value: Math.round(Math.random() * 1000) }, { name: '临沂市', value: Math.round(Math.random() * 1000) }, { name: '潍坊市', value: Math.round(Math.random() * 1000) }, { name: '青岛市', value: Math.round(Math.random() * 1000) }, { name: '菏泽市', value: Math.round(Math.random() * 1000) }, { name: '济宁市', value: Math.round(Math.random() * 1000) }, { name: '德州市', value: Math.round(Math.random() * 1000) }, { name: '滨州市', value: Math.round(Math.random() * 1000) }, { name: '聊城市', value: Math.round(Math.random() * 1000) }, { name: '东营市', value: Math.round(Math.random() * 1000) }, { name: '济南市', value: Math.round(Math.random() * 1000) }, { name: '泰安市', value: Math.round(Math.random() * 1000) }, { name: '威海市', value: Math.round(Math.random() * 1000) }, { name: '日照市', value: Math.round(Math.random() * 1000) }, { name: '淄博市', value: Math.round(Math.random() * 1000) }, { name: '枣庄市', value: Math.round(Math.random() * 1000) }, { name: '莱芜市', value: Math.round(Math.random() * 1000) }, { name: '赣州市', value: Math.round(Math.random() * 1000) }, { name: '吉安市', value: Math.round(Math.random() * 1000) }, { name: '上饶市', value: Math.round(Math.random() * 1000) }, { name: '九江市', value: Math.round(Math.random() * 1000) }, { name: '抚州市', value: Math.round(Math.random() * 1000) }, { name: '宜春市', value: Math.round(Math.random() * 1000) }, { name: '南昌市', value: Math.round(Math.random() * 1000) }, { name: '景德镇市', value: Math.round(Math.random() * 1000) }, { name: '萍乡市', value: Math.round(Math.random() * 1000) }, { name: '鹰潭市', value: Math.round(Math.random() * 1000) }, { name: '新余市', value: Math.round(Math.random() * 1000) }, { name: '南阳市', value: Math.round(Math.random() * 1000) }, { name: '信阳市', value: Math.round(Math.random() * 1000) }, { name: '洛阳市', value: Math.round(Math.random() * 1000) }, { name: '驻马店市', value: Math.round(Math.random() * 1000) }, { name: '周口市', value: Math.round(Math.random() * 1000) }, { name: '商丘市', value: Math.round(Math.random() * 1000) }, { name: '三门峡市', value: Math.round(Math.random() * 1000) }, { name: '新乡市', value: Math.round(Math.random() * 1000) }, { name: '平顶山市', value: Math.round(Math.random() * 1000) }, { name: '郑州市', value: Math.round(Math.random() * 1000) }, { name: '安阳市', value: Math.round(Math.random() * 1000) }, { name: '开封市', value: Math.round(Math.random() * 1000) }, { name: '焦作市', value: Math.round(Math.random() * 1000) }, { name: '许昌市', value: Math.round(Math.random() * 1000) }, { name: '濮阳市', value: Math.round(Math.random() * 1000) }, { name: '漯河市', value: Math.round(Math.random() * 1000) }, { name: '鹤壁市', value: Math.round(Math.random() * 1000) }, { name: '大连市', value: Math.round(Math.random() * 1000) }, { name: '朝阳市', value: Math.round(Math.random() * 1000) }, { name: '丹东市', value: Math.round(Math.random() * 1000) }, { name: '铁岭市', value: Math.round(Math.random() * 1000) }, { name: '沈阳市', value: Math.round(Math.random() * 1000) }, { name: '抚顺市', value: Math.round(Math.random() * 1000) }, { name: '葫芦岛市', value: Math.round(Math.random() * 1000) }, { name: '阜新市', value: Math.round(Math.random() * 1000) }, { name: '锦州市', value: Math.round(Math.random() * 1000) }, { name: '鞍山市', value: Math.round(Math.random() * 1000) }, { name: '本溪市', value: Math.round(Math.random() * 1000) }, { name: '营口市', value: Math.round(Math.random() * 1000) }, { name: '辽阳市', value: Math.round(Math.random() * 1000) }, { name: '盘锦市', value: Math.round(Math.random() * 1000) }, { name: '忻州市', value: Math.round(Math.random() * 1000) }, { name: '吕梁市', value: Math.round(Math.random() * 1000) }, { name: '临汾市', value: Math.round(Math.random() * 1000) }, { name: '晋中市', value: Math.round(Math.random() * 1000) }, { name: '运城市', value: Math.round(Math.random() * 1000) }, { name: '大同市', value: Math.round(Math.random() * 1000) }, { name: '长治市', value: Math.round(Math.random() * 1000) }, { name: '朔州市', value: Math.round(Math.random() * 1000) }, { name: '晋城市', value: Math.round(Math.random() * 1000) }, { name: '太原市', value: Math.round(Math.random() * 1000) }, { name: '阳泉市', value: Math.round(Math.random() * 1000) }, { name: '六安市', value: Math.round(Math.random() * 1000) }, { name: '安庆市', value: Math.round(Math.random() * 1000) }, { name: '滁州市', value: Math.round(Math.random() * 1000) }, { name: '宣城市', value: Math.round(Math.random() * 1000) }, { name: '阜阳市', value: Math.round(Math.random() * 1000) }, { name: '宿州市', value: Math.round(Math.random() * 1000) }, { name: '黄山市', value: Math.round(Math.random() * 1000) }, { name: '巢湖市', value: Math.round(Math.random() * 1000) }, { name: '亳州市', value: Math.round(Math.random() * 1000) }, { name: '池州市', value: Math.round(Math.random() * 1000) }, { name: '合肥市', value: Math.round(Math.random() * 1000) }, { name: '蚌埠市', value: Math.round(Math.random() * 1000) }, { name: '芜湖市', value: Math.round(Math.random() * 1000) }, { name: '淮北市', value: Math.round(Math.random() * 1000) }, { name: '淮南市', value: Math.round(Math.random() * 1000) }, { name: '马鞍山市', value: Math.round(Math.random() * 1000) }, { name: '铜陵市', value: Math.round(Math.random() * 1000) }, { name: '南平市', value: Math.round(Math.random() * 1000) }, { name: '三明市', value: Math.round(Math.random() * 1000) }, { name: '龙岩市', value: Math.round(Math.random() * 1000) }, { name: '宁德市', value: Math.round(Math.random() * 1000) }, { name: '福州市', value: Math.round(Math.random() * 1000) }, { name: '漳州市', value: Math.round(Math.random() * 1000) }, { name: '泉州市', value: Math.round(Math.random() * 1000) }, { name: '莆田市', value: Math.round(Math.random() * 1000) }, { name: '厦门市', value: Math.round(Math.random() * 1000) }, { name: '丽水市', value: Math.round(Math.random() * 1000) }, { name: '杭州市', value: Math.round(Math.random() * 1000) }, { name: '温州市', value: Math.round(Math.random() * 1000) }, { name: '宁波市', value: Math.round(Math.random() * 1000) }, { name: '舟山市', value: Math.round(Math.random() * 1000) }, { name: '台州市', value: Math.round(Math.random() * 1000) }, { name: '金华市', value: Math.round(Math.random() * 1000) }, { name: '衢州市', value: Math.round(Math.random() * 1000) }, { name: '绍兴市', value: Math.round(Math.random() * 1000) }, { name: '嘉兴市', value: Math.round(Math.random() * 1000) }, { name: '湖州市', value: Math.round(Math.random() * 1000) }, { name: '盐城市', value: Math.round(Math.random() * 1000) }, { name: '徐州市', value: Math.round(Math.random() * 1000) }, { name: '南通市', value: Math.round(Math.random() * 1000) }, { name: '淮安市', value: Math.round(Math.random() * 1000) }, { name: '苏州市', value: Math.round(Math.random() * 1000) }, { name: '宿迁市', value: Math.round(Math.random() * 1000) }, { name: '连云港市', value: Math.round(Math.random() * 1000) }, { name: '扬州市', value: Math.round(Math.random() * 1000) }, { name: '南京市', value: Math.round(Math.random() * 1000) }, { name: '泰州市', value: Math.round(Math.random() * 1000) }, { name: '无锡市', value: Math.round(Math.random() * 1000) }, { name: '常州市', value: Math.round(Math.random() * 1000) }, { name: '镇江市', value: Math.round(Math.random() * 1000) }, { name: '吴忠市', value: Math.round(Math.random() * 1000) }, { name: '中卫市', value: Math.round(Math.random() * 1000) }, { name: '固原市', value: Math.round(Math.random() * 1000) }, { name: '银川市', value: Math.round(Math.random() * 1000) }, { name: '石嘴山市', value: Math.round(Math.random() * 1000) }, { name: '儋州市', value: Math.round(Math.random() * 1000) }, { name: '文昌市', value: Math.round(Math.random() * 1000) }, { name: '乐东黎族自治县', value: Math.round(Math.random() * 1000) }, { name: '三亚市', value: Math.round(Math.random() * 1000) }, { name: '琼中黎族苗族自治县', value: Math.round(Math.random() * 1000) }, { name: '东方市', value: Math.round(Math.random() * 1000) }, { name: '海口市', value: Math.round(Math.random() * 1000) }, { name: '万宁市', value: Math.round(Math.random() * 1000) }, { name: '澄迈县', value: Math.round(Math.random() * 1000) }, { name: '白沙黎族自治县', value: Math.round(Math.random() * 1000) }, { name: '琼海市', value: Math.round(Math.random() * 1000) }, { name: '昌江黎族自治县', value: Math.round(Math.random() * 1000) }, { name: '临高县', value: Math.round(Math.random() * 1000) }, { name: '陵水黎族自治县', value: Math.round(Math.random() * 1000) }, { name: '屯昌县', value: Math.round(Math.random() * 1000) }, { name: '定安县', value: Math.round(Math.random() * 1000) }, { name: '保亭黎族苗族自治县', value: Math.round(Math.random() * 1000) }, { name: '五指山市', value: Math.round(Math.random() * 1000) }], [{
        "province": "江苏",
        "district": "海门",
        "value": [121.15, 31.89, randomData()]
    }, {
        "province": "内蒙古",
        "district": "鄂尔多斯",
        "value": [109.781327, 39.608266, randomData()]
    }, {
        "province": "山东",
        "district": "招远",
        "value": [120.38, 37.35, randomData()]
    }, {
        "province": "浙江",
        "district": "舟山",
        "value": [122.207216, 29.985295, randomData()]
    }, {
        "province": "黑龙江",
        "district": "齐齐哈尔",
        "value": [123.97, 47.33, randomData()]
    }, {
        "province": "江苏",
        "district": "盐城",
        "value": [120.13, 33.38, randomData()]
    }, {
        "province": "内蒙古",
        "district": "赤峰",
        "value": [118.87, 42.28, randomData()]
    }, {
        "province": "山东",
        "district": "青岛",
        "value": [120.33, 36.07, randomData()]
    }], [{
        "province": "内蒙古",
        "district": "赤峰",
        "value": [111.15, 41.89, randomData()]
    }, {
        "province": "内蒙古",
        "district": "鄂尔多斯",
        "value": [109.78, 39.60, randomData()]
    }, {
        "province": "山东",
        "district": "济宁",
        "value": [118.08, 37.30, randomData()]
    }, {
        "province": "黑龙江",
        "district": "齐齐哈尔",
        "value": [126.97, 46.33, randomData()]
    }], [{
        "province": "湖北",
        "district": "遵义",
        "value": [106.9, 27.7, randomData()]
    }, {
        "province": "内蒙古",
        "district": "鄂尔多斯",
        "value": [109.78, 39.6, randomData()]
    }, {
        "province": "江苏",
        "district": "盐城",
        "value": [120.13, 33.38, randomData()]
    }, {
        "province": "内蒙古",
        "district": "赤峰",
        "value": [118.87, 42.28, randomData()]
    }, {
        "province": "山东",
        "district": "青岛",
        "value": [120.33, 36.07, randomData()]
    }]];
    //初始化四个Echart图表
    chart1(optionList);
    chart2(optionList2);
    chart3(optionList3);
    chart4(optionList4);
    chart5(optionList5);
    chart6(bubbleData);
    chart7(mapData);

    //页面尺寸发生变化，重绘所有Echart图表
    window.onresize = function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
    };
});
//图表封装方法
//声量走势--柱图
function chart1(optionList) {
    chart1 = echarts.init(document.getElementById('bar'));
    var option = {
        tooltip: {
            trigger: 'axis',
            borderColor: '#989ca1',
            borderWidth: 1,
            // backgroundColor:'rgba(190,200,205,0.8)',
            backgroundColor: 'rgba(90,97,112,0.9)',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function formatter(params) {
                console.log(params);
                return '<span style="color:#0f9eaa;font-weight:bold;">' + params[0].value + '</span>' + '<br/>';
            }
        },
        // renderAsImage:"../images/bigChartBg.png",
        legend: {
            data: optionList.nameData
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '2%',
            top: '5%',
            containLabel: true
        },
        yAxis: [{
            type: 'category',
            data: optionList.nameData,
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#989ca1',
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,47,66,0.5)',
                    width: 2,
                    opacity: 0.5
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
        xAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#989ca1'
                },
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,47,66,0.5)',
                    width: 2,
                    opacity: 0.5
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
            name: '媒体分析 ',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 1, color: '#1079d1'
                    }, {
                        offset: 0, color: '#004986'
                    }]),
                    borderWidth: 2,
                    borderType: 'solid',
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 1, color: '#1079d1'
                    }, {
                        offset: 0, color: '#004986'
                    }])
                }
            },
            data: optionList.seriesData
        }]
    };
    chart1.setOption(option);
}
//媒体类型覆盖--柱图
function chart2(optionList) {

    //处理临时数据
    var nameDataArr = [];
    var nameStr = '';
    for (var i = 0; i < optionList.nameData.length; i++) {
        if (optionList.nameData[i].length > 3) {
            nameStr = optionList.nameData[i].substring(0, 3) + "...";
        } else {
            nameStr = optionList.nameData[i];
        }
        nameDataArr.push(nameStr);
    }

    chart2 = echarts.init(document.getElementById('bar2'));
    var option = {
        tooltip: {
            trigger: 'axis',
            borderColor: '#989ca1',
            borderWidth: 1,
            // backgroundColor:'rgba(190,200,205,0.8)',
            backgroundColor: 'rgba(90,97,112,0.9)',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function formatter(params) {
                // console.log(params);
                return '<span style="color:#0f9eaa;font-weight:bold;">' + params[0].value + '</span>' + '<br/>';
            }
        },
        legend: {
            data: nameDataArr
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '13%',
            top: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: nameDataArr,
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                margin: 10,
                interval: 0,
                textStyle: {
                    color: '#989ca1',
                    fontSize: 10
                },
                rotate: 40
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,47,66,0.5)',
                    width: 2,
                    opacity: 0.5
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
        yAxis: [{
            type: 'value',
            minInterval: 200,
            axisTick: {
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#989ca1'
                },
                show: true

            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,47,66,0.5)',
                    width: 2,
                    opacity: 0.5
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
            name: '媒体分析 ',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    borderColor: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0, color: '#1b80dc'
                    }, {
                        offset: 1, color: '#00bee9'
                    }]),
                    borderWidth: 2,
                    borderType: 'solid',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#00bee9'
                    }, {
                        offset: 1, color: '#1c81dc'
                    }])
                }
            },
            data: optionList.seriesData
        }]
    };
    chart2.setOption(option);
}
//情感分布--饼图
function chart3(seriesData) {

    chart3 = echarts.init(document.getElementById('pie'));
    var option = {
        color: ['#26dde4', '#00559d', '#ffc104'],
        tooltip: {
            show: false,
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
        calculable: true,
        series: [{
            z: 0,
            name: '',
            type: 'pie',
            silent: true,
            center: ['46%', '50%'],
            radius: ['67%', '68%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 23,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,106,191,0.6)' //颜色填充
                    }
                },
                tooltip: {
                    show: false,
                    trigger: ''
                }
            }]
        }, {
            z: 0,
            name: '',
            type: 'pie',
            silent: true,
            center: ['46%', '50%'],
            radius: ['56%', '57%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 23,
                itemStyle: {
                    normal: {
                        color: 'rgba(55,126,135,0.6)' //颜色填充
                    }

                },
                tooltip: {
                    show: false,
                    trigger: ''
                }
            }]
        }, {
            z: 0,
            name: '',
            type: 'pie',
            silent: true,
            center: ['46%', '50%'],
            radius: ['19%', '20%'],
            labelLine: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: 23,
                itemStyle: {
                    normal: {
                        color: 'rgba(28,49,51,0.6)' //颜色填充
                    }

                },
                tooltip: {
                    show: false,
                    trigger: ''
                }
            }]
        }, {
            name: '',
            type: 'pie',
            center: ['46%', '50%'],
            radius: ['23%', '55%'],
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{b}\n\n{d}%",
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 14
                    },
                    length: 10,
                    length2: 25,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: seriesData
        }]
    };
    chart3.setOption(option);
}
//声量走势--折线图
function chart4(optionList) {

    //处理临时数据
    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 2;
    }
    // console.log(optionList.seriesData);

    chart4 = echarts.init(document.getElementById('line'));
    var option = {
        tooltip: {
            trigger: 'axis',
            borderColor: '#989ca1',
            borderWidth: 1,
            axisPointer: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: 'rgba(90,97,112,0.9)'
            // formatter: function (params, ticket, callback) {
            //     console.log(params)
            //     var str='<span style="color:#eee; border-bottom:1px solid #eee; display:block; width:100%; text-align:center;">'+params[0].axisValue+'<br/>'+'</span>'
            //     if (!params) {
            //         return "暂无数据"
            //     }
            //     for(var i=0; i<params.length; i++)
            //     {
            //         if(params[i]!==null){
            //             var v = params[i].value ? params[i].value:0;
            //             str+= '<span style="color:#0f9eaa;font-weight:bold;">'+ params[i].seriesName +' : '+ params[i].value +'</span>'+'</br>'
            //         }
            //     }
            //     return str;
            // }
        },
        legend: {
            data: ['全部', '新闻', '论坛', '博客', '微博', '微信', '视频', '贴吧', '报刊'],
            right: '4%',
            top: '2%',
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 0,
            textStyle: {
                color: '#8c8f94'
            }
        },
        grid: {
            x: '10%',
            x2: '5%',
            y: '15%',
            y2: '100'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                textStyle: {
                    color: '#989ca1',
                    fontSize: 10
                },
                margin: 10,
                interval: 0,
                rotate: 30
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)',
                    type: "solid"
                }
            },
            data: optionList.dateData
        },
        yAxis: {
            type: 'value',
            minInterval: 200,
            axisLabel: {
                textStyle: {
                    color: '#989ca1'
                },
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)',
                    type: "solid"
                }
            }
        },
        color: ['#166eff', "#00aeff", "#67c8dd", '#efcf6f', "#ffa349", "#ff1e1e", '#98cc0a', "#00ffd2", '#f6ff00'],
        series: optionList.seriesData
    };
    chart4.setOption(option);
}
//声量走势--折线图
function chart5(optionList) {

    //处理临时数据
    for (var i = 0; i < optionList.seriesData.length; i++) {
        optionList.seriesData[i].type = 'line';
        optionList.seriesData[i].smooth = true;
        optionList.seriesData[i].symbol = 'emptyCircle';
        optionList.seriesData[i].symbolSize = 2;
    }
    // console.log(optionList.seriesData);

    chart5 = echarts.init(document.getElementById('line2'));
    var option = {
        tooltip: {
            trigger: 'axis',
            borderColor: '#989ca1',
            borderWidth: 1,
            axisPointer: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: 'rgba(90,97,112,0.9)'
            // formatter: function (params, ticket, callback) {
            //     console.log(params)
            //     var str='<span style="color:#eee; border-bottom:1px solid #eee; display:block; width:100%; text-align:center;">'+params[0].axisValue+'<br/>'+'</span>'
            //     if (!params) {
            //         return "暂无数据"
            //     }
            //     for(var i=0; i<params.length; i++)
            //     {
            //         if(params[i]!==null){
            //             var v = params[i].value ? params[i].value:0;
            //             str+= '<span style="color:#0f9eaa;font-weight:bold;">'+ params[i].seriesName +' : '+ params[i].value +'</span>'+'</br>'
            //         }
            //     }
            //     return str;
            // }
        },
        legend: {
            data: ['正面', '中性', '负面'],
            right: '4%',
            top: '2%',
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 0,
            textStyle: {
                color: '#8c8f94'
            }
        },
        grid: {
            x: '10%',
            x2: '5%',
            y: '15%',
            y2: '100'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                textStyle: {
                    color: '#989ca1',
                    fontSize: 10
                },
                margin: 10,
                interval: 0,
                rotate: 30
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)',
                    type: "solid"
                }
            },
            data: optionList.dateData
        },
        yAxis: {
            type: 'value',
            minInterval: 200,
            axisLabel: {
                textStyle: {
                    color: '#989ca1'
                },
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(47,57,66,0.2)',
                    type: "solid"
                }
            }
        },
        color: ['#166eff', "#67c8dd", "#ffa349"],
        series: optionList.seriesData
    };
    chart5.setOption(option);
}
//热点词云--词云图
function chart6(bubbleData) {
    bubbleChartWordCloud({
        // 页面id标识
        id: 'hotWordCloud',
        // 排斥力
        repulsion: '9',

        // 模拟临时数据
        data: bubbleData,

        // 处理程序（点击）
        handlerClick: function handlerClick( /* data */d) {

            console.log(d);
        }

    });
}
//地图
function chart7(mapData) {

    var chartFunction = map_ls;
    var chart = chartFunction({
        id: 'main',
        map: "beijing",
        data: mapData,
        callback: function callback(data) {
            // console.log(data);
        }
    });

    chart.click = function (d) {
        // console.log(d);
    };
}