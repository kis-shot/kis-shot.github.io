


document.getElementById('b1').addEventListener("click", function (){
    let v = document.getElementById('player');
    v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E4%BC%A4%E7%89%A9%E8%AF%AD%E3%80%91%E5%8F%AA%E6%98%AF%E4%B8%80%E5%B0%81%E6%9E%81%E7%BE%8E%E7%9A%84%E6%83%85%E4%B9%A6.mp4'
    v.load();
})

function el(a){
    let v = document.getElementById('player');
    v.src = a;
    v.load();
}




