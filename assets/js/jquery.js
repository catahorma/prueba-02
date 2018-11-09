//parte1
$(document).ready(function(){
$("#myform").on('submit', function(event){
 var text = $("#mytext").val();
event.preventDefault();


	
	
	
		$('#board').append(`

    <div class="note">
          <div class="pin"></div>
               <div class="foto"><img src="assets/images/persona.jpg" name="prueba" onMousedown="cambia_imagen()" width="70px" height="70px"></div>
                <div class="like">
                  <a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></a>
                </div>
         <p class="texto"> ${ text } </p>
        </div>



`);		

$("#mytext").val('');
$("#mytext").focus();

});

$('#board').on('click', '.pin', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(900);

})

$('#board').on('click', '.note', function(){

});

})

mi_imagen1=new Image
mi_imagen1.src="assets/images/persona.jpg"
mi_imagen2=new Image
mi_imagen2.src="assets/images/persona2.jpg"
var i=1;
function cambia_imagen() {                      
   if (i == 1)
      {
      document.images['prueba'].src=mi_imagen2.src
      i=2;
      }
   else
      {
      document.images['prueba'].src=mi_imagen1.src;
      i=1;
      }
   }



$('.btn-counter').on('click', function(event, count) {
  event.preventDefault();
  
  var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');
  

  $.fn.noop = $.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
});