document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const container = document.getElementById("size-controls");

  if (!wrapper || !container) return;

  const sizes = [
    { label: "5", width: "50%" },
    { label: "6", width: "60%" },
    { label: "7", width: "70%" },
    { label: "8", width: "80%" },
    { label: "9", width: "90%" },
    { label: "10", width: "100%" }
  ];

  sizes.forEach(({ label, width }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.dataset.width = width;
    btn.className =
      "size-button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400";

    btn.addEventListener("click", () => {
      wrapper.style.width = width;
      wrapper.style.marginInline = "auto";
    });

    container.appendChild(btn);
  });
});
