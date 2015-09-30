$(".content").hide();
var counter = 0;
var hold;


$( ".label").click(function(e) {

counter++;    

  if((counter % 2) === 0 && this === hold)
{
    $(this).next().slideUp().removeClass('active');
}
else {
    $(this).next().slideDown().addClass('active');
    var current =$(this).next();
    $( ".content" ).not(current).slideUp().removeClass('active');  
}
  
  console.log(counter);
  hold=this;
  
  if(counter === 40) {
    counter =0;
  }
});
  

