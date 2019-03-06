window.onload = function(){
    // 头部搜索栏的js效果
    
    searchSet();
    //倒计时
    //设置初始的倒计时时间  以秒作单位
    var totalTime = 5500;
    timeBack(totalTime);

    // banner轮播
    bannerEffect();
       
    
   
    
}

function searchSet(){
        // 1.获取当前banner的高度
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;//获取高度 
    
    // 2.获取当前屏幕滚动时，banner移出屏幕的高度
    window.onscroll = function(){//监听滚动事件

    //  获取页面滚动的高度 兼容性写法
        var offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
        
         // 3.计算比例
         var opacity =0;
         
        // 4. 设置透明度
        var search = document.querySelector(".jd_search");
        // 设置样式
        // 
        if( offsetTop < bannerHeight ){
            opacity = offsetTop/bannerHeight;
            search.style.backgroundColor = "rgba(233,35,34,"+opacity+")";
        }       
    }    
}
// 倒计时
function timeBack(totalTime){
    // 1.获取用于展示事件的span
    var spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
    // 2. 获取初始的倒计时时间  以秒作单位  
    this.totalTime = totalTime;
    // 3.开启定时器
    var timeId1 = setInterval(function(){
        totalTime--;
        if(totalTime < 0 ){
            clearInterval(timeId1);
            return;
        }
        
        // 得到剩余的时间 时分秒
        // 秒转化为小时，分钟 ，秒钟
        var hour = Math.floor(totalTime/3600);//取整
        var minute = Math.floor(totalTime%3600/60)
        var second = Math.floor(totalTime%60);
        // 赋值
        spans[0].innerHTML = Math.floor(hour/10);
        spans[1].innerHTML = Math.floor(hour%10);
        
        spans[3].innerHTML = Math.floor(minute/10);
        spans[4].innerHTML = Math.floor(minute%10);

        spans[6].innerHTML = Math.floor(second/10);
        spans[7].innerHTML = Math.floor(second%10);
    },1000);
}


// 轮播图
// 1.循环轮播
// 2.手动轮播

// 思路
// 1.在首尾添加图片
    // 在开始位置添加原始的最后一张图片
    // 在最后位置添加原始的第一张图片
// 2.修改页面结构
// 3.修改页面样式
// .jd_bannerImage{   width:1000%;    }
// .jd_bannerImage>li{width:10%;float: left;}
// 4. 设置 默认偏移  由于在第一张图片之前添加了图片 现在又需要让第一张图 片 轮播图第一张显示
// 实现方式1 transform(translateX(-10%))
// 实现方式2 定位 position：absolute; left:-640px;

