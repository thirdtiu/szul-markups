$(function(){

	//let's clone mega menu
	var $cloneItem = $("#mega-menu").clone(),
		$dropdownItems = $cloneItem.find('li.hasdropdown');

	//after cloning remove extra ul
	$dropdownItems.each(function(){
		$(this).find('ul ul li').unwrap();
	});

	$("#mobile-nav").append("<ul>" + $cloneItem.html() + "</ul");
	
	
	// after cloning, execute mmenu
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


	jQuery('#mega-menu').dcMegaMenu({
		speed: 10,
		effect: 'slide'
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

	$('.range-slider-mobiletabs').slider({

	});




	$('input#search').on('focus', function(){
		$(this).attr('placeholder', '');
		$(this).parents('form').addClass('active');
	});
	$('input#search').on('blur', function(){
	   $(this).attr('placeholder', 'Search Title, Keyword, or SKU'); 
	   $(this).parents('form').removeClass('active');
	});

	$('.account').popover({
		placement : 'bottom',
		'html' : true,
		trigger: 'manual',
		content: $('.account-popover-contents').html(),
		container : 'body',
		template: '<div id="account-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}).on('mouseenter', function(){
		var _this = this;
		$(this).popover('show');
		$(this).siblings('.popover').on('mouseleave', function(){
			$(_this).popover('hide');
		});
	}).on('mouseleave',function(){
		var _this = this;
		var some_function = function(){
			setTimeout(function(){
				if(!$('.popover:hover').length){
					$(_this).popover('hide');
				}else{
					some_function();
				}
			}, 50);
		};
		some_function();
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
		trigger : 'manual',
		content: $('.cart-popover-contents').html(),
		container : 'body',
		template: '<div id="cart-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}).on('mouseenter', function(){
		var _this = this;
		$(this).popover('show');
		$(this).siblings('.popover').on('mouseleave', function(){
			$(_this).popover('hide');
		});
	}).on('mouseleave',function(){
		var _this = this;
		var some_function = function(){
			setTimeout(function(){
				if(!$('.popover:hover').length){
					$(_this).popover('hide');
				}else{
					some_function();
				}
			}, 50);
		};
		some_function();
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

	// mobile filter section
	$('.mobile-filter-tab-content').on('change, click', 'input[type="checkbox"], .slider-handle', function() {
		var checked = 0, notChecked = 0;
		// check checkbox if checked or not
		$('.mobile-filter-tab-content input[type="checkbox"]').each(function() {
			if( $(this)[0].checked === true) {
				checked++;
			} else {
				notChecked++;
			}
		});

		// check input if has value
		if( $('.mobile-filter-tab-content .range-input1').val() > 0 ) {
			checked++;
		}

		if(checked === 0) {
			$('.mobile-filters').show();
		} else {
			$('.mobile-filters').hide();
			$('.sticky-footer').show();	
		}

		console.log("Checked", checked);
		console.log("Not Checked", notChecked);
	});

	// filter cancel
	$('#btn-cancel').on('click', function() {
		notChecked = checked = 0;
		$('.mobile-filters').show();
		$('.mobile-overlay').hide();
	});

	// filter reset
	$('#btn-reset').on('click', function() {
		notChecked = checked = 0;
		$('.sticky-footer').hide();
		$('.mobile-filters').show();
	});

	// show filter options
	$('.btn-mfilter').on('click', function() {
		$('.mobile-overlay.filter').show();
	});

	// filter apply
	$('#btn-apply').on('click', function() {
		$('.mobile-filters').show();
		$('.mobile-overlay.filter').hide();
	});

	/** slideUp animation on quicklook **/
	$("#quick-look-modal").on('shown.bs.modal', function(){
		// Initially set opacity on thumbs and add
		// additional styling for hover effect on thumbs
		var onMouseOutOpacity = 0.67;
		$('#thumbs ul.thumbs li').opacityrollover({
			mouseOutOpacity:   onMouseOutOpacity,
			mouseOverOpacity:  1.0,
			fadeSpeed:         'fast',
			exemptionSelector: '.selected'
		});

		var gallery = $('#thumbs').galleriffic({
			delay:                     2500,
			numThumbs:                 15,
			preloadAhead:              10,
			enableTopPager:            true,
			enableBottomPager:         true,
			maxPagesToShow:            7,
			imageContainerSel:         '#slideshow',
			controlsContainerSel:      '#controls',
			captionContainerSel:       '#caption',
			loadingContainerSel:       '#loading',
			renderSSControls:          true,
			renderNavControls:         true,
			playLinkText:              'Play Slideshow',
			pauseLinkText:             'Pause Slideshow',
			prevLinkText:              '&lsaquo; Previous Photo',
			nextLinkText:              'Next Photo &rsaquo;',
			nextPageLinkText:          'Next &rsaquo;',
			prevPageLinkText:          '&lsaquo; Prev',
			enableHistory:             false,
			autoStart:                 false,
			syncTransitions:           true,
			defaultTransitionDuration: 900,
			onSlideChange:             function(prevIndex, nextIndex) {
				// 'this' refers to the gallery, which is an extension of $('#thumbs')
				this.find('ul.thumbs').children()
					.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
					.eq(nextIndex).fadeTo('fast', 1.0);
			},
			onPageTransitionOut:       function(callback) {
				this.fadeTo('fast', 0.0, callback);
			},
			onPageTransitionIn:        function() {
				this.fadeTo('fast', 1.0);
			}
		});
	});
	
	/*quick look product description toggle*/
	$('#prod-desc-collapsible').on('show.bs.collapse', function () {
		$("#prod-desc").html("-");
	});
	$('#prod-desc-collapsible').on('hide.bs.collapse', function () {
		$("#prod-desc").html("+");
	});
	
	/*product details*/

	// GEMSTONE ITEM EVENT
	$('.gemstone-types').on('click', '.type > a', function(e) {
		e.preventDefault();

		$('.gemstone-types li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().addClass('active');
		$('.selected-gem-type').text($(this).data('type'));
	});

	// METAL TYPE ITEM EVENT
	$('.metal-types').on('click', 'li > a', function(e) {
		e.preventDefault();

		$('.metal-types li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().addClass('active');
		$('.selected-metal-type').text($(this).data('metal-name'));
	});

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