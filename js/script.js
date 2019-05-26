
$(document).ready(function() {
  $('#menu a').click(function(e){
     hideContentDivs();
     var tmp_div = $(this).parent().index();
     $('.main div').eq(tmp_div).show();
  });

function hideContentDivs(){
    $('.main div').each(function(){
    $(this).hide();});
}
hideContentDivs();
  e.preventDefault();
});
