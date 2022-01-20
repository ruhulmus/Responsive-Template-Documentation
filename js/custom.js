// add js class to html tag
$('html').addClass('js');

// UItoTop plugin 
$(document).ready(function() {		
$().UItoTop({ easingType: 'easeOutQuart' });
});

// Navigation Menu
$(document).ready(function() {
  $('#nav').onePageNav({
    begin: function() {
	  console.log('start')
    },
    end: function() {
	  console.log('stop')
    }
  });
  
});

// Tooltips
$(document).ready(function(){

	/* Adding a colortip to any tag with a title attribute: */

	$('[title]').colorTip({color:'yellow'});

});

// Responsive Navigation Menu by SelectNav
jQuery(document).ready(function () {
  selectnav('nav', {
  label: '- Navigation Menu - ',
  nested: true,
  indent: '-'
});
});
