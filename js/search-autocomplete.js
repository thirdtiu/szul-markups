$(function(){
  var currencies = [
    { value: 'Diamond Sample 1', data: 'DMND1' },
    { value: 'Diamond Sample 2', data: 'DMND2' },
    { value: 'Diamond Sample 3', data: 'DMND3' },
    { value: 'Diamond Sample 4', data: 'DMND4' },
    { value: 'Diamond Sample 5', data: 'DMND5' },

   
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('.search-field').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});