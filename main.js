document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observeElements = () => {
        document.querySelectorAll('.fade-in-up:not(.observed)').forEach(el => {
            el.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700', 'ease-out', 'observed');
            observer.observe(el);
        });
    };
    observeElements();

    // Cafe Data
    const cafeData = {
        'brew-estate': {
            name: 'The Brew Estate',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
            rating: '4.8',
            price: '$$',
            description: 'Premium ambiance with excellent lighting and comfortable seating. Very peaceful environment for focused study sessions. Perfect for long reading marathons.',
            address: 'Law Gate Road, Near LPU, Phagwara',
            hours: '10:00 AM - 11:00 PM',
            amenities: ['Ultra Fast WiFi', 'Premium Coffee', 'Quiet Environment', 'Ample Charging Ports', 'Air Conditioned']
        },
        'third-wave': {
            name: 'Third Wave Coffee',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop',
            rating: '4.9',
            price: '$$$',
            description: 'The best artisanal coffee in town with dedicated working desks, ample charging ports, and free high-speed internet. A favorite among engineering and design students.',
            address: 'Jalandhar-Delhi GT Road, Near LPU Main Gate',
            hours: '8:00 AM - 12:00 AM',
            amenities: ['Dedicated Workstations', 'Charging Points Everywhere', 'Artisanal Roasts', 'High-Speed WiFi', 'Meeting Rooms']
        },
        'cafe-studio': {
            name: 'Cafe Studio',
            image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop',
            rating: '4.6',
            price: '$',
            description: 'A vibrant, student-friendly spot located very close to the university. Great for group studies and casual project meetings without breaking the bank.',
            address: 'Law Gate Market, Phagwara',
            hours: '9:00 AM - 10:00 PM',
            amenities: ['Group Study Tables', 'Affordable Menu', 'Close to Campus', 'Free WiFi', 'Student Discounts']
        },
        'midnight-cravers': {
            name: 'Midnight Cravers',
            image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop',
            rating: '4.7',
            price: '$$',
            description: 'The go-to destination for late-night exam prep. Open late with strong espresso and a cozy, dimly lit aesthetic. Safe environment for all-nighters.',
            address: 'Deep Nagar Road, Near LPU',
            hours: '6:00 PM - 3:00 AM',
            amenities: ['Open till 3 AM', 'Cozy Aesthetic', 'Strong Espresso', 'Late Night Snacks', 'Free WiFi']
        },
        'bakehouse': {
            name: 'The Bakehouse',
            image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2070&auto=format&fit=crop',
            rating: '4.4',
            price: '$',
            description: 'A cozy bakery cum cafe with very affordable coffee and snacks. Perfect for quick study sessions and grabbing a bite between classes.',
            address: 'Main Gate Market, LPU',
            hours: '9:00 AM - 9:00 PM',
            amenities: ['Student Discounts', 'Free WiFi', 'Fresh Pastries', 'Budget Friendly', 'Quick Bites']
        },
        'roasted-bean': {
            name: 'The Roasted Bean',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop',
            rating: '4.5',
            price: '$$',
            description: 'Rustic aesthetic with a very chill vibe. Known for their cold brews and comfortable sofa seating. Great for relaxed reading.',
            address: 'Phagwara City Center, 10 mins from LPU',
            hours: '10:00 AM - 10:00 PM',
            amenities: ['Comfortable Seating', 'Cold Brews', 'Free WiFi', 'Outdoor Seating']
        },
        'study-hub': {
            name: 'Study Hub Cafe',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
            rating: '4.8',
            price: '$$',
            description: 'Specifically designed for students. Desks have individual lamps and charging ports. Strictly quiet zone during exam weeks.',
            address: 'Law Gate Road, Phagwara',
            hours: '8:00 AM - 12:00 AM',
            amenities: ['Individual Desk Lamps', 'Quiet Zone', 'High-Speed WiFi', 'Printing Services', 'Charging Ports']
        },
        'mug-bean': {
            name: 'Mug & Bean',
            image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop',
            rating: '4.3',
            price: '$',
            description: 'A pocket-friendly option that serves unlimited refills of filter coffee. Basic seating but strong WiFi and friendly staff.',
            address: 'Near Old Campus, Phagwara',
            hours: '9:00 AM - 11:00 PM',
            amenities: ['Unlimited Coffee Refills', 'Free WiFi', 'Budget Friendly', 'Board Games']
        },
        'library-cafe': {
            name: 'The Library Cafe',
            image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
            rating: '4.9',
            price: '$$',
            description: 'Combines a massive book collection with great coffee. The ultimate peaceful spot for deep focus. No loud music, just ambient lofi.',
            address: 'GT Road Highway, Phagwara',
            hours: '10:00 AM - 11:00 PM',
            amenities: ['Book Collection', 'Lofi Music', 'Ultra Fast WiFi', 'Silent Zone']
        }
    };

    // Modal UI
    const modalHTML = `
        <div id="cafe-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm modal-overlay cursor-pointer"></div>
            <div class="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden shadow-2xl transform scale-95 transition-transform duration-300 border border-stone-700 flex flex-col max-h-[90vh]">
                <button id="close-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-600 transition-colors z-10 border border-stone-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div class="h-64 sm:h-80 w-full relative shrink-0">
                    <img id="modal-image" src="" class="w-full h-full object-cover" alt="Cafe Image">
                    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-900 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                        <div>
                            <h2 id="modal-title" class="text-3xl font-bold text-white mb-2"></h2>
                            <div class="flex gap-3 text-sm">
                                <span id="modal-rating" class="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30 font-medium flex items-center gap-1"></span>
                                <span id="modal-price" class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 font-medium"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-6 sm:p-8 overflow-y-auto">
                    <p id="modal-desc" class="text-stone-300 text-lg mb-8 leading-relaxed"></p>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Location
                            </h3>
                            <p id="modal-address" class="text-stone-400"></p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Hours
                            </h3>
                            <p id="modal-hours" class="text-stone-400"></p>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
                            <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Amenities
                        </h3>
                        <ul id="modal-amenities" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-300">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('cafe-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalInner = modal.querySelector('.glass-card');
    const closeBtn = document.getElementById('close-modal');

    const openModal = (id) => {
        const data = cafeData[id];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.name;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-rating').innerHTML = `★ ${data.rating}`;
        document.getElementById('modal-price').textContent = data.price;
        document.getElementById('modal-desc').textContent = data.description;
        document.getElementById('modal-address').textContent = data.address;
        document.getElementById('modal-hours').textContent = data.hours;
        
        const amenitiesContainer = document.getElementById('modal-amenities');
        amenitiesContainer.innerHTML = '';
        data.amenities.forEach(amenity => {
            const li = document.createElement('li');
            li.className = 'flex items-center gap-2';
            li.innerHTML = `<span class="text-amber-500">✓</span> ${amenity}`;
            amenitiesContainer.appendChild(li);
        });

        modal.classList.remove('hidden');
        // trigger reflow
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        modalInner.classList.remove('scale-95');
        modalInner.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalInner.classList.remove('scale-100');
        modalInner.classList.add('scale-95');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.querySelectorAll('.view-cafe-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });
});
