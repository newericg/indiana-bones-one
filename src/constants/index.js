import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  youtube,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  indianabones_logo2,
  dogHiking,
  dogRate1,dogRate2,dogRate3,dogRate4,
  dogRate6,
  dogRate7,
  dogRate5,
  indyDog1,
  indyDog2,
  indyDog3,
  indyDog4,
  indyDog5,
  event1,
  event2,
  event3,
  halloween1,
  crusAid

} from "../../src/assets";


export const navigation = [
  {
    id: "0",
    title: "What we do",
    url: "/whatwedo",
  },
  {
    id: "1",
    title: "Rates and Benefits",
    url: "/rates",
  },
  {
    id: "2",
    title: "New Pup's Enrollment",
    url: "/newclients",
  },
  {
    id: "3",
    title: "Vote on Ideas!",
    url: "/vote-on-ideas",
  },
  {
    id: "4",
    title: "Quick Whip | 25% Off Hike",
    url: "/quick-whip",
  },
  {
    id: "5",
    title: "New client",
    url: "/newclients",
    onlyMobile: true,
  },
  // {
  //   id: "5",
  //   title: "Login",
  //   url: "/",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyServices = [
  {
    text: "Pup Clients",
    number: 415
  },
  {
    text: "Hikes",
    number: 2880
  },
  {
    text: "Camping Trips",
    number: 19
  },
  {
    text: "Dog Sittings",
    number: 134
  },
  // {
  //   text: "Camping Trip"
  // },
  // {
  //   text: "Overnight Boarding"
  // },
  // {
  //   text: "Dog Siting"
  // },
];

export const brainwaveServices = [
  "Book yourself",
  "Automatic Renewal",
  "Membership Plans",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Pumpkin Carving Festival 2024",
    text: "Annual Event!",
    date: "October 2024",
    status: "progress",
    imageUrl: halloween1,
  },
  {
    id: "1",
    title: "Indiana Bones and the Nature CrusAID",
    text: "",
    date: "October 2024",
    status: "done",
    imageUrl: crusAid,
  },
  {
    id: "2",
    title: "Pet-a-Palooza",
    text: "Excavation site at the Pet-a-Palooza!",
    date: "August 2024",
    status: "done",
    imageUrl: event2,
    // colorful: true,
  },
  {
    id: "3",
    title: "Riley's Rips",
    text: "Ride solo and test your knowledge of the city to find all the checkpoints, or grab some friends or family and tackle it as a team. Manage to find all the checkpoints and earn the coveted Finisher’s Pin.",
    date: "April 2024",
    status: "done",
    imageUrl: event1,
    details: '/riley-rips',
    detailsPage: [
      {
        title: 'Riley Rips',
        tag: 'Event'
      }
    ]
  },
  {
    id: "4",
    title: "Pumpkin Carving Festival 2023",
    text: "",
    date: "October 2023",
    status: "done",
    imageUrl: event3,
  },
];

export const collabText =
  "Welcome to our dog hiking service! We offer a friendly and exciting dog hiking experience for your furry friends.";

