function resize() {

    let player = document.getElementById('player');
    let buttons = document.getElementById('buttons');

    let playerLeft = player.offsetLeft;
    //let playerTop = document.getElementById('title').style.top;
    console.log(player.offsetLeft);

    document.getElementById('title').style.left = `${playerLeft}px`;
    buttons.style.left = `${playerLeft}px`;
    //document.getElementById('title').style.top = `${playerTop}px`

}
window.addEventListener('resize',resize);
window.addEventListener('load',resize);

/*
function f(){
    let data = window.location.href.split("?")[1].split("=")[1];
    let v = document.getElementById('player');

    if(data == 1){
            v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E4%BC%A4%E7%89%A9%E8%AF%AD%E3%80%91%E5%8F%AA%E6%98%AF%E4%B8%80%E5%B0%81%E6%9E%81%E7%BE%8E%E7%9A%84%E6%83%85%E4%B9%A6.mp4'
            v.load();
            //deleteButtons(1);
        }
    else if(data == 2){
        v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E3%80%91%E7%8E%B0%E5%9C%A8%EF%BC%8C%E5%8F%98%E8%BA%AB%EF%BC%8C%E5%B0%8F%E5%BF%8D%E5%A5%A5%E7%89%B9%E6%9B%BC%EF%BC%81.mp4'
        v.load();
        //deleteButtons(5)
    }
    else if(data == 3){
        v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E5%8C%96%E7%89%A9%E8%AF%AD%E3%80%91nyanyanya%E7%BB%95%E5%8F%A3%E4%BB%A4.mp4'
        v.load();
        //deleteButtons(12);
    }
    else if(data == 4){
        v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E4%B8%AD%E7%9A%84%E7%BB%95%E5%8F%A3%E4%BB%A4-p1-%E7%BE%BD%E5%B7%9D%E7%BF%BC%EF%BC%88%E5%A0%80%E6%B1%9F%E7%94%B1%E8%A1%A3%EF%BC%89.mp4'
        v.load();
    }
    else if(data == 5){
        v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E4%BC%A4%E7%89%A9%E8%AF%AD%E3%80%91%E5%8F%AA%E6%98%AF%E4%B8%80%E5%B0%81%E6%9E%81%E7%BE%8E%E7%9A%84%E6%83%85%E4%B9%A6.mp4'
        v.load();
    }
    else if(data == 6){
        v.src = 'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E7%9B%98%E7%82%B9%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E4%B8%AD%E6%96%A7%E4%B9%83%E6%9C%A8%E6%89%80%E6%9C%89%E7%9A%84Yeah~%5B%E9%AB%98%E6%B8%85%E7%89%88%5D(1).mp4'
        v.load();
    }

    else if(data == 'bake'){
        v.src = 'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(1);
        changeName('化物语');
        changeBtn('b1');
    }
    else if(data == 'nise'){
        v.src = 'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4'
        v.load();
        deleteButtons(5);
        changeName('伪物语');
    }
    else if(data == 'nekokuro'){
        v.src = 'http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(12)
        changeName('猫物语^黑');
    }
    else if(data == 'tsuko'){
        v.src = 'http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(12);
        changeName('凭物语');
    }
    else if(data == 'owari'){
        v.src = 'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(3);
        changeName('终物语');
    }
    else if(data == 'koyomi'){
        v.src = 'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(4);
        changeName('历物语');
    }
    else if(data == 'kizu'){
        v.src = 'http://kissshot1.test.upcdn.net/13%E4%BC%A4%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kizumonogatari%2001%20%5BBD%201920x816%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(13);
        changeName('伤物语');

    }
    else if(data == 'zokuwari'){
        v.src = 'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(10);
        changeName('续^终物语');
    }
    else if(data == 'nekoshiro'){
        v.src = 'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(11);
        changeName('猫物语^白');
    }
    else if(data == 'kabuki'){
        v.src = 'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(12);
        changeName('倾物语');
    }
    else if(data == 'hana'){
        v.src = 'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(11)
        changeName('花物语');
    }
    else if(data == 'otori'){
        v.src = 'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4';
        v.load();
        deleteButtons(12);
    }
    else if(data == 'oni'){
        v.src = 'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(12)
        changeName('鬼物语');
    }
    else if(data == 'koi'){
        v.src = 'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'
        v.load();
        deleteButtons(10);
        changeName('恋物语');
    }


}

function deleteButtons(n) {
    let sets = document.getElementsByClassName("sets");
    //let btns = document.getElementById('buttons');
    let btnns = document.getElementsByClassName('btn-light');

    for(let i =sets.length-1; i >= sets.length-n;i--){
        //sets[i].removeChild(btnns[i]);
        sets[i].style.visibility = "hidden";
    }

}

function changeName(a) {
    document.getElementById('name').innerHTML = a;
}
function changeBtn(a) {
    document.getElementById(a);
    a.style.backgroundColor = 'black';
}

window.onresize = function () {
    let title = document.getElementById('title1');
    let play = document.getElementById('player');

    title.offsetLeft = play.offsetLeft;
    console.log(play.offsetLeft);
    console.log(play.offsetLeft);


}



function changeSrc(a) {
    let p = document.getElementById('player');
    p.src = a;
    p.load();
    deleteButtons();
}


let num = document.getElementsByClassName('nav-link');


function ff() {
    let data = window.location.href.split("?")[1].split("=")[1];
    change(2);
}
*/



