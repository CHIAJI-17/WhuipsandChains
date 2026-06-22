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