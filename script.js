// Function to handle booking clicks
function confirmBooking(roomName) {
    // Basic interaction
    alert("Thank you for choosing Ansu's Resort!");
    
    // Changing the page content dynamically
    const heroTitle = document.querySelector('.hero-content h1');
    heroTitle.innerHTML = "Reservation Started for " + roomName + "!";
    heroTitle.style.color = "#c5a059"; // Changes color to Gold
    
    console.log("User interested in: " + roomName);
}
