console.log("JavaScript is working");

(function () {
    'use strict';

    var hero0 = document.getElementById("hero0");
    var heroWhole = document.getElementById("heroWhole");
    var heroCracked = document.getElementById("heroCracked");
    var isCracked = false;

    // Check GSAP and elements before running animation //
    if (hero0 && heroWhole && heroCracked && window.gsap) {
        // Floating animation for the chocolate sphere //
        window.gsap.to("#heroWhole", {
            y: -10,
            scale: 1.02,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Click to toggle between whole and cracked chocolate //
        heroWhole.addEventListener('click', function () {
            if (!isCracked) {
                 // Transition from whole to cracked //
                heroWhole.animate([
                    { transform: 'scale(1)', opacity: 1 },
                    { transform: 'scale(0.9) translateY(10px)', opacity: 0 }
                ], { duration: 400, fill: 'forwards', easing: 'ease' });

                heroCracked.animate([
                    { transform: 'scale(0.9) translateY(-10px)', opacity: 0 },
                    { transform: 'scale(1.5) translateY(0)', opacity: 1 }
                ], { duration: 500, fill: 'forwards', easing: 'ease-out' });
            } else {
                // Transition back to whole chocolate //
                heroCracked.animate([
                    { transform: 'scale(1.5)', opacity: 1 },
                    { transform: 'scale(0.9) translateY(10px)', opacity: 0 }
                ], { duration: 400, fill: 'forwards', easing: 'ease' });

                heroWhole.animate([
                    { transform: 'scale(0.9) translateY(-10px)', opacity: 0 },
                    { transform: 'scale(1)', opacity: 1 }
                ], { duration: 500, fill: 'forwards', easing: 'ease-out' });
            }
            isCracked = !isCracked;
        });
    }

  
    var giftClosed = document.getElementById("giftClosed");
    var giftOpen = document.getElementById("giftOpen");
    var giftFigure = document.getElementById("giftFigure");

    if (giftClosed && giftOpen && giftFigure && window.gsap) {
        // Floating motion for the closed gift box //
        window.gsap.to("#giftClosed", {
            y: -18,
            scale: 1.02,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Initial visibility setup (closed visible) //
        giftClosed.classList.add('show');
        giftOpen.classList.remove('show');
        giftClosed.style.opacity = '1';
        giftOpen.style.opacity = '0';

        // Click to toggle open/close animation //
        giftFigure.addEventListener("click", function () {
            var isClosed = giftClosed.classList.contains("show");

            if (isClosed) {
                // Animate opening the box //
                var out = giftClosed.animate(
                    [
                        { transform: "scale(1)", opacity: 1 },
                        { transform: "scale(0.85) rotate(-8deg)", opacity: 0 }
                    ],
                    { duration: 400, easing: "ease", fill: "forwards" }
                );

                var inn = giftOpen.animate(
                    [
                        { transform: "scale(0.9) rotate(6deg)", opacity: 0 },
                        { transform: "scale(1)", opacity: 1 }
                    ],
                    { duration: 500, easing: "ease-out", fill: "forwards" }
                );

                // Update classes after animation //
                out.onfinish = function () {
                    giftClosed.classList.remove("show");
                    giftClosed.setAttribute("aria-hidden", "true");
                };
                inn.onfinish = function () {
                    giftOpen.classList.add("show");
                    giftOpen.removeAttribute("aria-hidden");
                };
            } else {
                // Animate closing the box //
                var out2 = giftOpen.animate(
                    [
                        { transform: "scale(1)", opacity: 1 },
                        { transform: "scale(0.9) rotate(6deg)", opacity: 0 }
                    ],
                    { duration: 400, easing: "ease", fill: "forwards" }
                );

                var inn2 = giftClosed.animate(
                    [
                        { transform: "scale(0.85) rotate(-8deg)", opacity: 0 },
                        { transform: "scale(1)", opacity: 1 }
                    ],
                    { duration: 500, easing: "ease-out", fill: "forwards" }
                );

                // Update classes after animation //
                out2.onfinish = function () {
                    giftOpen.classList.remove("show");
                    giftOpen.setAttribute("aria-hidden", "true");
                };
                inn2.onfinish = function () {
                    giftClosed.classList.add("show");
                    giftClosed.removeAttribute("aria-hidden");
                };
            }
        });
    }

    var steps = document.querySelectorAll("#timelineSteps li");
    var progressBar = document.getElementById("progressBar");
    var stepCaption = document.getElementById("stepCaption");

    if (steps.length && progressBar && stepCaption) {
        var captions = [
            "Harvesting fresh cocoa pods",
            "Roasting to release aroma",
            "Blending the finest ingredients",
            "Beautifully packaged by hand"
        ];

        // Hover event for each timeline step //
        for (var i = 0; i < steps.length; i++) {
            (function (index) {
                steps[index].addEventListener("mouseenter", function () {
                    // Remove highlight from all //
                    for (var j = 0; j < steps.length; j++) {
                        steps[j].classList.remove("active");
                    }
                    // Highlight current step //
                    steps[index].classList.add("active");
                    // Update Shoelace progress bar //
                    progressBar.value = ((index + 1) / steps.length) * 100;
                    // Update step caption text //
                    stepCaption.textContent = captions[index];
                });
            })(i);
        }
    }

    // Bestsellers carousel //
    if (typeof window.Swiper !== "undefined") {
        new window.Swiper("#bestsellerSwiper", {
            loop: true,
            speed: 600,
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: "#bestsellerSwiper .swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: "#bestsellerSwiper .swiper-button-next",
                prevEl: "#bestsellerSwiper .swiper-button-prev"
            }
        });
    }

    // Reviews (testimonial) carousel //
    document.addEventListener('DOMContentLoaded', function () {
        var reviewsEl = document.getElementById('reviewsSwiper');
        if (reviewsEl && typeof window.Swiper !== 'undefined') {
            new window.Swiper('#reviewsSwiper', {
                slidesPerView: 1,
                loop: true,
                speed: 500,
                navigation: { nextEl: '.pill-next' }
            });
        }
    });

    (function () {
        var form = document.getElementById('subscribeForm');
        var email = document.getElementById('subscribeEmail');

        if (form && email) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                var value = (email.value || '').replace(/\s+/g, '');
                var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                if (!ok) {
                    alert('Please enter a valid email address.');
                    email.focus();
                    return;
                }
                alert('Thanks! You are subscribed.');
                form.reset();
            });
        }
    })();

    // Product gallery carousel //
    if (typeof window.Swiper !== "undefined") {
        new window.Swiper('.gallerySwiper', {
            slidesPerView: 3,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: '.gallerySwiper .swiper-button-next',
                prevEl: '.gallerySwiper .swiper-button-prev'
            },
            pagination: {
                el: '.gallerySwiper .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 }
            }
        });
    }

    (function () {
        var wrapper = document.querySelector('.gallerySwiper');
        if (!wrapper) return;

        var imgs = wrapper.querySelectorAll('.swiper-slide img');
        if (!imgs.length) return;
        // Assign index to each image //
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].dataset.idx = i;
        }

        // Lightbox elements //
        var box = document.getElementById('lightbox');
        if (!box) return;
        var imgEl = box.querySelector('.lb-img');
        var btnClose = box.querySelector('.lb-close');
        var btnPrev = box.querySelector('.lb-prev');
        var btnNext = box.querySelector('.lb-next');
        var idx = 0;

        // Show selected image fullscreen //
        function show(i) {
            idx = (i + imgs.length) % imgs.length;
            imgEl.src = imgs[idx].src;
            box.classList.add('show');
            box.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        // Hide lightbox //
        function hide() {
            box.classList.remove('show');
            box.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            imgEl.removeAttribute('src');
        }

        function next() { show(idx + 1); }
        function prev() { show(idx - 1); }

        // Click on thumbnail to open //
        wrapper.addEventListener('click', function (e) {
            var el = e.target;
            if (el && el.tagName.toLowerCase() === 'img') {
                var i = Number(el.dataset.idx);
                if (!isNaN(i)) {
                    e.preventDefault();
                    show(i);
                }
            }
        });

        if (btnClose) btnClose.addEventListener('click', hide);
        if (btnNext) btnNext.addEventListener('click', next);
        if (btnPrev) btnPrev.addEventListener('click', prev);

        // Click outside image closes lightbox //
        box.addEventListener('click', function (e) {
            if (e.target === box) hide();
        });

        window.addEventListener('keydown', function (e) {
            if (box.classList.contains('show')) {
                if (e.key === 'Escape') hide();
                if (e.key === 'ArrowRight') next();
                if (e.key === 'ArrowLeft') prev();
            }
        });
    })();

})(); 
