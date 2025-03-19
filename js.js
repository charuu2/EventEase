//window.alert(`Welcome to EventEase`);//pop up
//alert(`hi`); //pop up
//prompt(`hi`);//to take an input




document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    const form = document.querySelector(".form-container form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form submission for validation

        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const eventType = document.getElementById("event-type");
        const message = document.getElementById("message");

        // Check if fields are filled
        if (name.value.trim() === "") {
            alert("Please enter your full name.");
            isValid = false;
        }

        if (email.value.trim() === "" || !validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (phone.value.trim() === "" || !validatePhone(phone.value)) {
            alert("Please enter a valid phone number.");
            isValid = false;
        }

        if (eventType.value === "") {
            alert("Please select an event type.");
            isValid = false;
        }

        if (message.value.trim() === "") {
            alert("Please enter a message.");
            isValid = false;
        }

        if (isValid) {
            alert("Thank you! Your form has been submitted.");
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/; // Assumes a 10-digit phone number
        return phonePattern.test(phone);
    }

    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle (if needed)
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});
