$('.value').each(function() {
	var total = 1200000;
	var text = $(this).text().replace(/\s+/g, '');
	var percentage = text/total*100+'%';
	console.log(text, percentage);
	$(this).parent().css('width', percentage);
});

//$('.block').tooltip();