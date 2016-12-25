/**
 * Created by Raed Chammam on 12/24/16.
 * License: MIT
 */

(function () {
    // Document ready
    var resizeVideo = function () {
        var videos = document.querySelectorAll('video, object, iframe');

        videos.forEach(function (video) {
            if (video === undefined) {
                return;
            }

            // If directly under body 95% of window
            // otherwise parent width

            var desiredWidth = video.parentNode.offsetWidth || (window.innerWidth) * .95;

            if (!video.dataset.origalWidth) {
                video.dataset.origalWidth = video.getAttribute('width');
                video.dataset.origalHeight = video.getAttribute('height');
            }

            var ratio = desiredWidth / video.dataset.origalWidth;

            video.style.width = desiredWidth + 'px';

            video.style.height = (video.dataset.origalHeight * ratio) + 'px';
        });
    };

    // First run
    resizeVideo();
    // Run every resize
    window.onresize = function () {
        resizeVideo();
    };
})();