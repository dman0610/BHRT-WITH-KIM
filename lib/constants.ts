// ─── Navigation ─────────────────────────────────────────────
// FAQ took the slot Testimonials held. Seven items plus a CTA is already
// crowded on mobile, and /faq answers real pre-booking questions while
// /testimonials is four unattributed quotes. Testimonials remains reachable
// from the footer.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // Symptom pages carry the search volume for this practice — women search
  // their symptoms, not the treatment name. Before this they were reachable
  // only from the footer and the homepage chips.
  { label: "Symptoms", href: "/symptoms" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Symptoms ───────────────────────────────────────────────
/**
 * The homepage "Recognize Any of These?" chips.
 *
 * Every chip MUST point at the page that answers it. Until Phase 7 all six
 * linked to `/services`, so clicking "Brain Fog" landed on a services list
 * instead of the brain fog page — the single largest relevance leak on the
 * site, and the reason six carefully written symptom pages went unread.
 *
 * Six chips, not ten. The row stays one clean line on desktop and two on a
 * phone; the remaining topics live on /symptoms, which the section links to.
 * "Mood Changes" covers what used to be labelled "Anxiety" because the page
 * covers both and mood is the broader entry point.
 *
 * If a chip is added, it needs a real page. A chip pointing at a 404 is worse
 * than no chip — a verification script asserts this.
 */
export const SYMPTOMS = [
  { label: "Hot Flashes", icon: "flame", href: "/symptoms/hot-flashes-night-sweats" },
  { label: "Sleep Trouble", icon: "moon", href: "/symptoms/sleep-insomnia" },
  { label: "Fatigue", icon: "battery-low", href: "/symptoms/menopause-fatigue" },
  { label: "Brain Fog", icon: "cloud", href: "/symptoms/brain-fog-memory" },
  { label: "Mood Changes", icon: "brain", href: "/symptoms/mood-changes-anxiety" },
  { label: "Weight Changes", icon: "scale", href: "/symptoms/hormonal-weight-gain" },
] as const;

// ─── Mission Pillars ────────────────────────────────────────
export const MISSION_PILLARS = [
  {
    title: "Balance",
    description:
      "Restore hormonal balance as the foundation for everything else. When your hormones are in sync, your body can do what it was designed to do.",
    icon: "leaf",
  },
  {
    title: "Restore",
    description:
      "Reclaim your energy, sleep, and mood. With the right support, you can feel like yourself again — not a diminished version of who you used to be.",
    icon: "sun",
  },
  {
    title: "Thrive",
    description:
      "When you feel well, you show up fully — for your relationships, your purpose, and your goals. Women are a powerful force for good in this world.",
    icon: "heart",
  },
] as const;

// ─── Services ───────────────────────────────────────────────
export const SERVICES = [
  {
    id: "bhrt",
    title: "Bioidentical Hormone Therapy",
    shortTitle: "BHRT",
    description:
      "Personalized estrogen, progesterone, and testosterone balancing using bioidentical hormones that mirror your body's own chemistry. We start with comprehensive testing and tailor your protocol to your unique needs.",
    icon: "leaf",
    featured: true,
  },
  {
    id: "nutrition",
    title: "Nutrition & Hydration",
    shortTitle: "Nutrition",
    description:
      "Whole-food, anti-inflammatory dietary guidance designed to support hormonal balance from the inside out. Proper hydration and nutrient-dense eating are foundational to every protocol we build.",
    icon: "apple",
    featured: true,
  },
  {
    id: "stress",
    title: "Stress Reduction",
    shortTitle: "Stress Relief",
    description:
      "Increased focus on mindfulness, breathwork, spirituality and social connections help calm the nervous system. Chronic stress affects hormone balance — managing it is part of every plan we build.",
    icon: "wind",
    featured: true,
  },
  {
    id: "sleep",
    title: "Sleep Optimization",
    shortTitle: "Sleep",
    description:
      "Sleep protocols that address common causes of insomnia and restless nights. Quality sleep is when your body repairs, restores, and rebalances hormones.",
    icon: "moon",
    featured: true,
  },
  {
    id: "exercise",
    title: "Exercise & Movement",
    shortTitle: "Movement",
    description:
      "Cardiovascular fitness, strength training, and brain-oxygenating movement tailored to your energy levels and goals. The right exercise at the right intensity makes all the difference.",
    icon: "dumbbell",
    featured: false,
  },
  {
    id: "detox",
    title: "Detox Support",
    shortTitle: "Detox",
    description:
      "Support your body's natural elimination pathways through sweat, digestion, and reducing toxic exposure.",
    icon: "droplets",
    featured: false,
  },
  {
    id: "natural-remedies",
    title: "Natural Remedies",
    shortTitle: "Natural Remedies",
    description:
      "Herbs, targeted supplements, and outdoor time prescriptions that work alongside your body's natural healing processes. Nature provides powerful tools when you know how to use them.",
    icon: "flower",
    featured: false,
  },
  {
    id: "thyroid",
    title: "Thyroid Assessment",
    shortTitle: "Thyroid",
    description:
      // Kim 2026-08-12: adrenal removed — "I need to learn more about adrenal health."
      "Assessment of thyroid function — a system that profoundly impacts energy, weight, mood, and hormonal balance, and one whose symptoms overlap heavily with perimenopause.",
    icon: "activity",
    featured: false,
  },
  {
    id: "testing",
    title: "Comprehensive Testing",
    shortTitle: "Testing",
    description:
      // Kim 2026-08-12: mold and Lyme removed — "I don't do that yet."
      "Comprehensive hormone and thyroid panels, so decisions rest on what your levels actually show rather than on symptoms alone.",
    icon: "microscope",
    featured: false,
  },
] as const;

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);

