// VEHICLE DATA
const vehicles = [{
    id: 1,
    type: "car",
    brand: "Bentley",
    model: "Continental GT",
    year: 2023,
    price: 32000000,
    priceDisplay: "KES 32,000,000",
    mileage: 18500,
    mileageDisplay: "18,500 km",
    transmission: "8-Speed Automatic",
    engine: "6.0L W12 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "SCBDR3ZA7PC012349",
    image: "images/Bentley Continental GT Speed.jpeg",
    crashHistory: "Pristine condition. Single owner. Full Bentley service history. No accidents.",
    maintenanceCost: "KES 450,000/year: Factory servicing, premium parts, specialized technicians."
}, {
    id: 2,
    type: "car",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2022,
    price: 45000000,
    priceDisplay: "KES 45,000,000",
    mileage: 12050,
    mileageDisplay: "12,050 km",
    transmission: "8-Speed Automatic",
    engine: "6.75L V12",
    location: "Nairobi",
    status: "In Stock",
    vin: "SCA664L57NUX12346",
    image: "images/Rolls-Royce Ghost.jpeg",
    crashHistory: "Immaculate. Chauffeur-driven. Complete service records. No claims.",
    maintenanceCost: "KES 600,000/year: Bespoke servicing, factory-trained technicians."
}, {
    id: 3,
    type: "car",
    brand: "Mercedes-Benz",
    model: "S-Class Maybach",
    year: 2024,
    price: 38000000,
    priceDisplay: "KES 38,000,000",
    mileage: 12500,
    mileageDisplay: "12,500 km",
    transmission: "9-Speed Automatic",
    engine: "4.0L V8 Biturbo",
    location: "Mombasa",
    status: "In Stock",
    vin: "WDX7J8KB6RP123457",
    image: "images/Maybach S class.jpeg",
    crashHistory: "Showroom condition. Executive use. Full warranty remaining.",
    maintenanceCost: "KES 350,000/year: Premium servicing, genuine parts."
}, {
    id: 4,
    type: "car",
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2023,
    price: 25000000,
    priceDisplay: "KES 25,000,000",
    mileage: 9800,
    mileageDisplay: "9,800 km",
    transmission: "8-Speed PDK",
    engine: "3.8L Flat-6 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "WP0AD2A90PSA12348",
    image: "images/Porsche 911 turbo s.jpeg",
    crashHistory: "Track-ready. Garage kept. No accidents. Ceramic brakes.",
    maintenanceCost: "KES 400,000/year: Performance servicing, specialized parts."
}, {
    id: 5,
    type: "car",
    brand: "Range Rover",
    model: "Autobiography LWB",
    year: 2023,
    price: 29000000,
    priceDisplay: "KES 29,000,000",
    mileage: 22000,
    mileageDisplay: "22,000 km",
    transmission: "8-Speed Automatic",
    engine: "4.4L V8 Diesel",
    location: "Nairobi",
    status: "In Stock",
    vin: "SALGL2SE3PA123459",
    image: "images/Range Rover Autobiography LWB.jpeg",
    crashHistory: "Well-maintained. Full service history. No accidents.",
    maintenanceCost: "KES 280,000/year: Diesel servicing, specialized off-road checks."
}, {
    id: 6,
    type: "motorcycle",
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    price: 3200000,
    priceDisplay: "KES 3,200,000",
    mileage: 3800,
    mileageDisplay: "3,800 km",
    transmission: "6-Speed Sequential",
    engine: "1,103cc V4",
    location: "Nairobi",
    status: "In Stock",
    vin: "ZDMH6AAE0RB123451",
    image: "images/Ducati Panigale v4.jpeg",
    crashHistory: "Never dropped. Break-in service completed. Track-ready.",
    maintenanceCost: "KES 180,000/year: Desmo service, premium tires, chain maintenance."
}, {
    id: 7,
    type: "motorcycle",
    brand: "Harley-Davidson",
    model: "CVO Road Glide",
    year: 2023,
    price: 4200000,
    priceDisplay: "KES 4,200,000",
    mileage: 9800,
    mileageDisplay: "9,800 km",
    transmission: "6-Speed Sequential",
    engine: "1,977cc V-Twin",
    location: "Mombasa",
    status: "In Stock",
    vin: "1HD1KRR14PB123452",
    image: "images/Harley-Davidson CVO Road Glide.jpeg",
    crashHistory: "Garage kept. Custom paint. No accidents. Full service records.",
    maintenanceCost: "KES 220,000/year: Belt drive, premium oil, custom parts."
}, {
    id: 8,
    type: "motorcycle",
    brand: "BMW",
    model: "K1600 GTL",
    year: 2022,
    price: 2800000,
    priceDisplay: "KES 2,800,000",
    mileage: 18000,
    mileageDisplay: "18,000 km",
    transmission: "6-Speed Sequential",
    engine: "1,649cc Inline-6",
    location: "Nairobi",
    status: "In Stock",
    vin: "WB10K1604NW123453",
    image: "images/BMW K1600 GTL.jpeg",
    crashHistory: "Touring maintained. Regular services. No accidents.",
    maintenanceCost: "KES 200,000/year: Full servicing, shaft drive maintenance."
}, {
    id: 9,
    type: "car",
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2025,
    price: 23000000,
    priceDisplay: "KES 23,000,000",
    mileage: 27000,
    mileageDisplay: "27,000 km",
    transmission: "10-Speed Automatic",
    engine: "3.5L V6 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "JTMHY3FJ0P1234568",
    image: "images/Toyota LandCruiser 300.jpeg",
    crashHistory: "No previous owner. Straight from Factory. Full Toyota service history. No accidents.",
    maintenanceCost: "KES 250,000/year: Full servicing, tire rotation."
}, {
    id: 10,
    type: "car",
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: 2024,
    price: 45000000,
    priceDisplay: "KES 45,000,000",
    mileage: 27000,
    mileageDisplay: "27,000 km",
    transmission: "7-Speed Automatic",
    engine: "6.5L V12 N/A",
    location: "Mombasa",
    status: "In Stock",
    vin: "ZHWUT7ZP6ML123457",
    image: "images/Lamborghini Aventador SVJ.jpeg",
    crashHistory: "Minor accident to the rear left quarter panel. Factory repairs completed. Full service history.",
    maintenanceCost: "KES 550,000/year: Specialized servicing, premium parts."
},{
    id: 11,
    type: "car",
    brand: "Ferrari",
    model: "Purosangue Fiorano Package",
    year: 2025,
    price: 140000000,
    priceDisplay: "KES 140,000,000",
    mileage: 10500,
    mileageDisplay: "10500 km",
    transmission: "7-Speed Automatic",
    engine: "6.5L V12 N/A",
    location: "Roadster, Italy",
    status: "In Transit",
    vin: "ZFF78RLA1R1234567",
    image: "images/Purosangue Fiorano Package.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 650,000/year: Specialized servicing, premium parts."
},{
    id: 12,
    type: "motorcycle",
    brand: "BMW",
    model: "S1000 RR",
    year: 2024,
    price: 3000000,
    priceDisplay: "KES 3,000,000",  
    mileage: 5000,
    mileageDisplay: "5,000 km",
    transmission: "6-Speed Sequential",
    engine: "999cc Inline-4",
    location: "Nairobi",
    status: "In Stock",
    vin: "WB10S4100NW123458",
    image: "images/BMW S1000RR.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 160,000/year: Specialized servicing, premium parts."
}, {
    id: 13,
    type: "motorcycle",
    brand: "Kawasaki",
    model: "Ninja H2",
    year: 2025,
    price: 5700000,
    priceDisplay: "KES 5,700,000",
    mileage: 1500,
    mileageDisplay: "1,500 km",
    transmission: "6-Speed Sequential",
    engine: "998cc Inline-4",
    location: "Mombasa",
    status: "In Stock",
    vin: "JH2SC59057K000123",
    image: "images/Ninja h2.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 290,000/year: Specialized track servicing, premium track-focused parts."
}, {
    id: 14,
    type: "motorcycle",
    brand: "Yamaha",
    model: "YZF-R1",
    year: 2024,
    price: 4500000,
    priceDisplay: "KES 4,500,000",
    mileage: 2000,
    mileageDisplay: "2,000 km",
    transmission: "6-Speed Sequential",
    engine: "998cc Inline-4",
    location: "Nairobi",
    status: "In Stock",
    vin: "JYARN37E5YA012345",
    image: "images/YZF-R1.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 220,000/year: Specialized servicing, premium parts."
}, {
    id: 15,
    type: "car",
    brand: "Lamborghini",
    model: "Urus Performante",
    year: 2025,
    price: 135000000,
    priceDisplay: "KES 135,000,000",
    mileage: 1342,
    mileageDisplay: "1,342 km",
    transmission: "8-Speed Automatic",
    engine: "4.0L V8",
    location: "Nairobi",
    status: "In Stock",
    vin: "ZHWUT9ZP6ML123459",
    image: "images/Lamborghini Urus Performante.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 650,000/year: Specialized servicing, premium parts."
}, {
    id: 16,
    type: "car",
    brand: "Aston Martin",
    model: "DBX707",
    year: 2025,
    price: 57000000,
    priceDisplay: "KES 57,000,000",
    mileage: 10800,
    mileageDisplay: "10,800 km",
    transmission: "9-Speed Automatic",
    engine: "4.0L V8 Twin-Turbo",
    location: "Mombasa",
    status: "In Stock",
    vin: "SCFAM02A0KB123460",
    image: "images/Aston Martin DBX707.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 280,000/year: Specialized servicing, premium parts."
}, {
    id: 17,
    type: "car",
    brand: "Maserati",
    model: "Levante Trofeo",
    year: 2024,
    price: 38500000,
    priceDisplay: "KES 38,500,000",
    mileage: 15300,
    mileageDisplay: "15,300 km",
    transmission: "9-Speed Automatic",
    engine: "4.0L V8 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "ZAM57LHA0R1234612",
    image: "images/Maserati Levante Trofeo.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 160,000/year: Specialized servicing, premium parts."
 }, {
    id: 18,
    type: "car",
    brand: "Cadillac",
    model: "Escalade V-Series",
    year: 2025,
    price: 48000000,
    priceDisplay: "KES 48,000,000",
    mileage: 5200,
    mileageDisplay: "5,200 km",
    transmission: "9-Speed Automatic",
    engine: "6.2L V8 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "1GYS4HKJ0RR123462",
    image: "images/Cadillac Escalade V-Series.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 175,000/year: Specialized servicing, premium parts."
}, {
    id: 19,
    type: "car",
    brand: "Lincoln",
    model: "Navigator Black Label",
    year: 2025,
    price: 13500000,
    priceDisplay: "KES 16,500,000",
    mileage: 4000,
    mileageDisplay: "4,000 km",
    transmission: "9-Speed Automatic",
    engine: "3.5L V6 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "5LMJJ2HT0SEG12346",
    image: "images/Licoln Navigator Black-Label.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 675,000/year: Specialized servicing, premium parts."
}, {
    id: 20,
    type: "car",
    brand: "Bmw Alpina",
    model: "XB7",
    year: 2025,
    price: 68000000,
    priceDisplay: "KES 68,000,000",
    mileage: 800,
    mileageDisplay: "800 km",
    transmission: "9-Speed Automatic",
    engine: "4.4L V8 Twin-Turbo & hybrid motor",
    location: "Nairobi",
    status: "In Stock",
    vin: "WBA4B1C54LF123463",
    image: "images/Alpina XB7 showroom.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 700,000/year: Specialized servicing, premium parts."
}, {
    id: 21,
    type: "car",
    brand: "Audi",
    model: "R8 V10 Performance",
    year: 2025,
    price: 55000000,
    priceDisplay: "KES 55,000,000",
    mileage: 4570,
    mileageDisplay: "4,570 km",
    transmission: "8-Speed Automatic",
    engine: "5.2L V10 N/A",
    location: "Nairobi",
    status: "In Stock",
    vin: "WUAZZZ4F1N1234645",
    image: "images/Audi R8 V10 Performance.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 550,000/year: Specialized servicing, premium parts."
}, {
    id: 22,
    type: "car",
    brand: "Porsche",
    model: "918 Spyder",
    year: 2015,
    price: 650000000,
    priceDisplay: "KES 650,000,000",
    mileage: 200,
    mileageDisplay: "200 km",
    transmission: "8-Speed Automatic",
    engine: "4.6L V8 Hybrid",
    location: "Stuttgart, Germany",
    status: "In Transit",
    vin: "WP0ZZZ99ZTS392124",
    image: "images/Porsche 918 Spyder.jpeg",
    crashHistory: "No accidents.Fully restored by Porsche Sonderwerks. Full service history.",
    maintenanceCost: "KES 1,100,000/year: Specialized servicing, premium parts."
}, {
    id: 23,
    type: "car",
    brand: "Rolls-Royce",
    model: "Spectre Black Badge",
    year: 2025,
    price: 175000000,
    priceDisplay: "KES 175,000,000",
    mileage: 3300,
    mileageDisplay: "3,300 km",
    transmission: "Single-speed direct drive",
    engine: "Dual Synchronous Electric Motors",
    location: "Goodwood, UK",
    status: "In Transit",
    vin: "SCA3B2ZC6PC123465",
    image: "images/Rolls-Royce Spectre Black Badge.jpeg",
    crashHistory: "No accidents. Full service history.",
    maintenanceCost: "KES 850,000/year: Specialized servicing, premium parts."
}
];

