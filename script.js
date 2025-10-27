// Product data with subcategories
const products = [
    // On-Grid Inverters
    {
        id: 1,
        name: "SunPower Single Phase 5kW",
        category: "on-grid",
        subcategory: "single-phase-residential",
        description: "High-efficiency single-phase grid-tied inverter for residential solar systems.",
        features: [
            "Grid synchronization",
            "MPPT technology",
            "Remote monitoring",
            "Compact design"
        ],
        price: "$1,200",
        icon: "fas fa-bolt",
        capacity: "5 kW"
    },
    {
        id: 2,
        name: "SolarEdge Three Phase 10kW",
        category: "on-grid",
        subcategory: "three-phase-residential",
        description: "Three-phase inverter with power optimizers for residential installations.",
        features: [
            "Power optimizers",
            "SafeDC technology",
            "25-year warranty",
            "Monitoring platform"
        ],
        price: "$2,500",
        icon: "fas fa-bolt",
        capacity: "10 kW"
    },
    {
        id: 3,
        name: "PowerMax Three Phase 20kW",
        category: "on-grid",
        subcategory: "three-phase-commercial",
        description: "Commercial-grade three-phase inverter for small to medium businesses.",
        features: [
            "Commercial durability",
            "Advanced monitoring",
            "Grid support functions",
            "Scalable design"
        ],
        price: "$4,800",
        icon: "fas fa-bolt",
        capacity: "20 kW"
    },
    {
        id: 4,
        name: "MegaSolar Three Phase 100kW",
        category: "on-grid",
        subcategory: "three-phase-utility",
        description: "Utility-scale three-phase inverter for large commercial and utility projects.",
        features: [
            "Utility-grade reliability",
            "Advanced grid management",
            "Multiple MPPT trackers",
            "Remote firmware updates"
        ],
        price: "$18,500",
        icon: "fas fa-bolt",
        capacity: "100 kW"
    },
    // Off-Grid Inverters
    {
        id: 5,
        name: "EcoFlow Off-Grid 3kW",
        category: "off-grid",
        subcategory: "off-grid",
        description: "Reliable power for remote locations without grid connection.",
        features: [
            "Battery charging",
            "Pure sine wave output",
            "Multiple AC outlets",
            "Overload protection"
        ],
        price: "$950",
        icon: "fas fa-plug",
        capacity: "3 kW"
    },
    {
        id: 6,
        name: "FreedomMax Off-Grid 5kW",
        category: "off-grid",
        subcategory: "off-grid",
        description: "Powerful inverter for cabins and remote homes.",
        features: [
            "High surge capacity",
            "Generator compatibility",
            "LCD display",
            "Multiple voltage options"
        ],
        price: "$1,350",
        icon: "fas fa-plug",
        capacity: "5 kW"
    },
    // Hybrid Inverters
    {
        id: 7,
        name: "SmartHybrid Single Phase 5kW",
        category: "hybrid",
        subcategory: "single-phase",
        description: "Single-phase hybrid inverter with battery backup capability.",
        features: [
            "Grid-tie and off-grid modes",
            "Battery management",
            "Smart load control",
            "App integration"
        ],
        price: "$2,200",
        icon: "fas fa-sync",
        capacity: "5 kW"
    },
    {
        id: 8,
        name: "PowerMax Hybrid Three Phase 15kW",
        category: "hybrid",
        subcategory: "three-phase",
        description: "Three-phase hybrid inverter for residential and commercial use.",
        features: [
            "Three-phase power output",
            "Advanced battery management",
            "Grid support functions",
            "Remote monitoring"
        ],
        price: "$4,500",
        icon: "fas fa-sync",
        capacity: "15 kW"
    },
    // BESS
    {
        id: 9,
        name: "EnergyCell BESS 10kWh",
        category: "bess",
        subcategory: "bess",
        description: "Advanced battery storage for maximum energy independence.",
        features: [
            "Lithium-ion technology",
            "Scalable capacity",
            "Smart energy management",
            "10-year warranty"
        ],
        price: "$4,800",
        icon: "fas fa-car-battery",
        capacity: "10 kWh"
    },
    {
        id: 10,
        name: "PowerWall BESS 13.5kWh",
        category: "bess",
        subcategory: "bess",
        description: "Compact home battery with integrated inverter.",
        features: [
            "Seamless integration",
            "Storm Watch mode",
            "Mobile app control",
            "Compact design"
        ],
        price: "$6,500",
        icon: "fas fa-car-battery",
        capacity: "13.5 kWh"
    }
];

