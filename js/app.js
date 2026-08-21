document.addEventListener("DOMContentLoaded", () => {
    // Header-logik (dölj/visa vid scroll)
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 120) {
            header.classList.add("header-hidden");
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove("header-hidden");
        }
        lastScrollY = Math.max(0, currentScrollY);
    });

    // Funktion för att visa en toast-notifiering
    function showToast(message) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.textContent = message;

        document.body.appendChild(toast);

        // Starta animationen
        setTimeout(() => {
            toast.classList.add("show");
        }, 50);

        // Stäng och ta bort efter 3 sekunder
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Knapp-logik för priskort
    const buttonPrice = document.querySelectorAll(".price");
    buttonPrice.forEach(button => {
        button.addEventListener("click", () => {
            showToast("Produkt tillagd i varukorg!");
        });
    });
});