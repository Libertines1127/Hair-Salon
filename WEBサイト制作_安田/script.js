//フェードイン(アニメーション)
(function ($){
    $(document).ready(function ($){
        // フェードイン
        $(window).scroll(function () {
            $('.fadeIn').each(function () {
                var scroll = $(window).scrollTop(); // 現在のスクロール位置
                var offset = $(this).offset().top; // 対象の上からの位置
                var windowHeight = $(window).height(); // ウィンドウの高さ
                if (scroll > offset - windowHeight + 150) {
                    $(this).addClass("scrollIn");
                }
            });
        });
    });
})(jQuery);

// スライドショー
var images = ['image/main2.jpg','image/main3.jpg','image/main4.jpg'];
var current = 0;
var changeImage = function(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
    }
};

document.getElementById("prev").onclick = function() {
    changeImage(-1); //クリックで戻る
};
document.getElementById('next').onclick = function() {
    changeImage(1); //クリックで進む
};

//最終アクセス日時
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var ampm = '';
if(hour < 12) {
    ampm = ' a.m.';
} else {
    ampm = ' p.m.';
}

var output = year + '/' + (month + 1) + '/' + date + ' ' + (hour % 12) + ':' + min + ampm;
document.getElementById('time').textContent = output;

//マーカー(スクロールでマーカーが引かれる)
$(window).scroll(function (){
    $(".c-marker").each(function(){
        var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
        var scroll = $(window).scrollTop(); //スクロールの位置を取得
        var windowHeight = $(window).height(); //ウインドウの高さを取得
        if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
            $(this).addClass('is-active'); //クラス「active」を与える
        }
    });
});

//ハンバーガーメニュー(ナビゲーションメニュー)
window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('open'); //開く
});
blackBg.addEventListener('click', function () {
    nav.classList.remove('open'); //閉じる
});
};

//プルダウンメニュー
document.getElementById('pulldown').select_menu.onchange = () => {
    location.href = document.getElementById('pulldown').select_menu.value;
}

//ページトップへ戻るボタン
    // セレクタ名（.pagetop）に一致する要素を取得
    const pagetop_btn = document.querySelector(".pagetop");

    // .pagetopをクリックしたら
    pagetop_btn.addEventListener("click", scroll_top);

    // ページ上部へスムーズに移動
    function scroll_top() {
        window.scroll({ top: 0, behavior: "smooth" });
    }

    // スクロールされたら表示
    window.addEventListener("scroll", scroll_event);
        function scroll_event() {
        if (window.pageYOffset > 100) {
            pagetop_btn.style.opacity = "1";
        } else if (window.pageYOffset < 100) {
            pagetop_btn.style.opacity = "0";
        }
    }

//マウスが乗ったとき・離れた時で色が変わる 
$(function(){
    //homeボタン
    $('.mouse1').on('mouseover',function(){   //マウスオーバー
        $(this).css('color','red');    
    })
    $('.mouse1').on('mouseout',function(){    //マウスアウト
        $(this).css('color','black');
    })

    //accessボタン
    $(".mouse2").on("mouseover",function(){
        $(this).css("color","blue");
    })
    $(".mouse2").on("mouseout",function(){
        $(this).css("color","black");
    })

    //contactボタン
    $(".mouse3").on("mouseover",function(){
        $(this).css("color","green");
    })
    $(".mouse3").on("mouseout",function(){
        $(this).css("color","black");
    })
});

//スティッキーヘッダー ヘッダー固定
$(function () {
    $('.page-header').each(function(){
        $window = $(window),//ウィンドウをjQueryオブジェクト化
        $header = $(this),//ヘッダーをjQueryオブジェクト化
        //ヘッダーのデフォルト位置を取得,offset() jQuery要素のドキュメント上の位置を取得するメソッド
        headerOffsetTop = $header.offset().top;

        //ウィンドウのスクロールイベントを監視(ウィンドウがスクロールするごとに処理を実行する)
        $window.on('scroll',function(){
            //ウィンドウのスクロール量をチェックし、
            //ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            //そうでなければ削除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        //ウィンドウのスクロールイベントを発生させる(ヘッダーの初期位置を発生させるため)
        $window.trigger('scroll');
    });
});

//画像とキャプションの表現
$(function(){
    var duration = 500;

    //images
    var $images = $('.salons');
    $images.on('mouseover',function(){
        $(this).find('strong,span').stop(true).animate({
            opacity:1
        },duration);
    })
    .on('mouseout',function(){
        $(this).find('strong','span').stop(true).animate({
            opacity:0
        },duration);
    });
});

var countdown = function(due){
    var now = new Date(); //初期化

    var rest = due.getTime() - now.getTime(); //dueのミリ秒からnowのミリ秒を引いてrestに代入
    var sec = Math.floor(rest / 1000) % 60;
    var min = Math.floor(rest / 100 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    var days = Math.floor(rest / 1000 / 60 / 60 / 24);
    var count = [days,hours,min,sec];

    return count;
}

//カウントダウンタイマー
var goal = new Date(); //初期化
goal.setHours(23);  //未来時間に設定
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
var recalc = function() {
    var counter = countdown(goal);
    var time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
    document.getElementById('timer').textContent = time;
    refresh();
}

var refresh = function() {
    setTimeout(recalc,1000);
}
recalc();

//map
var map;
function initMap() {
    //表参道マップ
    map = new google.maps.Map(document.getElementById('map_sample1'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 35.66764918414074,  // 緯度
            lng: 139.70763155306184 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
    //ピン
    var myLatlng = new google.maps.LatLng(35.66764918414074,139.70763155306184);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    });   

    //原宿マップ
    map = new google.maps.Map(document.getElementById('map_sample2'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 35.67018256621466,  // 緯度
            lng: 139.70249636927267 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
    //ピン
    var myLatlng = new google.maps.LatLng(35.67018256621466, 139.70249636927267);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    });   

    //池袋マップ
    map = new google.maps.Map(document.getElementById('map_sample3'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 35.72973793585887,  // 緯度
            lng: 139.70906546642584 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
    //ピン
    var myLatlng = new google.maps.LatLng(35.72973793585887, 139.70906546642584);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    });   
}
