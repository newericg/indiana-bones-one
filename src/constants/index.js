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
  dogCollab

} from "../../src/assets";


export const navigation = [
  {
    id: "0",
    title: "What we do",
    url: "/"
    // url: "/whatwedo",
  },
  {
    id: "1",
    title: "Rates and Benefits",
    url: "/",
  },
  {
    id: "2",
    title: "New Pup's Enrollment",
    url: "/newclients",
  },
  {
    id: "3",
    title: "Vote on Ideas",
    url: "/",
  },
  {
    id: "4",
    title: "New client",
    url: "/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Login",
    url: "/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyServices = [
  {
    text: "Dog Hiking",
    image: dogHiking
  },
  // {
  //   text: "Henry Bones Sr."
  // },
  // {
  //   text: "Weekend Dog Walking"
  // },
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
    title: "Pet-a-Palooza",
    text: "Excavation site at the Pet-a-Palooza!",
    date: "August 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Camping Trip",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies semper ante, vulputate vehicula enim pretium id. Phasellus facilisis nisi ut laoreet maximus. Aenean sed lacus viverra, posuere neque eu, luctus justo. Suspendisse in felis nibh. Donec ex arcu, feugiat eget finibus sed, faucibus vel massa. Proin dapibus nibh ut accumsan iac",
    date: "Dez 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
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
    title: "Henry Bones Sr.",
    text: "Hikes for our elder furry babies.",
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
    title: "ETA sharing",
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
    title: "ISO9001 Project",
    text: "We are progressively adapting our processes to meet ISO 9001 requirements in preparation for future certification. This approach delivers benefits throughout the execution phase, not just upon completion.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
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