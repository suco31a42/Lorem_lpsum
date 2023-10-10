document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll(".portfolio-box");
  // スクロール感知で実行する
  const cb = function(entries, observer) {
    entries.forEach(entry =>{
      if(entry.isIntersecting) {
        // 画像のアニメーション
        for (let i = 0; i < items.length; i++) {
          const keyframes = {
              opacity: [0, 1],
              rotate: ['x 90deg', 0],
            };
            const options = {
              duration: 600,
              delay: i * 500,
              fill: 'forwards',
              easing: 'ease',
            };
          items[i].animate(keyframes, options);
        }
        // 監視終了
        observer.unobserve(entry.target);
      }
    });
  }
  // 指定した範囲に非同期的に監視している対象が入ってきたら処理を実行する
  const io = new IntersectionObserver(cb, items);
  
  // 監視を開始
  items.forEach(object => {
    io.observe(object);
  });
});