  // Function to open the popup
  function openPopup(popupId) {
    // Show the overlay with the specified ID
    document.getElementById(popupId).style.display = 'flex';
}

// Function to close the popup
function closePopup(popupId) {
    // Hide the overlay with the specified ID
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup when clicking outside the image
document.querySelectorAll('.overlay').forEach(function(popup) {
    popup.addEventListener('click', function(event) {
        if (event.target === this) {
            closePopup(this.id);
        }
    });
});