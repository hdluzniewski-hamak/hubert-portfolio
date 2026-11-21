/*
========================================================
EDIT PORTFOLIO HERE
Change / add / remove / reorder lines below.
Do not edit index.html to manage Film or Art.
========================================================
*/

window.PORTFOLIO_FILMS = [
  {
    slug: "odyseja",
    image: "film-01.webp",
    title: "ODYSEJA",
    meta: "Direction / AI short film",
    year: "2026",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "man-with-a-mask",
    image: "film-02.webp",
    title: "MAN WITH A MASK",
    meta: "Direction / AI short film",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "i-would-dance",
    image: "film-03.webp",
    title: "I WOULD DANCE",
    meta: "Direction / AI short film",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "planet-b",
    image: "film-04.webp",
    title: "PLANET B",
    meta: "Music video / Direction",
    year: "",
    description: "A concept-driven music video directed with a strong focus on visual storytelling and creative art direction. Created through a hybrid workflow combining generative AI with traditional editing, online finishing, and compositing in Adobe After Effects.",
    youtube: "TBQXugY_n5s",
    credits: [
      ["Artist", "Jaźnicka"],
      ["Concept, Direction, Animation", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "ai-future-asylum-decisions",
    image: "film-05.webp",
    title: "AI AND THE FUTURE OF ASYLUM DECISIONS",
    meta: "Direction / 2D animation",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "digital-visas-discriminations",
    image: "film-06.webp",
    title: "DIGITAL VISAS AND DISCRIMINATIONS",
    meta: "Direction / 2D animation",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "questions",
    image: "film-07.webp",
    title: "QUESTIONS",
    meta: "Direction / AI short film",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "suntago-crocodile-island",
    image: "film-08.webp",
    title: "SUNTAGO - CROCODILE ISLAND",
    meta: "Direction / Commercial",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
  {
    slug: "dorothy-christmas-animation",
    image: "film-09.webp",
    title: "DOROTHY - CHRISTMAS ANIMATION",
    meta: "Direction / 2D animation",
    year: "",
    description: "",
    youtube: "",
    credits: [
      ["Direction", "Hubert Dłużniewski"]
    ],
    position: "center"
  }
  {
    slug: "planet-b",
    image: "film-10.webp",
    title: "OUT OF CONTROL",
    meta: "Music video / Direction",
    year: "",
    description: "A hybrid project combining 3D animation with live-action footage. The video was nominated for Berlin Video Music Awards 2022.",
    youtube: "3nZf5f63_UQ",
    credits: [
      ["Artist", "Jaźnicka"],
      ["Concept, Direction, Animation", "Hubert Dłużniewski"]
    ],
    position: "center"
  },
];

/*
========================================================
QUICK FILM EDITS — easiest place to change titles/captions/order

1. CAPTIONS: Change only the text after the colon in the list below.
   A caption appears under the film thumbnail and in the film details.
2. ORDER: Move the slug lines in FILM_ORDER up or down.
   Keep every slug once. A film missing from the list stays at the end.
3. THUMBNAILS / VIDEO / CREDITS: Edit the corresponding film object above.
========================================================
*/
window.PORTFOLIO_FILM_CAPTIONS = {
  "odyseja": "Direction / AI short film",
  "man-with-a-mask": "Direction / AI short film",
  "i-would-dance": "Direction / AI short film",
  "planet-b": "Music video / Direction",
  "ai-future-asylum-decisions": "Direction / 2D animation",
  "digital-visas-discriminations": "Direction / 2D animation",
  "questions": "Direction / AI short film",
  "suntago-crocodile-island": "Direction / Commercial",
  "dorothy-christmas-animation": "Direction / 2D animation"
};

window.PORTFOLIO_FILM_ORDER = [
  "odyseja",
  "man-with-a-mask",
  "i-would-dance",
  "planet-b",
  "ai-future-asylum-decisions",
  "digital-visas-discriminations",
  "questions",
  "suntago-crocodile-island",
  "dorothy-christmas-animation"
];

// Apply both sets of edits consistently across the homepage and film detail pages.
const filmOrder = new Map(window.PORTFOLIO_FILM_ORDER.map((slug, index) => [slug, index]));
window.PORTFOLIO_FILMS.forEach(film => {
  if (Object.prototype.hasOwnProperty.call(window.PORTFOLIO_FILM_CAPTIONS, film.slug)) {
    film.meta = window.PORTFOLIO_FILM_CAPTIONS[film.slug];
  }
});
window.PORTFOLIO_FILMS.sort((a, b) =>
  (filmOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
  (filmOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER)
);

window.PORTFOLIO_ART = [
  { image: "art-01.webp", title: "UNTITLED 01", medium: "Oil on canvas, 50 x 70 cm" },
  { image: "art-02.webp", title: "UNTITLED 02", medium: "Oil on canvas, 50 x 70 cm" },
  { image: "art-03.webp", title: "UNTITLED 03", medium: "Oil on canvas, 50 x 70 cm" },
  { image: "art-04.webp", title: "UNTITLED 04", medium: "Digital painting" },
  { image: "art-05.webp", title: "UNTITLED 05", medium: "Oil on canvas, 50 x 70 cm" },
  { image: "art-06.webp", title: "UNTITLED 06", medium: "Ink on paper" },
  { image: "art-07.webp", title: "UNTITLED 07", medium: "Oil on canvas, 50 x 70 cm" },
  { image: "art-08.webp", title: "UNTITLED 08", medium: "Pencil on paper" },
  { image: "art-09.webp", title: "UNTITLED 09", medium: "Digital painting" }
  { image: "art-10.webp", title: "UNTITLED 10", medium: "Digital painting" }
];

window.PORTFOLIO_SHOWREELS = [
  {
    slug: "directing",
    image: "directing.webp",
    title: "DIRECTING",
    description: "Short films, commercials, music videos and visual storytelling.",
    youtube: "",
    credits: [
      ["Showreel", "Directing"]
    ]
  },
  {
    slug: "animation",
    image: "animation.webp",
    title: "ANIMATION",
    description: "2D animation, motion design and character-driven work.",
    youtube: "",
    credits: [
      ["Showreel", "Animation"]
    ]
  },
  {
    slug: "vfx-online",
    image: "online.webp",
    title: "VFX / ONLINE",
    description: "Compositing, online finishing and visual effects work.",
    youtube: "",
    credits: [
      ["Showreel", "VFX / Online"]
    ]
  }
];

