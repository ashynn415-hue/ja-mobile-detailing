J & A MOBILE DETAILING SERVICES — PUBLISHING PACKAGE

WHAT IS READY
- Responsive mobile detailing website
- J & A logo and work gallery
- Services and pricing
- Monday-Saturday 9 AM-8 PM messaging
- Sunday by-appointment messaging
- Vehicle intake form
- Vehicle year/make/model
- Condition 1-10
- Up to 8 vehicle photos / 12 MB total browser check
- Customer contact information
- Cash / online-card payment choice
- Cash App: $jdawg1766
- Water hose + electrical outlet requirements
- Square booking section is already built into the page

IMPORTANT
The website is prepared for a real Square booking calendar, but no Square booking URL has been inserted yet. Do not publish the site as if the calendar is live until the Square account owner has connected the booking flow.

ONE-TIME SQUARE SETUP
1. Create/configure Square Appointments for J & A.
2. Turn on Online Booking.
3. Create these services:
   - Interior Detail — $75
   - Exterior Detail — $60
   - Full Bundle — $170
   - Shampoo / Steam Cleaning — $100-$200 (final price after review)
4. Set availability to Monday-Saturday 9 AM-8 PM.
5. Keep Sunday appointment-only.
6. Enable the payment/prepayment settings you want for online card payments.
7. In Square Dashboard, open Online Booking > Channels and get the booking-flow URL.
8. Open booking-config.js and replace the empty value:
   squareBookingUrl: ""
   with your Square booking URL.
9. Do NOT put Square API secrets, access tokens, passwords, or private keys in this website file.

PUBLISHING
This folder is a static website and can be published on a static host such as Netlify. The vehicle intake form uses Netlify Forms markup (data-netlify="true"). After publishing on Netlify, verify that the form appears under Forms in the Netlify dashboard and test a submission.

PAYMENT SAFETY
Use Square's secure hosted checkout/booking flow for card payments. Never collect full card numbers, CVV codes, or payment secrets in this website's custom HTML form.

CUSTOM DOMAIN
After the site is published, connect your own domain in the hosting provider's domain settings.

FILES
- index.html
- styles.css
- script.js
- booking-config.js
- logo.jpg
- work-gallery.jpg