console.log('Vehicles loaded:', vehicles.length);


// RENDER INVENTORY
const grid = document.getElementById('vehicleGrid');
const resultCount = document.getElementById('resultCount');

function renderInventory(list) {
    if (!grid) return;
    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-4 text-muted"></i>
                <p class="text-muted mt-3">No vehicles match your criteria.</p>
            </div>
        `;
        resultCount.textContent = '0 vehicles found';
        return;
    }

    let html = '';
    list.forEach(v => {
        const vinShort = v.vin ? v.vin.slice(-6) : 'N/A';
        html += `
            <div class="col-md-6 col-lg-4">
                <div class="vehicle-card">
                    <img src="${v.image}" class="card-img-top" alt="${v.brand} ${v.model}" />
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="card-title">${v.brand} ${v.model}</h5>
                            <span class="badge-status badge-in-stock">${v.status}</span>
                        </div>
                        <div class="vehicle-meta">
                            <p class="mb-1"><i class="bi bi-calendar3"></i> ${v.year} · <i class="bi bi-speedometer2"></i> ${v.mileageDisplay}</p>
                            <p class="mb-1"><i class="bi bi-gear"></i> ${v.transmission}</p>
                            <p class="mb-1"><i class="bi bi-fuel-pump"></i> ${v.engine}</p>
                            <p class="mb-2"><i class="bi bi-geo-alt"></i> ${v.location} · <i class="bi bi-upc-scan"></i> VIN: …${vinShort}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="price">${v.priceDisplay}</span>
                                <button class="btn-report" data-id="${v.id}">
                                    <i class="bi bi-file-text"></i> Report
                                </button>
                            </div>
                        </div>
                        <div id="report-${v.id}" class="report-panel">
                            <p><strong>Full VIN:</strong> ${v.vin}</p>
                            <p><strong>Crash History:</strong> ${v.crashHistory}</p>
                            <p><strong>Maintenance Estimate:</strong> ${v.maintenanceCost}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
    resultCount.textContent = `${list.length} vehicle${list.length > 1 ? 's' : ''} found`;

    document.querySelectorAll('.btn-report').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const panel = document.getElementById(`report-${id}`);
            if (panel) panel.classList.toggle('show');
        });
    });
}
// FILTER AND SORT
function getFilteredAndSorted() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const type = document.getElementById('typeFilter').value;
    const sort = document.getElementById('sortSelect').value;

    let result = [...vehicles];

    if (search) {
        result = result.filter(v =>
            v.brand.toLowerCase().includes(search) ||
            v.model.toLowerCase().includes(search)
        );
    }

    if (type !== 'all') {
        result = result.filter(v => v.type === type);
    }

    switch (sort) {
        case 'price-low':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'year-new':
            result.sort((a, b) => b.year - a.year);
            break;
        default:
            break;
    }

    return result;
}

