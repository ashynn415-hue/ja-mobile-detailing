const service = document.querySelector("#service");
const estimate = document.querySelector("#estimate");
const dateInput = document.querySelector("#date");
const timeSelect = document.querySelector("#time");
const form = document.querySelector("#bookingForm");
const photoInput = document.querySelector("#vehicle_photos");
const squareButton = document.querySelector("#squareBookButton");
const squareFrame = document.querySelector("#squareFrame");
const calendarToggle = document.querySelector("#calendarEmbedToggle");
const calendarEmbed = document.querySelector("#calendarEmbed");
const calendarStatus = document.querySelector("#calendarStatus");
const livePill = document.querySelector("#livePill");
const setupMessage = document.querySelector("#setupMessage");

const prices = {
  "Interior Detail": "$75",
  "Exterior Detail": "$60",
  "Interior + Exterior + Shampoo": "$170",
  "Shampoo / Steam Cleaning": "$100–$200"
};

function updateEstimate() {
  if (!service || !estimate) return;
  const value = service.value;
  estimate.textContent = value
    ? `Starting price: ${prices[value]}${value === "Shampoo / Steam Cleaning" ? " • final price confirmed after photos" : ""}`
    : "Select a service to see the starting price.";
}
if (service) service.addEventListener("change", updateEstimate);

function configureSquareBooking() {
  const url = window.JA_BOOKING_CONFIG?.squareBookingUrl?.trim();
  if (!squareButton) return;
  if (url) {
    squareButton.href = url;
    squareButton.target = "_blank";
    squareButton.rel = "noopener";
    squareButton.textContent = "Book with Square";
    if (calendarStatus) calendarStatus.textContent = "Live booking is connected. Choose an available time through Square.";
    if (livePill) { livePill.textContent = "LIVE"; livePill.classList.add("live"); }
    if (setupMessage) setupMessage.hidden = true;
    if (calendarToggle) calendarToggle.hidden = false;
    if (squareFrame) squareFrame.src = url;
  } else {
    squareButton.href = "#vehicle-intake";
    squareButton.textContent = "Connect Square first";
    if (calendarToggle) calendarToggle.hidden = true;
  }
}
configureSquareBooking();

if (calendarToggle) {
  calendarToggle.addEventListener("click", () => {
    const willShow = calendarEmbed.hidden;
    calendarEmbed.hidden = !willShow;
    calendarToggle.textContent = willShow ? "Hide calendar" : "Show calendar";
    if (willShow) calendarEmbed.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

if (photoInput) {
  photoInput.addEventListener("change", () => {
    const files = [...photoInput.files];
    const maxTotal = 12 * 1024 * 1024;
    const total = files.reduce((sum, file) => sum + file.size, 0);
    if (files.length > 8) {
      alert("Please upload up to 8 clear vehicle pictures.");
      photoInput.value = "";
    } else if (total > maxTotal) {
      alert("Please keep the total photo upload under 12 MB.");
      photoInput.value = "";
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    const url = window.JA_BOOKING_CONFIG?.squareBookingUrl?.trim();
    if (!url) {
      // Vehicle intake can still be submitted through Netlify Forms.
      // The booking calendar remains a separate Square connection.
      const proceed = confirm("Your vehicle information can be submitted now. The Square booking calendar still needs to be connected before customers can select an appointment time. Continue?");
      if (!proceed) event.preventDefault();
    }
  });
}

updateEstimate();
