# WhuipsandChains – Luxury Auto & Motorcycle Dealership By Chiaji Patrick

## Project Overview

WhuipsandChains is a fully responsive multi-page web application for a premium luxury vehicle dealership. The website allows customers to browse an inventory of high-end cars and motorcycles, view detailed vehicle history reports, calculate financing payments, and get instant trade-in valuations. The project was built using HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5.

The dealership name reflects a dual commitment: "Whuips" for the thrill of the ride and "Chains" for the unbreakable bond with clients. Every vehicle includes a VIN, crash history report, and maintenance cost estimate, providing complete transparency to buyers.

While the concept and design are original, inspiration was drawn from Ace Prestige Autos for dealership layout patterns. YouTube tutorials provided guidance for the trade-in valuation functionality. Some sections of the trade-in calculator and certain CSS styling elements were refined using AI assistance for code cleanup.


## Technology Stack

- HTML5
- CSS3 
- JavaScript 
- Bootstrap 5 
- Bootstrap Icons
- Git & GitHub 



## Pages Breakdown

### Home Page (HomePage.html)

The landing page features a hero section with the tagline "Where Luxury Meets the Road," a call-to-action button to the inventory, and a statistics section displaying key metrics: vehicles available, customer satisfaction, years of excellence, and concierge support.

**Challenges:** Creating a visually striking hero section without heavy images. Balancing text contrast against the dark background required several iterations.

**Key Code:** The hero uses flexbox for vertical centering. Statistics use Bootstrap's `col-md-3` for four equal columns that stack on mobile.


### Inventory Page (Inventory.html)

The most feature-rich page displays all vehicles in a responsive grid with filtering, sorting, and detailed reporting. The filter bar includes search by brand/model, type dropdown (Cars/Motorcycles), and sort options (default, price low/high, newest year). A reset button clears all filters.

Each vehicle card shows an image, brand, model, year, mileage, transmission, engine, location, abbreviated VIN, price, and status badge. A "Report" button toggles a panel showing the full VIN, crash history, and maintenance estimate.

Eight sample vehicles are stored in a JavaScript array with realistic data including Bentley, Rolls-Royce, Porsche, Ducati, and Harley-Davidson models.

**Challenges:** Implementing dynamic card rendering and filtering without conflicts. Debugging duplicate function issues that broke inventory rendering.

**Key Code:** The `renderInventory` function generates HTML using template literals. `getFilteredAndSorted` applies search, type, and sort filters. `applyFilters` calls `getFilteredAndSorted` then `renderInventory`. Event listeners on inputs trigger `applyFilters`. Report buttons use `data-id` attributes and `classList.toggle('show')`.



### About Page (About.html)

Shares the dealership's story, founding year (2026), and meaning behind the name. A values section displays three core principles: Excellence, Integrity, and Passion.

**Challenges:** Creating an authentic company story that wasn't generic while maintaining the luxury aesthetic.

**Key Code:** Values use three cards with `col-md-4` on desktop. Cards have a hover effect using `transform: translateY(-4px)`. CSS variables maintain consistent gold accents.


### Contact Page (Contact.html)

Displays location, phone, email, and working hours. A contact form includes client-side validation checking name length, email format, and message length (10+ characters). Validation errors appear inline, and a success message appears on valid submission.

**Challenges:** Implementing user-friendly validation without annoying users. Error messages needed to appear and disappear correctly without interfering with other form elements.

**Key Code:** The submit listener prevents default behavior and runs validation. `showError` creates error divs with styling and sets up `input` listeners to remove errors when typing. Success messages are appended and auto-removed after five seconds.


### Financing Page (Financing.html)

Includes a payment calculator estimating monthly loan payments. Users enter vehicle price, interest rate, and loan term in months. The calculator displays monthly payment, total payment, total interest, and term length.

**Challenges:** Implementing the amortization formula correctly with floating-point precision. Ensuring edge cases (zero interest or zero term) were handled.

**Key Code:** The formula `monthlyPayment = amount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1)` calculates payments. `toLocaleString` formats KES values without decimals. Results use inline styles matching the dark theme.

---

### Service Page (Service.html)

Displays three maintenance packages: Basic (KES 15,000), Full (KES 45,000), and Premium (KES 85,000). Each includes a list of services. A "Book a Service" button links to the Contact page.

**Challenges:** Structuring packages to clearly communicate value differences between tiers.

**Key Code:** Each package uses `service-card` with icons, title, price, and features list. `col-md-4` creates three columns. The booking button is centered using `text-center` and `mt-4`.

---

### Warranty Page (Warranty.html)

Details Standard Warranty (2 years/50,000 km) and Extended Warranty (5 years/100,000 km). Includes coverage features and a step-by-step claims process.

**Challenges:** Presenting comprehensive warranty information clearly without overwhelming users.

**Key Code:** Cards use `col-lg-6` for two columns on large screens. `badge-warranty` creates gold labels for "Included" and "Optional." The claim process uses an ordered list.


### Trade-In Page (Trade-In.html)

Allows customers to get instant vehicle valuations. Users enter make, model, year, mileage, and condition. The calculator uses a database of brand-specific values and realistic depreciation rates. Toyota depreciates ~8% annually, Porsche ~5.5%, Range Rover ~16%. Mileage deductions apply 1.5% per 10,000 km (max 25%). Condition multipliers range from 1.12 (excellent) to 0.55 (poor). Unknown brands default to 1,000,000 KES at 12% depreciation.

**Challenges:** Researching realistic depreciation rates for 35+ brands. Balancing accuracy with simplicity. Updating the calculator while maintaining the same UI.

**Key Code:** `vehicleValues` stores base values and depreciation rates. The depreciation loop applies annual rates for each year of age. Mileage reduction uses `Math.min(Math.floor(mileage / 10000) * 0.015, 0.25)`. Condition multipliers adjust final value. Results display with KES formatting.


### Staff Page (Staff.html)

Introduces six team members with photos, roles, and bios. Includes Managing Director, Head of Sales, Master Technician, Finance Manager, Motorcycle Specialist, and Client Concierge.

**Challenges:** Creating realistic bios that build trust while staying concise.

**Key Code:** Each profile uses `staff-card` with avatar, name, role, and bio. `col-md-4` creates three columns. Avatars use circles with gold borders. Hover effects lift cards.


### FAQ Page (FAQ.html)

Uses Bootstrap's accordion component for six frequently asked questions covering vehicle types, financing, warranty, trade-ins, test drives, and vehicle history reports.

**Challenges:** Writing clear, valuable answers that encourage further engagement.

**Key Code:** The accordion uses `data-bs-toggle="collapse"` with unique target IDs. The first question is open by default using the `show` class.


## Shared Features

**Navigation:** Consistent responsive navbar across all pages with gold underline animation for active links.

**Footer:** Includes dealership name, description, social links, quick links, contact info, and newsletter signup.

**Color Scheme:** Luxury dark theme with black backgrounds, gold accents, and warm off-white text using CSS variables.

**Responsiveness:** Bootstrap grid ensures all pages work on desktop, tablet, and mobile.


## Acknowledgments

- **Ace Prestige Autos:** Inspiration for dealership layout and user experience patterns
- **YouTube:** Tutorials for trade-in valuation calculator logic
- **AI Assistance:** Used sparingly for code cleanup in the trade-in calculator and some CSS styling; core logic and structure remain original work


## Conclusion

WhuipsandChains demonstrates a fully functional multi-page dealership website with realistic content and five interactive JavaScript features. The project exceeds requirements with ten pages, thirty-four incremental Git commits, and a premium browsing experience for potential customers.