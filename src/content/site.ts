/**
 * All Project Kitab website content lives here.
 *
 * Copy comes from the "pk website content" Google Doc; section headings and
 * layout come from the approved mockups. To change any text, link or photo on
 * the site, edit this file.
 *
 * Photos: set `image` to a path under /public (e.g. "/images/educational-access.jpg").
 * While `image` is null, the site shows a branded placeholder tile instead.
 */

export type IconName =
  | "book"
  | "rupee"
  | "heart"
  | "scales"
  | "football"
  | "sparkle"
  | "people"
  | "volunteers"
  | "coins"
  | "school"
  | "pencil"
  | "stage"
  | "megaphone"
  | "compass"
  | "home"
  | "pen"
  | "palette"
  | "whistle"
  | "lightbulb"
  | "handshake"
  | "calendar";

export type Photo = { src: string; alt: string } | null;

export const site = {
  name: "Project Kitab",
  tagline: "Har Haath Mein Kitab",
  description:
    "Project Kitab is a youth-led non-profit working towards SDG 4 – Quality Education for All. We take education beyond the curriculum, into conversations, onto football fields and stages, and into communities across Delhi NCR, Mumbai and Bangalore.",
  footerLine: "A more informed. A kinder. A brighter tomorrow.",
};

/** External links. `null` = not provided yet; the site falls back gracefully. */
export const links = {
  instagram: "https://www.instagram.com/project.kitab/",
  linkedin: null as string | null,
  youtube: null as string | null,
  /** Volunteer sign-up form (e.g. a Google Form). Until set, the button opens Instagram DMs. */
  volunteerForm: null as string | null,
  /** Partnership enquiry form. Until set, the button opens Instagram DMs. */
  partnerForm: null as string | null,
};

/** Contact details. Leave a field null to hide it. */
export const contact = {
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
};

/** How to donate. Until at least one is set, the Donate page shows a "details coming soon" note. */
export const donation = {
  paymentLink: null as string | null,
  upiId: null as string | null,
  upiQr: null as string | null,
  bank: null as null | { accountName: string; accountNumber: string; ifsc: string; bankName: string },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
];

export const hero = {
  titleLines: ["Har Haath", "Mein Kitab"],
  subtitle: "Education beyond the classroom.",
  body: [
    "Learning is not limited to textbooks or school hours. We create opportunities for children to explore, participate, make mistakes and discover what they enjoy.",
    "All of it comes back to one thing: making education more accessible.",
  ],
  note: ["Same", "Books", "Brighter", "Futures"],
  image: {
    src: "/images/hero-kids.png",
    alt: "A group of smiling school students in blue uniforms cheering and making peace signs in their classroom",
  },
};

/**
 * `value` is what's shown once the counter finishes; `count` is the number it counts up to
 * (with `prefix` in front, formatted with Indian commas while counting).
 */
export const stats: { value: string; count: number; prefix?: string; label: string; icon: IconName }[] = [
  { value: "45,000+", count: 45000, label: "People our work has reached", icon: "people" },
  { value: "1,600+", count: 1600, label: "Young people who chose to show up", icon: "volunteers" },
  { value: "50+", count: 50, label: "Schools we've worked across", icon: "school" },
  { value: "15,000+", count: 15000, label: "Books put into children's hands", icon: "book" },
  { value: "5,000+", count: 5000, label: "Stationery items shared", icon: "pencil" },
  { value: "₹15L+", count: 1500000, prefix: "₹", label: "Raised towards our initiatives", icon: "coins" },
];

export const reach = {
  home: "Rooted in Delhi NCR",
  expanding: "Now running drives in Mumbai & Bangalore",
};

/** The doc's "Landing Page" copy. */
export const manifesto = {
  lead: "Education shouldn't depend on where you're born. And it shouldn't end at a textbook.",
  paragraphs: [
    "Every child has questions worth answering, talents worth noticing and a future that belongs to them. Project Kitab exists to make sure they get the chance to reach it.",
    "Yes, we bring books and classrooms closer. We also teach children how money works, what consent means, why fairness matters, and how to lose a football match and still walk off the field with their head held high. We take education beyond the curriculum, into conversations, onto football fields and stages, and into communities across Delhi NCR, Mumbai and Bangalore.",
  ],
  quote: ["A textbook can teach a child to pass.", "We want to help them live."],
  signoff: ["Har Haath Mein Kitab.", "And every hand can help turn a page."],
};

