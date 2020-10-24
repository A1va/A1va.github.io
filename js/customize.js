// 可爱的Title
// var OriginTitle = document.title;
// var titleTime;
// document.addEventListener('visibilitychange', function () {
//     if (document.hidden) {
//         $('[rel="icon"]').attr('href', "/img/favicon.ico");
//         document.title = '(つェ⊂) 我藏好了哦~~';
//         clearTimeout(titleTime);
//     } else {
//         $('[rel="icon"]').attr('href', "/img/favicon.ico");
//         document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
//         titleTime = setTimeout(function () {
//             document.title = OriginTitle;
//         }, 2000);
//     }
// });

// 页脚养鱼
fish();
function fish() {
    return (
      $("#footer-wrap").css({
          position: "absolute",
          "text-align": "center",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
      }),
        $("footer").append(
          '<div class="container" id="jsi-flying-fish-container"></div>'
        ),
        // 此处修改导入的 fish.js 文件
        $("body").append(
          '<script src="/js/fish.js"></script>'
        ),
        this
    );
}
