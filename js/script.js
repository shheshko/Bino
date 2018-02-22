$(function () {
    var $headerTop = $('.header-top'),
        $mainNav = $('#main-nav'),
        $burger = $('#burger');

    $burger.on('click', function () {
        if ($headerTop.hasClass('active') === true) {
            $headerTop.removeClass('active');
            $mainNav.hide();
            $mainNav.removeClass('active')
        } else {
            $headerTop.addClass('active');
            $mainNav.addClass('active')
            $mainNav.show();
        }
    });
});






