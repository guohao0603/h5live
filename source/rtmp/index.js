// rtmp*********************************************
 // 设置flash路径,用于在videojs发现浏览器不支持HTML5播放器的时候自动唤起flash播放器
 videojs.options.flash.swf = 'https://cdn.bootcss.com/videojs-swf/5.4.1/video-js.swf';
 let player = videojs('rtmp-player'); //my-player为页面video元素的id
let dom1 = document.getElementById('rtmp-btn')
dom1.onclick = function(){
    player.play();
}
let rtmpDom = document.getElementById('rtmp')
rtmpDom.onchange = function(){
    console.log(rtmpDom.value)
    console.log(player)
    player.src({
        src: rtmpDom.value,
        type: 'rtmp/flv'
      });
    player.play();
}