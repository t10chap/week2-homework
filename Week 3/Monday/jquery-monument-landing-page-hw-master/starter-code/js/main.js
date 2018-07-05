$(document).ready(function(){

$('form').on('submit', function(e){
  e.preventDefault();

var inputs = $('input');

for( let i = 0; i < inputs.lengths; i++){
  if( !$(this).val() ) {
    $(this.addClass('error'));
  }
}

});

});
