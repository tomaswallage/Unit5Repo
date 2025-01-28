document.addEventListener("DOMContentLoaded", function () {
    const hoverWord = document.querySelector(".hover-word");
    const hoverImage = document.getElementById("hover-image");

    hoverWord.addEventListener("mouseenter", function (event) {
        // Get the image source from the data attribute
        const imageUrl = hoverWord.getAttribute("data-image");
        hoverImage.src = imageUrl;

        // Show the image and position it near the word
        hoverImage.style.display = "block";
        hoverImage.style.top = event.clientY + 10 + "px"; // Slight offset
        hoverImage.style.left = event.clientX + 10 + "px";
    });

    hoverWord.addEventListener("mouseleave", function () {
        hoverImage.style.display = "none"; // Hide when not hovering
    });
});