// ─── Testimonials ───────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 9,
    quote:
      "Kim was professional but I also left feeling like she truly cared. She even followed up with me to see how things were going. I am grateful to find someone as great as Kim!",
    name: "Natalie K.",
    context: "",
    // The homepage quote. See FEATURED_TESTIMONIAL below.
    featured: true,
  },
  {
    id: 10,
    quote:
      "I was impressed by her ability to listen to the problems and take time to understand, treat, and teach.",
    name: "Allison G.",
    context: "",
    featured: false,
  },
  {
    id: 11,
    quote:
      "Kim is so thoughtful, patient, friendly and easy to work with. I can tell she truly cares! So grateful I found her!",
    name: "Alyssa C.",
    context: "",
    featured: false,
  },
  {
    id: 12,
    quote:
      "I rarely leave reviews, but Kim is that amazing. She is professional, kind, and personable. It's easy to tell that she truly wants you to feel better and enjoy a better quality of life.",
    name: "Beccah G.",
    context: "",
    featured: false,
  },
] as const;

/**
 * The one quote shown on the homepage.
 *
 * DERIVED from TESTIMONIALS rather than a second copy of the string. It was
 * previously duplicated by hand, which meant the same quote existed in two
 * places and could drift apart — and did appear twice to anyone visiting both
 * `/` and `/testimonials`. Flagged in docs/00-BUSINESS-FACTS.md.
 *
 * `/testimonials` renders the entries where `featured` is false, so across the
 * whole site each quote now appears exactly once. With only four testimonials
 * that is a visible trade — but repeating one of four makes the set look
 * thinner than it is, and real Google reviews are what replace these anyway.
 */
export const FEATURED_TESTIMONIAL =
  TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];

/** Everything not shown on the homepage — the /testimonials grid. */
export const UNFEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => !t.featured);

