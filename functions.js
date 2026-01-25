const tabs = {
            index: {
                sectionId: 'index-section',
                contentId: 'index-content',
                logoSrc: 'images/PersonalLogo.gif',
                logoAlt: "DM's Logo",
                backgroundImage: 'url("images/indexBackground.gif")'
            },
            aboutMe: {
                sectionId: 'about-me-section',
                contentId: 'about-me-content',
                logoSrc: 'images/danielepic.gif',
                logoAlt: "The man, DM, himself!",
                backgroundImage: 'url("images/forestBackground.gif")'
            },
            bio: {
                sectionId: 'bio-section',
                contentId: 'bio-content',
                logoSrc: 'images/danielepic.gif',
                logoAlt: "The man, DM, himself!",
                backgroundImage: 'url("images/shoreChurchBackground.gif")'
            },
            myWork: {
                sectionId: 'my-work-section',
                contentId: 'my-work-content',
                logoSrc: '',
                logoAlt: '',
                backgroundImage: 'url("images/lampBackground.gif")'
            }
        };

        const pages = {
            'index': {
                tabs: ['index', 'myWork'],
                defaultTab: 'index'
            },
            'persona': {
                tabs: ['aboutMe', 'bio'],
                defaultTab: 'aboutMe'
            },
            'caseGoalAndSpace': {
                tabs: ['own-goal', 'nautilus-conundrum'],
                defaultTab: 'own-goal'
            },
        };

        // Ensure the currentPage key works without .html
        Object.keys(pages).forEach(key => {
            if (!pages[key + '.html']) {
                pages[key + '.html'] = pages[key];
            }
        });
        function changeLogo(src, alt) {
            const logo = document.querySelector('#logo img');
            if (!src) {
                src = 'images/blank.gif';
                alt = 'Blank Logo';
            }
            if (logo.src.includes(src)) return; // Do not change the image if it's the same

            logo.classList.add('fade-out');
            setTimeout(() => {
                logo.src = src;
                logo.alt = alt;
                logo.style.display = 'block';
                logo.classList.remove('fade-out');
                logo.classList.add('fade-in');
                setTimeout(() => logo.classList.remove('fade-in'), 500);
            }, 500);
        }


        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                }

                function initializePage() {
                    const currentPage = window.location.pathname.split('/').pop();
                    const pageConfig = pages[currentPage];
                    if (!pageConfig) return;

                    const sectionEls = pageConfig.tabs
                        .map(k => tabs[k])
                        .filter(Boolean)
                        .map(t => document.getElementById(t.sectionId))
                        .filter(Boolean);

                    if (!sectionEls.length) return;

                    const resolveTabForElement = (el) => {
                        if (!el || !el.id) return null;
                        return Object.values(tabs).find(t => t.sectionId === el.id) || null;
                    };

                    const applyTab = (tab) => {
                        if (!tab) return;
                        document.body.style.backgroundImage = tab.backgroundImage;
                        changeLogo(tab.logoSrc, tab.logoAlt);
                    };

                    // Track intersection state for deterministic selection
                    const stateByEl = new Map(sectionEls.map(el => [el, { isIntersecting: false, ratio: 0 }]));
                    let lastAppliedId = null;
                    let rafId = 0;

                    const pickBestSection = () => {
                        const viewportCenter = window.innerHeight / 2;

                        // Consider sections that are at least a little visible
                        const candidates = sectionEls
                            .map(el => {
                                const st = stateByEl.get(el);
                                const rect = el.getBoundingClientRect();
                                const visible = rect.bottom > 0 && rect.top < window.innerHeight;
                                const center = rect.top + rect.height / 2;
                                const dist = Math.abs(center - viewportCenter);
                                return { el, st, rect, visible, dist };
                            })
                            .filter(x => x.visible && (x.st?.ratio ?? 0) >= 0.1);

                        if (!candidates.length) return null;

                        // Prefer the one closest to center; tie-break by larger intersectionRatio
                        candidates.sort((a, b) => (a.dist - b.dist) || ((b.st?.ratio ?? 0) - (a.st?.ratio ?? 0)));
                        return candidates[0].el;
                    };

                    const update = () => {
                        rafId = 0;
                        const bestEl = pickBestSection();
                        if (!bestEl) return;
                        const tab = resolveTabForElement(bestEl);
                        if (!tab) return;
                        if (lastAppliedId === tab.sectionId) return;
                        lastAppliedId = tab.sectionId;
                        applyTab(tab);
                    };

                    const schedule = () => {
                        if (rafId) return;
                        rafId = window.requestAnimationFrame(update);
                    };

                    const io = new IntersectionObserver(
                        (entries) => {
                            entries.forEach(entry => {
                                if (!stateByEl.has(entry.target)) return;
                                stateByEl.set(entry.target, { isIntersecting: entry.isIntersecting, ratio: entry.intersectionRatio || 0 });
                            });
                            schedule();
                        },
                        {
                            root: null,
                            rootMargin: '0px 0px 0px 0px',
                            threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8]
                        }
                    );

                    sectionEls.forEach(el => io.observe(el));

                    window.addEventListener('scroll', schedule, { passive: true });
                    window.addEventListener('resize', schedule);

                    // Initial set
                    schedule();
                }

        // Ensure the initializePage function runs after the DOM is fully loaded
        window.addEventListener('load', initializePage);

        // Keyboard controls for sliders
        window.addEventListener('keydown', (e) => {
            const active = document.activeElement;
            const inStudyOne = document.getElementById('studyOne');
            const inStudyTwo = document.getElementById('studyTwo');
            if (!inStudyOne && !inStudyTwo) return;
            if (e.key === 'ArrowLeft') {
                if (inStudyTwo && active.closest && active.closest('#studyTwo')) changeWorkImage('studyTwo', -1);
                else changeWorkImage('studyOne', -1);
            }
            if (e.key === 'ArrowRight') {
                if (inStudyTwo && active.closest && active.closest('#studyTwo')) changeWorkImage('studyTwo', 1);
                else changeWorkImage('studyOne', 1);
            }
        });

        // Lazy-load images via IntersectionObserver
        window.addEventListener('load', () => {
            const imgs = document.querySelectorAll('img');
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const src = el.getAttribute('data-src');
                        if (src) { el.src = src; el.removeAttribute('data-src'); }
                        obs.unobserve(el);
                    }
                });
            }, { rootMargin: '200px' });
            imgs.forEach(img => io.observe(img));
        });

        // Add ARIA live region for ticker already in HTML

        // Highlight Case Studies nav links based on which showcase is closest to viewport center
