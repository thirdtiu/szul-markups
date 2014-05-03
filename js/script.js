

$(function(){

    $("#mobile-nav").mmenu({
        classes: "mm-fullscreen"
    }).on(
        "opened.mm",
        function(){
            $('#nav-toggle').addClass('active');
        }).on(
        "closed.mm",
        function(){
            $('#nav-toggle').removeClass('active');
        });

    $(document.body).on('click', '#nav-toggle.active', function() {
        $("#mobile-nav").mmenu().trigger('close');
    });
    jQuery('#mega-menu').dcMegaMenu();
    /* PRICE RANGE SLIDER */
    $('#range-slider').slider({
        value: [6000, 20000]
    }).on('slide', function(ev){
        //console.log($('#range-slider').slider('getValue'));
        //console.log(ev.value[0]);
        var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#range-input1').val(firstvalue);
        $('#range-input2').val(secondvalue);
    });

    $('#carat-range-slider').slider({
        value:[2, 16]
    }).on('slide', function(ev){
        var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);
    });

    $('#color-grade-range-slider').slider({
        value:[0, 7]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });

    $('#clarity-grade-range-slider').slider({
        value:[0, 10]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });

    $('#cut-grade-range-slider').slider({
        value:[0, 3]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });

    $('#symmetry-range-slider').slider({
        value:[0, 3]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });

    $('#polish-range-slider').slider({
        value:[0, 3]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });

    $('#fluorescence-range-slider').slider({
        value:[0, 4]
    }).on('slide', function(ev){
        /*var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('#carat-range1').val(firstvalue);
        $('#carat-range2').val(secondvalue);*/
    });



    

    $('.account').popover({
        placement : 'bottom',
        'html' : true,
        content: $('.account-popover-contents').html(),
        container : 'body',
        template: '<div id="account-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    $('.account .sign-in, .cart .cart-wrap').removeAttr('href');
    /** modifies the position of the popover arrow **/
    $('li.account').on('shown.bs.popover', function () {
      $('#account-popover .arrow').css('margin-left', '58px');
      $('li.cart').popover('hide');
    })


    $('.cart').popover({
        placement : 'bottom',
        'html' : true,
        content: $('.cart-popover-contents').html(),
        container : 'body',
        template: '<div id="cart-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });

    $('li.cart').on('shown.bs.popover', function () {
        $('li.account').popover('hide');
    });


    /** DISMISS POPOVERS WHEN CLICKING OUTSIDE **/
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    /* DISMISS POPOVER WHEN PRESSING ESC */
    $(document).keydown(function(e){
       if (e.keyCode === 27){
            $('[data-toggle="popover"]').each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
       }
    });


    /* TOOLTIPS */
    $('.results-popover').popover({
        placement : 'bottom',
        'html' : true,
        content: $('.tooltip-content').html(),
        container : 'body',
        template: '<div id="results-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        trigger: 'hover',
        delay: { show: 500, hide: 100 }
    });



    /** mobile overlay stuff **/
    $('.mobile-overlay .sticky-footer a.cancel').click(function(){
        $('.mobile-overlay').hide();
        return false;
    });
    $('.btn-mfilter').click(function(){
        $('.mobile-overlay.filter').show();
        return false;
    })

});

$(window).load(function(){
    
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    carouselEnabler();

        /*$('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();*/


});

$(window).resize(function(){
    carouselEnabler();
});



function carouselEnabler(){
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    /*var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;*/


    if(width <= 768){
        if($('.jcarousel').attr('data-jcarousel')){   // check if jcarousel has not yet been destroyed
            $('.jcarousel').jcarousel('destroy').addClass('jcarousel-disabled');
            $('.jcarousel-control-prev').css('visibility', 'hidden');
            $('.jcarousel-control-next').css('visibility', 'hidden');
            
        }
    }
    else{
        if(!$('.jcarousel').attr('data-jcarousel')){ // check if jcarousel has been created already
            $('.jcarousel').removeClass('jcarousel-disabled').jcarousel();
            $('.jcarousel-control-prev').css('visibility', 'visible');
            $('.jcarousel-control-next').css('visibility', 'visible');
            
        }
    }
};