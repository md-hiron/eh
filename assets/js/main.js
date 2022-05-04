(function($){
    $(document).ready(function(){
        $('.menu-toggle i').on('click', function(){
            $('.navigation').slideToggle();
        });

        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });
})(jQuery);