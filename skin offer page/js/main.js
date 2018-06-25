/*=====================================================
*      NAVBAR
* =====================================================*/
   var c, currentScrollTop = 0;
   $(window).on('scroll load', function () {
       //navbar
       if ($(window).scrollTop() >= 100) {
           $('.navbar').addClass('active');
       } else {
           $('.navbar').removeClass('active');
       }
       //show button scroll-Top
       if($(window).scrollTop()>=588){
          $('#scroll-top').removeClass('d-none');
       }else{
          $('#scroll-top').addClass('d-none');
       }
   });

   /*=====================================================
   *     arrow
   * =====================================================*/
   $(document).ready(function(){
       $(".card-form").hover(function(){
          $(".card-form .arrow-container").addClass('pulse');
       }, function(){
         $(".card-form .arrow-container").removeClass('pulse');
       });
   });
