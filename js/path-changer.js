function changeChapter(delta) {
const path = window.location.pathname;

// cari chapter_XXX
const match = path.match(/chapter_(\d+)/);

if (!match) {
    alert("Chapter tidak ditemukan di URL!");
    return;
}

const currentNumberStr = match[1];
const currentNumber = parseInt(currentNumberStr, 10);

const newNumber = currentNumber + delta;
if (newNumber < 1) return;

// jaga padding (033 -> 032, 100 -> 099)
const paddedNumber = newNumber
    .toString()
    .padStart(currentNumberStr.length, "0");

const newPath = path.replace(
    /chapter_\d+/,
    `chapter_${paddedNumber}`
);

window.location.pathname = newPath;
}

document.getElementById("prev-chapter").addEventListener("click", () => {
changeChapter(-1);
});

document.getElementById("next-chapter").addEventListener("click", () => {
changeChapter(1);
});
