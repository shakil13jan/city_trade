          // ===== HERO IMAGES FOR SLIDER =====
          // Google Drive direct image format:
          // https://drive.google.com/uc?export=view&id=FILE_ID
          const heroImages = [
            'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_1',
            'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_2',
            'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_3'
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
          // এখানে থেকে direct Google Drive image format ব্যবহার করা হয়েছে
          // https://drive.google.com/uc?export=view&id=FILE_ID

          const companies = [
            {
              id: 'brand-a',
              name: 'Amirath Lube',
              products: [
                { 
                  title: 'Engine Oil A1 5W-30', 
                  desc: 'Fully synthetic oil.',
                  img:'https://drive.google.com/file/d/1l3Oe0WOfvIGQDuggdNq142ASZigFsAQw/view?usp=drive_link', 
                  highlight: true 
                },
                { 
                  title: 'Gear Oil A80', 
                  desc: 'High-load gear oil.', 
                  img:'https://source.unsplash.com/400x300/?gear-oil', 
                  highlight: false 
                },
                { 
                  title: 'Hydraulic Oil A-H', 
                  desc:'Stable hydraulic oil.', 
                  img:'https://source.unsplash.com/400x300/?hydraulic', 
                  highlight: false 
                }
              ]
            },
            {
              id: 'brand-b',
              name: 'Rymax Lubricants',
              products: [
                { 
                  title: 'Nordic X 10W-40', 
                  desc:'Reliable engine oil.', 
                  img:'https://source.unsplash.com/400x300/?motor-oil', 
                  highlight: true 
                },
                { 
                  title: 'Tractor HD', 
                  desc:'Tractor lubricant.', 
                  img:'https://source.unsplash.com/400x300/?tractor', 
                  highlight:false 
                }
              ]
            },
            {
              id: 'brand-c',
              name: 'Mobil',
              products: [
                { 
                  title:'Atlas Ultra 0W-20', 
                  desc:'Fuel economy oil.', 
                  img:'https://source.unsplash.com/400x300/?car-engine', 
                  highlight:true 
                },
                { 
                  title:'Compressor Oil', 
                  desc:'Long life compressor oil.', 
                  img:'https://source.unsplash.com/400x300/?compressor', 
                  highlight:false 
                }
              ]
            },
            {
              id: 'brand-d',
              name: 'BP',
              products: [
                { 
                  title:'BP Supreme 10W-30', 
                  desc:'Premium blended oil.', 
                  img:'https://source.unsplash.com/400x300/?oil', 
                  highlight:true 
                },
                { 
                  title:'BP Hydraulic', 
                  desc:'Industrial hydraulic oil.', 
                  img:'https://source.unsplash.com/400x300/?industrial', 
                  highlight:false 
                }
              ]
            },
            {
              id: 'brand-e',
              name: 'Shell',
              products: [
                { 
                  title:'Shell Helix 0W-20', 
                  desc:'Fuel economy synthetic oil.', 
                  img:'https://source.unsplash.com/400x300/?engine', 
                  highlight:true 
                },
                { 
                  title:'Shell Compressor', 
                  desc:'Long life compressor oil.', 
                  img:'https://source.unsplash.com/400x300/?compressor', 
                  highlight:false 
                }
              ]
            }
          ];


          // ===== DOM ELEMENTS =====
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


          // ===== Render Products =====
          function showCompany(idx){
            const company = companies[idx];
            companyTitle.textContent = company.name + " — Products";

            // Active menu
            const items = nav.querySelectorAll('.nav-item');
            items.forEach(i => i.classList.remove('active'));
            items[idx].classList.add('active');

            productsGrid.innerHTML = '';
            company.products.forEach(p=>{
              const card = document.createElement('div');
              card.className = 'card';
              card.innerHTML = `
                <img src="${p.img}" loading="lazy">
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
                  <img src="${p.img}" loading="lazy">
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


          // ===== Highlights scroll =====
          document.getElementById('see-highlights').addEventListener('click',()=>{
            document.getElementById('highlights').scrollIntoView({behavior:'smooth'});
          });


          // ===== CONTACT FORM =====
          document.getElementById('contact-form').addEventListener('submit',function(e){
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            const txt = document.getElementById('contact-confirm');
            txt.textContent = `Thanks ${name}! We will contact you at ${email}.`;
            txt.classList.remove('hidden');

            this.reset();
          });


          // ===== INIT LOAD =====
          (function init(){
            renderNav();
            renderHighlights();
            
            document.getElementById('year').textContent = new Date().getFullYear();

            showCompany(0);
          })();
