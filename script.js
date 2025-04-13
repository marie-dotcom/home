document.addEventListener("DOMContentLoaded", function() {
    // Display greeting based on time of day
    let greetingElement = document.getElementById("greeting");
    let hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning, reader! 📖";
    } else if (hours < 18) {
        greeting = "Good afternoon, book lover! 📚";
    } else {
        greeting = "Good evening, explore a story! 🌙";
    }

    greetingElement.textContent = greeting;
});

// Book search functionality
function searchBooks() {
    let searchQuery = document.getElementById("searchBox").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            book.style.display = "block"; // Show matching books
        } else {
            book.style.display = "none"; // Hide non-matching books
        }
    });
}