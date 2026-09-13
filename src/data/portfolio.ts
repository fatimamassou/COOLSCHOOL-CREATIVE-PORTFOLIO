// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT
// Every image URL below is a generic placeholder (picsum.photos, seeded for
// consistency). Swap each `image` / `images` field for real, approved
// CoolSchool photography before shipping. Search "TODO: replace" to find
// every spot that expects a real asset.
// ---------------------------------------------------------------------------

export type PortfolioCategory =
  | "Photography"
  | "Video"
  | "Social Media"
  | "Campaigns"
  | "Events"
  | "Design";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  tags: PortfolioCategory[];
  year: string;
  description: string;
  objective: string;
  idea: string;
  execution: string;
  result: string;
  image: string; // TODO: replace with real asset
  images: string[]; // TODO: replace with real assets
  type: "photo" | "video" | "social" | "campaign";
  size: "sm" | "md" | "lg" | "wide" | "tall";
};

const img = (seed: string, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "back-to-school",
    title: "Back to School Campaign",
    category: "Campaigns",
    tags: ["Campaigns", "Social Media", "Photography"],
    year: "2026",
    description:
      "A two-week visual campaign welcoming students back, told through lockers, first hellos and fresh notebooks.",
    objective:
      "Build excitement for the new term and give incoming families a warm first impression of CoolSchool online.",
    idea:
      "Frame the first week through small, specific details — a name tag, a new pencil case — instead of generic wide shots.",
    execution:
      "Shot over three mornings across two campuses, edited into a nine-post grid with two accompanying Reels.",
    result:
      "The campaign's opening post became one of the term's most-saved pieces of content on the school account.",
    image: img("cs-b2s-1", 900, 1100),
    images: [img("cs-b2s-1", 1200, 1500), img("cs-b2s-2", 1200, 1500), img("cs-b2s-3", 1200, 900)],
    type: "campaign",
    size: "lg",
  },
  {
    id: "school-event-recap",
    title: "Spring Fair Recap",
    category: "Events",
    tags: ["Events", "Photography", "Video"],
    year: "2026",
    description: "A same-day recap film and photo set from CoolSchool's annual Spring Fair.",
    objective: "Capture the full arc of the day for families who couldn't attend in person.",
    idea: "Treat the fair like a short documentary — open wide, close on faces.",
    execution: "Two cameras running all day, a 45-second recap cut and delivered before bedtime.",
    result: "The recap reel outperformed every other video posted that month.",
    image: img("cs-fair-1", 800, 1000),
    images: [img("cs-fair-1", 1200, 1500), img("cs-fair-2", 1200, 900)],
    type: "video",
    size: "md",
  },
  {
    id: "instagram-visual-series",
    title: "Instagram Visual Series",
    category: "Design",
    tags: ["Design", "Social Media"],
    year: "2025",
    description: "A modular grid system built so any teacher can drop in content without breaking the feed's rhythm.",
    objective: "Give CoolSchool's Instagram a consistent, recognisable look across many contributors.",
    idea: "Design five reusable templates instead of one-off posts, so the feed stays coherent at scale.",
    execution: "Built in five color-coded template families with clear usage notes for staff.",
    result: "Adopted school-wide; posting time for staff dropped by roughly half.",
    image: img("cs-grid-1", 800, 800),
    images: [img("cs-grid-1", 1200, 1200), img("cs-grid-2", 1200, 1200)],
    type: "social",
    size: "sm",
  },
  {
    id: "school-life",
    title: "School Life",
    category: "Photography",
    tags: ["Photography"],
    year: "2025",
    description: "An ongoing series documenting the small, unposed moments between classes.",
    objective: "Show the texture of an ordinary day, not just the highlight moments.",
    idea: "Shoot candidly, in passing, without staging — the corridor over the classroom.",
    execution: "Carried a camera for a full week and edited down to a set of twelve stills.",
    result: "Became the most reused image set for newsletters and print materials.",
    image: img("cs-life-1", 800, 1000),
    images: [img("cs-life-1", 1200, 1500), img("cs-life-2", 1200, 900), img("cs-life-3", 1200, 1500)],
    type: "photo",
    size: "tall",
  },
  {
    id: "creative-reels",
    title: "Creative Reels",
    category: "Video",
    tags: ["Video", "Social Media"],
    year: "2025",
    description: "A run of short-form Reels built around small transitions and classroom sound.",
    objective: "Grow watch-time on Instagram without losing the school's warm, unpolished tone.",
    idea: "Use in-classroom audio instead of trending tracks, so it still sounds like CoolSchool.",
    execution: "Filmed and cut on a phone, six Reels published over one month.",
    result: "Average watch time roughly doubled compared to the account's prior quarter.",
    image: img("cs-reels-1", 800, 1000),
    images: [img("cs-reels-1", 1200, 1500), img("cs-reels-2", 1200, 1500)],
    type: "video",
    size: "md",
  },
  {
    id: "open-day",
    title: "Open Day Campaign",
    category: "Campaigns",
    tags: ["Campaigns", "Events", "Photography"],
    year: "2024",
    description: "A campaign guiding prospective families from first ad to campus visit.",
    objective: "Convert social interest into Open Day attendance.",
    idea: "Let current students narrate the day in their own words, across stories and captions.",
    execution: "A five-post lead-up sequence plus a live story series on the day itself.",
    result: "Open Day sign-ups from social channels increased noticeably over the prior year.",
    image: img("cs-open-1", 900, 700),
    images: [img("cs-open-1", 1200, 900), img("cs-open-2", 1200, 900)],
    type: "campaign",
    size: "wide",
  },
  {
    id: "student-activities",
    title: "Student Activities",
    category: "Photography",
    tags: ["Photography", "Events"],
    year: "2024",
    description: "Coverage of after-school clubs, from robotics to choir rehearsal.",
    objective: "Give lesser-seen programs the same visual care as headline events.",
    idea: "Rotate through a different club each week rather than clustering around big events.",
    execution: "Fourteen weeks of short visits, one tight photo set per club.",
    result: "Several clubs reported a rise in sign-ups after their feature was posted.",
    image: img("cs-club-1", 800, 1000),
    images: [img("cs-club-1", 1200, 1500), img("cs-club-2", 1200, 1500)],
    type: "photo",
    size: "sm",
  },
  {
    id: "behind-the-scenes",
    title: "Behind the Scenes",
    category: "Social Media",
    tags: ["Social Media", "Design"],
    year: "2024",
    description: "A recurring segment pulling back the curtain on how each post actually gets made.",
    objective: "Make the school's content feel human and build trust with families.",
    idea: "Show the messy middle — the retakes, the notes app captions — not just the final post.",
    execution: "A biweekly story series filmed in one take, minimal editing.",
    result: "Became one of the account's most-replied-to recurring formats.",
    image: img("cs-bts-1", 800, 1000),
    images: [img("cs-bts-1", 1200, 1500), img("cs-bts-2", 1200, 900)],
    type: "social",
    size: "md",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Observe", description: "Find the story hiding in an ordinary day." },
  { number: "02", title: "Imagine", description: "Sketch the concept before picking up a camera." },
  { number: "03", title: "Capture", description: "Shoot the photo or record the video, on location." },
  { number: "04", title: "Edit", description: "Shape the raw footage into a visual story." },
  { number: "05", title: "Share", description: "Publish it and see how the school responds." },
];

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Photography",
    description: "School events, portraits, activities, celebrations, classroom moments and everyday school life.",
  },
  {
    number: "02",
    title: "Video & editing",
    description: "Reels, event recaps, short videos, transitions, cinematic clips and social media edits.",
  },
  {
    number: "03",
    title: "Social media",
    description: "Instagram posts, stories, reels, captions, content calendars and publishing.",
  },
  {
    number: "04",
    title: "Creative direction",
    description: "Ideas, concepts, visual themes, campaign concepts and creative storytelling.",
  },
  {
    number: "05",
    title: "Content planning",
    description: "Planning what to capture, when to publish and how to tell the story.",
  },
  {
    number: "06",
    title: "School life",
    description: "Transforming everyday school moments into engaging digital content.",
  },
];

