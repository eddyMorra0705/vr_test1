document.addEventListener('DOMContentLoaded', function() {

    // 獲取視頻元素
    var video = document.getElementById('vr-video');
  
    // 播放按鈕
    var playButton = document.getElementById('play-button');
    playButton.addEventListener('click', function() {
      video.play();
    });
  
    // 暫停按鈕
    var pauseButton = document.getElementById('pause-button');
    pauseButton.addEventListener('click', function() {
      video.pause();
    });
  
    // 全屏按鈕
    var fullscreenButton = document.getElementById('fullscreen-button');
    fullscreenButton.addEventListener('click', function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
  
  }, false);
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单的默认提交行为
     var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
     if (username === 'admin' && password === '123456') {
        window.location.href = "video.html"; // 重定向到带有 VR 视频播放器的页面
    } else {
        alert('用户名或密码不正确！'); // 如果用户名或密码不正确，则显示警告框
    }
});