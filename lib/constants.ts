// ─── Navigation ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Symptoms ───────────────────────────────────────────────
export const SYMPTOMS = [
  { label: "Insomnia", icon: "moon" },
  { label: "Anxiety", icon: "brain" },
  { label: "Brain Fog", icon: "cloud" },
  { label: "Joint Pain", icon: "bone" },
  { label: "Fatigue", icon: "battery-low" },
  { label: "Weight Gain", icon: "scale" },
] as const;

// ─── Mission Pillars ────────────────────────────────────────
export const MISSION_PILLARS = [
  {
    title: "Live Vibrantly",
    description:
      "Reclaim the energy and vitality that lets you wake up excited about your day. Your body has the capacity to thrive — it just needs the right support.",
    icon: "sun",
  },
  {
    title: "Nurture Relationships",
    description:
      "When you feel your best, you show up fully for the people you love. Balanced hormones mean steadier moods, deeper sleep, and more presence.",
    icon: "heart",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Women are a powerful force for good in this world. Health is the foundation for accomplishing the personal goals that bring light and joy to others.",
    icon: "target",
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
      "Meditation, breathwork, yoga, and social connection strategies to calm your nervous system. Chronic stress disrupts every hormone in your body — managing it is non-negotiable.",
    icon: "wind",
    featured: true,
  },
  {
    id: "sleep",
    title: "Sleep Optimization",
    shortTitle: "Sleep",
    description:
      "Evidence-based 8-hour sleep protocols that address the root causes of insomnia and restless nights. Quality sleep is when your body repairs, restores, and rebalances hormones.",
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
      "Support your body's natural elimination pathways through sweat, digestion, and reducing toxic exposure. Modern life exposes us to endocrine disruptors — we help you minimize the load.",
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
    id: "thyroid-adrenal",
    title: "Thyroid & Adrenal Health",
    shortTitle: "Thyroid & Adrenal",
    description:
      "Deep functional testing and assessment of thyroid and adrenal function — two systems that profoundly impact energy, weight, mood, and hormonal balance.",
    icon: "activity",
    featured: false,
  },
  {
    id: "testing",
    title: "Comprehensive Testing",
    shortTitle: "Testing",
    description:
      "Thorough diagnostic work that goes beyond standard panels — ruling out mold exposure, Lyme disease, and other underlying conditions that mimic or worsen hormonal symptoms.",
    icon: "microscope",
    featured: false,
  },
] as const;

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);

// ─── Testimonials ───────────────────────────────────────────
/* TODO: Replace all placeholder testimonials with real client quotes from Kim */
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I was running on fumes for years — exhausted, anxious, and barely recognizing myself. After working with Kim, I finally feel like me again. My sleep is back, my mind is clear, and I have energy I haven't felt in a decade.",
    name: "Sarah M.",
    context: "Age 52, post-menopause",
    featured: true,
  },
  {
    id: 2,
    quote:
      "Kim doesn't just treat symptoms — she listened to my whole story and helped me understand why my body was struggling. The holistic approach changed everything for me.",
    name: "Jennifer L.",
    context: "Age 47, peri-menopause",
    featured: false,
  },
  {
    id: 3,
    quote:
      "I was told 'it's just your age' by three different doctors. Kim was the first person who said 'let's actually look at what's going on.' The comprehensive testing found issues no one else caught.",
    name: "Maria R.",
    context: "Age 55, post-menopause",
    featured: false,
  },
  {
    id: 4,
    quote:
      "The brain fog was the worst part. I couldn't focus at work, forgot words mid-sentence. Within two months of Kim's protocol, I felt sharp again. It was life-changing.",
    name: "Linda K.",
    context: "Age 49, peri-menopause",
    featured: false,
  },
  {
    id: 5,
    quote:
      "I love that Kim's approach isn't just about hormones. She helped me overhaul my sleep, my diet, my stress management — the whole picture. I feel stronger and more balanced than I have in years.",
    name: "Patricia W.",
    context: "Age 58, post-menopause",
    featured: false,
  },
  {
    id: 6,
    quote:
      "As a busy mom and business owner, I was putting everyone else first and running myself into the ground. Kim helped me see that taking care of my health wasn't selfish — it was essential.",
    name: "Amanda T.",
    context: "Age 44, peri-menopause",
    featured: false,
  },
  {
    id: 7,
    quote:
      "The weight gain felt unstoppable no matter what I tried. Kim's testing revealed thyroid and adrenal issues that were the real culprits. Finally, answers — and a plan that actually works.",
    name: "Christine B.",
    context: "Age 51, post-menopause",
    featured: false,
  },
  {
    id: 8,
    quote:
      "I went from dreading each day to looking forward to it. Kim gave me hope when I thought feeling awful was just my new normal. It doesn't have to be.",
    name: "Diane F.",
    context: "Age 53, post-menopause",
    featured: false,
  },
] as const;

