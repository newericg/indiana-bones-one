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
  indianabones_logo2
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
    url: "#pricing",
  },
  {
    id: "2",
    title: "New Pup's Enrollment",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Vote on Ideas",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New client",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Login",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [indianabones_logo2, indianabones_logo2, indianabones_logo2, indianabones_logo2];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
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
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
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
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
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
