$('.value').each(function() {
	var total = 1240000;
	var text = $(this).text().replace(/\s+/g, '');
	var percentage = text/total*100+'%';
	$(this).parent().css('width', percentage);
});

//$('.block').tooltip();