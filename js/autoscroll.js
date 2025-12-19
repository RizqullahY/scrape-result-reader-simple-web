document.addEventListener('DOMContentLoaded', function () {
    // Referensi elemen DOM
    const scrollSpeedInput = document.getElementById('scroll-speed');
    const startScrollButton = document.getElementById('start-scroll');
    const stopScrollButton = document.getElementById('stop-scroll');

    // Variabel state
    let scrolling = false;
    let scrollSpeed = 0; // Akan diinisialisasi dari input
    let scrollInterval;

    // Inisialisasi kecepatan scroll dari input saat DOM dimuat
    if (scrollSpeedInput) {
        scrollSpeed = parseInt(scrollSpeedInput.value);
    }

    /**
     * Menangani perubahan pada input kecepatan scroll.
     */
    function handleSpeedChange() {
        // Ambil nilai baru, pastikan itu angka (integer)
        scrollSpeed = parseInt(scrollSpeedInput.value);
        
        // Opsional: Jika sedang scroll, restart interval dengan kecepatan baru
        if (scrolling) {
            clearInterval(scrollInterval);
            // Gunakan setTimeout agar tidak langsung dieksekusi sebelum interval baru dibuat
            scrollInterval = setInterval(performScroll, 30);
        }
    }

    /**
     * Logika scroll yang berulang.
     */
    function performScroll() {
        // Mendapatkan posisi scroll saat ini dan menambahkannya dengan kecepatan
        window.scrollBy(0, scrollSpeed);
    }

    /**
     * Memulai fitur auto-scrolling.
     */
    function startScrolling() {
        if (!scrolling) {
            scrolling = true;
            // Nonaktifkan/Aktifkan tombol
            if (startScrollButton) startScrollButton.disabled = true;
            if (stopScrollButton) stopScrollButton.disabled = false;
            
            // Atur interval scroll: jalankan 'performScroll' setiap 30ms
            scrollInterval = setInterval(performScroll, 30);
        }
    }

    /**
     * Menghentikan fitur auto-scrolling.
     */
    function stopScrolling() {
        if (scrolling) {
            scrolling = false;
            // Hentikan interval
            clearInterval(scrollInterval);
            
            // Aktifkan/Nonaktifkan tombol
            if (startScrollButton) startScrollButton.disabled = false;
            if (stopScrollButton) stopScrollButton.disabled = true;
        }
    }

    // --- Penambahan Event Listeners ---

    // 1. Tombol & Input
    if (scrollSpeedInput) {
        // Gunakan 'input' atau 'change'. 'Change' lebih sering digunakan untuk range/input type=number
        scrollSpeedInput.addEventListener('change', handleSpeedChange);
    }

    if (startScrollButton) {
        startScrollButton.addEventListener('click', startScrolling);
    }

    if (stopScrollButton) {
        stopScrollButton.addEventListener('click', stopScrolling);
    }
    
    // 2. Keyboard (ArrowRight/Panah Kanan)
    document.addEventListener('keydown', function (e) {
        if (e.code === "ArrowRight") {
            e.preventDefault(); // Mencegah scrolling browser default
            if (scrolling) {
                stopScrolling();
            } else {
                startScrolling();
            }
        }
    });
    
    /*
    // 3. Tambahan opsional (jika diaktifkan): Hentikan scroll pada interaksi pengguna
    
    document.addEventListener("mousedown", handleUserInteraction);
    document.addEventListener("wheel", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    
    function handleUserInteraction(e) {
        // Pastikan tidak menghentikan scroll jika tombol yang ditekan adalah tombol toggle itu sendiri
        // Untuk keydown, kita hanya ingin mengabaikan ArrowRight, karena itu adalah toggle kita
        if (scrolling && e.code !== "ArrowRight") {
             stopScrolling();
        }
    }
    */
});