// Deye Products for Marquee
const deyeProducts = [
    {
        id: 101,
        name: "Deye SUN-5K-SG01LP1",
        description: "5kW Single Phase Hybrid Inverter",
        features: "Max Efficiency: 98.1%, MPPT Range: 120-450V",
        price: "$1,350",
        capacity: "5 kW"
    },
    {
        id: 102,
        name: "Deye SUN-8K-SG01LP1",
        description: "8kW Single Phase Hybrid Inverter",
        features: "Max Efficiency: 98.3%, MPPT Range: 125-425V",
        price: "$1,850",
        capacity: "8 kW"
    },
    {
        id: 103,
        name: "Deye SUN-10K-SG01LP1",
        description: "10kW Single Phase Hybrid Inverter",
        features: "Max Efficiency: 98.5%, Dual MPPT Trackers",
        price: "$2,200",
        capacity: "10 kW"
    },
    {
        id: 104,
        name: "Deye SUN-12K-SG01LP1",
        description: "12kW Single Phase Hybrid Inverter",
        features: "Max Efficiency: 98.6%, Smart Grid Function",
        price: "$2,650",
        capacity: "12 kW"
    },
    {
        id: 105,
        name: "Deye SUN-3K-SG01LP1",
        description: "3kW Single Phase Hybrid Inverter",
        features: "Compact Design, Ideal for Small Homes",
        price: "$950",
        capacity: "3 kW"
    },
    {
        id: 106,
        name: "Deye SUN-6K-SG01LP1",
        description: "6kW Single Phase Hybrid Inverter",
        features: "High Performance, Easy Installation",
        price: "$1,550",
        capacity: "6 kW"
    }
];

// Subcategory data
const subcategories = {
    "on-grid": [
        { id: "single-phase-residential", name: "Single Phase - Residential" },
        { id: "three-phase-residential", name: "Three Phase - Residential" },
        { id: "three-phase-commercial", name: "Three Phase - Commercial" },
        { id: "three-phase-utility", name: "Three Phase - Utility" }
    ],
    "hybrid": [
        { id: "single-phase", name: "Single Phase" },
        { id: "three-phase", name: "Three Phase" }
    ],
    "off-grid": [
        { id: "off-grid", name: "All Off-Grid" }
    ],
    "bess": [
        { id: "bess", name: "All BESS" }
    ]
};

// Get DOM elements
const inverterBtn = document.getElementById('inverterBtn');
const quoteBtn = document.getElementById('quoteBtn');
const calculatorSection = document.getElementById('calculatorSection');
const quoteSection = document.getElementById('quoteSection');
const productsSection = document.getElementById('productsSection');
const expertiseSection = document.getElementById('expertiseSection');
const capacityForm = document.getElementById('capacityForm');
const result = document.getElementById('result');
const capacityValue = document.getElementById('capacityValue');
const panelCapacityValue = document.getElementById('panelCapacityValue');
const areaValue = document.getElementById('areaValue');
const generationValue = document.getElementById('generationValue');
const consumptionLabel = document.getElementById('consumptionLabel');
const monthlyRadio = document.getElementById('monthly');
const bimonthlyRadio = document.getElementById('bimonthly');
const quoteForm = document.getElementById('quoteForm');
const productsGrid = document.getElementById('productsGrid');
const productNavBtns = document.querySelectorAll('.product-nav-btn');
const subcategoryNav = document.getElementById('subcategoryNav');
const navHome = document.querySelector('.nav-home');
const navProducts = document.querySelector('.nav-products');
const navExpertise = document.querySelector('.nav-expertise');
const tennisCourt = document.getElementById('tennisCourt');
const parkingSpace = document.getElementById('parkingSpace');
const bedroom = document.getElementById('bedroom');
const deyeMarquee = document.getElementById('deyeMarquee');
const deyeMarqueeContent = document.getElementById('deyeMarqueeContent');
const expertiseQuoteBtn = document.getElementById('expertiseQuoteBtn');

// Current filter state
let currentCategory = 'on-grid';
let currentSubcategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('on-grid', 'all');
    updateConsumptionLabel();
    
    // Set up form validation
    setupFormValidation();
});

// Toggle between sections
inverterBtn.addEventListener('click', () => {
    calculatorSection.classList.add('active');
    quoteSection.classList.remove('active');
    productsSection.classList.remove('active');
    expertiseSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
});

quoteBtn.addEventListener('click', () => {
    quoteSection.classList.add('active');
    calculatorSection.classList.remove('active');
    productsSection.classList.remove('active');
    expertiseSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
});

navHome.addEventListener('click', (e) => {
    e.preventDefault();
    calculatorSection.classList.remove('active');
    quoteSection.classList.remove('active');
    productsSection.classList.remove('active');
    expertiseSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
});