// ─── Quiz Questions ─────────────────────────────────────────
export interface QuizOption {
  label: string;
  value: string;
  score: number;
  serviceWeights: Record<string, number>;
  callout?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  description: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "sleep",
    question: "How would you describe your sleep?",
    description: "Think about a typical night over the past month.",
    options: [
      {
        label: "I sleep well and wake refreshed",
        value: "good",
        score: 1,
        serviceWeights: {},
      },
      {
        label: "It takes me a while to fall asleep",
        value: "falling-asleep",
        score: 2,
        serviceWeights: { sleep: 3, stress: 2, "natural-remedies": 1 },
      },
      {
        label: "I wake up frequently during the night",
        value: "waking",
        score: 3,
        serviceWeights: { sleep: 3, bhrt: 2, stress: 1 },
        callout: "Frequent night waking is commonly reported during perimenopause — estrogen and progesterone both play a role in regulating sleep. Sleep changes are one of the most common things women bring to a hormone evaluation.",
      },
      {
        label: "I rarely get more than 5 hours",
        value: "severe",
        score: 4,
        serviceWeights: { sleep: 4, bhrt: 3, "thyroid": 2 },
        callout: "Chronically short sleep isn't just fatigue — it disrupts cortisol, thyroid function, and your body's ability to regulate itself. This pattern deserves real attention.",
      },
    ],
  },
  {
    id: "energy",
    question: "How are your energy levels throughout the day?",
    description: "Consider your typical daily pattern.",
    options: [
      {
        label: "Steady energy all day",
        value: "steady",
        score: 1,
        serviceWeights: {},
      },
      {
        label: "I crash in the afternoon",
        value: "afternoon-crash",
        score: 2,
        serviceWeights: { nutrition: 3, "thyroid": 2, exercise: 1 },
      },
      {
        label: "I need caffeine just to function",
        value: "caffeine-dependent",
        score: 3,
        serviceWeights: {
          "thyroid": 3,
          nutrition: 2,
          sleep: 2,
        },
        callout: "Persistent reliance on caffeine is often worth evaluating alongside thyroid function, which is part of a comprehensive hormone workup.",
      },
      {
        label: "I'm exhausted no matter what I do",
        value: "exhausted",
        score: 4,
        serviceWeights: {
          "thyroid": 4,
          bhrt: 3,
          testing: 2,
        },
        callout: "Fatigue that doesn't resolve with rest is one of the clearest signals that your body needs more than lifestyle tweaks. This is worth a real look at your hormones and thyroid.",
      },
    ],
  },
  {
    id: "mood",
    question: "How would you describe your mood and mental clarity?",
    description: "Think about how you've felt emotionally over the past few weeks.",
    options: [
      {
        label: "I feel like myself — stable and clear",
        value: "stable",
        score: 1,
        serviceWeights: {},
      },
      {
        label: "I'm more irritable or anxious than usual",
        value: "anxious",
        score: 2,
        serviceWeights: { stress: 3, bhrt: 2, "natural-remedies": 1 },
      },
      {
        label: "Brain fog — I forget words and lose focus",
        value: "brain-fog",
        score: 3,
        serviceWeights: { bhrt: 3, nutrition: 2, "thyroid": 2 },
        callout: "Cognitive changes like word-finding difficulty are commonly reported during perimenopause, and estrogen's role in cognition is an active area of research.",
      },
      {
        label: "I feel like a completely different person",
        value: "severe",
        score: 4,
        serviceWeights: { bhrt: 4, testing: 3, stress: 2 },
        callout: "Feeling like a stranger in your own skin is one of the most distressing aspects of hormonal imbalance — and one of the most common things Kim hears. Finding the root cause changes everything.",
      },
    ],
  },
  {
    id: "physical",
    question: "Are you experiencing any of these physical symptoms?",
    description: "Select the option that best matches your experience.",
    options: [
      {
        label: "None of these",
        value: "none",
        score: 1,
        serviceWeights: {},
      },
      {
        label: "Joint pain or stiffness",
        value: "joint-pain",
        score: 2,
        serviceWeights: { bhrt: 2, exercise: 2, detox: 1 },
      },
      {
        label: "Unexplained weight changes",
        value: "weight",
        score: 3,
        serviceWeights: {
          "thyroid": 3,
          nutrition: 3,
          testing: 2,
        },
        callout: "Unexplained weight changes — especially around the midsection — are often tied to cortisol, insulin, or thyroid patterns rather than just diet. Testing can pinpoint exactly what's happening.",
      },
      {
        label: "Hot flashes or night sweats",
        value: "hot-flashes",
        score: 3,
        serviceWeights: { bhrt: 4, "natural-remedies": 2 },
        callout: "Hot flashes and night sweats are among the most commonly reported perimenopausal symptoms, and there are both lifestyle and hormonal approaches worth discussing with a provider.",
      },
    ],
  },
  {
    id: "health-practices",
    question: "What does your current wellness routine look like?",
    description: "Be honest — there's no wrong answer here.",
    options: [
      {
        label: "I exercise regularly and eat well",
        value: "active",
        score: 1,
        serviceWeights: {},
      },
      {
        label: "I try but can't stay consistent",
        value: "inconsistent",
        score: 2,
        serviceWeights: { stress: 2, nutrition: 2, exercise: 1 },
      },
      {
        label: "I've let self-care slide — life got busy",
        value: "minimal",
        score: 3,
        serviceWeights: { nutrition: 3, exercise: 3, sleep: 2, stress: 2 },
      },
      {
        label: "I don't know where to start anymore",
        value: "overwhelmed",
        score: 4,
        serviceWeights: {
          nutrition: 3,
          exercise: 2,
          stress: 3,
          sleep: 2,
        },
      },
    ],
  },
  {
    id: "interest",
    question: "What are you most interested in exploring?",
    description: "Choose the area that resonates most right now.",
    options: [
      {
        label: "Bioidentical hormone therapy (BHRT)",
        value: "bhrt",
        score: 0,
        serviceWeights: { bhrt: 5, testing: 2 },
      },
      {
        label: "Natural remedies and lifestyle changes",
        value: "natural",
        score: 0,
        serviceWeights: {
          "natural-remedies": 4,
          nutrition: 3,
          exercise: 2,
        },
      },
      {
        label: "Comprehensive testing to find what's really going on",
        value: "testing",
        score: 0,
        serviceWeights: { testing: 5, "thyroid": 3 },
      },
      {
        label: "All of the above — I want a full plan",
        value: "all",
        score: 0,
        serviceWeights: {
          bhrt: 3,
          nutrition: 2,
          testing: 3,
          "natural-remedies": 2,
          stress: 1,
        },
      },
    ],
  },
  {
    id: "stage",
    question: "Where are you in your hormonal journey?",
    description: "This helps us understand which approaches may be most relevant.",
    options: [
      {
        label: "Peri-menopause (still having periods, but things are changing)",
        value: "peri",
        score: 0,
        serviceWeights: { bhrt: 2, stress: 2, "natural-remedies": 2 },
      },
      {
        label: "Post-menopause (periods have stopped for 12+ months)",
        value: "post",
        score: 0,
        serviceWeights: { bhrt: 3, exercise: 2, nutrition: 2 },
      },
      {
        label: "I'm not sure where I am",
        value: "unsure",
        score: 0,
        serviceWeights: { testing: 3, bhrt: 2 },
      },
      {
        label: "I'm earlier in my journey but already noticing changes",
        value: "early",
        score: 0,
        serviceWeights: {
          "natural-remedies": 3,
          nutrition: 2,
          stress: 2,
        },
      },
    ],
  },
];

