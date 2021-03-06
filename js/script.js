$(function(){

	//let's clone mega menu
	/*var $cloneItem = $("#mega-menu").clone(),
		$dropdownItems = $cloneItem.find('li.hasdropdown');

	//after cloning remove extra ul
	$dropdownItems.each(function(){
		$(this).find('ul ul li').unwrap();
	});

	$("#mobile-nav").append("<ul>" + $cloneItem.html() + "</ul");
	
	*/
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
	$('.z-contact-item').fastClick(function(){
		$('#mobile-nav-control').addClass('showtooltip');
		$('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');
	});	
	$('#nav-toggle').fastClick(function(){
		$('.mm-page, .windowshade, #mobile-nav, #top_header, body').toggleClass('move-right');
		$('.mobile-nav-control').toggle();
	});
	$(document.body).on('click', '#nav-toggle.active', function() {
		$("#mobile-nav").mmenu().trigger('close');
	});
	$('.show-more').on('click', function() {
		$('.mob-form-body').addClass('active');
		$('.show-more').hide();
		$('.show-less').show();
	});
	$('.show-less').on('click', function() {
		$('.mob-form-body').removeClass('active');
		$('.show-more').show();
		$('.show-less').hide();
	});
	$('.hasdropdown a:last-child').on('click', function(){
		var location = $(this).attr("href");
		$('.mobile-nav-control').hide();
		$('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');

		setTimeout(function(){window.location.href= location;},1000);

		return false;
	});


	jQuery('#mega-menu').dcMegaMenu({
		//effect: "slide"
		speed: 'fast'
	});

	/*product list price range*/

	$( "#product-list-price-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#product-list-price-amount" ).val( "$" + ui.values[ 0 ] );
        $( "#product-list-price-amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });

	/*price range*/

	$( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#price-amount" ).val( "$" + ui.values[ 0 ] );
        $( "#price-amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });

	/*carat range*/

	$( "#carat-range" ).slider({
      range: true,
      min: 0,
      max: 20,
      values: [ 2, 16 ],
      slide: function( event, ui ) {
        $( "#carat-amount" ).val( ui.values[ 0 ] );
        $( "#carat-amount2" ).val( ui.values[ 1 ] );
      }
    });

    /*color grade range*/

    $( "#color-grade-range" ).slider({
      range: true,
      min: 0,
      max: 7,
      values: [ 2, 4 ]
    });

    /*clarity grade range*/

    $( "#clarity-grade-range" ).slider({
      range: true,
      min: 0,
      max: 10,
      values: [ 2, 8 ]
    });

    /*cut grade range*/

    $( "#cut-grade-range" ).slider({
      range: true,
      min: 0,
      max: 3,
      values: [ 0, 1 ]
    });

    /*symmetry range*/

    $( "#symmetry-range" ).slider({
      range: true,
      min: 0,
      max: 3,
      values: [ 0, 1 ]
    });

    /*polish range*/

    $( "#polish-range" ).slider({
      range: true,
      min: 0,
      max: 3,
      values: [ 0, 1 ]
    });

    /*flourescence range*/

    $( "#flourescence-range" ).slider({
      range: true,
      min: 0,
      max: 4,
      values: [ 0, 3 ]
    });

	$('#range-slider').slider({
		value:[0, 16]
	}).on('slide', function(ev){
		var rangefirstvalue = ev.value[0];
		var rangesecondvalue = ev.value[1];
		$('#range-input1').val(rangefirstvalue);
		$('#range-input2').val(rangesecondvalue);
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

	/** modifies the position of the popover arrow **/
	$('li.account').on('shown.bs.popover', function () {
	  $('#account-popover .arrow').css('margin-left', '-7px');
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
		$('#cart-popover .arrow').css('margin-left', '20px');
		$('li.account').popover('hide');
	});

	$('.z-contact-item').popover({
		placement : 'bottom',
		'html' : true,
		trigger : 'manual',
		content: $('.contact-item-popover-contents').html(),
		container : 'body',
		template: '<div id="contact-item-popover" class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content">sss</div></div>'
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

	$('li.contact-item').on('shown.bs.popover', function () {
		$('li.contact-item').popover('hide');
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
	});

	// show filter options
	$('.btn-mfilter').on('click', function() {
		$('.mobile-overlay.filter').show();
		$('#mobile-sorting').hide();
		$('.sticky-footer').show();
   		$('.mobile-filters').hide();
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
	$('#example').popover({
		placement : 'top',
		'html' : true,
		trigger: 'click',
		content: '<p>Most rings can be easily resized by any local jeweler or by calling our customer service department and requesting a custom ring size. Please email us at <a href="mailto:customerservice@szul.com">customerservice@szul.com</a> or telephone us at 800-332-4382 and a representative will gladly coordinate a customized ring size.</p>',
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	})

	$(document).ready(function(){

		/*advanced search mobile*/

		$('.mobile-side-bar-nav ul li').on('click', 'a', function(){

			var dataTarget= $(this).attr('data-tab');
			var dataTabContainer = $('.mobile-filter-inner-container .mobile-tab');
			var dataTab = $('.mobile-filter-inner-container .mobile-tab').attr('data-target');

			$('.mobile-side-bar-nav ul li a').removeClass('active');
			$(this).addClass('active');

			if(dataTarget == 'diamond-specs'){
				$('.mobile-diamond-shape, .mobile-price-range').removeClass('active');
				$('.mobile-diamond-specs').addClass('active');
			}
			else if(dataTarget == 'diamond-shape'){
				$('.mobile-diamond-specs, .mobile-price-range').removeClass('active');
				$('.mobile-diamond-shape').addClass('active');
			}
			else if(dataTarget == 'diamond-price-range'){
				$('.mobile-diamond-specs, .mobile-diamond-shape').removeClass('active');
				$('.mobile-price-range').addClass('active');
			}
		});

		$('.mobile-sort-btn').on('click', function(){
			$('.mobile-sort-search-container').addClass('show-filter');
			$('.floating-nav-confirm').addClass('active');
			$('.filter-options-btns').hide();
		});

		$('.mobile-filter-btn').on('click', function(){
			$('.mobile-advanced-create-container').addClass('show-filter');
			$('.floating-nav-confirm').addClass('active');
			$('.filter-options-btns').hide();
		});

		$('.cancel-mobile-filter').on('click', function(){
			$('.mobile-advanced-create-container, .mobile-sort-search-container').removeClass('show-filter');
			$('.floating-nav-confirm').removeClass('active');
			$('.filter-options-btns').show();
		});

		$('.block-shape-select ul li, .advanced-search-form ul.types li, .mobile-diamond-shape ul li').on('click', 'img', function(){
			$(this).toggleClass('select-shape');
		});

		$('.show-advanced-search-option-btn').on('click', function(){
			$('.block-advanced-search, .show-advanced-search-option-btn span').toggleClass('show-more-options');
		});

		$('#thumbs .thumbs li a img').on('click', function(){
			var imgSrc = $(this).attr('src');
			$('#gallery #slideshow img').attr('src', imgSrc);
		});
		
		$(window).scroll(function (event) {
			if($(window).scrollTop() >= 105){
             $('.top_secondary').addClass('animate');
         }else{
          $('.top_secondary').removeClass('animate');
         } 
		});

		var productHeight = $('.the-product.row').height();

		if(productHeight > 600){
			$('.the-product.row').addClass('set');
			$(window).scroll(function (event) {
		      

		         if($(window).scrollTop() >= 190){
		             $('#gal1, .stage.hidden-xs').addClass('animate');
		         }else{
		          $('#gal1, .stage.hidden-xs').removeClass('animate');
		         }

		       if($(window).scrollTop() >= 450){
		       		$('.top_secondary, #gal1, .stage.hidden-xs').addClass('snap');
		       }else{
		       		$('.top_secondary, #gal1, .stage.hidden-xs').removeClass('snap');
		       }
	     	});
		}else{
			
		}
		

		if ($(window).width() <= 768) {
			$('.results-popover').on('click', function(){
				window.location = 'diamond-detail.html';
			});
			$('.shipping-address-item').on('click', function(){
				$('.shipping-address-item').removeClass('active-address');
				$(this).addClass('active-address');
			});

			$('.review-items').insertAfter('.review-cc');

			$('.checkout-payment-select-cc').on('click', function(){
				$('.checkout-payment-select-cc').removeClass('active-cc');
				$(this).addClass('active-cc');
			});
		}


		if ($(window).width() < 400) {
		  $('#dont-see-size').tooltip({
			'html': 'true',
			'trigger': 'click',
			'placement': 'bottom',
			'title': '<span class="ttip-title">Product Size</span><span class="tooltip-cont">Most rings can be easily resized by any local jeweler or by calling our customer service department and requesting a custom ring size. <br/><br/>Please email us at <span style="color:#9026a0">customerservice@szul.com</span> or telephone us at 800-332-4382 and a representative will gladly coordinate a customized ring size.</span>'
		  });
		  $('#customize-tooltip').tooltip({
			'html': 'true',
			'trigger': 'click',
			'placement': 'bottom',
			'title': '<span class="ttip-title">Product Customization</span><span class="tooltip-cont">Because most of the items listed on the Szul.com website are items we manufacture, we can usually honor customization request. If you are looking for the same item but would like it in a different metal type, stone type or carat weight, we would be more than happy to research your request and let you know availability and pricing. Please email us with the Product ID of the item you would like to customize along with details of your request. <br/><br/>Please email us at <span style="color:#9026a0">customerservice@szul.com</span> or call us toll free at 1.800.332.4382 to speak with a product specialist.</span>'
		  });
		  } else{
			$('#dont-see-size').tooltip({
			'html': 'true',
			'trigger': 'click',
			'placement': 'right',
			'title': '<span class="ttip-title">Product Size</span><span class="tooltip-cont">Most rings can be easily resized by any local jeweler or by calling our customer service department and requesting a custom ring size. <br/><br/>Please email us at <span style="color:#9026a0">customerservice@szul.com</span> or telephone us at 800-332-4382 and a representative will gladly coordinate a customized ring size.</span>'
		  });
		  $('#customize-tooltip').tooltip({
			'html': 'true',
			'trigger': 'click',
			'placement': 'right',
			'title': '<span class="ttip-title">Product Customization</span><span class="tooltip-cont">Because most of the items listed on the Szul.com website are items we manufacture, we can usually honor customization request. If you are looking for the same item but would like it in a different metal type, stone type or carat weight, we would be more than happy to research your request and let you know availability and pricing. Please email us with the Product ID of the item you would like to customize along with details of your request. <br/><br/>Please email us at <span style="color:#9026a0">customerservice@szul.com</span> or call us toll free at 1.800.332.4382 to speak with a product specialist.</span>'
		  });
		  $('#ataf-tooltip').tooltip({
			'html': 'true',
			'trigger': 'click',
			'placement': 'bottom',
			'title': '<span class="ttip-title">Email a Friend</span><span class="ataf-tooltip-container"><label class="col-md-4">Name</label><input class="col-md-8"/><br/><label class="col-md-4">Email</label><input class="col-md-8"/><br/><label class="col-md-4">Friends Email</label><textarea class="col-md-8"></textarea><br/><label class="col-md-4">Subject</label><input class="col-md-8"/><br/><button class="pull-right">Submit</button><div class="clearfix"></div></span>'
		  });
		  }
	});

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

	// GEMSTONE ITEM EVENT
	$('.diamond-shapes').on('click', '.type > a', function(e) {
		e.preventDefault();

		$('.diamond-shapes li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().addClass('active');
		$('.selected-diamond-shape').text($(this).data('type'));
	});

});

/* Product details ring size */
$(window).load(function(){
	var ddData = [
		{
			text: "10cm",
			value: 1,
			selected: true,
		},
		{
			text: "11cm",
			value: 2,
			selected: false,
		},
		{
			text: "12cm",
			value: 3,
			selected: false,
		}
	]; 

	$('#ring-size').ddslick({
		data: ddData,
		width: 100,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var ippData = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	];


	var colorData = [
		{
			text: "D",
			value: 1,
			selected: true,
		},
		{
			text: "E",
			value: 2,
			selected: false,
		},
		{
			text: "F",
			value: 3,
			selected: false,
		},
		{
			text: "G",
			value: 3,
			selected: false,
		},
		{
			text: "H",
			value: 3,
			selected: false,
		},
		{
			text: "I",
			value: 3,
			selected: false,
		},
		{
			text: "J",
			value: 3,
			selected: false,
		}
	];

	$('#color').ddslick({
		data: colorData,
		width: 100,
		imagePosition: "left",
		//selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	

	var clarityInitial = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#clarity').ddslick({
		data: clarityInitial,
		width: 100,
		imagePosition: "left",
		//selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var clarityFinal = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#clarity2').ddslick({
		data: clarityFinal,
		width: 100,
		imagePosition: "left",
		//selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});



	var clarityInitial2 = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#clarity3').ddslick({
		data: clarityInitial2,
		width: 100,
		imagePosition: "left",
		//selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var clarityFinal2 = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#clarity4').ddslick({
		data: clarityFinal2,
		width: 100,
		imagePosition: "left",
		//selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});




	// Product listing mobile sorting
	$('#items-per-page').ddslick({ width: 270 });
	$('#sortby').ddslick({ width: 270 });
	$('.product-information #metal-type').ddslick({ 
		width: 200
	});
});

$(window).load(function(){
	/*$('ul.products .product').syncHeight({
	    updateOnResize:true
	});*/
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

// Order details
if ($('.order-details').length) {
	enquire.register("screen and (min-width:768px)", {

		match : function() {
			$('.panel-title a').removeAttr('data-toggle');
			$('.order-details .panel-collapse').addClass('in').removeAttr('style');

			// item details
			$('.item-details .panel-heading a').each(function() {
				var img = $(this).find('img'),
					span = $(this).find('span'),
					temp = [];

				temp.push(img);
				temp.push(span);

				$(this).closest('.panel-heading')
					.next()
						.find('.desc')
							.prepend(temp);
			});
		},

		unmatch : function() {
			$('.panel-title a').attr('data-toggle', 'collapse');
			$('.order-details .panel-collapse').removeClass('in');

			// item details
			$('.panel-body .desc').each(function() {
				var img = $(this).find('img'),
					span = $(this).find('span.prod-name'),
					temp = [];

				temp.push(img);
				temp.push(span);

				$(this).closest('.panel-collapse')
					.siblings('.panel-heading')
						.find('a')
							.append(temp);
			});
		}

	});
}

// Cart modal
if ($('#accordion-cart').length) {

	enquire.register("screen and (min-width:768px)", {

		match : function() {
			$('.panel-title a').removeAttr('data-toggle');
			$('.panel-collapse').addClass('in').removeAttr('style');

			// item details
			$('.panel-heading a').each(function() {
				var img = $(this).find('img'),
					span = $(this).find('span');

				$(this).closest('.panel-heading')
					.next()
						.find('.item-detail .prod-image')
							.prepend(img);

				$(this).closest('.panel-heading')
					.next()
						.find('.item-detail .number-button-wrap')
							.prepend(span);
			});
		},

		unmatch : function() {
			$('.panel-title a').attr('data-toggle', 'collapse');
			$('.panel-collapse').removeClass('in');

			// item details
			$('.panel-body .item-detail').each(function() {
				var img = $(this).find('img'),
					span = $(this).find('span.prod-name'),
					temp = [];

				temp.push(img);
				temp.push(span);

				$(this).closest('.panel-collapse')
					.siblings('.panel-heading')
						.find('a')
							.append(temp);
			});
		}

	});
}


// Checkout/Place order buttons

var checkoutPage = $('.checkout-cart-info').length,
	// get length of my cart page
	myCart = $('#cart-summary').length,
	// create fixed-container
	buttonContainer = '<p class="fixed-container" id="fixed-container"></p>';

// check if were in the checkout page
/*if (checkoutPage) {
	// append fixed-container to body element
	$('body').prepend($(buttonContainer));
	// store fixed-container element
	var fixedContainer = $('#fixed-container');

	var btnContainer = $('.place-order-container'),
	btn = $('#btn-place-order');

	placeCheckoutButtonHelper(btnContainer, btn);
}*/

// check if cart page
/*if (myCart) {
	// append fixed-container to body element
	$('body').prepend($(buttonContainer));
	// store fixed-container element
	var fixedContainer = $('#fixed-container');

	var btnContainer = $('.checkout-button-container'),
		btn = $('#btn-checkout');

	placeCheckoutButtonHelper(btnContainer, btn);
}
*/
// helper function for floating checkout and place order buttons
function placeCheckoutButtonHelper(buttonContainer, button) {
	enquire.register("screen and (min-width:768px)", {
		setup : function() {
			$(fixedContainer).append($(button));
		},

		match : function() {
			$(buttonContainer).append($(fixedContainer).find(button));
			$(fixedContainer).hide();
		},

		unmatch : function() {
			$(fixedContainer).append($(button));
			$(fixedContainer).show();
		}
	});
}

/** RETURN ORDER **/
if ($('.return-process')) {
	$('.list-item').on('click', '.chk-list-item', function() {
		$(this).closest('.list-item').find('.form-item-reasons').slideToggle();
	});
}


$(document).ready(function($) {

	$('.diamond-thumb-first').on('click', function(){
		$('#diamond-gallery a').removeClass('active');
		$(this).addClass('active');
		$('.stage-diamond-detail');
		$('.diamond-details-labels').removeClass('hidden');
		$('.diamond-details-labels2').addClass('hidden');
		var diamondThumb1 = $(this).attr('data-image');

		$('#diamond-details-img').attr('src', diamondThumb1);
		
	});
	$('.diamond-thumb-second').on('click', function(){
		$('#diamond-gallery a').removeClass('active');
		$(this).addClass('active');
		$('.diamond-details-labels2').removeClass('hidden');
		$('.diamond-details-labels').addClass('hidden');

		var diamondThumb2 = $(this).attr('data-image');

		$('#diamond-details-img').attr('src', diamondThumb2);
	});

	$('.diamond-thumb-third').on('click', function(){
		$('#diamond-gallery a').removeClass('active');
		$(this).addClass('active');
		$('.diamond-details-labels, .diamond-details-labels2').addClass('hidden');

		var diamondThumb3 = $(this).attr('data-image');

		$('#diamond-details-img').attr('src', diamondThumb3);

	});

	$('.ring-setting-thumbs li a').on('click', function(){
		$('.ring-setting-thumbs li a').removeClass('active-thumb');
		$(this).addClass('active-thumb');

		var ringSettingThumb = $(this).attr('data-image');

		$('#ring-setting-image-preview').attr('src', ringSettingThumb);

	});

	

	$('.add-new-address-btn').click(function(){
		$('.cc-select-billing-address').removeClass('show-existing-cc');
		$('.cc-select-billing-address').addClass('show-create-cc');
		$('.cc-select-billing-address .create-new-address-cc input').attr('required', '');
		
	});
	$('.use-existing-address-btn').on('click',function(){
		$('.cc-select-billing-address').addClass('show-existing-cc');
		$('.cc-select-billing-address').removeClass('show-create-cc');
		$('.cc-select-billing-address .create-new-address-cc input').removeAttr('required');
	});

	$('.shipping-options-arrow').on('click',function(){
		$('.review-shipping-options').toggleClass('show-options');
	});

	$('#mega-menu .sub').addClass('clearfix');

	if ($(window).width() < 767) {
		$('.mob-promo-hide').parents('body').children('.windowshade').hide();
		
	}
	if ($(window).width() < 1025){
		$(document).on('mouseenter', '.zoomContainer', function(event) {
			$('.product-doverlay, .zoomWindow').show();
			$( ".zoomWindow" ).append( "<span class='p-dialog-close-btn'>x</span>" );
			$('#top_header').css('z-index', '9');
			/* Act on the event */
		});
		$(document).on('mouseenter', '.p-dialog-close-btn', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$('#top_header').css('z-index', '99999');
			$( ".p-dialog-close-btn" ).remove();
			location.reload(true);
			/* Act on the event */
		});
		$(document).on('mouseenter', '.product-doverlay', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$( ".p-dialog-close-btn" ).remove();
			$('#top_header').css('z-index', '99999');
			location.reload(true);
		});
		$(document).on('mouseenter', '.zooWindow', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$( ".p-dialog-close-btn" ).remove();
			location.reload(true);
		});

	}

});
$('img').load(function(){
	setTimeout( function() {
		$('body').removeClass('load-control');
	}, 10000);
});
$(window).load(function(){
	var stateProvinceData = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	]; 

	$('#rp1-sp-input').ddslick({
		data: stateProvinceData,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var stateProvinceData2 = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	]; 

	$('#cs1-sp-input').ddslick({
		data: stateProvinceData,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var country = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	]; 

	$('#c-sp-input').ddslick({
		data: country,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

// Martino JS changes for product-listing.html dropdowns

	var itemsperpage = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	]; 

	$('.items-per-page').ddslick({
		data: itemsperpage,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

	var sortby = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		},
		{
			text: "3",
			value: 3,
			selected: false,
		}
	]; 

	$('.sortby').ddslick({
		data: sortby,
		imagePosition: "left",
		selectText: "Select your favorite social network",
		onSelected: function (data) {}
	});

// end of Martino JS Changes

});

$(window).load(function(){
	var stateProvinceData = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#rp1-sp-input').ddslick({
		data: stateProvinceData,
		onSelected: function (data) {}
	});

	var stateProvinceData = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#rp1-sp2-input').ddslick({
		data: stateProvinceData,
		onSelected: function (data) {}
	});

	var country = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#rp1-c-input').ddslick({
		data: country,
		onSelected: function (data) {}
	});

	var country = [
		{
			text: "1",
			value: 1,
			selected: true,
		},
		{
			text: "2",
			value: 2,
			selected: false,
		}
	]; 

	$('#rp1-c2-input').ddslick({
		data: country,
		onSelected: function (data) {}
	});

	



	var colorInital = [
		{
			text: "D",
			value: 1,
			selected: true,
		},
		{
			text: "E",
			value: 1,
			selected: true,
		},
		{
			text: "F",
			value: 1,
			selected: true,
		},
		{
			text: "G",
			value: 1,
			selected: true,
		},
		{
			text: "H",
			value: 1,
			selected: true,
		},
		{
			text: "I",
			value: 1,
			selected: true,
		},
		{
			text: "J",
			value: 1,
			selected: true,
		}
	
	]; 

	$('#color-range').ddslick({
		data: colorInital,
		onSelected: function (data) {}
	});

	var colorFinal = [
		{
			text: "D",
			value: 1,
			selected: true,
		},
		{
			text: "E",
			value: 1,
			selected: true,
		},
		{
			text: "F",
			value: 1,
			selected: true,
		},
		{
			text: "G",
			value: 1,
			selected: true,
		},
		{
			text: "H",
			value: 1,
			selected: true,
		},
		{
			text: "I",
			value: 1,
			selected: true,
		},
		{
			text: "J",
			value: 1,
			selected: true,
		}
	
	]; 

	$('#color-range2').ddslick({
		data: colorFinal,
		onSelected: function (data) {}
	});



	var colorInital2 = [
		{
			text: "D",
			value: 1,
			selected: true,
		},
		{
			text: "E",
			value: 1,
			selected: true,
		},
		{
			text: "F",
			value: 1,
			selected: true,
		},
		{
			text: "G",
			value: 1,
			selected: true,
		},
		{
			text: "H",
			value: 1,
			selected: true,
		},
		{
			text: "I",
			value: 1,
			selected: true,
		},
		{
			text: "J",
			value: 1,
			selected: true,
		}
	
	]; 

	$('#color-range3').ddslick({
		data: colorInital2,
		onSelected: function (data) {}
	});

	var colorFinal2 = [
		{
			text: "D",
			value: 1,
			selected: true,
		},
		{
			text: "E",
			value: 1,
			selected: true,
		},
		{
			text: "F",
			value: 1,
			selected: true,
		},
		{
			text: "G",
			value: 1,
			selected: true,
		},
		{
			text: "H",
			value: 1,
			selected: true,
		},
		{
			text: "I",
			value: 1,
			selected: true,
		},
		{
			text: "J",
			value: 1,
			selected: true,
		}
	
	]; 

	$('#color-range4').ddslick({
		data: colorFinal2,
		onSelected: function (data) {}
	});
	
});

$(document).ready(function($) {


	

	$(document).on('click', '.mobile-search', function(event) {
		$('input#search').focus();
		$('.mobile-nav-control').addClass('search-overlay');
	});
	$('#mobile-nav-control').on('click', function(){
		$('#mobile-search').removeClass('in');
		$('#mobile-search').addClass('collapse');
		$('.mobile-nav-control').removeClass('search-overlay');
		$('#mobile-nav-control').removeClass('showtooltip');
	});
	$(document).on('click', '#contact-item-popover .contact-popup-close-btn', function(event) {
		$('#contact-item-popover').hide();
		$('#mobile-nav-control').removeClass('showtooltip');

		
	});

	$('.owl-carousel').owlCarousel({
	    margin:10,
	    items:1
	});


		
	});
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    prevText: "",
    nextText: ""
  });
});
/*
$(window).resize(function(){
	if ($(window).width() < 750) {
	        $('.sampless').attr('src', 'images/banner.jpg');
	        $('.sampless').addClass('test');
	    }
	    else {
	        $('.sampless').attr('src', 'images/logo.png');
	        $('.sampless').removeClass('test');
	    }
});
*/