function bannerEffect(){
    // 1.设置修改轮播图的页面结构
    // 1.a 在开始位置添加原始的最后一张图片
    // 1.b 在最后位置添加原始的第一张图片
    
    // 获取轮播图
    var banner = document.querySelector(".jd_banner");
    // 获取图片盒子
    var imgBox = banner.querySelector("ul:first-of-type");
    // 获取原始的第一张图片
    var first = imgBox.querySelector("li:first-of-type");
    // 获取原始的最后一张图片
    var last = imgBox.querySelector("li:last-of-type");
    //在轮播图插入图片
    
    //在最后一张图片后插入 
    imgBox.appendChild(first.cloneNode(true));//复制一个DOM元素
    // 在第一张图片之前插入
    //insertBefore（需要插入的元素，位置）
    imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild)

    //2.修改对应的样式
    //  假设原来有8张轮播图 现在多加了两张  显示肯定有问题      
    // 首先设置banner总的宽度即图片盒子的宽度 imgBox.width = bannerWidth = li元素的个数*banner宽度  100%*n个
    // 获取个数  以及banner宽度 

    
    // 2.1 获取所有li元素
    var lis = imgBox.querySelectorAll("li");
    // 2.2获取li元素个数
    var count = lis.length;
    // 2.3 获取banner宽度 
    var bannerWidth = banner.offsetWidth;
    // 2.4 设置图片盒子的宽度
    imgBox.style.width = count*bannerWidth + "px";
    // 2.5 设置每一个li元素的宽度
    for(var i = 0;i<count; i++){
        lis[i].style.width = bannerWidth+ "px";
    }
    
    //3 设置默认偏移
    imgBox.style.left = -bannerWidth+"px";

    //4. 当屏幕宽度变化 重新计算宽度
    window.onresize = function(){
        // 4.1 获取banner宽度 
        bannerWidth = banner.offsetWidth;
        // 4.2 设置图片盒子的宽度
        imgBox.style.width = count*bannerWidth + "px";
        // 4.3 设置每一个li元素的宽度
        for(var i = 0;i<count; i++){
            lis[i].style.width = bannerWidth+ "px";
        }
    
        //4.4 设置默认偏移
        imgBox.style.left = -index*bannerWidth+"px";

    }
    

    // 5 实现自动轮播
    // 5.1 定义图片索引
        var index = 1;
        var timeId2;

    // 5.2 设置定时器
    // 封装定时器函数
    var startTime = function(){
        timeId2 = setInterval(function(){
        
            // a 变换索引
            index++;
            // b 设置过度效果
            imgBox.style.transition = "left 0.5s ease-in-out";
            // c  设置偏移
            imgBox.style.left= (-index*bannerWidth)+ "px";
            //判断是否轮播到最后一张了
            setTimeout(function(){
                if(index==count-1){
                    // 索引重置
                    index =1;
                    // 关闭过渡效果
                    // 如果一个元素的某个属性之前添加过过渡效果，那么过渡效果会一直存在
                    // 如果不想要 需要手动清除
                    imgBox.style.transition = "none";
                    // 偏移到指定的位置
                    imgBox.style.left= (-index*bannerWidth)+ "px";
               }
            },500);
            
        },2000);
    
    }
    startTime();
    

    // 实现手动轮播
    // 1.记录手指的起始位置
    var startX,moveX,distanceX;
    // 为图片添加触摸开始事件
    imgBox.addEventListener("touchstart",function(e){
        // 清除定时器;
        clearInterval(timeId2);
        // 获取当前手指的位置
        startX = e.targetTouches[0].clientX;
    });
    // 为图片添加触摸滑动事件
    imgBox.addEventListener("touchmove",function(e){
        

        // 记录手指在滑动过程中的位置
        moveX = e.targetTouches[0].clientX;
        distanceX= moveX- startX;
        // 为了保证效果 清除可能存在的过渡效果
        imgBox.style.transition ="none";
        // 实现元素的偏移
        // 注意:滑动偏移应该是相对现在位置进行的偏移 而不是相对原始位置 所以要加上index*bannerWidth
        imgBox.style.left = (-index*bannerWidth + distanceX) + "px";
    });
    // 为图片添加触摸结束事件
    imgBox.addEventListener("touchend",function(e){
        // 获取当前滑动的距离,判断距离是否超过指定的范围  100px
        if(Math.abs(distanceX) > 100 ){
            console.log(1);
            // 判断滑动的方向
            if( distanceX > 0 ){
                index--;
            }else{
                index++;
            }
            // 翻页
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index*bannerWidth+"px";    
        }else if(Math.abs(distanceX)>0){
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index*bannerWidth+"px";  
        }
        // 重新开始定时器
        startTime();
        // webkitTransitionEnd :可以监听当前元素的过渡效果执行完毕,当一个元素的过渡效果执行完毕时 会触发这个事件
        //设置没有过渡效果
        imgBox.addEventListener("webkitTransitionEnd",function(){
            // 如果到了最后一张 回到索引1
            // 如果到了第一张,回到索引count-2
            if(index == count-1){
                index = 1;
                // 清除过渡
                imgBox.style.transition = "none"; 
                // 设置偏移
                imgBox.style.left = - index*bannerWidth +"px";
            }else if(index == 0){   
                index = count-2;
                // 清除过渡
                imgBox.style.transition = "none"; 
                // 设置偏移
                imgBox.style.left = - index*bannerWidth +"px";

            }
        })
    });
    // 2.记录手指在滑动过程中的位置，计算出相对于初始位置的偏移值 通过left样式实现图片的偏移
    // 3. 在松开手指之后 判断当前滑动的距离，如果超出指定为范围 就翻页 否则 回弹

    //  过渡效果 
    // touch事件的触发 必须保证元素有具体的宽高值 为0时  不会触发



    
}