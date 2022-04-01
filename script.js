$('.tab-content-2').hide();
$('.tab-content-3').hide();

$('.tab1').click(function(){
    $('.tab1').addClass('tab-btn-active');
    $('.tab-content-1').show();

    $('.tab2').removeClass('tab-btn-active');
    $('.tab-content-2').hide();

    $('.tab3').removeClass('tab-btn-active');
    $('.tab-content-3').hide();
});

$('.tab2').click(function(){
    $('.tab1').removeClass('tab-btn-active');
    $('.tab-content-1').hide();

    $('.tab2').addClass('tab-btn-active');
    $('.tab-content-2').show();

    $('.tab3').removeClass('tab-btn-active');
    $('.tab-content-3').hide();
});

$('.tab3').click(function(){
    $('.tab1').removeClass('tab-btn-active');
    $('.tab-content-1').hide();

    $('.tab2').removeClass('tab-btn-active');
    $('.tab-content-2').hide();
    
    $('.tab3').addClass('tab-btn-active');
    $('.tab-content-3').show();
});