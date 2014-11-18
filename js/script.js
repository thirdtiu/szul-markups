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


	jQuery('#mega-menu').dcMegaMenu();



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
			'placement': 'right',
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

	// Product listing mobile sorting
	$('#items-per-page').ddslick({ width: 270 });
	$('#sortby').ddslick({ width: 270 });
	$('.product-information #metal-type').ddslick({ 
		width: 200
	});
});

$(window).load(function(){
	$('ul.products .product').syncHeight({
	    updateOnResize:true
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
if (checkoutPage) {
	// append fixed-container to body element
	$('body').prepend($(buttonContainer));
	// store fixed-container element
	var fixedContainer = $('#fixed-container');

	var btnContainer = $('.place-order-container'),
	btn = $('#btn-place-order');

	placeCheckoutButtonHelper(btnContainer, btn);
}

// check if cart page
if (myCart) {
	// append fixed-container to body element
	$('body').prepend($(buttonContainer));
	// store fixed-container element
	var fixedContainer = $('#fixed-container');

	var btnContainer = $('.checkout-button-container'),
		btn = $('#btn-checkout');

	placeCheckoutButtonHelper(btnContainer, btn);
}

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
	if ($(window).width() < 767) {
		$('.mob-promo-hide').prev().hide();
		$('.mob-promo-hide').parent().prev().hide();
	}
	if ($(window).width() < 1025){
		$(document).on('mouseover', '.zoomContainer', function(event) {
			$('.product-doverlay, .zoomWindow').show();
			$( ".zoomWindow" ).append( "<span class='p-dialog-close-btn'>x</span>" );
			/* Act on the event */
		});
		$(document).on('mouseover', '.product-doverlay', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$( ".p-dialog-close-btn" ).remove();
			/* Act on the event */
		});
		$(document).on('mouseover', '.zoomWindow', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$( ".p-dialog-close-btn" ).remove();
			/* Act on the event */
		});
		$(document).on('mouseover', '.p-dialog-close-btn', function(event) {
			$('.product-doverlay, .zoomWindow').hide();
			$( ".p-dialog-close-btn" ).remove();
			/* Act on the event */
		});

	}
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
	if ($(window).width() < 800) {
		$('.mob-promo-hide').prev().hide();
		$('.mob-promo-hide').parent().prev().hide();
	}
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
		onSelected: function (data) {}
	});

	
});

$(document).ready(function($) {
	$(document).on('click', '.mobile-search', function(event) {
		$('input#search').focus();
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