// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    modal.style.display = "block"; // Display the modal

    // Assuming the form submission is successful, redirect the user after a certain delay
    setTimeout(function() {
        window.location.href = "https://spectrespammer.github.io/RNPC/";
    }, 5000); // Redirect after 5 seconds (adjust the delay as needed)
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};