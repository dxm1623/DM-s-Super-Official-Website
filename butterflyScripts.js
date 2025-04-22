const internetEventsByYear = [
    {
        year: 2003,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [
                {
                    id: "roosterteeth0", // id for Rooster Teeth event
                    date: "April 1, 2003",
                    title: "Rooster Teeth Founded, releases first episode of Red vs. Blue.",
                    txt: "Rooster Teeth is founded by Burnie Burns and Geoff Ramsey, along with Matt Hullum, Gus Sorola, and others. They release the first episode of their groundbreaking web series 'Red vs. Blue', which quickly gains a cult following for its unique blend of humor and machinima storytelling. The series, set in the Halo universe, attracts the attention of not just the online community but Bungie themselves, who would begin inviting the Rooster Teeth team to events and even providing them with early access to Halo games for future episodes.",
                    active: true,
                    isButterfly: true,
                    corrButterfly: "roosterteethA0", // this event's corresponding butterfly, if applicable
                    priority: 0
                },
                {
                    id: "roosterteethA0", // id for the alternate Rooster Teeth event
                    date: "April 1, 2003",
                    title: "Rooster Teeth Founding Complicated by Drive Failure.",
                    txt: "Rooster Teeth is founded by Burnie Burns and Geoff Ramsey, along with Matt Hullum, Gus Sorola, and others. However, the release of their first episodes of 'Red vs. Blue' is delayed when a hard drive containing the initial episodes fails, resulting in the loss of critical footage. The team scrambles to recover and re-record content, leading to a rushed release that lacks the polish they envisioned. In the end, exhaustion and frustration in the endeavor result in only a dozen episodes being produced before the team moves on to other projects.",
                    active: false, // this is the alternate event, so it is inactive by default
                    isButterfly: true, // this is a butterfly event
                    corrButterfly: "roosterteeth0", // this butterfly's corresponding event, if applicable
                    priority: 0
                }
            ] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [
                {
                    id: "zuckerberg0",
                    date: "November 19, 2003",
                    title: "Facemash Creator Survives Ad Board.",
                    txt: "Mark Zuckerberg, a Harvard student, creates the Facemash website, which allows users to rate the attractiveness of their classmates. The site quickly goes viral, drawing criticism and legal action from Harvard administrators. Despite facing disciplinary charges, Zuckerberg avoids expulsion and the charges are eventually dropped. The incident serves as a precursor to the creation of TheFacebook, which Zuckerberg launches the following year.",
                    active: true,
                    isButterfly: true,
                    corrButterfly: "zuckerbergA0", // this event's corresponding butterfly
                    priority: 0
                },
                {
                    id: "zuckerbergA0",
                    date: "November 19, 2003",
                    title: "Facemash Creator Expelled from Harvard.",
                    txt: "Mark Zuckerberg, a Harvard student, creates the Facemash website, which allows users to rate the attractiveness of their classmates. The site quickly goes viral, drawing criticism and legal action from Harvard administrators. With mounting allegations of privacy violations and impropriety, Zuckerberg is expelled from Harvard and the site is shut down. The incident severely damages Zuckerberg's reputation and prospects for the future.",
                    active: false,
                    isButterfly: true,
                    corrButterfly: "zuckerberg0", // this butterfly's corresponding event
                    priority: 0
                }
                // BUTTERFLY user chooses this.
            ] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2004,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [
                {
                    id: "youtube0",
                    date: "February 1, 2004",
                    title: "Timberlake & Jackson stir controversy at Super Bowl XXXVIII halftime show.",
                    txt: "During the halftime show of Super Bowl XXXVIII, Justin Timberlake and Janet Jackson's performance sparks controversy when Timberlake accidentally exposes Jackson's breast on live television. The incident, later referred to as a 'wardrobe malfunction,' leads to widespread debate over censorship and indecency in the media. The fallout from the incident results in increased scrutiny of television content; Jawed Karim, an employee at PayPal, struggles to find a video of the incident online.",
                    active: true,
                    isButterfly: true,
                    corrButterfly: "youtubeA0",
                    priority: 0
                },
                {
                    id: "youtubeA0",
                    date: "February 1, 2004",
                    title: "Timberlake & Jackson dazzle at Super Bowl XXXVIII halftime show",
                    txt: "During the halftime show of Super Bowl XXXVIII, Justin Timberlake and Janet Jackson's performance captivates audiences with their dynamic choreography and vocal talents. The duo's electrifying performance becomes a cultural touchstone, quickly being hailed as one of the greatest halftime shows in Super Bowl history and cited as one of the reasons for the game's reputation as one of the greatest Super Bowls of all time.",
                    active: false,
                    isButterfly: true,
                    corrButterfly: "youtube0",
                    priority: 0
                }
                // BUTTERFLY, user chooses this.
            ] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2005,
        months: [
            {
                month: "January",
                events: []
            },
            {
                month: "February",
                events: [
                    {
                        id: "youtube1",
                        date: "February 14, 2005",
                        title: "YouTube Founded",
                        txt: "YouTube is founded by Steve Chen, Chad Hurley, and Jawed Karim. Initially envisioned as a video dating site, the focus of the platform shifts to general video sharing, akin to Flickr but for videos. The site remains relatively obscure as it continues development.",
                        active: true,
                        preReq: "youtube0",
                        priority: 0
                    },
                    {
                        id: "youtubeA1",
                        date: "February 14, 2005",
                        title: "Facebook experiments with 'matchmaking' feature",
                        txt: "Facebook introduces a new feature called 'matchmaking', allowing users to connect with potential romantic partners based on shared interests and mutual friends. The feature quickly gains popularity and becomes a key component of the platform's social networking experience.",
                        active: false,
                        preReq: ["zuckerberg0", "youtubeA0"],
                        priority: 1
                    },
                    // if the Superbowl XXXIX halftime show controversy never happens
                    {
                        id: "noYoutubeNoZucc0",
                        date: "February 11, 2005",
                        title: "MySpace beta-tests video sharing feature.",
                        txt: "A project team lead by freelancer Steve Chen and supported by Sean Parker, co-founder of Napster and advisor to MySpace, beta-tests a video sharing feature on MySpace. The slow rollout receives positive feedback, with users praising the ability to share and view videos on the platform albeit with some technical issues. A full rollout is planned for later in the year.",
                        active: false,
                        preReq: ["zuckerbergA0", "youtubeA0"],
                        priority: 2
                    }
                ]
            },
            { month: "March", events: [] },
            { month: "April", events: [
                    {
                        id: "youtube2",
                        date: "April 23, 2005",
                        title: "Me at the zoo",
                        txt: "Jawed Karim uploads a video of him at the San Diego Zoo recorded by his friend Yakov Lapitsky. The video, titled 'Me at the zoo', becomes the first video uploaded to YouTube, marking the beginning of contemporary online video sharing.",
                        active: true,
                        youtube: true,
                        preReq: "youtube1",
                        priority: 0
                    },
                    {
                        id: "youtubeA2",
                        date: "April 17, 2005",
                        title: "Facebook Matches First Couple, teases video sharing feature",
                        txt: "Facebook's matchmaking feature successfully connects its first couple, sparking a wave of interest in the platform's social networking capabilities. In a surprise move, Facebook teases a new video sharing feature, hinting at the platform's future direction.",
                        active: false,
                        facebookTube: true,
                        preReq: "youtubeA1",
                        priority: 1
                    },
                    // if the Superbowl XXXIX halftime show controversy never happens, so YouTube is never founded and Steve Chen stays at Facebook
                    {
                        id: "noYoutubeNoZucc1",
                        date: "April 23, 2005",
                        title: "MySpace video sharing feature goes live.",
                        txt: "MySpace's video sharing feature goes live, allowing users to upload and share videos on the platform. The feature quickly gains popularity, attracting a large user base and positioning MySpace as a leading social media platform for video content.",
                        active: false,
                        preReq: "noYoutubeNoZucc0",
                        priority: 2
                    }
            ] 
            },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2006,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            {
                month: "June",
                events: [
                    {
                        id: "youtube3",
                        date: "June 26, 2006",
                        title: "NBC Drops YouTube Suit, Signs Promo Deal Instead",
                        txt: "After initially suing YouTube for copyright infringement, notably due to an upload of the \"Lazy Sunday\" SNL skit, NBC does a 180 and signs a promotional deal with the site. The approach is soon copied by other networks and studios as they realize the potential of online video sharing.",
                        active: true,
                        isButterfly: true,
                        corrButterfly: "youtubeC3",
                        preReq: "youtube2",
                        priority: 0
                    },
                    {
                        id: "youtubeC3",
                        date: "June 26, 2006",
                        title: "NBC Files Suit Against YouTube, citing infringement",
                        txt: "NBC files a lawsuit against YouTube, alleging infringement of its content after a user uploads the \"Lazy Sunday\" SNL skit. The legal battle drags on for years, setting a precedent for future disputes over online content.",
                        active: false,
                        isButterfly: true,
                        corrButterfly: "youtube3",
                        preReq: "youtube2",
                        priority: 1
                    },
                    // BUTTERFLY, user chooses this.
                    {
                        id: "youtubeA3",
                        date: "June 7, 2006",
                        title: "Facebook Matchmaker Sued for Indecency, Privacy Violations",
                        txt: "Facebook faces lawsuits from moral guardians and privacy advocates over its matchmaking feature, which is accused of violating users' privacy and promoting indecency. The lawsuits lead to a temporary suspension of the feature, but most of the lawsuits are either dismissed or settled out of court.",
                        active: false,
                        preReq: ["zuckerberg0", "youtubeA2"],
                        priority: 2
                    },
                    {
                        id: "noYoutubeNoZucc2",
                        date: "June 13, 2006",
                        title: "NBC and MySpace Settle on Content Dissemination Deal, in Exchange for Promotion",
                        txt: "Following the sudden viral success of a reupload of the \"Lazy Sunday\" SNL skit on MySpace, NBC and MySpace reach a settlement on a content dissemination deal. The deal allows NBC to promote its shows on MySpace in exchange for exclusive content and promotional opportunities. The partnership marks a significant shift in the media landscape, as traditional networks begin to embrace social media platforms for content distribution.",
                        active: false,
                        preReq: "noYoutubeNoZucc1",
                        priority: 3
                    }
                ]
            },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [
                {
                    id: "youtube4",
                    date: "October 9, 2006",
                    title: "Google Acquires YouTube",
                    txt: "Google acquires YouTube for $1.65 billion in stock. The deal cements YouTube's position as the dominant online video platform and marks a major milestone in the history of internet acquisitions. Importantly, it grants the nascent site an immense amount of financial and logistical resources.",
                    active: true,
                    preReq: ["zuckerberg0", "youtube3"],
                    priority: 0
                },
                {
                    id: "youtubeC4",
                    date: "October 30, 2006",
                    title: "Facing Financial Woes, YouTube Shuts Down",
                    txt: "After a deal for Google to potentially buy out YouTube falls through due to concerns over the video sharing site's recent legal troubles, YouTube is forced to shut down. The closure leaves a void in the online video sharing market, with competitors such as Vimeo scrambling to fill the gap.",
                    active: false,
                    preReq: ["zuckerberg0", "youtubeC3"],
                    youtube: false,
                    priority: 1
                },
                // if NBC does not drop the lawsuit against YouTube
                {
                    id: "youtubeA4",
                    date: "October 11, 2006",
                    title: "Facebook Matchmaker lawsuit settled for undisclosed amount; spun off into separate company, Matchmaker.",
                    txt: "After months of legal battles, Facebook settles the lawsuit over its matchmaking feature for an undisclosed amount. The feature is spun off into a separate company called Matchmaker, which quickly gains popularity as a dating platform. The settlement allows Facebook to focus on its core social networking features while still capitalizing on the success of the matchmaking concept.",
                    active: false,
                    preReq: ["zuckerberg0", "youtubeA2"],
                    priority: 2
                },
                {
                    id: "noYoutubeNoZucc3",
                    date: "October 15, 2006",
                    title: "Mark Cuban Purchases MySpace.",
                    txt: "With the runaway success of MySpace, enjoying a recent influx of corporate partnerships and a growing user base, Mark Cuban purchases the site for an undisclosed amount in a move harkening back to his days as a tech entrepreneur. Cuban's acquisition of MySpace marks a significant shift in the social media landscape, as the site begins to explore new revenue streams and partnerships under his leadership. The move is seen as a bold bet on the future of social media and online content distribution.",
                    active: false,
                    preReq: "noYoutubeNoZucc2",
                    priority: 2
                }
            ] },
            { month: "November", events: [] },
            { month: "December", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2007,
        months: [
            {
                month: "January",
                events: [
                    {
                        date: "January 9, 2007",
                        title: "Apple Announces the iPhone",
                        txt: "Steve Jobs unveils the iPhone, revolutionizing mobile technology and internet access. The device becomes a cultural icon.",
                        active: true
                    }
                ]
            },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2008,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [
                {
                    date: "November 4, 2008",
                    title: "Barack Obama Elected President",
                    txt: "Barack Obama is elected as the first African American President of the United States, marking a historic moment in American history.",
                    active: true
                },
                {
                    date: "November 4, 2008",
                    title: "Hillary Clinton Elected President",
                    txt: "Hillary Clinton is elected as the first woman President of the United States, marking a historic moment in American history.",
                    active: false
                }
            ] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2010,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            {
                month: "October",
                events: [
                    {
                        date: "October 6, 2010",
                        title: "Instagram Launches",
                        txt: "Instagram launches as a photo-sharing app, quickly gaining popularity and becoming a major player in social media.",
                        active: true
                    }
                ]
            },
            { month: "November", events: [] },
            { month: "December", events: [
                {
                    id: "creatures0", // id for The Creatures event
                    date: "December 18, 2010",
                    title: "The Creatures form, host first podcast.",
                    txt: "The Creatures, a group of gaming YouTubers include personalities like James \"Nova\" Wilson Jr., Seamus \"SSoHPKC\" O'Doherty, Jordan \"Kootra\" Mathewson, and Anthony \"ChilledChaos\" DiMarco, form and host their first podcast. The group quickly gains a following for their gaming content and comedic banter, however, early tensions and misunderstandings between Wilson and DiMarco eventually lead to DiMarco's departure from the group soon after.",
                    active: true,
                    isButterfly: true,
                    corrButterfly: "creaturesA0",
                    preReq: ["roosterteeth0","youtube3"],
                    priority: 0
                },
                {
                    id: "creaturesA0",
                    date: "December 18, 2010",
                    title: "James \"Nova\" Wilson Jr. shouts out The Creatures.",
                    txt: "James \"Nova\" Wilson Jr., semi-popular for his gaming videos and collaborations, gives a shout-out to the newly formed Creatures in his latest video, the group having been founded by close friends Jordan \"Kootra\" Mathewson and Seamus \"SSoHPKC\" O'Doherty and including other prospective members like Anthony \"ChilledChaos\" DiMarco. The group finds themselves gaining a small but dedicated following as they continue to produce content together, while Wilson continues his rise as a content creator. When asked if he himself was going to join however, Wilson declined, stating that he wanted to focus on his own channel and content.",
                    active: false,
                    isButterfly: true,
                    corrButterfly: "creatures0",
                    preReq: ["roosterteeth0","youtube3"],
                    priority: 1
                }
            ] }
        ]
    },
    {
        year: 2012,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [
                {
                    date: "April 9, 2012",
                    title: "Facebook Acquires Instagram",
                    txt: "Facebook acquires Instagram for $1 billion, expanding its reach in the social media landscape. Zuckerberg emphasizes that Instagram would remain a separate entity from Facebook. Nonetheless, the acquisition enables Facebook to integrate Instagram's features into its platform, further solidifying its dominance in social media whilst Instagram itself rapidly grows in popularity.",
                    active: true,
                    preReq: ["youtube3", "zuckerberg0"],
                    priority: 0
                },
                {
                    date: "April 5, 2012",
                    title: "Facebook-Instagram Acquisition Blocked due to Antitrust Concerns",
                    txt: "Facebook's acquisition of Instagram is blocked by regulators due to antitrust concerns, as a result of the company's growing dominance in various sectors of both online and offline life. The bloat of the company already leading to scrutiny, investigations by the FTC and other regulatory bodies lead to the deal being called off. Instagram is forced to seek alternative funding sources to continue its operations.",
                    active: false,
                    preReq: ["youtubeA1","youtubeA4", "zuckerberg0", "youtube3"],
                    priority: 1
                },
                {
                    date: "April 9, 2012",
                    title: "MySpace Acquires Instagram",
                    txt: "MySpace acquires Instagram for $1 billion, hoping to expand its range. The acquisition allows MySpace to integrate Instagram's photo-sharing features into its platform, a move that would likely be paired with its existing video sharing features. ",
                    active: false,
                    preReq: "noYoutubeNoZucc1",
                    priority: 0
                }
            ] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2013,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [
                {
                    date: "August 15, 2013",
                    title: "PewDiePie becomes most subscribed YouTuber.",
                    txt: "In an unprecedented rise to fame, Felix \"PewDiePie\" Kjellberg becomes the most subscribed YouTuber in a matter of months. His Let's Play videos and energetic personality resonate with viewers, propelling him to internet stardom and propelling the Let's Play genre to new heights. Kjellberg's success inspires a new generation of content creators and solidifies YouTube as a platform for gaming content.",
                    active: true,
                    preReq: ["youtube0", "youtube3", "creatures0"],
                    priority: 0
                },
                {
                    date: "August 27, 2013",
                    title: "UberHaxorNova becomes most subscribed YouTuber.",
                    txt: "After years of consistent growth and innovative content, James \"Nova\" Wilson Jr. becomes the most subscribed YouTuber. His unique blend of gaming, comedy, and storytelling captivates audiences, setting a new standard for online entertainment. Wilson's success cements his status as a pioneer of the Let's Play genre and a cultural icon for a generation of viewers.",
                    active: false,
                    preReq: ["youtube0", "youtube3", "creaturesA0"],
                    priority: 1
                },
                {
                    date: "August 29, 2013",
                    title: "PewDiePie edges out UberHaxorNova as most subscribed YouTuber.",
                    txt: "In a two-day back-and-forth battle for the top spot, Felix \"PewDiePie\" Kjellberg edges out James \"Nova\" Wilson Jr. as the most subscribed YouTuber. The competition between the two creators sparks a friendly rivalry and drives both to new heights of success. Kjellberg's victory solidifies his position as the face of online gaming content, while Wilson's crude humor and unfiltered personality continue to attract a dedicated fanbase; all the while, the Let's Play genre continues to grow in popularity.",
                    active: false,
                    preReq: ["youtube0", "youtube3", "creatures0"],
                    priority: 0
                },
                // if Youtube no longer exists
                {
                    date: "August 15, 2013",
                    title: "PewDiePie becomes most followed Vimeo creator.",
                    txt: "In an unprecedented rise to fame, Felix \"PewDiePie\" Kjellberg becomes the most followed creator on Vimeo in a matter of months. His Let's Play videos and energetic personality resonate with viewers, propelling him to internet stardom and propelling the Let's Play genre to new heights. Kjellberg's success inspires a new generation of content creators and solidifies Vimeo as a platform for gaming content.",
                    active: false,
                    preReq: ["youtube0", "youtubeA3"],
                    priority: 0
                }

            ] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2015,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [
                {
                    date: "June 16, 2015",
                    title: "Donald Trump Goes Down Escalator, announces presidential run.",
                    txt: "Still feeling insulted by a joke made by President Obama at the 2011 White House Correspondents' Dinner and seeking to capitalize on growing discontent, Donald Trump announces his candidacy for President of the United States. His controversial remarks and unorthodox campaign style quickly make him a polarizing figure in American politics.",
                    active: true,
                    priority: 0
                },
                {
                    date: "June 16, 2015",
                    title: "Donald Trump Endorses Ben Carson for President.",
                    txt: "Donald Trump, long having misgivings of the incumbent administration, endorses Ben Carson for President of the United States. Carson, a retired neurosurgeon, quickly gains popularity for his outsider status and conservative views. Trump's endorsement boosts Carson's campaign and sets the stage for a heated primary season.",
                    active: false,
                    priority: 1
                },
                // if Obama is not President
                {
                    date: "June 16, 2015",
                    title: "John McAfee Attends DEF CON, announces presidential run.",
                    txt: "John McAfee, the eccentric founder of the antivirus software company McAfee Associates, announces his candidacy for President of the United States at the DEF CON hacking conference, citing concerns over government surveillance and privacy rights. His choice to run in the Republican primary raises eyebrows, but his unorthodox campaign style and libertarian views quickly attract a dedicated following among tech enthusiasts and privacy advocates as well as budget hawks.",
                    active: false,
                    priority: 2
                },
                // if Kerry beats Bush in 2004 AND Obama is not President
                {
                    date: "June 16, 2015",
                    title: "John Kasich Announces Presidential Run, Republican Primary remains divided.",
                    txt: "John Kasich, the Governor of Ohio, announcement of his own presidential run in the Republican primary further divides the field. In spite of numerous other candidates joining the race, most observes agree that Jeb Bush is the frontrunner, as Kasich and other moderates are bogged down by firebrands such as Ted Cruz and Rand Paul.",
                    active: false,
                    priority: 3
                }
                // if none of the above apply

            ] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [
                {
                    id: "oum0", // id for Monty Oum event
                    date: "October 5, 2015",
                    title: "Monty Oum passes away, Rooster Teeth mourns loss.",
                    txt: "Monty Oum, the talented animator and creator behind Rooster Teeth's popular web series 'Red vs. Blue' and 'RWBY', passes away at the age of 33 after suffering a severe allergic reaction during a medical procedure. The news sends shockwaves through the online entertainment community, as fans and fellow creators mourn the loss of a visionary talent. Rooster Teeth pays tribute to Oum's legacy with heartfelt messages and memorials across their platforms.",
                    active: true,
                    isButterfly: true, // this event is a butterfly event
                    corrButterfly: "oumA0", // this event's corresponding butterfly, if applicable
                    preReq: "roosterteeth0",
                    priority: 0
                },
                {
                    id: "oumA0", // id for the alternate Monty Oum event
                    date: "October 5, 2015",
                    title: "Monty Oum Health Scare Startles Fans, Rooster Teeth Team.",
                    txt: "Monty Oum, the talented animator and creator behind Rooster Teeth's popular web series 'Red vs. Blue' and 'RWBY', suffers a severe health scare during a medical procedure, leading to widespread concern among fans and the Rooster Teeth team. Although Oum ultimately recovers, he takes a temporary leave of absence from Rooster Teeth to focus on his health. He is met with an outpouring of support from fans and colleagues alike, who rally around him during his recovery.",
                    active: false,
                    isButterfly: true, // this is a butterfly event
                    corrButterfly: "oum0", // this butterfly's corresponding event
                    preReq: "roosterteeth0",
                    priority: 1
                }
            ] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2016,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [
                {
                    id: "trump0",
                    date: "November 3, 2016",
                    title: "Donald Trump Elected President of the United States",
                    txt: "Donald Trump is elected President of the United States in a shocking upset. His victory sparks widespread protests and controversy, setting the stage for a tumultuous political era.",
                    active: true,
                    
                },
                {
                    id: "clinton0",
                    date: "November 3, 2016",
                    title: "Hillary Clinton Elected President of the United States",
                    txt: "Hillary Clinton is elected President of the United States in a historic victory. Her win is met with celebrations and optimism for the future.",
                    active: false
                    // if Donald Trump does not run for president.
                },
                {
                    id: "sanders0",
                    date: "November 3, 2016",
                    title: "Bernie Sanders Elected President of the United States",
                    txt: "Bernie Sanders is elected President of the United States in a stunning upset. His win is met with a mix of excitement and skepticism, as his progressive policies and grassroots campaign challenge the status quo.",
                    active: false
                    // if Clinton beats Obama in 2008 AND Donald Trump runs for president OR if John Kerry beats George W. Bush in 2004 AND Donald Trump does not run for president.
                },
                {
                    id: "mcafee0",
                    date: "November 3, 2016",
                    title: "John McAfee Elected President of the United States",
                    txt: "John McAfee is elected President of the United States in a shocking upset. His win is met with outrage and confusion, as his unconventional policies and behavior quickly become the subject of intense scrutiny.",
                    active: false
                    // if John Kerry beats George W. Bush in 2004 AND Donald Trump does not run for president.
                }
            ] },
            { month: "December", events: [] }
            ] 
        },
        {
        year: 2017,
        months: [
            { month: "January", events: [
                {
                    id: "mrbeast0",
                    date: "January 8, 2017",
                    title: "Jimmy Donaldson counts to 100,000, goes viral.",
                    txt: "Jimmy Donaldson, known online as MrBeast, counts to 100,000 in a single video. The feat takes over 40 hours to complete and earns Donaldson a place in the Guinness World Records for the longest continuous video on YouTube. The video goes viral, propelling Donaldson to internet stardom. He takes advantage of his newfound fame to launch a series of philanthropic challenges and giveaways, further solidifying his reputation as a creator with a heart of gold (at the moment).",
                    active: true,
                    isButterfly: true,
                    corrButterfly: "mrbeastA0",
                    priority: 0
                },
                {
                    id: "mrbeastA0",
                    date: "January 17, 2017",
                    title: "Jimmy Donaldson begins Interactive Media studies at East Carolina University.",
                    txt: "After being told off by his parents for spending too much time on YouTube, Jimmy Donaldson decides to channel his passion for content creation into a degree in Interactive Media at East Carolina University. Studying the technical, algorithmic, and creative factors towards viral content, Donaldson quickly becomes a standout student and quickly becomes a sought-after consultant for various companies.",
                    active: false,
                    isButterfly: true,
                    corrButterfly: "mrbeast0",
                    // BUTTERFLY, user chooses this.
                    priority: 1
                }
            ]},
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    },
    {
        year: 2018,
        months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [] },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [
                {
                    id: "mrbeast1",
                    date: "December 25, 2018",
                    title: "MrBeast tells all about giving away $1,000,000; cements self as philanthropic creator.",
                    txt: "Jimmy Donaldson, known online as MrBeast, releases a video detailing his journey to giving away $1,000,000. The creator, having amassed a large following and significant wealth through his strategic understanding of YouTube's algorithm, has become known for his philanthropic challenges and giveaways. Rather quietly, Donaldson has been using his platform to raise awareness and funds for various causes, including environmental conservation and mental health awareness.",
                    active: true,
                    preReq: "mrbeast0",
                    priority: 0
                },
                {
                    id: "mrbeastA1",
                    date: "December 1, 2018",
                    title: "Jimmy Donaldson applies for internships; Joins YouTube.",
                    txt: "East Carolina University student Jimmy Donaldson, excelling in his Interactive Media studies, applies for internships to various tech companies, including Google and YouTube. His application to YouTube is accepted, and Donaldson spends the summer of 2019 interning at the company, gaining valuable experience and connections in the tech industry.",
                    active: false,
                    // if Jimmy Donaldson does not go viral counting to 100,000 and instead focuses on his studies.
                    preReq: "mrbeastA0",
                    priority: 1
                }
            ] }
        ]
    },
        {
            year: 2024,
            months: [
            { month: "January", events: [] },
            { month: "February", events: [] },
            { month: "March", events: [] },
            { month: "April", events: [
                {
                    id: "roosterteethFINAL0",
                    date: "April 1, 2024",
                    title: "Rooster Teeth celebrates final birthday on eve of closure.",
                    txt: "Rooster Teeth, the pioneering online entertainment company, celebrates its final birthday before closing its doors, after its impending shutdown was announced the previous month. The company, known for its diverse content and dedicated fanbase, faced financial difficulties and internal strife, leading to its ultimate demise. The closure marks the end of an era in online entertainment and leaves a void in the hearts of fans worldwide.",
                    active: true,
                    preReq: ["roosterteeth0", "creatures0", "oum0"],
                    priority: 0
                },
                {
                    id: "butterfly-2024-4-1",
                    date: "April 1, 2024",
                    title: "Rooster Teeth celebrates 21 years, old enough to drink!",
                    txt: "Rooster Teeth celebrates its 21st anniversary, marking two decades of online content creation and community building. A number of special events and collaborations occur throughout the year, culminating in a massive fan convention in Austin, Texas. The company's founders, Burnie Burns and Geoff Ramsey, reflect on the journey and express gratitude to the fans who have supported them over the years.",
                    active: false,
                    preReq: ["roosterteeth0", "creatures0", "oumA0"],
                    priority: 1
                    // If Geoff and Burnie decline to join Warner Bros. and do not fail by either finding another company or scoring a big success, i.e. Netflix deal.
                },
                {
                    id: "roosterteethFINALGREAT",
                    date: "April 1, 2024",
                    title: "Rooster Teeth / Achievement Hunter split; Geoff and Burnie announce 'divorce'.",
                    txt: "With Rooster Teeth's Hollywood success and monolithic size, internal conflicts and brushes with anti-monopoly laws lead to Geoff Ramsey and Burnie Burns spinning off Achievement Hunter into its own company, with Geoff as CEO and fellow creator Gavin Free as CCO. Naturally disbelieved due to the date, the surprising announcement, made on RT's 21st birthday, is made all the more humorous in the form it takes: an improv livestream with Geoff melodramatically 'breaking up' with Burnie.",
                    active: false,
                    // If early on, Burnie focuses on approaching Hollywood and getting film experience AND Monty Oum is still alive AND Lazer Team is a success.
                    preReq: ["roosterteeth0", "creaturesA0", "oumA0"],
                    priority: 3
                },
                {
                    id: "roosterteethFINALBAD",
                    date: "April 12, 2024",
                    title: "Burnie Burns, Morning Somewhere host, reflects on what to learn from the downfall of Rooster Teeth.",
                    txt: "Burnie Burns, host of the popular podcast Morning Somewhere, reflects on the lessons to be learned from the rise and fall of Rooster Teeth in the 2010s. Attributing the rapid decline of the company to a combination of poor management decisions, lack of creative innovation, and a toxic work environment, Burns finds hope in the success of some former employees, including Geoff Ramsey and Gavin Free, who have gone on to host their own podcast: F*CKFACE.",
                    active: false,
                    // If Rooster Teeth remains independent and does not join Fullscreen (and later Warner Bros.), but does not score a big success, i.e. Netflix deal, and does not get bought out by another company.
                    priority: 2
                },
                {
                    id: "roosterteethFINALNOVA",
                    date: "April 24, 2024",
                    title: "James \"Nova\" Wilson reconnects with Burnie Burns and Geoff Ramsey, discusses potential revival of Rooster Teeth.",
                    txt: "James \"Nova\" Wilson, while livestreaming with Geoff Ramsey and Burnie Burns on Wilson's channel, discussed the possibility of a Rooster Teeth revival. The three creators reminisced about the early days of the company and brainstorm ideas for a new direction. While nothing concrete is decided, the reunion sparks excitement among fans and some tepid hope for the future of the brand.",
                    active: false,
                    // If James "Nova" Wilson does not join The Creatures and makes it big on his own then joins Let's Play AND Rooster Teeth remains independent and does not join Fullscreen (and later Warner Bros.), but does not score a big success, i.e. Netflix deal, and does not get bought out by another company.
                    preReq: ["roosterteeth0", "creaturesA0", "oum0"],
                    priority: 1
                }
            ]
        },
            { month: "May", events: [] },
            { month: "June", events: [] },
            { month: "July", events: [] },
            { month: "August", events: [] },
            { month: "September", events: [] },
            { month: "October", events: [] },
            { month: "November", events: [] },
            { month: "December", events: [] }
        ]
    }
];

