$(function(){
	// clone the sidebar
	var $productFilterSidebar = $('.product-filter-sidebar').clone(),
		$filterHeaders = $productFilterSidebar.find('.block-head'); // get the headers
		$filterItems = $productFilterSidebar.find('.block-body');

	//generate mobile tab filters header
	$filterHeaders.each(function(key, value){
		$('ul.mobile-filter-tabs').append('<li><a href="#filter-tab' + key + '" data-toggle="tab">'+ $(this).html() +'</a></li>');
	});


	//generate mobile tab filters contents
	$filterItems.each(function(key, value){
		$('.mobile-filter-tab-content')
		.append('<div class="tab-pane" id="filter-tab' + key + '">' +
				$(this).html() +
				'</div>');
	});

	//make first item active
	$('ul.mobile-filter-tabs li:first-child').addClass('active');
	$('.mobile-filter-tab-content .tab-pane:first-child').addClass('active');



	/* PRICE RANGE SLIDER */
    $('.range-slider').slider({
        value: [6000, 20000]
    }).on('slide', function(ev){
        
        var firstvalue = ev.value[0];
        var secondvalue = ev.value[1];
        $('.range-input1').val(firstvalue);
        $('.range-input2').val(secondvalue);
    });

   	/* SORTING */
   	var $productSortingFilter = $('#form-sorting .form-group').clone()
   	$('#mobile-sorting').append($productSortingFilter);

   	// show mobile sorting on click hide others
   	$('#btn-sorting').on('click', function() {
   		$('.mobile-overlay').hide();
   		$('#mobile-sorting').show();
   		$('.sticky-footer').show();
   		$('.mobile-filters').hide();
   	})

   	// event listener for select form
   	$('#mobile-sorting').on('change', 'select', function() {
   		var counter = 0;

   		$('#mobile-sorting select').each(function() {
	   		if( $(this).val() !== '-1' ) {
	   			counter++;
	   		}
	   	});

	   	if (counter > 0) {
			$('.mobile-filters').hide();
			$('#mobile-sorting .sticky-footer').show();
		} else {
			$('.mobile-filters').show();
			$('#mobile-sorting .sticky-footer').hide();
		}
   	});

   	// button sort cancel
   	$('#btnsort-cancel').on('click', function() {
   		$('#mobile-sorting').hide();
   		$('.mobile-filters').show();

   		$('#mobile-sorting select').each(function() {
	   		$(this).prop('selectedIndex', 0);
	   	});
   	});

   	// button sort reset
   	$('#btnsort-reset').on('click', function() {
   		$('#mobile-sorting select').each(function() {
	   		$(this).prop('selectedIndex', 0);
	   	});
   	});
	
});