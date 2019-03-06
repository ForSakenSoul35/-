## 触屏事件
    touchstart 手指触摸屏幕时触发
    touchmove   手指在屏幕上移动时触发  move事件是一直触发的
    touchend 手指离开屏幕时触发
    touchcancle  触摸事件意外中断
<!-- 添加事件 用addEventListener -->

## touchEvent 事件对象

touches: 是指当前屏幕上的所有的手指对象
targetTouches： 当前元素上的手指对象
changedTouches：当前屏幕上的发生变化的手指对象

targetTouches和touches在测试中没有区别,
推荐使用targetTouches


手指对象Touch属性：
TouchList

 clientX/clientY: 参考手机页面（当前视口）的左上角
 pageX/pageY： 参照内容的左上角（包含滚动条）

 screenX/screenY :参照屏幕左上角（CH无法正确获取这个值）

 移动端取值一般取值:clientX/Y