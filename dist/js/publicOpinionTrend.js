'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {
    layui.use(['layer', 'form', 'laypage', 'laydate'], function () {
        var laypage = layui.laypage,
            laydate = layui.laydate,
            form = layui.form,
            layer = layui.layer;

        //监听左侧主题名称
        form.on('select(themeName)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });

        // 情感类型select示例

        var data = [//后台返回：type=3 正面，type=2 中性，type=1 负面
        { type: 3 }, { type: 2 }, { type: 1 }, { type: 3 }, { type: 2 }, { type: 3 }];
        var className = ['types negative', 'types neutral', 'types positive']; //class数组，负面，中性，正面

        $('.selectDom').each(function (idx, val) {
            //循环列表所有的select
            val.value = data[idx].type; //设置   当前select选中项  idx-->当前select的下标
            $(val.parentNode).attr('class', className[data[idx].type - 1]); //设置class
        });
        // 需要手动调用一次
        layui.use('form', function () {
            var form = layui.form;
            form.render("select");
        });

        // var flag=false;
        // $('.types').click(function(){
        //     if(!flag){                                               //不满足
        //         $('.selectDom').find('option').attr("disabled","");  //select禁用
        //         layui.use('form',function(){                       //重新渲染select
        //             var form=layui.form;
        //             form.render("select");
        //         });
        //         alert("抱歉，该功能只对签约用户使用。");
        //     }
        // })


        //监听正面，中性，负面 select
        form.on('select(types)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象

            //  alert( $(data.elem).attr("dir"));
            // alert( $(data.elem).find("option:selected").attr("dir"));
            //  $(data.elem).find("option").attr("disabled","");

            //点击每个选项切换class
            switch (data.value) {
                case '3':
                    $(data.elem).find("option:selected").attr("selected", true);
                    // $(data.elem).parent('.types').removeClass().addClass('types positive')
                    break;
                case '2':
                    $(data.elem).find("option:selected").attr("selected", true);
                    // $(data.elem).parent('.types').removeClass().addClass('types neutral')
                    break;
                case '1':
                    $(data.elem).find("option:selected").attr("selected", true);
                    // $(data.elem).parent('.types').removeClass().addClass('types negative')
                    break;
            }
        });

        //监听左侧时间范围
        form.on('select(timeScope)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            // console.log(data.othis); //得到美化后的DOM对象
            // if(data.value==3){

            // }
        });
        form.on('radio(custom)', function (data) {
            console.log(data.elem); //得到radio原始DOM对象
            console.log(data.value); //被点击的radio的value值
        });
        //日历
        laydate.render({
            elem: '#startDate',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm',
            show: false,
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });
        laydate.render({
            elem: '#endDate',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm',
            done: function done(value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });
        //监听左侧媒体类型
        form.on('select(mediaType)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
        //监听左侧情感类型
        form.on('select(feelType)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
        //监听左侧文章排序单选框
        form.on('radio(articleOrder)', function (data) {
            console.log(data.elem); //得到radio原始DOM对象
            console.log(data.value); //被点击的radio的value值
        });
        //监听左侧合并相似文章复选框
        form.on('checkbox(mergeSimilar)', function (data) {
            console.log(data.elem); //得到checkbox原始DOM对象
            console.log(data.elem.checked); //是否被选中，true或者false
            console.log(data.value); //复选框value值，也可以通过data.elem.value得到
            console.log(data.othis); //得到美化后的DOM对象
        });
        //分页
        laypage.render({
            elem: 'page',
            count: 100,
            layout: ['prev', 'page', 'next', 'skip'],
            last: false,
            first: false,
            prev: '<',
            next: '>',
            theme: '#4ea5ff',
            jump: function jump(obj) {
                // console.log(obj)
            }
        });
        //全选
        form.on('checkbox(allChoose)', function (data) {
            var child = $(data.elem).parents('.mainCon').find('.mainConBottom input[type="checkbox"]');
            child.each(function (index, item) {
                item.checked = data.elem.checked;
            });
            form.render('checkbox');
        });
        //反选
        form.on('checkbox(itemChoose)', function (data) {
            var sib = $(data.elem).parents('.mainCon').find('.mainConBottom input[type="checkbox"]:checked').length;
            var total = $(data.elem).parents('.mainCon').find('.mainConBottom input[type="checkbox"]').length;
            console.log('选择了' + sib);
            console.log('总计' + total);
            if (sib == total) {
                $(data.elem).parents('.mainCon').find('.mainConTop input[type="checkbox"]').prop("checked", true);
                form.render();
            } else {
                $(data.elem).parents('.mainCon').find('.mainConTop input[type="checkbox"]').prop("checked", false);
                form.render();
            }
        });

        //推送弹出层
        $('.icon-zhifeiji-copy').click(function () {
            layer.open({
                type: 1,
                title: false,
                area: ['942px', '584px'], //宽高
                shade: [0.7, '#000', true],
                closeBtn: false,
                btn: ['确定', '取消'],
                shadeClose: true, //点击遮罩层关闭
                btnAlign: 'c',
                content: $("#fei-push")
            });
        });
    });

    //小星星收藏图标
    $('.icon-star_off-copy').click(function () {
        $(this).toggleClass('icon-xing-copy');
    });

    //点击新闻列表进入详情页
    $('.newsList').delegate('.newsBottom', 'click', function (event) {
        event.stopPropagation();
        window.location.href = 'articleDetails.html';
    });

    //点击分享图标
    $('.fenxiangLi').click(function (event) {
        $(this).find('.fenxiangDiv').slideToggle(300);
        //var e = evt || event;
        event.stopPropagation();
    });
    $('.fenxiangDiv').click(function (event) {
        event.stopPropagation();
    });
    $(document).click(function () {
        $('.fenxiangDiv').slideUp(300);
    });

    //点击删除图标 弹出层
    $('.deleteLi').click(function () {

        var _this = $(this);

        layer.open({
            type: 1,
            title: false,
            area: ['340px', '240px'], //宽高
            shade: [0.7, '#000', true],
            shadeClose: true, //点击遮罩层关闭
            btn: ['确定', '取消'],
            yes: function yes(index, layero) {
                //按钮【按钮一】的回调
                layer.close(index);

                //删除本条信息
                _this.parents('.newsListLi').remove();
            },
            btn2: function btn2(index, layero) {
                //按钮【按钮二】的回调
            },
            btnAlign: 'c',
            closeBtn: false,
            content: $("#deleteBox")
        });
    });
});