// ─── Quiz Results Helpers ───────────────────────────────────
export function calculateQuizResults(
  answers: Record<string, string>
): { serviceId: string; score: number }[] {
  const scores: Record<string, number> = {};

  for (const [questionId, selectedValue] of Object.entries(answers)) {
    const question = QUIZ_QUESTIONS.find((q) => q.id === questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.value === selectedValue);
    if (!option) continue;

    for (const [serviceId, weight] of Object.entries(option.serviceWeights)) {
      scores[serviceId] = (scores[serviceId] || 0) + weight;
    }
  }

  return Object.entries(scores)
    .map(([serviceId, score]) => ({ serviceId, score }))
    .sort((a, b) => b.score - a.score);
}

export function getOverallSeverity(
  answers: Record<string, string>
): "thriving" | "mild" | "moderate" | "significant" | "severe" {
  let total = 0;
  let count = 0;

  for (const [questionId, selectedValue] of Object.entries(answers)) {
    const question = QUIZ_QUESTIONS.find((q) => q.id === questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.value === selectedValue);
    if (!option || option.score === 0) continue;
    total += option.score;
    count++;
  }

  if (count === 0) return "mild";
  const avg = total / count;
  if (avg === 1.0) return "thriving";
  if (avg <= 1.8) return "mild";
  if (avg <= 2.4) return "moderate";
  if (avg <= 3.1) return "significant";
  return "severe";
}

