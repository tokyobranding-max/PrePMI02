const backdrop = document.querySelector(".product-backdrop");

window.addEventListener("scroll", () => {
    if (!backdrop) return;
    const offset = Math.min(window.scrollY * 0.08, 28);
    backdrop.style.transform = `translateY(${offset}px)`;
});