// function to replace any mention of YouTube (after 2005) with Vimeo in the txt property of each event UNLESS title of the event includes "YouTube", as to not replace post-humous mentions of YouTube in the Vimeo timeline.

let youtube = true;

function replaceYouTubeWithVimeo() {
    internetEventsByYear.forEach(year => 
        year.months.forEach(month => 
            month.events.forEach(event => {
                if (!event.title.includes("YouTube" || "Youtube")) {
                    event.txt = event.txt.replace(/YouTube/g, "Vimeo");
                    event.txt = event.txt.replace(/Youtube/g, "Vimeo");
                }
            })
        )
    );
}

function updateTimeline() {
    const timelineContainer = document.getElementById("timeline");
    const eventsContainer = document.getElementById("events");
    if (!timelineContainer) return console.error("Timeline container not found.");
    if (!eventsContainer) return console.error("Events container not found.");

    timelineContainer.innerHTML = ""; // Clear timeline
    eventsContainer.innerHTML = ""; // Clear events

    internetEventsByYear.forEach(year => 
        year.months.forEach(month => {
            let activeEvent = month.events
                .filter(event => event.active && arePreReqsFulfilled(event));

            if (activeEvent && activeEvent.length > 0) {
                activeEvent = activeEvent[0];
                console.log(year, month, activeEvent);
                const eventDiv = document.createElement("div");
                eventDiv.className = activeEvent.isButterfly ? "butterfly" : "event";
                eventDiv.innerHTML = `
                    <h2>${activeEvent.date}</h2>
                    <h1>${activeEvent.title}</h1>
                    <p>${activeEvent.txt}</p>
                `;
                if (activeEvent.isButterfly) {
                    console.log(`Butterfly event detected: ${activeEvent.id}`);
                    eventDiv.addEventListener("click", () => 
                    toggleButterfly(activeEvent, year, month));
                }
                console.log(eventsContainer , eventDiv);
                eventsContainer.appendChild(eventDiv);
            }
        })
    );

    timelineContainer.appendChild(eventsContainer); // Ensure eventsContainer is inside timelineContainer
}

