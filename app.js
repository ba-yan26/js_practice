// 1-1

// alert('Hello World');


// 1-2
// let hello = "Hello World";
// alert(hello);

// ----整数の変数定義の仕方
// let int1 = 1;
// let int2 = -10;
// let float1 = 3.14;
// let str1 = 'JavaScriptを覚えよう';
// alert(str1);

// ----四則演算
// alert(4 + 3);
// alert(4 - 3);
// alert(4 * 3);
// alert(9 / 3);

// alert('Hello' + 'World');

// let str1 = "Hello";
// let str2 = "World";
// alert(str1 + str2);

// ----条件分岐
// --if文
// let orange = 100;
// let apple = 120;

// if (orange<apple) {
//   alert('みかんの値段がリンゴより安い');
// } else if (orange == apple) {
//   alert('みかんとリンゴが同じ値段');
// } else {
//   alert('みかんの値段がリンゴより高い');
// }

// --while文 条件式がtrueなら制限なく繰り返す
// let max = 100
// let num = 1
// let count = 0
// while(num < max){
//   num = num*2;
//   count = count + 1;
// }
// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// --for文 決められた回数の処理を繰り返す
// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }
// alert('1から10まで足し算した結果は' + num + 'です');



// 1-5
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000ff',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000ff',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });


// 1-6
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.box1').on('click',function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// 1-7
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
  $('button').on('click',function(){
    $('ul').children().css('color','red');
  });
});