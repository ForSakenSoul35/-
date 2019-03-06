## js 关于滚动的事件
1. onscroll 当元素的滚动条滚动时触发的事件
任何实体元素都可以绑定 DOM元素，window元素 document元素
用法: element.onscroll =function(){}
注意:
    滚动条一定要出现  并且滚动条是属于这个元素的

2. scrollTop 元素滚动条内的顶部隐藏部分的高度（向上滚动的高度）
scrollTop只有DOM元素  ，window和document没有
用法：
    （1）获取值 var top =  element.scrollTop  返回数字 像素值
    （2）设置值 element.scrollTop = 200 
兼容性问题：
    获取整个文档scrollTop
        IE  document.documentElement.scrollTop
        FF/CH document.body.scrollTop
3. scrollHeight 元素滚动条的内容高度
只有DOM元素有
只读
兼容性问题：同上
类似：scrollLeft scrollWidth

4. window.scroll() window.scrollBy()  window.scrollTo()
全局函数  IE/CH/FF都支持
window.scroll(x,y) 让window滚动条滚动到该坐标
window.scrollBy()  让window滚动条 相对滚动到某个坐标 -10则相对向左/上滚动10像素（相对位置）
window.scrollTo(x,y)和window.scroll(x,y)一样


##  获取整个文档scrollTop会有兼容性问题
同样的js代码,同样的 Chrome 浏览器,为什么别人能document.body.scrollTop ,偏偏我就用不了?

区别在于 HTML的DTD声明上  <!DOCTYPE html>
如果 不做DTD声明 Chrome就可以支持 document.body.scrollTop

注意:
    虽然HTML5 不基于SGML 因此不需要对DTD进行引用 
    但是仍然需要DTD声明对浏览器行为进行规范