function arePreReqsFulfilled(event, cache = {}) {
    if (!event.preReq) return true; // No prerequisites, event is valid
    const preReqs = Array.isArray(event.preReq) ? event.preReq : [event.preReq];

    return preReqs.every(preReqId => {
        // if (cache[preReqId] !== undefined) return cache[preReqId]; // Use cached result if available
        const isActive = isEventActive(preReqId, cache);
        // cache[preReqId] = isActive;
        if (!isActive) {
            console.log(`Prerequisite not fulfilled for event ${event.id}: ${preReqId} is inactive.`);
        }
        return isActive;
    });
}

function isEventActive(eventId) {
    return internetEventsByYear.some(year => 
        year.months.some(month => 
            month.events.some(event => event.id === eventId && event.active)
        )
    );
}

function toggleButterfly(event, selectedYear, selectedMonth) {
    console.log("A butterfly event was clicked.");
    console.log("butterfly clicked:", event);

    const correspondingEvent = findEventById(event.corrButterfly);
    if (!correspondingEvent) {
        console.error(`Corresponding butterfly event not found for ID: ${event.id}`);
        return;
    }

    console.log("corresponding event:", correspondingEvent);

    // Deactivate the current event and activate the corresponding butterfly event
    correspondingEvent.active = true;

    // Update all subsequent events
    updateSubsequentEvents(selectedYear, selectedMonth, event);

    event.active = false;

    // Refresh the timeline
    updateTimeline();

    // Debugging: Verify the toggle
    if (!correspondingEvent.active || event.active) {
        console.error("Error: Butterfly toggle failed.");
    } else {
        console.log("Success: Butterfly event toggled.");
    }
}

