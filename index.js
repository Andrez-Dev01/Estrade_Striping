console.log('Happy developing ✨')

// Instagram link handler for mobile
document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.querySelector('.instagram-link');

    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            // Check if mobile device
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                e.preventDefault();

                // Try to open in Instagram app
                const appUrl = 'instagram://user?username=estrada_striping';
                const webUrl = 'https://www.instagram.com/estrada_striping/';

                window.location.href = appUrl;

                // Fallback to web URL if app doesn't open
                setTimeout(function() {
                    window.location.href = webUrl;
                }, 500);
            }
            // Desktop will use the normal href link
        });
    }
});
