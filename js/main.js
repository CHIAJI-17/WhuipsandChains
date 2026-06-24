// VEHICLE DATA
const vehicles = [{
    id: 1,
    type: "car",
    brand: "Bentley",
    model: "Continental GT",
    year: 2023,
    price: 32000000,
    priceDisplay: "KES 32,000,000",
    mileage: 8500,
    mileageDisplay: "8,500 km",
    transmission: "8-Speed Automatic",
    engine: "6.0L W12 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "SCBDR3ZA7PC012345",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Bentley+Continental+GT",
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
    mileage: 12000,
    mileageDisplay: "12,000 km",
    transmission: "8-Speed Automatic",
    engine: "6.75L V12",
    location: "Nairobi",
    status: "In Stock",
    vin: "SCA664L57NUX12345",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Rolls-Royce+Ghost",
    crashHistory: "Immaculate. Chauffeur-driven. Complete service records. No claims.",
    maintenanceCost: "KES 600,000/year: Bespoke servicing, factory-trained technicians."
}, {
    id: 3,
    type: "car",
    brand: "Mercedes-Benz",
    model: "S-Class Maybach",
    year: 2024,
    price: 28000000,
    priceDisplay: "KES 28,000,000",
    mileage: 4500,
    mileageDisplay: "4,500 km",
    transmission: "9-Speed Automatic",
    engine: "4.0L V8 Biturbo",
    location: "Mombasa",
    status: "In Stock",
    vin: "WDX7J8KB6RP123456",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Maybach+S-Class",
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
    mileage: 7800,
    mileageDisplay: "7,800 km",
    transmission: "8-Speed PDK",
    engine: "3.8L Flat-6 Twin-Turbo",
    location: "Nairobi",
    status: "In Stock",
    vin: "WP0AD2A90PSA12345",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Porsche+911+Turbo+S",
    crashHistory: "Track-ready. Garage kept. No accidents. Ceramic brakes.",
    maintenanceCost: "KES 400,000/year: Performance servicing, specialized parts."
}, {
    id: 5,
    type: "car",
    brand: "Range Rover",
    model: "Autobiography LWB",
    year: 2023,
    price: 19000000,
    priceDisplay: "KES 19,000,000",
    mileage: 22000,
    mileageDisplay: "22,000 km",
    transmission: "8-Speed Automatic",
    engine: "4.4L V8 Diesel",
    location: "Nairobi",
    status: "In Stock",
    vin: "SALGL2SE3PA123456",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Range+Rover+Autobiography",
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
    mileage: 2800,
    mileageDisplay: "2,800 km",
    transmission: "6-Speed Manual",
    engine: "1,103cc V4",
    location: "Nairobi",
    status: "In Stock",
    vin: "ZDMH6AAE0RB123456",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Ducati+Panigale+V4",
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
    mileage: 9500,
    mileageDisplay: "9,500 km",
    transmission: "6-Speed Manual",
    engine: "1,977cc V-Twin",
    location: "Mombasa",
    status: "In Stock",
    vin: "1HD1KRR14PB123456",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=Harley+CVO+Road+Glide",
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
    transmission: "6-Speed Manual",
    engine: "1,649cc Inline-6",
    location: "Nairobi",
    status: "In Stock",
    vin: "WB10K1604NW123456",
    image: "https://placehold.co/600x400/1a1a1a/c9a84c?text=BMW+K1600+GTL",
    crashHistory: "Touring maintained. Regular services. No accidents.",
    maintenanceCost: "KES 200,000/year: Full servicing, shaft drive maintenance."
}];

console.log('Vehicles loaded:', vehicles.length);

// ============================================
// RENDER INVENTORY
// ============================================
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
// 
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
        'toyota': { base: 1500000, depreciation: 0.08 },
        'bmw': { base: 2500000, depreciation: 0.10 },
        'mercedes': { base: 3000000, depreciation: 0.09 },
        'bentley': { base: 20000000, depreciation: 0.05 },
        'rolls-royce': { base: 30000000, depreciation: 0.04 },
        'porsche': { base: 18000000, depreciation: 0.07 },
        'range rover': { base: 12000000, depreciation: 0.08 },
        'ducati': { base: 2500000, depreciation: 0.10 },
        'harley-davidson': { base: 2800000, depreciation: 0.09 },
        'harley': { base: 2800000, depreciation: 0.09 },
        'yamaha': { base: 800000, depreciation: 0.12 },
        'kawasaki': { base: 700000, depreciation: 0.12 },
        'honda': { base: 900000, depreciation: 0.11 }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();

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

        let baseValue = 1000000;
        for (const [key, value] of Object.entries(vehicleValues)) {
            if (make.includes(key)) {
                baseValue = value.base;
                break;
            }
        }

        const currentYear = 2026;
        const age = currentYear - year;
        const depreciationRate = 0.10;
        let value = baseValue * Math.pow(1 - depreciationRate, age);

        const mileageDeduction = Math.floor(mileage / 10000) * 0.02;
        value = value * (1 - Math.min(mileageDeduction, 0.30));

        const conditionMultipliers = {
            'excellent': 1.15,
            'good': 1.0,
            'fair': 0.80,
            'poor': 0.55
        };
        value = value * (conditionMultipliers[condition] || 1.0);

        value = Math.max(value, 50000);

        resultDiv.innerHTML = `
            <div style="background:var(--secondary-dark); border:1px solid var(--accent-gold); padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
                <h5 style="color:var(--accent-gold); margin-bottom:1rem;">Trade-In Valuation</h5>
                <p style="color:var(--text-muted);">
                    <strong style="color:var(--text-light);">${make.toUpperCase()} ${model}</strong> (${year}) · ${condition.charAt(0).toUpperCase() + condition.slice(1)} condition
                </p>
                <p style="font-size:2rem; font-weight:700; color:var(--text-light);">
                    KES ${Math.round(value).toLocaleString()}
                </p>
                <p style="color:var(--text-muted); font-size:0.85rem;">
                    <i class="bi bi-info-circle"></i> Based on current market conditions and vehicle data.
                </p>
                <button class="btn btn-gold mt-2" onclick="this.parentElement.parentElement.innerHTML=''">
                    <i class="bi bi-arrow-repeat"></i> New Valuation
                </button>
            </div>
        `;
    });
});