export function getSymptomCallouts(answers: Record<string, string>): string[] {
  const callouts: string[] = [];
  const symptomQuestions = ["sleep", "energy", "mood", "physical"];

  for (const questionId of symptomQuestions) {
    const selectedValue = answers[questionId];
    if (!selectedValue) continue;
    const question = QUIZ_QUESTIONS.find((q) => q.id === questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.value === selectedValue);
    if (option?.callout) callouts.push(option.callout);
  }

  return callouts.slice(0, 2);
}

export const SEVERITY_MESSAGES: Record<
  string,
  { headline: string; body: string; cta: string }
> = {
  thriving: {
    headline: "You're Genuinely Thriving",
    body: "Every marker you shared points to a body and mind working in harmony. That's not common — and it's worth protecting. Hormonal health shifts gradually, and knowing your baseline now makes it much easier to stay ahead of changes as they come.",
    cta: "Kim loves talking with women who are feeling great — understanding where you are today makes navigating future changes so much easier. No agenda, just a conversation.",
  },
  mild: {
    headline: "You're in a Good Place — With Room to Optimize",
    body: "You're doing well overall, with a few areas where you've noticed things aren't quite right. These early signals are worth paying attention to — small, targeted adjustments at this stage can make a meaningful difference in how you feel over the next few years.",
    cta: "A short conversation with Kim can help clarify whether what you're noticing is worth addressing now or just something to keep an eye on. No pressure — she genuinely enjoys these conversations.",
  },
  moderate: {
    headline: "Your Body Is Sending Early Signals",
    body: "You're experiencing real, noticeable symptoms that are affecting your daily life in small but meaningful ways. These are exactly the kinds of patterns that respond well to a thoughtful, holistic approach — and getting ahead of them now is far easier than waiting.",
    cta: "Kim would love to walk you through your responses and what your options look like. A first conversation is mostly about understanding your history and what you've been noticing.",
  },
  significant: {
    headline: "Your Body Is Ready for Real Support",
    body: "Your answers point to patterns that are affecting your quality of life — sleep, energy, mood, or physical symptoms. Many women are told this is just 'getting older.' These patterns often have identifiable causes worth investigating.",
    cta: "This is exactly what Kim specializes in. She'd love to look at the full picture with you and help you understand what's actually happening and what's possible.",
  },
  severe: {
    headline: "You Deserve to Feel Like Yourself Again",
    body: "The symptoms you're describing are significant — and they're not things you should have to white-knuckle through. What you're experiencing is real, and it's worth discussing with a provider who works in this area specifically. You don't have to figure this out alone.",
    cta: "These are the conversations Kim has most often. A free consultation is a chance to look at the full picture together — it costs nothing.",
  },
};

export const QUIZ_DISCLAIMER =
  "This assessment is not a medical diagnosis. It is an educational starting point designed to help you identify patterns and start a conversation. The questions and insights were developed through current research in women's hormonal health and reviewed by Kim personally. Always consult a qualified healthcare provider before making changes to your health regimen.";

// ─── Blog / Resources ───────────────────────────────────────
export type BlogCategory = "Hormones" | "Nutrition" | "Lifestyle" | "Detox";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Hormones",
  "Nutrition",
  "Lifestyle",
  "Detox",
];