function findEventById(eventId) {
    for (let year of internetEventsByYear) {
        for (let month of year.months) {
            const event = month.events.find(e => e.id === eventId);
            if (event) return event;
        }
    }
    return null;
}

function updateSubsequentEvents(selectedYear, selectedMonth, currentEvent) {
    let startUpdating = false;

    internetEventsByYear.forEach(year => {
        if (year === selectedYear) startUpdating = true;

        if (startUpdating) {
            year.months.forEach(month => {
                if (year === selectedYear && month === selectedMonth) startUpdating = true;
                if (startUpdating) {
                    month.events.forEach(event => {
                        
                        if (event === currentEvent) {
                            currentEvent.active = false;
                            return
                        }

                        if (event.preReq) {
                            const preReqs = Array.isArray(event.preReq) ? event.preReq : [event.preReq];
                            event.active = preReqs.every(preReqId => isEventActive(preReqId));
                        }
                    });
                }
            });
        }
    });
}

function validateDependencies() {
    internetEventsByYear.forEach(year => {
        year.months.forEach(month => {
            month.events.forEach(event => {
                if (event.preReq) {
                    const preReqs = Array.isArray(event.preReq) ? event.preReq : [event.preReq];
                    preReqs.forEach(preReqId => {
                        if (!findEventById(preReqId)) {
                            console.error(`Invalid prerequisite ID: ${preReqId} for event ${event.id}`);
                        }
                    });
                }
            });
        });
    });
}

// Create Timeline on Page Load
document.addEventListener("DOMContentLoaded", () => {
    validateDependencies();
    updateTimeline();
});