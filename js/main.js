$('.hWrap .gnb li').mouseover(function(){
    $('.subMenu').stop().slideDown(); 
});

$('header').mouseleave(function(){
    $('.subMenu').stop().slideUp();
});

$('.bn .bnWrap').slick({
    'arrows': false,
    'autoplay': true,
    'fade': true,
});


 $('.row2 .pic').slick({
     'slidesToShow': 4,
     'prevArrow': '.prev',
    'nextArrow': '.next'
 });

$('.tWrap .tabBtn li').click(function(e){
    e.preventDefault();

    let i = $(this).index();

    $('.tWrap .tabCon .item').eq(i).stop().show().css('display','flex')
    .siblings().stop().hide();
});

$('.tWrap .tabBtn li').click(function(){

    $(this).addClass('active')
    .siblings().removeClass('active');
});

$('.event .eWrap').slick({
    'arrows': false,
    'autoplay': true,
    'fade': true,
    'dots': false
});

$('footer .fWrap2 .rel button').click(function(){

    $('footer .fWrap2 .rel ul').stop().show();

});

$('#total .output').click(function(){
    $('#total .selector').show();
});//#total


let total1 = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
let total2 = ["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"];
let total3 = ["남구","달서구","달성군","동구","북구","상주","서구","수성구","중구"];
let total4 = ["강화군","계양구","남구","남동구","동구","부평구","서구","연수구","옹진군","중구"];
let total5 = ["광산구","남구","동구","북구","서구"];
let total6 = ["대덕구","동구","서구","유성구","중구"];
let total7 = ["남구","동구","북구","울주군","중구"];
let total8 = ["금남면","부강면","소정면","세종시","연기면","연동면","연서면","장군면","전동면","전의면","조치원읍"];
let total9 = ["가평군","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시"];
let total10 = ["강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"];
let total11 = ["괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청원군","청주시","충주시"];
let total12 = ["계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시","예산군","천안시","청양군","태안군","홍성군"];
let total13 = ["고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군","전주시","정읍시","진안군"];
let total14 = ["강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
let total15 = ["경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시"];
let total16 = ["거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시","창녕군","창원시","통영시","하동군","함안군","함양군","합천군"];
let total17 = ["서귀포시","제주시"];

$('#total .selector div').click(function(){

    let txt = $(this).text();

    $('#total .output').text(txt);

    let cls= $(this).get(0).classList.value;
    cls = eval(cls);
    console.log(cls);

    $('#detail .selector2').html(``);
    cls.forEach(function(e,i){
        $(`<div class="detail${i}">${e}</div>`).appendTo('#detail .selector2');

    });

}); //selector div

$('#total .selector').click(function(){
    $(this).css({
        'display':'none'
    });
})

$('#detail div').click(function(){
    let txt = $(this).text();
    $('#detail .output').text(txt);
});

