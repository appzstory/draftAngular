$(document).ready(function() {
    $("html").niceScroll({
        cursorborder:"#fff",
        cursorcolor:"#3F8DBF",
        scrollspeed: 60,
        mousescrollstep: 60,
    });
    //--- after click nabar menu collapse
    $(document).on('click.nav', '.navbar-collapse.in', function(e) {
      if($(e.target).is('a') || $(e.target).is('button')) {
        $(this).collapse('hide');
      }
    });

});
