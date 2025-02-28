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
            'index.html': {
                tabs: ['index', 'myWork'],
                defaultTab: 'index'
            },
            'persona.html': {
                tabs: ['aboutMe', 'bio'],
                defaultTab: 'aboutMe'
            },
            'caseGoalAndSpace.html': {
                tabs: ['own-goal', 'nautilus-conundrum'],
                defaultTab: 'own-goal'
            },
        };

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

            const defaultTab = tabs[pageConfig.defaultTab];
            document.body.style.backgroundImage = defaultTab.backgroundImage;
            changeLogo(defaultTab.logoSrc, defaultTab.logoAlt);

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.25
            };

            let initialLoad = {};
            pageConfig.tabs.forEach(tabKey => initialLoad[tabs[tabKey].sectionId] = true);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const tab = Object.values(tabs).find(tab => tab.sectionId === entry.target.id || tab.contentId === entry.target.id);
                    if (entry.isIntersecting && tab) {
                        if (initialLoad[tab.sectionId]) {
                            initialLoad[tab.sectionId] = false;
                            return;
                        }
                        document.body.style.backgroundImage = tab.backgroundImage;
                        changeLogo(tab.logoSrc, tab.logoAlt);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.section, .tabs-stuff').forEach(element => observer.observe(element));
        }

        window.addEventListener('load', initializePage);