export const whatWeDo = {
  eyebrow: "What We Do",
  title: ["More Than", "Just Books"],
  intro:
    "We don't just put books in children's hands. We put possibilities there. Education can begin with a book, but it shouldn't end there.",
  note: ["Education", "Builds Brighter", "Tomorrows"],
  words: ["Knowledge", "People", "Opportunities", "A Brighter", "Tomorrow"],
  /** Photo beside "More Than Just Books" on the home page (portrait, 1080×1350). */
  image: {
    src: "/images/what-we-do-children.png",
    alt: "A crowd of children listening during a session, one boy raising his hand",
    width: 1080,
    height: 1350,
  },
  /** Full copy for the What We Do page. */
  page: {
    title: "We don't just put books in children's hands. We put possibilities there.",
    paragraphs: [
      "Education can begin with a book, but it shouldn't end there. Our work covers academics and everything a report card never measures: financial literacy, sexual health and consent, ethics and moral values, equity and equality, soft skills, sport and creativity.",
      "Sometimes that means handing a child a book, a notebook or menstrual hygiene products, the basics no one should have to learn without. Sometimes it means teaching something their classroom never had room for. And sometimes it means giving them a football, a stage, a microphone, a team, or simply a space where they feel heard.",
    ],
    areas: [
      { title: "Academics", body: "Books, notebooks and learning support that bring the classroom closer.", icon: "book" },
      { title: "Financial Literacy", body: "How money works, and how to make decisions with it.", icon: "rupee" },
      { title: "Sexual Health & Consent", body: "What consent means, and knowing it's okay to say no.", icon: "heart" },
      { title: "Ethics & Moral Values", body: "Why fairness matters, and how to stand up for it.", icon: "compass" },
      { title: "Equity & Equality", body: "Recognising inequality, and refusing to accept it.", icon: "scales" },
      { title: "Soft Skills", body: "Confidence, communication and teamwork for life beyond school.", icon: "megaphone" },
      { title: "Sport & Creativity", body: "A football, a stage, a microphone, a team.", icon: "football" },
      { title: "The Basics", body: "Menstrual hygiene products and stationery no child should go without.", icon: "sparkle" },
    ] as { title: string; body: string; icon: IconName }[],
    /** Beside the page title at the top of the What We Do page (gallery photo 18). */
    heroImage: { src: "/gallery/full/18.webp", alt: "Two children painting together, colourful light across their faces" },
    maidaan: {
      eyebrow: "Gyaan Through Maidaan",
      title: "Learning, on the football field.",
      body: "Through Gyaan Through Maidaan, we take learning onto the football field, where teamwork, discipline and resilience are learnt with every pass.",
      /** From IMG_1643.jpeg; the camera's date stamp was cropped off the bottom. */
      image: { src: "/images/gyaan-through-maidaan.jpg", alt: "Young players on a football pitch as one of them dribbles the ball forward" } as Photo,
    },
    reach:
      "Rooted in Delhi NCR and now running drives in Mumbai and Bangalore, we work with communities and partner organisations to bring all of this to children who are too often left out of conversations about opportunity.",
    stepsIntro: "Our idea of education is simple.",
    steps: [
      "Give a child knowledge.",
      "Give them skills.",
      "Give them experiences.",
      "Give them a voice.",
      "Then give them room to discover who they can become.",
    ],
  },
};

export const initiatives = {
  eyebrow: "Our Initiatives",
  title: "Ideas in Action",
  intro:
    "Ongoing initiatives, year-round impact. From learning spaces to community programs, we work on multiple fronts to make education more holistic and accessible.",
  note: ["Small", "Steps", "Big Change"],
  /** Beside the page title at the top of the Our Initiatives page (gallery photo 11). */
  heroImage: { src: "/gallery/full/11.webp", alt: "Young children in bright winter caps smiling and making peace signs" },
  items: [
    {
      title: "Gyaan Through Maidaan",
      tagline: "Learning on the football field.",
      body: "We take learning onto the football field, where teamwork, discipline and resilience are learnt with every pass.",
      icon: "football",
      image: { src: "/images/gyaan-through-maidaan.jpg", alt: "Young players on a football pitch as one of them dribbles the ball forward" },
      focus: "object-[60%_50%]",
    },
    {
      title: "Kitab Cup",
      tagline: "Conversations. Competitions. Change.",
      body: "A stage, a microphone and a team: competitions and conversations that give children room to be heard.",
      icon: "stage",
      image: { src: "/gallery/full/10.webp", alt: "Volunteers at the Project Kitab stall behind the Har Haath Mein Kitab banner" },
      focus: "object-center",
    },
    {
      title: "Resource & Stationery Drives",
      tagline: "The basics, in every hand.",
      body: "Books, notebooks, stationery and menstrual hygiene products: the basics no one should have to learn without.",
      icon: "pencil",
      image: { src: "/gallery/full/cf839473-8994-45ac-8897-7753e4a45fef.webp", alt: "Students cheering and holding up books in a classroom" },
      focus: "object-center",
    },
    {
      title: "Workshops & Awareness Programs",
      tagline: "What a report card never measures.",
      body: "Sessions on financial literacy, sexual health and consent, ethics, equity and soft skills.",
      icon: "megaphone",
      image: { src: "/gallery/full/img-2724.webp", alt: "A volunteer teaching a class of students at their desks" },
      focus: "object-[95%_50%]",
    },
    {
      title: "Educational Learning Spaces",
      tagline: "Safe spaces to learn and grow.",
      body: "Bringing books and classrooms closer, with safe, open and empowering spaces to learn, unlearn and grow.",
      icon: "home",
      image: { src: "/gallery/full/17.webp", alt: "Children drawing and writing on mats, seen from above" },
      focus: "object-center",
    },
    {
      title: "Mentorship & Guidance",
      tagline: "We listen, and we show up.",
      body: "Young volunteers who listen first, then show up with what each child actually needs.",
      icon: "compass",
      image: { src: "/gallery/full/5fdfe642-8db8-438f-adce-8b9b367a0605.webp", alt: "A volunteer helping students in uniform with their work" },
      focus: "object-center",
    },
  ] as {
    title: string;
    tagline: string;
    body: string;
    icon: IconName;
    image: Photo;
    /** which part of the photo stays in view when it is cropped to the card */
    focus?: string;
  }[],
};

