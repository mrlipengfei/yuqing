'use strict';

/**
 * Created by ADMIN on 2017/9/7.
 */
$(function () {
    layui.use(['form', 'laypage', 'laydate'], function () {
        var laypage = layui.laypage,
            laydate = layui.laydate,
            form = layui.form;
        //监听左侧主题名称下拉框
        form.on('select(warnLevel)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
        form.on('select(sendStatus)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
        form.on('select(searchTime)', function (data) {
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
            // if(data.value==3){

            // }
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
                console.log(obj);
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
    });
    //文章排序
    $('.articleOrder').click(function () {});
    //小星星收藏图标
    $('.icon-star_off-copy').click(function () {
        $(this).toggleClass('icon-xing-copy');
    });
});