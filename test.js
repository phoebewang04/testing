// JavaScript to handle the popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
  
    // Function to open the popup
    openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'flex';
    });
  
    // Function to close the popup
    closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  