function c() {
    let data = window.location.href.split("?")[1].split("=")[1];

    change(data);
}




function change(data,episode) {
    //let data = window.location.href.split("?")[1].split("=")[1];
    let srcs = ['http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
    'http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/13%E4%BC%A4%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kizumonogatari%2002%20%5BBD%201920x816%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',

    'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
    'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
    'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4']

    let names = ['化物语','伪物语','猫物语^黑','凭物语','终物语','历物语','伤物语','续^终物语',
    '猫物语^白','倾物语','花物语','囮物语','鬼物语','恋物语'];
    //let bs = [1,5,12,12,3,4,13,10,11,12,11,12,12,10];
    let bs = [15,11,4,4,13,12,3,6,5,4,5,4,4,6];

    let elseNames = ['新房45°','现在，小忍，奥特曼变身！','nyanyanya绕口令','物语系列中的绕口令','伤物语——一封极美的情书','斧乃木的Yeah~'];
    let elseBs = [1,1,1,1,1,1];
    let elseSrcs = ['http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E6%96%B0%E6%88%BF45%C2%B0.mp4',
    'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E3%80%91%E7%8E%B0%E5%9C%A8%EF%BC%8C%E5%8F%98%E8%BA%AB%EF%BC%8C%E5%B0%8F%E5%BF%8D%E5%A5%A5%E7%89%B9%E6%9B%BC%EF%BC%81.mp4',
    'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E5%8C%96%E7%89%A9%E8%AF%AD%E3%80%91nyanyanya%E7%BB%95%E5%8F%A3%E4%BB%A4.mp4',
    'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E4%B8%AD%E7%9A%84%E7%BB%95%E5%8F%A3%E4%BB%A4-p1-%E7%BE%BD%E5%B7%9D%E7%BF%BC%EF%BC%88%E5%A0%80%E6%B1%9F%E7%94%B1%E8%A1%A3%EF%BC%89.mp4',
    'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E4%BC%A4%E7%89%A9%E8%AF%AD%E3%80%91%E5%8F%AA%E6%98%AF%E4%B8%80%E5%B0%81%E6%9E%81%E7%BE%8E%E7%9A%84%E6%83%85%E4%B9%A6.mp4',
    'http://kissshot1.test.upcdn.net/%E6%9D%82%E9%A1%B9/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E7%9B%98%E7%82%B9%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E4%B8%AD%E6%96%A7%E4%B9%83%E6%9C%A8%E6%89%80%E6%9C%89%E7%9A%84Yeah~%5B%E9%AB%98%E6%B8%85%E7%89%88%5D(1).mp4'];

    let m = new Map([['bake',0],['nise',1],['nekokuro',2],['tsuko',3],
    ['owari',4],['koyomi',5],['kizu',6],['zokuowari',7],['nekoshiro',8],
    ['kabuki',9],['hana',10],['otori',11],['oni',12],['koi',13]]);








    let play = document.getElementById('player');
    //console.log(12313131);
    if (data.length > 10){
        let sets = document.getElementsByClassName("sets");
        for (let i = 0; i < sets.length; i++) {
            if (i < 15) {
                sets[i].style.visibility = 'visible'
            } else
                sets[i].style.visibility = "hidden";
        }
    }

    else
    {


        if (data <= 6 && data >= 1) {
            data -= 1;

            console.log(111);
            console.log(data);
            play.src = elseSrcs[data];
            play.load();


            document.getElementById('name').innerHTML = elseNames[data];
            document.getElementById('ep').style.visibility = 'hidden';
            document.getElementById('episode').style.visibility = 'hidden';
            //document.getElementById('set').style.visibility = 'hidden';

            var sets = document.getElementsByClassName("sets");


            for (let i = 0; i < 16; i++) {
                console.log(i);
                sets[i].style.visibility = "hidden";
            }
        } else {
            let a = m.get(data);
            play.src = srcs[a];
            play.load();


            document.getElementById('name').innerHTML = names[a];
            let sets = document.getElementsByClassName("sets");
            for (let i = 0; i < sets.length; i++) {
                if (i < bs[a]) {
                    sets[i].style.visibility = 'visible'
                } else
                    sets[i].style.visibility = "hidden";
            }
        }

        if(episode>=0){
            document.getElementById('episode').innerHTML = episode+1;
        }


    }
}


