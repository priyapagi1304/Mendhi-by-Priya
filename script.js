/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   DATE SETUP
========================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const todayFormatted = `${year}-${month}-${day}`;

dateInput.min = todayFormatted;


/* =========================
   SELECT PACKAGE
========================= */

function selectPackage(packageName) {

    const mehndiType = document.getElementById("mehndiType");

    const bookingSection = document.getElementById("booking");

    const options = Array.from(mehndiType.options);

    const matchingOption = options.find(function (option) {

        return packageName
            .toLowerCase()
            .includes(option.value.toLowerCase());

    });

    if (matchingOption) {
        mehndiType.value = matchingOption.value;
    }

    bookingSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

const successPopup = document.getElementById("successPopup");

const whatsappBtn = document.getElementById("whatsappBtn");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const date =
        document.getElementById("date").value;

    const mehndiType =
        document.getElementById("mehndiType").value;

    const people =
        document.getElementById("people").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !date || !mehndiType || !people) {

        alert("Please fill all required fields.");

        return;

    }


    /* Date formatting */

    const formattedDate =
        new Date(date + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });


    /* WhatsApp Message */

    const whatsappMessage =
`🌿 *NEW MEHNDI BOOKING*

👩 Name: ${name}

📞 Phone: ${phone}

📅 Date: ${formattedDate}

🎨 Mehndi Type: ${mehndiType}

👥 Number of People: ${people}

📝 Message:
${message || "No additional message"}

✨ Sent from Mehndi by Priya Website`;


    /*
       IMPORTANT:
       Yahan apna WhatsApp number daaliye.

       Country code ke saath number likhein.
       Example:
       919876543210

       + sign, spaces ya dashes mat lagaiye.
    */

    const businessNumber = "919726119915";


    const whatsappURL =
        `https://wa.me/${businessNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    whatsappBtn.href = whatsappURL;


    successPopup.classList.add("show");

});


/* =========================
   CLOSE POPUP
========================= */

function closePopup() {

    successPopup.classList.remove("show");

}


/* =========================
   CLOSE POPUP OUTSIDE
========================= */

successPopup.addEventListener("click", function (event) {

    if (event.target === successPopup) {

        closePopup();

    }

});
