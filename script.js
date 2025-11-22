// Sample data for 5 companies and products
const companies = [
  {
    id: 'brand-a',
    name: 'Amirath Lube',
    products: [
      {title: 'Engine Oil A1 5W-30', desc: 'Fully synthetic engine oil — long life.', img: 'https://source.unsplash.com/400x300/?engine-oil'},
      {title: 'Gear Oil A80', desc: 'High-load gear oil for heavy vehicles.', img: 'https://source.unsplash.com/400x300/?gear-oil'},
      {title: 'Hydraulic Oil A-H', desc: 'Stable hydraulics with anti-foam additives.', img: 'https://source.unsplash.com/400x300/?hydraulic-oil'}
    ]
  },
  {
    id: 'brand-b',
    name: 'Raymax Lubricants',
    products: [
      {title: 'Nordic X 10W-40', desc: 'Reliable everyday engine oil', img: 'https://source.unsplash.com/400x300/?motor-oil'},
      {title: 'Nordic Tractor HD', desc: 'Tractor and off-road equipment oil', img: 'https://source.unsplash.com/400x300/?tractor-oil'},
      {title: 'Nordic Grease M', desc: 'All-temp grease for bearings', img: 'https://source.unsplash.com/400x300/?grease'}
    ]
  },
  {
    id: 'brand-c',
    name: 'Mobil',
    products: [
      {title: 'Atlas Ultra 0W-20', desc: 'Fuel economy synthetic oil', img: 'https://source.unsplash.com/400x300/?car-engine'},
      {title: 'Atlas Trans MTF', desc: 'Manual transmission fluid', img: 'https://source.unsplash.com/400x300/?transmission'},
      {title: 'Atlas Compressor Oil', desc: 'Long-life compressor lubricant', img: 'https://source.unsplash.com/400x300/?compressor-oil'}
    ]
  },
  {
    id: 'brand-d',
    name: 'Shell',
    products: [
      {title: 'SolarTech Diesel Pro', desc: 'Diesel engine oil with detergents', img: 'https://source.unsplash.com/400x300/?diesel-engine'},
      {title: 'SolarTech EP90', desc: 'Extreme pressure gear oil', img: 'https://source.unsplash.com/400x300/?gearbox'},
      {title: 'SolarTech Chain Oil', desc: 'High adherence chain lubricant', img: 'https://source.unsplash.com/400x300/?chain-oil'}
    ]
  },
  {
    id: 'brand-e',
    name: 'BP',
    products: [
      {title: 'GF BioBlend 15W-40', desc: 'Semi-synthetic with eco additives', img: 'https://source.unsplash.com/400x300/?oil-bottle'},
      {title: 'GF Industrial 46', desc: 'ISO VG46 industrial hydraulic oil', img: 'https://source.unsplash.com/400x300/?industrial-oil'},
      {title: 'GF MultiGrease', desc: 'Multipurpose high-temp grease', img: 'https://source.unsplash.com/400x300/?grease,high-temperature'}
    ]
  }
];

// DOM refs
const nav = document.getElementById('company-nav');
const productsGrid = document.getElementById('products-grid');
const companyTitle = document.getElementById('company-title');
const highlightsGrid = document.getElementById('highlights-grid');
const seeHighlightsBtn = document.getElementById('see-highlights');
const yearSpan = document.getElementById('year');

// render nav
function renderNav() {
  companies.forEach((c, idx) => {
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.textContent = c.name;
    el.dataset.idx = idx;
    el.addEventListener('click', () => showCompany(idx));
    nav.appendChild(el);
  });
}

// show products for a company
function showCompany(idx) {
  const company = companies[idx];
  companyTitle.textContent = company.name + " — Products";
  productsGrid.innerHTML = '';
  companies.forEach((c,i) => {
    const navItems = nav.querySelectorAll('.nav-item');
    if(navItems[i]) navItems[i].classList.toggle('active', i===idx);
  });

  company.products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    `;
    productsGrid.appendChild(card);
  });

  // smooth scroll to products
  companyTitle.scrollIntoView({behavior:'smooth', block:'start'});
}

// render highlights (first product from each company)
function renderHighlights() {
  highlightsGrid.innerHTML = '';
  companies.forEach(c => {
    if(c.products && c.products[0]) {
      const p = c.products[0];
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h4>${p.title}</h4>
        <p class="small">${c.name}</p>
        <p>${p.desc}</p>
      `;
      highlightsGrid.appendChild(card);
    }
  });
}

// contact form handler (simple front-end demo)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // In real app: send to server. Here we just show a confirmation.
  const confirmTxt = document.getElementById('contact-confirm');
  confirmTxt.textContent = `Thank you, ${name}! We received your message and will contact you at ${email}.`;
  confirmTxt.classList.remove('hidden');
  this.reset();
});

// see highlights button scroll
seeHighlightsBtn.addEventListener('click', () => {
  document.getElementById('highlights').scrollIntoView({behavior:'smooth'});
});

// init
(function init() {
  renderNav();
  renderHighlights();
  yearSpan.textContent = new Date().getFullYear();
  // show first company by default
  showCompany(0);
})();
