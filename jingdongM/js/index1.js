// 京东页面手机端JS效果
window.onload = function(){
// 1. 倒计时
//实现步骤：
// - 1.找到对应的spans
    var spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
// - 2.设置定时器 使得倒计时每秒减少1
    
    var totalTime = 5000;//设置倒计时时长 以秒作单位

    setInterval(function(){
        totalTime--;//设置倒计时每秒减1
// - 3.将倒计时时间转化为为对应的小时 分钟 秒钟
        //转化为小时 1个小时为3600 秒 
        // Math.floor 方法
    var hour = Math.floor(totalTime/3600);

    },1000)

// 实现注意事项：
// - 要考虑当倒计时走完的时候 


// 2. 轮播图
//2.1 自动轮播
//2.2 手动拖动图片
}