function applyFilters() {
    const filtered = getFilteredAndSorted();
    renderInventory(filtered);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = 'all';
    document.getElementById('sortSelect').value = 'default';
    applyFilters();
}
 
// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    const sortSelect = document.getElementById('sortSelect');
    const resetBtn = document.getElementById('resetFiltersBtn');

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (typeFilter) typeFilter.addEventListener('change', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);

    applyFilters();
});
// CONTACT FORM VALIDATION
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        document.querySelectorAll('.error-message').forEach(el => el.remove());

        if (name.value.trim().length < 2) {
            showError(name, 'Please enter your full name.');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, 'Please enter a message (at least 10 characters).');
            isValid = false;
        }

        if (isValid) {
            const successDiv = document.createElement('div');
            successDiv.className = 'alert alert-success mt-3';
            successDiv.style.backgroundColor = '#1a3a2a';
            successDiv.style.color = '#6bcb9a';
            successDiv.style.border = '1px solid #2a4a3a';
            successDiv.innerHTML = 'Your message has been sent. We will be in touch shortly.';
            form.appendChild(successDiv);
            form.reset();
            setTimeout(() => successDiv.remove(), 5000);
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = '#cb6b6b';
        error.style.fontSize = '0.85rem';
        error.style.marginTop = '0.25rem';
        error.textContent = message;
        input.parentNode.appendChild(error);
        input.style.borderColor = '#cb6b6b';
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            const err = this.parentNode.querySelector('.error-message');
            if (err) err.remove();
        });
    }
});