window.addEventListener('load', () => {
    const studyEls = Array.from(document.querySelectorAll('.studyShowcase[id]'));
    const nav = document.querySelector('.right-nav .site-navbar');
    if (!studyEls.length || !nav) return;

    const linkById = new Map(
        Array.from(nav.querySelectorAll('a.scrollA[href^="#"]')).map(a => [a.getAttribute('href')?.slice(1), a])
    );

    const visible = new Set();
    let rafId = 0;

    const applyActive = () => {
        rafId = 0;
        const viewportCenter = window.innerHeight / 2;

        // Only consider currently-visible showcases
        const candidates = studyEls
            .filter(el => visible.has(el))
            .map(el => {
                const rect = el.getBoundingClientRect();
                const elCenter = rect.top + rect.height / 2;
                const dist = Math.abs(elCenter - viewportCenter);
                return { el, dist };
            })
            .sort((a, b) => a.dist - b.dist);

        // Clear previous
        linkById.forEach(a => a.classList.remove('scrollA-active'));

        // Activate closest if within threshold
        if (!candidates.length) return;

        const { el, dist } = candidates[0];
        const threshold = Math.min(260, window.innerHeight * 0.25);
        if (dist <= threshold) {
            const a = linkById.get(el.id);
            if (a) a.classList.add('scrollA-active');
        }
    };

    const schedule = () => {
        if (rafId) return;
        rafId = window.requestAnimationFrame(applyActive);
    };

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            });
            schedule();
        },
        {
            root: null,
            rootMargin: '35% 0px 35% 0px',
            threshold: [0, 0.05, 0.15, 0.3]
        }
    );

    studyEls.forEach(el => io.observe(el));

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
});

