/*===========================================================*/
/* dropboxの画像データをhtmlリストに変換 */
/*===========================================================*/
function CreateImgLi() {
	var urlList = [
		'https://www.dropbox.com/s/2h7wbsxhivjsatk/%E3%81%86%E3%81%A1%E3%81%AE%E3%81%933.png?dl=0',
		'https://www.dropbox.com/s/5b54hm6sj7wjptv/%E3%81%86%E3%81%A1%E3%81%AE%E5%AD%902.png?dl=0',
		'https://www.dropbox.com/s/tvdygk1oljm9g7z/%E3%83%97%E3%83%AD%E3%83%88%E3%83%9E%E3%83%BC%E3%83%AA%E3%83%B3.png?dl=0',
		'https://www.dropbox.com/s/zohkku0jbfav623/%E3%83%9B%E3%83%BC%E3%83%B3%E3%81%AE%E3%82%AA%E3%83%AA%E3%82%AD%E3%83%A3%E3%83%A9.png?dl=0',
		'https://www.dropbox.com/s/pisocymimry8ar7/%E9%9B%BB%E8%A9%B1OL.png?dl=0',
		'https://www.dropbox.com/s/c8c3p9xlel6jxph/%E5%86%99%E7%9C%9F%202022-01-03%2022%2055%2059.png?dl=0',
		'https://www.dropbox.com/s/jwgcgqaktb75ycl/%E5%86%99%E7%9C%9F%202022-01-14%208%2040%2002.png?dl=0',
		'https://www.dropbox.com/s/ik7m2zivkna6bsg/%E5%86%99%E7%9C%9F%202022-01-21%207%2052%2040.png?dl=0',
		'https://www.dropbox.com/s/1qsyfqd1ivxzps9/%E5%86%99%E7%9C%9F%202022-01-31%2021%2013%2000.png?dl=0',
		'https://www.dropbox.com/s/b5iw656sckg599c/%E5%86%99%E7%9C%9F%202022-02-21%2022%2012%2051.png?dl=0',
		'https://www.dropbox.com/s/g23ch9xo7r0hrvr/%E5%86%99%E7%9C%9F%202022-02-25%2022%2043%2012.png?dl=0',
		'https://www.dropbox.com/s/a97ht70yayq1hju/%E5%86%99%E7%9C%9F%202022-03-11%2022%2045%2025.png?dl=0',
		'https://www.dropbox.com/s/dxfyszr098k0pue/%E5%86%99%E7%9C%9F%202022-03-11%2022%2046%2001.png?dl=0',
		'https://www.dropbox.com/s/d3eq33jph1whw2i/%E5%86%99%E7%9C%9F%202022-03-18%2023%2045%2023.png?dl=0',
		'https://www.dropbox.com/s/we7rvnz4icjwdke/%E5%86%99%E7%9C%9F%202022-05-16%2021%2046%2002.png?dl=0',
		'https://www.dropbox.com/s/abdlk3xj443c17m/%E5%86%99%E7%9C%9F%202022-06-07%208%2044%2019.png?dl=0',
		'https://www.dropbox.com/s/cw471b1smin5cvi/%E5%86%99%E7%9C%9F%202023-01-21%2010%2010%2041.png?dl=0',
		'https://www.dropbox.com/s/dgd6dvndvw5ta37/%E5%86%99%E7%9C%9F%202023-01-21%2010%2010%2059.png?dl=0',
		'https://www.dropbox.com/s/ub798hxcmkoi5bc/%E5%86%99%E7%9C%9F%202023-01-21%2010%2011%2009.png?dl=0',
		'https://www.dropbox.com/s/0t8o86x95eg5956/%E5%86%99%E7%9C%9F%202023-02-28%2021%2047%2003.jpg?dl=0'
	];
	// urlの変換
	urlList = urlList.map(element => element.replace('www.dropbox.com', 'dl.dropboxusercontent.com'));
	urlList = urlList.map(element => element.replace('?dl=0', ''));
	// 変数定義
	var galleryText = '';
	for (let i = 0; i < urlList.length; ++i) {
		var url = urlList[i];
		var htmlLi = '<li class="bgextend bgLRextendTrigger zoomInRotate"><div class="bgappearTrigger"><a href="' + url + '" data-lightbox="gallery-group"><img src="' + url + '" decoding="async" alt=""></a></div></li>';
		galleryText += htmlLi;
	}
	$("#gallery").html(galleryText);
} 

/*===========================================================*/
/* 印象編 4 最低限おぼえておきたい動き */
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

    // 印象編 4-9、4-10 背景色が伸びて出現（左から・右から）中の要素が出現
    $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		}else{
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});	
    //印象編 4-9 背景色が伸びて出現（左から）
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		}else{
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});	
    //印象編 4-9 背景色が伸びて出現（右から）
    $('.bgRLextendTrigger').each(function(){ //bgRLextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
		}else{
			$(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
		}
	});
    //service-areaスタート
    $('.service-area').each(function(){ //service-areaというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('startwd');// 画面内に入ったらstartwdというクラス名を追記
		}else{
			$(this).removeClass('startwd');// 画面外に出たらstartwdというクラス名を外す
		}
	});  
}

/*==================================================
/*関数をまとめる*/
/*===================================*/
// DOMツリー直後の動き
$(document).ready(function(){
	CreateImgLi()
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();// 印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述 
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
		$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 

	}); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる

	//=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.splashbg').on('animationend', function() {
		/* 印象編 4 最低限おぼえておきたい動きの関数を呼ぶ*/
		fadeAnime();        
	});
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述