export type SocialCard = {
  id: string;
  kind: "post" | "story" | "reel" | "announcement";
  label: string;
  caption: string;
  image: string; // TODO: replace with real asset
};

export const socialCards: SocialCard[] = [
  { id: "soc-1", kind: "post", label: "Instagram post", caption: "First day energy ✦", image: img("soc-1", 700, 700) },
  { id: "soc-2", kind: "story", label: "Instagram story", caption: "Behind the scenes at rehearsal", image: img("soc-2", 700, 1240) },
  { id: "soc-3", kind: "reel", label: "Reel cover", caption: "60 seconds of Spring Fair", image: img("soc-3", 700, 1240) },
  { id: "soc-4", kind: "announcement", label: "Event announcement", caption: "Open Day · March 14", image: img("soc-4", 700, 700) },
  { id: "soc-5", kind: "post", label: "Celebration post", caption: "Congratulations, Class of 2026", image: img("soc-5", 700, 700) },
  { id: "soc-6", kind: "post", label: "Educational content", caption: "Five minutes with the science club", image: img("soc-6", 700, 700) },
];

export type GalleryPhoto = {
  id: string;
  caption: string;
  image: string; // TODO: replace with real asset
  size: "lg" | "md" | "sm" | "tall" | "wide";
};

export const galleryPhotos: GalleryPhoto[] = [
  { id: "g1", caption: "Little moments.", image: img("gal-1", 1000, 1300), size: "lg" },
  { id: "g2", caption: "After the bell.", image: img("gal-2", 800, 800), size: "sm" },
  { id: "g3", caption: "Energy everywhere.", image: img("gal-3", 900, 700), size: "wide" },
  { id: "g4", caption: "Captured between classes.", image: img("gal-4", 800, 1100), size: "tall" },
  { id: "g5", caption: "Quiet before the show.", image: img("gal-5", 800, 800), size: "sm" },
  { id: "g6", caption: "Still learning the light.", image: img("gal-6", 900, 1200), size: "md" },
];