export const whoWeAre = {
  eyebrow: "Who We Are",
  words: ["Youth-Led", "Inclusive", "Community-Driven", "Impact-Focused", "Always Learning"],
  /** Beside the page title at the top of the Who We Are page (gallery photo 24). */
  heroImage: { src: "/gallery/full/24.webp", alt: "Two young volunteers laughing together while sitting with children" },
  /** Next to "We don't see children as beneficiaries" (gallery photo 28). */
  image: { src: "/gallery/full/28.webp", alt: "Project Kitab volunteers and children gathered in front of a hand-painted banner" } as Photo,
  page: {
    title: "We're young, and that's the point.",
    paragraphs: [
      "Project Kitab is a youth-led non-profit started by students with one question: what if every child had the kind of education that lets them do more than pass an exam?",
      "What began in Delhi NCR is now a community of young changemakers across Delhi, Mumbai and Bangalore. We are school students, college students, first-time volunteers and seasoned organisers who believe change doesn't have to wait until we're older.",
    ],
    beliefTitle: "We don't see children as beneficiaries.",
    belief: [
      "We see them as people with curiosity, opinions, ambitions and talent. That's why we don't arrive with a single solution.",
      "For one child, the gap is not having a single book at home. For another, it's never having been told they're allowed to say no. For another, it's a gift for dance or football that no one has made room for. We listen, and we show up with what's needed.",
    ],
    needs:
      "Children need more than academic knowledge to find their way in the world. They need to know how to make decisions, manage money, understand consent, recognise inequality and stand up for themselves. They need to know it's okay to fall short and try again. And sometimes, they just need to have fun.",
    closing: ["We don't set academics against life skills, or classrooms against playgrounds.", "All of it is education."],
  },
};

export const getInvolved = {
  eyebrow: "Get Involved",
  words: ["Different", "People", "Same Mission"],
  page: {
    title: "There's more than one way to be part of Project Kitab.",
    paragraphs: [
      "You can teach, organise, coach, write, design, mentor, volunteer at our drives and events, or bring your own ideas and skills to the table. You can work with us on the ground, help us build something behind the scenes, or take part in the initiatives we run with children and communities.",
      "Whether you're in Delhi, Mumbai, Bengaluru, or somewhere else, you don't have to be in one particular place or have one particular skill to contribute. If you care about what we're trying to build, there's a way for you to be involved.",
      "From joining the team and volunteering at sessions to collaborating on workshops, events, campaigns and partnerships, we're always looking for people who want to contribute in ways that work for them.",
    ],
    ways: [
      { title: "Teach", icon: "book" },
      { title: "Organise", icon: "calendar" },
      { title: "Coach", icon: "whistle" },
      { title: "Write", icon: "pen" },
      { title: "Design", icon: "palette" },
      { title: "Mentor", icon: "compass" },
      { title: "Volunteer at drives", icon: "volunteers" },
      { title: "Bring your ideas", icon: "lightbulb" },
    ] as { title: string; icon: IconName }[],
    triad: [
      { q: "Have some time?", a: "Give it." },
      { q: "Have a skill?", a: "Share it." },
      { q: "Have an idea?", a: "Bring it." },
    ],
    closing: "Bring your time, your skills and your ideas. We'll build from there.",
  },
};

export const gallery = {
  eyebrow: "Gallery",
  intro: "Some things are better seen than explained.",
  body: "Muddy football boots, a first performance, a borrowed book, a team huddle, a loud laugh. These are the moments behind the mission.",
};

export const blog = {
  eyebrow: "From Our Blog",
  title: "Ideas, Stories, Perspectives",
  note: "Gyaan se Bantan.",
  posts: [
    { title: "Why Life Skills Matter as Much as Academics", date: null, image: null },
    { title: "Mental Health Conversations in Our Classrooms", date: null, image: null },
    { title: "Building a More Inclusive Tomorrow", date: null, image: null },
  ] as { title: string; date: string | null; image: Photo }[],
};

export const donate = {
  eyebrow: "Donate",
  title: "Your contribution doesn't disappear into a system.",
  impact: [
    "It becomes a book a child reads twice, or a notebook filled to the last page.",
    "It becomes a sanitary pad that means a girl doesn't have to miss school, or a football that brings a whole neighbourhood onto the ground.",
    "It can become a summer memory, or a conversation that changes how a child sees themselves.",
  ],
  closing: "If you believe education should be bigger than a textbook, help us make it bigger.",
  signoff: "Every rupee opens a door.",
};