//document.getElementById('sss').onclick=change('2');






function bChange(episode) {


    let v = [['http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2006%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2007%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2008%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2009%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2010%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2011%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2012%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2013%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2014%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/01%E5%8C%96%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Bakemonogatari%2015%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'], ['http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2006%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2007%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2009%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2010%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/02%E4%BC%AA%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Nisemonogatari%2011%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4'],

    ['http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/03%E7%8C%AB%E7%89%A9%E8%AF%AD%E9%BB%91/%5BSAIO-Raws%5D%20Nekomonogatari%20(Kuro)%2004%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

     ['http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/10%E5%87%AD%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Tsukimonogatari%2004%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

     ['http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2006%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2007%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2008%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2009%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2010%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2011%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2012%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/11%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Owarimonogatari%2013%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

    ['http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2006%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2007%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2008%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2009%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2010%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2010%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2011%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%2012%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/12%E5%8E%86%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koyomimonogatari%20NCED%20%5BBD%201920x1080%20HEVC-10bit%20OPUS%5D.mp4'],

     ['http://kissshot1.test.upcdn.net/13%E4%BC%A4%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kizumonogatari%2001%20%5BBD%201920x816%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/13%E4%BC%A4%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kizumonogatari%2002%20%5BBD%201920x816%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/13%E4%BC%A4%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kizumonogatari%2003%20%5BBD%201920x816%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4'],

      ['http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/15%E7%BB%AD%E7%BB%88%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Zoku%20Owarimonogatari%2006%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx3%20ASSx4%5D.mp4'],

    ['http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/04%E7%8C%AB%E7%89%A9%E8%AF%AD%E7%99%BE%E7%99%BD/%5BSAIO-Raws%5D%20Nekomonogatari%20(Shiro)%2005%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

      ['http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/05%E5%80%BE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Kabukimonogatari%2004%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

    ['http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/09%E8%8A%B1%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Hanamonogatari%2005%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

    ['http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/06%E5%9B%AE%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Onimonogatari%2004%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4'],

     ['http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/07%E9%AC%BC%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Otorimonogatari%2004%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D~1.mp4'],

     ['http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2001%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2002%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2003%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2004%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2005%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4',
        'http://kissshot1.test.upcdn.net/04%E7%89%A9%E8%AF%AD%E7%B3%BB%E5%88%97%E7%AC%AC%E4%BA%8C%E5%AD%A3/08%E6%81%8B%E7%89%A9%E8%AF%AD/%5BSAIO-Raws%5D%20Koimonogatari%2006%20END%20%5BBD%201920x1080%20HEVC-10bit%20OPUSx2%20ASSx4%5D.mp4']]

    let m1 = new Map([['化物语','bake'],['伪物语','nise'],['猫物语^黑','nekokuro'],['凭物语','tsuko'],
        ['终物语','owari'],['历物语','koyomi'],['伤物语','kizu'],['续^终物语','zokuowari'],['猫物语^白','nekoshiro'],
        ['倾物语','kabuki'],['花物语','hana'],['囮物语','otori'],['鬼物语','oni'],['恋物语','koi']]);

    let m = new Map([['bake',0],['nise',1],['nekokuro',2],['tsuko',3],
        ['owari',4],['koyomi',5],['kizu',6],['zokuowari',7],['nekoshiro',8],
        ['kabuki',9],['hana',10],['otori',11],['oni',12],['koi',13]]);

    let name = document.getElementById('name').innerHTML;

    let play  =document.getElementById('player');

    let s = m.get(m1.get(name));
    console.log(s);

    document.getElementById('episode').innerHTML = episode+1;

    play.src = v[s][episode];
    console.log('111111111111111111111111')
    console.log(s)
    console.log(episode);
    play.load();


}


function  BtnChange() {
    let bs = document.getElementsByClassName('btn-light');
    for (let i = 0; i < bs.length; i++) {
        bs[i].addEventListener('click', function () {
            bChange(i);
        })
    }
}

/*
document.getElementById('test').addEventListener('click',function (){
    bChange(3);
})
*/












/////////////////////////////////////














//document.getElementById('test').addEventListener('click',function (){change(3)})






let navs = document.getElementsByClassName('active');
let seasons = ['bake','nise','nekokuro','tsuko','owari','koyomi','kizu','zokuowari',
    'nekoshiro','kabuki','hana','otori','oni','koi'];
for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('click',function() {change(seasons[i],0)});
    navs[i].addEventListener('click',function (){BtnChange()});

}