navProducts.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.classList.add('active');
    calculatorSection.classList.remove('active');
    quoteSection.classList.remove('active');
    expertiseSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
    loadProducts('on-grid', 'all');
});

navExpertise.addEventListener('click', (e) => {
    e.preventDefault();
    expertiseSection.classList.add('active');
    calculatorSection.classList.remove('active');
    quoteSection.classList.remove('active');
    productsSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
});

expertiseQuoteBtn.addEventListener('click', () => {
    quoteSection.classList.add('active');
    calculatorSection.classList.remove('active');
    productsSection.classList.remove('active');
    expertiseSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
});

// Update label based on bill status selection
monthlyRadio.addEventListener('change', updateConsumptionLabel);
bimonthlyRadio.addEventListener('change', updateConsumptionLabel);

function updateConsumptionLabel() {
    if (monthlyRadio.checked) {
        consumptionLabel.textContent = 'Monthly Unit Consumption (kWh):';
    } else {
        consumptionLabel.textContent = 'Bimonthly Unit Consumption (kWh):';
    }
}

// Set up form validation
function setupFormValidation() {
    // Capacity form validation
    const unitConsumption = document.getElementById('unitConsumption');
    const consumptionError = document.getElementById('consumptionError');
    
    unitConsumption.addEventListener('input', function() {
        if (this.validity.valid) {
            consumptionError.style.display = 'none';
        } else {
            consumptionError.style.display = 'block';
        }
    });
    
    // Quote form validation
    const quoteFields = ['name', 'email', 'phone', 'address', 'roofArea', 'budget', 'productInterest'];
    
    quoteFields.forEach(field => {
        const element = document.getElementById(field);
        const errorElement = document.getElementById(field + 'Error');
        
        element.addEventListener('input', function() {
            if (this.validity.valid) {
                errorElement.style.display = 'none';
            } else {
                errorElement.style.display = 'block';
            }
        });
    });
}

// Calculate inverter capacity and area
capacityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const unitConsumption = parseFloat(document.getElementById('unitConsumption').value);
    const isMonthly = monthlyRadio.checked;
    const location = document.getElementById('location').value;
    const roofType = document.getElementById('roofType').value;
    
    if (isNaN(unitConsumption) || unitConsumption <= 0) {
        document.getElementById('consumptionError').style.display = 'block';
        return;
    } else {
        document.getElementById('consumptionError').style.display = 'none';
    }
    
    // Calculate monthly consumption
    let monthlyConsumption;
    if (isMonthly) {
        monthlyConsumption = unitConsumption;
    } else {
        monthlyConsumption = unitConsumption / 2;
    }
    
    // Get sunlight hours based on location
    let sunlightHours;
    switch(location) {
        case 'high':
            sunlightHours = 5.5;
            break;
        case 'medium':
            sunlightHours = 4.5;
            break;
        case 'low':
            sunlightHours = 3.5;
            break;
        default:
            sunlightHours = 4.5;
    }
    
    // Calculate inverter capacity (simplified calculation)
    const dailyConsumption = monthlyConsumption / 30;
    const inverterCapacityKW = (dailyConsumption / sunlightHours) * 1.2; // 1.2 safety factor
    
    // Round to nearest 0.5 kW
    const roundedCapacity = Math.ceil(inverterCapacityKW * 2) / 2;
    
    // Calculate solar panel capacity (typically 1.2-1.5 times inverter capacity)
    const panelCapacityKW = roundedCapacity * 1.3;
    
    // Calculate area required (assuming 400W panels with 20% efficiency)
    const panelEfficiency = 0.2; // 20%
    const panelPowerDensity = 400 / (1.6 * 1); // 400W per ~1.6 sq m panel
    const areaSqM = (panelCapacityKW * 1000) / panelPowerDensity;
    const areaSqFt = areaSqM * 10.764; // Convert to sq ft
    
    // Calculate daily energy generation
    const dailyGeneration = panelCapacityKW * sunlightHours;
    
    // Display results
    capacityValue.textContent = `${roundedCapacity} kW`;
    panelCapacityValue.textContent = `${panelCapacityKW.toFixed(1)} kW`;
    areaValue.textContent = `${areaSqFt.toFixed(0)} sq ft`;
    generationValue.textContent = `${dailyGeneration.toFixed(1)} kWh`;
    
    // Update area visualization
    updateAreaVisualization(areaSqFt);
    
    // Show result
    result.classList.add('active');
    
    // Scroll to result
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Update area visualization
function updateAreaVisualization(areaSqFt) {
    // Comparison metrics
    const tennisCourtArea = 2800; // sq ft
    const parkingSpaceArea = 160; // sq ft
    const bedroomArea = 200; // sq ft
    
    const tennisCourtPercent = ((areaSqFt / tennisCourtArea) * 100).toFixed(1);
    const parkingSpaces = Math.ceil(areaSqFt / parkingSpaceArea);
    const bedroomPercent = ((areaSqFt / bedroomArea) * 100).toFixed(1);
    
    tennisCourt.textContent = `${tennisCourtPercent}%`;
    parkingSpace.textContent = `${parkingSpaces}`;
    bedroom.textContent = `${bedroomPercent}%`;
}

