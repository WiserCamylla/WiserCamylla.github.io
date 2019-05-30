(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