export const collabContent = [
  {
    id: "0",
    title: "Dog Hiking",
    text: "Let the little explorer inside your dog come to life!",
  },
  {
    id: "1",
    title: "Hotel Services",
    text: "Contact us today to learn more about how this service can help your furry friend!",
  },
  {
    id: "2",
    title: "Weekeng Dog Walking",
    text: "Busy on weekend? Count on us!",
  },
  {
    id: "3",
    title: "Overnight Boarding/Dog Sitting",
    text: "Don't feel guilty about going on vacation and leaving your pup behind.",
  },
  {
    id: "4",
    title: "Camping Trip",
    text: "Camping Trip Season 2024 is on!",
  },
  {
    id: "5",
    title: "Search & Rescue",
    text: "Drone and Night Vision Thermal Binoculars",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Real Time ETA sharing",
    text: "Monitor the arrival time of our dog walkers as they come to pick up your pup using our real-time ETA-sharing feature. We prioritize your time and strive to ensure a seamless and convenient experience for both you and your furry friend.",
    backgroundUrl: "assets/benefits/galeria1.jpg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Waiting list feature",
    text: "The waiting list feature allows you to sign up to be notified when a service becomes available. Available for dog hiking and dog walking services.",
    backgroundUrl: "assets/benefits/galeria2.jpg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Membership",
    text: "We provide memberships with exclusive benefits and perks. Discounts on boarding, dog-sitting, camping trips, dog walking and more!",
    backgroundUrl: "assets/benefits/galeria3.jpg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Self-service Booking System",
    text: "We provide a convenient self-service booking system showcasing available slots for dog hiking and walking. Say goodbye to waiting for service approval—simply book and prepare your pup for our dog walker's prompt arrival.",
    backgroundUrl: "assets/benefits/galeria4.jpg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Creativity and Continuous Improvement",
    text: "We integrate creativity into everything we do, constantly pursuing innovation and enhancement in our processes. Always having safety as our top priority—for your dog, our dog walkers, and everyone around us.",
    backgroundUrl: "assets/benefits/galeria5.jpg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "Personal Touch",
    text: "We understand the individual needs of both dogs and their owners. Our dog walkers provide a personalized experience, ensuring every dog enjoys their hike according to their preferences—whether it's playing, running, herding, chewing sticks, or simply exploring and sniffing to their heart's content.",
    backgroundUrl: "assets/benefits/galeria6.jpg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage6,
    light: true,
  },
  {
    id: "6",
    title: "Vote on Ideas",
    text: "You can suggest improvements or vote on ideas already proposed by other clients. Your feedback helps shape our transformation!",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Gizmo Knows",
    text: "Enjoy our precise, fast, and objective data assistant, Gizmo Bones! Gizmo never sleeps and is available 24/7 to answer all your questions.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "8",
    title: "ISO 9001 Project",
    text: "We are progressively adapting our processes to meet ISO 9001 requirements in preparation for future certification. This approach delivers benefits throughout the execution phase, not just upon completion.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "Our Innovative Drone Services",
    text: "Elevating safety with our certified drone feature, from lost pet searches to aerial wedding photography (no charge applied) - innovation meets compassion (charge applied).",
    backgroundUrl: "assets/benefits/galeria4.jpg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage1,
  },
  {
    id: "10",
    title: "Night Vision Thermal Binoculars",
    text: "We’re proud to offer a unique feature that sets us apart from other dog hiking businesses: state-of-the-art thermal binoculars with night vision capabilities.",
    backgroundUrl: "assets/benefits/galeria5.jpg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
  },
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/indiana.bones.vancouver/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/indiana.bones.vancouver",
  },
  {
    id: "2",
    title: "Youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/@-Team.Indy-",
  },
];

export const newClientsInfos = [
  {
    title: '"Book the "Meet and Greet"',
    info: '"Meet and Greet" is an 30-min long appointment where we answer all the question you might have. We also take the time to  get to know your pup  a little better. This appointment can be either in-person or virtual, and is optional! With the meet and greet skipped or executed, we start the next phase which is "The Trials".',
    
  },
  {
    title: '"Book the first trial"',
    info: "The trials also known as 'Trials of Destiny' are a three-part evaluation process to assess your pup's behaviour and determine if they are ready to join our pack or if we should wait for the right time. The pup has to go through all the three trials if there is still doubts about their behaviour at the end of the hike.",
  },
  {
    title: 'Two SMSs with links to access the real-time ETA for the pick up and the drop off will be sent th',
  },
  {
    title: 'ANOTHER SMS will be sent AFTER EACH PICK AND EACH DROP OFF.',
  },
  {
    title: 'Fit your pup with a harness. Additionally, you may choose to equip them with a tracker and wait.',
  },
  {
    title: 'During the trials, your pup will go through many scenarios to evaluate their behaviour, recall.',
  },
  {
    title: "Many measures are taken toe ensure the pup's safety:",
    list: [
      'Slow introductions to the other dogs already in the car',
      'Use of our own Satellite tracker.',
      'Use of bell if available.',
      'Use of harness to prevent them to slip off the colar.',
      "Always start with the pup on-leash, the drop the leash and finally off-leash. A few dogs end the hike off-leash but that's not the najority.",

    ]
  },
  {
    title: 'After the third trial, Indiana Bones and the client discuss the results and come to an agreement.',
  },
]