// Handle quote form submission
quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'roofArea', 'budget', 'productInterest'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const element = document.getElementById(field);
        const errorElement = document.getElementById(field + 'Error');
        
        if (!element.validity.valid) {
            errorElement.style.display = 'block';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
        }
    });
    
    if (!isValid) {
        return;
    }
    
    // In a real application, you would send this data to a server
    alert('Thank you for your quote request! We will contact you shortly.');
    quoteForm.reset();
});

// Load Deye products in marquee
function loadDeyeMarquee() {
    deyeMarqueeContent.innerHTML = '';
    
    // Create two sets of products for seamless looping
    const productsToShow = [...deyeProducts, ...deyeProducts];
    
    productsToShow.forEach(product => {
        const marqueeItem = document.createElement('div');
        marqueeItem.className = 'marquee-item';
        
        marqueeItem.innerHTML = `
            <div class="marquee-image">
                <i class="fas fa-bolt"></i>
            </div>
            <div class="marquee-title">${product.name}</div>
            <div class="marquee-price">${product.price}</div>
            <div class="marquee-features">${product.features}</div>
            <div style="font-size: 0.8rem; color: #666;">Capacity: ${product.capacity}</div>
        `;
        
        deyeMarqueeContent.appendChild(marqueeItem);
    });
    
    // Show the marquee
    deyeMarquee.classList.add('active');
}

// Load products based on category and subcategory
function loadProducts(category, subcategory) {
    productsGrid.innerHTML = '';
    
    const filteredProducts = products.filter(product => {
        if (product.category !== category) return false;
        if (subcategory !== 'all' && product.subcategory !== subcategory) return false;
        return true;
    });
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Get subcategory name for display
        const subcatName = subcategories[product.category]?.find(sc => sc.id === product.subcategory)?.name || '';
        
        productCard.innerHTML = `
            <div class="product-badge">${product.capacity}</div>
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-subcategory">${subcatName}</div>
                <p class="product-description">${product.description}</p>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="product-price">${product.price}</div>
                <button class="product-btn" data-product="${product.id}">Get Quote</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to product buttons
    document.querySelectorAll('.product-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const product = products.find(p => p.id == productId);
            
            // Switch to quote section and pre-select the product
            quoteSection.classList.add('active');
            calculatorSection.classList.remove('active');
            productsSection.classList.remove('active');
            expertiseSection.classList.remove('active');
            deyeMarquee.classList.remove('active');
            
            document.getElementById('productInterest').value = product.category;
            
            // Scroll to quote section
            quoteSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Load subcategory navigation
function loadSubcategories(category) {
    subcategoryNav.innerHTML = '';
    
    if (!subcategories[category]) {
        subcategoryNav.style.display = 'none';
        return;
    }
    
    subcategoryNav.style.display = 'flex';
    
    // Add specific subcategories
    subcategories[category].forEach(subcat => {
        const button = document.createElement('button');
        button.className = `subcategory-btn ${currentSubcategory === subcat.id ? 'active' : ''}`;
        button.textContent = subcat.name;
        button.setAttribute('data-subcategory', subcat.id);
        subcategoryNav.appendChild(button);
        
        // Add event listener for Single Phase - Residential
        if (subcat.id === 'single-phase-residential') {
            button.addEventListener('click', function() {
                loadDeyeMarquee();
            });
        }
    });
    
    // Add event listeners to subcategory buttons
    document.querySelectorAll('.subcategory-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.subcategory-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load products for selected subcategory
            const subcategory = this.getAttribute('data-subcategory');
            currentSubcategory = subcategory;
            loadProducts(currentCategory, subcategory);
            
            // Hide marquee if not Single Phase Residential
            if (subcategory !== 'single-phase-residential') {
                deyeMarquee.classList.remove('active');
            }
        });
    });
}

// Product navigation
productNavBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        productNavBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Load products for selected category
        const category = this.getAttribute('data-category');
        currentCategory = category;
        currentSubcategory = 'all';
        loadSubcategories(category);
        loadProducts(category, 'all');
        
        // Hide marquee when switching categories
        deyeMarquee.classList.remove('active');
    });
});
