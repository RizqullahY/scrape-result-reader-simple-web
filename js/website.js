document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");

  function loadImages() {
    wrapper.innerHTML = "";

    let index = 1;
    let errorCount = 0;
    const MAX_ERROR = 5;
    const basePath = "./";

    function getCandidates(i) {
      return [
        String(i).padStart(3, "0") + ".jpg", // 001.jpg
        String(i).padStart(2, "0") + ".jpg", // 01.jpg
        i + ".jpg"                            // 1.jpg
      ];
    }

    function loadNext() {
      if (errorCount >= MAX_ERROR) {
        console.log("Stop load: gambar habis");
        return;
      }

      const candidates = getCandidates(index);
      let tried = 0;

      function tryLoad() {
        if (tried >= candidates.length) {
          errorCount++;
          index++;
          loadNext();
          return;
        }

        const img = new Image();
        img.src = basePath + candidates[tried];

        img.onload = () => {
          errorCount = 0;
          img.className = "w-full mb-2";
          wrapper.appendChild(img);
          index++;
          loadNext();
        };

        img.onerror = () => {
          tried++;
          tryLoad();
        };
      }

      tryLoad();
    }

    loadNext();
  }

  loadImages();
});