// FINANCING PAYMENT CALCULATOR
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('financeForm');
    const resultDiv = document.getElementById('paymentResult');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const amount = parseFloat(document.getElementById('loanAmount').value);
        const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
        const term = parseInt(document.getElementById('loanTerm').value);

        if (amount <= 0 || rate < 0 || term <= 0) {
            resultDiv.innerHTML = `
                <div class="alert" style="background:#3a1a1a; color:#cb6b6b; border:1px solid #4a2a2a; padding:1rem; border-radius:4px; margin-top:1.5rem;">
                    Please enter valid values for all fields.
                </div>
            `;
            return;
        }

        const monthlyPayment = amount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        const totalPayment = monthlyPayment * term;
        const totalInterest = totalPayment - amount;

        resultDiv.innerHTML = `
            <div style="background:var(--secondary-dark); border:1px solid var(--accent-gold); padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
                <h5 style="color:var(--accent-gold); margin-bottom:1rem;">Payment Summary</h5>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                    <div>
                        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.25rem;">Monthly Payment</p>
                        <p style="font-size:1.5rem; font-weight:700; color:var(--text-light);">KES ${monthlyPayment.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}</p>
                    </div>
                    <div>
                        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.25rem;">Total Payment</p>
                        <p style="font-size:1.5rem; font-weight:700; color:var(--text-light);">KES ${totalPayment.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}</p>
                    </div>
                    <div>
                        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.25rem;">Total Interest</p>
                        <p style="font-size:1.3rem; font-weight:600; color:var(--accent-gold);">KES ${totalInterest.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}</p>
                    </div>
                    <div>
                        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.25rem;">Loan Term</p>
                        <p style="font-size:1.3rem; font-weight:600; color:var(--text-light);">${term} months</p>
                    </div>
                </div>
            </div>
        `;
    });
});
// TRADE-IN VALUATION CALCULATOR
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tradeinForm');
    const resultDiv = document.getElementById('valuationResult');

    if (!form) return;

    const vehicleValues = {

        // Japanese brands (hold value well)
        'toyota': { base: 1500000, annualDepreciation: 0.08 },
        'lexus': { base: 2000000, annualDepreciation: 0.07 },
        'honda': { base: 1200000, annualDepreciation: 0.075 },
        'subaru': { base: 1100000, annualDepreciation: 0.085 },
        'mazda': { base: 1000000, annualDepreciation: 0.09 },
        'nissan': { base: 900000, annualDepreciation: 0.10 },
        'suzuki': { base: 800000, annualDepreciation: 0.095 },

        // German luxury (depreciate faster)
        'bmw': { base: 2500000, annualDepreciation: 0.11 },
        'mercedes': { base: 3000000, annualDepreciation: 0.10 },
        'mercedes-benz': { base: 3000000, annualDepreciation: 0.10 },
        'audi': { base: 2800000, annualDepreciation: 0.105 },
        'volkswagen': { base: 1200000, annualDepreciation: 0.12 },
        'porsche': { base: 18000000, annualDepreciation: 0.055 },
        'porsche 911': { base: 18000000, annualDepreciation: 0.055 },

        // British luxury
        'bentley': { base: 20000000, annualDepreciation: 0.12 },
        'rolls-royce': { base: 30000000, annualDepreciation: 0.10 },
        'range rover': { base: 12000000, annualDepreciation: 0.16 },
        'land rover': { base: 8000000, annualDepreciation: 0.15 },
        'jaguar': { base: 6000000, annualDepreciation: 0.14 },
        'aston martin': { base: 22000000, annualDepreciation: 0.12 },

        // American
        'ford': { base: 1000000, annualDepreciation: 0.13 },
        'chevrolet': { base: 900000, annualDepreciation: 0.14 },
        'dodge': { base: 800000, annualDepreciation: 0.15 },
        'jeep': { base: 850000, annualDepreciation: 0.14 },
        'tesla': { base: 4000000, annualDepreciation: 0.12 },

        // Italian supercars
        'ferrari': { base: 25000000, annualDepreciation: 0.07 },
        'lamborghini': { base: 28000000, annualDepreciation: 0.08 },
        'maserati': { base: 12000000, annualDepreciation: 0.13 },

        // Korean
        'hyundai': { base: 700000, annualDepreciation: 0.11 },
        'kia': { base: 650000, annualDepreciation: 0.11 },

        // Japanese bikes (hold value well)
        'honda motorcycle': { base: 900000, annualDepreciation: 0.075 },
        'yamaha': { base: 800000, annualDepreciation: 0.085 },
        'kawasaki': { base: 700000, annualDepreciation: 0.10 },
        'suzuki motorcycle': { base: 650000, annualDepreciation: 0.095 },

        // European bikes
        'ducati': { base: 2500000, annualDepreciation: 0.10 },
        'bmw motorcycle': { base: 2000000, annualDepreciation: 0.10 },
        'triumph': { base: 1800000, annualDepreciation: 0.11 },
        'aprilia': { base: 1500000, annualDepreciation: 0.12 },
        'ktm': { base: 1200000, annualDepreciation: 0.11 },

        // American bikes
        'harley-davidson': { base: 2800000, annualDepreciation: 0.08 },
        'harley': { base: 2800000, annualDepreciation: 0.08 },
        'indian': { base: 2500000, annualDepreciation: 0.09 }
    };

    // Fallback for unknown brands
    const DEFAULT_VALUE = { base: 1000000, annualDepreciation: 0.12 };

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get user inputs
        const make = document.getElementById('vehicleMake').value.toLowerCase().trim();
        const model = document.getElementById('vehicleModel').value.trim();
        const year = parseInt(document.getElementById('vehicleYear').value);
        const mileage = parseInt(document.getElementById('vehicleMileage').value);
        const condition = document.getElementById('vehicleCondition').value;

        if (!make || !model || !year || !mileage) {
            resultDiv.innerHTML = `
                <div style="background:#3a1a1a; color:#cb6b6b; border:1px solid #4a2a2a; padding:1rem; border-radius:4px; margin-top:1.5rem;">
                    Please fill in all fields.
                </div>
            `;
            return;
        }

        let brandData = null;
        for (const [key, value] of Object.entries(vehicleValues)) {
            if (make.includes(key)) {
                brandData = value;
                break;
            }
        }

        if (!brandData) {
            brandData = DEFAULT_VALUE;
        }

        // ===== CALCULATE DEPRECIATION =====
        const currentYear = 2026;
        const age = currentYear - year;

        let value = brandData.base;


        for (let i = 0; i < age; i++) {
            value = value * (1 - brandData.annualDepreciation);
        }


        value = Math.max(value, 50000);

        
        const mileageReduction = Math.min(Math.floor(mileage / 10000) * 0.015, 0.25);
        value = value * (1 - mileageReduction);

        const conditionMultipliers = {
            'excellent': 1.12,  // +12% for excellent condition
            'good': 1.00,       // 0% for good condition
            'fair': 0.80,       // -20% for fair condition
            'poor': 0.55        // -45% for poor condition
        };
        value = value * (conditionMultipliers[condition] || 1.00);


        value = Math.max(Math.round(value), 50000);

        //  DISPLAY RESULT 
        const displayMake = make.charAt(0).toUpperCase() + make.slice(1);

        resultDiv.innerHTML = `
            <div style="background:var(--secondary-dark); border:1px solid var(--accent-gold); padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
                <h5 style="color:var(--accent-gold); margin-bottom:1rem;">Trade-In Valuation</h5>
                <p style="color:var(--text-muted);">
                    <strong style="color:var(--text-light);">${displayMake} ${model}</strong> (${year}) · ${condition.charAt(0).toUpperCase() + condition.slice(1)} condition
                </p>
                <p style="font-size:2rem; font-weight:700; color:var(--text-light);">
                    KES ${value.toLocaleString()}
                </p>
                <p style="color:var(--text-muted); font-size:0.85rem;">
                    <i class="bi bi-info-circle"></i> Based on current market conditions and vehicle data.
                </p>
                <button class="btn btn-gold mt-2" onclick="document.getElementById('tradeinForm').reset(); this.parentElement.parentElement.innerHTML=''">
                    <i class="bi bi-arrow-repeat"></i> New Valuation
                </button>
            </div>
        `;
    });
});