export const rates = [
  {
    title: 'Dog Hiking',
    picture: dogRate1,
    info: '',
    services: [
      {
        title: 'Early Risers',
        price: '$45',
        description: ' Pick up between 7:00 am and 8:30 am and drop off between 10:30 am and 1 pm. Total hiking time 1.5 h.'
      },
      {
        title: 'Afternoon Rovers',
        price: '$45',
        description: ' Pick up between 10:30 pm and 1 pm and drop off between 2:30 pm and 5 pm.   Total hiking time 1.5 h.'
      }
    ]
  },
  {
    title: 'Weekend walks',
    picture: dogRate2,
    info: '',
    services: [
      {
        title: 'Max of Two Pups',
        price: '$45 each',
        description: '1 hour'
      },
    ]
  },
  {
    title: 'Boarding and Dog-Sitting',
    picture: dogRate5,
    info: '',
    obs:'10 % Discount for Membership Holders ',
  
    services: [
      {
        title: 'Boarding',
        price: '$88/night',
        description: 'Our place. 24 hours'
      },
      {
        title: 'Dog sitting',
        price: '$88/night',
        description: 'Your place. 24 hours'
      },
    ]
  },
  {
    title: 'Camping Trip aka Raiders of the Lost Bark',
    picture: dogRate6,
    info: "",
    obs: '15 % Discount for Membership Holders ',
    services: [
      {
        title: 'Seasonal Service - Spring/Summer',
        price: '$299 for 3 days',
        description: ''
      },
    ]
  },
  {
    title: 'Special Days and Discounts',
    picture: dogRate7,
    info: 'Discounts are offered in many ways. Here are a few:',
    obs: 'All discounts, bundles, and freebies will feature a specific time frame for usage. ',
    services: [
      {
        title: 'Seasonal',
        description: ["Double Trouble (Valentine's Date) - Feb. 14th.", 
          "May the Furth Be With You (Star War's Day) - May 4th.",
          "Pet-a-Palooza - August",
          "Animal's Day Pack - Oct. 4th",
          "Indy Pumpkin Carving Contest - Oct. 31st",
        ],
      },
      {
        title: 'The Quick Whip',
        description: "The Quick Whip is an item from Indy's Closet that gives you the ability to quickly grab the daily flash deals. A 25% discount on the following day's unsold hikes."
      },
      // {
      //   title: 'The Satchel (TBD)',
      //   description: "The Satchel from Indy's Closet is a special item containing numerous prizes that can be obtained using your loyalty coins. "
      // },
      // {
      //   title: 'The Torch (TBD)',
      //   description: "The Torch is an item from Indy's Closet that once lit transports you to the heart of the forest for a thrilling treasure hunt."
      // },
    ]
  },
]

export const whatWeDoServices = [
  {
    name: 'Dog Hiking | Vancouver',
    link: '/dog-hiking-vancouver',
    img: indyDog1,
    description: 'Welcome to our dog hiking service! We offer a friendly and exciting dog hiking experience for your furry friends. '
  },
  {
    name: 'Drone Services',
    link: '/drone-services',
    img: indyDog2,
    description: "We're proud to offer cutting-edge drone technology to enhance our services and provide an extra layer of safety for our clients."
  },
  {
    name: 'Weekend Dog Walking',
    link: '/weekend-dog-walking',
    img: indyDog3,
    description: 'Our experienced and trained staff will take your dog on a one-hour adventure in a carefully chosen park near your place to ensure maximum safety for your dog during the Weekend Walk.'
  },
  {
    name: 'Boarding | Dog Sitting',
    link: '/boarding-and-sitting',
    img: indyDog4,
    description: 'Welcome to our exclusive dog-sitting service, tailored specifically for our valued existing clients.'
  },
  {
    name: 'Camping Trip',
    link: '/camping-trip',
    img: indyDog5,
    description: 'Embark on an unforgettable adventure with our unique dog camping trip service! Designed exclusively for your furry friends.'
  },
  {
    name: 'Search & Rescue Bundle',
    link: '/search-and-rescue',
    img: indyDog2,
    description: 'This innovative package combines advanced technology to give pet owners and search teams the best tools for finding dogs in various environments and conditions.'
  }
]


export const footerPages = [
  {
    page: 'About us',
    link: '/about'
  },
  {
    page: 'FAQ',
    link: '/faq'
  },
  {
    page: 'Contact us',
    link: '/contact'
  },
  // {
  //   page: 'Safety Policy',
  //   link: '/safetypolicy'
  // },
  // {
  //   page: 'Cancellation Policy',
  //   link: '/cancellationpolicy'
  // },
  // {
  //   page: 'Privacy Policy',
  //   link: '/privacypolicy'
  // }
]

