(function($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
	$('#cubeTransition>div:eq(' + (current - 1) + ')').show()

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut top' : 'rotateCubeTopOut top'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut top';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut top';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').show();
		animationOut(current-1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').hide();
		}, 500)

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			animationIn(next-1)
			current = next;
			onGoing = false;
		}, 800)
	}

	$(document).ready(

	function() {
		$(document).mousewheel(function(e, delta) {
			e.preventDefault();
			if (delta < 0) {
				trans('down')
			} else {
				trans('up')
			}
		});
		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					if(next != 10){
						trans('down');
					}
					if(next == 10){
						$(".img_tip").hide();
					}else{
						$(".img_tip").show();
					}
				} else if (direction == "down") {
					if(next != 1){
						trans('up');
					}
					if(next == 10){
						$(".img_tip").hide();
					}else{
						$(".img_tip").show();
					}
				}
			}
		});

	});
})(jQuery);