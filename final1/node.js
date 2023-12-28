// 獲取輪播元素
var myCarousel = document.getElementById('carouselExampleSlidesOnly');

// 初始化輪播實例
var carousel = new bootstrap.Carousel(myCarousel);

// 設定新的滑動間隔（例如，將滑動間隔設置為 3 秒）
carousel.interval = 3000;  // 3000 毫秒 = 3 秒