export const safetyMeasures = [
  {
    title: 'First-Aid Training and Kits',
    policy: 'All dog hikers are equipped with first-aid kits and have received dog first-aid training.',
    records: 'Training certificates and first-aid kit checklists.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Vaccination and Health Checks',
    policy: 'Emphasis on up-to-date vaccinations and proper identification.',
    records: 'Vaccination records and health check logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Leash Policy',
    policy: 'Recommending leash use on marked trails for safety and ecological integrity.',
    records: 'Leash policy acknowledgment forms.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Bear Safety',
    policy: 'Providing guidelines for bear-proofing and noise-making to avoid surprising bears.',
    records: 'Bear safety training logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Health Hazard Awareness',
    policy: 'Advising against pets drinking from streams or ponds and recommending tick checks',
    records: 'Health hazard awareness training logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Real-Time ETA Sharing',
    policy: 'Monitoring arrival times of dog walkers using a real-time ETA-sharing feature.',
    records: 'System logs of ETA sharing.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Satellite Trackers',
    policy: 'Hikers have satellite trackers for dogs not behaving normally or during trials. One tracker per hiker.',
    records: 'Tracker usage logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Safety Equipment',
    policy: 'Hikers are provided with bear spray, car dividers, hooks to secure dogs, trunk nets, and middle seat covers with flaps to prevent dogs from jumping out of vehicles.',
    records: 'Equipment inventory and maintenance logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Portable Showers',
    policy: 'Used to refresh dogs during summer hikes.',
    records: 'Usage logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Individual Baskets',
    policy: 'Provided for territorial and anxious dogs in the car.',
    records: 'Inventory logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Emergency Procedures',
    policy: 'Clear written procedures for handling emergencies like runaways, epilepsy, serious injuries, car accidents, etc.',
    records: 'Emergency procedure logs and incident reports.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Bells',
    policy: 'Provided to hikers, likely for bear awareness and dog location.',
    records: 'Inventory logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Rigorous Dog Trials',
    policy: "All dogs undergo strict trials before being approved to ensure everyone's physical integrity.",
    records: 'Trial results and approval logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Hiker Background Checks',
    policy: "All hikers have references checked, undergo criminal record checks, and driver's record checks.",
    records: 'Background check records.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Drone for Missing Dogs',
    policy: "The company is equipped with a drone in case of a missing dog (never used so far).",
    records: 'Drone usage logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Severe Weather Adaptations',
    policy: "Hike durations are reduced during severe weather conditions.",
    records: 'Weather adaptation logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Trail Adjustments',
    policy: "Planned trails may be changed based on daily safety assessments.",
    records: 'Trail adjustment logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'Group Size Limitation',
    policy: "West Vancouver bylaws permit only 6 dogs per dog hiker.",
    records: 'Group size logs.',
    reviewFrequency: 'Annually.'
  },
  {
    title: 'GPS Trackers',
    policy: "Used in the forest to monitor dogs' locations.",
    records: ' GPS tracking logs.',
    reviewFrequency: 'Annually.'
  },
  
]

