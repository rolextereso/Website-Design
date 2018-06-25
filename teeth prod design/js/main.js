

   /*=====================================================
   *     arrow
   * =====================================================*/
   $(document).ready(function(){
       $(".step-body").hover(function(){
           var prev_img=$(this).prev();
          $(prev_img).children().addClass('pulse');
          $(this).children().first().addClass("selected-child");
       }, function(){
           var prev_img=$(this).prev();
           $(prev_img).children().removeClass('pulse');
               $(this).children().first().removeClass("selected-child");
       });
   });
