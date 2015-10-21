$(function($){		
	$.supersized({
		// Functionality
		slide_interval      :   5000,		// Length between transitions
		transition          :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed	:	2000,		// Speed of transition
												   
		// Components							
		slide_links			:	'false',
		slides 				:  	[			// Slideshow Images
										{image : 'http://res.cloudinary.com/dillonshook/image/upload/c_scale,q_90,w_1331/v1445388215/169_Gottschalk_Shook_xkvjpa.jpg'},
										{image : 'http://res.cloudinary.com/dillonshook/image/upload/v1445388215/barrels_np2eid.jpg'},
										{image : 'http://res.cloudinary.com/dillonshook/image/upload/c_scale,q_89,w_1331/v1445388217/126_Gottschalk_Shook_f3jnry.jpg'},
										{image : 'http://res.cloudinary.com/dillonshook/image/upload/v1445388215/vineyard_zwntkd.jpg'}
								]
	});
});