export const safetyStaffOnly = [
  {
    mainTitle: 'ISO 9001:2015 Compliance Elements Context of the Organization',
    itens: [
      {
        title: 'Scope of the QMS',
        text: 'This policy applies to all safety and operational measures of Indiana Bones Dog Adventures.'
      },
      {
        title: 'Interested Parties',
        text: 'Clients, staff, and regulatory bodies.'
      },
    ],
  },
  {
    mainTitle: 'Leadership',
    itens: [
      {
        title: 'Quality Policy',
        text: 'Indiana Bones Dog Adventures is committed to providing high-quality dog hiking services that meet customer expectations and regulatory requirements.'
      },
      {
        title: 'Roles and Responsibilities',
        text: 'The management team is responsible for ensuring compliance with this policy and addressing any issues that arise.'
      },
    ]
  },
  {
    mainTitle: 'Planning',
    itens: [
      {
        title: 'Quality Objectives',
        text: 'To maintain a high level of customer satisfaction and ensure the safety and well-being of all dogs in our care.'
      },
      {
        title: 'Risk Management',
        text: 'Regularly assess and mitigate risks related to safety and operational measures.'
      },
    ]
  },
  {
    mainTitle: 'Support',
    itens: [
      {
        title: 'Resources',
        text: 'Ensure adequate staffing and resources to meet service commitments.'
      },
      {
        title: 'Competence and Training',
        text: 'Staff will receive ongoing training to handle safety and operational measures efficiently.'
      },
      {
        title: 'Communication',
        text: 'Clear communication channels will be maintained with clients regarding any changes or safety measures.'
      }
    ]
  },
  {
    mainTitle: 'Operation',
    itens: [
      {
        title: 'Operational Planning and Control',
        text: 'All hikes will be planned and controlled to meet customer requirements.'
      },
      {
        title: 'Customer Communication',
        text: 'Clients will be informed promptly of any changes or safety measures.'
      },
    ]
  },
  {
    mainTitle: 'Performance Evaluation',
    itens: [
      {
        title: 'Monitoring and Measurement',
        text: 'Regularly monitor and measure customer satisfaction and service performance.'
      },
      {
        title: 'Internal Audits',
        text: 'Conduct internal audits to ensure compliance with this policy.'
      },
      {
        title: 'Management Review',
        text: 'The policy will be reviewed annually to ensure its effectiveness and relevance.'
      },
    ]
  },
  {
    mainTitle: 'Improvement',
    itens: [
      {
        title: 'Nonconformity and Corrective Action',
        text: 'Address any nonconformities promptly and take corrective actions to prevent recurrence.'
      },
      {
        title: 'Continual Improvement',
        text: 'Continuously seek ways to improve safety and operational measures.'
      },
    ]
  },
  {
    mainTitle: 'Records',
    itens: [
      {
        title: 'Documented Information',
        text: 'Maintain records of all safety measures, training, and client communications.'
      },
      {
        title: 'Review Frequency',
        text: 'This policy will be reviewed annually and updated as necessary to ensure ongoing compliance with ISO 9001:2015 requirements.'
      },
    ]
  }
]

export const cancellationPolicyMembership = [
  {
    type: 'Definitions',
    itens: [
      {
        title:'Membership Agreement Duration',
        info: '3 months (84 days)',
      },
      {
        title:'Membership Payment Schedule',
        info: 'Every 4 weeks (28 days), with 3 installments per membership period',
      },

    ]
  },
  {
    type: 'Payment',
    itens: [
      {
        info: 'Membership clients commit to 3 months, with automatic renewal unless cancelled.',
      },
      {
        info: 'Every 4 weeks (28 days), with 3 installments per membership period',
      },
      {
        info: 'Membership rates may change annually with advanced notice.',
      },
      {
        info: 'The membership period begins on the Saturday before the first hike.',
      },

    ]
  },
  {
    type: 'Discontinuation of the Service',
    itens: [
      {
        info: 'Agreements are automatically renewed unless written notice is provided.',
      },
      {
        info: 'Early termination incurs a 25% fee on remaining unpaid installments.',
      },
      {
        info: 'Paid installments are non-refundable, except for illness or injury with a veterinarian’s note',
      },
    ]
  },
  {
    type: 'Cancellations and Time Away',
    itens: [
      {
        info: 'Hikes may be cancelled or rescheduled by Indiana Bones due to safety or staff capacity issues, with full refunds provided.',
      },
      {
        info: 'Severe weather cancellations offer alternative options.',
      },
      {
        info: 'Clients can reschedule with 48-hour notice; otherwise, a 100% charge applies.',
      },
      {
        info: 'Monthly rescheduling limits based on membership level:',
        info2: [
          '1-2 hikes/week: 1 reschedule/month', '3-5 hikes/week: 2 reschedules/month'
        ]
      },
      {
        info: 'Cancelled hikes cannot be carried over but can be replaced with coupons valid within the 3 months.',
      },
      {
        info: 'For inquiries, contact logistics@indianabones.ca.',
      },
    ]
  },
  {
    type: 'Time Away',
    itens: [
      {
        info: 'Clients may suspend membership for up to 3 weeks per year with adjusted payments.',
      },
      {
        info: 'Additional time off incurs a 50% fee per missed hike to maintain the reserved spot.',
      },
      {
        info: 'Cancelling membership requires a 6-month wait before rejoining.',
      },
    ]
  },

]

