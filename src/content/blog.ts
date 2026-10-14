/**
 * Blog posts, word for word as the writers sent them. Each gets its own page at /blog/<slug>.
 * To add a post, copy one of these blocks: `sections` are groups of paragraphs (a new group
 * wherever the writer left a blank line), and `verse` is optional lines of poetry shown first.
 * The cover photos come from the gallery and can be swapped for any photo under /public.
 */
export type BlogPost = {
  slug: string;
  title: string;
  image: { src: string; alt: string };
  verse?: string[];
  sections: string[][];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "when-language-becomes-a-barrier-to-learning",
    title: "When language becomes a barrier to learning",
    image: { src: "/gallery/full/img-9509.webp", alt: "Students in a classroom listening to a volunteer" },
    sections: [
      [
        "India’s classrooms reflect the country’s incredible linguistic diversity. Yet for many students, the language spoken at school is different from the one they speak at home. What should actually bring students together can instead become an unexpected barrier to learning, making it harder for students to understand lessons, participate confidently, and fully engage with their education.",
        "India is home to hundreds of languages with 22 officially recognised languages. This diversity is one of the country’s greatest strengths and also presents a challenge within classrooms where students and teachers may not always share the same first language.",
        "For a child, learning a new concept is already a process of discovery. Having to simultaneously navigate an unfamiliar language can make that process even more difficult. Students may understand an idea but struggle to express it, hesitate to ask questions, or gradually become less confident in the classroom.",
        "The effects can extend beyond academics. When students feel that their language is not valued or understood, they may feel disconnected from their learning environment and the people around them in the same environment. Over time, this can affect  participation, confidence and their sense of belonging at school.",
        "Classrooms can make space for multilingual learning through bilingual teaching, familiar examples, visual resources and opportunities for students to use their home languages alongside the language of instruction.",
        "Language should never determine how far a child can go in their education. A classroom becomes truly inclusive when every student can understand, participate and be heard  regardless of the language they speak at home.",
      ],
    ],
  },
  {
    slug: "why-play-is-not-a-waste-of-time",
    title: "Why play is not a waste of time?",
    image: { src: "/gallery/full/dsc07426.webp", alt: "Volunteers and children gathered outdoors under the trees" },
    verse: [
      "What is this life, if full of care,",
      "We have no time to stand and stare,",
      "No time to stand beneath the boughs",
      "And stare as long as the sheep or cows",
    ],
    sections: [
      [
        "It's a summer evening, the sky is colored with an orange hue making even the dust outside seem golden. The milk is still hot from the stove but I’m gulping it anyway, promising my mom that I’ll do my homework later before running off to play with my friends in the colony.",
        "This is one of many evenings which we have all experienced in our life and taught us something we’ve all forgotten.",
      ],
      [
        "Our life has always been run with priorities– education, job, marriage, taxes and list goes on.",
        "The poets and philosophers have talked about slowing down, taking our time and finding peace in leisure yet the world today seems unyielding in its neverending race for more.",
        "More money, more milestones to hit, more expectations– so we’ve neglected our time to just forget and enjoy.",
      ],
      [
        "Yes, the evenings filled with play were aimless and weren't “productive”, yet the real lessons of life came from just that- how to lose, how to work in a team, how to negotiate and most importantly how to be present in the moment.",
        "We didn’t get work done, but that one hour of play did more for us than the rest of the day.",
      ],
      [
        "So before stopping yourself or others to work rather than play, remember the sky doesn’t remain orange for long. There is always time to get work done but there is no turning back a mind that forgot to rest.",
      ],
    ],
  },
];