/* TODO: Replace placeholder articles with real content from Kim */
export const BLOG_POSTS = [
  {
    id: "understanding-bhrt",
    title: "Understanding Bioidentical Hormones: What They Are and Why They Matter",
    preview:
      "Bioidentical hormones are molecularly identical to the hormones your body produces naturally. Here's what that means for your health — and why it's different from conventional HRT.",
    category: "Hormones" as BlogCategory,
    date: "2026-03-15",
    readTime: "6 min read",
  },
  {
    id: "anti-inflammatory-eating",
    title: "The Anti-Inflammatory Plate: Eating for Hormonal Balance",
    preview:
      "What you eat directly impacts your hormone levels. Learn which foods support balance and which ones may be making your symptoms worse.",
    category: "Nutrition" as BlogCategory,
    date: "2026-03-08",
    readTime: "5 min read",
  },
  {
    id: "sleep-hormones",
    title: "Why Sleep Is the Most Underrated Hormone Therapy",
    preview:
      "During deep sleep, your body produces and regulates key hormones. If you're not sleeping well, everything else you're doing for your health is fighting an uphill battle.",
    category: "Lifestyle" as BlogCategory,
    date: "2026-02-28",
    readTime: "7 min read",
  },
  {
    id: "endocrine-disruptors",
    title: "Hidden Hormone Disruptors in Your Home (And Simple Swaps)",
    preview:
      "From plastics to cleaning products, everyday items can interfere with your endocrine system. Here are the biggest culprits and easy replacements.",
    category: "Detox" as BlogCategory,
    date: "2026-02-20",
    readTime: "4 min read",
  },
  {
    id: "perimenopause-signs",
    title: "7 Early Signs of Peri-Menopause You Shouldn't Ignore",
    preview:
      "Peri-menopause can start years before your periods stop. These are the subtle signals your body sends when hormones begin shifting — and what to do about them.",
    category: "Hormones" as BlogCategory,
    date: "2026-02-12",
    readTime: "5 min read",
  },
] as const;

// ─── Contact Form Options ───────────────────────────────────
export const CONTACT_SYMPTOMS = [
  "Insomnia",
  "Anxiety",
  "Brain Fog",
  "Joint Pain",
  "Fatigue",
  "Weight Gain",
  "Hot Flashes",
  "Other",
] as const;

export const CONTACT_METHODS = ["Email", "Phone", "Either"] as const;

/**
 * "How did you hear about Kim?" — the attribution question.
 *
 * Unglamorous and self-reported, and still the most reliable attribution
 * available to a practice this size. Bookings complete inside a cross-origin
 * Healthie iframe that exposes no completion event, so no amount of pixel work
 * can see them. This question is the only thing that catches phone calls,
 * word-of-mouth referrals, the print flyer, and direct traffic — the channels
 * that are otherwise entirely invisible.
 *
 * Keep the list short. A long list depresses completion and the extra
 * granularity is not actionable at this volume. See docs/07-TRACKING.md.
 */
export const HEAR_ABOUT_OPTIONS = [
  "Google search",
  "Facebook or Instagram",
  "Friend or family",
  "Flyer or event",
  "Another website",
  "Other",
] as const;

// ─── Footer ─────────────────────────────────────────────────
// Contact details deliberately live in lib/site.ts, not here — one source of
// truth for every business fact. See docs/00-BUSINESS-FACTS.md.
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Kim", href: "/about" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Book a Free Call", href: "/book" },
    { label: "FAQ", href: "/faq" },
    { label: "Health Quiz", href: "/quiz" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  // Content pages aren't in the nav (already crowded), so the footer is their
  // main internal-link surface. Descriptive labels, not "learn more".
  learnLinks: [
    { label: "Perimenopause symptoms", href: "/symptoms" },
    { label: "What BHRT costs in Utah", href: "/bhrt-cost-utah" },
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "Choosing a hormone provider", href: "/find-a-hormone-provider" },
    { label: "Utah service areas", href: "/service-areas" },
    { label: "Articles", href: "/resources" },
  ],
} as const;

// ─── Values (About Page) ───────────────────────────────────
export const VALUES = [
  {
    title: "Empowerment",
    description: "Women are a powerful force for good — and that starts with feeling well.",
    icon: "sparkles",
  },
  {
    title: "Holistic Health",
    description: "Body, mind, spirit, and community. We treat the whole person, not just symptoms.",
    icon: "heart",
  },
  {
    title: "Natural First",
    description: "Support your body before overriding it. Lifestyle and nutrition come first.",
    icon: "leaf",
  },
  {
    title: "Education",
    description: "Informed women make empowered choices. We explain the science in plain language.",
    icon: "book-open",
  },
  {
    title: "Community",
    description: "Healing happens together. You're joining a community of women who lift each other up.",
    icon: "users",
  },
  {
    title: "Deep Testing",
    description: "We don't guess — we test. Comprehensive diagnostics before any treatment plan.",
    icon: "microscope",
  },
] as const;
