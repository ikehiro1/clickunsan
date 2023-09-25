const number = document.querySelector('h2');
const plusButton = document.querySelector('#plus');
const downButton = document.querySelector('#down')
const resetButton = document.querySelector('#reset');


let count = 0;

//plussButton.addEventListener('click',function(){     ユーザーがボタンを押したら
    //count ++;  値を１増やす
    //number.innerHTML = count;    表示される数字を変更　numgerはh1へ参照 innerHTMLはHTML要素の中身を変更するときに使われる

//});

//　アロー関数（  =>{}  ）にすることで簡略化(条件アリ)　

plusButton.addEventListener('click',() => {
    count ++;
    number.innerHTML = count;
});

downButton.addEventListener('click',() => {
    if(count >= 1) {
    count --;
    number.innerHTML = count;
    }
});

resetButton.addEventListener('click',() => {
    count = 0;
    number.innerHTML = count;
});