$('.ui.tabular.menu .item')
	.tab();
AOS.init();

$('.logo-click').click(function(){
	$('.ui.modal').modal('show');
});

$('.ui.embed').embed();

/**/
$(document).ready(function() {
	$('#fullpage').fullpage({
	scrollBar: true,
	});
});