export const FEATURED_TESTIMONIAL = TESTIMONIALS.find((t) => t.featured)!;

// ─── Quiz Questions ─────────────────────────────────────────
export interface QuizOption {
  label: string;
  value: string;
  score: number;
  serviceWeights: Record<string, number>;
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
      },
      {
        label: "I rarely get more than 5 hours",
        value: "severe",
        score: 4,
        serviceWeights: { sleep: 4, bhrt: 3, "thyroid-adrenal": 2 },
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
        serviceWeights: { nutrition: 3, "thyroid-adrenal": 2, exercise: 1 },
      },
      {
        label: "I need caffeine just to function",
        value: "caffeine-dependent",
        score: 3,
        serviceWeights: {
          "thyroid-adrenal": 3,
          nutrition: 2,
          sleep: 2,
        },
      },
      {
        label: "I'm exhausted no matter what I do",
        value: "exhausted",
        score: 4,
        serviceWeights: {
          "thyroid-adrenal": 4,
          bhrt: 3,
          testing: 2,
        },
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
        serviceWeights: { bhrt: 3, nutrition: 2, "thyroid-adrenal": 2 },
      },
      {
        label: "I feel like a completely different person",
        value: "severe",
        score: 4,
        serviceWeights: { bhrt: 4, testing: 3, stress: 2 },
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
          "thyroid-adrenal": 3,
          nutrition: 3,
          testing: 2,
        },
      },
      {
        label: "Hot flashes or night sweats",
        value: "hot-flashes",
        score: 3,
        serviceWeights: { bhrt: 4, "natural-remedies": 2 },
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
        serviceWeights: { testing: 5, "thyroid-adrenal": 3 },
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

export function getOverallSeverity(answers: Record<string, string>): string {
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

  const avg = count > 0 ? total / count : 0;
  if (avg <= 1.5) return "mild";
  if (avg <= 2.5) return "moderate";
  return "significant";
}

export const SEVERITY_MESSAGES: Record<string, { headline: string; body: string }> = {
  mild: {
    headline: "You're On a Strong Foundation",
    body: "Your symptoms are mild, but that doesn't mean you have to accept them. Small, targeted changes can help you feel even better and prevent future imbalances.",
  },
  moderate: {
    headline: "Your Body Is Asking for Support",
    body: "You're experiencing real symptoms that are affecting your daily life. The good news? These are exactly the kinds of challenges that respond well to a holistic approach.",
  },
  significant: {
    headline: "You Deserve to Feel Like Yourself Again",
    body: "What you're experiencing is significant — and it's not just 'your age.' Your body is sending clear signals that it needs targeted support. We can help you find the root causes and build a plan that works.",
  },
};

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

// ─── Footer ─────────────────────────────────────────────────
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Kim", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Health Quiz", href: "/quiz" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  contact: {
    email: "Kyadon300@gmail.com",
    phone: "(801) 573-0606",
    location: "Serving clients nationwide",
  },
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
