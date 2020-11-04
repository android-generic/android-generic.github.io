$(document).ready(function() {

   $(document).on('click.feature_card', '.feature_card', function(e) {
     if ($(this).find('> .card-reveal').length) {
       if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
         $(this).find('.card-reveal').velocity({
           translateY: 0
         }, {
           duration: 225,
           queue: false,
           easing: 'easeInOutQuad',
           complete: function() {
             $(this).css({
               display: 'none'
             });
           }
         });
       } else if ($(e.target).is($('.feature_card .activator')) ||
         $(e.target).is($('.feature_card .activator i'))) {
         $(e.target).closest('.feature_card').css('overflow', 'hidden');
         $(this).find('.card-reveal').css({
           display: 'block'
         }).velocity("stop", false).velocity({
           translateY: '-100%'
         }, {
           duration: 300,
           queue: false,
           easing: 'easeInOutQuad'
         });
       }
     }

     $('.card-reveal').closest('.feature_card').css('overflow', 'hidden');

   });

 });