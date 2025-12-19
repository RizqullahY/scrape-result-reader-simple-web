document.addEventListener('DOMContentLoaded', function () {
    // 1. Dapatkan referensi ke tombol
    const fullscreenButton = document.getElementById('fullscreen-button');

    // 2. Tambahkan event listener untuk klik tombol
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', toggleFullScreen);
    }

    /**
     * Fungsi untuk masuk/keluar dari mode layar penuh.
     */
    function toggleFullScreen() {
        // Cek apakah saat ini dalam mode layar penuh
        if (!document.fullscreenElement && // Standar W3C
            !document.mozFullScreenElement && // Firefox
            !document.webkitFullscreenElement && // Chrome, Safari, Opera
            !document.msFullscreenElement) { // IE/Edge
            
            // MASUK ke mode Layar Penuh
            
            // Dapatkan elemen yang akan ditampilkan layar penuh (dalam hal ini, seluruh dokumen)
            const element = document.documentElement;

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                /* Firefox */
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                /* IE/Edge */
                element.msRequestFullscreen();
            }
            
            // Teks tombol akan diperbarui oleh event listener 'fullscreenchange'
            
        } else {
            // KELUAR dari mode Layar Penuh

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                /* IE/Edge */
                document.msExitFullscreen();
            }
            
            // Teks tombol akan diperbarui oleh event listener 'fullscreenchange'
        }
    }

    // 3. Tangani perubahan status layar penuh (saat pengguna menekan tombol ESC, dll.)
    // Ini menggantikan bagian $(document).on('fullscreenchange...') pada jQuery
    document.addEventListener('fullscreenchange', updateButtonText);
    document.addEventListener('mozfullscreenchange', updateButtonText);
    document.addEventListener('webkitfullscreenchange', updateButtonText);
    document.addEventListener('msfullscreenchange', updateButtonText);

    /**
     * Memperbarui teks tombol berdasarkan status layar penuh saat ini.
     */
    function updateButtonText() {
        if (!fullscreenButton) return;
        
        // Cek apakah saat ini dalam mode layar penuh
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            fullscreenButton.textContent = "Exit";
        } else {
            fullscreenButton.textContent = "Fullscreen";
        }
    }
    
    // Panggil sekali saat dimuat untuk memastikan teks awal sudah benar jika halaman sudah layar penuh (jarang terjadi)
    updateButtonText();
});