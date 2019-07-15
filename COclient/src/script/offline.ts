import BaseApp from './PageBase';
import '@/style/index.css';

class offline extends BaseApp {

  constructor(){
    super();
  }

  initiate():void{
    window.addEventListener('storage', function (e) {
      if (e.key === 'colorpicker') {
        window.parent.postMessage(e.newValue, '*');
      }
    });

  	
  }

  

   /*
    * document.location="url";(只读)
    * document.location.reload("url";);
    * window.location="url";
    * location="url";
    * document.href="url"
    * document.location.href="url"
    * document.location.replace="url"
    * document.action="url"; document.submit();
    * document.location.href和document.location.replace都可以实现从A页面切换到B页面，但他们的区别是：
    * 用document.location.href切换后，可以退回到原页面。而用document.location.replace切换后，不可以通过“后退”退回到原页面。
    * 关于document.location.href或其他可回退的切换方式
    * document.location 相当于 document.URL 声明了装载文档的URL,
    * 除非发生了服务器重定向, 否则该属性的值与Window.location.href的值是一样的.
    * history.go(-1);//返回上一页
    * document.IFRAME名称.location.href='url';//改变框架内容
    */

  //视觉差
      // var scene = document.getElementById('items');
      // var parallaxInstance = new Parallax(scene, {
      //   relativeInput: true,    //1大幅度相对偏移
      //   // clipRelativeInput:true,  //2小幅度相对偏移
      //   hoverOnly: true,    //3鼠标离开时恢复原位，建议与1结合使用
      // });


      //anime
      // var path = anime.path('#path2');
      // anime({
      //   translateX: path('x'),
      //   translateY: path('y'),
      //   rotate: path('angle'),
      //   easing: 'linear',
      //   duration: 2000,
      //   loop: true,
      //   delay: function(el, i) { return i * 250 },

      //   //循环右平移
      //   targets: '.list-item',
      //   // translateX: 200,
      //   direction: 'alternate',
      //   // loop: true,
      //   // easing: 'linear'
      // });


}

new offline();
