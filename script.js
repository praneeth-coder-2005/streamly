document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#player');
    const source = 'https://dai.google.com/linear/hls/event/-8ZdRZfGTvG731m1OlXeIg/master.m3u8';

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    }

    const player = new Plyr(video, {
        captions: { active: true, update: true, language: 'en' },
    });
});
