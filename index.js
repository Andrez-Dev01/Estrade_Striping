console.log('Happy developing ✨')

// Instagram link handler for mobile
document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.querySelector('.instagram-link');

    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            e.preventDefault();

            // Check if mobile device
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            const isAndroid = /Android/i.test(navigator.userAgent);

            if (isMobile) {
                let appUrl;

                if (isIOS) {
                    // iOS - try the instagram:// scheme
                    appUrl = 'instagram://user?username=estrada_striping';
                } else if (isAndroid) {
                    // Android - use intent URL
                    appUrl = 'intent://instagram.com/_u/estrada_striping/#Intent;package=com.instagram.android;scheme=https;end';
                }

                // Try to open app
                const startTime = Date.now();
                window.location.href = appUrl;

                // If app doesn't open within 1.5 seconds, redirect to web
                setTimeout(function() {
                    if (Date.now() - startTime < 2000) {
                        window.location.href = 'https://www.instagram.com/estrada_striping/';
                    }
                }, 1500);
            } else {
                // Desktop - open in new tab
                window.open('https://www.instagram.com/estrada_striping/', '_blank');
            }
        });
    }
});
