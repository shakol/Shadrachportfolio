const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "",
				weight: 12.3
			}, {
				text: "Search Engine Optimization Services",
				weight: 8
			}, {
				text: "",
				weight: 14
			}, {
				text: "",
				weight: 3
			}, {
				text: "Social Media Management Services",
				weight: 7
			}, {
				text: "Social Media Advertising Services",
				weight: 10
			}, {
				text: "Ecommerce Web Design Services",
				weight: 9
			}, {
				text: "",
				weight: 15
			}, {
				text: "",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.","Social Media Marketer","Software Developer","Network Administrator", "Cyber Security", "Video producer", "And provide Technical Solution for Mac and PC."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
