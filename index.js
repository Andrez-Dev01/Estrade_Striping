console.log('Happy developing ✨')

// Video Showcase Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalVideoSource = document.getElementById('modal-video-source');
    const closeBtn = document.querySelector('.video-modal-close');
    let hoverTimeout = null;

    videoCards.forEach(card => {
        const video = card.querySelector('.showcase-video');

        // Click or hover to open modal
        function openModal() {
            const videoSrc = video.querySelector('source').src;
            modalVideoSource.src = videoSrc;
            modalVideo.load();
            modalVideo.play();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        // Immediate open on click
        card.addEventListener('click', openModal);

        // Delayed open on hover
        card.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(openModal, 5000); // 5 second delay
        });

        // Cancel hover timeout if mouse leaves
        card.addEventListener('mouseleave', function() {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        modalVideo.pause();
        modalVideoSource.src = '';
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
