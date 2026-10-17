/**
 * Reports on our initiatives, shown as boxes at the bottom of the Our Initiatives page; each
 * opens on its own page at /initiatives/<slug>. Text is word for word from the reports doc
 * (headings in title case). **bold** and *italic* in a paragraph are shown as such.
 * The photos are stand-ins from the gallery until event photos arrive.
 */
export type Report = {
  slug: string;
  title: string;
  image: { src: string; alt: string };
  paragraphs: string[];
};

export const reports: Report[] = [
  {
    slug: "nsids",
    title: "NSIDS: Two Days. One Ecosystem. A Movement in the Making.",
    image: { src: "/images/nsids-panel.webp", alt: "A panel discussion on stage at NSIDS, India International Centre, beside the summit banner" },
    paragraphs: [
      "In November 2025, Project Kitab hosted the National Social Impact Development Summit (NSIDS), a flagship initiative marking the organisation’s second anniversary.",
      "Designed to bridge the gap between the intention to create social change and the practical knowledge required to sustain it, NSIDS brought together aspiring student leaders, established social-impact practitioners, and community members to explore the realities of the NGO/NPO ecosystem.",
      "Spanning two days, the summit combined structured learning with community engagement, involving students from 20+ schools across Delhi NCR. The first day, hosted at the India International Centre, featured Chief Guest Mr. Rajiv Shukla, alongside Guests of Honour Mr. Satish Jacob, Mr. Bhavan Bhushan, and other distinguished attendees.",
      "The summit featured speakers Ananya Grover, Anusha Attree, and Vesna Jacob, alongside panellists Dr. Naga Swetha Pasupuleti, Mr. Anuraag Jacob, Dr. Tarandeep Kaur, and Mr. Surojit Chatterjee. Through discussions and practical insights, they unpacked the operational realities of building social-impact organisations, addressing the challenges of resource mobilisation, organisational sustainability, and translating ideas into measurable action. These exchanges gave participating students greater exposure to the institutional frameworks and strategic considerations underpinning effective social-impact work, helping them approach their own initiatives with a more informed and structured perspective.",
      "The second day extended these conversations into the community through a carnival hosted at Flourmates Bakery. Featuring 15+ NGOs, multiple performers, and over 150 attendees, the carnival provided participating organisations with a platform to showcase their causes and connect with a wider audience. By bringing together civil-society organisations, performers, and community members in an accessible setting, the event encouraged cross-organisational engagement and created opportunities for attendees to discover causes beyond their immediate circles. It also demonstrated how public participation and community-led platforms can complement formal discussions in advancing social awareness.",
      "Together, the two days established a connection between learning about social impact and experiencing it in practice. The summit exposed young participants to established practitioners and diverse approaches to social change, while the carnival brought multiple organisations and community members into a shared space for engagement. Its reach across schools and NGOs positioned NSIDS as a platform for cross-sector dialogue, youth awareness, and community participation, extending Project Kitab’s work beyond educational access to the broader goal of cultivating informed and socially responsible changemakers.",
      "Ultimately, NSIDS was more than an anniversary event. It reflected Project Kitab’s belief that empowering young people requires not only encouraging them to care about social issues, but also equipping them to understand the systems, collaborations, and sustained effort necessary to address them. By bringing together knowledge, institutional experience, and grassroots engagement, NSIDS advanced this vision and laid a foundation for continued youth participation in the social-impact ecosystem.",
    ],
  },
  {
    slug: "har-haath-mein-kitab",
    title: "Har Haath Mein Kitab: Turning Collective Action into Educational Access",
    image: { src: "/gallery/full/cf839473-8994-45ac-8897-7753e4a45fef.webp", alt: "Students cheering and holding up books in a classroom" },
    paragraphs: [
      "Har Haath Mein Kitab was a month-long mega-collaboration book donation drive organised by Project Kitab, bringing together 25+ NGOs and NPOs across Delhi NCR to make books and learning resources more accessible to underserved communities.",
      "Through collaborative donation drives conducted across multiple areas of the region, we mobilised a network of organisations around a shared objective: reducing barriers to access to reading materials and supporting children's learning beyond the classroom.",
      "Over the course of the initiative, we donated 1,000+ books across communities in Delhi NCR. These books contributed to the availability of reading and educational resources for children who may face barriers to accessing them. By extending the drive across multiple areas, we worked to take learning materials beyond individual collection points and into the communities the initiative aimed to serve.",
      "A defining aspect of Har Haath Mein Kitab was its collaborative model. By bringing together more than 25 NGOs and NPOs, the initiative connected organisations with different networks and outreach capacities, allowing them to contribute to a shared educational objective. This approach demonstrated how coordinated book donation efforts can extend the reach of individual organisations and create a broader community response to educational resource gaps.",
      "The drive's impact lay in both its direct contribution of 1,000+ books and the network of organisations mobilised to support educational access. Har Haath Mein Kitab demonstrated how sustained, collaborative action can translate a shared commitment to education into tangible resources for underserved communities across Delhi NCR.",
    ],
  },
  {
    slug: "kitab-cup-season-1",
    title: "Kitab Cup S1: Where It All Began",
    image: { src: "/images/kitab-cup-s1-kick.webp", alt: "A player follows through on a kick as a teammate watches the ball fly, with spectators behind the net" },
    paragraphs: [
      "Kitab Cup Season 1 marked a significant step in Project Kitab’s efforts to combine sport with community-driven impact. Bringing together young athletes, supporters, sponsors, and social impact organisations, the tournament created a platform where football could foster collaboration, build connections, and contribute to a larger purpose.",
      "The inaugural season, hosted at The Millenium School, featured seven participating teams: Dingle Dynasty, B.N.P.S Sports Academy, Sporting Wolf FC, NIFC Academy, MRISN FC, Systum Sixers, and The Millennium School. The tournament brought together approximately 300 people, creating an atmosphere of competition, enthusiasm, and collective participation.",
      "Beyond the pitch, Kitab Cup Season 1 established a network of collaboration with 15+ NGOs and nonprofit organisations, extending the tournament’s reach beyond the sporting community. Their involvement reflected the importance of bringing organisations together around shared social objectives and creating opportunities for collective action.",
      "The tournament was supported by sponsors like Decathlon, XTCY, JunglyDelights, SilverSky Band, and InterviewBuddy. Their support helped bring the initiative to life and demonstrated how partnerships between businesses, community organisations, and youth-led initiatives can contribute to meaningful events.",
      "As the first edition of Kitab Cup, Season 1 laid the groundwork for a larger initiative built around sport, participation, and social impact. With approximately 300 people involved, eight teams entering the tournament, and more than 15 NGOs and nonprofit organisations engaged, the inaugural season established a foundation for future editions to build upon.",
      "Kitab Cup Season 1 was more than a football tournament. It was the beginning of an effort to use the power of sport to bring people together, strengthen community networks, and create opportunities for impact beyond the game.",
    ],
  },
  {
    slug: "kitab-cup-season-2",
    title: "The Kitab Cup S2: A Bigger Crowd, a Bigger Cause",
    image: { src: "/images/kitab-cup-s2-trophy.webp", alt: "Players lifting the Kitab Cup trophy together on the field at sunset, with event stalls behind them" },
    paragraphs: [
      "700+ attendees. 10 teams. 15+ NGOs. 9 stalls. Kitab Cup Season 2 brought together a growing community around football, demonstrating how a sporting event can become a meeting point for organisations, initiatives, and people with different interests and shared ambitions.",
      "With attendance more than doubling from Season 1’s approximately 300 people, the second edition marked a significant milestone for Project Kitab. Ten teams competed in the tournament: Goal Diggers FC, Physics Failures, Tehelka FC, Dholakpur FC, The Dementorz, Bubble, Indusliga FA, Panauti FC, Feminists United, and Systum Sixers.",
      "Beyond the matches, the event brought together 15+ NGOs and nonprofit organisations and nine stalls, creating additional opportunities for attendees to discover initiatives and engage with organisations working across different areas. This wider participation gave the Kitab Cup a dimension that extended beyond the competition itself.",
      "The scale of the event was matched by the range of partners involved. Asahi India Glass Ltd. joined as principal sponsor, with ABP News as media partner and V&S Publishers as publishing partner. Piyaau supported the event as hydration partner, while Medanta Medicity served as health and safety partner.",
      "The tournament's community and outreach efforts were supported by Warriors Without Cause and Humans of Volunteering as community partners, alongside BloodConnect and Pinkishe Foundation as camp partners. Each partnership contributed to the broader network that made the event possible.",
      "The defining milestone of Season 2 was not simply the number of teams on the field, but the number of people and organisations brought together around it. With over 700 attendees, the tournament demonstrated its capacity to draw a substantial audience while creating a platform for community engagement.",
      "Season 2 moved the Kitab Cup into a new phase of scale. The next step is to build on that reach by measuring the outcomes it generates, ensuring that the people and partnerships brought together through football can contribute to lasting impact beyond the event itself.",
    ],
  },
  {
    slug: "summer-program",
    title: "Summer Program",
    image: { src: "/gallery/full/5fdfe642-8db8-438f-adce-8b9b367a0605.webp", alt: "A volunteer helping students in uniform with their work" },
    paragraphs: [
      "At Project Kitab, we believe learning goes beyond books and classrooms. It is also about helping children explore their interests, express themselves, build confidence, and understand the world around them.",
      "Through our Summer Program, we organised activities in spoken English, sports, theatre, dance, and creative learning, along with sessions on important life skills. We also held discussions on consent, sexual literacy, financial literacy, peer pressure, moral values, and ethics to help children better understand themselves and the situations they may face in everyday life.",
      "The program reached **200+ children across two locations** and brought together **10+ NGOs** working towards the same cause. Alongside these activities, our *Har Haath Mein Kitab* initiative organised book donation drives to make books more accessible to children and encourage the habit of reading.",
      "From learning a new skill to having conversations that matter, our aim was to make learning more meaningful, engaging, and accessible to every child.",
    ],
  },
];