export const cancellationPolicyNonMembers = [
  {
    type: 'Payment',
    itens: [
      {
        info: 'Bookings must be made online with full payment at the time of booking.',
      },
      {
        info: 'Appointments can be scheduled up to two months in advance.',
      },

    ]
  },
  {
    type: 'Discontinuation',
    itens: [
      {
        info: 'Clients discontinuing the service receive a 75% refund for the remaining hikes.',
      },
    ]
  },
  {
    type: 'Cancellation',
    itens: [
      {
        info: 'Indiana Bones may cancel hikes for safety or staff reasons, with full refunds provided.',
      },
      {
        info: 'Severe weather cancellations offer alternative options.',
      },
      {
        info: 'Clients must provide 48-hour notice to reschedule; otherwise, a 100% charge applies.',
      },
      {
        info: 'One hike per month can be rescheduled; further cancellations are non-refundable unless for illness or injury with a veterinarian’s note.',
      },
      {
        info: 'No-shows are non-refundable.',
      },
      {
        info: 'For inquiries, contact logistics@indianabones.ca.',
      },
      
    ]
  },
]

export const privacyPolicy = [
  {
    title: 'Consent',
    info: 'By using our website, you consent to our Privacy Policy and agree to its terms.'
  },
  {
    title: 'Information We Collect',
    info: 'When you are asked to provide personal information, the reasons will be made clear at the point of collection. Additional information may be collected if you contact us directly, such as your name, email address, phone number, and the content of your message. When you register for an account, we may request contact information, including name, company name, address, email address, and telephone number.'
  },
  {
    title: 'How We Use the Information',
    info: 'The information collected is used in various ways, including:',
    infoList: [
      'To provide, operate, and maintain our website.', 'To improve, personalize, and expand our website.', 'To understand and analyze how you use our website.', 'To develop new products, services, features, and functionality.', 'To communicate with you for customer service, updates, marketing, and promotional purposes.', 'To send you emails.', 'To find and prevent fraud.'
    ]
  },
  {
    title: 'Log Files',
    info: 'Indiana Bones Dog Adventures uses log files to log visitors when they visit websites. This includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and the number of clicks. This information is not linked to any personally identifiable information and is used to analyze trends, administer the site, track user movement, and gather demographic information.',
  },
  {
    title: 'Cookies',
    info: 'Indiana Bones Dog Adventures uses cookies to store information about visitors preferences and the pages they accessed or visited. This information is used to optimize the user experience by customizing web page content based on visitors browser types and other information.',
  },
  {
    title: 'Third Party Privacy Policies',
    info: "Indiana Bones Dog Adventures's Privacy Policy does not apply to other advertisers or websites. We advise consulting the respective Privacy Policies of these third-party ad servers for more detailed information, including their practices and instructions on how to opt out of certain options. You can choose to disable cookies through your browser options.",
  },
  {
    title: 'Data Protection Rights',
    info: 'We aim to ensure you are fully aware of your data protection rights. Every user is entitled to the following:',
    info2: 'If you make a request, we have one month to respond. If you wish to exercise any of these rights, please contact us.',
    infoList: [
      'The right to access: Request copies of your data (a small fee may apply).', 'The right to rectification: Request correction of any inaccurate information.', 'The right to erasure: Request the deletion of your data under certain conditions.', 'The right to restrict processing: Request restriction of processing your data under certain conditions.', 'The right to object to processing: Object to our processing of your data under certain conditions.', 'The right to data portability: Request transfer of your data to another organization or directly to you under certain conditions.'
    ]
  },
  {
    title: "Children's Information",
    info: "Protecting children’s privacy online is important. We encourage parents and guardians to monitor and guide their children's online activities. Indiana Bones Dog Adventures does not knowingly collect any personally identifiable information from children under 13. If you believe your child has provided such information on our website, please contact us immediately, and we will do our best to promptly remove it from our records.",
  },

]

export const quickWhip = [
  {
    tutorial: "Introducing Indy's Quick Whip - your daily chance to snag the remaining dog hiking spots for the next day at a 25% discount! This swift and exciting 30-minute deal kicks off at 4 pm from Sunday to Thursday, offering you the chance to secure those coveted spots before they vanish. Be quick as a whip, grab that treasure, and leave fast because the clock is ticking!",
    period: 'Sunday to Thursday',
    time: '4 P.M. to 4:30 PM',
  }
]

export const events = [
  {
    title: 'Riley Rips',
    tag: 'Event'
  }
]