// Overlay image viewer (wheel-zoom + drag-pan + click-off-to-close)
// Usage:
//   initImageOverlay({ overlayId: 'overlay', imageId: 'overlay-img', captionId: 'overlay-caption' });
//   openImageOverlay('path/to/img.png', 'Caption text');
(() => {
    let overlayEl = null;
    let imgEl = null;
    let captionEl = null;

    // Pan/zoom state
    let scale = 1;
    let tx = 0;
    let ty = 0;

    // Drag state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOriginTx = 0;
    let dragOriginTy = 0;

    // rAF smoothing
    let rafId = 0;
    let pendingTx = 0;
    let pendingTy = 0;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const scheduleTransform = (nextTx, nextTy) => {
        pendingTx = nextTx;
        pendingTy = nextTy;
        if (rafId) return;
        rafId = requestAnimationFrame(applyTransform);
    };

    const setDraggingStyles = (dragging) => {
        if (!imgEl) return;
        if (dragging) {
            imgEl.classList.add('dragging');
            imgEl.style.transition = 'none';
            imgEl.style.cursor = 'grabbing';
        } else {
            imgEl.classList.remove('dragging');
            imgEl.style.transition = '';
            imgEl.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
        }
    };

    const applyTransform = () => {
        rafId = 0;
        tx = pendingTx;
        ty = pendingTy;
        if (!imgEl) return;
        imgEl.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
    };

    const resetTransform = () => {
        scale = 1;
        tx = 0;
        ty = 0;
        pendingTx = 0;
        pendingTy = 0;
        if (!imgEl) return;
        imgEl.style.transformOrigin = 'center center';
        imgEl.style.transform = 'translate3d(0px, 0px, 0) scale(1)';
        imgEl.style.cursor = 'zoom-in';
    };

    const close = () => {
        if (!overlayEl) return;
        overlayEl.style.display = 'none';
        resetTransform();
    };

    const open = (src, caption) => {
        if (!overlayEl || !imgEl) return;
        imgEl.src = src;
        imgEl.alt = caption || '';
        if (captionEl) captionEl.textContent = caption || '';

        // Normalize open state across pages
        overlayEl.style.display = 'flex';
        if (!overlayEl.style.alignItems) overlayEl.style.alignItems = 'center';
        if (!overlayEl.style.justifyContent) overlayEl.style.justifyContent = 'center';
        overlayEl.style.flexDirection = 'column';

        resetTransform();
    };

    const ensureBoundOnce = () => {
        if (!overlayEl || !imgEl) return;
        if (overlayEl.dataset.overlayBound === '1') return;
        overlayEl.dataset.overlayBound = '1';

        // Disable native browser image dragging/selection behaviors that cause ghost-drag
        imgEl.setAttribute('draggable', 'false');
        imgEl.style.userSelect = 'none';
        imgEl.style.webkitUserSelect = 'none';
        imgEl.style.webkitUserDrag = 'none';
        imgEl.style.touchAction = 'none';
        imgEl.style.willChange = 'transform';

        imgEl.addEventListener('dragstart', (e) => e.preventDefault());

        // Click off image to close
        overlayEl.addEventListener('click', (event) => {
            if (event.target !== imgEl) close();
        });

        // Wheel/trackpad zoom
        overlayEl.addEventListener('wheel', (event) => {
            if (overlayEl.style.display !== 'flex') return;
            event.preventDefault();

            const zoomFactor = event.deltaY < 0 ? 1.12 : 0.88;
            const newScale = clamp(scale * zoomFactor, 1, 5);
            if (newScale === scale) return;

            const overlayRect = overlayEl.getBoundingClientRect();
            const px = event.clientX - overlayRect.left - overlayRect.width / 2;
            const py = event.clientY - overlayRect.top - overlayRect.height / 2;

            const ix = (px - tx) / scale;
            const iy = (py - ty) / scale;

            scale = newScale;
            const nextTx = px - ix * scale;
            const nextTy = py - iy * scale;
            scheduleTransform(nextTx, nextTy);

            imgEl.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
        }, { passive: false });

        // Drag to pan
        imgEl.addEventListener('pointerdown', (e) => {
            if (overlayEl.style.display !== 'flex') return;
            e.preventDefault();

            isDragging = true;
            setDraggingStyles(true);
            imgEl.setPointerCapture(e.pointerId);
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragOriginTx = tx;
            dragOriginTy = ty;
        });

        imgEl.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;

            scheduleTransform(dragOriginTx + dx, dragOriginTy + dy);
        }, { passive: false });

        const endDrag = (e) => {
            if (!isDragging) return;
            e?.preventDefault?.();
            isDragging = false;
            setDraggingStyles(false);

            // Commit any pending rAF update immediately
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = 0;
                tx = pendingTx;
                ty = pendingTy;
            }
        };

        imgEl.addEventListener('pointerup', endDrag);
        imgEl.addEventListener('pointercancel', endDrag);
        imgEl.addEventListener('lostpointercapture', endDrag);
    };

    // Public API
    window.initImageOverlay = function initImageOverlay(opts = {}) {
        const overlayId = opts.overlayId || 'overlay';
        const imageId = opts.imageId || 'overlay-img';
        const captionId = opts.captionId || 'overlay-caption';

        overlayEl = document.getElementById(overlayId);
        imgEl = document.getElementById(imageId);
        captionEl = captionId ? document.getElementById(captionId) : null;

        if (!overlayEl || !imgEl) return false;

        ensureBoundOnce();
        return true;
    };

    window.openImageOverlay = function openImageOverlay(src, caption) {
        open(src, caption);
    };

    window.closeImageOverlay = function closeImageOverlay() {
        close();
    };
})();
