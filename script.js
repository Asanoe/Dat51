
function confirmBooking(roomName) {
 
    alert("Thank you for choosing Ansu's Resort!");
    
    
    const heroTitle = document.querySelector('.hero-content h1');
    heroTitle.innerHTML = "Reservation Started for " + roomName + "!";
    heroTitle.style.color = "#c5a059"; 
    
    console.log("User interested in: " + roomName);
}
