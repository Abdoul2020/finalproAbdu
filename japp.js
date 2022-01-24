(function($) {

    "use strict";

    // changer le div quand on click le button
    $('#button2').on('click', function() {
        if ($('#aratma').css('display') != 'none') {
            $('#yukleme').html('Here is my dynamic content').show().siblings('div').hide();
        } else if ($('#yukleme').css('display') != 'none') {
            $('#aratma').show().siblings('div').hide();
        }
    });

})(jQuery);