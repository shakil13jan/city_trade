// ===== HERO IMAGES FOR SLIDER =====
const heroImages = [
  'image/hero1.jpg',
  'image/hero2.jpg',
  'image/hero3.jpg'
];
let currentHero = 0;
const coverImg = document.querySelector('.cover-img');

function nextHeroImage() {
  currentHero = (currentHero + 1) % heroImages.length;
  coverImg.style.opacity = 0;
  setTimeout(() => {
    coverImg.src = heroImages[currentHero];
    coverImg.style.opacity = 1;
  }, 500); 
}
setInterval(nextHeroImage, 3000);

// ===== COMPANY + PRODUCT DATA =====
const companies = [
  {
    id: 'brand-a',
    name: 'Amirath Lube',
    products: [
      { title: 'Engine Oil A1 5W-30', desc: 'Fully synthetic oil.', img:'https://source.unsplash.com/400x300/?engine-oil', highlight: true },
      { title: 'Gear Oil A80', desc: 'High-load gear oil.', img:'https://source.unsplash.com/400x300/?gear-oil', highlight: false },
      { title: 'Hydraulic Oil A-H', desc:'Stable hydraulic oil.', img:'https://source.unsplash.com/400x300/?hydraulic', highlight: false }
    ]
  },
  {
    id: 'brand-b',
    name: 'Rymax Lubricants',
    products: [
      { title: 'Nordic X 10W-40', desc:'Reliable engine oil.', img:'https://source.unsplash.com/400x300/?motor-oil', highlight: true },
      { title: 'Tractor HD', desc:'Tractor lubricant.', img:'https://source.unsplash.com/400x300/?tractor', highlight:false }
    ]
  },
  {
    id: 'brand-c',
    name: 'Mobil',
    products: [
      { title:'Atlas Ultra 0W-20', desc:'Fuel economy oil.', img:'https://source.unsplash.com/400x300/?car-engine', highlight:true },
      { title:'Compressor Oil', desc:'Long life compressor oil.', img:'https://source.unsplash.com/400x300/?compressor', highlight:false }
    ]
  },
  {
    id: 'brand-c',
    name: 'BP',
    products: [
      { title:'Atlas Ultra 0W-20', desc:'Fuel economy oil.', img:'https://source.unsplash.com/400x300/?car-engine', highlight:true },
      { title:'Compressor Oil', desc:'Long life compressor oil.', img:'https://source.unsplash.com/400x300/?compressor', highlight:false }
    ]
  },
  {
    id: 'brand-c',
    name: 'Shell',
    products: [
      { title:'Atlas Ultra 0W-20', desc:'Fuel economy oil.', img:'https://source.unsplash.com/400x300/?car-engine', highlight:true },
      { title:'Compressor Oil', desc:'Long life compressor oil.', img:'https://source.unsplash.com/400x300/?compressor', highlight:false }
    ]
  }
];

// DOM elements
const nav = document.getElementById('company-nav');
const productsGrid = document.getElementById('products-grid');
const companyTitle = document.getElementById('company-title');
const highlightsGrid = document.getElementById('highlights-grid');

// ===== Render Navigation =====
function renderNav(){
  companies.forEach((c, idx)=>{
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.textContent = c.name;
    item.dataset.idx = idx;

    item.addEventListener('click', ()=>{
      showCompany(idx);
    });

    nav.appendChild(item);
  });
}

// ===== Show Products =====
function showCompany(idx){
  const company = companies[idx];
  companyTitle.textContent = company.name + " — Products";

  // Active effect
  const items = nav.querySelectorAll('.nav-item');
  items.forEach(i => i.classList.remove('active'));
  items[idx+1].classList.add('active'); // +1 because Home is first

  productsGrid.innerHTML = '';
  company.products.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    `;
    productsGrid.appendChild(card);
  });

  companyTitle.scrollIntoView({behavior:'smooth'});
}

// ===== Render Highlights =====
function renderHighlights(){
  highlightsGrid.innerHTML = '';
  companies.forEach(c=>{
    c.products.filter(p=>p.highlight).forEach(p=>{
      const card = document.createElement('div');
      card.className='card';
      card.innerHTML = `
        <img src="${p.img}">
        <h4>${p.title}</h4>
        <p class="small">${c.name}</p>
        <p>${p.desc}</p>
      `;
      highlightsGrid.appendChild(card);
    });
  });
}

// ===== HOME scroll =====
document.getElementById('home-btn').addEventListener('click',()=>{
  document.querySelector('.cover').scrollIntoView({behavior:'smooth'});
  const navItems = nav.querySelectorAll('.nav-item');
  navItems.forEach(i=>i.classList.remove('active'));
  document.getElementById('home-btn').classList.add('active');
});

// ===== Highlights scroll button =====
document.getElementById('see-highlights').addEventListener('click',()=>{
  document.getElementById('highlights').scrollIntoView({behavior:'smooth'});
});

// ===== CONTACT FORM SIMULATION =====
document.getElementById('contact-form').addEventListener('submit',function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const txt = document.getElementById('contact-confirm');
  txt.textContent = `Thanks ${name}! We will contact you at ${email}.`;
  txt.classList.remove('hidden');

  this.reset();
});

// ===== INIT =====
(function init(){
  renderNav();
  renderHighlights();
  document.getElementById('year').textContent = new Date().getFullYear();

  showCompany(0);  // প্রথম কোম্পানি ডিফল্ট দেখাবে
  document.getElementById('home-btn').classList.add('active'); // Home default active
})();
