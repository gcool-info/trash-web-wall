var ASPECT_RATIO = 560/315;
var videos = [
	{
		"key": "3UebrYzo2DI",
		"left" : "0%",
		"top": 0	
	},
	{
		"key": "imtla2nIpQQ",
		"left" : "10%",
		"top": 200	
	},
	{
		"key": "dJMRwTULnUU",
		"left" : "20%",
		"top": 400	
	},
	{
		"key": "rChkEpm4No4",
		"left" : "30%",
		"top": 1000
	},
];

for(var i = 0; i < videos.length; i++) {

	var width = Math.random() * 560;
	var height = width/ASPECT_RATIO;
	$('#video' + i).html('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + videos[i].key + '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;vq=small" frameborder="0" allowfullscreen></iframe>');
	$('#video' + i).css('top', videos[i].top);
	$('#video' + i).css('left', videos[i].left);
}