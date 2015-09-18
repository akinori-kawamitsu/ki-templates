jQuery(document).ready(function(){
  jQuery('.toggle').click(function(){
    jQuery(this).next('.menu').toggleClass('visible');
    jQuery(this).toggleClass('visible');
  });
});
