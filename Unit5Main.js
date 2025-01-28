
// List of background images
const images = [
    'webimages/image1.jpg',
    'webimages/image2.jpg',
    'webimages/image3.jpg',
    'webimages/image4.PNG',
    'webimages/image5.jpg',
    'webimages/imageclock.PNG',
    'webimages/image7.jpg',
    'webimages/image8.jpg',
    'webimages/image9.jpg'
];

// Function to change the background based on mouse X position
document.addEventListener('mousemove', (event) => {
    const screenWidth = window.innerWidth; // Total screen width
    const mouseX = event.clientX; // Current mouse position

    // Divide screen into 5 sections (for 5 images)
    const index = Math.floor((mouseX / screenWidth) * images.length);

    // Update background image
    document.body.style.backgroundImage = `url('${images[index]}')`;
});

/*
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Update cursor position based on mouse movement
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)"; // Cursor enlarges
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)"; // Cursor returns to normal size
    });
}); */

const headers = document.querySelectorAll(".header-container ul li a");

headers.forEach((header) => {
    header.addEventListener("mouseenter", () => {
        headers.forEach((otherHeader) => {
            if (otherHeader !== header) {
                otherHeader.classList.add("dimmed"); // Dim all other headers
            }
        });
    });

    header.addEventListener("mouseleave", () => {
        headers.forEach((otherHeader) => {
            otherHeader.classList.remove("dimmed"); // Restore all headers
        });
    });
});

const sections = document.querySelectorAll(".section-content");
const headerContainer = document.querySelector(".header-container");

headers.forEach((header, index) => {
    header.addEventListener("click", (event) => {
        // event.preventDefault(); // Prevent default link behavior

        // Hide all headers except the clicked one
        headerContainer.classList.add("hide-headers");
        header.classList.add("active-header");

        // Hide all sections and show only the selected one
        sections.forEach((section) => section.style.display = "none");
        const sectionId = header.getAttribute("data-section");
        document.getElementById(sectionId).style.display = "block";
    });
});

